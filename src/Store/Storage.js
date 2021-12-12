import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
 
// Note: this API requires redux@>=3.1.0
// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

const logger= (store) => (next) => (action) => {
    console.log(action.type);
    console.log('The action: ', action);
    const returnedValue = next(action)
    console.log('The new state: ', store.getState());
    console.groupEnd();
    return returnedValue;
    }
    


const store = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)

)


export {store}
