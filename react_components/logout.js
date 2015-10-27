/**
 * [LocalStorageMixin Mixin for localstorage]
 */
 var LocalStorageMixin = require('./LocalStorageMixin');


 module.exports = React.createClass({
     mixins: [LocalStorageMixin],
     render : function(){
         this.deleteMyItem('focusState');
         return window.location.reload();
     }
});
