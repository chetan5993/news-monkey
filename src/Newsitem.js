import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    return (
      <div><div  className="card my-3 mx-3" style={{width: "18rem",maxHeight:"500px" ,boxSizing: "border-box",borderRadius:"20px"}}>
      <img src= {this.props.urlToImage} className="card-img-top     img-fluid" alt="..." />
      <div  className="card-body">
        <h5  className="card-title">{this.props.title}</h5>
        <p>Author: {this.props.author}</p>
        <p  className="card-Content">{this.props.content}</p>
        <a href={this.props.url}  className="btn btn-dark">Go to News</a>
      </div>
    </div>

      </div>
    )
  }
}

export default Newsitem