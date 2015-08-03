var React = require('react');

module.exports = React.createClass({
    render:function(){
        return (
            <div>
                <div>{this.props.items.length}条留言：</div>
                <ul>
                    {this.props.items.map(function(item,i){
                        return (
                            <li><div>{item}</div><div className="delete" data-key={i} onClick={this.props.onRemove}></div></li>
                        );
                    },this)}
                </ul>
            </div>
        );
    }
});