import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QualificationsService {

  readonly URL_API = 'http://localhost:3000/qualifications';

  constructor(private http: HttpClient) { }

  postQualification(addQualification:any){
    return this.http.post<any>(this.URL_API, addQualification);
  }
}
