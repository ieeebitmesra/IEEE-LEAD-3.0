import styled from "styled-components";

const Wrapper = styled.div`
.intro{
height: 100vh;
background-image: linear-gradient(to left, #12c2e9ed, #c471ed, #f64f59);
display: flex;
align-items: center;
flex-wrap: wrap;
padding: 30px;
justify-content: space-around;
    .intro-content{
            font-size: 2.6rem;
            width: 500px;
            span{
                font-size: 3rem;
                color: greenyellow;
  
            }
    }
    .my-img{
        width: 300px;
        /* height: ; */
        img{
            border-radius: 50%;
            height: 100%;
            width: 100%;
        }
    }
}
`


export default Wrapper