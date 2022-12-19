import styled from "styled-components";

const Wrapper = styled.div`
padding: 40px;
min-height: 100vh;
.heading{
    border-bottom: 2px solid white;
    text-align: center;
    margin-bottom: 20px;
}
.body{
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    .row{
        width: 80%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 80px 0px;
        img{
            width: 120px;
            padding: 0;
            background-color: transparent;
            /* border-radius: 50%; */
            object-fit: contain;
            margin: 10px;
            transition: transform 0.2s ease-in-out;
            &:hover{
                transform: scale(2,2);
            }
        }
    }
}

@media only screen and (max-width: 500px){
    .body{
        .row{
            img{
                width: 80px;
            }
        }
    }
}
`

export default Wrapper