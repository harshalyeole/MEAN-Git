import {NgModule, ModuleWithProviders}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CapitalizePipe} from '../utilityServices/pipes/capitalize.pipe';
import {
    BaBackTop,
    BaContentTop,
    BaMenuItem,
    BaMenu,
    BaPageTop,
    BaSidebar
} from './components';

import {
    BaScrollPosition,
    BaSlimScroll,
} from './directives';

import {
    BaMenuService,
    BaThemePreloader,
    BaThemeSpinner
} from './services';

import {
    EmailValidator,
    EqualPasswordsValidator
} from './validators';

const NGA_COMPONENTS = [
    BaBackTop,
    BaContentTop,
    BaMenuItem,
    BaMenu,
    BaPageTop,
    BaSidebar
];

const NGA_DIRECTIVES = [
    BaScrollPosition,
    BaSlimScroll,
];

const NGA_SERVICES = [
    BaThemePreloader,
    BaThemeSpinner,
    BaMenuService
];

const NGA_VALIDATORS = [
    EmailValidator,
    EqualPasswordsValidator
];

@NgModule({
    declarations: [
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS,
        CapitalizePipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS,
        CapitalizePipe
    ]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: NgaModule,
            providers: [
                ...NGA_VALIDATORS,
                ...NGA_SERVICES
            ],
        };
    }
}
