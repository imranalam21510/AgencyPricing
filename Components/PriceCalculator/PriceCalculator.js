import styles from '../../styles/Home.module.css'
import React, {useState, useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Row, Col } from 'react-bootstrap';

export default function PriceCalculator() {
    const [pages,setPages] = useState(3)
    const [revisions,setRevision] = useState(5)
    const [seo,setSEO] = useState(0)
    const [db,setDB] = useState(0)
    const [ecommerce,setEcommerce] = useState(0)
    const [hosting,setHosting] = useState(0)
    const [responsive,setResponsive] = useState(0)
    const [platform,setPlatform] = useState(900)
    const [price,setPrice] = useState(900)

    useEffect(() => {
        var revision_cost = ''
        if (revisions <6){
          revision_cost = 0
        }else if (revisions <11){
          revision_cost = 1
        }else if (revisions <16){
          revision_cost = 2
        }else if (revisions <21){
          revision_cost = 3
        }else{
          revision_cost = 4
        }
        const val = pages * platform + seo * 500 + db * 1200 + ecommerce * 1000 + hosting * 5000 + responsive * 1000 + revision_cost * 500
        setPrice(val)
        
      },[pages,revisions,seo,db,ecommerce,hosting,responsive,platform]);

  return(

    <div className="container pricing_calculator_container">
        <div className='price_cal_div'>
          <h3 className='price_cal_title' id={'pricing'}>
              Price Calculator
          </h3>
          <p>Select the features that you want to include in your website</p>
          <Row className='container justify-content-start'>
              <Row>
                <Col lg={2} md={4} sm={5} xs={12}>
                Number of Pages 
                </Col>
                <Col lg={4} md={5} sm={6} xs={12}>
                <Slider defaultValue={10} value={pages} onChange={(e)=>{setPages(e.target.value)}} aria-label="Default" valueLabelDisplay="auto" />
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={3} md={5} sm={6} xs={12}>
                Number of Revisions
                </Col>

                <Col lg={4} md={5} sm={6} xs={12}>
                  <Slider
                  aria-label="Revisions"
                  value={revisions} onChange={(e)=>{setRevision(e.target.value)}}
                  // getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={5}
                  marks
                  min={0}
                  max={25}
                  />
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={4} md={7} sm={8} xs={10}>
                    <p className=''> Search Engine Optimization (SEO) </p>
                </Col>

                <Col lg={1} md={3} sm={3} xs={2}>
                    <Checkbox  onChange={(e)=>{setSEO(e.target.checked)}}/>    
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={4} md={7} sm={8} xs={10}>
                    <p className='mt-2'>Database Integration </p>
                </Col>

                <Col lg={1} md={3} sm={3} xs={2}>
                    <Checkbox onChange={(e)=>{setDB(e.target.checked)}}/>    
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={4} md={7} sm={8} xs={10}>
                  <p className='mt-2'>Ecommerce Functionality </p>
                </Col>

                <Col lg={1} md={3} sm={3} xs={2}>
                <Checkbox onChange={(e)=>{setEcommerce(e.target.checked)}}/>    
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={4} md={7} sm={8} xs={10}>
                  <p className='mt-2'>Hosting and Domain (1 year)</p>
                </Col>

                <Col lg={1} md={3} sm={3} xs={2}>
                <Checkbox onChange={(e)=>{setHosting(e.target.checked)}}/>    
                </Col>
              </Row>

              <hr />
              
              <Row>
                <Col lg={4} md={7} sm={8} xs={10}>
                  <p className='mt-2'>Responsive Design</p>
                </Col>

                <Col lg={1} md={3} sm={3} xs={2}>
                <Checkbox onChange={(e)=>{setResponsive(e.target.checked)}}/>    
                </Col>
              </Row>

              <hr />

              <Row>
                <Col lg={2} md={7} sm={8} xs={10}>
                  <p className='mt-3'>Platform</p>
                </Col>
                
                <Col className='mt-3' lg={4} md={5} sm={6} xs={12}>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Platform</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Platform"
                    value={platform} onChange={(e)=>{setPlatform(e.target.value)}}
                >
                    <MenuItem value={1500}>Code</MenuItem>
                    <MenuItem value={900}>No-Code</MenuItem>
                </Select> 
                </FormControl>
                </Col>
              </Row>

          </Row>

          <h4 className='cost_text'>Your Cost = {price} rs</h4>
        </div>
    </div>
  )
}
{/* <img src={'https:' + thumbnail.fields.file.url} width="100%" height="200px" alt='' /> */}