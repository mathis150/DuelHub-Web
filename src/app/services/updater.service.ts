import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class Updater {
    private $ : BehaviorSubject<void>

    constructor () {
        this.$ = new BehaviorSubject<void>(undefined)
    }

    subscribe(func : () => void) {
        return this.$.subscribe(func)
    }

    update() {
        this.$.next(undefined)
    }
}

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
    public _updaters : Map<string,Updater> = new Map<string,Updater>()

    private duplicateCheck(name : string) {
      return this._updaters.has(name)
    }
  
    get(name: string) : Updater{
      if (this.duplicateCheck(name)) {
        return this._updaters.get(name)!
      } else {
        this._updaters.set(name,new Updater())
        return this._updaters.get(name)!
      }
    }

    subscribe(name: string, func : () => void) {
      return this.get(name).subscribe(func)
    }

    update(name : string) {
      if (this.duplicateCheck(name)) {
        this._updaters.get(name)!.update()
      }
    }
}
