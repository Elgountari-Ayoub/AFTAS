import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDashSidebarComponent } from './member-dash-sidebar.component';

describe('MemberDashSidebarComponent', () => {
  let component: MemberDashSidebarComponent;
  let fixture: ComponentFixture<MemberDashSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberDashSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberDashSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
