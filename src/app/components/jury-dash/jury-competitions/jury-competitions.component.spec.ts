import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryCompetitionsComponent } from './jury-competitions.component';

describe('JuryCompetitionsComponent', () => {
  let component: JuryCompetitionsComponent;
  let fixture: ComponentFixture<JuryCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuryCompetitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuryCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
