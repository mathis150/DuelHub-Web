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
/**
 * Handle the gestion of global variables throughout your application
 */
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
  
    private get(name: string) : KSubscription{
      if (this.duplicateCheck(name)) {
        return this._subscriptions.get(name)!
      }
      return this.addSubscription(name)
    }

    /**
     * Set the global variable defined by the given name to a value
     * @param name name of the global variable
     * @param value the new value to set the global variable to
     */
    next(name: string, value: any) {
      if (this.duplicateCheck(name)) {
        this._subscriptions.get(name)!.next(value)
      } else {
        this.addSubscription(name).next(value)
      }
    }

    /**
     * Get the value of the global variable defined by the given name
     * @param name name of the global variable
     * @returns the value if the variable exist or null if it dosnt
     */
    value(name: string) {
      if (this.duplicateCheck(name)) {
        return this._subscriptions.get(name)!
      }
      return null
    }

    /**
     * Subscribe to a global variable given its name, the given function is run as a callback
     * when the variable is changed using the next() function
     * @param name name of the global variable
     * @param func the callback function to call when the variable change
     * @returns the Subscription (keep it locally to unsubscribe when needed)
     */
    subscribe(name: string, func : (data : any) => void) : Subscription {
      return this.get(name).subscribe(func)
    }
}
