import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
