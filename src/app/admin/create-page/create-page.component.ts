import {Component} from '@angular/core';
import {Post} from '../../shared/interfaces';
import {PostsService} from '../../shared/services/posts.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent {
  public isSubmitting = false;

  constructor(
    private postsService: PostsService
  ) {
  }

  handleSubmit(form: FormGroup) {
    this.isSubmitting = true;

    const post: Post = {
      title: form.value.title,
      content: form.value.content,
      author: form.value.author,
      date: new Date(),
    };

    return this.postsService.create(post)
      .subscribe(
        () => {
          this.isSubmitting = false;
          form.reset();
        },
        () => {
          this.isSubmitting = false;
        }
      );
  }
}
