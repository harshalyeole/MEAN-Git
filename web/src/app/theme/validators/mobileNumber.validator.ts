import {AbstractControl} from '@angular/forms';

export class MobileNumberValidator {

  public static validate(c:AbstractControl) {
    let MOBILE_REGEXP = /[0-9\+\-\ ]/;

    return MOBILE_REGEXP.test(c.value) ? null : {
      validateMobileNumber: {
        valid: false
      }
    };
  }
}
