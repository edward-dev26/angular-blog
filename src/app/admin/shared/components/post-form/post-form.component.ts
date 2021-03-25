import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';

export interface PostFormValue {
  title: string;
  content: string;
  author: string;
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
    minlength: (error) => `Min length is ${error.requiredLength} symbols!`
  };
  private subscriptions: Subscription[] = [];
  @Input() isSubmitting = false;
  @Input() btnText = 'Add';
  @Input() initialValue$: Observable<PostFormValue>;
  @Output() onSubmit = new EventEmitter<FormGroup>();

  ngOnInit() {
    const subscription = this.initialValue$?.subscribe(initialValue => {
      this.form.setValue(initialValue);
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
      ])
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription?.unsubscribe();
    });
  }

  handleSubmit() {
    this.onSubmit.emit(this.form);
  }
}
