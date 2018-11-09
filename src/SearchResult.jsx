import React from 'react';
import './App.css';

export default class SearchResults extends React.Component {

    tableBody() {
        return (
                <tbody>
                        {this.props.SearchResults.sort(function(a,b){
                            return a.price - b.price;
                        }).map((SearchResult) =>
                            <tr key={SearchResult.id}>
                                <td><a href={SearchResult.site + SearchResult.link}>{SearchResult.number}</a></td>
                                <td>{SearchResult.name}</td>
                                <td>{SearchResult.brand}</td>
                                <td>{SearchResult.price}</td>
                                <td>{SearchResult.quantity}</td>
                                <td>{SearchResult.store}</td>
                            </tr>
                        )}
                </tbody>
        );
    }

    render() {
        return (
            <div className="margin">
            <table id="customers">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Price(MDL)</th>
                            <th>Quantity</th>
                            <th>Store</th>
                        </tr>
                    </thead>
                    {this.tableBody()}
            </table>
            </div>
        );
    }
}