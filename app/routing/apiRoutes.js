var path =require("path");

module.exports = function (app) {
    // Displays dinner guests
    app.get("/api/family", function (req, res) {
        res.json(family);
    });

    // Create New dinner guest - takes in JSON input
    app.post("/api/family", function (req, res) {
        var userInput = req.body;

        // declare variable equal to New Friend's scores
        var userResponse = userInput.scores;

        // the person matched most closely to the user's input
        var matchThanksgiving;

        // a variable to compare differences against
        var minimumDifference = 1104

        // loop over scores of each friend to get total.
        for (let i =0; i < family.length; i++) {

            //setting difference between userinput and each dinner guest to 0 before calculating 
            let diff = 0;

            //compute difference between userinput and each dinner guest
            for (j =0; j < userResponse.length; j++) {
                diff += Math.abs(family[i].scores[j] - userResponse[j]);


            };

            // if the difference is less than minimum difference, it becomes the new minimum
            if (diff < minimumDifference) {
                minimumDifference = diff;
                // then the dinner guest becomes the new match
                matchThanksgiving = family[i];
            };

            // console logging the results of each comparison
            console.log("Name: ", family[i].name);
            console.log("Scores:", family[i].scores);
            console.log("diff: ", diff);
            console.log(" <------------------->")
        };

        console.log("Matching Character: ", matchThanksgiving.name);
        console.log("Scores:", matchThanksgiving.scores);
        console.log("Minimum Difference: ", minimumDifference);      

        //console logging userinput
        console.log(userInput);

        // console logging the match
        res.json(matchThanksgiving);



        userInput.name = userInput.name.replace(/\s+/g, "").toLowerCase();
        family.push(userInput);

    });

}