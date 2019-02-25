import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import * as geoLocation from 'nativescript-geolocation';

@Injectable({
    providedIn: 'root'
})
export abstract class LocationServiceInterface {
    protected _locations: Array<Position> = [];
    protected _locations$: Subject<Position[]> = new Subject();

    constructor() {
    }

    public getLocations() {
        return this._locations$;
    }

    public addLocation(location: Position) {
        if (location) {
            this._locations.push(location);
            this._locations$.next(this._locations);
        }
    }

    abstract enableLocationServices(): void;

    abstract addCurrentLocation();
}
