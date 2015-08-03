var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {show:false};
    },
    trigger:function(){
        this.setState({show:!this.state.show});
    },
    cancelHandler:function(){
        this.setState({show:false});
        this.refs.text.getDOMNode().value = "";
    },
    submitHandler:function(){
        var text = this.refs.text.getDOMNode();
        if(text.value!=""){
            this.props.onSubmit(text.value);
            this.setState({show:false});
            text.value = "";
        }
    },
    render:function(){
        return (
            <div>
                <div className={'title'} onClick={this.trigger}>
                    <i className={this.state.show?'uparrow':'downarrow'}></i>
                    <label>{this.state.show?'收起输入框':'展开输入框'}</label>
                </div>
                <div className={this.state.show?'show':'hide'}>
                    <div>
                        <textarea className="textArea" ref="text"></textarea>
                    </div>
                    <div className="btns">
                        <button onClick={this.submitHandler}>提交</button>
                        <button onClick={this.cancelHandler}>取消</button>
                    </div>
                </div>
            </div>
        );
    }
});