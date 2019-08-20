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
            choices: ["Freddy Krueger", "Jason Voohies", "Michael Myers", "Jason's mom"],
            answer: "Jason's mom"
        },
        {
            question: "This actor starred in Gladiator",
            choices: ["Russell Crowe", "Mel Gibson", "Gerard Butler", "Tom Hanks"],
            answer: "Russell Crowe"
        },
        {
            question: "\"I feel the need, the need for speed\" is from what movie?",
            choices: ["Days of Thunder", "Rocky 2", "Top Gun", "Mad Max"],
            answer: "Top Gun"
        },
        {
            question: "Johnny Depp plays which swashbuckling pirate?",
            choices: ["Jack Sparrow", "Davy Jones", "Blackbeard", "Will Turner"],
            answer: "Jack Sparrow"
        },
        {
            question: "What is Mickey Mouse's pet dog named:",
            choices: ["Goofy", "Minnie", "Donald", "Pluto"],
            answer: "Pluto"
        },
        {
            question: "Which movie is famous for the line \"Say hello to my little friend\"?",
            choices: ["Scarface", "American Gangster", "The Godfather", "Goodfellas"],
            answer: "Scarface"
        },
        {
            question: "What is Brian's fake last name in \"The Fast and the Furious\"?",
            choices: ["O'Conner", "Spilner", "Toretto", "Smith"],
            answer: "Spilner"
        },
        {
            question: "What is the name of the 1967 Shelby GT500 in \"Gone in 60 Seconds\"?",
            choices: ["Rosa", "Unicorn", "Felicia", "Eleanor"],
            answer: "Eleanor"
        },
    ];

    function revealCount() {
        revealCounter--;
        if (revealCounter === 0) {
            renderQuestion();
        }
    };

    function count() {
        counter--;                                                      // Deducts 1 from counter each interval
        $("#time").html("Timer: " + counter);                           // Updates html with current counter value with each interval
        if (counter === 0) {                                            // Checks if time runs out
            clearInterval(timer);                                       // Stops timer
            incorrect++;                                                // Increases incorrect count
            currentQuestion++;                                          // Increases currentQuestion count
            renderQuestion();                                           // Moves on to next question
        }
    };

    function showAnswer() {
        var image = questions[currentQuestion].image;                   // Stores current question image to local image variable
        clearInterval(timer);                                           // Stops question timer
        $("#time").html(" ");                                           // Remove timer from html
        revealTimer = setInterval(revealCount, 1000);                   // Start reveal count
        $("#game").html("<img src=" + image + ">");                     // Show correct answer image on html
        // renderQuestion();
    };

    function checkAnswer() {
        var answer = questions[currentQuestion].answer;                 // Stores current question answer value to local answer variable
        $(".htmlChoices").on("click", function(){                       // On click checks if text from html element matches answer varible
            if($(this).text() === answer) {
                correct++;                                              // Increase correct count
            }
            else {
                incorrect++;                                            // Increase incorrect count
            }
            showAnswer();
            currentQuestion++;                                          // Increase currentQuestion count
            // renderQuestion();                                           // Loads next question
            // checkAnswer();                                              // checks for answer
        });
    };


    function renderQuestion() {                                         // Function to load question and answers to html
        counter = 15;                                                   // Reset counter back to 15 with every question
        timer = setInterval(count, 1000);
        clearInterval(revealTimer);
        var question = questions[currentQuestion].question;             // Assigns question value from questions array to question variable
        var choicesArray = questions[currentQuestion].choices;          // Assigns choices value from choices array to choicesArray variable
        var htmlChoices = "";                                           // Initializes choice variable with empty string
        for(var i = 0; i < choicesArray.length; i++) {                  // Loops to add each choice from choiceArray with a p tag
            htmlChoices += "<p class='htmlChoices'>" + choicesArray[i] + "</p>";    // Add class to p for CSS styling
        }
        $("#time").html("Timer: " + counter);                           // Adds timer to html
        $("#game").html("<h2>" + question + "</h2>" + htmlChoices);     // Adds question and choices to html
        if(currentQuestion === 9) {                                     // Ends game after 10 questions
            $("#game").html("<h2>You did it!</h2><p>You got " + correct + " correct</p>");      //Displays how many correct and incorrect
        }    
    };

    $("#start-btn").on("click", function(){                             // Removes start button on click to begin game
        this.remove();
        renderQuestion();                                               // Begins game by loading first question
        checkAnswer();
    });



});