const apiKey = 'r3MfyveiYIqPsoEVM2a91_BhXDEuyA-wiNKgNsJnxanDoVO9HuMbQHgiPZ3HTu0BX3L2cKFqdravvgfTCQnbW7fILaiuaRQDcwbN-r6'
    + 'D6iPWDWDWLwhDSx2QUmdbYXYx';

const Yelp = {
    search: (term, location, sortBy) => {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}
    &location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json()).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories.title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export { Yelp };
