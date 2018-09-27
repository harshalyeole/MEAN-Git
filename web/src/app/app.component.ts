import { Component, ChangeDetectorRef} from '@angular/core';
import { GlobalState } from './global.state';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app',
    styleUrls: ['./app.component.scss'],
    template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}">
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {

    isMenuCollapsed: boolean = false;

    constructor(private cdRef:ChangeDetectorRef, private _state: GlobalState, public toastr: ToastrService) {

        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });
    }

    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
}
