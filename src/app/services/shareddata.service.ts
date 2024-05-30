import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

class KSubscription {
    private $ : BehaviorSubject<any>

    constructor () {
        this.$ = new BehaviorSubject<void>(undefined)
    }

    subscribe(func : (data : any) => void) {
        return this.$.subscribe(func)
    }
    
    public get value() : any {
      return this.$.value
    }
    
    next(data : any) {
        this.$.next(data)
    }
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
    public _subscriptions : Map<string,KSubscription> = new Map<string,KSubscription>()

    private duplicateCheck(name : string) {
      return this._subscriptions.has(name)
    }
  
    private addSubscription(name : string) : KSubscription {
      if(this.duplicateCheck(name)) {
        return this._subscriptions.get(name)!
      }
      
      this._subscriptions.set(name,new KSubscription())
      return this._subscriptions.get(name)!
    }
  
    get(name: string) : KSubscription{
      if (this.duplicateCheck(name)) {
        return this._subscriptions.get(name)!
      }
      return this.addSubscription(name)
    }

    subscribe(name: string, func : (data : any) => void) : Subscription {
      return this.get(name).subscribe(func)
    }
}
