import React from 'react'
import '../yelp/businesslist.css'
import Business from '../yelp/business.js'

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business => {
          return <Business business={business} key={business.id} />;
        }))}
      </div>
    )
  }
}

export default BusinessList