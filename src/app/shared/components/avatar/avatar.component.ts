import {Component, Input} from '@angular/core';

type TSize = 'small' | 'middle' | 'large';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() src: string;
  @Input() size: TSize = 'middle';
}
