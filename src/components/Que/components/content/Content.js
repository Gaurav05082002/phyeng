//content.js file consits the body part (whole body except navbar)
import React from 'react';
import './Content.css';
import './modalform.css';
import './Rightbar.css';
//importing icons via npm install react-icons --save
import { FiBarChart } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import { IoBookmarksOutline } from "react-icons/io5";
import { useState,useRef,useEffect } from 'react';
import Map from './Graph/Map';
import Piegraph from './Graph/Piegraph';
// map file contains the comparison graph 
// piegraph file contains pie graph for score analysis 


export default function Content() {
       
  // this states is for syllabus vise analysis progress bar 
      const [valn1,setvaln1]=useState(0);
      const [valn2,setvaln2]=useState(0);
      const [valn3,setvaln3]=useState(0);
      const [valn4,setvaln4]=useState(0);
      function fun() {
        setvaln1(80);
        setvaln2(60);
        setvaln3(24);
        setvaln4(96);
      }
      

  // r is variable for rank , p: percentile , s:score 

  // using use ref for taking the values of input from modal 
  //using use state to update value 
    const [r,setr]=useState(1200);
    const [p,setp]=useState(12);
    const [s,sets]=useState(12);
    const rank = useRef(1234);
    const percentile =useRef(12);
    const score = useRef(13);
    const submitform = (e) => {
        e.preventDefault();
        console.log(rank.current.value);
        console.log(percentile.current.value);
        console.log(score.current.value);
        setr(rank.current.value);
        setp(percentile.current.value);
        sets(score.current.value);
        
    }
   
 
    setTimeout(fun, 1500);



  return (
  <div className='content'>
      {/* sidebar is leftest part of our window which contain buttons  */}
      <div className='sidebar'>
        <button className='sidebarbtn' ><FiBarChart/> Dashboard</button>
        <button className='sidebarbtn , activebtn' ><IoBookmarksOutline/> Skill  Tests</button>
        <button className='sidebarbtn'><AiOutlineFile/> Internships</button>
    
      </div>


      {/* skilltest div is mid part of our window which UPDATE div , QUICKSTATS div , COMPARISION GRAPH div */}
      {/* style coming from content.css */}
      <div className='skilltest'>
           skill test
            <div  className='outline , update'>
                <div ><img className='htmllogo' src='https://ih1.redbubble.net/image.361593789.5453/flat,128x,075,f-pad,128x128,f8f8f8.u1.jpg'></img></div>
                <div className='writeup'> Hypertext Markup Language<br></br><span className='writeupspan'>Questions:08 | Duration: 15mins | Submitted on 5 June 2021</span></div>
                <div className='updatebtndiv'> <button className='updatebtn' data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button></div>
            </div>
            <div className='quickstats , outline'>
                <div className='quickstatheading'><h4>Quick Statistics</h4></div>
                <div className='quickstatbody'>
                <div  className='icons'><img className='logo' src='http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/trophy.png'></img></div>
                <div className='writeup , rank'> 
                {r}
                <br></br><span className='writeupspan'>YOUR RANK</span></div>
                <div className='icons' ><img className='logo' src='https://m.media-amazon.com/images/I/41D+j5AzwtL._SX522_.jpg'></img></div>
                <div className='writeup , percentile'> 
                {/* {percentile.current.value} */}
                {p}%<br></br><span className='writeupspan'>PERCENTILE</span></div>
                <div  className='icons'><img className='logo' src='https://printoshop.co.za/wp-content/uploads/Tick-Stickers.jpg'></img></div>
                <div className='writeup , score'> 
                {/* {score.current.value}/15 */}
                {s}/15<br></br><span className='writeupspan'>CORRECT ANSWERS</span></div>
                </div>
            </div>


            <div className='graph , outline'> 
            <div className='grapheading'><h4>Comparision Graph</h4></div>
            <div className='grapbody'><span className='darker'>You scored {p}% percentile </span> which is lower than the<br></br>average percentile 72% of all the engineers who this assessment
            </div>
           <Map perc={p}/>
           {/* in this graph div map is coming from Graph folder's map.js file percentile is sent as props to map.js  */}

            



{/* this is MODAL for taking the values for updation */}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update Scores</h5>
        <button type="button" style={{border:"white" , backgroundcolor:"white"}}><img className='htmllogo' src='https://ih1.redbubble.net/image.361593789.5453/flat,128x,075,f-pad,128x128,f8f8f8.u1.jpg'></img></button>
      </div>
      <div class="modal-body">
        
      <form onSubmit={submitform}>
  <div class="mb-3">
    <label htmlFor="rank" ><span className='numbering'>1</span>Update your rank</label>
    <input type="number" className='forminput' id="rank" ref={rank}></input>
    
  </div>
  <div class="mb-3">
    <label htmlFor="percentile" ><span className='numbering'>2</span>Update your Percentile</label>
    <input type="number" className='forminput' id="percentile" ref={percentile}></input>
  </div>
  <div class="mb-3">
    <label htmlFor="score" ><span className='numbering'>3</span>Update your current score</label>
    <input type="number" className='forminput' id="score" ref={score}></input>
  </div>
  
  {/* <button type="submit" class="btn btn-primary" >Submit</button> */}

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" class='cancelbtn'>Cancel</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" class='savebtn'>Save-></button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
      </form>


        </div>
      </div>
    </div>
  </div>
 </div>
</div>


{/* this is rightest part of our window RIGHTOUTBOX div which have two main divs SYLLABUS div , PIEGRAPH DIV */}
      <div className="rightoutbox">
      <div className='syllabus'>

         <div className='sylheading'> <h4>Syllabus wise Analysis</h4></div>
         <div className='box'>
           <div> HTML Tools ,Forms, History </div>
           <div><progress   value={valn1} className='progress1'  max="100"></progress><span className='val' style={{color:"blue" , fontWeitht:"bold"}}>80%</span></div>
         </div>
         <div className='box'>
           <div> Tags & References in HTML</div>
           <div><progress className='progress2' value={valn2} max="100"></progress><span className='val' style={{color:"orange" , fontWeitht:"bold"}}>60%</span></div>
         </div>
         <div className='box'>
           <div> Tables & CSS Basics</div>
           <div><progress className='progress3' value={valn3} max="100"></progress><span className='val' style={{color:"red" , fontWeitht:"bold"}}>24%</span></div>
         </div>
         <div className='box'>
           <div> Tables & CSS Basics</div>
           <div><progress className='progress4' value={valn4} max="100"></progress><span className='val' style={{color:"green" , fontWeitht:"bold"}}>96%</span></div>
         </div>


        
         </div>

         {/* in this graph div PIEGRAPH is coming from Graph folder's piegraph.js file ,score is sent as props to piegraph.js  */}
         <div className='piegraph'>
         <div className='pieheading'><h4>Questions Analysis <span className='marks'>{s}/15</span></h4>
         <div className='discription'><span className='darker'>You scored {s} question correct out of 15</span>.However it still needs some improvements</div>
         <div><Piegraph score={s}/></div>
         </div>
         </div>
      
         
         
        </div>
  </div>
  )
}