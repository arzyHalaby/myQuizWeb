import React from 'react';

import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FirstCard } from './FirstCard';
import { Basket } from './Basket';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <FirstCard firstObject={{id:1, name:'dog'}} draggable={false}></FirstCard>
        <Basket/>
      {/* Here, render a component that uses DND inside it */}
    </DndProvider>
    </div>
  );
}

export default App;
