import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NavigationBar from './components/molecules/NavigationBar';

const component: React.FC = () => (
  <BrowserRouter>
    <div>
      <NavigationBar
        items={[
          { display: 'Home', to: '/' },
          { display: 'About', to: 'about' },
        ]}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default component;
