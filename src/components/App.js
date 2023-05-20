import React from 'react';
import "./tooltip.css";
import Tooltip from './Tooltip';

class App extends React.Component {

  constructor(){
    super();
    this.state= {
      position:'top',
      hover:false
    };
  }

  // get postion on click 
  handleClick = (pos) => {
    this.setState({
      position:pos
    })
  };


  // on mouse Enter 
  handleMouseEnter = () => {
    this.setState({hover:true});
  };

  // on mouse leave 
  handleMouseLeave = () => {
    this.setState({hover:false});
  };


  render(){
  return (    
    <div className='App'>
       <div className="btn-position">

          {/* Hover to Top  */}
            <button 
            className={this.state.position === 'top' ? 'btn active' : 'btn'}
            onClick={(e)=>{this.handleClick('top')}}
            >
              <span>Top</span>
            </button>


            {/* Hover to LEft  */}
            <button 
            className={this.state.position === 'left' ? 'btn active' : 'btn'}
            onClick={(e)=>{this.handleClick('left')}}
            >
              <span>left</span>
            </button>


            {/* Hover to right  */}
            <button 
            className={this.state.position === 'right' ? 'btn active' : 'btn'}
            onClick={(e)=>{this.handleClick('right')}}
            >
              <span>right</span>
            </button>


             {/* Hover to bottom  */}
            <button 
            className={this.state.position === 'bottom' ? 'btn active' : 'btn'}
            onClick={(e)=>{this.handleClick('bottom')}}
            >
              <span>bottom</span>
            </button>
       </div>


      {/* Hover on Me Btn  */}
       <div id="btn-container">
          <button
            className='btn hover-btn'
            onMouseOver={this.handleMouseEnter}
            onMouseOut={this.handleMouseLeave}
          > 
                Hover On Me!
          </button>
          {this.state.hover && <Tooltip position={this.state.position}/>} 
       </div>



    </div>
  );
  }

};

export default App;
