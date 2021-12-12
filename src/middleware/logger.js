const logger = (store) => (next) => (action) => {
    console.log(action.type);
    console.log('This is an action: ', action);
    const returnedValue = next(action)
    console.log('This is a  state: ', store.getState());
    console.groupEnd();
    return returnedValue;
    
    }
    
    export default logger;