import React from 'react';
import './BusinessList.css';
import { Business } from '../Business/Business.js';

const BusinessList = ({ businesses }) => {
    return (
        <div className="BusinessList">
            {businesses.map(business => <Business key={business.id} business={business} />)}
        </div>
    );
};

export { BusinessList };
