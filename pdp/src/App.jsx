import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from './PDPContent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Switch>
          <Route path="/product/:id" component={PDPContent} />
        </Switch>
        <PDPContent />
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
