/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

export interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
