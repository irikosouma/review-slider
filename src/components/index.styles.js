import styled from 'styled-components'
const WrapMain = styled.div`
    max-width: 1170px;
    margin: 5rem auto;
    width: 95vw;

    
    /* display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center; */
    /* position: relative; */
    .title {
        color: #324d67;
        font-size: 40px;
        line-height: 40px;
        font-weight: 500;
        text-align: center;
        /* margin-bottom: 100px; */
        span {
            color: #BA5D2C;
        }
    }
    .slider {

            /* transform:  */
            /* animation: slidein 1s cubic-bezier(0.5, 0.2, 0.3, 1.0) 3s  forwards; */

    }
    
    .wrap-slider {
        margin: 4rem auto 0;
        width: 80vw;
        height: 450px;
        max-width: 800px;
        text-align: center;
        position: relative;
        display: flex;
        overflow: hidden;
        .slider {
            top: 0;
            left: 0;
            position: absolute;
            opacity: 0;
            max-width: 800px;
            overflow: hidden;
            /* opacity: 0; */
            width: 100%;
            height: 100%;
            transition: all 0.3s ease-out;

        }
        & .activeSlide {
            opacity: 1;
            transform: translateX(0)
        }
        & .lastSlide {
            
            transform: translateX(-100%)
        }
        & .nextSlide {
            transform: translateX(100%)
        }
        
        
        .btn {
        position: absolute;
        width: 30px;
        height: 30px;
        top: 45%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #617d98;
        border-radius: 3px;
        outline: none;
        border: none;
        color: none;
        :hover {
            background-color: #BA5D2C;
        }
    }
    .left {
        left: 0;
        .icon-left {
            width: 18px;
            height: 18px;
        }
    }
    .right {
        right: 0;
        .icon-right {
            width: 18px;
            height: 18px;
        }
    }
    }
    /* @keyframes slidein {

        from { transform: translateX(100%); opacity: 0;  } to { opacity: 1; transform: translateX(0) }
    } */



`;
export {WrapMain}