import React from 'react';
import Selfie from './images/site/profile-photo-sm.jpg';
import '../style.css';

export default function About() {
    return (
        <>
     <div class="post" id="aboutMe">
                    <h2 class="post-title">About Me</h2>
                    <div class="post-description">

                        <img id="profilePic" src={Selfie} alt="" title="I like hiking, too." />

                        <p>Hello! I'm Ran, a full-stack web developer. I'm a creative who's passionate about building websites.</p>

                        <p>The best applications are nice to look at, easy to navigate, simple to read and sometimes even fun to use. When a user wants to return repeatedly to accomplish the task at hand, I've done my job successfully.</p>
                            
                        <p>I make applications using a variety of methodologies and languages: HTML, CSS (including Bootstrap, Pure, UIkit and other associated libraries), Javascript/jQuery and <em>those</em> associated libraries (Express.js, Handlebars.js, and more), and MySQL/Sequelize. Currently, I'm studying even more ways to build. I enjoy developing apps on both the front- and back-end, then integrating the two to create a pleasant and seamless user experience on the web.</p>
                            
                        <p>Please have a look at my work below; they range from games to more practical applications. If you'd be interested in working with me, please send me a note! I'd love a chance to show you what we can accomplish together. Thank you sincerely for your interest.</p>

                    </div>
                </div>

        </>
    )
}
