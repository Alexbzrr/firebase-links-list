import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/login/usuario';

@Component({
  selector: 'my-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent implements OnInit {
  @Input() user?: Usuario;
  constructor() { }

  ngOnInit() {
  }

}
