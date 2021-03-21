import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

export type TInput = 'text' | 'search';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() name = '';
  @Input() type: TInput = 'text';
  @Input() htmlType = 'text';
  @Input() placeholder = '';
  @Input() icon: IconDefinition;

  @Input() ngModel = '';
  @Output() ngModelChange = new EventEmitter<string>();

  public focused = false;

  get currentIcon(): IconDefinition {
    return this.icon ||
    this.type === 'search' ? faSearch : null;
  }

  handleKeyUp(e: Event) {
    const value = (e.target as HTMLInputElement).value;

    this.ngModelChange.emit(value);
  }
}
