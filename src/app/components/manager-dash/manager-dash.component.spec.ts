import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashComponent } from './manager-dash.component';

describe('ManagerDashComponent', () => {
  let component: ManagerDashComponent;
  let fixture: ComponentFixture<ManagerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
