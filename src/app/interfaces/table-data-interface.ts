export interface ITableData {
  address?: IAddress;
  description?: string;
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  phone?: string;
}

export interface ITableDataSortConfig {
  id?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  phone?: boolean;
}

export interface IAddress {
  city?: string;
  state?: string;
  streetAddress?: string;
  zip?: string;
}

export interface IEvent {
  action: string;
  data?: any;
}

export interface IErrorPopup {
  title?: string;
  msg?: string;
  show?: boolean;
}

export interface IParamsGetTableData {
  id?: number;
  number?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: number;
  address?: IAddress;
  rows?: number | 0;
  description?: string;
}
