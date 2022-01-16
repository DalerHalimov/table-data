import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TableDataComponent} from './table-data/table-data.component';
import {PaginationComponent} from './pagination/pagination.component';
import {InputFieldComponent} from './input-field/input-field.component';
import {AddFormComponent} from './add-form/add-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TableDataComponent,
    PaginationComponent,
    InputFieldComponent,
    AddFormComponent
  ],
  exports: [
    TableDataComponent,
    PaginationComponent,
    InputFieldComponent,
    AddFormComponent
  ]
})
export class SharedComponentsModule {
}

