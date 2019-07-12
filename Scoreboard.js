/*
Date: 07 June 2019
Purpose: Sends articulate storyline data (TeamName, Score, and Motto) to a Google Sheets database/scoreboard using Google Scripts

Adapted from https://mashe.hawksey.info/2014/07/google-sheets-as-a-database-insert-with-apps-script-using-postget-methods-with-ajax-example/
and here https://community.articulate.com/discussions/articulate-storyline/create-a-leaderboard-in-wordpress-for-your-storyline-game#165221

Google Sheets Database/Scoreboard located here: https://docs.google.com/spreadsheets/d/1_5cbkF42CiiWC5PHiNVISFuhNHURSvcN16JnRtP1RlQ/edit?usp=sharing

*/

// Retrieve the player instance so we can get stored variables
var player = GetPlayer();

// Create some variable values, taken from Storyline module
var teamnameValue = player.GetVar("TeamName");
var scoreValue = player.GetVar("Score"); 
var mottoValue = player.GetVar("TeamMotto");
var teammembernameValue = player.GetVar("TeamMemberName");

// Send an ajax request with the parsed data and relevant url 
request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbycrJGZLmJWYnxhWpVlGhRU70_612h-eCz-_ef7ADlFU9ECK4xK/exec",
            type: "post",
            data: "TeamName="+encodeURIComponent(teamnameValue)
            +"&Score="+encodeURIComponent(scoreValue)
            +"&TeamMotto="+encodeURIComponent(mottoValue)
            +"&TeamMemberName="+encodeURIComponent(teammembernameValue)
        });


