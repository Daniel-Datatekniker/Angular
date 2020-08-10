import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemateComponent } from './sidemate.component';

describe('SidemateComponent', () => {
  let component: SidemateComponent;
  let fixture: ComponentFixture<SidemateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidemateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
