import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryDashSidebarComponent } from './jury-dash-sidebar.component';

describe('JuryDashSidebarComponent', () => {
  let component: JuryDashSidebarComponent;
  let fixture: ComponentFixture<JuryDashSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuryDashSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuryDashSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
