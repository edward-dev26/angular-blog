import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent {
  @Input() title = 'Form';
  @Input() saveBtnTitle = 'Save';
  @Input() disabledSaveBtn = false;
  @Input() discardBtnTitle = 'Discard';
  @Output() onSubmit = new EventEmitter();
  @Output() onDiscard = new EventEmitter();
}
