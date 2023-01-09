import React from "react";
import "./BusinessCard.css";

function BusinessCard(props) {
    const { company, name, email, phoneNumber, team } = props.info;

    return (
        <div className="card">
            <div className="company">{company}</div>
            <div className="email">{email}</div>
            <div className="name">{name}</div>
            <div className="phone">{phoneNumber}</div>
            <div className="team">{team}</div>
        </div>
    );
}

export default BusinessCard;
