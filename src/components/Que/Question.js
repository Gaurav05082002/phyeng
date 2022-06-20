import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { questionData } from './../old code/Questions/Questiondata.js';
import ReactPlayer from "react-player";
import Steps from './Steps';
import './question.css'
import { Row, Col, Button, Form, Radio, Alert, message } from 'antd';
import constraint from './constraint.mp3'
import { useParams } from 'react-router';
import { FcApproval , FcDisapprove} from "react-icons/fc";
// import { Card } from 'antd';
import { Link } from "react-router-dom";
// import Audiogaurav from './Audiogaurav.js';

import {
    Card,
    CardBody,
    CardText,
    CardTitle,

} from 'reactstrap';
import TestThree from './animated.js';
var Latex = require('react-latex');



const Questions = (props) => {
    const [form] = Form.useForm();
    const { quesId } = useParams();
    const quesNo = parseInt(quesId)-1;
    const [stepSelected, setStepSelected] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const chapterNumber = 1;
    const questionNumber = quesId;
    const chapterDetails = questionData.filter(chapter => chapter.chapterNumber == chapterNumber)[parseInt(quesId)-1];
    const questionDetails = chapterDetails.questions.filter(question => question.questionNumber == questionNumber)[0];
    const [stepCount, setStepCount] = useState(0);
    const [currentQue, setcurrentQue] = useState(0);
    const [step, setSteps] = useState(questionData[parseInt(quesId)-1].steps);
    const stepDetails = questionDetails.steps.filter(step => step.stepNumber === stepSelected)[0];
    const [showError, setShowError] = useState(false)
    const [showPrint, setShowPrint] = useState(false);
    const [start, setStart] = useState(false);
    const [answerClicked, setAnswerClicked] = useState(0)
    const [iscorrect, setIscorrect] = useState(false)
    //this right wrong is for icon coming on choosing option 
    const [right, setright] = useState("heart");
    const [wrong , setwrong] = useState("heart");
    const [backstl , setbackstl] = useState("bac");
     
    // var colors = ["red","blue","green"];
    // localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors
    // var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back
    // console.log("printing local storage");
    // console.log(storedColors);

    
    useEffect(() => {
        // console.log(stepDetails)
        //  debugger
       
        console.log(quesId)

    }, [])

    const changeStep = (data) => {
        //debugger;
        setStepSelected(data.stepNumber);

    }

    // codes for spinning right wrong icons 
    function correct() {setwrong("heart"); setright("hearta"); 
             setTimeout(() => { setright("heartb")
               
             }, 500);
  
  }
    function incorrect() {setright("heart");  setwrong("hearta"); 
    setTimeout(() => { setwrong("heartb")
      
    }, 500);}


   var corans;
    const checkAnswer = () => {
        //  debugger
        let ansGiven = form.getFieldValue('answer');
        let correctAnsIndex = stepDetails?.stepQuestions[currentQue].answer
        let correctAns = stepDetails?.stepQuestions[currentQue].options[correctAnsIndex]
        corans = correctAns;
        if (ansGiven === correctAns) {
            //setcurrentQue(currentQue + 1)

            // message.success('Correct');
            correct();
            setShowPrint(true);
        } else {
            // message.error('Opps! Try Again');
            incorrect();
        }
        setIscorrect(ansGiven === correctAns);
        setAnswerClicked(answerClicked + 1)
    }
    const changeQuetion = () => {
        form.setFieldsValue({ answer: '' });
        const noOfSteps = stepDetails.stepQuestions.length;
        setShowPrint(false)
        if (currentQue + 1 === noOfSteps) {
            //change the step
            let newStep = [...step];
            var c = stepCount;
            setStepCount(stepCount + 1);
            newStep[c].stepStatus = 'inactive';
            newStep[c + 1].stepStatus = 'active';
            setSteps(newStep);
            setcurrentQue(0)
            setStepSelected(stepSelected + 1)
        } else {
            setcurrentQue(currentQue + 1)
        }
        setAnswerClicked(0)
        setIscorrect(false)
        setright("heart")
        setwrong("heart")

    }
    // this set show is now present in check answer
    const onChangeAns = () => {
        setShowPrint(true)
    }
    const answerChange = (e) => {
        e.preventDefault();
        const val = parseInt(e.target.value);
        if (e.target.type == "radio")
            setSelectedAnswer(val);
        else {
            // check if that number exists in selected answer
            const exists = selectedAnswer.includes(val);
            let d = [];
            //If exists then filter
            if (exists) {
                d = selectedAnswer.filter(data => data != val);

            }//if not present then append
            else {
                d = selectedAnswer.concat(val);
            }
            setSelectedAnswer(d);
        }
        e.preventDefault();
    }
    const handleStart = () => {
        setStart(true);
        setbackstl("backstylehide")
    }

    return (
        <Container >
            <Form form={form} onFinish={checkAnswer} >
                <Row>
                    <Col span={6}>
                        <Steps questionDetails={questionDetails} stepDetails={stepDetails} steps={step} changeStep={changeStep} />
                    </Col>
                    <Col span={1}>
                    </Col>
                    <Col span={16}>
                        <Row className="answers">
                            <Col span={24}>
                            <Link to="/chapters" className={backstl}   ><Button className={backstl} type="primary" > Back </Button></Link>
                                <div className="question">
                                
                                    <div>Question 1</div>
                                    <div>
                                        {questionData[quesNo].questions[0].questionDesc}
                                    </div>
                                </div>
                                <Button type="primary" onClick={handleStart}> Start </Button>

                            </Col>
                            {start &&
                                <>
                                    <Col>
                                        <Card className="flex-row" >
                                            <CardBody>
                                                <CardTitle>Video </CardTitle>
                                                <div className="three">
                                                    <TestThree
                                                        threejsstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep}
                                                        threejssubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubstep}
                                                        threejssubsubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubsubstep}
                                                        answerClicked={answerClicked}
                                                        iscorrect={iscorrect}
                                                        qno = {quesNo}
                                                        
                                                        stepans={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].options[stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].answer]}
                                                    />
                                                    {/* <Audiogaurav 
                                                        threejsstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep}
                                                        threejssubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubstep}
                                                        // threejssubsubstep={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejssubsubstep}
                                                        // answerClicked={answerClicked}
                                                        // iscorrect={iscorrect}
                                                        // qno = {quesNo}
                                                        
                                                        // stepans={stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].options[stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].answer]}
                                                    /> */}

                                                    {/* <iframe src='./sample.mp4'
                                                frameborder='0'
                                                allow='autoplay; encrypted-media'
                                                allowfullscreen
                                                title='video'
                                            /> */}
                                                    {/* <source src="./sample.mp4" type="video/mp4" /> */}
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col span={10} className="question">

                                        <Col span={24} className="que">
                                            <Card>
                                                <CardBody>
                                                    <h3 className='stepheading'>{stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].threejsstep}</h3>
                                                    <CardTitle> {currentQue + 1} {stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails.stepQuestions[currentQue].question}</CardTitle>
                                                    <CardText>
                                                        <Form.Item
                                                            name="answer"
                                                            rules={[{ required: true, message: 'Please select and option.' }]}
                                                        >
                                                         {/* onChange={onChangeAns} is now in check answer it self */}
                                                            <Radio.Group  onChange={checkAnswer} >
                                                                {stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].options.map((data, idx) => (
                                                                    <Radio value={data} name={data}  className="myRadio"
                                                                    >{data}</Radio>
                                                                ))}
                                                            </Radio.Group>
                                                        </Form.Item>
                                                        {showError &&
                                                            <Alert
                                                                message="oops! Try Again" type="error" showIcon
                                                            />}


                                                        <Button type="primary" htmlType="submit">Answer Status</Button>
                                                        
                                                        <span className="tr1"><FcApproval className={right}/></span>
                                                        <span className="tr2"><FcDisapprove  className={wrong}/> </span>

                                                    </CardText>
                                                </CardBody>

                                            </Card>

                                        </Col>
                                        <Col span={24} className="eqa">
                                            <h4>Observations</h4>
                                            {/* {stepDetails &&  stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show} */}
                                            {/* {stepDetails &&  stepDetails.stepQuestions[currentQue] &&
                                         stepDetails?.stepQuestions[currentQue].show.map((item,index)=>{
                                            <h6>"hello"</h6>
                                        })} */}

                                            {showPrint && stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].show.map((data, idx) => (
                                                
                                                <div className='print' style={{fontWeight:"bold"}}
                                                >{data}</div>
                                            ))}
                                            
                                              {/* {
                                                
                                                 storedColors = JSON.parse(localStorage.getItem("my_colors")),
                                                storedColors.map((item ,idx) => (<div className='print' style={{fontWeight:"bold"}}
                                                >{item}</div>))
                                             }  */}
                                              

                                           
                                            {/* <Latex>
                                        {showPrint &&  stepDetails && stepDetails.stepQuestions[currentQue] && stepDetails?.stepQuestions[currentQue].equation}
                                    </Latex> */}

                                        </Col>
                                        <Button type="primary" className='nextQue' onClick={changeQuetion}>Next Step</Button>

                                    </Col>

                                </>

                            }
                        </Row>
                    </Col>
                </Row>

            </Form>

        </Container >
    )
}

export default Questions
