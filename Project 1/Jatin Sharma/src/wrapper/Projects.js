import styled from "styled-components";

const Wrapper = styled.div`
padding: 20px;
min-height: 100vh;
.heading{
    border-bottom: 2px solid white;
    text-align: center;
    margin-bottom: 20px;
}
.body{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card{
        /* border: 2px solid blue; */
        padding: 10px;
        margin: 50px 0px;
        min-width: 250px;
        width: 350px;
        background-color: transparent;
        color: white;
        transition: transform 0.2s ease-in-out;
        a.btn.btn-primary{
            width: 20vw;
            background-color: transparent;
            border: 1px solid white;
            &:hover{
                background: linear-gradient(to right, #ee0979, #ff6a00);
            }
        }
        &:hover{
            transform: scale(1.2,1.2);
        }
    }
}
`

export default Wrapper