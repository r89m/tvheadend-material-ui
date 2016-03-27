// Prevent caching. Remove in production

$.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});


$(document).ready(function(){

    processContainer($(document));
})

function processContainer(container){

    container.find("[data-src]").each(function(a, b, c){
        importContentIntoContainer($(this));
    });
}

function importContentIntoContainer(container){

    var srcUrl = "view/" + container.data("src") + ".html";
    container.load(srcUrl, function(){
        processContainer(container);
    });
}
