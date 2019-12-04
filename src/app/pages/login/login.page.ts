import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public username: string;
  private password: string;

  constructor(
    private authService: AuthService,
    public alert: AlertController,
    public router: Router
  ) {}

  ngOnInit() {}

  login() {
    try {
      this.authService.loginUserEmail(this.username, this.password);

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
