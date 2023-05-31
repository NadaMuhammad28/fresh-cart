import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatch(
  // form: AbstractControl,
  password: string,
  confirm_password: string
): ValidationErrors | null {
  return function () {
    // const passwordValue = form.get(password)?.value;
    // const confirmPasswordValue = form.get(confirm_password)?.value;
    // if (passwordValue === confirmPasswordValue) return null;
    // return { passwordMismatchError: true };
  };
}
