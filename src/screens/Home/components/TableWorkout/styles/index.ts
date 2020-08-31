import styled from 'styled-components'
import Arrow from "../../../../../assets/theme/icons/arrow.svg";

const Block = styled.div`
    position: relative;
    display: block;
    width: 52px;
    float: right;
    height: 14px;
`

const ArrowIcon = styled(Arrow)<any>`
    transform: ${({active}) => active ? 'rotate(90deg)' : 'rotate(-90deg)' }; 
    transition: transform .5s;
    width: 12px;
    height: 12px;
`

export { Block, ArrowIcon }