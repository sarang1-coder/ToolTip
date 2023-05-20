import React from 'react';

class Tooltip extends React.Component {

    Pos= () => {
      return `${this.props.position}`;
    }


    render(){
      return(
          <div className={`${this.Pos()}`}>
            This is '{this.props.position}' position!
          </div>     
      )
    }


 
};

export default Tooltip;
