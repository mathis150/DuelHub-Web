import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  faBars = faBars;
  faX = faXmark;
  show_navbar = false;

  mobileNavBar() {
    this.show_navbar = !this.show_navbar;
  }
}
