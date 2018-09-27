import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {Router} from "@angular/router";
import {AuthenticationHelper} from "../../../app.authentication";

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.scss'],
  templateUrl: './baContentTop.html',
})
export class BaContentTop {

  public activePageTitle:string = '';

  constructor(private _state:GlobalState, private router: Router,private authentication: AuthenticationHelper) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
        this.activePageTitle = activeLink.title;
    });
  }

  ngAfterViewInit() {
    this.authentication.getChangedContentTopText().subscribe(item => {
      if (item) {
        this.activePageTitle = item;
      }
    });
  }
}
