import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Followers } from './followers.component';
import { routing } from './followers.routing';
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
        Followers
    ],
    providers: []
})
export class FollowersModule {
}
