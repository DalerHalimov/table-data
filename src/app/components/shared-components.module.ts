import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TooltipComponent} from './tooltip/tooltip.component';
import {ConfirmPopupComponent} from './confirm-popup/confirm-popup.component';
import {ProductComponent} from './product/product.component';
import {UserDataComponent} from './user-data/user-data.component';
import {DropDownComponent} from './drop-down/drop-down.component';
import {ImgSliderComponent} from './img-slider/img-slider.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {ErrorPopupComponent} from './error-popup/error-popup.component';
import {TimerComponent} from './timer/timer.component';
import {ImgUploaderComponent} from './img-uploader/img-uploader.component';
import {InputFieldComponent} from './input-field/input-field.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    ProductComponent,
    TooltipComponent,
    ConfirmPopupComponent,
    UserDataComponent,
    DropDownComponent,
    ImgSliderComponent,
    SpinnerComponent,
    ErrorPopupComponent,
    TimerComponent,
    ImgUploaderComponent,
    InputFieldComponent
  ],
  exports: [
    ProductComponent,
    TooltipComponent,
    ConfirmPopupComponent,
    UserDataComponent,
    DropDownComponent,
    ImgSliderComponent,
    SpinnerComponent,
    ErrorPopupComponent,
    TimerComponent,
    ImgUploaderComponent,
    InputFieldComponent
  ]
})
export class SharedComponentsModule {
}

