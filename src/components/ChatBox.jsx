
import React, { useEffect } from 'react';

const ChatBox = () => { 
    useEffect(() => { 
        var Tawk_API = Tawk_API || {}; 
        var Tawk_LoadStart = new Date(); 
        (function(){ var s1 = document.createElement("script"); 
        var s0 = document.getElementsByTagName("script")[0]; 
        s1.async = true; s1.src = 'https://embed.tawk.to/65cb47fe8d261e1b5f5fb79c/1hms8uk7t'; 
        s1.charset = 'UTF-8'; s1.setAttribute('crossorigin', '*'); 
        s0.parentNode.insertBefore(s1, s0); })();
    }, []);

return ( <div> {/* Widget will be loaded here */} </div> ); }

export default ChatBox;