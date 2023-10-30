


import HomePage from './figma/homePage';
import PurplePage from './figma/purplePage';
import GreenPage from './figma/greenPage';
import { Routes, Route } from 'react-router';




function App() {



  return (
    <div className="App">

      <Routes>
        <Route path = "/" element = { <HomePage /> } />
        <Route path = "/purplecollection" element = { <PurplePage /> } />
        <Route path = "/greencollection" element = { <GreenPage /> } />
      </Routes>




    </div>
  );
}

export default App;
