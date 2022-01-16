export interface ILot {
  id?: number;
  number?: number;
  lotNumber?: number;
  startDate?: string;
  endDate?: string;
  startPrice?: number;
  currentPrice?: number;
  nextPrice?: number;
  nextStepPrice?: number;
  blitzPrice?: number;
  yourPrice?: number;
  participantsCount?: number;
  isFavorite?: boolean;
  isClosed?: boolean;
  ownerCategoryName?: string;
  visualCategoryName?: string;
  regionName?: string;
  remainedSeconds?: number;
  state?: number;
}

export interface IRegister {
  name?: string;
  secondName?: string;
  middleName?: string;
  gender?: number;
  birthDate?: string;
  passportNumber?: string;
  passportOrgan?: string;
  passportDate?: string;
  regionId?: number;
  address?: string;
  email?: string;
  phone?: string;
  inn?: string;
  balance?: number;
  reservedBalance?: number;
  smsOn?: boolean;
  emailOn?: boolean;
}

export interface ILogin {
  phone?: string;
  code?: string;
}

export interface IToken {
  accessToken?: string;
  expires?: string;
  refreshToken?: string;
}

export interface IFeedback {
  fullName?: string;
  phone?: number;
  text?: string;
}

export interface IBalance {
  destinationType?: number;
  account?: string;
  amount?: number;
}

export interface ILotsList {
  currentPage?: string;
  pageSize?: number;
  result: ILot[];
  totalCount?: number;
}

export interface ITransaction {
  comments?: string;
  dateTime?: string;
  incoming: number;
  outcoming: number;
  number?: string;
  status?: string;
  beforeBlance: number;
  afterbalance: number;
  beforeReservedBalance: number;
  afterReservedBalance: number;
}

export interface IRemainedLotTime {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface ITooltip {
  show?: boolean;
  title?: string;
  msg?: string;
  err?: boolean;
}

export interface IError {
  show?: boolean;
  title?: string;
  msg?: string;
}

export interface IEvent {
  action: string;
  data?: any;
}

export interface IRegion {
  id?: number;
  name?: string;
  regExp?: string;
}

export interface ICategories {
  id?: number;
  name?: string;
  regExp?: string;
}


export interface IMinMaxPrice {
  min?: number;
  max?: number;
}

export interface IGender {
  id?: number;
  name?: string;
}

export interface IFiledError {
  fieldName?: string;
  message?: string;
}

export interface IParamsGetLots {
  number?: string;
  id?: string;
  regionId?: number;
  visualCategoryId?: number;
  ownerCategoryId?: number;
  priceFrom?: number;
  priceTo?: number;
  page?: string;
  size?: string;
  lang?: string;
}

export interface IParamsGetLot {
  id?: string;
  lang?: string;
}

export interface IParamsPotsBitLot {
  lotId?: number;
  excpectedPrice?: number;
}
