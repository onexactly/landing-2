import React from 'react';
import Mafia from "./Components/Mafia";
import Header from "./Components/Header";
import Features from "./Components/Feature";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
    return ( 
        <div className='App'>
            <Mafia/>
            <Header/>
            <Features/>
            <Offer/>
            <About/>
            <Contact/>
        </div>
     );
}

export default App;