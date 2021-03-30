import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Option} from '../../interfaces';

type TGetMessage = (error: string | object) => string | void;
type TControlType = 'input' | 'editor' | 'select' | 'image-upload';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() type: TControlType = 'input';
  @Input() htmlType = 'text';
  @Input() validationMessages: { [key: string]: string | TGetMessage };
  @Input() options: Option[] = [];

  isInvalid() {
    return this.form.get(this.name).touched && this.form.get(this.name).invalid;
  }

  getErrorMessage(message: string | TGetMessage, error: string | object) {
    return typeof message === 'function' ? message(error) : message;
  }
}
