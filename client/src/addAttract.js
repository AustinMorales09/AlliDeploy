import React, {Component} from 'react';
import axios from 'axios';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './addattractions.css';
import {BACKEND_URL} from './config';
import { withRouter } from 'react-router-dom'






class addAttract extends Component {
    constructor (props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeImageURL = this.onChangeImageURL.bind(this);
        // this.onChangeAddress = this.onChangeAddress.bind(this);
        // this.onChangeCity = this.onChangeCity.bind(this);
        // this.onChangeState = this.onChangeState.bind(this);
        // this.onChangeZipcode = this.onChangeZipcode.bind(this);
        // this.onChangeIndoors = this.onChangeIndoors.bind(this);
        // this.onChangeChild = this.onChangeChild.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: "",
            description: "",
            website: "",
            imageURL: ""
          
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeWebsite(e) {
        this.setState({
            website: e.target.value
        })
    }
    onChangeImageURL(e) {
        this.setState({
            imageURL: e.target.value    
        })
    }
    // onChangeAddress(e) {
    //     this.setState({
    //         location:{
    //             ...this.state.location,
    //             address: e.target.value
    //         }
    //     })
    // }
    // onChangeCity(e) {
    //     this.setState({
    //         location: {
    //             ...this.state.location,
    //             city: e.target.value
    //         }
    //     })
    // }
    // onChangeState(e) {
    //     this.setState({
    //         location:{
    //             ...this.state.location,
    //             state: e.target.value
    //         }
    //     })
    // }
    // onChangeZipcode(e) {
    //     this.setState({
    //         location: {
    //             ...this.state.location,
    //             state: e.target.value
    //         }
    //     })
    // }
    // onChangeIndoors(e) {
    //     this.setState({
    //         indoors: e.target.value
    //     })
    // }
    // onChangeChild(e) {
    //     this.setState({
    //         childFriendly: e.target.value
    //     })
    // }
    onSubmit(e) {
        e.preventDefault();
        const attraction = {
            name: this.state.name,
            description: this.state.description,
            website: this.state.website,
            imageURL: this.state.imageURL,
            // location: this.state.location,
            // address: this.state.address,
            // city: this.state.city,
            // state: this.state.state,
            // indoors: this.state.indoors,
            // childFriendly: this.state.childFriendly
        };
    //     console.log(BACKEND_URL + 'attractions/add', attraction)
    //     axios.post(BACKEND_URL + 'attractions/add', attraction)
    //     .then(res => console.log(res.data));
    //     this.props.history.push('/attractions');
    //    console.log(attraction)

    console.log(attraction);

    axios.post(BACKEND_URL + '/add')                
    .then(res => console.log(res.data));
    
    window.location = '/attractions';
  }
    
    render() {
        return(
            <div>
                <div className='containerAddPage'>
                    <h2 className='text-center' id="header-text">Add a New Attraction</h2>
                    <form className='add' onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type='text' required className='form-control inputs' 
                            value={this.state.name} onChange={this.onChangeName}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input type='text' required 
                            className='form-control' 
                            value={this.state.description} onChange={this.onChangeDescription}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Website: </label>
                            <input type='text' required 
                            className='form-control' 
                            value={this.state.website} onChange={this.onChangeWebsite}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Image URL: </label>
                            <input type='text' required
                             className='form-control' 
                            value={this.state.imageURL} onChange={this.onChangeImageURL}>
                            </input>
                        </div>
                       
                        <div className='form-group'>
                            <input type='submit' value="Add Attraction" className="btn-add" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default withRouter (addAttract);
