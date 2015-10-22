 module.exports = React.createClass({
	render : function(){
        localStorage.removeItem('focusState');
		return window.location.reload();
	}
});
