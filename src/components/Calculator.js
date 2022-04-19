import React from 'react';
let count = 1;
class Design extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: ['AC', '+/-', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='],
            classname: ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's']
        }
    }
    render(){
        return(
            <div className="main-container">
                <div className='console'>0</div>
                {this.state.data.map((i)=>(
                    <span id={this.state.classname[0] + count ++}>{i}</span>
                ))}
            </div>
        )
    }
}

export default Design