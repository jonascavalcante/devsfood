import React from 'react';
import { useHistory } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

const MenuItem = ({ icon, link }) => {

    const history = useHistory();

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push( link );
    }

    return (
        <LinkArea href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} />
        </LinkArea>        
    );
}

export default MenuItem;