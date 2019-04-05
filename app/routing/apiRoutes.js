var path =require("path");

module.exports = function (app) {
    // Displays friends
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Create New Friends - takes in JSON input
    app.post("/api/friends", function (req, res) {
        var userInput = req.body;

        // declare variable equal to New Friend's scores
        var userResponse = userInput.scores;

        var matchFriend;

        var minimumDifference = 776

        // loop over scores of each friend to get total.
        for (let i =0; i < friends.length; i++) {

            //compute difference
            let diff = 0;
            for (j =0; j < userResponse.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponse[j]);

                if (diff < minimumDifference) {
                    minimumDifference = diff;
                    matchFriend = friends[i];
                };
            };

            console.log("diff: ", diff);
            console.log("Name: ", friends[i].name);
        };

        console.log("Total Difference: ", totalDifference);
        console.log("Matching Character: ", matchFriend.name);

        // compare new friends vs existing friends.

        // return friend w/ least difference.

        // push match friend to modal on survey page.

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        

        console.log(userInput);

        res.json(matchFriend);



        userInput.name = userInput.name.replace(/\s+/g, "").toLowerCase();
        friends.push(userInput);

    });

}