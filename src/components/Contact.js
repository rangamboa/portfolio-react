import React from 'react';
import '../style.css';

export default function Resume() {
    return (
        <>
            <div class="post" id="contactMe">
                <h2 class="post-title">Contact Me</h2>

                <div class="post-description">

                    <div class="container">
                        <ul>
                           <li><a href="mailto:ran.gamboa.dev@gmail.com">ran.gamboa.dev@gmail.com</a></li>
                           <li>206-979-2902 mobile</li>
                           <li><a href="https://github.com/rangamboa">GitHub</a> profile</li>
                           <li><a href="https://www.linkedin.com/in/rangamboa/">LinkedIn</a> profile</li>
                        </ul>
                    </div>
       
                    <div id="contactForm">

                      <form>
                        <input type="text" id="yourName" placeholder="Name"></input>
                        <input type="email" id="yourEmail" placeholder="Email"></input>
                        <textarea placeholder="Let's chat!" rows="5"></textarea>    
                        <button type="submit" variant="contained" color="primary">Submit</button>
                     </form>

                    </div>
                    
                </div>

            </div>

        </>
    );
};
