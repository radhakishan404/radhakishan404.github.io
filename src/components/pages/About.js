import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../common/Header";

function About(props) {

    useEffect(() => {
    })

    return (
        <div className="main-wrapper">
            <Header props={props} />
            <main id="content" className="main page-content" aria-label="Content">
                <div className="container-full header-content">
                    <div className="content__main">
                        
                    </div>
                </div>
            </main>
        </div>
    )
}

export default About;