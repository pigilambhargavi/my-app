import React from "react";
import "./style.css";
import styled,{css} from 'styled-components';

export default function App() {
  const Li = styled.li`
    margin:10px;
    padding:10px;
    border:1px solid;
    ${props=>
      props.cold && css`
        background-color:blue
      `
      ||
      props.hot && css`
        background-color:red
      `
      ||
      props.chill && css`
        background-color:green
      `
    }
  `
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Li cold>Praveen</Li>
      <Li hot>Rakesh</Li>
      <Li cold>Pawan</Li>
      <Li chill>Surya</Li>
      <Li cold>Vijay</Li>
    </div>
  );
}
