import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetails } from './userDetails.component';
describe('UserDetails', () => {
    let component: UserDetails;
    let fixture: ComponentFixture<UserDetails>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserDetails]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetails);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});