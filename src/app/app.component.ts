import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'site-modular';
  events: string[] = [];
  opened: boolean = true;

  @ViewChild('sidenav')
  public sidenav: MatSidenav;

  constructor(private menuService: MenuService) {}

  ngAfterViewInit(): void {
    this.menuService.setSidenav(this.sidenav);
  }
}
