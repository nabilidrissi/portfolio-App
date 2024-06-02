import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormationComponent } from './formation/formation.component';
import { ServicesComponent } from './services/services.component';
import { MyskilsComponent } from './myskils/myskils.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent,AboutComponent,AboutMeComponent,FormationComponent,ServicesComponent,MyskilsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portFolio-nabil-idrssi';
}
