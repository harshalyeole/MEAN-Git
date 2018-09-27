import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {NgaModule} from '../theme/nga.module';
import {routing}       from './pages.routing';
import {Pages} from './pages.component';
@NgModule({
    imports: [CommonModule, NgaModule, routing],
    declarations: [Pages]
})
export class PagesModule {
}
