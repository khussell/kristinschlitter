


$(document).ready(function () {
  $('.sidenav').sidenav({
    edge: "right",
  });
});



var portWork = [
  {
    name: 'Dental Fillin',
    img: 'assets/images/dentalFillin.png',
    description: "App to connect substitute dental hygienists with dental offices. Made with HTML, CSS, BootStrap, Vanilla JavaScript, React, Express, Passport Auth, MongoDB, Mongoose, Google Maps and Geocode APIs, Axios, Nodemailer npm, Flatpickr Calendar npm, and deployed on Heroku.",
    url:'https://dentalfillin.herokuapp.com/',
    linkToGitHub: 'https://github.com/khussell/dentalFillin',
  },
  /*
  {
    name: "Balloon Schedular",
    img: "assets/images/balloonSchedular.png",
    description: "A hot air balloon scheduling app",
    url: "https://khussell.github.io/BalloonSchedular/",
    linkToGitHub: "https://github.com/khussell/BalloonSchedular"
  },
  {
    name: "Giftastic",
    img: "assets/images/Giftastic.png",
    description: "A fun app to play with food gifs",
    url: "https://khussell.github.io/Giftastic/",
    linkToGitHub: "https://github.com/khussell/Giftastic"
  },
  {
    name: "Trivia",
    img: "assets/images/trivia.png",
    description: "A trivia game with questions about the sun",
    url: "https://khussell.github.io/TriviaGame/",
    linkToGitHub: "https://github.com/khussell/TriviaGame"
  },
  {
    name: "Pokemon RPG",
    img: "assets/images/rpg.png",
    description: "strategy battle game against Pokemon",
    url: "https://khussell.github.io/pokemon-rpg/",
    linkToGitHub: "https://github.com/khussell/pokemon-rpg"
  },
  {
    name: "Dragon Escape",
    img: "assets/images/crystalCollector.png",
    description: "A game that requires strategy and math to win",
    url: "https://khussell.github.io/Dragon-Escape/",
    linkToGitHub: "https://khussell.github.io/pokemon-rpg/"
  },
  {
    name: "Park Ninja",
    img: "assets/images/parkNinja.png",
    description: "A ride schedule app for Disney Magic Kingdom",
    url: "https://jbambei.github.io/TourApp/start.html",
    linkToGitHub: "https://github.com/Jbambei/TourApp"
  },
  {
    name: "Word Guess",
    img: "assets/images/wordGuessGame.png",
    description: "A hangman-style game",
    url: "https://khussell.github.io/Word-Guess-Game/",
    linkToGitHub: "https://github.com/khussell/Word-Guess-Game"
  },
  {
    name: "Liri Bot",
    img: "assets/images/nodeLiri.png",
    description: "A language interpretion and recognition interface via node to get information on an artist's upcoming concerts, artists who sing a certain song name, and movie information. ",
    url: "https://drive.google.com/file/d/1UnKkecNF_fk2nm5AipyTDntfN4Tmlp-j/view",
    linkToGitHub: " https://github.com/khussell/liri-node-app"
  },
  {
    name: "Bamazon Storefront",
    img:"assets/images/bamazon.png",
    description: "Amazon-like storefront that simulates customer, manager, and supervisor actions in the strore. This app is used in the command line. \n Bamazon is made using Node.js, npm package inquirer, and mySql.",
    url:"https://drive.google.com/file/d/1_3u4WNcNdoj0lq4xuoZUWoZ4-VU6SUdm/view",
    linkToGitHub: "https://github.com/khussell/bamazon"
  },
  */
  {
    name: "Smart Plants- Plant Monitor",
    img: "assets/images/smartPlants.png",
    description: "Automatic, real-time plant care and monitoring app. Team project where my focus was on front-end using HTML, CSS, JavaScript/JQuery, Handlebars, Node, and Express",
    url: "https://smart-plants.herokuapp.com/",
    linkToGitHub: "https://github.com/khussell/smartPlants"
  },
  {
    name: "Star Wars Friend Finder",
    img: "assets/images/friendFinder.png",
    description: "A compatibility based friend finder application with a Star Wars Theme. This app is made using HTML, CSS, JavaScript/JQuery, Node,  and npm packages Express and Path",
    url: "https://gentle-ocean-91682.herokuapp.com/",
    linkToGitHub: "https://github.com/khussell/friendFinder"
  },
  /*
  {
    name: "Sequelized Burger Logger",
    img: "assets/images/sequelizedBurger.png",
    description: "An app to add delicious burger names to a log, user will be able to create burgers, devour burgers, delete burgers, and remake them. This app is made using HTML, CSS, Javascript/JQuery, Node, persistent data with mySql using npm package Sequelize, npm packages Express and Express Handlebars, and is deployed on Heroku",
    url: "https://dry-scrubland-63372.herokuapp.com/",
    linkToGitHub: "https://github.com/khussell/sequelizedBurger"
  },
  {
    name: "Constructor Word Guess",
    img:"assets/images/constructorWordGuess.png",
    description: "A word guess game played in command line using constructors and node modules",
    url: "https://drive.google.com/file/d/16853fRX3Fl7kHrviht394l3epnL1nFi9/view",
    linkToGitHub: "https://github.com/khussell/constructorWordGuess"
  },
  */
  {
    name: "Food News and Notes",
    img:"assets/images/foodNews.png",
    description: "An app for viewing food news articles and leaving notes. Made with HTML, CSS, MaterializeCSS, JavaScript, JQuery, Express, Handlebars, MongoDB, Mongoose, Cheerio web scraping, Axios, and Heroku deployment",
    url: "https://stormy-springs-14609.herokuapp.com/",
    linkToGitHub: "https://github.com/khussell/newsNotes"
  },
  /*
  {
    name: "Golden Memories Game",
    img: "assets/images/memory.png",
    description: "A memory game where you click images that you have not clicked yet. Made with HTML, CSS, Vanilla Javascript, React",
    url: " https://khussell.github.io/memory3/",
    linkToGitHub: "https://github.com/khussell/memory3"
  }
  */

]

for (var i = 0; i < portWork.length; i++) {
  var newDiv1 = $("<div>").addClass("card col s12")
    .attr("id", "thisCard")

  var newDiv2 = $("<div>").addClass("card-image waves-effect waves-block waves-light")
  var newImg = $("<img>").addClass("activator")
    .attr("src", portWork[i].img)
    .attr("height", "200px")

  newDiv2.append(newImg)

  var newDiv3 = $("<div>").addClass("card-content")
  var newSpan1 = $("<span>").addClass("card-title activator grey-text text-darken-4").text(portWork[i].name)
  var newI = $("<i>").addClass("material-icons right").text("more_vert")
  newSpan1.append(newI)
  var newP1 = $("<p>")
  var newA1 = $("<a>").attr("href", portWork[i].url).text("Check it out")
    .attr("target", "_blank")
  newP1.append(newA1)

  var newP2 = $("<p>")
  var newA2 = $("<a>").attr("href", portWork[i].linkToGitHub).text("GitHub Repo")
    .attr("target", "_blank")
  newP2.append(newA2)

  var newDiv4 = $("<div>").addClass("card-reveal")
  var newSpan2 = $("<span>").addClass("card-title grey-text text-darken-4").text(portWork[i].name)
  var newI2 = $("<i>").addClass("material-icons right").text("close")
  newSpan2.append(newI2)
  var newP3 = $("<p>").text(portWork[i].description)

  newDiv4.append(newSpan2, newP3)
  newDiv3.append(newSpan1, newP1, newP2)

  newDiv1.append(newDiv2, newDiv3, newDiv4)

  $(".cardsGoHere").append(newDiv1)


}