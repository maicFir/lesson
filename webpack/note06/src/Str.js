import React from "react";
import ReactDOM from "react-dom";

class Str extends React.Component{
  constructor(props){
    super(props)
  }
   render(){
     return(<p onClick={this.props.handLength}>{this.props.content}</p>)
   }
}

class Post extends React.Component {
  constructor(){
    super();
    this.state = {
       str:"dhedhediueded"
    }
  }
  handlength(){
    this.setState({
      str:this.state.str
    });

   alert(this.state.str.length);
  }
  render () {
    return (<p>
        <Str content={this.state.str} handLength={this.handlength.bind(this)}/>
    </p>)
  }
}
export default Post;
