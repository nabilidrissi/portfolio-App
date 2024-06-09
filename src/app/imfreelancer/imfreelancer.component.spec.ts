import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImfreelancerComponent } from './imfreelancer.component';

describe('ImfreelancerComponent', () => {
  let component: ImfreelancerComponent;
  let fixture: ComponentFixture<ImfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImfreelancerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
