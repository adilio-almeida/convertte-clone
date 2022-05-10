import * as React from 'react';
import YouTube from 'react-youtube';

function Header() {
    return (
        <>
        <h1>Take blip</h1>
        <h2>Gerador de link para Whatsapp</h2>
        <iframe
          width="300"
          height="150"
          src="https://www.youtube.com/embed/wY5LlvFLVN8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </>
        
    )
}
export default Header