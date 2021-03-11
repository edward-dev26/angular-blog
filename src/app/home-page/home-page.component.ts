import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../shared/interfaces';
import {PostsService} from '../shared/services/posts.service';
import {Subscription} from 'rxjs';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public posts: Post[];
  private subscriptions: Subscription[] = [];

  constructor(
    private postsService: PostsService,
    private ngxLoader: NgxUiLoaderService
  ) {}

  ngOnInit() {
    this.ngxLoader.start();
    const subscription = this.postsService.getAll().subscribe(posts => {
        this.posts = posts;
        this.ngxLoader.stop();
      },
      () => {
        this.ngxLoader.stop();
      }
    );

    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription?.unsubscribe();
    });
  }
}
