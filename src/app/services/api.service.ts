import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiServer : string = 'http://10.31.33.46:8000'
  public filePath : string = this.apiServer + '/file'
  public imagePath : string = this.apiServer + '/file/image/'
  public pagePath : string = this.apiServer + '/file/pages/'
}
