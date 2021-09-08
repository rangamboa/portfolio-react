import React from 'react';

import projectScreenshot1 from './images/projects/screenshot-snackchat.jpg';
import projectScreenshot2 from './images/projects/screenshot-calorie.jpg';
import projectScreenshot3 from './images/projects/screenshot-weather.jpg';
import projectScreenshot4 from './images/projects/screenshot-workday.jpg';

export default function Projects() {
   
    return (

        <>

            <div class="project pure-u-1 pure-u-md-1-2" id="project1">
                <p>snackChat (group project)<br />
                <span><a href="https://project-snackchat.herokuapp.com/" target="_new">deployed site</a>
                &nbsp;&middot;&nbsp;<a href="https://github.com/glasscharlie/snack-chat" target="_new">GitHub repo</a>
                &nbsp;&middot;&nbsp;<a href="#open-screenshot-snackchat" target="_new">screenshot</a></span></p>
            </div>

            <div id="open-screenshot-snackchat" class="modal-window">
                <div>
                    <a href="#modal-close" title="close" class="moodal-close">close</a>
                    <h2>screenshot of snackChat (group project)</h2><img src={projectScreenshot1} alt="" title="screenshot of snackChat (group project)" class="screenShot" />
                </div>
            </div>

            <div class="project pure-u-1 pure-u-md-1-2" id="project2">
                <p>Calorie Replacer (group project)<br />
                <span><a href="https://rangamboa.github.io/training-calorie-tracker/" target="_new">deployed site</a>
                &nbsp;&middot;&nbsp;<a href="https://github.com/rangamboa/training-calorie-tracker" target="_new">GitHub repo</a>
                &nbsp;&middot;&nbsp;<a href="#open-screenshot-calorie" target="_new">screenshot</a></span></p>
            </div>

            <div id="open-screenshot-calorie" class="modal-window">
                <div>
                    <a href="#modal-close" title="close" class="moodal-close">close</a>
                    <h2>screenshot of Calorie Replacer (group project)</h2><img src={projectScreenshot2} alt=""  title="screenshot of Calorie Replacer (group project)" class="screenShot" />
                </div>
            </div>

            <div class="project pure-u-1 pure-u-md-1-2" id="project3">
                <p>Weather Dashboard<br />
                <span><a href="https://rangamboa.github.io/weather-dashboard/" target="_new">deployed site</a>
                &nbsp;&middot;&nbsp;<a href="https://github.com/rangamboa/weather-dashboard" target="_new">GitHub repo</a>
                &nbsp;&middot;&nbsp;<a href="#open-screenshot-weather" target="_new">screenshot</a></span></p>
            </div>

            <div id="open-screenshot-weather" class="modal-window">
                <div>
                    <a href="#modal-close" title="close" class="moodal-close">close</a>
                    <h2>screenshot of Weather Dashboard</h2><img src={projectScreenshot3} alt="" title="screenshot of Weather Dashboard" class="screenShot" />
                </div>
            </div>

            <div class="project pure-u-1 pure-u-md-1-2" id="project4">
                <p>Workday Scheduler<br />
                <span><a href="https://rangamboa.github.io/work-day-scheduler/" target="_new">deployed site</a>
                &nbsp;&middot;&nbsp;<a href="https://github.com/rangamboa/work-day-scheduler" target="_new">GitHub repo</a>
                &nbsp;&middot;&nbsp;<a href="#open-screenshot-workday" target="_new">screenshot</a></span></p>
            </div>

            <div id="open-screenshot-workday" class="modal-window">
                <div>
                    <a href="#modal-close" title="close" class="moodal-close">close</a>
                    <h2>screenshot of Workday Scheduler</h2><img src={projectScreenshot4} alt="" title="screenshot of Workday Scheduler" class="screenShot" />
                </div>
            </div>

        </>

    );
};