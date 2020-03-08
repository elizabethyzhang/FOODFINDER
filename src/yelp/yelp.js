
const apiKey = 'tKZBkYD-HSCccDMOI3mssJ8KPrsWJlT7IWh5NoVLKLIKI22Vsn6xH2N5QG0jBp5RhJ31zFIv_J_qTSb7u6w8Fq2RQ5fEmZ9v1fkVRTwKSnUo529qMs0ECW-YhKBUXnYx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then((jsonResponse) => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map((business, index) => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            latitude: business.coordinates.latitude,
            longitude: business.coordinates.longitude,
            index: (index+1)
          }

        })
      }
    })
  }
};

export default Yelp;