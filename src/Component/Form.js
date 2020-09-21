import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Username: "",
             comment :"",
             topic :"react"
        }
    }

    handleUserNameChange =(event) =>{
        this.setState({
            Username : event.target.value
        })
    }

    handleCommentChange =(event) =>{
        this.setState({
            comment : event.target.value
        })
    }

    handleTopicChange =(event) =>{
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmitChange = (event) =>{
            alert(`${this.state.Username} ${this.state.comment} ${this.state.topic}`)
            event.preventDefault()
        
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmitChange}>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.Username} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>comment</label>
                    <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label>topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option type="React">React</option>
                        <option type="angular">Angular</option>
                        <option type="vue.js">Vue.js</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
