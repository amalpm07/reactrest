import React from 'react'
import {useState,useEffect} from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurentlist() {
    const [allrestaurent,setallrestaurent]=useState([])

     //function to api call for datas inside json file
     const getrestaurentdata=async ()=>{
       await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
            setallrestaurent(result.restaurants)
       })
      }) 
      } 
// console.log(allrestaurent);
     useEffect(()=>{
        getrestaurentdata()
     },[])              //[]is used to  avoid repetation
  return (
   
    <Row>
      {
         allrestaurent.map(item=>(
            <RestCard data={item}/>
         ))
      }
    </Row>
  )
}

export default Restaurentlist
