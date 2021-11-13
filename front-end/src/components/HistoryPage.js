import React, { Component } from 'react';
import Loading from './Loading';
//import PropTypes from 'prop-types';
import { Chrono } from "react-chrono";
import data from "./data";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faDownload, faBriefcase, faQuestion, faDoorClosed, faSchool, faGraduationCap, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import actions from "../actions/historyActions.js";
import jplogo from "../jplogo.png"
const eventMap = {
  newjob: "Hired",
  promotion: "Promoted",
  education: "Started Education",
  graduation: "Graduated",
  endjob: "Job Ended"
}

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg|JPG)$/));
const imageKeys = Object.keys(images);
class HistoryPage extends Component {
   constructor() {
      super();

      this.state = {
  	    loading: true,
        filters: ["carpentry", "compsci", "education", "it", "hospitality", "homecare", "management", "publicsafety", "sales", "community"],
        activeFilters: ["carpentry","compsci", "education", "it", "hospitality", "homecare", "management", "publicsafety", "sales", "community"],
        history: []
      }
    }

    componentDidMount() {
      this.props.fetchHistory();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.history.history.length != 0 && this.state.history.length == 0) {
        this.setState({history: this.props.history.history})
      }
    }

    updateFilters(filter) {
      let filters = this.state.activeFilters;
      if (filters.includes(filter)) {
        const index = filters.indexOf(filter);
        filters.splice(index, 1);
      } else {
        const index = this.state.filters.indexOf(filter);
        filters.splice(index, 0, filter);
      }
      this.setState({activeFilters: filters, history: this.updateHistory(this.props.history.history)})
    }

    displayEvent(history_event) {
      let history_media =[];
      imageKeys.forEach((item, i) => {
        if(history_event.files != "" && item.includes(history_event.files)) {
           history_media.push(images[item].default)
        }
      });

      let history_dom = (<div className="history-event" key={history_event.id}><div className="event-type">{eventMap[history_event.type]}</div><div><ReactMarkdown className="markdown" children={history_event.description} /></div></div>);
      if (history_event.type == "newjob") {
          history_dom = (<div className="history-event newjob-event" key={history_event.id}>
          <div className="event-type">{eventMap[history_event.type]}</div>
          <div className={`reference-container ${history_event.reference === "" ? "hidden" : ""}`}><div className="reference">Manager: </div>{history_event.reference}</div>
          <div><div className="reason">Responsibilities:</div><ReactMarkdown className="markdown" children={history_event.description} /></div>
          </div>);
      } else if (history_event.type == "endjob") {
        history_dom = (<div className="history-event endjob-event" key={history_event.id}>
          <div className="event-type">{eventMap[history_event.type]}</div>
          <div className={`event-media ${history_event.files === "" ? "hidden" : ""}`}>
            {history_media.map(item => {
              return (<img src={item} />)
            })}
          </div>
          <div className={`reference-container ${history_event.reference === "" ? "hidden" : ""}`}><div className="reference">Reference: </div>{history_event.reference}</div>
          <div><div className="reason">Reason for Leaving:</div><ReactMarkdown className="markdown" children={history_event.description} /></div>
        </div>);
      } else if (history_event.type == "graduation") {
         history_dom = (<div className="history-event" key={history_event.id}><div className="event-type">{eventMap[history_event.type]}</div>  <div className={`event-media ${history_event.files === "" ? "hidden" : ""}`}>
            {history_media.map(item => {
              return (<img src={item} />)
            })}
          </div><div><ReactMarkdown className="markdown" children={history_event.description} /></div></div>
        )
      }

      return history_dom;
    }

    displayIcon(history_event) {
      let icon = <FontAwesomeIcon className="icon" key={history_event.id} icon={faQuestion}/>;

      if (history_event.type == "newjob") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faBriefcase}/>);
      } else if (history_event.type == "endjob") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faDoorClosed}/>);
      } else if (history_event.type == "education") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faSchool}/>);
      } else if (history_event.type == "graduation") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faGraduationCap}/>);
      } else if (history_event.type == "promotion") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faThumbsUp}/>);
      }

      return icon;
    }


    updateHistory(history) {
      const active_filters = this.state.activeFilters;

      const newHistory = history.filter(history_event => {
        let isFound = active_filters.some(af => history_event.tags.includes(af));
        return isFound && history_event;
      })
      newHistory.sort(function(a, b) {
          var c = new Date(a.title);
          var d = new Date(b.title);
          return d-c;
      });

      return newHistory;
    }
    render() {
      if (this.state.history.length == 0) {
        return (<Loading />);
      }

      const filters = this.state.filters;

      return (
        <div className="App-page History-page">
          <div className="App-content">
            <div className="side-bars">
              <div className="left-side-history">
                <Link to="/" className="back-button" color="inherit"><FontAwesomeIcon className="icon" icon={faArrowCircleLeft}/>/home/history</Link>
                <div className="current-projects">
                  <div className="projects-title">Current Projects</div>
                  <div className="projects"></div>
                </div>
              </div>
              <div className="right-side-history">
                <Link to="/" className="download-button" color="inherit"><FontAwesomeIcon className="icon" icon={faDownload}/></Link>
                <div className="history-tags">
                  <div className="tags-title">Filters Applied:</div>
                  <div className="filter-options">
                    { filters.map(filter => (
                      <div className="filter-option" key={filter}>
                        <input type="checkbox" id="filter-option" name="filter-option"
                          value={filter}
                          checked={this.state.activeFilters.includes(filter)}
                          onClick={() => this.updateFilters(filter)}
                          />
                        <div>{filter}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="history-section" style={{ width: "100%", height: "95vh" }}>
              <Chrono items={this.state.history} allowDynamicUpdate={true} hideControls={true} theme={{
                  primary: "rgba(246,126,125,0.3)",
                  secondary: "white",
                  cardBgColor: "rgba(0,0,0,0.3)",
                  cardForeColor: "white",
                  titleColor: "black"
                }}
              mode="VERTICAL_ALTERNATING">
              {
                this.state.history.map(history_event => {
                    const displayed_event = this.displayEvent(history_event);
                    return displayed_event;
                })
              }
                <div className="chrono-icons">
                {
                  this.state.history.map(history_event => {
                      const displayed_icon = this.displayIcon(history_event);
                      return displayed_icon;
                  })
                }
                </div>
              </Chrono>
            </div>
          </div>
        </div>
      )
    }
}

export default connect(
  state => state,
  actions
)(HistoryPage);
