<div id="top"></div>

<!-- Badges -->
[![Website shields.io](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/momentjs-MOMENTJS-black)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](http://shields.io/)
[![Website shields.io](https://badges.aleen42.com/src/javascript.svg)](http://shields.io/)
[![Website shields.io](https://img.shields.io/badge/LICENSE-MIT-green)](http://shields.io/)

# Work-Day-Scheduler
Simple calendar application that allows users to save events for each hour of the day, spcificaly during working hours.
## Table of Contents
<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#user-story">User Story</a></li>
    <li><a href="#link-to-live-demo">Link to Live Demo</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project
<p align="center">
  <img alt="Light Mode" src="./img/scheduler.png" width="60%"> 
</p>
This Day-Scheduler application consists of a main page with function displaying date of today, and allows the user to save events for each hour of a working day.

## User Story
```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
### Link to Live Demo
[Work-Day-Scheduler](https://mohamedmesahel.github.io/Work-Day-Scheduler/)

## Usage
In order to use this application and store your appintments, you need to download the zip file.

<p align="center">
  <img src="./img/webDemo.gif" width="45%"> 
</p>

### Built With

HTML, CSS, JavaScript, and JavaScript Momentjs.

* [Moment.js](https://momentjs.com/)
* [Jquery.js](https://jquery.com/)
```js
function displayTime() {
    var rightNow = moment().format("MMM Do YY");
    timeDisplayEl.text(rightNow);
}
```
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact
[![Website shields.io](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](http://shields.io/)

Mohamed Mesahel - mohamed.mesahel86@gmail.com

[![Website shields.io](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](http://shields.io/)

https://github.com/MohamedMesahel

[![LinkedIn][linkedin-shield]][linkedin-url] 

<!-- LICENSE -->
## License

Distributed under the MIT License. 
<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List for some useful resources!
> **Important**: When working with someone else's code, you should adhere to the **Scout Rule**&mdash;always leave the code a little cleaner than when you found it.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/mohamed-mesahel-pmp-570a0423/
