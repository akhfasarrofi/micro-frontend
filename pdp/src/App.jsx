import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
const Header = React.lazy(() => import('home/Header'));
import Footer from 'home/Footer';

const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const handleShowHeader = () => setShowHeader(true);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      {showHeader && (
        <Suspense fallback={<div>Loading</div>}>
          <Header />
        </Suspense>
      )}
      <button className="text-3xl" onClick={handleShowHeader}>
        Show Header
      </button>
      <div className="my-10">PDP Page</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
