import React , {useState} from 'react';
import 'antd/dist/antd.css';
import '../chap.css';
import Cardn from '../Cardn';

import { Card } from 'antd';
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";
import { BsFillUnlockFill } from "react-icons/bs";



const gridStyle = {
  width: '25%',
  textAlign: 'center',
  background: '#e6f7ff',
  padding: '25%',
  direction: 'row',

  
};

const linkstyle ={
  direction: 'row' 
}


export default function Nlmadvance() {
  return (
 
    
            <div className="ques">
              <Card title="Questions" id='qloop' style={linkstyle}>
              {/* <Card.Grid style={gridStyle}>1</Card.Grid>
              <Card.Grid style={gridStyle}>1</Card.Grid>
              <Card.Grid style={gridStyle}>1</Card.Grid>
              <Card.Grid style={gridStyle}>1</Card.Grid> */}
              
        
              <Link to="/home/41" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >1</Card.Grid></Link>
        <Link to="/home/39" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >2</Card.Grid></Link>
         <Link to="/home/43" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >3</Card.Grid></Link>
         <Link to="/home/42" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >4</Card.Grid></Link>
       <Link to="/home/44" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >5</Card.Grid></Link>
        
                
              </Card>
            </div>
        



  )
}