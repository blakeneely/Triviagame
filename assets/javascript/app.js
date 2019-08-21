$(document).ready(function() {
    
    var counter = 15;
    var timer;
    var revealCounter = 5;
    var revealTimer;
    var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;

    var questions =[                                        // Array of question objects
        {
            question: "What makes time travel possible?",
            choices: ["Skynet", "Flux Capacitor", "Plutonium", "A wish"],
            answer: "Flux Capacitor",
            image: "assets/images/flux-capacitor.gif" 
        },
        {
            question: "Who directed Forrest Gump?",
            choices: ["Robert Zemeckis", "Steven Spielberg", "Ron Howard", "Nora Ephron"],
            answer: "Robert Zemeckis",
            image: "assets/images/forrestgump.jpg"
        },
        {
            question: "Who is the killer in Friday the 13th(1980)?",
            choices: ["Freddy Krueger", "Jason Voohees", "Michael Myers", "Jason's mom"],
            answer: "Jason's mom",
            image:"assets/images/pamelavoorhees.gif"
        },
        {
            question: "This actor starred in Gladiator",
            choices: ["Russell Crowe", "Mel Gibson", "Gerard Butler", "Tom Hanks"],
            answer: "Russell Crowe",
            image: "assets/images/gladiator.gif"
        },
        {
            question: "\"I feel the need, the need for speed\" is from what movie?",
            choices: ["Days of Thunder", "Rocky 2", "Top Gun", "Mad Max"],
            answer: "Top Gun",
            image: "assets/images/topgun.gif"
        },
        {
            question: "Johnny Depp plays which swashbuckling pirate?",
            choices: ["Jack Sparrow", "Davy Jones", "Blackbeard", "Will Turner"],
            answer: "Jack Sparrow",
            image: "assets/images/jacksparrow.gif"
        },
        {
            question: "What is Mickey Mouse's pet dog named:",
            choices: ["Goofy", "Minnie", "Donald", "Pluto"],
            answer: "Pluto",
            image: "assets/images/pluto.gif"
        },
        {
            question: "Which movie is famous for the line \"Say hello to my little friend\"?",
            choices: ["Scarface", "American Gangster", "The Godfather", "Goodfellas"],
            answer: "Scarface",
            image: "assets/images/scarface.gif"
        },
        {
            question: "What is Brian's fake last name in \"The Fast and the Furious\"?",
            choices: ["O'Conner", "Spilner", "Toretto", "Smith"],
            answer: "Spilner",
            image: "assets/images/spilner.jpg"
        },
        {
            question: "What is the name of the 1967 Shelby GT500 in \"Gone in 60 Seconds\"?",
            choices: ["Rosa", "Unicorn", "Felicia", "Eleanor"],
            answer: "Eleanor",
            image: "assets/images/gonein60.gif"
        },
    ];

    function renderGameOver() {                                         // Function to show final game screen
        clearInterval(timer);                                           // Stop game timer
        $("#time").html(" ");                                           // Hide timer on html
        $("#game").html("<img src='assets/images/gameover.gif'><h2>You did it!</h2><p>You got " + correct + " correct</p>");      //Display how many correct and incorrect

    };

    function revealCount() {                                            // Answer reveal timer function
        revealCounter--;
        if (revealCounter === 0) {
            clearInterval(revealTimer);
            renderQuestion();
            checkAnswer();
        }
    };

    function count() {                                                  // Main game timer function
        counter--;                                                      // Deduct 1 from counter each interval
        $("#time").html("Timer: " + counter);                           // Update html with current counter value with each interval
        if (counter === 0) {                                            // Check if time runs out
            showAnswer();
            clearInterval(timer);                                       // Stop timer
            incorrect++;                                                // Increase incorrect count
            currentQuestion++;                                          // Increase currentQuestion count
        }
    };

    function showAnswer() {
        var image = questions[currentQuestion].image;                   // Store current question image to local image variable
        var answer = questions[currentQuestion].answer;
        clearInterval(timer);                                           // Stop question timer
        $("#time").html(" ");                                           // Remove timer from html
        revealCounter = 5;                                              // Reset revealCounter back to 5
        revealTimer = setInterval(revealCount, 1000);                   // Start reveal count
        $("#game").html("<img src=" + image + ">" + "<p>" + answer + "</p>");                     // Show correct answer image on html
    };

    function checkAnswer() {
        var answer = questions[currentQuestion].answer;                 // Store current question answer value to local answer variable
        $(".htmlChoices").on("click", function(){                       // On click check if text from html element matches answer varible
            console.log(this);
            if($(this).text() === answer) {
                correct++;                                              // Increase correct count
            }
            else {
                incorrect++;                                            // Increase incorrect count
            }
            showAnswer();
            currentQuestion++;                                          // Increase currentQuestion count
        });
    };

    function renderQuestion() {                                         // Function to load question and answers to html
        counter = 15;                                                   // Reset counter back to 15 with every question
        timer = setInterval(count, 1000);                               // Start timer
        var question = questions[currentQuestion].question;             // Assigns question value from questions array to question variable
        var choicesArray = questions[currentQuestion].choices;          // Assigns choices value from choices array to choicesArray variable
        var htmlChoices = "";                                           // Initializes choice variable with empty string
        for(var i = 0; i < choicesArray.length; i++) {                  // Loops to add each choice from choiceArray with a p tag
            htmlChoices += "<p class='htmlChoices'>" + choicesArray[i] + "</p>";    // Add class to p for CSS styling
        }
        $("#time").html("Timer: " + counter);                           // Adds timer to html
        $("#game").html("<h2>" + question + "</h2>" + htmlChoices);     // Adds question and choices to html
        if(currentQuestion === 9) {                                     // Ends game after 10 questions
            renderGameOver();
        }    
    };

    $("#start-btn").on("click", function(){                             
        this.remove();                                                  // Removes start button on click to begin game
        renderQuestion();                                               // Begins game by loading first question
        checkAnswer();                                                  // Loads function for clicking answer
    });



});

