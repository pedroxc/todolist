import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  label {
    margin-right: 10px;
  }
  input {
    background-color: #ffffff;
    border: none;
    border-bottom: 1px solid black;
    color: black;
    font-size: 16px;
  }
  div {
    &.select {
      width: 250px;
    }
  }
`;

export const SelectWarpper = styled.div`
  width: 250px;
  input {
    width: 250px;
  }
`;
