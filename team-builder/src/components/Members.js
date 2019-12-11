import React from "react";

const Members = props => {
    const person = props.person;

    return (
        <div className="Member">
          <h2>{person.name}</h2>
          <h3>{person.role}</h3>
          <p>{person.email}</p>
        </div>
      );
};

export default Members;