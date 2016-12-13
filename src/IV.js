(function( window, undefined ) {
    "use strict";
    
  var jQuery = function( selector, context ) {
      // The jQuery object is actually just the init constructor 'enhanced'
      return new jQuery.fn.init( selector, context );
    },
    jquery: "@VERSION",

}