import { Injectable } from '@angular/core';

export interface FeaturedGame {
  _id: string,
  title: string,
  routing: string,
  views: number,
  players: number,
  bannerSRC: string,
  coverSRC: string,
}

export interface Game {
  _id: string,
  title: string,
  routing: string,
  views: number,
  players: number,
  coverSRC: string,
  bannerSRC: string,
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiServer : string = 'http://localhost:5000'
  public cdnUrl : string = this.apiServer + '/cdn'

  constructor() {}

  GetHomePageFeaturedGameList(): Promise<FeaturedGame[]> {
    return fetch(this.apiServer + "/game/featured")
      .then((fetch) => {
        return fetch.json()
      })
      .then((games) => {
        if (games.length == 0) {
          return [];
        }
        return games
      })
  }

  GetHomePagePopularGameList(): Promise<Game[]> {
    return fetch(this.apiServer + "/game/popular/players")
      .then((fetch) => {
        return fetch.json()
      })
      .then((games) => {
        if (games.length == 0) {
          return []
        }

        return games;
      })
  }
}
