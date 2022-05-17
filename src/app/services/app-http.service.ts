import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class AppHttpService {

    readonly ROOT_URL = environment.apiURL;

    constructor(private http: HttpClient) { }

    get(url: string) {
        return this.http.get(`${this.ROOT_URL}/${url}`);
    }
}