import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../shared/services/posts.service';
import {switchMap} from 'rxjs/operators';
import {Post} from '../shared/interfaces';

interface Params {
  id: string;
}

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  public loading = false;
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postService.getById(params.id);
        })
      )
      .subscribe(
        (post) => {
          this.post = post;
          this.loading = false;
        },
        () => {
          this.loading = false;
        });
  }
}
