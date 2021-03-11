import {Component, OnInit} from '@angular/core';
import {Link} from '../../../../shared/interfaces';
import {faSignOutAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public links: Link[] = [
    {
      title: 'Exit',
      routerLink: '/',
      icon: faTimesCircle
    },
    {
      title: 'Sign Out',
      routerLink: '/admin',
      icon: faSignOutAlt
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
