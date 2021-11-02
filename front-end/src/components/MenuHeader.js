import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jpoms from '../jpoms3.jpg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  menu: {
    backgroundColor: '#303030',
	position: 'fixed',
	maxHeight: '50px'
    //boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px -1px rgba(0, 0, 0, 0.14), 0px 1px 10px 7px rgba(0, 0, 0, 0.2)',
  },
  toolbar: {
    maxWidth: '700px',
    width: '700px',
    margin: '0 auto',
    display: 'flex',
    maxHeight: '50px',
    justifyContent: 'flex',
    padding: '0px',
  	color: '#A87A22;',
  	position: 'fixed',
  	top: '0'
  }
};

class MenuHeader extends Component {
	static propTypes = {
	  isMobile: PropTypes.bool,
	}

   constructor() {
      super();
      this.state = {
		anchorEl: null
      };
    }

	  handleClick = event => {
	    this.setState({ anchorEl: event.currentTarget });
	  };

	  handleClose = () => {
	    this.setState({ anchorEl: null });
	  };

  render() {
    const { classes, isMobile } = this.props;
	const { anchorEl } = this.state;

    if (isMobile) {
			return (
				<div className="Menu-header">
					<AppBar className={classes.menu}>
      	          		<div className="App-title">
      	           		 <img src={jpoms} className="App-logo" alt="logo" />
      	         		   <h2>jpoms.com</h2>
      	          		</div>
					  <Toolbar className={classes.toolbar}>
						<Button
				          aria-owns={anchorEl ? 'simple-menu' : undefined}
				          aria-haspopup="true"
				          onClick={this.handleClick}
				        >
				  			<MenuIcon color='primary' style={{color:"#A87A22"}}/>
				        </Button>
				        <Menu
				          id="simple-menu"
				          anchorEl={anchorEl}
				          open={Boolean(anchorEl)}
				          onClose={this.handleClose}
				        	>
				          <MenuItem onClick={this.handleClose} component={ Link } to="/">home</MenuItem>
                  <MenuItem onClick={this.handleClose} component={ Link } to="/services">services</MenuItem>
    						  <MenuItem onClick={this.handleClose} component={ Link } to="/history">history</MenuItem>
				          {/*<MenuItem onClick={this.handleClose} component={ Link } to="/about">about</MenuItem>
						  <MenuItem onClick={this.handleClose} component={ Link } to="/blog">blog</MenuItem>
						  <MenuItem onClick={this.handleClose} component={ Link } to="/services">services</MenuItem>
						  <MenuItem onClick={this.handleClose} component={ Link } to="/history">history</MenuItem>
				  		<MenuItem onClick={this.handleClose} component={ Link } to="/cats">cats</MenuItem>
						  <MenuItem onClick={this.handleClose} component={ Link } to="/projectzeno">project zeno</MenuItem>
						  <MenuItem onClick={this.handleClose} component={ Link } to="/jessica">jessica</MenuItem>*/}
				        </Menu>
					</Toolbar>
				  </AppBar>
				</div>
  		)
      } else {
		  return (
				<div className="Menu-header">
				  <AppBar className={classes.menu}>
				   <div className="App-title">
      	             <img src={jpoms} className="App-logo" alt="logo" />
      	         	<h2>jpoms.com</h2>
      	          </div>
					<Toolbar className={classes.toolbar}>
					  <Button color="inherit" component={ Link } to="/">home</Button>
            <Button color="inherit" component={ Link } to="/blog">blog</Button>
            <Button color="inherit" component={ Link } to="/services">services</Button>
					   { /*<Button color="inherit" component={ Link } to="/about">about</Button>
					    <Button color="inherit" component={ Link } to="/blog">blog</Button>
					    <Button color="inherit" component={ Link } to="/services">services</Button>
					    <Button color="inherit" component={ Link } to="/history">history</Button>
						<Button color="inherit" component={ Link } to="/cats">cats</Button>
						<Button color="inherit" component={ Link } to="/projectzeno">project zeno</Button>
						<Button color="inherit" component={ Link } to="/jessica">jessica</Button>*/}
					</Toolbar>
				  </AppBar>
				</div>
			  )
	  }
   }
}

MenuHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuHeader);
