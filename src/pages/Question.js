import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";
import {QuestionData} from '../assets/data/questiondata'


const Question = () =>{
    const [qNo,setQNo] = useState(0);
    const [total,setTotal] = useState([
        {id:"EI",score:0},
        {id:"SN",score:0},
        {id:"TF",score:0},
        {id:"JP",score:0},
    ]);
    const navigate = useNavigate();

    const handleButton = (no,type) => {
        const newScore = total.map((s) =>
        s.id === type ? {id: s.id,score: s.score + no} : s
        );
        
        setTotal(newScore);
        // 다음문제
        if(QuestionData.length !== qNo + 1){
            setQNo(qNo+1);
        } else{
            // 마지막 문제. 결과도출
            const mbti = newScore.reduce(
                (acc,curr) => 
                    acc + (curr.score >= 2 ? curr.id.substring(0,1):curr.id.substring(1,2)),
                    ""
            );
            // 결과 페이지
            navigate({
                pathname: "/result",
                search: `?${createSearchParams({
                    mbti : mbti,
                })}`
            });
        }
    }
    
    return(
        <Wrapper>
            <ProgressBar striped variant="danger" now={(qNo/QuestionData.length)*100} style={{marginTop: '20px'}}/>
            <Title>{QuestionData[qNo].title}</Title>
            <ButtonGroup>
                <Button onClick = {()=>handleButton(1,QuestionData[qNo].type)} style={{width:'40%',minHeight: "200px", fontSize:"15pt"}}>{QuestionData[qNo].answera}</Button>
                <Button  onClick = {()=>handleButton(0,QuestionData[qNo].type)} style={{width:'40%',minHeight: "200px", fontSize:"15pt",marginLeft:"20px"}}>{QuestionData[qNo].answerb}</Button>
            </ButtonGroup>
        </Wrapper>
    );
}

export default Question;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const Title =  styled.div`
    font-size: 30pt;
    text-align: center;
    font-family:"DNFForgedBlade-Medium";
`

const ButtonGroup = styled.div`
    display: flex;
    flex-dirction: row;
    align-items: center;
    justify-content: center;
    font-family:"DNFForgedBlade-Medium";
`