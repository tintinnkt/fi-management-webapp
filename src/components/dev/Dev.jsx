import React from 'react';
import './dev.css';

function DevCard({ user }) {
    const dev = [
        {
            username: "Tintinnkt",
            email: "itin752@gmail.com",
            devIcon: "https://i.pinimg.com/564x/d6/d6/d1/d6d6d19dc427f7e669a7064bb10fbbb8.jpg",
            devFB: "https://www.facebook.com/krittin.tragunejindarat/",
            devIG: "https://www.instagram.com/tintinnkt/",
            devGithub: "https://github.com/TintinnKT",
            description : "Database hosting Front-end (Firebase Hosting, Firestore,FetchAPI ,CSS,ReactJS)"
        },
        {
            username: "Thanathad",
            email: "",
            devIcon: "https://portal.the1.co.th/images/article/f5babc81-a3ed-4faa-afe1-b34f933ea409_1675406708046",
            devFB: "",
            devIG: "",
            devGithub: "https://github.com/Thanathad",
            description : "Front-end (HTML,CSS,JSX)"
        }
    ];

    return (
        <React.Fragment>
            <div className="box-around">
                <div className="dev-box">
                    <div className="devicon">
                        {dev[user].devIcon ? <img src={dev[user].devIcon} className='devimg' alt="Developer Icon" />: null}
                    </div>
                    <div className="dev-body">
                        <div className="dev-detail">
                            <div className="devname">{dev[user].username} <span className="dv">Dev</span></div>
                            {dev[user].email ? <div className="email">{dev[user].email}</div> : null}
                            {dev[user].description ? <div className="dev-des">{dev[user].description}</div> : null}
                        </div>
                        <div className="link">
                            {dev[user].devFB ? (
                                <a href={dev[user].devFB} target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png" className='contacticon' alt="Facebook Icon" />
                                </a>
                            ) : null}
                            {dev[user].devIG ? (
                                <a href={dev[user].devIG} target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className='contacticon' alt="Instagram Icon" />
                                </a>
                            ) : null}
                            {dev[user].devGithub ? (
                                <a href={dev[user].devGithub} target="_blank" rel="noopener noreferrer">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png" className='contacticon' alt="GitHub Icon" />
                                </a>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DevCard;
