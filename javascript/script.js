/*
    Tumblr Logged In Checker
    Ashish Pandhi
    https://github.com/apandhi/Tumblr-Logged-In-Checker
*/

(function(){
    var logged_in;

    var logged_in_callback = is_logged_in || (function(){});
    var logged_out_callback = is_logged_out || (function(){});

    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    eventer(messageEvent,function(e) {
        var data = (e.data && e.data.split) ? e.data.split(';') : '';
        if(data[0] == "user_logged_in"){
            if(data[1] == "Yes"){
                logged_in_callback();
            }else{
                logged_out_callback();
            }
        }
    }, false);
})();