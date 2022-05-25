import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { QualificationsService } from 'src/app/services/qualifications.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  showStudents: boolean = false;
  arrStudents: any[] = [];
  selectedStudent: any;
  student = {
    name:'',
    age:'',
    status: '',
  }
  qualification = {
    studentName:'',
    qualification:0,
    status:'',
  }

  constructor(private studentService : StudentService, private qualificationService: QualificationsService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudentsWhitQualification()
    .subscribe(res=>{
      if(res == "No students found"){
        console.log("No hay");
        this.showStudents = false;
        this.arrStudents = [];
      }else{
        this.showStudents = true
        const json = JSON.stringify(res);
        const datajson = JSON.parse(json);
        this.arrStudents = datajson
        console.log(this.arrStudents);
      }
    },
    err=>{
      console.log(err);
      this.showStudents = false;
    })
  }

  addStudent(){
    if(this.student.age=="" || this.student.name=="" || this.student.status==""){
      alert("Campos vacios");
    }else{
      this.studentService.postStudent(this.student)
      .subscribe(
        res=>{
          console.log(res);
          this.getStudents();
          alert("Student Saved");
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

  addQualification(){
    this.qualification.studentName=this.selectedStudent;
    console.log(this.qualification);
    if(this.qualification.studentName=="" || this.qualification.qualification == null || this.qualification.status==""){
      alert("Campos vacios");
    }else{
      this.qualificationService.postQualification(this.qualification)
      .subscribe(
        res=>{
          console.log(res);
          this.getStudents();
          alert("Qualification Saved");
        },
        err=>{
          console.log(err);
        }
      )
    }
  }

}
