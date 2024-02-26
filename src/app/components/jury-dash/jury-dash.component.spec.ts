import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryDashComponent } from './jury-dash.component';

describe('JuryDashComponent', () => {
  let component: JuryDashComponent;
  let fixture: ComponentFixture<JuryDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuryDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuryDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
