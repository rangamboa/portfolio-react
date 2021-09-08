import React from 'react';
import Projects from './Projects';
import '../style.css';

export default function Work() {
    return (
        <>
<div class="post" id="work">
                <h2 class="post-title">Work</h2>
                <div class="post-description">
                    <p>Here's a sample of the recent work I've done, and projects of which I've been a proud part.</p>

                    <div id="projectContainer" class="pure-g">
                        <Projects />
                    </div>

                    <p className="comment">This section is regularly updated with my most recent work.</p>

                </div>
            </div>

        </>
    )
}

