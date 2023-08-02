import React from "react";
//import memesData from "../memesData";


export default function Form(){
    const [meme,setMeme]=React.useState(
        {
            topText : "",
            bottomText : "",
            randomImage: "",
        }
    ) 
    const [allMemeImage, setAllMemeImage]=React.useState([]);

    function handleChange(event){
        const {name,value} = event.target;
        setMeme(prevMeme=>{
            return{
                ...prevMeme,
                [name]:value,
            }
        })
    }

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemeImage(data.data.memes))

        /* or [cannot use async and await here as callback fn because it always return 
                promise but in useEffect() we have to return cleanup f()]
                but async and await can be use as:
        async function fn(){
              const res = await fetch();
        const data = await res.json()
        setAllMemeImage(data.data.memes);}
        fn()
              */

        /*

            return{
                //cleanup function
            }
        */ 
        
    },[])

    function generateRandomMeme(){
        let memeData=allMemeImage;
        let obj=memeData[(Math.floor(Math.random() * memeData.length))]
        setMeme(prevImage=>{

            return{
                ...prevImage,
                randomImage:obj.url,
            }
        });
    }
    return (
        <main>
        <div className="meme-form">
            
            <input 
                id="text1" 
                name="topText" 
                onChange={handleChange} 
                placeholder="Top Text" 
                type="text" 
                value={meme.topText}
                className="meme-text"
            />
            <input 
                id="text2" 
                name="bottomText" 
                onChange={handleChange} 
                type="text" 
                placeholder="Bottom Text" 
                value={meme.bottomText}
                className="meme-text"
            />
        
            <button onClick={generateRandomMeme} className="meme-button">Get a new meme image  🖼</button>
            
        </div>
        { meme.randomImage!=="" &&
        <div className="meme-div">
            <img src={meme.randomImage} alt="" className="meme--image"/>
            <h1 className="meme--text top">{meme.topText}</h1>
            <h1 className="meme--text bottom">{meme.bottomText}</h1>
        </div>
        }
        </main>
    )
}