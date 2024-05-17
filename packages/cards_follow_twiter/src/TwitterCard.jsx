import './assets/TwitterCard.css'
import { useState } from "react";

function TwitterCard ({name,isFollowing}){

    //function formated user name
    const formated =(name) =>`@${name}`;

    //function conect api unAvatar 
    const uriApiUnAvatar=`https://unavatar.io/twitter/${name}`;


    //state follow
    const [isFollow,setIsfollow] = useState(isFollowing);

    let text = isFollow ? "Following" : "Follow"

    return (
        <div className='card'>
            <header className='card--header'>
                <img src={uriApiUnAvatar} className='card--header-img'/>
                <article className='card--header-article'>
                    <strong>{name}</strong>
                    <span>{formated(name)}</span>
                </article>
            </header>

            <div className='card--div' >
                <button onClick={()=>setIsfollow(!isFollow)} className='tw--div-button'>
                    {text}
                </button>
            </div>

        </div>

    )
}

export default TwitterCard