//Create a function to dynamically display the block in broswer window. Do this by targeting the html element id directy using #currentDay 

$(function () {

    var hour = moment().hours();

    //Moment.js date for top of page
    function getDate() 
    {
        //make sure to use # 
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    };

    setInterval(getDate, 1000);
});

/* Create color coding dependent on the hour */ 

