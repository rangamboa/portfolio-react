import React from 'react';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';

import '../style.css';

export default function Main() {
    return (
        <>
            <div id="layout" class="pure-g">

<div class="sidebar pure-u-1 pure-u-md-1-4">

    <div class="header">

        <h1 id="myName">Ran Gamboa</h1>
        <h3 id="tagline">web developer,<br />usually overcaffeinated</h3>

        <nav>
            <ul class="nav-list">
                <li class="nav-item"><a href="#aboutMe">About Me</a></li>
                <li class="nav-item"><a href="#work">Work</a></li>
                <li class="nav-item"><a href="#resume">Resume</a></li>
                <li class="nav-item"><a href="#contactMe">Contact Me</a></li>
            </ul>
        </nav>

    </div>

</div>

<div class="content pure-u-1 pure-u-md-3-4">

    <main>

        <section class="posts">

            {/* <About /> */}
            <Work />
            {/* <Resume />
            <Contact /> */}

        </section>

    </main>       

    <Footer />

</div>

</div>










        </>
    )
}
