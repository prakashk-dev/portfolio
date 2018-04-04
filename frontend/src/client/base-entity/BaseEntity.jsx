import React, { Component } from 'react';
import axios from 'axios';

class BaseEntity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: true,
			baseEntity: {},
			error:null
		};
		this.loadAbout();
	}
    loadAbout = () => {
    	axios.get('http://localhost:28080/api/base-entity/5ab70e46be4ec57ef49e066e')
    		.then(res => {
    			this.setState({
    				baseEntity: res.data.data,
    				fetching: false
    			});
    		})
    		.catch(err => {
    			this.setState({
    				error: err.message
    			});
    			console.log('err', err);
    		}
    		);
    }

    render() {
    	if (this.state.fetching){
    		return null;
    	}

    	return (
    		<div>
    			<pre>{JSON.stringify(this.state, null, 2)} </pre>
    		</div>
    	);
    }
}
export default BaseEntity;