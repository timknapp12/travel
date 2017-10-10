import React from 'react';
import './Results.css';


export default function Results(props) {
    console.log(props);
    return (
        // <div className='results_container'>
        //     <div>
        //     <a id="results_section"><h2>My List of Countries</h2></a>
        //     </div>
        //     <section className='results_flex'>
        //         <div>
                    <table>
                        <tbody>
                            <tr>
                                <th></th>
                                <th className='table_header'>Destination</th>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td className='props_font'>{props.name}</td>
                            </tr>
                            <tr>
                                <td>Region</td>
                                <td className='props_font'>{props.region}</td>
                            </tr>
                            <tr>
                                <td>Sub-region</td>
                                <td className='props_font'>{props.subregion}</td>
                            </tr>
                            <tr>
                                <td>Capital City</td>
                                <td className='props_font'>{props.capital}</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td className='props_font'>{props.language}</td>
                            </tr>
                            <tr>
                                <td>Currency</td>
                                <td className='props_font'>{props.currency}</td>
                            </tr>
                        </tbody>
                    </table>
        //         </div>
        //     </section>
        //     <section>

        //     </section>
        // </div>
    );

}