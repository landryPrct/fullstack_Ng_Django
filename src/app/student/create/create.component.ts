import { Component, OnInit } from '@angular/core';

import {StudentService} from "../student.service";
import { Router } from '@angular/router';

import { FormGroup ,FormControl, Validators} from '@angular/forms';

import { Student }  from "../student";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  students: Student[] = [];


  constructor( 

      public studentService:StudentService,
      private router:Router,

    ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl("",Validators.required),
      age:new FormControl('', Validators.required),
      room_class:new FormControl('',Validators.required),

    })
  }


  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.studentService.create(this.form.value).subscribe((res:any)=>{
      console.log('Successfully created')
      this.router.navigateByUrl('students/index')
    })
  }

}
