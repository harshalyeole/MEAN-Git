import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Users } from './users.component';
import { routing } from './users.routing';
import { ChartsModule } from 'ng2-charts';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule,
        NgaModule,
        routing,
        InfiniteScrollModule
    ],
    declarations: [
        Users
    ],
    providers: []
})
export class UsersModule {
}
