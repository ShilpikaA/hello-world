import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Course } from './courses/course';
import { COURSES } from './courses/courselist';
import { MessageService } from './message.service';

@Injectable()
export class CourseService {

  constructor(private messageService:MessageService) { }
getCourses():Observable<Course[]>
{
  console.log("Courses Service");
  this.messageService.add('CourseService:fetched courses');
  return of(COURSES);
}
}
