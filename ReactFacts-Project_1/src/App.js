import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar'

export default function App(){

    const [isDarkMode,setIsDarkMode]  = React.useState(false);

    function handleDarkMode(){
        console.log(isDarkMode);
        setIsDarkMode(prevDarkMode=>!prevDarkMode);
    }
    return (
        <div>
            <Navbar darkMode={isDarkMode} handleChange={handleDarkMode} />
            <Main darkMode={isDarkMode}/>
        </div>
        
    )
}