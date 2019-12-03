import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
  ) {}

  ngOnInit() {}

  async login() {
    const { username, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(
        username,
        password
      );

      this.showAlert("CiscoE", "¡Bienvenido!");
      this.router.navigate(["/tabs/home"]);
    } catch (err) {
      this.showAlert("¡Error!", err.message);

      if (err.code === "auth/user-not-found") {
        console.log("El usuario no existe");
        this.showAlert("¡Error!", "El usuario no existe");
      }
    }
  }
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Aceptar"]
    });

    await alert.present();
  }
}
