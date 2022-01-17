import {Injectable} from '@angular/core';
import {IErrorPopup} from "./interfaces/table-data-interface";

@Injectable()
export class AppService {
  public errorPopup: IErrorPopup = {};
  public showAddFormPopup = false

  constructor() {
  }
}
