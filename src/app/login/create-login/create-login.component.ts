import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { MatDialogRef } from "@angular/material/dialog";
import { HttpErrorResponse } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: "my-create-login",
  templateUrl: "./create-login.component.html",
  styleUrls: ["./create-login.component.scss"],
})
export class CreateLoginComponent implements OnInit {
  public formLogin!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private auth: AuthenticationService,
    public dialogRef: MatDialogRef<CreateLoginComponent>,
    private angularFirestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  async createLogin() {
    const novoUser = this.formLogin.getRawValue();

    try {
      // promise -> then, catch, finally
      // async await -> ESPERA algo acontecer pra depois seguir o código
      // quando se trata de observable é outros 500... tem que fazer subscribe
      const dadosUsuario = await this.auth.SignUp(novoUser);

      this.angularFirestore.collection("users").doc(dadosUsuario.user.uid).set({
        email: novoUser.email,
        nome: "nome teste",
        links: [],
        corTextoBotao: "#333",
        corTextoPagina: "#f3f5f8",
        corFundoPagina: "#f6bb00",
        corBotao: "#002255",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      });

      this.dialogRef.close(true);
      this.formLogin.reset();
    } catch (error) {
      this.toast.error("Erro ao cadastrar", "Erro!");
    }
  }
  cancelar(): void {
    this.dialogRef.close();
  }
}
