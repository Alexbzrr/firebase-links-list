import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { LinksService } from "../../services/links.service";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "my-editar-link",
  templateUrl: "./editar-link.component.html",
  styleUrls: ["./editar-link.component.scss"],
})
export class EditarLinkComponent implements OnInit {
  public formEdit!: FormGroup;
  linkId?: string | null;

  constructor(
    private location: Location,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private cadastroLink: LinksService,
    private toast: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.updateLink();
    this.linkId = this.activatedRoute.snapshot.paramMap.get("id");
    this.cadastroLink.getLink(this.linkId).subscribe((data) => {
      this.formEdit.setValue(data);
    });
  }
  get nome() {
    return this.formEdit.get("nome");
  }
  get url() {
    return this.formEdit.get("url");
  }

  updateLink() {
    this.formEdit = this.fb.group({
      id: [null],
      nome: ["", Validators.required],
      url: ["", Validators.required],
      pagina: ["_blank"],
    });
  }

  update() {
    this.cadastroLink.updateLink(this.formEdit.value);
    this.toast.success("Cadastro Atualizado com sucesso", "Sucesso!");
    this.router.navigate([""]);
  }
  cancelar() {
    this.location.back();
  }
}
