import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "../login/login.component";
import { homeComponent } from "../home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";

import { AvatarComponent } from "./components/avatar/avatar.component";
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { HttpClientModule } from "@angular/common/http";
import { CreateLoginComponent } from "../login/create-login/create-login.component";
import { RouterModule } from "@angular/router";
import { MatSnackBarModule } from "@angular/material/snack-bar";

const components = [
  LoginComponent,
  homeComponent,
  AvatarComponent,
  CadastroComponent,
  CreateLoginComponent,
];
const modules = [
  CommonModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  HttpClientModule,
  RouterModule,
  MatSnackBarModule,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
function AngularFireModule(
  firebase: any
):
  | any[]
  | import("@angular/core").Type<any>
  | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error("Function not implemented.");
}
