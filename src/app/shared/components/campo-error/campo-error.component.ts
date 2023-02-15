import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "my-campo-error",
  templateUrl: "./campo-error.component.html",
  styleUrls: ["./campo-error.component.scss"],
})
export class CampoErrorComponent implements OnInit {
  @Input() mostrarErro!: boolean | any;
  @Input() msnError!: string;
  constructor() {}

  ngOnInit() {}
}
