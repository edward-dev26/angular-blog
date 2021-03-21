import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent {
  @Input() addBtnTitle = 'Add';
  @Input() addRouterLink: string | any[];
  @Output() filterChange = new EventEmitter<string>();

  public faPlusCircle = faPlusCircle;

  handleTermChange(term: string) {
    this.filterChange.emit(term);
  }
}
