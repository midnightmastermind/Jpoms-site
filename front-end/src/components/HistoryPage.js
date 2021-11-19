import React, { Component } from 'react';
import Loading from './Loading';
//import PropTypes from 'prop-types';
import { Chrono } from "react-chrono";
import data from "./data";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faDownload, faBriefcase, faQuestion, faDoorClosed, faSchool, faGraduationCap, faThumbsUp, faHistory, faFilter, faProjectDiagram, faTimesCircle, faUsers, faUsersSlash, faCalendarDay, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import historyActions from "../actions/historyActions.js";
import projectActions from "../actions/projectActions.js";
import EventBox from './EventBox.js';
import jplogo from "../jplogo.png";
import resume from "./resume.pdf";
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
   constructor(props) {
      super(props);

      this.setModal = this.setModal.bind(this);
      this.state = {
  	    loaded: false,
        filters: {
          carpentry: true,
          compsci: true,
          education: true,
          hospitality: true,
          homecare: true,
          publicsafety: true,
          team: true,
          organization: true,
          charity: true,
          lawncare: true,
          project: true
        },
        history: [],
        project: [],
        refresh: false,
        modal_open: false,
        modal: "filters",
        modal_image: ""
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
    closeModal() {
      this.setState({modal_open: false, modal_image: ""})
    }

    setModal(modal, image) {
      let modal_open = this.state.modal_open;
      const current_modal = this.state.modal;
      if(modal != "image" && (modal_open && modal === current_modal)) {
          this.closeModal();
      } else {
          this.setState({modal_open: true, modal: modal, modal_image: image})
      }
    }
    displayEvent(history_event) {
      let history_media =[];
      imageKeys.forEach((item, i) => {
        if(history_event.files != "" && item.includes(history_event.files)) {
           history_media.push(images[item].default)
        }
      });

      const event_props = {
        history_event: history_event,
        history_media: history_media,
      }
      const history_dom = (<EventBox setModal={this.setModal} key={history_event.id} {...event_props} />);

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
      } else if (history_event.type == "organization" || history_event.type == "team") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faUsers}/>);
      } else if (history_event.type == "leftorganization" || history_event.type == "leftteam") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faUsersSlash}/>);
      } else if (history_event.type == "event") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faCalendarDay}/>);
      } else if (history_event.type == "project") {
        icon = (<FontAwesomeIcon className="icon" key={history_event.id} icon={faFolderOpen}/>);
      }

      return icon;
    }

    render() {
      console.log(resume);
      if ((this.state.history.length == 0 && this.props.history.history.length == 0) || this.state.project.length == 0) {
        return (<Loading />);
      }

      const filters = Object.keys(this.state.filters);

      return (
        <div className="App-page History-page">
          <div className="top-bar">
            <Link to="/" className="back-button" color="inherit"><FontAwesomeIcon className="icon" icon={faArrowCircleLeft}/></Link>
            <a className="back-button" color="inherit" onClick={()=>this.setModal("filters", null)}><FontAwesomeIcon className="icon" icon={faFilter}/></a>
            <a className="back-button" color="inherit" onClick={()=>this.setModal("project", null)}><FontAwesomeIcon className="icon" icon={faProjectDiagram}/></a>
            <Link to={resume} className="back-button" color="inherit" target="_blank" download><FontAwesomeIcon className="icon" icon={faDownload}/></Link>
            <div className="page-title">Job/Organization History</div>
          </div>
          <div className="App-content">
            {this.state.history.length > 0 && <div className="history-section" style={{ width: "100%", height: "90vh" }}>
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
          {this.state.modal_open && <div className="modal">
            <div className="modal-top-bar"><a onClick={() => this.closeModal()}><FontAwesomeIcon className="icon" icon={faTimesCircle}/></a></div>
            {this.state.modal == "project" && <div className="current-projects">
              <div className="projects-title">Current Projects</div>
              <div className="projects">
                {
                  this.state.project.length > 0 && this.state.project.map(project => (
                    project.current && <div key={project._id} className="project"><a href={project.link}>{project.name}</a></div>
                  ))
                }
              </div>
            </div>
            }
            {this.state.modal == "filters" && <div className="history-tags">
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
            }
            {this.state.modal == "image" && <div className="full-image" style={{backgroundImage: `url(${this.state.modal_image})`}}/>}
          </div>
          }
        </div>
      )
    }
}

export default connect(
  state => state,
  {...historyActions,
  ...projectActions}
)(HistoryPage);
