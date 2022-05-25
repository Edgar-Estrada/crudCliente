import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly URL_API = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get(this.URL_API);
  }

  getStudentsWhitQualification(){
    return this.http.get(this.URL_API + '/studentQualification');
  }

  postStudent(addStudent:any){
    return this.http.post<any>(this.URL_API, addStudent);
  }
}
