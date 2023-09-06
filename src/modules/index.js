/**
 * ROOT Reducer 생성
 * reducer를 하나로 합친다.
 */
import { combineReducers } from 'redux';
import textSizeReducer from './textSize';

const rootReducer = combineReducers({
    textSizeReducer,
});

export default rootReducer;
