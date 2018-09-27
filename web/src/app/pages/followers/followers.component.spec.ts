import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Followers } from './followers.component';
describe('Followers', () => {
    let component: Followers;
    let fixture: ComponentFixture<Followers>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Followers]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Followers);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});