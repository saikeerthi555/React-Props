import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
    <Card
      name="Jack Bauer"
      img="https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Jack_Bauer.jpg/220px-Jack_Bauer.jpg"
      tel="+7387384587"
      email="jack@nowwhere.com"
    />
  </div>,
  document.getElementById("root")
);
