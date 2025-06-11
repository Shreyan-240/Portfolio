import { useState, useEffect } from 'react';

function Typer({text='', speed = 150, delay = 0, classname = ''}) {
    const [displayedtext, setDisplayedText] = useState('');
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i+1));
            i++
            if(i === text.length) clearInterval(interval);
        }, speed)
        return () => clearInterval(interval);
    }, [text, speed]);
return (
    <p className={`${classname}`}>
        {displayedtext}
    </p>
);
}

    export default Typer;