import React from 'react';
import './PreviewCollection.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, name}) => (<div key={id}>{name}</div>))
            }
        </div>
    </div>
)

export default PreviewCollection;