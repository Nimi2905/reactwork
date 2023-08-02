import React from 'react';

export default function Main(props){

    const mainStyle={
        backgroundColor: props.darkMode?"rgb(47, 47, 47)":"white",
    }
    const mainHeadStyle={
        color: props.darkMode?"white":"rgb(47, 47, 47)",
    }
    const mainContStyle={
        color: props.darkMode?"rgb(232, 229, 229)":"rgb(47, 47, 47)",
    }
    return (
        <div className='main-div' style={mainStyle}>
            <h1 className='main-head' style={mainHeadStyle}>Fun facts about React</h1>
            <ul className='main-cont' style={mainContStyle}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
        
    )
}