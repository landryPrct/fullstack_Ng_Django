import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Student } from '../student';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  id! :number;
  student!: Student;
  form! :FormGroup;

  students:Student[]=[];
  constructor(

    public studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
   
    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['studentId'];
    this.studentService.find(this.id).subscribe((data:Student)=>{
      this.student = data;
    });

    this.form = new FormGroup ({
      lname:new FormControl('',[Validators.required]),
      fname:new FormControl('',Validators.required),
      room_class: new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),

    });
     this.studentService.getAll().subscribe((data: Student[])=>{
      this.students = data;
      console.log(this.students);
       });

    
  }


  get f(){

    return this.form.controls;

  }

  submit(){
    console.log(this.form.value);
    this.studentService.update(this.id,this.form.value).subscribe((res:any)=>{
      console.log("updated successfully")
      this.router.navigateByUrl('students/index'); //redirection 
    })
  }

}

