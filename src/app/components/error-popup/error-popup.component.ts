import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IErrorPopup, IEvent} from '../../interfaces/table-data-interface';

@Component({
  selector: 'error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.scss']
})
export class ErrorPopupComponent implements OnInit {
  @Input() errorPopup: IErrorPopup = {};

  @Output() onErrPopupChange = new EventEmitter<IEvent>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onActionClick(): void {
    this.onErrPopupChange.emit({action: 'close'});
  }
}
