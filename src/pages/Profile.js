import axios from "axios";
import { Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
      .then((res) => setUser(res.data[0]))
      .catch((err) => console.log(err));
  });
  return(
  <div>
    <Card className="mycard" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"
      />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Card.Text>{user.website}</Card.Text>
        <Button variant="outline-primary">
          <Link to="/users"> Back to users </Link>
        </Button>
      </Card.Body>
    </Card>
  </div>
  )
};

export default Profile;
