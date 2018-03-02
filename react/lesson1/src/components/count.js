import React from 'react';
import style from '../styles/index.styl';
class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }
    odd(){
        if(this.props.value%2!=0){
            this.props.onIncrement();
        }
    }
    even(){
        setTimeout(this.props.onIncrement, 1000)
    }
    render(){
        const {value,onIncrement,onDecrement} = this.props;
        return (<div className='cont-container'>
                num:{value}
              
                <input type='button' value="+" onClick={onIncrement}/>
              
                <input type='button' value="-" onClick={onDecrement}/>
               
                <input type="button" value="odd" onClick={this.odd.bind(this)}/>

                <input type="button" value="even" onClick={this.even.bind(this)}/>
        </div>)
    }
}

export default Count