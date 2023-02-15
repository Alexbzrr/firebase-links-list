import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { CadastroComponent } from "../shared/components/cadastro/cadastro.component";
import { ILinks } from "../shared/data/links";
import { LinksService } from "../shared/services/links.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AuthenticationService } from "../shared/services/authentication.service";

@Component({
  selector: "my-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class homeComponent implements OnInit {
  storedTheme: string = localStorage.getItem("theme-color");

  links$: Observable<ILinks[]>;
  linkId?: string | null;
  dadosUsers$: any;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private router: Router,
    private linksService: LinksService,
    private toast: ToastrService,
    public dialog: MatDialog,
    public afAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.links$ = this.linksService.getAllLink();
    this.dadosUsers$ = localStorage.getItem("user");
    // console.log(this.dadosUsers$);
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
  setColor(theme: string) {
    localStorage.setItem("theme-color", theme);
    this.storedTheme = localStorage.getItem("theme-color");
  }

  getUser() {}
}
