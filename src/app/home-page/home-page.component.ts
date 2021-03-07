import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../shared/interfaces';
import {PostsService} from '../shared/services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  public posts: Post[];
  public loading = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.loading = true;
    const subscription = this.postsService.getAll().subscribe(posts => {
        this.posts = posts;
        this.loading = false;
      },
      () => {
        this.loading = false;
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
