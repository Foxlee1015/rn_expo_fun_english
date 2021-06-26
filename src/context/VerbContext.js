import createDataContext from './createDataContext';
import ServerApi from '../api/server';

const verbReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_verbs':
      return action.payload;
    default:
      return state;
  }
};

const fetchVerbs = dispatch => async () => {
  const response = await ServerApi.get('/verbs/');
  dispatch({ type: 'fetch_verbs', payload: response.data.result });
};
const createVerb = dispatch => async ({present, past, participle, isIrregular, learnLevel} ) => {
  await ServerApi.post('/verbs/', { params:{ present, past, participle, is_irregular:isIrregular, learn_level:learnLevel} });
  navigate('VerbList');
};

export const { Provider, Context } = createDataContext(
    verbReducer,
  { fetchVerbs, createVerb },
  []
);
