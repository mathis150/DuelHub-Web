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
/**
 * Handle the synchronisation of different part of your application, 
 * allows the user to run different function directly from one call
 */
export class UpdateService {
    public _updaters : Map<string,Updater> = new Map<string,Updater>()

    private duplicateCheck(name : string) {
      return this._updaters.has(name)
    }
  
    private get(name: string) : Updater{
      if (this.duplicateCheck(name)) {
        return this._updaters.get(name)!
      } else {
        this._updaters.set(name,new Updater())
        return this._updaters.get(name)!
      }
    }

    /**
     * Subscribe to the updater with the given name, the given function will be run as a callback
     * when the updater is updated
     * @param name name of the updater
     * @param func the callback function to call when updated
     * @returns the Subscription (keep it locally to unsubscribe when needed)
     */
    subscribe(name: string, func : () => void) {
      return this.get(name).subscribe(func)
    }

    /**
     * Run all function subscribed to the updater defined by the given name
     * @param name name of the global variable
     */
    update(name : string) {
      if (this.duplicateCheck(name)) {
        this._updaters.get(name)!.update()
      }
    }
}
