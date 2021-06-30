import createDataContext from './createDataContext';

const canvasObjectReducer = (state, action) => {
  switch (action.type) {
    case 'update_target':
      return {...state, target: action.payload};
    case 'update_current_location':
      return {...state, curLocation: action.payload};
    case 'update_next_location':
      return {...state, nextLocation: action.payload};
    default:
      return state;
  }
};


const updateTarget = dispatch => target => {
  dispatch({ type: 'update_target', payload: target });
};


const updateCurrentLocation = dispatch => location => {
  dispatch({ type: 'update_current_location', payload: location });
};
const updateNextLocation = dispatch => location => {
  dispatch({ type: 'update_next_location', payload: location });
};


export const { Provider, Context } = createDataContext(
  canvasObjectReducer,
  { updateTarget, updateCurrentLocation, updateNextLocation },
  { target: null, curLocation: {x:0, y:0}, nextLocation: {x:0, y:0}}
);
