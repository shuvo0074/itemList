import {combineReducers} from 'redux';
import {authReducer} from '../stacks/auth/reducers';
import {commonReducer} from '../stacks/app/reducers';

const appReducers = combineReducers({
  auth: authReducer,
  app: commonReducer,
});

const reducers = (state, action) => {
  return appReducers(state, action);
};

export default reducers;
