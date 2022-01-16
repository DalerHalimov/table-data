import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IEvent} from '../../interfaces/table-data-interface';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  public form!: FormGroup;
  public submitted = false;

  public get addFormControl(): any {
    return this.form.controls
  }

  @Output() onAddFormChange = new EventEmitter<IEvent>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  public onCloseClick(): void {
    this.onAddFormChange.emit({action: 'close'});
  }

  public onAddClick(): void {
    this.submitted = true;
    const data = {id: Math.floor(Math.random() * 100), ...this.form.value};
    this.onAddFormChange.emit({data, action: 'add'});
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      description: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: this.formBuilder.group({
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        streetAddress: new FormControl('', [Validators.required]),
        zip: new FormControl('', [Validators.required]),
      })
    });
  }
}

