import {Component, EventEmitter, forwardRef, Input, Output, Provider} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export type TInput = 'text' | 'search';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class InputComponent implements ControlValueAccessor {
  @Input() name = '';
  @Input() type: TInput = 'text';
  @Input() htmlType = 'text';
  @Input() placeholder = '';
  @Input() icon: IconDefinition;
  @Output() valueChanged = new EventEmitter<string>();

  public focused = false;
  public value = '';
  private onChange(_: any) {}
  private onTouched(_: any) {}

  get currentIcon(): IconDefinition {
    return this.icon ||
    this.type === 'search' ? faSearch : null;
  }

  handleKeyUp(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.onChange(this.value);
    this.valueChanged.emit(this.value);
  }

  handleBlur() {
    this.focused = false;
    this.onTouched(true);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value || '';
  }
}
