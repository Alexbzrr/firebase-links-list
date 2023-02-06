import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarLinkComponent } from "./editar-link.component";

const routes: Routes = [
  {
    path: ":id",
    component: EditarLinkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarLinkRoutingModule {}
