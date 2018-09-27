import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Login} from './login.component';

describe('Login', () => {
    let component: Login;
    let fixture: ComponentFixture<Login>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Login]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Login);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});