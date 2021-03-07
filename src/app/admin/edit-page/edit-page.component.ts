import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../shared/services/posts.service';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {PostFormValue} from '../shared/components/post-form/post-form.component';
import {Subject} from 'rxjs';
import {Post} from '../../shared/interfaces';
import {FormGroup} from '@angular/forms';

interface Params {
  id: string;
}

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  public initialValue$ = new Subject<PostFormValue>();
  private post: Post;
  public isSubmitting = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postsService.getById(params.id);
        })
      )
      .subscribe((post) => {
        this.post = post;
        this.initialValue$.next({
          title: post.title,
          content: post.content,
          author: post.author
        });
      });
  }

  handleSubmit(form: FormGroup) {
    this.isSubmitting = true;
    this.postsService.update({
      ...this.post,
      ...form.value
    })
      .subscribe(
        () => {
          this.isSubmitting = false;
        },
        () => {
          this.isSubmitting = false;
        }
      );
  }
}
