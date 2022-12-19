import styled from "styled-components";

const Wrapper = styled.div`
    padding: 30px;
    height: 90vh;
    .heading{
        text-align: center;
        border-bottom: 2px solid white;
        margin-bottom: 20px;
    }
    .body{
        /* border: 2px solid red; */
        height: 100%;
padding: 20px;
display: flex;
align-items: center;
justify-content: space-around;
.icon{
    width: 100px;
    height: 100px;
    /* border: 2px solid blue; */
    i{
        font-size: 100px;
        color: white;
        transition: all 0.1s ease-in-out;
    }
    i.linked{
        
        &:hover{
            background: linear-gradient(
            to right, #0077b5, #0077b5);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        }
    }
    i.insta{
        &:hover{
            background: linear-gradient(
            to right bottom, #f32170, #ff6b08,
             #cf23cf, #eedd44);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        }
    }
    i.github{
        &:hover{
            color: #252525 !important;
        }
    }
}
}
`

export default Wrapper