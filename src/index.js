import React from 'react';
import ReactDOM  from 'react-dom';

import PinRouterProvider from './routes';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <PinRouterProvider />
      
    </React.StrictMode>
  );