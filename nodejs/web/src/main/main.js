import React from 'react';
import ReactDom  from 'react-dom';
import Header from './components/header/header.js'
import Index from './main';



class Index extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div>
            <Header/>
        </div>)
    }
}

ReactDom.render(<Index/>,document.getElementById("app-main"));