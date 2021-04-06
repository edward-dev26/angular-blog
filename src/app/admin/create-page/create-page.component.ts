import {Component} from '@angular/core';
import {Post} from '../../shared/interfaces';
import {PostsService} from '../../shared/services/posts.service';
import {FormGroup} from '@angular/forms';
import {AlertService} from '../shared/services/alert.service';
import {PostFormValue} from '../shared/components/post-form/post-form.component';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent {
  public isSubmitting = false;

  constructor(
    private postsService: PostsService,
    private alert: AlertService
  ) {
  }

  handleSubmit(form: FormGroup) {
    this.isSubmitting = true;
    const values: PostFormValue = form.value;

    const post: Post = {
      title: values.title,
      content: values.content,
      author: values.author,
      category: values.category,
      image: values.image,
      preview: values.preview,
      date: new Date(),
      likesCount: 0
    };

    return this.postsService.create(post)
      .subscribe(
        () => {
          this.isSubmitting = false;
          form.reset();
          this.alert.success('Post has been created!');

        },
        () => {
          this.isSubmitting = false;
          this.alert.danger('Ops! Something went wrong!');
        }
      );
  }
}
