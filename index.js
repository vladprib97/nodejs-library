var _ = require('lodash');

var names = ['Bruce Wayne', 'Wally West', 'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent'];
var otherNames = ['Barry Allen', 'Hal Jordan', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];

_.each([names, otherNames], function(nameGroup) {
    findSuperman(nameGroup);
});

function findSuperman(values) {
    var div = document.getElementById("superMan");
    var divTwo = document.getElementsByTagName("li");

    var i = 0;

    var timerId = setInterval(_.find(values, function(name) {
        if (name === 'Clark Kent') {
            div.textContent = name + ': It\'s Superman!';
        } else {
            divTwo[i].textContent  = name + '... No superman!';
            i++;
        }
    }), 1000);

    setTimeout(function() {
        clearInterval(timerId);
    }, 7000);
}
