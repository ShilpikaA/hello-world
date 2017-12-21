import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { CourseService} from './course.service';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CourseService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
