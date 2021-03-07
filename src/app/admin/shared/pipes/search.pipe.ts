import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../../../shared/interfaces';

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], term = ''): Post[] {
    if (!term.trim().length) {
      return posts;
    }

    return posts.filter(({title = ''}) => {
      return title.toLowerCase().includes(term.toLowerCase());
    });
  }
}
