import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersItemComponent } from './parameters-item.component';

describe('ParametersItemComponent', () => {
  let component: ParametersItemComponent;
  let fixture: ComponentFixture<ParametersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
