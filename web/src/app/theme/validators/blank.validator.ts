/**
 * Created by lt-68 on 3/11/17.
 */

import {AbstractControl} from '@angular/forms';
export class BlankSpaceValidator {
    public static validate(c:AbstractControl) {
        let blankSpace_REGEXP = /.*\S.*/;
        return blankSpace_REGEXP.test(c.value) ? null : {validateBlankSpace: {valid: false}};
    }
}
