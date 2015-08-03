var React = require('react');

module.exports = React.createClass({
    getInitialState:function(){
        return {show:false,text:""};
    },
    trigger:function(){
        this.setState({show:!this.state.show});
    },
    cancelHandler:function(){
        this.setState({show:false,text:""});
    },
    submitHandler:function(){
        if(this.state.text!=""){
            this.props.onSubmit(this.state.text);
            this.setState({show:false,text:""});
        }
    },
	changeHandler:function(e){
		var value = e.target.value.replace(/^\s+|\s+$/g,'');
		if(value!=""){
			this.setState({text:value});
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
                        <textarea className="textArea" value={this.state.text} onChange={this.changeHandler}></textarea>
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
