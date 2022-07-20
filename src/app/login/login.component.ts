import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder,private httpClient: HttpClient) {
    this.form = this.fb.group({
      email: [''],
      password: ['']
    }) 
  }

  ngOnInit(): void {}
  onSubmit(){
    var formData: any = new FormData();
    formData.append('email', this.form.get('email')?.value);
    formData.append('password', this.form.get('password')?.value);
    this.httpClient
      .post('http://localhost:4200/app-login', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error)
      })
  }

  }
