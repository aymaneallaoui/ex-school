import Cinputs from './cinputs';
import CoutPut from './couputs';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <Cinputs />
      <CoutPut />
    </div>
  </Provider>
);

export default App;
