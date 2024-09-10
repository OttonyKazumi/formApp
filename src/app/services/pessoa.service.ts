import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";

export interface Pessoa {
  id: number;
  nome: string;
  telefone: string;
  dataDeNascimento: string;
}

@Injectable({
  providedIn: 'root'
})

export class PessoaService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getPessoas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listagem`).pipe(
        catchError(this.handleError<any[]>('getPessoas', [])));;
  }

  getPessoaById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/visualizacao/${id}`);
  }

  addPessoa(pessoa: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/formulario`, pessoa, { headers })
      .pipe(catchError(this.handleError<any>('registerBook')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
