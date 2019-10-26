import React, { Component } from 'react';
import './Time.css';

/// Time Component
export class Time extends Component {
    constructor(props) {
        super(props);

        console.log("[Time] Constructor"); 
    }

    getHours(date) {
        return ((date.getHours() < 10) ? '0' : '') + date.getHours();
    }

    getMinutes(date) {
        return ((date.getMinutes() < 10) ? '0' : '') + date.getMinutes();
    }

    getSeconds(date) {
        return ((date.getSeconds() < 10) ? '0' : '') + date.getSeconds();
    }

    render() {
        console.log("[Time] Render.");
        let date = new Date(this.props.date);
        let hours = this.getHours(date);
        let minutes = this.getMinutes(date);
        let seconds = this.getSeconds(date);

        return (
            <div className='time'>
                {`${hours}:${minutes}:${seconds}`}
            </div>
        )
    }
}
