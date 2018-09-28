import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { UserDetails } from './userDetails.component';
import { routing } from './userDetails.routing';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule,
        NgaModule,
        routing
    ],
    declarations: [
        UserDetails
    ],
    providers: []
})
export class UserDetailsModule {
}
