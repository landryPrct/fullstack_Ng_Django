import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  student!: Student;

  constructor(

      public studentService: StudentService,
      private route: ActivatedRoute,
      private router:Router

    ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['studentId'];

    this.studentService.find(this.id).subscribe((data:Student)=>{
      this.student=data
    })
  }

}
