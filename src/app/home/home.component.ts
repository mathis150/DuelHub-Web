import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { ApiService, Game, FeaturedGame } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  faBook = faBook;
  faUsersLine = faUsersLine;

  popularGames : Game[] = [];
  

  constructor(
    protected _api : ApiService
  ) {}

  ngOnInit(): void {
    this._api.GetHomePagePopularGameList().then((games) => {
      this.popularGames = games
    })
    
  }
}
