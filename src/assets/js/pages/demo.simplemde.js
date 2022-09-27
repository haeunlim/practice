
/**
* Theme: Hyper - Responsive Bootstrap 5 Admin Dashboard
* Author: Coderthemes
* Component: SimpleMDE component
*/

!function ($) {
    "use strict";

    var SimpleMDEEditor = function () {
    };

    /* Initializing */
    SimpleMDEEditor.prototype.init = function () {
        // e.g.
        var simplemde = new SimpleMDE({
            element: document.getElementById("simplemde1"),
             status:false,
        });
        var simplemde2 = new SimpleMDE({
            element: document.getElementById("simplemde2"),
            
            status:false,
        });
        var simplemde3 = new SimpleMDE({
            element: document.getElementById("simplemde3"),
        
            status:false,
        });
        var simplemde4 = new SimpleMDE({
            element: document.getElementById("simplemde4"),
            
            status:false,
        });
    },
     //init SimpleMDE
     $.SimpleMDEEditor = new SimpleMDEEditor, $.SimpleMDEEditor.Constructor = SimpleMDEEditor

}(window.jQuery),
    
//initializing 
function ($) {
    "use strict";
    $.SimpleMDEEditor.init();
}(window.jQuery);