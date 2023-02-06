import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditarLinkRoutingModule } from "./editar-link-routing.module";
import { SharedModule } from "../../shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EditarLinkComponent } from "./editar-link.component";

@NgModule({
  declarations: [EditarLinkComponent],
  imports: [
    CommonModule,
    EditarLinkRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class EditarLinkModule {}
