import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCompetitionsComponent } from './manager-competitions.component';

describe('ManagerCompetitionsComponent', () => {
  let component: ManagerCompetitionsComponent;
  let fixture: ComponentFixture<ManagerCompetitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerCompetitionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerCompetitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
