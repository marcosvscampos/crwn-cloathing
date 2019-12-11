import React, { Component } from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/MenuItem.component';
import { DIRECTORY_DATA } from '../../static-data/data'

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: DIRECTORY_DATA
        }
    }

    render() {
        return(<div className="directory-menu">
            {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    //when attributes and values have the same names,
                    //we can use destructure to set these values
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>)
    }
}

export default Directory