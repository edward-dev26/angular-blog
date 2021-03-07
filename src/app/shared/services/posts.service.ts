import {Injectable} from '@angular/core';
import {FbCreateResponse, Post, TId} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

const url = `${environment.fbDbUrl}posts/`;

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {}

  private normalizeDate(post: Post, id: TId): Post {
    return {
      ...post,
      id,
      date: new Date(post.date)
    };
  }

  create(post: Post) {
    return this.http.post<FbCreateResponse>(`${url}.json`, post)
      .pipe(
        map((response) => ({
          ...post,
          id: response.name
        }))
      );
  }

  getAll(): Observable<Post[]> {
    return this.http.get(`${url}.json`)
      .pipe(
        map((response: { [keys: string]: Post }) => {
          return Object
            .keys(response)
            .map((key) => this.normalizeDate(response[key], key));
        })
      );
  }

  getById(id: TId): Observable<Post> {
    return this.http.get(url + id + '.json')
      .pipe(
        map((response: Post) => this.normalizeDate(response, id))
      );
  }

  update(post: Post): Observable<Post> {
    return this.http.patch<Post>(url + post.id + '.json', post)
      .pipe(
        map((response) => this.normalizeDate(response, post.id))
      );
  }

  delete(id: TId) {
    return this.http.delete(url + id + '.json');
  }
}
