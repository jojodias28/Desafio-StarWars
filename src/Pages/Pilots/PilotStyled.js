import styled from 'styled-components'

export const BodyContainer = styled.body`
text-align: center;
background-color:#EEEEEE;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const MainCard = styled.div`
display: grid;
grid-template-rows: 400px 1fr;
gap: 40px;
grid-template-columns: repeat(2, 1fr);
justify-items: center;
align-items: center;
background-color:#EEEEEE;
margin-bottom: 30px;
overflow: hidden;

`

export const Text = styled.h1`
background-color: #EEEEEE;
display: flex;
justify-content: center;
align-items: center;
font-size: 45px;
margin: 0px;
margin-top: 40px;
`


export const Image = styled.img`
width: 60%;
height: 60%;
margin-top: 30px;

`

export const Card = styled.div`
  width: 28vw;
  height: 50vh;
  border-radius: 5% 5% 0% 0%;
  border: 2px solid #1F2738  ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  

  
:hover {
  border: 2px solid #F56F36;
}

`

export const Paragraph = styled.div`
background-color: #1F2738;
color: #EEEEEE; 
overflow: hidden;
height: 31%;
display: flex;
justify-content: center;
align-items: center;
font-size: 25px;
width: 100%;

:hover {
  background-color: #F56F36;
  font-size: 30px;

}
`
export const Pages = styled.div`
height: 60px;

`