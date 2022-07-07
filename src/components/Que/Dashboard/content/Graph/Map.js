/* Map.js */
import React from 'react';

import CanvasJSReact from './canvasjs.react';
var Component = React.Component;
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Map extends Component {	
    render(props) {
      const options = {
        theme: "dark1", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,	
        title: {
          text: "."
        },
        axisY : {
            title: "% questions corrected"
        },
        axisX : {
            title: "number of step"
        },
        data: [
        //   {				
        //           type: "spline",
        //         //   xValueFormatString: "##.00mn",
        //           dataPoints: [
        //               { x: 0  , y:10  },
        //               { x: 10 , y:20  },
        //               { x: 20 , y:30  },
        //               {  x: 30 , y:40  },
        //               {  x: 40 , y:30  },
        //               {  x: 50 , y:20  },
        //               { x: 60 , y:25 },
        //               { x: 70 , y:15 },
        //               { x:80 , y:10 },
        //               {  x: 90  , y:15},
        //               {  x: 100 , y:10  }
        //           ]
        //  },
         {
            type: "column",
            toolTipContent: "{y}% Percentage questions are corrected in this step",
            // xValueFormatString: "##.00mn",
            dataPoints: [
                { x: 1 ,y:70  },
                { x: 2 ,y:40 },
                { x: 3 ,y:60 },
                {x: 4 ,y:30 },
                {x: 5 ,y:20 }
                
            ]
         }]
     }
     
          
     return (
        <div>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </div>
      );
    }
  }