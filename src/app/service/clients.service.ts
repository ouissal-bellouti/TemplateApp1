import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clients } from '../model/clients';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private baseUrl = '/api/clients';
  choixmenu : string = 'A';
  public dataForm: FormGroup;
  constructor(private http: HttpClient) { }

  getData(id: number): Observable<Object> {
    return this.http.get('${this.baseUrl}/${id}');
 }

 createData(info: object): Observable<Object> {
   return this.http.post('${this.baseUrl}' ,info);
 }

 updateData(id: number, value: any): Observable<Object> {
  return this.http.put('${this.baseUrl}/${id}', value);
}

deleteData(id: number): Observable<any> {
  return this.http.delete('${this.baseUrl}/${id}', { responseType:'text' });
}

getAll(): Observable<any> {
  return this.http.get('${this.baseUrl}');
}


}
