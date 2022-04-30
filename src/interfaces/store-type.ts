import { myDataReducerType } from './my-data-reducer-types';
import { pmPageReducerStateType } from './Pm-Page-types';

export type storeType = {
  myData: myDataReducerType;
  pmPage: pmPageReducerStateType;
};
