import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from './createDataContext';
import serverApi from '../api/server';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('PrepositionLocation');
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ username, password, passwordConfirm }) => {
  try {
    let form = new FormData() 
    form.append('name', username) 
    form.append('password',password)
    form.append('password_confirm',passwordConfirm)
    const response = await serverApi.post('/users', form);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigate('Main');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    });
  }
};

const signin = dispatch => async ({ username, password }) => {
  try {
    let form = new FormData() 
    form.append('username', username) 
    form.append('password',password)
    const response = await serverApi.post('/tokens/', form);
    console.log(response);
    await AsyncStorage.setItem('token', response.result);
    dispatch({ type: 'signin', payload: response.result });
    navigate('VerbList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
);
