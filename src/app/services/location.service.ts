import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LocationServiceInterface} from './location.service.interface';
import * as geoLocation from 'nativescript-geolocation';

@Injectable({
    providedIn: 'root'
})
export class LocationService extends LocationServiceInterface {
    enableLocationServices(): void {
        // noop
        return undefined;
    }

    addCurrentLocation() {
        // create a random location, because the module is only for native...
        this.addLocation(this.createRandomLocation());
    }

    createRandomLocation(): Position {
        const date: Date = new Date();
        return {
            timestamp: date.getTime(), coords: {
                altitude: Math.random(),
                heading: Math.random(),
                latitude: Math.random(),
                longitude: Math.random(),
                speed: 0,
                accuracy: 0,
                altitudeAccuracy: 0
            }
        };
    }
}
