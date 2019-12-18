import React from 'react';
import { withRouter } from 'react-router-dom';

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`menu-item ${(size ? size : '')}`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

// to have access to Router history in nested components, 
// we nedd to use withRouter as a Decorator pattern of the component
// and then avoid prop drilling
export default withRouter(MenuItem)