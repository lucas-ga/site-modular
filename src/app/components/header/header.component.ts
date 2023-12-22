import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

  constructor(private sidenav: MenuService) {}

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
