import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private appHttp: AppHttpService){}

  getCities(){
      return this.appHttp.get('get-cities')
  }
}
