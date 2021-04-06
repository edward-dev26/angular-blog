import {Component, Input} from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent {
  @Input() routerLink: string | any[];
  @Input() animate = false;
  @Input() src;
  @Input() likesCount: number;

  public faHeart = faHeart;
}
