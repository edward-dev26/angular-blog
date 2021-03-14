import {Component, Input} from '@angular/core';
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

  public focused = false;

  get currentIcon(): IconDefinition {
    return this.icon ||
    this.type === 'search' ? faSearch : null;
  }
}
