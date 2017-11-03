import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';


export class SignupValidator {
   
    

    static cannotContainSpace(control:AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0 )
            return { cannotContainSpace: true };
        return null;
    }

    // Asynchronous validation
    static shouldBeUnique(control:AbstractControl): Promise <ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (control.value === 'carl@yahoo.com')
                    resolve({ shouldBeUnique: true}) ;
                else 
                    resolve(null)
            }, 2000);
        });
    }

}