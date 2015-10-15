module.exports = React.createClass({
    dateToday : function(){
        var now = new Date();
        var year   = now.getFullYear();
        var month    = now.getMonth() + 1;
        var day    = now.getDate();
        var hour   = now.getHours();
        var minute  = now.getMinutes();
        var seconde = now.getSeconds();

        return 'Le '+day+'-'+month+'-'+year+' à '+hour+':'+minute+':'+seconde ;
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.refs.author.value.trim();
        var text = this.refs.text.value.trim();
        var titleTuto = this.refs.titleTuto.value.trim();
        var dateToday = this.dateToday();
        if (!text || !author || !titleTuto) {
            return;
        }
        this.props.onTutorialSubmit({author: author, text: text, titleTuto : titleTuto, dateTuto : dateToday});
        this.refs.author.value = '';
        this.refs.text.value = '';
    },
    render: function() {
        return (
            <div className="container">
                <form className="tutorialForm" onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" placeholder="Auteur tuto" ref="author" />
                    <input className="form-control" type="text" placeholder="Titre tuto" ref="titleTuto" />
                    <input className="form-control" type="text" placeholder="Text tuto..." ref="text" />
                    <input className="form-control" type="submit" value="Post" />
                </form>
            </div>
        );
    }
});