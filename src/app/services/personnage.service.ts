import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personnage } from '../models/personnage';
const url = 'http://localhost:3000/characters';
@Injectable({
  providedIn: 'root',
})
export class PersonnageService {
  constructor(private http: HttpClient) {}

  create(personnage: Personnage): Observable<Personnage> {
    return this.http.post<Personnage>(url, personnage);
  }

  getAll(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>(`${environment.URL}/characters`);
  }

  delete(id: number): Observable<Personnage> {
    return this.http.delete<Personnage>(`${url}/${id}`);
  }

  getById(id: number): Observable<Personnage> {
    return this.http.get<Personnage>(`${url}/${id}`);
  }

  modify(personnage: Personnage): Observable<Personnage> {
    return this.http.put<Personnage>(`${url}/${personnage.id}`, personnage);
  }
}
