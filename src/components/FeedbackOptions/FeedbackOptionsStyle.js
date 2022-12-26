import styled from "styled-components";


export const Button = styled.button`
  background: #fff;
  backface-visibility: hidden;
  border-radius: .375rem;
  border-style: solid;
  border-width: .125rem;
  box-sizing: border-box;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,Helvetica,sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.3;
  padding: 10px 15px;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-top: 30px;
&:not(:last-child){
margin-right: 20px;
}
&:not(:disabled):hover {
  transform: scale(1.05);
}

&:not(:disabled):hover:active {
  transform: scale(1.05) translateY(.125rem);
}

&:focus {
  outline: 0 solid transparent;
}

&:focus:before {
  content: "";
  left: calc(-1*.375rem);
  pointer-events: none;
  position: absolute;
  top: calc(-1*.375rem);
  transition: border-radius;
  user-select: none;
}

&:focus:not(:focus-visible) {
  outline: 0 solid transparent;
}

&:focus:not(:focus-visible):before {
  border-width: 0;
}

&:not(:disabled):active {
  transform: translateY(.125rem);
}

&:hover {
  background-color: #fff;
}

&:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}
svg {
    margin-right: 4px;
    width: 25px;
    height: 25px;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1), 250ms;
  }
`