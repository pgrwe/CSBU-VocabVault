import React from 'react';
import Typewriter from 'typewriter-effect'

function Vocab() {
    return (

        <div className = 'container'>
            <h1>
                <Typewriter options= {{
                    autoStart: true,
                    loop: true,
                    delay: 200,
                    strings: ["Your Vocab ..."]
                }}
                />

            </h1>

        </div>
    );
}

export default Vocab;