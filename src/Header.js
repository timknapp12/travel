import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {


    render(props) {
        return (
            <header>
                <div className='main_header'>
                    <h1>Travel Bucketlist</h1>
                    <div className='search'>
                    <input placeholder='Add Countries to "My List"'  onChange={ (e) => this.props.handleChange(e.target.value) }/>
                    <a href="#results_section" ><button className='submit' onClick={ () => this.props.findResults() }>Submit</button></a>
                    </div>
                </div>
            </header>


        );
    }
}