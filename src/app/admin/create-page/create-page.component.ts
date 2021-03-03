import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../shared/interfaces';
import {PostsService} from '../../shared/services/posts.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  public form: FormGroup;
  public validationMessages = {
    required: 'This field is required!',
    minLength: (error) => `Min length is ${error.requiredLength} symbols!`
  };

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
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
      ])
    });
  }

  handleSubmit() {
    const post: Post = {
      title: this.form.value.title,
      content: this.form.value.content,
      author: this.form.value.author,
      date: new Date(),
    };

    this.postsService.create(post)
      .subscribe((newPost) => {
        this.form.reset();
        console.log(newPost);
      });
  }
}
