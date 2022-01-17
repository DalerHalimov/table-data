import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IParamsGetTableData, ITableData} from '../interfaces/table-data-interface';

@Injectable()
export class TableService {
  private baseUrl: string = 'http://www.filltext.com';

  constructor(private http: HttpClient) {
  }

  public getTableData(params: IParamsGetTableData): Observable<ITableData[]> {
    const par = new HttpParams()
      .append('rows', `${params?.rows ? params.rows : '15'}`)
      .append('id', `${params?.id ? params.id : '{number|1000}'}`)
      .append('firstName', `${params?.firstName ? params.firstName : '{firstName}'}`)
      .append('lastName', `${params?.lastName ? params.lastName : '{lastName}'}`)
      .append('email', `${params?.email ? params.email : '{email}'}`)
      .append('phone', `${params?.phone ? params.phone : '{phone}'}`)
      .append('address', `${params?.address ? params.address : '{addressObject}'}`)
      .append('description', `${params?.description ? params.description : '{lorem|32}'}`)
    return this.http.get<ITableData[]>(this.baseUrl, {params: par});
  }
}
