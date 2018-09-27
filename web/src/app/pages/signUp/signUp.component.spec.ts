import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {signUp} from './signUp.component';

describe('signUp', () => {
    let component: signUp;
    let fixture: ComponentFixture<signUp>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [signUp]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(signUp);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});