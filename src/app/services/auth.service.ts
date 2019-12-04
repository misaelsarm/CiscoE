import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private Auth: AngularFireAuth) {}

  loginUserEmail(username: string, password: string) {
    this.Auth.auth.signInWithEmailAndPassword(username, password);
  }

  logout(){
    this.Auth.auth.signOut().then(()=>{
      console.log("Esperamos verte pronto");
    }).catch(err => console.log(err.message))
  }
}
