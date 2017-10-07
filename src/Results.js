import React from 'react';
import './Results.css';


export default function Results(props) {

    return (
        <div className='results_container'>
            <div>
                <h2>My List of Countries</h2>
            </div>
            <section className='results_flex'>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th className='table_header'>Destination</th>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>response.data[0].name</td>
                            </tr>
                            <tr>
                                <td>Region</td>
                                <td>response.data[0].region</td>
                            </tr>
                            <tr>
                                <td>Sub-region</td>
                                <td>response.data[0].subregion</td>
                            </tr>
                            <tr>
                                <td>Capital City</td>
                                <td>response.data[0].capital</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>response.data[0].languages</td>
                            </tr>
                            <tr>
                                <td>Currency</td>
                                <td>response.data[0].currencies</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );

}