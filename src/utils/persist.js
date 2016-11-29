export default store => next => action => {
  if (action.type === 'SAVE' || action.type === 'REMOVE') {
    try {
      localStorage.setItem('store', JSON.stringify(store.saved));
    }
    catch(e) {
      console.log('Unable to write to localStorage');
    }
  }
  return next(action);
};
