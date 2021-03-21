import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {PostsService} from '../../shared/services/posts.service';
import {Post, TId} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {AlertService} from '../shared/services/alert.service';
import {faEdit, faEllipsisV, faTrash} from '@fortawesome/free-solid-svg-icons';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  public posts: Post[];
  private subscriptions: Subscription[] = [];
  public loading = false;
  public term = '';
  public columnsToDisplay = ['id', 'title', 'author', 'date', 'actions'];
  public dataSource = new MatTableDataSource([]);

  public faEllipsisV = faEllipsisV;
  public faEdit = faEdit;
  public faTrash = faTrash;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private postsService: PostsService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.loading = true;
    const subscription = this.postsService.getAll().subscribe(
      (posts) => {
        this.dataSource = new MatTableDataSource(posts);
        this.dataSource.sort = this.sort;
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
    this.subscriptions.forEach(subscription => {
      subscription?.unsubscribe();
    });
  }

  delete(id: TId) {
    const subscription = this.postsService.delete(id)
      .subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id);
        this.alertService.success('Post has been deleted!');
      });

    this.subscriptions.push(subscription);
  }

  handleFilterChange(term: string) {
    this.dataSource.filter = term.trim().toLowerCase();
  }
}
