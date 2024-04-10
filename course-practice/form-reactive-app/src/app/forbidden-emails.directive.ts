import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';

export function forbiddenEmailValidator(nameRe: RegExp): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

    async function emailValidation(
      nameRe: RegExp,
      control: AbstractControl
    ): Promise<ValidationErrors | null> {
      const promise = new Promise<ValidationErrors | null>(
        (resolve, reject) => {
          setTimeout(() => {
            if (nameRe.test(control.value)) {
              resolve({ emailIsForbidden: true });
            }
          }, 1500);
        }
      );
      return promise;
    }

    return emailValidation(nameRe, control);
  };
}
