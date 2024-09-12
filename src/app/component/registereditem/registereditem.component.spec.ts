import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistereditemComponent } from './registereditem.component';

describe('RegistereditemComponent', () => {
  let component: RegistereditemComponent;
  let fixture: ComponentFixture<RegistereditemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistereditemComponent]
    });
    fixture = TestBed.createComponent(RegistereditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
