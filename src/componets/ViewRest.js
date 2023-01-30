import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import  { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import Operating from './Operating'
import Review from './Review'
function ViewRest() {
  const params =useParams()
  // console.log(params.id);

  const [allrestaurent,setallrestaurent]=useState([])

  //function to api call for datas inside json file
  const getrestaurentdata=async ()=>{
    await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
         setallrestaurent(result.restaurants)
    })
   }) 
   } 
// console.log(allrestaurent);
const restdata= allrestaurent.find(item=>item.id==params.id)
// console.log(restdata);

  useEffect(()=>{
     getrestaurentdata()
  },[])    
  return (
    <>
      {restdata?(
        <Row>
          <Col>
          <Image className='p-5' src={restdata.photograph}fluid/>
          </Col>
          <Col className='mt-5'>
           <h1>{restdata.name}</h1>
           <h3>{restdata.neighborhood}</h3>
           <h4>Cusine type:{restdata.cuisine_type}</h4>
           <h4>Address:{restdata.address}</h4>
           <Operating timedata={restdata.operating_hours}/>
           <Review Reviewdata={restdata.reviews}></Review>
          </Col>
        </Row>
      ):'null'}
    </>
  )
}

export default ViewRest
