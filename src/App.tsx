import React from 'react';

import { Header, Panel, Editor, WebEditor } from './components';

export const App = () => {

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Panel />
        <Editor />
        <WebEditor />
      </div>
    </div>
  );
};
