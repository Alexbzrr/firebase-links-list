import { ToastrService } from "ngx-toastr";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../shared/services/authentication.service";
import { MatDialogRef } from "@angular/material/dialog";
import { HttpErrorResponse } from "@angular/common/http";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: "my-create-login",
  templateUrl: "./create-login.component.html",
  styleUrls: ["./create-login.component.scss"],
})
export class CreateLoginComponent implements OnInit {
  public formCadUser!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private auth: AuthenticationService,
    public dialogRef: MatDialogRef<CreateLoginComponent>,
    private angularFirestore: AngularFirestore,
    private usersService: UserService
  ) {}

  ngOnInit() {
    this.formCadUser = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      nickName: ["", Validators.required],
      fullName: ["", Validators.required],
      phone: ["", Validators.required],
      document: ["", Validators.required],
    });
  }

  async createLogin() {
    const formData = {
      email: this.formCadUser.get("email").value,
      password: this.formCadUser.get("password").value,
      nickName: this.formCadUser.get("nickName").value,
      fullName: this.formCadUser.get("fullName").value,
      phone: this.formCadUser.get("phone").value,
      document: this.formCadUser.get("document").value,
    };
    try {
      // promise -> then, catch, finally
      // async await -> ESPERA algo acontecer pra depois seguir o código
      // quando se trata de observable é outros 500... tem que fazer subscribe
      await this.auth.SignUp(formData.email, formData.password).then((data) => {
        console.log(data);
        const uid = data.user.uid;
        const users = this.angularFirestore.collection("users");
        users.doc(uid).set({
          email: formData.email,
          nickName: formData.nickName,
          fullName: formData.fullName,
          phone: formData.phone,
          document: formData.document,
        });
      });

      // this.angularFirestore.collection("users").doc(dadosUsuario.user.uid).set({

      //nome: novoUser.nickname,
      //   sombrenome: novoUser.fullName,
      //   links: novoUser.links,
      // corTextoBotao: "#333",
      // corTextoPagina: "#f3f5f8",
      // corFundoPagina: "#f6bb00",
      // corBotao: "#002255",
      // avatar:
      //   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   });
      this.toast.success("Cadastro realizado com sucesso", "Sucesso!");
      this.dialogRef.close(true);
      this.formCadUser.reset();
    } catch (error) {
      this.toast.error("Erro ao cadastrar", "Erro!");
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
