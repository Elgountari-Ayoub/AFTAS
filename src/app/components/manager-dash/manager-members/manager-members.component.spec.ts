import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMembersComponent } from './manager-members.component';

describe('ManagerMembersComponent', () => {
  let component: ManagerMembersComponent;
  let fixture: ComponentFixture<ManagerMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerMembersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagerMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
