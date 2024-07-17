import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ApiService, FeaturedGame } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
  faBars = faBars;
  faX = faXmark;
  is_home = false;
  show_navbar = false;

  featuredGames : FeaturedGame[] = [];
  currentPreview : number = 0;
  featuredRotationTimer! : number; 
  FEATURED_ROTATION_TIME = 3000;
  
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
    
    clearInterval(this.featuredRotationTimer);
    // @ts-ignore
    this.featuredRotationTimer = setInterval(() => {
      this.currentPreview++;
      if (this.currentPreview == this.featuredGames.length) this.currentPreview = 0;
    },this.FEATURED_ROTATION_TIME)
  }

  ngOnDestroy(): void {
    clearInterval(this.featuredRotationTimer)
  }
  
  mobileNavBar() {
    this.show_navbar = !this.show_navbar;
  }
}
