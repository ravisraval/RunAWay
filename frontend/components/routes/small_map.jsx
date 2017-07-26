import React from 'react';
import ReactDOM from 'react-dom';


class SmallMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latLngs: google.maps.geometry.encoding.decodePath(
        this.props.route.waypoints_text)
    };
  }

  componentDidMount() {
    const options = {
      disableDefaultUI: true,
      draggable: false,
      gestureHandling: 'none',
      scrollwheel: false,
      disableDoubleClickZoom: true
    };
    const map = ReactDOM.findDOMNode(this.refs[`${this.props.route.id}`]);
    this.map = new google.maps.Map(map, options);
    this.pathLine = new google.maps.Polyline({
      strokeColor: '#000000',
      strokeOpacity: 1,
      strokeWeight: 3,
      map: this.map,
      draggable: false
    });

    this.bounds = new google.maps.LatLngBounds();
    this.state.latLngs.forEach(latLng => {
      this.pathLine.getPath().push(latLng);
      this.bounds.extend(latLng)
    });
    this.map.fitBounds(this.bounds);
    this.map.panToBounds(this.bounds);

  }

  render() {
    const { route } = this.props;
    const idName = route.id;
    return(
      <div id={idName} ref={idName} className="small-map"></div>
    );
  }
}

export default SmallMap;
