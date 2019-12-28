import React from 'react';
import './PreviewCollection.styles.scss';
import CollectionItem from '../collection-item/CollectionItem.component';

const PreviewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items
                .filter((item, idx) => idx < 4)
                .map((item) => (<CollectionItem key={item.id} id={item.id} item={item} />))
            }
        </div>
    </div>
)

export default PreviewCollection;