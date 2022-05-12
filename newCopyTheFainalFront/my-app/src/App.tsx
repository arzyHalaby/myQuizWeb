import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { myNavArr } from './Navbar/NavbarItems';
import { Navbar } from './Navbar/Navbar';
import Home from './Navbar/Home/Home';
import { SeartchForQuiz } from './Navbar/SeartchForQuiz/SeartchForQuiz';
import { overSaidItems } from './OverSide/OverSaidItems';
import { Login } from './OverSide/Login/Login';
import { OverSaid } from './OverSide/OverSaid';
import { Signup } from './OverSide/Signup/Signup';
import { CreateQuiz } from './Navbar/CreatQuiz/CreateQuiz';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Basket } from './Navbar/CreatQuiz/DNDgame/Basket';
import { FirstCard } from './Navbar/CreatQuiz/DNDgame/FirstCard';
import { Profile } from './OverSide/Profile';
import { MemoryGame } from './Navbar/CreatQuiz/TheMemoryGame/MemoryGame';
import QuizApp from './Navbar/CreatQuiz/TheQuiz/QuizApp';
import { AddNewGame } from './Navbar/AddNewGame/AddNewGame';
import TheMemory from './Navbar/CreatQuiz/TheMemoryGame/TheMemory';
import { ContentGallery } from './Navbar/CreatQuiz/ContentGallery';


function App() {
  return (
    <div className="App">
      <Navbar navItems={myNavArr} />
      <DndProvider backend={HTML5Backend}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="addNewGame" element={<AddNewGame />} />
            <Route path="/createQuiz" element={<CreateQuiz />} >
              {/* <Route path='/creatQuiz/contentGallery' element={<ContentGallery />} /> */}
              <Route path='/createQuiz/contentGallery/basket' element={<Basket />} />
              <Route path='/createQuiz/contentGallery/memoryGame' element={<MemoryGame />} />
              {/* <Route path='/creatQuiz/contentGallery/theMemoryGame' element={<TheMemory />} /> */}
            </Route>
            <Route path="SearchForQuiz" element={<SeartchForQuiz />} />
            <Route path="theQuizGame" element={<QuizApp />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<Profile />} />

          </Routes>
        </BrowserRouter>
        <OverSaid overSaidItems={overSaidItems}></OverSaid>
      </DndProvider>



    </div>
  );
}

export default App;
