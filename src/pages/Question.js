import React from "react";
import { Button, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import {QuestionData} from '../assets/data/questiondata'

const Question = () =>{
    return(
        <Wrapper>
            <ProgressBar striped variant="danger" now={80} style={{marginTop: '20px'}}/>
            <Title>{QuestionData[0].title}</Title>
            <ButtonGroup>
                <Button style={{width:'40%',minHeight: "200px", fontSize:"15pt"}}>{QuestionData[0].answera}</Button>
                <Button style={{width:'40%',minHeight: "200px", fontSize:"15pt",marginLeft:"20px"}}>{QuestionData[0].answerb}</Button>
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