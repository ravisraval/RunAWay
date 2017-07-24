import React from 'react';
import ReactDOM from 'react-dom';


//make start marker green flag, end checkered
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelMode: "BICYCLING",
      markers: this.props.markers,
      waypoints: []
    };
    this.handleToggleTravel = this.handleToggleTravel.bind(this);
    this.listenforClick = this.listenforClick.bind(this);
    this.calcAndDisplayRoute = this.calcAndDisplayRoute.bind(this);
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
      zoom: 13,
      mapTypeControl: true,
      mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DEFAULT
          }
    };
    // this line actually creates the map and renders it into the DOM
    this.map = new google.maps.Map(map, options);
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: true,
      map: this.map
    });
    this.directionsService = new google.maps.DirectionsService;
    this.directionsDisplay.setMap(this.map);

    // this.listenForMove();
    this.listenforClick();
  }

  handleToggleTravel(e) {
    this.update('travelMode');
    if (this.state.markers.length > 1) {
      this.calcAndDisplayRoute;
    };
  }

  update(property) {
    return e => {this.setState({ [property]: e.target.value })}
  }

  listenforClick() {
    const {markers} = this.state;
    const {waypoints} = this.state;
    this.map.addListener('click', (e) => {
      placeMarker(e.latLng, this.map);});

    const placeMarker = (position, map) => {
      console.log(this.state.travelMode);
      let marker = new google.maps.Marker({
          position: position,
          map: map
        });
      let loc = new google.maps.LatLng(
        position.lat(),
        position.lng()
      )
      waypoints.push({location: loc });
      markers.push(marker);

      if (markers.length > 1) {
        this.calcAndDisplayRoute();

      }
    }
  }

  calcAndDisplayRoute() {
    const {markers} = this.state;
    const {waypoints} = this.state;
    this.directionsService.route({
      origin: waypoints[0],
      destination: waypoints[waypoints.length - 1],
      travelMode: this.state.travelMode,
      waypoints: waypoints.slice(1,-1),
      optimizeWaypoints: true,
      provideRouteAlternatives: true,
      avoidHighways: true,
      avoidTolls: true
    },
    (response, status) => {
      if (status == 'OK') {
        this.directionsDisplay.setDirections(response);
      }
    }
  )}

  // listenForMove() {
  //  /*
  //   * we listen for the map to emit an 'idle' event, it does this when
  //   * the map stops moving
  //   */
  //  google.maps.event.addListener(this.map, 'idle', () => {
  //    const bounds = this.map.getBounds();
  //   });
  // }

    render() {
      const { biked } = this.state;
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
        <input id="pac-input" className="controls" type="text" placeholder="Search Box"/>
        <div className="route-type-btns">
          <button value="BICYCLING" onClick={this.handleToggleTravel}>Bike</button>
          <button value="WALKING" onClick={this.handleToggleTravel}>Run</button>
        </div>
        <div id='map' ref='map'/>
        <p>
          wuzzzuuuup
        </p>
      </div>
    );
  }
}

export default Map;
