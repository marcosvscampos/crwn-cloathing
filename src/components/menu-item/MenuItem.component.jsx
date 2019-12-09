import React from 'react';

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className={`menu-item ${(size ? size : '')}`}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

export default MenuItem