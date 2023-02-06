import { ToastrService } from "ngx-toastr";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Usuario } from "../../login/usuario";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(
    private router: Router,
    private toast: ToastrService,
    public afAuth: AngularFireAuth
  ) {}

  SignUp(newUser: Usuario) {
    return this.afAuth.createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    );
  }

  SignIn(newUser: Usuario) {
    return this.afAuth.signInWithEmailAndPassword(
      newUser.email,
      newUser.password
    );
  }
}
