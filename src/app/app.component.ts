import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {TableService} from './services/table.service';
import {IEvent, IParamsGetTableData, ITableData} from './interfaces/table-data-interface';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public tableData: ITableData[] = [];

  private destroy$: Subject<boolean> = new Subject<boolean>()

  constructor(public appService: AppService,
              private tableService: TableService) {
  }

  ngOnInit(): void {
    const getTableDataParams: IParamsGetTableData = {};
    getTableDataParams.rows = 15;
    this.getTableData(getTableDataParams);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public onAddFormChange(evt: IEvent): void {
    if (evt.action === 'add') {
      this.tableData.unshift(evt?.data);
    }
    this.appService.showAddFormPopup = false;
  }

  public onPaginationChange(evt: IEvent): void {
    const getTableDataParams: IParamsGetTableData = {};
    this.getTableData(getTableDataParams);
  }

  public onErrPopupChange(evt: IEvent): void {
    this.appService.errorPopup.show = false;
  }

  private getTableData(tableDataParams: IParamsGetTableData): void {
    this.tableService.getTableData(tableDataParams)
      .pipe(takeUntil(this.destroy$)).subscribe((res: ITableData[]) => {
      this.tableData = res;
    });
  }
}
