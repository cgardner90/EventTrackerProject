import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Fossil } from '../models/fossil';
import { catchError } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class FossilService {

  private baseUrl= "http://localhost:8082/";
  private url=this.baseUrl+ "api/fossils";
  constructor(
    private http: HttpClient,
    private auth: AuthServiceService
  ) { }
index(): Observable<Fossil[]>{
  return this.http.get<Fossil[]>(this.url).pipe(
    catchError((err:any) =>{
      console.log(err);
      return throwError("TodoService Index Erorr");
    })
  );
}
show(fossilId:number): Observable<Fossil>{
  return this.http.get<Fossil>(this.url+"/"+fossilId).pipe(
    catchError((err:any) =>{
      console.log(err);
      return throwError('Fossil service .show failed');
    })
  );
}
update(fossil:Fossil){
  return this.http.put<Fossil>(`${this.url}/${fossil.id}`,fossil).pipe(
    catchError((err:any)=>{
      console.log(err);
      return throwError("Fossil Update Service Error");
    })
  );
}
destroy(id:number){
  return this.http.delete(`this.url}/{${id}`).pipe(
catchError((err:any) =>{
  console.log(err);
  return throwError("Fossil Service.destroy: error deleting");
}))

}


}
