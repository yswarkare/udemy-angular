import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment-06-forms';

  @ViewChild('signupForm') signupForm!: NgForm;

  userData = {
    email: '',
    password: '',
    subscription: '',
  };

  formSubmitted = false;

  onSubmit() {
    console.log(this.signupForm);
    this.formSubmitted = true;
    this.userData.email = this.signupForm.value.email;
    this.userData.password = this.signupForm.value.password;
    this.userData.subscription = this.signupForm.value.subscription;
    this.signupForm.resetForm();
  }
}
