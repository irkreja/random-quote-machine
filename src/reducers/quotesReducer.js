import { FETCH_QUOTES, NEW_QUOTE } from '../constants';

const initialState = {
  loading: true,
  error: false,
  data: [],
  randomNumber: '',
  colors: [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857',
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case NEW_QUOTE:
      return {
        ...state,
        randomNumber: action.payload,
      };
    default:
      return state;
  }
}
