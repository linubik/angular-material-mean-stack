import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import {StudentMock} from '../../mocks/StudentMock';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {}

  // Add student
  AddStudent(data: Student): Observable<any> {
    return null;
  }

  // Get all students
  GetStudents() {
    return null;;//StudentMock.getMockStudents();
  }

  // Get student
  GetStudent(id): Observable<any> {
    return null;
  }

  // Update student
  UpdateStudent(id, data): Observable<any> {
    return null
  }

  // Delete student
  DeleteStudent(id): Observable<any> {
    return null;
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
