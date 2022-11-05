import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

import postsReducer from '../features/posts/postsSlice'
import jsonsReducer from '../features/jsons/jsonsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    jsons: jsonsReducer,
  },
});
