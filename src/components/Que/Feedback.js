
import React from 'react'
import "./Feedback.css"
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Feedback() {
  return (
     <div className='feedmain'>

<div className='upperd'>
                <div className='upperheadbox'><h1 className='upperhead'>PHYSICS ENGINE</h1> </div>
                 
                <div className='menubox'>
                  <Link to="/feedback" className='mainmenu'>
                    Courseoverview
                  </Link>
                  <Link to="/feedback" className='mainmenu'>
                    Content
                  </Link>
                  <Link to="/feedback" className='mainmenu'>
                    Dashboard
                    </Link>
                    <Link to="/feedback" className='mainmenu'>
                    Feedback
                    </Link>
                    </div>
           </div>

          <div id="b4c"><h1 class="tit4">SHARE YOUR FEEDBACK</h1>
                <form action="backend.php">
                    <div class="f4">
                        <label for="doseno">Name :  </label>
                        <input type="text" id="doseno" name="mydoseno" class="f5"></input>
                
                    </div>
                
                    <div class="f4">
                        email : <input type="email" name="myemail" class="f5" ></input>
                    </div>
                   
                {/* <div class="f4">
                    address: <input type="text" name="myfatname" class="f5" ></input>
                </div> */}
            
                
               
                <label for="desease" class="f4">Give your review : </label>
            
                <textarea name="write" id="desease"
                 cols="30" rows="5" class="f5"></textarea>
                <div class="f4">
                
                    <label for="like">Video quality</label>
                <select name="mylike" id="like">
                    <option value="five star" >★★★</option>
                    <option value="four star">★★</option>
                    <option value="three star">★</option>
                </select>

                <br></br>
                <label for="like">Audio quality</label>
                <select name="mylike" id="like">
                <option value="five star" >★★★</option>
                    <option value="four star">★★</option>
                    <option value="three star">★</option>
                </select>
                <br></br>
                <label for="like">Did it help you to understand ques</label>
                <select name="mylike" id="like">
                <option value="five star" >★★★</option>
                    <option value="four star">★★</option>
                    <option value="three star">★</option>
                </select>
                <br></br>
                
                </div>
            
                <div class="fno4">
                    <input type="button" value="submit" class="f6"></input>
                    <input type="button" value="reset" class="f6"></input>
                </div>
            
            
                </form>
                 </div>
     </div>
  )
}