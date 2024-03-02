import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </Provider>
);
