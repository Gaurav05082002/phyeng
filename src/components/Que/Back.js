// 
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

function Back(props) {
  const navigate = useNavigate();
  function ba() {
    navigate(-1);
  }
 function navi(){
   ba();
   window.location.reload(true);
   
 
  }

  return (
    <>
    {(props.v=="1") ? <Button type="primary" className='nextQue'  onClick={navi}>Stop</Button> : <Button type="primary" className='nextQue' onClick={() => navigate(-1)}>Back</Button> }
      {/* <button onClick={navi}>go back</button>
      <button onClick={() => navigate(1)}>go forward</button> */}
    </>
  );
}
export default Back