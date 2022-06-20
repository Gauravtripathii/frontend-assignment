import React from "react";
import "../style/Doctor.css";
import profile from "../media/profile/woman.png";
import audio from "../media/icons/audio.png";
import video from "../media/icons/video.png";
import bell from "../media/icons/bell.png";

const Doctor = () => {
  const dates = [];
  for (var i = 1; i <= 31; i++) {
    dates.push(i);
  }

  return (
    <div className="Doctor">
      <div className="left">
        <h2>Your Treatment</h2>
        <div className="card one">
          <div className="profile">
            <div className="photo">
              <img src={profile} alt="profile photo" />
            </div>
            <div className="address">
              <p className="name">Dr. Lida Gutierrez</p>
              <p className="place">Heart Surgeon, London, England</p>
            </div>
          </div>
          <div className="designation">
            <span>Surgeon</span>
            <p>Heart Sergeon</p>
          </div>
          <div className="d-t">
            <div className="date">
              <span>Date</span>
              <p>20 Nov 2020</p>
            </div>
            <div className="time">
              <span>Time</span>
              <p>10:00 AM</p>
            </div>
          </div>
          <div className="connect">
            <div className="a">Appointment</div>
            <div className="c">
              <span>
                <img src={audio} alt="audio" />
              </span>
              <span>
                <img src={video} alt="video" />
              </span>
            </div>
          </div>
        </div>
        {/* <div className="card two"></div> */}
        <div className="card two">
          <div className="profile">
            <div className="photo">
              <img src={profile} alt="profile photo" />
            </div>
            <div className="address">
              <p className="name">Dr. Lida Gutierrez</p>
              <p className="place">Heart Surgeon, London, England</p>
            </div>
          </div>
          <div className="designation">
            <span>Surgeon</span>
            <p>Heart Sergeon</p>
          </div>
          <div className="d-t">
            <div className="date">
              <span>Date</span>
              <p>20 Nov 2020</p>
            </div>
            <div className="time">
              <span>Time</span>
              <p>10:00 AM</p>
            </div>
          </div>
          <div className="connect">
            <div className="a">Appointment</div>
            <div className="c">
              <span>
                <img src={audio} alt="audio" />
              </span>
              <span>
                <img src={video} alt="video" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bell">
        <img src={bell} alt="bell icon" />
      </div>
      <div className="right">
        <h3>Make An Appointment, That Will Help You! Choose A Doctor</h3>
        <div className="calendar">
          <h3>Consults For Today</h3>
          <div className="dates">
            {dates.map((date) => {
              return <span>{date}</span>;
            })}
          </div>
        </div>
        <div className="examinations">
          <p>
          <h3>Examinations</h3>
          <span>See All</span>
          </p>
          <div className="types">
            <div className="card">
              <p>23 Dec 2020</p>
              <span>Heart Surgeon</span>
              <p>Ellen Bradley</p>
            </div>

            <div className="card">
              <p>24 Nov 2020</p>
              <span>Medicine Specialist</span>
              <p>Luke McKinney</p>
            </div>

            <div className="card">
              <p>15 May 2020</p>
              <span>Backpain Specialist</span>
              <p>Cameron Holland</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
