(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){e.exports=n(40)},19:function(e,t,n){},20:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(7),i=n.n(r),o=(n(19),n(1)),c=n(2),l=n(4),u=n(3),h=n(6),p=n(5),m=(n(20),n(10)),d={position:"absolute",width:"67%",height:"100%"},g=function(e){function t(e){var n;Object(o.a)(this,t);var a=(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).props.initialCenter,s=a.lat,r=a.lng;return n.state={currentLocation:{lat:s,lng:r}},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap()}},{key:"recenterMap",value:function(){var e=this.map,t=this.state.currentLocation,n=this.props.google.maps;if(e){var a=new n.LatLng(t.lat,t.lng);e.panTo(a)}}},{key:"componentDidMount",value:function(){var e=this;this.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var n=t.coords;e.setState({currentLocation:{lat:n.latitude,lng:n.longitude}})})),this.loadMap()}},{key:"loadMap",value:function(){if(this.props&&this.props.google){var e=this.props.google.maps,t=this.refs.map,n=i.a.findDOMNode(t),a=this.props.zoom,s=this.state.currentLocation,r=s.lat,o=s.lng,c=new e.LatLng(r,o),l=Object.assign({},{center:c,zoom:a});this.map=new e.Map(n,l)}}},{key:"renderChildren",value:function(){var e=this,t=this.props.children;if(t)return s.a.Children.map(t,(function(t){if(t)return s.a.cloneElement(t,{map:e.map,google:e.props.google,mapCenter:e.state.currentLocation})}))}},{key:"render",value:function(){var e=Object.assign({},d);return s.a.createElement("div",null,s.a.createElement("div",{style:e,ref:"map"},"Loading map..."),this.renderChildren())}}]),t}(s.a.Component),b=g;g.defaultProps={zoom:14,initialCenter:{lat:-1.2884,lng:36.8233},centerAroundCurrentLocation:!1,visible:!0};n(36);var f=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},n.onMarkerClick=function(e,t,a){return n.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},n.onClose=function(e){n.state.showingInfoWindow&&n.setState({showingInfoWindow:!1,activeMarker:null})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"map"},s.a.createElement(b,{centerAroundCurrentLocation:!0,google:this.props.google},this.props.businesses.map((function(t,n){return s.a.createElement(m.Marker,{key:n,id:n,position:{lat:t.latitude,lng:t.longitude,index:n},label:(n+1).toString(),onClick:e.onMarkerClick,name:t.name})})),s.a.createElement(m.Marker,{label:"current location"}),s.a.createElement(m.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},s.a.createElement("div",null,s.a.createElement("h4",null,this.state.selectedPlace.name)))))}}]),t}(a.Component),v=Object(m.GoogleApiWrapper)({apiKey:"AIzaSyD0OFCmyfBx48a1aTe2ki0g-EVxyIJpZOQ"})(f),y=(n(37),n(38),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:this.props.business.imageSrc,alt:this.props.business.name})),s.a.createElement("h2",null,this.props.business.index,s.a.createElement("br",null),this.props.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},"Category: ",this.props.business.category,s.a.createElement("p",null,this.props.business.address),s.a.createElement("p",null,this.props.business.city,", ",this.props.business.state," ",this.props.business.zipCode),s.a.createElement("p",null,"rating: ",this.props.business.rating),s.a.createElement("p",null,"number of reviews: ",this.props.business.reviewCount))))}}]),t}(s.a.Component)),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return s.a.createElement(y,{business:e,key:e.id})})))}}]),t}(s.a.Component),E=(n(39),n(13)),O=n.n(E),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={term:"",location:"durham",sortBy:"best_match"},n.sortByOptions={"Best Match":"best_match","Highest Rated":"rating"},n.handleTermChange=n.handleTermChange.bind(Object(h.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(h.a)(n)),n.handleSearch=n.handleSearch.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"componentDidMount",value:function(){var e;O.a.locateByIP({enableHighAccuracy:!0,timeout:5e3,maximumWait:1e4,maximumAge:0,desiredAccuracy:30,fallbackToIP:!0},(function(t,n){console.log(n.address.city),e=n.address.city})),this.props.searchYelp("food",e,"best_match")}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var n=e.sortByOptions[t];return s.a.createElement("li",{key:n,className:e.getSortByClass(n),onClick:e.handleSortByChange.bind(e,n)},t)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{placeholder:"Search Category",onChange:this.handleTermChange}),s.a.createElement("input",{placeholder:"Where?",onChange:this.handleLocationChange})),s.a.createElement("div",{className:"SearchBar-submit",onClick:this.handleSearch},s.a.createElement("a",null,"Search")))}}]),t}(s.a.Component),j={search:function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n),{headers:{Authorization:"Bearer ".concat("tKZBkYD-HSCccDMOI3mssJ8KPrsWJlT7IWh5NoVLKLIKI22Vsn6xH2N5QG0jBp5RhJ31zFIv_J_qTSb7u6w8Fq2RQ5fEmZ9v1fkVRTwKSnUo529qMs0ECW-YhKBUXnYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e,t){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count,latitude:e.coordinates.latitude,longitude:e.coordinates.longitude,index:t+1}}))}))}},w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(h.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"searchYelp",value:function(e,t,n){var a=this;j.search(e,t,n).then((function(e){a.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null," Food Finder"),s.a.createElement("p",{className:"App-intro"},"Search for the perfect restaurant!"),s.a.createElement("div",null,s.a.createElement(k,{searchYelp:this.searchYelp})),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"column left"},s.a.createElement(C,{businesses:this.state.businesses})),s.a.createElement("div",{class:"column right"},s.a.createElement(v,{businesses:this.state.businesses}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.77dad6d2.chunk.js.map