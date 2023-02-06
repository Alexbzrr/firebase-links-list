import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
import { LinksService } from "../../services/links.service";

@Component({
  selector: "my-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
  public linkForm!: FormGroup;

  constructor(
    private cadastroLink: LinksService,
    private toast: ToastrService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CadastroComponent>
  ) {}

  ngOnInit() {
    this.linkForm = this.fb.group({
      nome: ["", Validators.required],
      url: ["", Validators.required],
      pagina: ["_blank"],
    });
  }

  addLinks() {
    const novolink = this.linkForm.getRawValue();
    this.cadastroLink.addNewLink(novolink).then(
      (res) => {
        this.toast.success("Cadastro realizado com sucesso", "Sucesso!");
        this.dialogRef.close(true);
        this.linkForm.reset();
      },
      (err: HttpErrorResponse) => {
        this.toast.error("Erro ao cadastrar", "Erro!");
      }
    );
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
