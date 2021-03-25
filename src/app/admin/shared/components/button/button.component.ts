import {Component, Input} from '@angular/core';

type TButton = 'primary' | 'light' | 'action' | 'simple';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() type: TButton = 'simple';
    @Input() routerLink: string | any[];

    public get color() {
        return this.type === 'primary' ? 'primary' : '';
    }
}
