/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import Card from 'react-bootstrap/Card';
import React from 'react'

const Landcard = (props) => {
    const {data} =props;
    console.log(data);
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">area size {data.area} sq feet</Card.Subtitle>
            <Card.Text> soil type {data.soilType}</Card.Text>
            <Card.Text> Location {data.weather.name}</Card.Text>
            <Card.Text> Temp {data.weather.main.temp}F</Card.Text>
            <Card.Text> Humidity {data.weather.main.humidity}</Card.Text>
            <Card.Text> Location {data.weather.name}</Card.Text>
            <Card.Text> Location {data.weather.name}</Card.Text>

            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );
}

export default Landcard