import {Component, Input} from '@angular/core';
import {IEvent, ITableData, ITableDataSortConfig} from '../../interfaces/table-data-interface';
import {AppService} from '../../app.service';

@Component({
  selector: 'table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {
  @Input() public tableData: ITableData[] = [];
  public tableDataRowIdx = -1;
  public tableSortConfig: ITableDataSortConfig | any = {
    id: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  };

  private _tableData: ITableData[] = []

  constructor(private appService: AppService) {
  }

  public onAddFormClick(): void {
    this.appService.showAddFormPopup = true;
  }

  public onInputFieldChange(evt: IEvent): void {
    if (!this._tableData?.length) {
      this._tableData = [...this.tableData];
    }
    const val = evt?.data.trim().toLocaleLowerCase();
    this.tableData = val ? this._tableData.filter((item: ITableData) => {
      return item?.id?.toString().includes(val) ||
        item?.firstName?.toLocaleLowerCase().includes(val) ||
        item?.lastName?.toLocaleLowerCase().includes(val) ||
        item?.email?.toLocaleLowerCase().includes(val) ||
        item?.phone?.toLocaleLowerCase().includes(val);
    }) : this._tableData;
  }


  public onSortClick(key: string): void {
    if (this.tableData?.length) {
      this.tableSortConfig[key] = !this.tableSortConfig[key];
      this.tableData.sort((a: ITableData | any, b: ITableData | any) => {
        let _a = !isNaN(a[key]) ? a[key] : a[key].toLocaleLowerCase();
        let _b = !isNaN(b[key]) ? b[key] : b[key].toLocaleLowerCase();
        if (!this.tableSortConfig[key]) {
          [_a, _b] = [_b, _a];
        }
        if (_a < _b) {
          return -1;
        }
        if (_a > _b) {
          return 1;
        }
        return 0;
      });
    }
  }

  public onTableRowClick(idx: number = -1): void {
    this.tableDataRowIdx === idx ? this.tableDataRowIdx = -1 : this.tableDataRowIdx = idx;
  }

}
