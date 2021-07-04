import createDataContext from './createDataContext';

const prepositionReducer = (state, action) => {
  switch (action.type) {
    case 'update_type':
      return action.payload;
    default:
      return state;
  }
};


const updateType = dispatch => type => {
  dispatch({ type: 'update_type', payload: type });
};


export const { Provider, Context } = createDataContext(
  prepositionReducer,
  { updateType },
  'place'
);
