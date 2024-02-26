import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashNavbarComponent } from './dash-navbar.component';

describe('DashNavbarComponent', () => {
  let component: DashNavbarComponent;
  let fixture: ComponentFixture<DashNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
