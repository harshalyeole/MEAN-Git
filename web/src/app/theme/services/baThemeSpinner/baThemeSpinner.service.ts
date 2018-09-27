import {Injectable} from '@angular/core';

@Injectable()
export class BaThemeSpinner {

  //Initial View Loading Spinner
  private _selector:string = 'preloader';
  private _element:HTMLElement;

  //Spiner for show any long openrations
  private _contentselector:string = 'preloaderContent';
  private _contentElement:HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
    this._contentElement = document.getElementById(this._contentselector);
  }

  public show():void {
    this._element.style['display'] = 'block';
  }

  public hide(delay:number = 0):void {
    setTimeout(() => {
      this._element.style['display'] = 'none';
    }, delay);
  }

  public showProgress(delay:number = 0):void {
    setTimeout(() => {
      this._contentElement.style['display'] = 'block';
    }, delay);
  }

  public hideProgress(delay:number = 0):void {
    setTimeout(() => {
      this._contentElement.style['display'] = 'none';
    }, delay);
  }

}
