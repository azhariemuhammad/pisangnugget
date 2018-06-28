import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './components/home/Home';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div>
      <Home />
    </div>
  )
}