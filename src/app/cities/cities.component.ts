import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsService } from '../services/maps.service';
declare var google: any;

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {
  map: any;
  @ViewChild('map') mapElement: any;
  lat: number = 43.879078;
  lng: number = -103.4615581;
  constructor(private mapsService: MapsService) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {

    this.initGoogleMaps();
    this.getCities();

  }

  initGoogleMaps(): void {
        const mapProperties = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 1,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  getCities(): void {
    var infowindow = new google.maps.InfoWindow();
    this.mapsService.getCities().subscribe((res: any)=> {
    res.data.forEach(location => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(location.bounds.southwest.lat, location.bounds.southwest.lng),
        map: this.map
      });
      google.maps.event.addListener(marker, 'mouseover', (function(marker) {
        return function() {
          infowindow.setContent(location.place.city + ", " + location.place.country);
          infowindow.open(this.map, marker);
        }
      })(marker));
      
      google.maps.event.addListener(marker, 'click', function() {
        this.map.panTo(this.getPosition());
        this.map.setZoom(4);
      });  
    });
  });
  }
}