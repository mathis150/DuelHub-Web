import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ApiService, FeaturedGame } from '../services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  faX = faXmark;
  is_home = false;
  show_navbar = false;

  featuredGames : FeaturedGame[] = []; 
  
  page = window.location.pathname;

  constructor(
    protected _api : ApiService
  ) {
    if(window.location.pathname == '/') {
      this.is_home = true;
    }
  }
  
  ngOnInit(): void {
    this._api.GetHomePageFeaturedGameList().then((games) => {
      console.table(games)
      this.featuredGames = games
    })
  }
  
  mobileNavBar() {
    this.show_navbar = !this.show_navbar;
  }
}
