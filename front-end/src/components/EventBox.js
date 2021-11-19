import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faDownload, faBriefcase, faQuestion, faDoorClosed, faSchool, faGraduationCap, faThumbsUp, faHistory } from '@fortawesome/free-solid-svg-icons';

const eventMap = {
  newjob: {
    title:  "Hired",
    files: false,
    reference: true,
    referenceTitle: "Manager",
    subTitle: "Responsibilities"
  },
  promotion: {
    title: "Promoted",
    files: true,
    reference: false,
    referenceTitle: "",
    subTitle: "",
  },
  education: {
    title: "Started Education",
    files: false,
    reference: false,
    referenceTitle: "",
    subTitle: ""
  },
  graduation: {
    title: "Graduated",
    files: true,
    reference: false,
    referenceTitle: "",
    subTitle: ""
  },
  endjob: {
    title: "Job Ended",
    files: true,
    reference: true,
    referenceTitle: "Reference",
    subTitle: "Reason for Leaving"
  },
  event: {
    title: "Event",
    files: true,
    reference: true,
    referenceTitle: "Reference",
    subTitle: ""
  },
  leftorganization: {
    title: "Left Organization",
    files: true,
    reference: false,
    referenceTitle: "",
    subTitle: "Reason for Leaving"
  },
  organization: {
    title: "Joined Organization",
    files: true,
    reference: false,
    referenceTitle: "",
    subTitle: "Duties"
  },
  team: {
    title: "Joined Team",
    files: true,
    reference: false,
    referenceTitle: "",
    subTitle: ""
  },
  leftteam: {
    title: "Left Team",
    files: true,
    reference: false,
    referenceTitle: "",
    subTitle: ""
  }

}

class EventBox extends Component {
   constructor() {
      super();

      this.state = {
  	    modal_opened: false
      }
    }

    render() {
      const history_event = this.props.history_event;
      const history_media = this.props.history_media;
      const event_props = eventMap[history_event.type];
      const setModal = this.props.setModal;
      return (
        <div className="history-event" key={history_event.id}>
          <div className="history-event-top-bar"><a><FontAwesomeIcon className="icon" icon={faHistory}/></a><div className="event-type">{event_props.title}</div></div>
          <div className={`reference-container ${history_event.reference === "" || !event_props.reference ? "hidden" : ""}`}><div className="reference">{event_props.referenceTitle}:</div>{history_event.reference}</div>
          {history_event.description != "" && <div className="history-event-description"><div className={`reason ${history_event.subTitle === "" ? "hidden" : ""}`}>{event_props.subTitle}</div><ReactMarkdown className="markdown" children={history_event.description} /></div>}
          {event_props.files && (
            <div className={`event-media ${history_event.files === "" ? "hidden" : ""}`}>
              {history_media.map(item => {
                return (<div className="event-image" onClick={() => setModal("image", item)} style={{backgroundImage: `url(${item})`}} key={item} />)
              })}
            </div>)
            }
        </div>
      )
    }
}

export default EventBox;
