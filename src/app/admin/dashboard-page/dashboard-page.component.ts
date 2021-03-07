import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../shared/services/posts.service';
import {Post, TId} from '../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  public posts: Post[];
  private postsSubscription: Subscription;
  public loading = false;

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.postsSubscription = this.postsService.getAll().subscribe(
      (posts) => {
        this.posts = posts;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  remove(id: TId) {
    console.log('Remove: ', id);
  }
}
