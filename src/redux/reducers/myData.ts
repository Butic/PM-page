import { actionCreatorInterface } from '../../interfaces/actionCreatorInterface';
import { profileCard } from './enums-reducer';
import { profileCardInterface } from '../../interfaces/profile-card-interface';
import { myDataReducerType, myDataType } from '../../interfaces/my-data-reducer-types';

const emptyData: myDataType = {
  _id: '',
  name: '',
  role: '',
  experience: '',
  projects: [],
  tasks: [],
  stack: '',
  sideInfo: '',
};

const InitialState = {
  myData: { ...emptyData },
};

export const myDataReducer = (state:myDataReducerType = InitialState, action: actionCreatorInterface):myDataReducerType => {
  switch (action.type) {
  case profileCard.GET_MY_DATA:
    console.log(action.payload);
    return { ...state, myData: action.payload } as myDataReducerType;
  default:
    return state;
  }
};

export const getMyDataActionCreator = (myData: profileCardInterface) => ({
  type: profileCard.GET_MY_DATA,
  payload: myData,
});
