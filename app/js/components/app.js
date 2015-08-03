var React = require('react'),
    Form = require('./form.js'),
    List = require('./list.js');

module.exports = React.createClass({
    getInitialState:function(){
        return {items:["apple","banana","orange"]}
    },
    addHandler:function(text){
        var items = this.state.items;
        items.unshift(text);
        this.setState({items:items});
    },
    removeHandler:function(e){
        var i = ~~e.target.getAttribute("data-key");
        var items = this.state.items;
        items.splice(i,1);
        this.setState({items:items});
    },
    render:function(){
        return (
            <div>
                <h2>留言板</h2>
                <div id="list">
                    <List items={this.state.items} onRemove={this.removeHandler}/>
                </div>
                <div id="form">
                    <Form onSubmit={this.addHandler}/>
                </div>
            </div>
        );
    }
});