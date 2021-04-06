import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {TId} from '../../../../shared/interfaces';

export interface PostFormValue {
  title: string;
  content: string;
  author: string;
  category: TId;
  preview: string;
  image: string;
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public validationMessages = {
    required: 'This field is required!',
    minlength: (error) => `Min length is ${error.requiredLength} symbols!`,
    maxlength: (error) => `Max length is ${error.requiredLength} symbols!`,
  };
  private subscriptions: Subscription[] = [];
  private initialValue: PostFormValue | {} = {};

  @Input() isSubmitting = false;
  @Input() title: string;
  @Input() saveBtnTitle: string;
  @Input() initialValue$: Observable<PostFormValue>;
  @Output() onSubmit = new EventEmitter<FormGroup>();

  ngOnInit() {
    const subscription = this.initialValue$?.subscribe(initialValue => {
      this.resetToInitialValue(initialValue);
      this.initialValue = initialValue;
    });

    this.subscriptions.push(subscription);

    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ]),
      content: new FormControl(null, [
        Validators.required
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      category: new FormControl(null, [
        Validators.required,
      ]),
      preview: new FormControl(null, [
        Validators.required,
        Validators.maxLength(400)
      ]),
      image: new FormControl(null, [
        Validators.required
      ])
    });
  }

  resetToInitialValue(initialValue) {
    this.form.reset(initialValue);
    this.form.markAsPristine();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription?.unsubscribe();
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form);
      this.form.markAsPristine();
    } else {
      this.form.markAllAsTouched();
    }
  }

  handleDiscard() {
    if (this.form.dirty) {
      this.resetToInitialValue(this.initialValue);
    }
  }
}
