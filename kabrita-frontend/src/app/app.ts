import { Component } from '@angular/core';

import { Header } from
  './components/header/header';

import { Hero } from
  './components/hero/hero';

import { CourseListComponent } from './components/course-list/course-list';

import { Footer } from
  './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    Header,
    Hero,
    CourseListComponent,
    Footer
  ],

  template: `
    <app-header></app-header>

    <app-hero></app-hero>

    <app-course-list></app-course-list>

    <app-footer></app-footer>
  `
})
export class App {}