import {Component, ElementRef, HostListener} from '@angular/core';
import {AuthenticationHelper} from '../../../app.authentication';
import {GlobalState} from '../../../global.state';
import {layoutSizes} from '../../../theme';
import {AppConstant} from "../../../app.constant";

@Component({
  selector: 'ba-sidebar',
  templateUrl: './baSidebar.html',
  styleUrls: ['./baSidebar.scss']
})

export class BaSidebar extends AppConstant {
  public menuHeight:number;
  public isMenuCollapsed:boolean = false;
  public isMenuShouldCollapsed:boolean = false;
  public userProfileImage: string;
  public userName: string;

  constructor(private _elementRef:ElementRef,public authentication: AuthenticationHelper, private _state:GlobalState) {
    super();
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
    this.userName = localStorage.getItem('userName') || 'Admin';
    this.userProfileImage = localStorage.getItem('profileImageURL');
  }

  public ngOnInit():void {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
    this.authentication.getUserValueChangeEmitter().subscribe(item => this.setUserInfo());
  }

  public ngAfterViewInit():void {
    setTimeout(() => this.updateSidebarHeight());
  }

  @HostListener('window:resize')
  public onWindowResize():void {

    var isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  public menuExpand():void {
    this.menuCollapseStateChange(false);
  }

  public menuCollapse():void {
    this.menuCollapseStateChange(true);
  }

  public menuCollapseStateChange(isCollapsed:boolean):void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  public updateSidebarHeight():void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  private _shouldMenuCollapse():boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
  
  // to set updated user details
  public setUserInfo() {
    let input = this.authentication.getUser();
    this.userProfileImage = input.profileImageURL;
    this.userName = input.firstName;
  }
}
