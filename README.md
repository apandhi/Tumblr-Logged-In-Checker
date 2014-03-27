Tumblr Logged In Checker
========================

This script allows you to check if a user is logged in when they visit your blog by intercepting Tumblr's internal analytics' iframe messages.

You can use this script by defining the following functions in your Tumblr Blog's HTML

    var is_logged_in = function(){
        //What do you want to do if the user is logged in?
    }

    var is_logged_out = function(){
        //What do you want to do if the user is logged out?
    }

Then include the script file into the HTML

Example Usage
-----------------
**Alerts**

    <script type="text/javascript">
        var is_logged_in = function(){
            alert("Hey there :)");
        }
    
        var is_logged_out = function(){
            alert("You should really log in!");
        }
    </script>
    <script type="text/javascript" src="http://static.tumblr.com/3pomgja/LEEn32y7z/script.js"></script>
    
**Redirects**

    <script type="text/javascript">
        var is_logged_in = function(){
            //Do nothing
        }
    
        var is_logged_out = function(){
            window.location.href = "/notloggedin";
        }
    </script>
    <script type="text/javascript" src="http://static.tumblr.com/3pomgja/LEEn32y7z/script.js"></script>
    

**Conditional Redirects**

    <script type="text/javascript">
        var is_logged_in = function(){
            //Do nothing
        }
    
        var is_logged_out = function(){
            if(window.location.pathname == "/ask"){
                window.location.href = "/notloggedin";
            }
        }
    </script>
    <script type="text/javascript" src="http://static.tumblr.com/3pomgja/LEEn32y7z/script.js"></script>
