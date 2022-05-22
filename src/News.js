import React, { Component } from 'react'
import Newsitem from './Newsitem'
import axios from 'axios'
import Spinner from './Spinner'
//import PropTypes from 'prop-types'

export default class News extends Component {

state={
        data:[],
        page:1,
        loading:true
          
    }   
  

    componentDidMount() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=28c667c7e8114eb69659e1bd32ce9979&page=${this.state.page}&pageSize=${this.props.pageSize}`).then((res)=>{
        console.log(res.data);
         this.setState({data: res.data.articles});
         this.setState({totalResults:res.data.totalResults})
         this.setState({loading:false})

        })}
    
 handlePrevClick=async ()=>{
  console.log("previous");
 await this.setState({page:this.state.page-1 })
  console.log(this.state.page)
  axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=28c667c7e8114eb69659e1bd32ce9979&page=${this.state.page}&pageSize=${this.props.pageSize}`).then((res)=>{
    console.log(res.data);
     this.setState({data: res.data.articles});
     this.setState({totalResults:res.data.totalResults})

     window.scrollTo(0, 0);
})}
       
handleNextClick=async ()=>{

  console.log("next");
  if(this.state.page>Math.ceil(this.state.totalResults/this.props.pageSize)){

  }
  else{
  await this.setState({page:this.state.page+1})
  console.log(this.state.page)
  axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.catagory}&apiKey=28c667c7e8114eb69659e1bd32ce9979&page=${this.state.page}&pageSize=${this.props.propSize}`).then((res)=>{
    console.log(res.data);
     this.setState({data: res.data.articles });
     this.setState({totalResults:res.data.totalResults})
     window.scrollTo(0, 0);
    })}
  }
    

  render(){
    return (
      <div className="container my-3">
<h1 className='text-center'> News monkey -Top Headlines of {this.props.catagory}</h1>
{this.state.loading&&<Spinner/>}

      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",height:"80%"}}>
              
          {this.state.data?this.state.data.map(news => (
               <Newsitem  key ={news.url} title={news.title.slice(0,50)} author={news.author} content={news.content?news.content.slice(0,80):""} urlToImage={news.urlToImage} url={news.url}/> 
          )):null}
        
<div className="container d-flex justify-content-between align-items-end">
<button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr;previous</button>
<button  disabled={this.state.page+1>Math.ceil(this.state.totalResults)/10}  type="button" className="btn btn-dark" onClick={this.handleNextClick}> next &rarr;</button>

</div>

      </div>

      </div>
    );
  }
}

