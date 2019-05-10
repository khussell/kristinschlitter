


  $(document).ready(function(){
    $('.sidenav').sidenav();
  });



  var portWork= [
    {name: "Balloon Schedular",
     img: "assets/images/balloonSchedular.png",
     description: "A hot air balloon scheduling app",
     url:"https://khussell.github.io/BalloonSchedular/",
     linkToGitHub: "https://github.com/khussell/BalloonSchedular"
    },
    {name: "Giftastic",
     img: "assets/images/Giftastic.png",
     description:"A fun app to play with food gifs",
     url:"https://khussell.github.io/Giftastic/",
     linkToGitHub: "https://github.com/khussell/Giftastic"
    },
    {name: "Trivia",
    img: "assets/images/trivia.png",
     description: "A trivia game with questions about the sun",
     url:"https://khussell.github.io/TriviaGame/",
     linkToGitHub: "https://github.com/khussell/TriviaGame"
    },
    {name: "Pokemon RPG",
    img: "assets/images/rpg.png",
     description:"strategy battle game against Pokemon",
     url:"https://khussell.github.io/pokemon-rpg/",
     linkToGitHub: "https://github.com/khussell/pokemon-rpg"
    },
    {name: "Dragon Escape",
    img: "assets/images/crystalCollector.png",
     description:"A game that requires strategy and math to win",
     url:"https://khussell.github.io/Dragon-Escape/",
     linkToGitHub: "https://khussell.github.io/pokemon-rpg/"
    },
    {name: "Park Ninja",
     img: "assets/images/parkNinja.png",
     description: "A ride schedule app for Disney Magic Kingdom",
     url:"https://jbambei.github.io/TourApp/start.html",
     linkToGitHub: "https://github.com/Jbambei/TourApp"
    },
    {name: "Word Guess",
    img: "assets/images/wordGuessGame.png",
     description: "A hangman-style game",
     url:"https://khussell.github.io/Word-Guess-Game/",
     linkToGitHub: "https://github.com/khussell/Word-Guess-Game"
    }

  ]

  for(var i=0; i < portWork.length; i++){
      var newDiv1=$("<div>").addClass("card col s12")
                            .attr("id", "thisCard")

      var newDiv2= $("<div>").addClass("card-image waves-effect waves-block waves-light")
      var newImg= $("<img>").addClass("activator")
                            .attr("src", portWork[i].img)
                            .attr("height", "200px")
      
      newDiv2.append(newImg)

      var newDiv3= $("<div>").addClass("card-content")
      var newSpan1= $("<span>").addClass("card-title activator grey-text text-darken-4").text(portWork[i].name)
      var newI= $("<i>").addClass("material-icons right").text("more_vert")
      newSpan1.append(newI)
      var newP1= $("<p>")
      var newA1= $("<a>").attr("href", portWork[i].url).text("Check it out")
                         .attr("target", "_blank")
      newP1.append(newA1)

      var newP2= $("<p>")
      var newA2= $("<a>").attr("href", portWork[i].linkToGitHub).text("GitHub Repo")
                         .attr("target", "_blank")
      newP2.append(newA2)

      var newDiv4= $("<div>").addClass("card-reveal")
      var newSpan2= $("<span>").addClass("card-title grey-text text-darken-4").text(portWork[i].name)
      var newI2= $("<i>").addClass("material-icons right").text("close")
      newSpan2.append(newI2)
      var newP3= $("<p>").text(portWork[i].description)

      newDiv4.append(newSpan2, newP3)
      newDiv3.append(newSpan1, newP1, newP2)

      newDiv1.append(newDiv2, newDiv3, newDiv4)

      $(".cardsGoHere").append(newDiv1)



    











  }