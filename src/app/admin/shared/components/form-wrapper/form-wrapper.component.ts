import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent {
  @Input() title = 'Form';
  @Input() saveBtnTitle = 'Save';
  @Input() discardBtnTitle = 'Discard';
}
