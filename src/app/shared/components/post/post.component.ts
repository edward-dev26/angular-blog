import {Component, Input} from '@angular/core';
import {Post} from '../../interfaces';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post;
  faHeart = faHeart;
}
