import {Component, forwardRef, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

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
  private val: string | null = null;
  public faTimes = faTimes;
  public focused = false;

  private onChange(_: any) {
  }

  private onTouched(_: any) {
  }

  get value() {
    return this.val;
  }

  set value(value) {
    this.val = value;
    this.onChange(value);
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
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  async handleChange(e: Event) {
    const file = (e.target as HTMLInputElement).files[0];

    this.value = await this.toBase64(file);
  }

  handleClear(e: Event) {
    e.preventDefault();
    this.value = null;
  }

  async handleDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];

    this.value = await this.toBase64(file);
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
