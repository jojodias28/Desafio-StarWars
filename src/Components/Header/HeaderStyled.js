import styled from "styled-components"

export const MainHeader = styled.div`
background-color: #1F2738 ;
height: 10vh;
color: #EEEEEE;
display: flex;
justify-content: space-between;
align-items: center;
padding-left:20px;
padding-right: 20px;
`

export const Navigation = styled.ul`
list-style: none;
display: flex;
justify-content: space-between;
flex-direction: row;
width: 30vw;
font-size: 20px;
height: 100%;

`

export const ListHeader = styled.li`
border: 1px solid #EEEEEE;
border-top: none;
border-bottom: none;
border-right: none;
height:10vh;
display: flex;
justify-content: center;
align-items: center;
padding-left: 45px;

:hover{
color: #F56F36;

}
`