import React from 'react';
import Mafia from "./Components/Mafia";
import Header from "./Components/Header";
import Features from "./Components/Feature";
import Offer from "./Components/Offer";


function App() {
    return ( 
        <div className='App'>
            <Mafia/>
            <Header/>
            <Features/>
            <Offer/>
        </div>
     );
}

export default App;