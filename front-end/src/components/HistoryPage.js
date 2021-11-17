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
import historyActions from "../actions/historyActions.js";
import projectActions from "../actions/projectActions.js";
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
  	    loaded: false,
        filters: {
          carpentry: true,
          compsci: true,
          education: true,
          hospitality: true,
          homecare: true,
          publicsafety: true
        },
        history: [],
        project: [],
        refresh: false
      }
    }

    componentDidMount() {
      this.props.fetchHistory();
      this.props.fetchProject();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.history.history.length != 0 && this.state.history.length == 0 && this.state.loaded == false) {
        this.setState({history: this.props.history.history, loaded: true})
      }

      if (this.props.project.project.length != 0 && this.state.project.length == 0) {
        this.setState({project: this.props.project.project})
      }

      if(this.state.refresh) {
        let history = this.props.history.history;
        history = history.filter(history_event => {
          return this.state.filters[history_event.tags[0]]
        })
        this.setState({history: history, refresh: false});
      }
    }

    updateFilters(filter, e) {
      let filters = this.state.filters;
      filters[filter] = !filters[filter];
      this.setState({filters: filters, refresh: true, history: []})
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
              return (<img key={item} src={item} />)
            })}
          </div>
          <div className={`reference-container ${history_event.reference === "" ? "hidden" : ""}`}><div className="reference">Reference: </div>{history_event.reference}</div>
          <div><div className="reason">Reason for Leaving:</div><ReactMarkdown className="markdown" children={history_event.description} /></div>
        </div>);
      } else if (history_event.type == "graduation") {
         history_dom = (<div className="history-event" key={history_event.id}><div className="event-type">{eventMap[history_event.type]}</div>  <div className={`event-media ${history_event.files === "" ? "hidden" : ""}`}>
            {history_media.map(item => {
              return (<img key={item} src={item} />)
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

    render() {
      if ((this.state.history.length == 0 && this.props.history.history.length == 0) || this.state.project.length == 0) {
        return (<Loading />);
      }

      const filters = Object.keys(this.state.filters);

      return (
        <div className="App-page History-page">
          <div className="App-content">
            <div className="side-bars">
              <div className="left-side-history">
                <Link to="/" className="back-button" color="inherit"><FontAwesomeIcon className="icon" icon={faArrowCircleLeft}/><div className="nav">/home/history</div></Link>
              </div>
              <div className="right-side-history">
              <div className="current-projects">
                <div className="projects-title">Current Projects</div>
                  <div className="projects">
                    {
                      this.state.project.map(project => {
                        if (project.current) {
                          return (<div className="project" key={project.id}><a href={project.link}>{project.name}</a></div>);
                        }
                      })
                    }
                  </div>
                </div>
                <div className="history-tags">
                  <div className="tags-title">Filters Applied:</div>
                  <div className="filter-options">
                    { filters.map(filter => (
                      <div className="filter-option" key={filter}>
                        <input type="checkbox" id="filter-option" name="filter-option"
                          value={filter}
                          defaultChecked={this.state.filters[filter]}
                          onChange={(e) => this.updateFilters(filter, e)}
                          />
                        <div>{filter}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {this.state.history.length > 0 && <div className="history-section" style={{ width: "100%", height: "95vh" }}>
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
            }
            {
            this.state.history.length == 0 && <div className="warning">All history has been filtered out</div>
            }
          </div>
        </div>
      )
    }
}

export default connect(
  state => state,
  {...historyActions,
  ...projectActions}
)(HistoryPage);
