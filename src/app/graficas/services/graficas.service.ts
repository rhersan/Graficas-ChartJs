import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

export interface IData {
  
    "facebook": number,
    "youtube": number,
    "whatsapp": number,
    "facebook-messenger": number,
    "instagram": number
}

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getUsuariosRd () {
    return this.http.get<IData>('http://localhost:3000/grafica');
  }

  getUsuariosData(){
    return this.getUsuariosRd()
      .pipe(
        delay(1000),
        map( data => {
            const labels = Object.keys(data);
            const values = Object.values(data);
            return {labels,values}
        })
      )

  }

}
