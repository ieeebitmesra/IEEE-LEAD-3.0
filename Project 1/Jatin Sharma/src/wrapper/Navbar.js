import styled from "styled-components";

const Wrapper = styled.div`
/* border: 2px solid red; */
position: fixed;
width: 100%;
z-index: 100;
background: linear-gradient(to left, #12c2e9, #c471ed, #F27121);
h2{
  padding: 0px 10px;
}
.white{
  color: white;
}
.switch-mode{
    /* border: 2px solid black; */
.checkbox {
  opacity: 0;
  position: absolute;
}
li{
  border: 1px solid white;
}
.label {
  width: 50px;
  height: 26px;
  background: linear-gradient(to right, #232526,#414345);
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1);
}

.ball {
  width: 20px;
  height: 20px;
  background-color: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

/*  target the elemenent after the label*/
.checkbox:checked + .label .ball{
  transform: translateX(24px);
}

.fa-moon {
  color: pink;
}

.fa-sun {
  color: yellow;
}
}
`

export default Wrapper