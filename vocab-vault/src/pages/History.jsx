import React from 'react';
import Typewriter from 'typewriter-effect'

function History() {
    return (

        <div className = 'container'>
            <h1>
                <Typewriter options= {{
                    autoStart: true,
                    loop: true,
                    delay: 200,
                    strings: ["Your History ..."]
                }}
                />

            </h1>

        </div>
    );
}

export default History;