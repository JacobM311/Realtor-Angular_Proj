import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Property {
  id: number;
  name: string;
  type: string;
  price: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<Property[]> 
  {
    return this.http.get<{ [key: string]: Property }>('data/properties.json').pipe(
        map(data=>{
          const propertiesArray: Property[] = [];
          for (const id in data) 
          {
            if (data.hasOwnProperty(id))
            {
              propertiesArray.push(data[id]);
            }
          }
          return propertiesArray;
        }

      )
    );
  }
}
