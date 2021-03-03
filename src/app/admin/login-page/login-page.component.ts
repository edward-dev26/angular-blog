import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

interface LoginPageQueries {
  permissionDenied: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  isSubmitting = false;
  message: string | null = null;

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: LoginPageQueries) => {
      if (params.permissionDenied) {
        this.message = 'Authorization failed! Please login again.';
      }
    });

    this.auth.error$.subscribe((message: string) => {
      this.message = message;
    });

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  getMinLengthMessage(error) {
    return `Min password length is ${error.requiredLength} symbols!`;
  }

  submit() {
    this.isSubmitting = true;
    this.auth.login({...this.form.value})
      .subscribe(
        () => {
          this.isSubmitting = false;
          this.router.navigate(['/admin', 'dashboard']);
        },
        () => {
          this.isSubmitting = false;
        }
      );
  }
}
