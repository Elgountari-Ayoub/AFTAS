import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryMembersComponent } from './jury-members.component';

describe('JuryMembersComponent', () => {
  let component: JuryMembersComponent;
  let fixture: ComponentFixture<JuryMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuryMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuryMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
