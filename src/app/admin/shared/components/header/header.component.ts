import {Component} from '@angular/core';
import {Link} from '../../../../shared/interfaces';
import {faSignOutAlt, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public faTimesCircle = faTimesCircle;
  public links: Link[] = [
    {
      title: 'Exit',
      routerLink: '/',
      icon: faTimesCircle
    },
    {
      title: 'Sign Out',
      action: this.logout.bind(this),
      icon: faSignOutAlt
    }
  ];

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
