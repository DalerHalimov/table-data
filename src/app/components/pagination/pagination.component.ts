import {Component, Output, EventEmitter} from '@angular/core';
import {IEvent} from '../../interfaces/table-data-interface';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  selectedPage: number = 0;

  @Output() onPaginationChange = new EventEmitter<IEvent>();

  onPageClick(idx: number = 0): void {
    this.selectedPage = idx;
    this.onPaginationChange.emit({action: 'pagination', data: this.selectedPage});
  }

  onNextPageClick(isNext: boolean = true): void {
    const imgLen = this.pages?.length - 1 || 0;
    isNext ? imgLen > this.selectedPage ?
      this.selectedPage++ : this.selectedPage = 0 : this.selectedPage > 0 ?
      this.selectedPage-- : this.selectedPage = imgLen;
    this.onPaginationChange.emit({action: 'pagination', data: this.selectedPage});
  }
}
