import React from 'react';

export function CustomCursor(props) {

    return (
      <div className='custom-cursor'>
            <div className='left' onClick={props.onClickPrevious}>left</div>
            <div className='right' onClick={props.onClickNext}>right</div>
      </div>
  )
}

 