import { combineReducers } from 'redux';
import monstersReducer from './monstersReducer';
import playersReducer from './playersReducer';
import monsterUrlsReducer from './monsterUrlsReducer';
import currentTabReducer from './currentTabReducer';
import turnOrderReducer from './turnOrderReducer';
import selectedMonsterReducer from './selectedMonsterReducer';

const reducer = combineReducers({
  monsters: monstersReducer,
  players: playersReducer,
  monsterUrls: monsterUrlsReducer,
  currentTab: currentTabReducer,
  turnOrder: turnOrderReducer,
  selectedMonster: selectedMonsterReducer
});

export default reducer;
