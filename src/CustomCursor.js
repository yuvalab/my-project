import React from 'react';
import right from './icons-arrow-right.png'
import left from './icons-arrow-pointing-left.png'

export function CustomCursor(props) {


 const rightCursor = `url(${right}), pointer`;
 const leftCursor = `url(${left}), pointer`;
    return (
      <div className='custom-cursor'>
            <div className='left' onClick={props.onClickPrevious} style={{cursor: leftCursor}}>left</div>
            <div className='right' onClick={props.onClickNext} style={{cursor: rightCursor}}>right</div>
      </div>
  )
}

 