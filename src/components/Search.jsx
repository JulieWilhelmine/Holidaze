// Search Component

import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleHotelSearchTerm = this.handleHotelSearchTerm.bind(this);
    }
    
    handleHotelSearchTerm(){
        const app = this;
        let phrase = app.refs.searchTerm.value;
        app.props.onSearchTerm(phrase);
    }
    
        render() {
            const app = this;
    
            return (
                <div className="[ search ] [ search--accommodation ]">
                    <input className="[ search__input ]" type="text" 
                           ref="searchTerm" 
                           onChange={app.handleHotelSearchTerm} 
                           class="form-control" 
                           placeholder="What are you looking for?" 
                    />
                </div>
            );
        }
    }
    