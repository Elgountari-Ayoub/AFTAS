import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryHuntingsComponent } from './jury-huntings.component';

describe('JuryHuntingsComponent', () => {
  let component: JuryHuntingsComponent;
  let fixture: ComponentFixture<JuryHuntingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuryHuntingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuryHuntingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
