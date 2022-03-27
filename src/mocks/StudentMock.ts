import { Student } from '../app/shared/student';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class StudentMock {
  mockStudents = [
    {
      _id: '001',
      student_name: 'student 001',
      student_email: 'student.001@mail.com',
      section: 'section 001',
      subjects: ['subject 001/001', 'subject 001/002'],
      dob: new Date(),
      gender: 'M',
    },
    {
      _id: '002',
      student_name: 'student 002',
      student_email: 'student.002@mail.com',
      section: 'section 002',
      subjects: ['subject 002/001', 'subject 002/002'],
      dob: new Date(),
      gender: 'F',
    },
  ];

  constructor() {}

  getStudents(): Observable<Student[]> {
    return of(this.mockStudents);
  }
}
