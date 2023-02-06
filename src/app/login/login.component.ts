import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario } from "./usuario";
import { CreateLoginComponent } from "./create-login/create-login.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthenticationService } from "../shared/services/authentication.service";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: "my-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  formLogin: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private readonly fb: FormBuilder,
    public dialog: MatDialog,
    private angularFirestore: AngularFirestore
  ) {
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  creatNewUser(): void {
    const dialogRef = this.dialog.open(CreateLoginComponent, {
      width: "550px ",
      height: "400px",
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  login(): void {
    const formLogind = this.formLogin.getRawValue();
    this.authService.SignIn(formLogind).then((response) => {
      console.log(response);

      this.angularFirestore
        .collection("users")
        .doc(response.user.uid)
        /*
        quando atualizar ou adicionar um link ->
        .update({...dadosUsuario, links: linksAtaulizados})
        linksAtualizados -> possui o novo link OU possui o link que a pessoa editou ou passa SEM o link que a pessoa deletou
        */
        .get()
        .toPromise()
        .then((res) => {
          console.log(
            res.data()
          ); /*salvar dados do usuário no localstorage pra pegar fácil*/
        });

      this.router.navigate(["/home"]);
    });
  }
}
