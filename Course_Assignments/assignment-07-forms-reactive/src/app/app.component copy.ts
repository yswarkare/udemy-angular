import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
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

  forbiddenProjectNames = ['Test'];

  initialValue = {
    projectName: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.email, this.forbiddenNames],
    ],
    status: ['Stable', [Validators.required]],
  };

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group(this.initialValue);
  }

  ngOnInit() {
    this.projectForm = this.formBuilder.group(this.initialValue);
    this.projectForm.valueChanges.subscribe((value) => {
      console.log(value);
      console.log(this.projectForm);
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  // forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return { nameIsForbidden: true };
  //   }
  //   return null;
  // }

  forbiddenNames(control: AbstractControl): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      const forbiddenNames = ['Test'];
      if (forbiddenNames.indexOf(control.value) !== -1) {
        return { nameIsForbidden: true };
      } else {
        return null;
      }
    };
  }
}
