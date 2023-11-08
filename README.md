<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

![GitHub repo size](https://img.shields.io/github/repo-size/Rynoo1/term-1?color=lightblue)
![GitHub language count](https://img.shields.io/github/languages/count/Rynoo1/term-1?color=lightblue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Rynoo1/term-1?color=lightblue)




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/Rynoo1/term-1">
  </a> -->
  
  ![Alt text](ReadmeImages/Group%2085.png)

<h3 align="center">Formula One Comparisons</h3>

  <p align="center">
    Compare your favourite Formula One Drivers all in one place
    <br />
    ·
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#api-key">API Key</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#project-features">Project Features</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Alt text](ReadmeImages/Screenshot%202023-11-08%20at%2017.29%201.png)

Formula One Comparisons is a web application that makes use of data provided by an API to compare various statistics between two formula one drivers across their careers as well as a line graph of drivers' points in a given season. It uses Chartjs to visually represent this data on various different interactive graphs and charts. The application consists of three pages, the landing page, comparisons page and the timeline page. The landing page provides a brief breakdown of the dataset. The comparisons page is where the user can compare the stats for two specific formula one drivers by searching for their name in the search bar, the information is displayed on three different graphs and charts on the page. Finally the timeline page displays the points per driver in a given formula one season with the ability to change the year being displayed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![js]][js]
* [![Axios]][Axios-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
Before you begin, ensure you have the following:

- **Node.js**: Your system should have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).This project requires Node.js version 14.0 or higher.
- **npm**: This is Node Package Manager and this project uses npm to install dependencies. npm is typically included with Node.js. To check if you have npm installed, run the following command in your terminal:
```sh
npm -v
```
if you don't have npm installed, you can install it by following the instructions on [npm's website](https://www.npmjs.com/)

### API Key
This project relies on an external API that requires an API key for authentication and access. Follow these steps to obtain an API key:

1. **Create a Rapid API Account**: Visit the [Rapid API](https://rapidapi.com) website and create an account if you don't already have one
2. **Search for the API**: Search for the [API-FORMULA-1](https://rapidapi.com/api-sports/api/api-formula-1) API
3. **Select the API**: Select the API and subscribe to it, the lowest tier available requires no monthly payments and will only charge a minimal amount if the limit of calls for the day has been reached.
4. **API Key Generation**: After this, Rapid API should provide you with an API key. This is essential for making requests to the API-FORMULA-1 API.
5. **Using the API Key**: In the project code, insert the API key in the required space in the URL at all the Axios calls.

### Installation

Follow these steps to get the project up and running in your local machine:

1. **Clone the Repository:** Type the following in the terminal of your IDE or use GitHub desktop to clone the repo.
```sh
git clone https://github.com/Rynoo1/term-1
```
2. **Change Directory:** Navigate to the project
```sh
cd term-1
```
3. **Install Dependencies:** Install the necessarry dependencies
```sh
npm install react react-bootstrap axios
```
5. **Start the Development Server:** Start the development server with the following command
```sh
npm start
```
6. **Access the Application:** To access the application, open your web browser and navigate to `http://localhost:3000`. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT FEATURES -->
## Project Features

Main features and functionality - include short descriptions and mockups of the functionality that has been implemented in the project.

Formula One Comparisons uses data from the API to populate charts and graphs. The data chosen is that of the points per season for the timeline page, driver stats for the comparisons page and the team points for the landing dashboard.

* **Landing Dashboard**
![Alt text](ReadmeImages/Blue%20iMac%20Front.png)
![Alt text](ReadmeImages/Blue%20iMac%20Front-2.png)
The landing dashboard welcomes the user with a breakdown of the dataset used and a pie chart of the points for teams in the 2021 season.
<br/>

* **Compare Page**
![Alt text](ReadmeImages/Blue%20iMac%20Front-3.png)
![Alt text](ReadmeImages/Blue%20iMac%20Front-4.png)
![Alt text](ReadmeImages/Blue%20iMac%20Front%20copy.png)
The comparisons page compares the all time podiums, total championships, number of seasons, total grand prix entered and career points of any two given drivers that the user wishes. It uses a bar graph, radar chart and a polar area chart to visualise this.
<br/>

* **Timeline Page**
![Alt text](ReadmeImages/Blue%20iMac%20Front-5.png)
The timeline page allows the user to see a breakdown of points for each driver in a given season on a linechart.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- DEVELOPMENT PROCESS -->
## Development Process

The concept for the design of the application was a dark, minimal theme that places the focus on the graphs and charts, which would be colourful and use the different colours of the different Formula One teams.

During the development process, some of the challenges and problems faced were:

* React Hooks:
The different React Hooks and how each one works took me a while to get used to as it was my first time developing with React.
<br/>

* Changin the year on the timeline page:
I had some trouble with updating the graph with the new chosen year and reloading the graph.
<br/>

* API Data:
The API schema was slightly complex in certain parts, with the data being nested in various arrays and objects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Final Outcome

- demonstration video
- promotional video / deployed link

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Ryno de Beer - 221361@virtualwindow.co.za

Project Link: [https://github.com/Rynoo1/term-1](https://github.com/Rynoo1/term-1)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Readme Template](https://github.com/othneildrew/Best-README-Template/tree/master)
* [Badges](https://shields.io/)
* [API-FORMULA-1](https://rapidapi.com/api-sports/api/api-formula-1)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[js]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
[Axios]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios
[Axios-url]: https://axios-http.com/