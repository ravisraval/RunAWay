import React from 'react';
import ReactDOM from 'react-dom';



class Map extends React.Component {
  constructor(props) {
    super(props);
    this.addBurritoPlace = this.addBurritoPlace.bind(this);
  }

  componentDidMount() {/*
     * ReactDOM.findDOMNode gets us a pointer to the actual html DOM
     * element, not its React component class instance, this is what
     * Google maps wants to render the map into this.refs is an object
     * populated by giving children a 'ref' prop when we render
     */
    const map = ReactDOM.findDOMNode(this.refs.map);
    const options = {
      center: this.props.center,
      zoom: 13
    };
    // this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, options);

    this.listenForMove();
    this.props.burritoPlaces.forEach(this.addBurritoPlace);

  }

  addBurritoPlace(burritoPlace) {
    /*
    * we make an instance of the google maps LatLng class, args are
    * (lat, lng)
    */
   const pos = new google.maps.LatLng(burritoPlace.lat, burritoPlace.lng);

   /*
     * then we use our new instance of LatLng to make a marker
     * set map to this.map, this is what adds it to the map
     * when we want to remove this marker, we need to set its
     * map property to null using myMarker.setMap(null)
     */
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });
    // when the marker is clicked on, alert the name
    marker.addListener('click', () => {
      alert(`clicked on: ${burritoPlace.name}`);
    });
  }

  listenForMove() {
   /*
    * we listen for the map to emit an 'idle' event, it does this when
    * the map stops moving
    */
   google.maps.event.addListener(this.map, 'idle', () => {
     const bounds = this.map.getBounds();
     alert('map has moved, check console to see updated bounds');
     console.log('center',
        bounds.getCenter().lat(),
        bounds.getCenter().lng());
      console.log("north east",
        bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
      console.log("south west",
        bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());
    });
  }
    render() {
    /*
     * the div that will become the map is just an empty div
     * we give it a 'ref' so we can easily get a pointer to the
     * actual dom node up in componentDidMount
     * DO NOT FORGET: you must style your map div and give it width + height
     * or else it won't be visible!
     */
    return (
      <div>
        <span>MAP DEMO</span>
        <div id='map' ref='map'/>
        <p>
          Hey! Here are a few good burrito places in SF. Click on them
          to find their name. Move the map and check the console to see
          the new boundaries of the displayed map.
        </p>
      </div>
    );
  }
}

export default Map;
