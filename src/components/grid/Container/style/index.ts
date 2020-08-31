import styled from 'styled-components';
import sizes from '../../../../assets/theme/sizes';

const ContainerContent = styled.section<{ maxWidth?: number | string; alternative?: boolean }>`
    position: relative;
    display: block;
    max-width: ${sizes.container.maxWidth}px;
    width: 100%;
    margin: 0px auto;
    ${({ maxWidth }): string => (maxWidth ? `max-width: ${maxWidth}px;` : '')}
`;

export { ContainerContent };
