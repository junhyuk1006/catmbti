import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";

const Result = () =>{
    const navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const mbti = SearchParams.get("mbti");
    // 결과 객체
    const [resultData,setResultData] = useState({});

    useEffect(()=>{
        const result = ResultData.find((s) => s.best === mbti);
        setResultData(result);
    },[mbti]);

    return (
        <Container>
            <Header> 
                <Wrapper>
                    <Header>예비집사 판별기</Header>
                    <Contents>
                        <Title>결과 보기</Title>
                        <LogoImage>
                            <img src={resultData.image} className="rounded-circle" width={350} height={350}></img>
                        </LogoImage>
                        <Desc>찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>
                        <Button style={{fontFamily:"DNFForgedBlade-Medium"}} onClick={()=>navigate("/")}>테스트 다시하기</Button>
                    </Contents>
                </Wrapper>
            </Header>
        </Container>
       );
};

export default Result;

const Container = styled.div`
    display: flex;
    height: 120vh;
    width: 100%;
    background: #fffacd;
    flex-direction : column;
`

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const Header = styled.div`
    color : white;
    background: #ffa07a;
    font-size: 40pt;
    display : flex;
    justify-content: center;
    align-items: center;
    font-family: "DNFForgedBlade-Medium";
`
const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`

const Title = styled.div`
    font-size:30pt;
    margin-top : 40px;
    font-family: "DNFForgedBlade-Medium";
`

const LogoImage = styled.div`
    margin-top : 10px;
`

const Desc = styled.div`
    font-size: 20pt;
    margin-top: 20px;
    font-family: "DNFForgedBlade-Medium";
`