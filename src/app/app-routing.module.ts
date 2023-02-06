import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { homeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./shared/components/cadastro/cadastro.component";
import { EditarLinkModule } from "./shared/components/editar-link/editar-link.module";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "home",
    component: homeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: "cadastro",
    component: CadastroComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: "home/editar",
    loadChildren: () => EditarLinkModule,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
