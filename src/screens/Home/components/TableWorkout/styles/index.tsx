import React from 'react';
import styled from 'styled-components'
import Arrow from "../../../../../assets/theme/icons/arrow.svg";
import IconList from "../../../../../assets/theme/icons/empty.svg";

const Block = styled.div`
    position: relative;
    display: block;
    width: 52px;
    float: right;
    height: 16px;
`

const ArrowIcon = styled((props) => <Arrow {...props} />)<any>`
    transform: ${({active}) => active ? 'rotate(90deg)' : 'rotate(-90deg)' }; 
    transition: transform .5s;
    width: 8px;
    height: 8px;
`

const Empty = styled.div`
    position: relative;
    display: block;
    padding: 18px;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const EmptyIcon = styled((): any => <IconList />)`
    width: 52px;
    padding: 8px;
`

export { Block, ArrowIcon, Empty, EmptyIcon }