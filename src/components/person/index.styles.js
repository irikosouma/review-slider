import styled from 'styled-components'
const Wrap = styled.div`

    .wrap-person {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
            .avatar {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                object-fit: cover;
                border: 4px solid #BCCCDC;
                margin-bottom: 20px;
            }
            .name {
                
                color: #BA5D2C;
                font-size: 16px;
                line-height: 16px;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 5px;
            }
            .pos {
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #324d67;
                margin-bottom : 15px;
            }
            .description {
                color: #617d98;
                font-size: 16px;
                font-weight: 400;
                line-height: 32px;
                text-align: center;
                margin: 32px 38px 0 38px;
            }
            .icon {
                fill: #BA5D2C;
                width: 50px;
                height: 75px;
            }
        }
        
`;
export {Wrap}