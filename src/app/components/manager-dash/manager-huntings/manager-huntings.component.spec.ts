import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHuntingsComponent } from './manager-huntings.component';

describe('ManagerHuntingsComponent', () => {
  let component: ManagerHuntingsComponent;
  let fixture: ComponentFixture<ManagerHuntingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerHuntingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerHuntingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
