import {Component, EventEmitter, Input, Output} from '@angular/core';

type TButton = 'primary' | 'light' | 'action' | 'simple';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() type: TButton = 'simple';
    @Input() htmlType = 'button';
    @Input() routerLink: string | any[];
    @Input() disabled = false;

    public get color() {
        return this.type === 'primary' ? 'primary' : '';
    }
}
