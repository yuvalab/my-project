import React from 'react';

export function CustomCursor(props) {
    // const width = window.document?.querySelector('.gallery')?.clientWidth;
    // const halfWidth = width/2;
    return (
      <div className='custom-cursor'>
            <div className='left'>left</div>
            <div className='right'>right</div>
            {props.children}
      </div>
  )
}

 