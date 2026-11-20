import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../course-card/course-card';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {
totalPages: any;
goToPage(_t55: any) {
throw new Error('Method not implemented.');
}

  courses: any[] = [];
  filteredCourses: any[] = [];

  searchText = '';
  selectedCategory = 'All';

  loading = true;
  errorMessage = '';
currentPage: any;
pages: any;

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {

    this.loading = true;
    this.errorMessage = '';

    this.courseService.getCourses().subscribe({

      next: (response: any) => {

        this.courses = response.courses || [];
        this.filteredCourses = [...this.courses];

        this.loading = false;
        this.cdr.detectChanges();
      },

      error: (error) => {

        console.error('Error fetching courses:', error);

        this.errorMessage =
          'Unable to load courses. Please try again.';

        this.loading = false;
        this.cdr.detectChanges();
      }

    });
  }

  searchCourses(): void {

    const search = this.searchText.toLowerCase().trim();

    this.filteredCourses = this.courses.filter(course => {

      const matchesSearch =
        course.title?.toLowerCase().includes(search) ||
        course.description?.toLowerCase().includes(search) ||
        course.instructor_name?.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        course.difficulty_level === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  onCategoryChange(): void {
    this.searchCourses();
  }

}