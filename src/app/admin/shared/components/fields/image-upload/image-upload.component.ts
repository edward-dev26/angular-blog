import {Component, forwardRef, Input, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {AlertService} from '../../../services/alert.service';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ImageUploadComponent),
  multi: true
};

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class ImageUploadComponent implements ControlValueAccessor {
  @Input() placeholder = 'Click or drag file to upload';

  private val: string | null = null;
  public faTimes = faTimes;
  public focused = false;

  private onChange(_: any) {}
  private onTouched(_: any) {}

  constructor(
    private alert: AlertService
  ) {
  }

  get value() {
    return this.val;
  }

  set value(value) {
    this.val = value;
    this.onChange(value);
    this.onTouched(true);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
      } else {
        reject('File wasn\'t provided');
      }
    });
  }

  async setFile(file) {
    try {
      this.value = await this.toBase64(file);
    } catch (e) {
      this.alert.danger(e);
    }
  }

  handleChange(e: Event) {
    this.setFile((e.target as HTMLInputElement).files[0]);
  }

  handleClear(e: Event) {
    e.preventDefault();
    this.value = null;
  }

  async handleDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    await this.setFile(e.dataTransfer.files[0]);
    this.focused = false;
  }

  handleDrag(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();

    this.focused = true;
  }

  handleDragLeave(e: DragEvent) {
    e.stopPropagation();
    e.preventDefault();

    this.focused = false;
  }
}
