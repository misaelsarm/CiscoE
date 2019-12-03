import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  username: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
  ) {}

  ngOnInit() {}

  async register() {
    const { username, password, cpassword } = this;
    if (password !== cpassword) {
      this.showAlert("¡Error!", "Las contraseñas no coinciden");
      return console.error("Las contraseñas no coinciden");
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(
        username,
        password
      );
      console.log(res);
      this.showAlert("Exito", "¡Bienvenido!");
      this.router.navigate(["/tabs/home"]);
    } catch (error) {
      console.dir(error);
      this.showAlert("Error", error.message);
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
