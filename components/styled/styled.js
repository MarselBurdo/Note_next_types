import styled from "styled-components";

export const StyledButton = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap"rel="stylesheet");
  box-shadow: inset 0px 1px 0px 0px #91e650;
  background: linear-gradient(to bottom, #c9e4de 5%, #aed9e0 100%);
  background-color: ${({ primary }) => (primary ? "#9e2a2b" : "#ffd6ba")};
  border-radius: 6px;
  border: 1px solid #aed9e0;
  display: inline-block;
  cursor: pointer;
  color: ${({ primary }) => (primary ? "#9e2a2b" : "#ffd6ba")};
  font-family: ${({ primary }) => (primary ? "Russo One" : "Arial")};
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: "none";
  text-shadow: 0px 1px 0px #ded17c;
  &:hover {
    background: linear-gradient(to bottom, #f2ab1e 5%, #aed9e3 100%);
    background-color: ${({ primary }) => (primary ? "#9e2a2b" : "#ffd6ba")};
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
export const Navbar = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");
  display: flex;
  justify-content: center;

  align-items: center;
  text-align: center;
  background: #1a1e23;

  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: start;
    list-style-type: none;

    li {
      padding: 0 20px 0;

      a {
        --fill-color: #198ce6;
        position: relative;
        display: block;
        padding: 4px 0;
        font: 700 3rem Raleway, sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        -webkit-text-stroke: 2px var(--fill-color);
        background: linear-gradient(var(--fill-color) 0 100%) left / 0 no-repeat;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        transition: 0.5s linear;

        &:hover {
          background-size: 100%;
        }
      }
    }
  }
`;
