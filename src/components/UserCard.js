import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card className="mycard" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.username}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.address.city}</Card.Text>
          <Button variant="outline-primary">
            <Link to={`/user/${user.id}`}> Profile </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
