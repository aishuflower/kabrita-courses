import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() duration: number = 3;
  @Input() rating: number = 5;

  favorite: boolean = false;

  toggleFavorite() {
    this.favorite = !this.favorite;
  }

  startCourse() {
    alert('Course started successfully!');
  }
}