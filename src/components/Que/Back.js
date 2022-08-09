// 
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { render } from '@testing-library/react';

function Back(props) {
  const navigate = useNavigate();
  function ba() {
    navigate(-1);

  }
  function chaba() {
    if (props.h =="1") {
      navigate('/NLMbasic', {replace: true});
      window.location.reload(true);
    } else {
      navigate('/NLMadvance', {replace: true});
      window.location.reload(true);
    }
   

  }
 function navi(){
   ba();
   window.location.reload(true);
   
 
  };


 
  return (
    <>
    
    {(props.v=="1") ? <Button type="primary" className='nextQue'  onClick={chaba}>Stop</Button> : <Button type="primary" className='nextQue' onClick={() => navigate(-1)}>Back</Button> }
      {/* <button onClick={navi}>go back</button>
      <button onClick={() => navigate(1)}>go forward</button> */}
    </>
  );
}
export default Back