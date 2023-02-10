import { Ensaio } from './ensaio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnsaioServiceService {

  constructor(private http: HttpClient) { }
  protected API: string =  ' http://localhost:5283/api/Ensaios';
  
  listarEnsaios() : Observable<Ensaio[]> {
    return this.http.get<Ensaio[]>(this.API)}

  criarEnsaio(ensaio: Ensaio): Observable<Ensaio> {
      return this.http.post<Ensaio>(this.API, ensaio)
  }

  excluirEnsaio(id: number): Observable<Ensaio> {
    const url = `${this.API}/${id}`
    console.log(url)
    return this.http.delete<Ensaio>(url)
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(
      this.API  + id    );}
  
  editarEnsaio(ensaio: Ensaio): Observable<Ensaio> {
    const url = `${this.API}/${ensaio.id}`
    return this.http.put<Ensaio>(url, ensaio)
  }
  
  
  
  buscarEnsaioPorId(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`);
  }

  buscarPorId(id: number): Observable<Ensaio> {
    const url = `${this.API}/${id}`
    console.log(url)
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Ensaio>(url, {headers: headers})
    console.log(headers)
  }

  GetEnsaio(id: number): Observable<any> {
    return this.http.get("http://localhost:5283/api/Ensaios" + id);
  }
}
