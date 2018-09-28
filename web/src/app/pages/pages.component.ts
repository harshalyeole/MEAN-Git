import {Component} from '@angular/core';
import {Routes} from '@angular/router';
import {BaMenuService} from '../theme';
import {PAGES_MENU} from './pages.menu';
import {USER_MENU} from './pages.menu';
@Component({
    selector: 'pages',
    template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        </div>
        <div>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="https://github.com/harshalyeole/MEAN-Git" translate>mean-git.com. </a>{{currentYear}}</div>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {
    currentYear;

    constructor(private _menuService: BaMenuService) {
    }

    ngOnInit() {
        if(localStorage.getItem('roles') === 'user' || localStorage.getItem('roles') === 'investor'){
            this._menuService.updateMenuByRoutes(<Routes>USER_MENU);
        } else {
            this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
        }
        this.currentYear = new Date().getFullYear();
    }
}
