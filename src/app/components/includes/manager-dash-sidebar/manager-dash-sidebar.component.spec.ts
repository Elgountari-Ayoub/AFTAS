import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashSidebarComponent } from './manager-dash-sidebar.component';

describe('ManagerDashSidebarComponent', () => {
  let component: ManagerDashSidebarComponent;
  let fixture: ComponentFixture<ManagerDashSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerDashSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerDashSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
