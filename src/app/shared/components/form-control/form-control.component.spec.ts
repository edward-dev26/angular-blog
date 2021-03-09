import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormControlComponent} from './form-control.component';
import {SharedModule} from '../../shared.module';
import {FormControl, FormGroup} from '@angular/forms';

describe('FormControlComponent', () => {
  let component: FormControlComponent;
  let fixture: ComponentFixture<FormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormControlComponent],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      test: new FormControl('')
    });
    component.placeholder = 'Placeholder';
    component.name = 'test';
    component.type = 'input';
    component.htmlType = 'text';
    component.label = 'Label';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
