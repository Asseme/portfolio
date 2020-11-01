import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonparcoursComponent } from './monparcours.component';

describe('MonparcoursComponent', () => {
  let component: MonparcoursComponent;
  let fixture: ComponentFixture<MonparcoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonparcoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonparcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
