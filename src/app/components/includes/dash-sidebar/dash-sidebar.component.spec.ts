import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSidebarComponent } from './dash-sidebar.component';

describe('DashSidebarComponent', () => {
  let component: DashSidebarComponent;
  let fixture: ComponentFixture<DashSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
