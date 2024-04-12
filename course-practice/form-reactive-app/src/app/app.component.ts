import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'form-reactive-app';
  genders = ['male', 'female'];
  signupForm: FormGroup = new FormGroup({});
  forbiddenUsernames = ['chris', 'anna'];
  forbiddenEmailIds = ['test@test.com'];

  initialValue = new FormGroup({
    userData: new FormGroup({
      username: new FormControl('', [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.forbiddenEmails.bind(this)],
        updateOn: 'blur',
      }),
    }),
    gender: new FormControl('male'),
    hobbies: new FormArray([]),
  });

  constructor() {
    this.signupForm = this.initialValue;
  }

  ngOnInit() {
    this.signupForm = this.initialValue;

    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.signupForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });
  }

  onAddHobby() {
    console.log(this.signupForm);
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (
          control.value?.toLowerCase() &&
          this.forbiddenEmailIds.indexOf(control.value.toLowerCase()) !== -1
        ) {
          resolve({ nameIsForbidden: true });
        }
      }, 1500);
    });
    return promise;
  }
}
