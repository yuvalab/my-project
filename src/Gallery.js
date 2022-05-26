import React from 'react';
import view1 from './pics/view1.jpeg';
import view2 from './pics/view2.jpeg';
import view3 from './pics/view3.jpeg';
import view4 from './pics/view4.jpeg';

export default class Gallery extends React.Component {
    constructor(){
        super();
        this.state = {
            imgIndex: 0,
            images: [view1, view2, view3, view4],
        };
    }



    onClickNext= () => {
        if (this.state.imgIndex + 1 === this.state.images.length) {
          this.setState({
            imgIndex: 0
          })
        } else {
          this.setState({
            imgIndex: this.state.imgIndex + 1
          })
        }
      }

      onClickPrevious= () => {
        if (this.state.index - 1 === -1 ){
          this.setState({
            imgIndex: this.state.images.length - 1
          })
        } else {
          this.setState({
            imgIndex: this.state.imgIndex - 1
          })
        }
      }


    
  render() {
    return (
        <div className='gallery'>
            {/* {this.constructStyleCursor()} */}
            <button onClick={this.onClickPrevious}> Previous </button>
            <img style={{width: '600px', height:'600px'}} src={this.state.images[this.state.imgIndex]}/>
            <button onClick={this.onClickNext}> Next </button>
      </div>
    );
  }
}