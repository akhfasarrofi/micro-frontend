import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'remixicon/fonts/remixicon.css'

import Header from 'home/Header';
import Footer from 'home/Footer';
import CartContent from './CartContent';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
