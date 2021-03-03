import {Injectable} from '@angular/core';
import {FbCreateResponse, Post} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

const url = `${environment.fbDbUrl}posts/`;

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(private http: HttpClient) {
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
}
