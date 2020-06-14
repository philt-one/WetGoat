import React from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MadeWithLove = ({color, className}) => {

    return (
        <div className={className} >
            Made with <FontAwesomeIcon icon={faHeart} style={{ color: color }} /> by Philippe Talarico
        </div>
    )
}

export default MadeWithLove;