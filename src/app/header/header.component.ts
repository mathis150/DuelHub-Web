import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faBars = faBars;
  faX = faXmark;

  is_home = false;
  show_navbar = false;

  constructor() {
    if(window.location.pathname == '/') {
      this.is_home = true;
    }
  }

  mobileNavBar() {
    this.show_navbar = !this.show_navbar;
  }
}
