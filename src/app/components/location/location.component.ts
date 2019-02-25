import {Component, OnInit} from '@angular/core';
import * as geoLocation from 'nativescript-geolocation';
import {LocationService} from '../../services/location.service';
import {Subject} from 'rxjs';


const ACCURACY = 1;

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
    currentGeoLocation: Position;
    locations: Array<Position> = new Array<Position>();
    locations$?: Subject<Position[]>;

    constructor(private locationService: LocationService) {
    }

    ngOnInit() {
        this.locationService.enableLocationServices();
        this.locations$ = this.locationService.getLocations();
        this.locations$.subscribe(value => this.locations = value);
    }

    addCurrentLocation() {
        this.locationService.addCurrentLocation();
    }
}

