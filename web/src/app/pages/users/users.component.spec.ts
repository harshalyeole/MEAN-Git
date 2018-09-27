import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Users } from './users.component';
describe('Users', () => {
    let component: Users;
    let fixture: ComponentFixture<Users>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Users]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Users);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});