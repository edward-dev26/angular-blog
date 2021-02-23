import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  isSubmitting = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
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

  isInvalid(controlName: string) {
    return this.form.get(controlName).touched && this.form.get(controlName).invalid;
  }

  submit() {
    this.isSubmitting = true;
    this.auth.login({...this.form.value})
      .subscribe(() => {
        this.isSubmitting = false;
        this.router.navigate(['/admin', 'dashboard']);
      });
  }
}
