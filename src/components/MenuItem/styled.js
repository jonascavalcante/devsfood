import styled from 'styled-components';

const LinkArea = styled.a`
    width: 60px;
    height: 60px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    background-color: ${props => props.active ? '#0B4E0B' : 'transparent'};
`;

const LinkIcon = styled.img`
    width: 34px;
    height: auto;
`;

export { LinkArea, LinkIcon };