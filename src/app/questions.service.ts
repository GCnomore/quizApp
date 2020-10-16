import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }
  public getJSON(filedId: string){
    return this.http.get(`./assets/${filedId}.json`) as Observable<any>;
  }
  
}
