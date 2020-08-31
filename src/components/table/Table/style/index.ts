import styled, { keyframes} from 'styled-components';
import sizes from '../../../../assets/theme/sizes';

const slide = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const TableContent = styled.table`
    position: relative;
    margin: auto;
    width: 100%;
    animation: ${slide} 0.5s linear ;
    border: 1px solid #ddd;
    background-color: #fff;

    thead {
      tr {
        border-bottom: 1px solid #ddd;
      }
    }
`;

export { TableContent };
