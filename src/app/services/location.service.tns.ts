import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LocationServiceInterface} from './location.service.interface';
import * as geoLocation from 'nativescript-geolocation';

@Injectable({
    providedIn: 'root'
})
export class LocationService extends LocationServiceInterface {
    enableLocationServices(): void {
        geoLocation.isEnabled().then(enabled => {
            if (!enabled) {
                geoLocation.enableLocationRequest(true, true).catch(reason => alert(reason));
            }
        });
    }

    addCurrentLocation() {
        geoLocation.getCurrentLocation({
            // desiredAccuracy: ACCURACY,
            // updateDistance: 10,
            maximumAge: 100,
            updateTime: 100
        })
            .then(location => {
                const position = this.locationToPosition(location);
                this.addLocation(position);
            })
            .catch(reason => alert(reason));
    }

    locationToPosition(location: geoLocation.Location): Position {
        return {
            timestamp: location.timestamp.getTime(), coords: {
                altitude: location.altitude,
                heading: location.direction,
                latitude: location.latitude,
                longitude: location.longitude,
                speed: location.speed,
                accuracy: location.horizontalAccuracy,
                altitudeAccuracy: location.verticalAccuracy
            }
        };
    }
}
