import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoSComponent } from './to-do-s.component';

describe('ToDoSComponent', () => {
  let component: ToDoSComponent;
  let fixture: ComponentFixture<ToDoSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
