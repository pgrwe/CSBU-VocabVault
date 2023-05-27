import React from 'react';
import Typewriter from 'typewriter-effect'

function Materials() {
    return (

        <div className = 'container'>
            <h1>
                <Typewriter options= {{
                    autoStart: true,
                    loop: true,
                    delay: 200,
                    strings: ["Your Materials ..."]
                }}
                />

            </h1>

        </div>
    );
}

export default Materials;