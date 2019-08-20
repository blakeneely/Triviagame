$(document).ready(function() {
    $("#start-btn").on("click", function(){                 // Removes start button on click to begin game
        this.remove();
    })

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
            question: "Mickey Mouse's pet dog is named:",
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


    ]


});