import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { CadastroComponent } from "../shared/components/cadastro/cadastro.component";
import { ILinks } from "../shared/data/links";
import { LinksService } from "../shared/services/links.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: "my-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class homeComponent implements OnInit {
  storedTheme: string = localStorage.getItem("theme-color");

  links$: Observable<ILinks[]>;
  linkId?: string | null;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router,
    private linksService: LinksService,
    private toast: ToastrService,
    public dialog: MatDialog,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.links$ = this.linksService.getAllLink();
  }

  adicionarLinks(): void {
    const dialogRef = this.dialog.open(CadastroComponent, {
      width: "550px ",
      height: "350px",
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  deletar(id: string) {
    this.linksService.deleteLink(id);
    this.toast.success("Deletado com Sucesso", "Sucesso!");
  }

  onLogout(): void {
    this.afAuth.signOut().then(() => this.router.navigate(["/login"]));
  }
  // toggleColor() {
  //   switch (this.color) {
  //     case "blue":
  //       this.color = "blueDark";
  //       break;
  //     case "blueDark":
  //       this.color = "pink";
  //       break;
  //     case "pink":
  //       this.color = "pinkDark";
  //       break;
  //     case "pinkDark":
  //       this.color = "blue";
  //       break;
  //   }
  //   this.toggleColorBotao();
  // }
  // toggleColorBotao() {
  //   switch (this.botao) {
  //     case "azul":
  //       this.botao = "azuldark";
  //       break;
  //     case "azuldark":
  //       this.botao = "rosa";
  //       break;
  //     case "rosa":
  //       this.botao = "rosadark";
  //       break;
  //     case "rosadark":
  //       this.botao = "azul";
  //       break;
  //   }
  // }
  setColor(theme: string) {
    localStorage.setItem("theme-color", theme);
    this.storedTheme = localStorage.getItem("theme-color");
  }
}
