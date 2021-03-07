import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService, TAlert} from '../../services/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 5000;

  public type: TAlert = 'success';
  public text = '';
  private timeout: any;
  private subscription: Subscription;

  constructor(
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.subscription = this.alertService.alert$.subscribe(({type, text}) => {
      this.type = type;
      this.text = text;

      this.timeout = setTimeout(() => {
        clearTimeout(this.timeout);
        this.text = '';
      }, this.delay);
    });
  }

  ngOnDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.subscription?.unsubscribe();
  }
}
