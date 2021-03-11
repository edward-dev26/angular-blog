import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../shared/services/posts.service';
import {switchMap} from 'rxjs/operators';
import {Post} from '../shared/interfaces';
import {NgxUiLoaderService} from 'ngx-ui-loader';

interface Params {
  id: string;
}

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.ngxLoader.start();
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postService.getById(params.id);
        })
      )
      .subscribe(
        (post) => {
          this.post = post;
          this.ngxLoader.stop();
        },
        () => {
          this.ngxLoader.stop();
        });
  }
}
