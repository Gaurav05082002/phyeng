import React , {useState} from 'react';
import 'antd/dist/antd.css';
import './chap.css';

import { Card } from 'antd';
import { Link } from "react-router-dom";



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

const Chapters = () => {
  const [showQ, setShowQ] = useState(false)
  const [advanceQ, setadvanceQ] = useState(false)
  

//   var theloop = document.getElementById("qloop")

//   const  displayLoop =()=> {
//     for (var i=0; i<33; i++) {
//       var lin = "/home/"+toString(i)
//         theloop.innerHTML = <Link to={lin}><Card.Grid style={gridStyle}>i</Card.Grid></Link>
//     }
// }

  const clickChap = () => {
    setShowQ(true);
    setadvanceQ(false);
    
  }
  const clickChapadvance = () => {
    setShowQ(false);
    setadvanceQ(true);
    
  }

return (
  <>
    <Card title="Chapter`s Name">
       
      <Card.Grid style={gridStyle} className="stycard" >
      <div>Newton Law`s</div>
      <div className="stycardn">
      <Card.Grid className='stylen' onClick={clickChap} >Beginners </Card.Grid>
      <Card.Grid className='stylen' onClick={clickChapadvance} >Advance</Card.Grid>
      </div>
      </Card.Grid>
      <Card.Grid style={gridStyle} className="stycard" >
      <div>Simple Harmonic Motion</div>
      <div className="stycardn">
      <Card.Grid className='stylen' onClick={clickChap} >Beginners </Card.Grid>
      <Card.Grid className='stylen' >Advance</Card.Grid>
      </div>
      </Card.Grid>
      <Card.Grid style={gridStyle} className="stycard" >
      <div>Fluid Mechanics</div>
      <div className="stycardn">
      <Card.Grid className='stylen' onClick={clickChap} >Beginners </Card.Grid>
      <Card.Grid className='stylen' >Advance</Card.Grid>
      </div>
      </Card.Grid>
      <Card.Grid style={gridStyle} className="stycard" >
      <div>Electromagnetism</div>
      <div className="stycardn">
      <Card.Grid className='stylen' onClick={clickChap} >Beginners </Card.Grid>
      <Card.Grid className='stylen' >Advance</Card.Grid>
      </div>
      </Card.Grid>
     
    </Card>
    {showQ && 
    <div className="ques">
      <Card title="Questions" id='qloop' style={linkstyle}>
      {/* <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid> */}
      

        <Link to="/home/1" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >1</Card.Grid></Link>
        <Link to="/home/2" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >2</Card.Grid></Link>
        <Link to="/home/3" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >3</Card.Grid></Link>
        <Link to="/home/4" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >4</Card.Grid></Link>
        <Link to="/home/5" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >5</Card.Grid></Link>
        <Link to="/home/6" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >6</Card.Grid></Link>
        <Link to="/home/7" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >7</Card.Grid></Link>
        <Link to="/home/8" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >8</Card.Grid></Link>
        <Link to="/home/9" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >9</Card.Grid></Link>
        <Link to="/home/10" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >10</Card.Grid></Link>
        <Link to="/home/11" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >11</Card.Grid></Link>
        <Link to="/home/12" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >12</Card.Grid></Link>
        <Link to="/home/13" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >13</Card.Grid></Link>
        <Link to="/home/14" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >14</Card.Grid></Link>
        <Link to="/home/15" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >15</Card.Grid></Link>
        <Link to="/home/16" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >16</Card.Grid></Link>
        <Link to="/home/17" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >17</Card.Grid></Link>
        <Link to="/home/18" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >18</Card.Grid></Link>
        <Link to="/home/19" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >19</Card.Grid></Link>
        <Link to="/home/20" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >20</Card.Grid></Link>
        <Link to="/home/21" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >21</Card.Grid></Link>
        <Link to="/home/22" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >22</Card.Grid></Link>
        <Link to="/home/23" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >23</Card.Grid></Link>
        <Link to="/home/24" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >24</Card.Grid></Link>
        <Link to="/home/25" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >25</Card.Grid></Link>
        <Link to="/home/26" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >26</Card.Grid></Link>
        <Link to="/home/27" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >27</Card.Grid></Link>
        <Link to="/home/28" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >28</Card.Grid></Link>
        <Link to="/home/29" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >29</Card.Grid></Link>
        <Link to="/home/30" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >30</Card.Grid></Link>
        <Link to="/home/31" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >31</Card.Grid></Link>
        <Link to="/home/32" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >32</Card.Grid></Link>
        <Link to="/home/33" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >33</Card.Grid></Link>
        <Link to="/home/34" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >34</Card.Grid></Link>
        <Link to="/home/35" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >35</Card.Grid></Link>
        <Link to="/home/36" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >36</Card.Grid></Link>
        <Link to="/home/37" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >37</Card.Grid></Link> 
        {/* 37 is 39 */}
        <Link to="/home/38" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >38</Card.Grid></Link>

        
      </Card>
    </div>
}
 
{advanceQ && <div className="ques">
      <Card title="Questions" id='qloop' style={linkstyle}>
      {/* <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid> */}
      

        <Link to="/home/1" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >1</Card.Grid></Link>
        <Link to="/home/2" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >2</Card.Grid></Link>
        <Link to="/home/3" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >3</Card.Grid></Link>
        <Link to="/home/4" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >4</Card.Grid></Link>
        <Link to="/home/5" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >5</Card.Grid></Link>
        <Link to="/home/6" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >6</Card.Grid></Link>
        <Link to="/home/7" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >7</Card.Grid></Link>
        <Link to="/home/8" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >8</Card.Grid></Link>
        <Link to="/home/9" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >9</Card.Grid></Link>
        <Link to="/home/10" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >10</Card.Grid></Link>
        <Link to="/home/11" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >11</Card.Grid></Link>
        <Link to="/home/12" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >12</Card.Grid></Link>
        <Link to="/home/13" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >13</Card.Grid></Link>
        <Link to="/home/14" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >14</Card.Grid></Link>
        <Link to="/home/15" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >15</Card.Grid></Link>
        <Link to="/home/16" className="linkstla" ><Card.Grid style={gridStyle} className="gristl" >16</Card.Grid></Link>
       
        
      </Card>
    </div>

 }
  </>
)
}

export default Chapters;

<div className="ques">
      <Card title="Questions" id='qloop' style={linkstyle}>
      {/* <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid>
      <Card.Grid style={gridStyle}>1</Card.Grid> */}
      

        <Link to="/home/1" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >1</Card.Grid></Link>
        <Link to="/home/2" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >2</Card.Grid></Link>
        <Link to="/home/3" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >3</Card.Grid></Link>
        <Link to="/home/4" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >4</Card.Grid></Link>
        <Link to="/home/5" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >5</Card.Grid></Link>
        <Link to="/home/6" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >6</Card.Grid></Link>
        <Link to="/home/7" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >7</Card.Grid></Link>
        <Link to="/home/8" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >8</Card.Grid></Link>
        <Link to="/home/9" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >9</Card.Grid></Link>
        <Link to="/home/10" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >10</Card.Grid></Link>
        <Link to="/home/11" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >11</Card.Grid></Link>
        <Link to="/home/12" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >12</Card.Grid></Link>
        <Link to="/home/13" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >13</Card.Grid></Link>
        <Link to="/home/14" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >14</Card.Grid></Link>
        <Link to="/home/15" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >15</Card.Grid></Link>
        <Link to="/home/16" className="linkstl" ><Card.Grid style={gridStyle} className="gristl" >16</Card.Grid></Link>
       
        
      </Card>
    </div>