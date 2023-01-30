import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({Reviewdata}) {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button className='mt-4'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
                Reviewdata.map(data=>(
                    // console.log(data);
                    <div className='p-2 mt-1'>
                          <Card body style={{ width: '400px' }}>
              <h4>Name :-{data.name}</h4>
              <h4> Date :-{data.date}</h4>
              <h4> Rating :-{data.rating}</h4>
              <h4> Comments :-{data.comments}</h4>
              </Card>
                    </div>
                ))
            }
            <Card body style={{ width: '400px' }}>
              
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  )
}

export default Review
