export default store => next => action => {
  let storage = localStorage.getItem('store');
  storage = storage ? JSON.parse(storage) : {};
  switch (action.type) {
    case 'SAVE':
      return Object.assign({}, storage, {
        [action.payload.name]: action.payload,
      })
    case 'REMOVE':
      let newObj = delete storage[action.payload.name];
      return Object.assign({}, storage, newObj);
  }




  if (action.type === 'SAVE' || action.type === 'REMOVE') {
    let saved = store.getState().saved;
    saved = saved || {};
    console.log(saved);
    try {
      localStorage.setItem('store', JSON.stringify(saved));
    }
    catch(e) {
      console.log('Unable to write to localStorage');
    }
  }
  return next(action);
};
