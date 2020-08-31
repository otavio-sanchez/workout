import styled, {keyframes} from 'styled-components';
import sizes from '../../../../assets/theme/sizes';

const slide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const RowContent = styled.tr`
    position: relative;
    margin: auto;

    td:last-child{
        text-align: right !important;
    }
    animation: ${slide} 2s linear;
    border-bottom: 1px solid #ddd;
    transition: all .5s;
    &:hover{
        background-color: #ddd;
    }
`;

export { RowContent };
