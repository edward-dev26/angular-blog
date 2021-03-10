import {Component} from '@angular/core';
import {Link} from '../../interfaces';

interface Links {
  left: Link[];
  right: Link[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public links: Links = {
    left: [
      {
        title: 'Home',
        routerLink: '/'
      },
    ],
    right: [
      {
        title: 'Admin',
        routerLink: '/admin'
      }
    ]
  };
}
