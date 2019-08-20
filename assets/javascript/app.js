$(document).ready(function() {
    var counter = 30;
    var timer = 0;
    var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var answerGuessed = false;

    var questions =[                                        // Array of question objects
        {
            question: "What makes time travel possible?",
            choices: ["Skynet", "Flux Capacitor", "Plutonium", "A wish"],
            answer: "Flux Capacitor"
        },
        {
            question: "Who directed Forrest Gump?",
            choices: ["Robert Zemeckis", "Steven Spielberg", "Ron Howard", "Nora Ephron"],
            answer: "Robert Zemeckis"
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

    function renderQuestion() {                                         // Function to load question and answers to html
        var question = questions[currentQuestion].question;             // Assigns question value from questions array to question variable
        var choicesArray = questions[currentQuestion].choices;          // Assigns choices value from choices array to choicesArray variable
        var htmlChoices = "";                                           // Initializes choice variable with empty string
        for(var i = 0; i < choicesArray.length; i++) {                  // Loops to add each choice from choiceArray with a p tag
            htmlChoices += "<p class='htmlChoices'>" + choicesArray[i] + "</p>";    // Add class to p for CSS styling
        }
        $("#time").html("Timer: " + counter);                           // Adds timer to html
        $("#game").html("<h2>" + question + "</h2>" + htmlChoices);     // Adds question and choices to html
        if(currentQuestion === 9) {                                    // Ends game after 10 questions
            $("#game").html("<h2>You did it!</h2><p>You got " + correct + " correct</p>");      //Displays how many correct and incorrect
        }    
    };

    function checkAnswer() {
        var answer = questions[currentQuestion].answer;                 // Stores current question answer value to answer variable
        $(".htmlChoices").on("click", function(){                       // On click checks if text from html element matches answer varible
            if($(this).text() === answer) {
                correct++;                                              // Increase correct count
                alert("bang");
            }
            else {
                incorrect++;                                            // Increase incorrect count
                alert("wrong choice");
            }
            currentQuestion++;                                          // Increase currentQuestion count
            renderQuestion();
            checkAnswer();
        });
    };



    $("#start-btn").on("click", function(){                             // Removes start button on click to begin game
        this.remove();
        renderQuestion();                                               // Begins game by loading first question
        checkAnswer();
    });



});