import { Injectable } from '@angular/core';

interface FeaturedGame {
  title: string,
  routing: string,
  bannerSRC: string,
}

interface Game {
  title: string,
  routing: string,
  coverSRC: string,
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiServer : string = 'http://10.31.33.46:8000'

  constructor() {}

  GetHomePageFeaturedGames(): Promise<FeaturedGame[]> {
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
