import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

import { IndexComponent } from './index/index.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component'


@NgModule({
  declarations: [
    ViewComponent,
    EditComponent,
   
    IndexComponent,
        CreateComponent,


  ],
  imports: [
    CommonModule,
    StudentRoutingModule,

    FormsModule,
    ReactiveFormsModule,


  ]
})
export class StudentModule { }
