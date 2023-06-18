import React from 'react';

export default function Form() {
    const [memes, setMemes] = React.useState(["no images"]);
    console.log(memes);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: ""
    });
    console.log(meme);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setMemes(data.data.memes));
    }, [])

    return (
        <main>
            <form>
                <input type='text' placeholder='Top text' name='topText' value={meme.topText} onChange={handleChange}/>
                <input type='text ' placeholder='Bottom text' name='bottomText' value={meme.bottomText} onChange={handleChange}/>

                <button type="button" onClick={getMemeImage}>Get a new meme image</button>
                <div className='meme-image'>
                    {
                        meme.image !== "" ? (
                            <>
                                <img src={meme.image} alt='A random meme, probably pepe but who knows' />
                                <h2 className='text-top'>{meme.topText}</h2>
                                <h2 className='text-bottom'>{meme.bottomText}</h2>
                            </>
                        ) : ""
                    }

                </div>
            </form>
        </main>
    )

    function getMemeImage() {
        const i = Math.floor(Math.random() * memes.length);
        setMeme(prev => ({
            ...prev,
            image: memes[i].url
        }))
        console.log("set the current meme image to " + meme.image);
    }

    function handleChange(event)
    {
        const {name, value} = event.target;
        setMeme(prev => ({
            ...prev,
            [name] : value
        }))
    }
}



