import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {signUp} from './signUp.component';
import {routing}       from './signUp.routing';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        
    ],
    declarations: [
        signUp
    ]
})
export class SignUpModule {
}
