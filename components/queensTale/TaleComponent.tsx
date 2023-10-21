import React from 'react';

export const PageCover = React.forwardRef((props: any, ref: any) => {
  return (
    <div className='page page-cover' ref={ref} data-density='hard'>
      <div className='page-content'>
        <div>{props.children}</div>
      </div>
    </div>
  );
});

export const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <div className='page' ref={ref}>
      <div className='page-content'>
        {/* <h2 className='page-header'>Page header - {props.number}</h2> */}
        <div className='page-image'></div>
        <div className='page-text'>
          <div className='child-wrapper'>{props.children}</div>
        </div>
        {/* <div className='page-footer'>{props.number + 1}</div> */}
      </div>
    </div>
  );
});
