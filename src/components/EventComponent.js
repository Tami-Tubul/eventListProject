import { useState } from "react";
import { useSelector } from "react-redux";
import CardComp from "./style/CardComp";

const EventComponent = ({ eventsData }) => {

  const loading = useSelector(state => state.loading)

  const [showEditBtn, setShowEditBtn] = useState(false)
  const [showSettingsBtn, setShowSettingsBtn] = useState(false)


  return (
    <>
      <CardComp>
        {
          loading ?
            <div className="loading-box">טוען</div>
            :
            <>
              <div className="text-container" onMouseOver={() => setShowSettingsBtn(true)} onMouseOut={() => setShowSettingsBtn(false)}>

                <h2><b>{eventsData.title}</b></h2>
                <p>{eventsData.time_openstart_time} - {eventsData.time_openstart_date}</p>

                <div className="text-bottom">
                  <p>{eventsData.location}</p>
                  <div className="active-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-record-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    <span> פעיל </span>
                  </div>
                </div>


              </div>

              {showSettingsBtn && 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>}
              <div className="img-container" onMouseOver={() => setShowEditBtn(true)} onMouseOut={() => setShowEditBtn(false)}>
                {showEditBtn && <i className="fa fa-pencil"></i>}
                <img className="img-fluid" width="300" src={eventsData.fb_img} alt={eventsData.title}></img>
              </div>
            </>
        }
      </CardComp>

    </>
  )
}

export default EventComponent;