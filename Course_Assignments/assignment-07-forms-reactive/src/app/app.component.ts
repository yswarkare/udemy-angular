import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'assignment-07-forms-reactive';

  projectForm: FormGroup;

  statusList = ['Stable', 'Critical', 'Finished'];

  forbiddenProjectNames = ['test'];

  initialValue = new FormGroup({
    projectName: new FormControl('', {
      asyncValidators: [this.forbiddenNames.bind(this)],
      updateOn: 'blur',
    }),
    email: new FormControl('', [Validators.required, Validators.email]),
    status: new FormControl('Stable', [Validators.required]),
  });

  constructor() {
    this.projectForm = this.initialValue;
  }

  ngOnInit() {
    this.projectForm = this.initialValue;
    this.projectForm.valueChanges.subscribe((value) => {
      console.log(value);
      console.log(this.projectForm);
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  // forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
  //   if (
  //     control.value?.toLowerCase() &&
  //     this.forbiddenProjectNames.indexOf(control.value.toLowerCase()) !== -1
  //   ) {
  //     return { nameIsForbidden: true };
  //   }
  //   return null;
  // }

  forbiddenNames(
    control: AbstractControl
  ):
    | Promise<ValidationErrors | null>
    | Observable<ValidationErrors | null> {
    const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (
          control.value?.toLowerCase() &&
          this.forbiddenProjectNames.indexOf(control.value.toLowerCase()) !== -1
        ) {
          resolve({ nameIsForbidden: true });
        }
      }, 1500);
    });

    return promise;
  }
}
