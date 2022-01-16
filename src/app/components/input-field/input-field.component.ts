import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {IEvent} from "../../interface";

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() value: string = '';
  @Input() type: string = 'text';
  @Input() fontSize: string = '18px';
  @Input() placeholder: string = '';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;

  @Output() onInputFieldChange = new EventEmitter<IEvent>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onInputFiledClick(): void {

  }

  onItemValueClean(inputEl: HTMLInputElement): void {
    inputEl.value = '';
    this.onInputFieldChange.emit({data: '', action: 'text-changed'});
  }

  onInputFiledKeyUp(): void {
    this.onInputFieldChange.emit({data: this.value, action: 'text-changed'});
  }

}
