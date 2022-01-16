import {Component, Input, EventEmitter, Output} from '@angular/core';
import {IEvent} from '../../interfaces/table-data-interface';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  value: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  @Output() onInputFieldChange = new EventEmitter<IEvent>();


  onItemValueClean(inputEl: HTMLInputElement): void {
    inputEl.value = '';
    this.onInputFieldChange.emit({data: '', action: 'text-change'});
  }

  onInputFiledKeyUp(): void {
    this.onInputFieldChange.emit({data: this.value, action: 'text-change'});
  }

}
