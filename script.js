const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    score_board_title = document.querySelector(".score_board_title"),
    score_separator = document.querySelector(".score_separator"),
    user_score = document.querySelector(".user_score"),
    cpu_score = document.querySelector(".cpu_score"),
    optionImages = document.querySelectorAll(".option_image");
    uscore = 0;
    cscore = 0;
    
    //Loop through each option image element
    optionImages.forEach((image, index) => {
        image.addEventListener("click", (e) => {
            image.classList.add("active");
            console.log("class activated for the image");
            
            userResult.src = cpuResult.src = "rock.jpg";
            result.textContent = "Wait...";

        //Loop through each option image again to remove the active class from image not clicked
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");
        console.log("start class added!");

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // Get the source of the clicked image
            let imgageSrc = e.target.querySelector("img").src;

            //Set the user image to the clicked option image
            userResult.src = imgageSrc;

            // Generate a random number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);

            // Creating an array of CPU images options
            let cpuImages = [
                "rock.jpg",
                "paper.jpg",
                "scissor.jpg",
            ];

            // Set the CPU image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
            let cpuValue = ["R", "P", "S"][randomNumber];

            //Assgn a letter value to the clicked option (based on index)
            let userValue = ["R", "P", "S"][index];

            // Create an object with all possible outcomes
            let outcomes = {
                RR: "It's a Draw(-_-)", PP: "It's a Draw(-_-)", SS: "It's a Draw(-_-)",
                RP: "CPU ", PS: "CPU ", SR: "CPU ",
                RS: "User ", PR: "User ", SP: "User "
            };

            // Look up the outcome value based on the user and CPU options
            let outComeValue = outcomes[userValue + cpuValue];

            if(outComeValue=='User ') uscore++;
            if(outComeValue=="CPU ") cscore++;
            console.log(uscore);
            console.log(cscore);

            // Display the results
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!`;
            //Initial ScoreBoard
    score_separator.textContent = ":";
    user_score.textContent = `User - ${uscore} `;
    cpu_score.textContent = `Computer - ${cscore} `;
        }, 2500)
        
    });
});