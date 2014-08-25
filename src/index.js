(function(window, document, undefined) {
  'use strict';

  function Component() {}

  Component.prototype = {
    constructor: Component
  };

  window.Component = window.Component || Component;

}(window, document, undefined));
