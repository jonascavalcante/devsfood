import React from 'react';
import { LinkArea, LinkIcon } from './styled';

const MenuItem = ({ icon, link }) => {

    return (
        <LinkArea href={link}>
            <LinkIcon src={icon} />
        </LinkArea>        
    );
}

export default MenuItem;