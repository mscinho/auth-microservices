import { Component, OnDestroy } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLogin() {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const loginData = this.loginForm.value;

    console.log('Login data:', loginData);

    this.http.post('http://localhost:3000/auth/login', loginData, { headers: headers })
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Handle successful login
      },
      error: (error) => {
        console.error('Login failed', error);
        // Handle login error
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }
  
}