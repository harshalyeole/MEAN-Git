import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {App} from './app.component';
describe('App', () => {
    let component: App;
    let fixture: ComponentFixture<App>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [App]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(App);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});