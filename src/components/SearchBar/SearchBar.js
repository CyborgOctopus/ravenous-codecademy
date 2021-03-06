import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

const SearchBar = ({ searchYelp }) => {
    const [ term, setTerm ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ sortBy, setSortBy ] = useState('best_match');

    const getSortByClass = sortByOption => {
        if (sortBy === sortByOption) {
            return 'active';
        }
        return '';
    };

    const handleTermChange = e => {
        setTerm(e.target.value);
    };

    const handleLocationChange = e => {
        setLocation(e.target.value);
    };

    const handleSortByChange = sortByOption => {
        setSortBy(sortByOption);
    };

    const handleSearch = e => {
        searchYelp(term, location, sortBy);
        e.preventDefault();
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption];
            return (
                <li className={getSortByClass(sortByOptionValue)}
                    key={sortByOptionValue}
                    onClick={() => handleSortByChange(sortByOptionValue)}>
                    {sortByOption}
                </li>
            );
        });
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange={handleTermChange}/>
                <input placeholder="Where?" onChange={handleLocationChange}/>
            </div>
            <div className="SearchBar-submit" onClick={handleSearch}>
                <a>Let's Go</a>
            </div>
        </div>
    );
};

export { SearchBar };
