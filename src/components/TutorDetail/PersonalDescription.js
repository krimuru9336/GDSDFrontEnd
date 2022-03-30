import React from "react";

export default function PersonalDescription({ tutorDetail }) {
  const cvFormattedText = tutorDetail.CV ? tutorDetail.CV : null;
  console.log(tutorDetail);
  return (
    <div className="card">
      <div className="card-header">Personal Description</div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            First Name: {tutorDetail?.first_name}
          </li>
          <li className="list-group-item">
            Last Name: {tutorDetail?.last_name}
          </li>
          <li className="list-group-item">Email: {tutorDetail?.email}</li>
          <li className="list-group-item">
            Phone: {tutorDetail?.phone_number}
          </li>
          <li className="list-group-item">
            Skills: {tutorDetail?.skills_text}
          </li>
          {
            <li className="list-group-item">
              Hourly Rate(Eur): {tutorDetail?.price_hourly_in_eur}
            </li>
          }
          <li className="list-group-item">
            CV:{" "}
            {cvFormattedText ? (
              <a target="_blank" href={cvFormattedText}>
                Download
              </a>
            ) : (
              "No CV"
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
