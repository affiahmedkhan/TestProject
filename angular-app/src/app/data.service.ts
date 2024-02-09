import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://localhost:7206/Items'; // Your API endpoint

  constructor(private http: HttpClient) {}
 // Fetch cities
 getData(): Observable<any> {
  return this.http.get(this.apiUrl);
}

// Add a new city
addCity(newCity: { name: string }): Observable<any> {
  // Assuming the API expects a city object with at least a "name" property
  return this.http.post(this.apiUrl, newCity);
}
  
}
