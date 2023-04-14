import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'YOUR_API_KEY';
  private apiUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&s=${searchTerm}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&i=${id}`);
  }
}
