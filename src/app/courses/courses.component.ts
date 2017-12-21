import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { COURSES } from './courselist';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
 
  selectedCourse:Course;
  courses: Course[]=[];
  model: any= {};
    constructor(private courseService : CourseService) { 
    
  }

  ngOnInit() {
    this.getCourses();
    //hello
  }

onSelect(course:Course):void {
  this.selectedCourse=course;
  console.log("course selected :"+course);
}
getCourses():void {
  this.courseService.getCourses()
       .subscribe(courses => this.courses =courses);
}
 addCourse()

 {
 
   /*To push data into an array from ngModel create a variable array and use that 
   variablename.feildvalue.*/
 
 
   this.courses.push(new Course(this.courses.length+1,this.model.name,this.model.fees));
 }


}
