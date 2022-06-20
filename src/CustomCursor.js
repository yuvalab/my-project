import React from 'react';
import right from './icons-arrow-right.png'
import left from './icons-arrow-pointing-left.png'

export function CustomCursor(props) {
 const galleryHeight = props.getCurrentSizeWindow.height;
 const galleryWidth = props.getCurrentSizeWindow.width;
 const rightCursor = `url(${right}), pointer`;
 const leftCursor = `url(${left}), pointer`;
    return (
      <div className='custom-cursor'>
            <div className='left' onClick={props.onClickPrevious} style={{cursor: leftCursor,width:galleryWidth/2, height:galleryHeight}}>left</div>
            <div className='right' onClick={props.onClickNext} style={{cursor: rightCursor, width:galleryWidth/2, height:galleryHeight}}>right</div>
      </div>
  )
}

 