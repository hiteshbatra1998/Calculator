import React from 'react';
import Result from './Result';
import Key from '../KeyPad.css';
let arr1=[],i=0;
let arr2=[];
let ans1='';
class KeyPad extends React.Component{
    constructor(){
        super();
        this.state={arr:[],ans:''}
    }
    click(symbol){
        if(symbol === 'CE' || symbol === 'C'){
            if(symbol==='CE'){
                arr1=[];
                arr2=[];
                ans1='';
                this.setState({arr:arr1 , ans:ans1});
            }
            else if(symbol==='C'){
                arr1.pop();
                arr2.pop();
                this.setState({arr:arr1});
            }
        }
        else if (symbol === '=' ){
            ans1=arr1.join('');
            
            this.setState({ans: eval(ans1)});
        }
        else{
            arr1.push(symbol);
            arr2.push(symbol);
            this.setState({arr: arr1});
        }
       
    }
    render(){
        return(<div className="main-div">
                <Result exp={this.state.arr} ans={this.state.ans}/>
                <div className="but">
                    <div className="operand">
                        <button name="(" onClick={ e => this.click(e.target.name)}>(</button>
                        <button name=")" onClick={ e => this.click(e.target.name)}>)</button>
                        <button name="CE" onClick={ e => this.click(e.target.name)}>CE</button>
                        <button name="1" onClick={ e => this.click(e.target.name)}>1</button>
                        <button name="2" onClick={ e => this.click(e.target.name)}>2</button>
                        <button name="3" onClick={ e => this.click(e.target.name)}>3</button>
                        <button name="4" onClick={ e => this.click(e.target.name)}>4</button>
                        <button name="5" onClick={ e => this.click(e.target.name)}>5</button>
                        <button name="6" onClick={ e => this.click(e.target.name)}>6</button>
                        <button name="7" onClick={ e => this.click(e.target.name)}>7</button>
                        <button name="8" onClick={ e => this.click(e.target.name)}>8</button>
                        <button name="9" onClick={ e => this.click(e.target.name)}>9</button>
                        <button name="0" onClick={ e => this.click(e.target.name)}>0</button>
                        <button name="." onClick={ e => this.click(e.target.name)}>.</button>
                        <button name="C" onClick={ e => this.click(e.target.name)}>C</button>
                    </div>
                    <div className='operator'>
                        <button className="ope" name="-" onClick={ e => this.click(e.target.name)}>-</button>
                        <button className="ope" name="*" onClick={ e => this.click(e.target.name)}>x</button>
                        <button className="ope" name="/" onClick={ e => this.click(e.target.name)}>/</button>
                        <button className="ope" name="+" onClick={ e => this.click(e.target.name)}>+</button>
                        <button className="ope" name="=" onClick={ e => this.click(e.target.name)}>=</button>
                    </div>
                </div>
        </div>);
    }
};
export default KeyPad;
