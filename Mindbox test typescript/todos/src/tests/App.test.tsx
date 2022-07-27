// С тестами не сталкивался, но думаю быстро их изучу, сделал по аналогии, которую юзал из habr

import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../app/store';

test('App renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
