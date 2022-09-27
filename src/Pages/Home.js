import React, { useEffect, useState } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col, InputGroup, FormControl  } from 'react-bootstrap'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import { BiSearch } from 'react-icons/bi';
import SearchFilter from 'react-filter-search';
import { ProductCart } from '../Components/ProductCart';


export const Home = () => {

    const [theme] = useThemeHook();

    const [searchInput, setSerchInput] = useState(""); 

   const [ProductData, setProductData] = useState([]);

   async function getResponse(){
    const res = await fetch('https://fakestoreapi.com/products')
                   .then(res => res.json());
                   setProductData(await res);
   }


   useEffect(() => {
    getResponse();
    console.log(ProductData)
   },[])

  return (
    <>
      
  <Container className="py-4">
            <Row className="justify-content-center">
                <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                    <h1 className={theme? 'text-light my-5': 'text-black my-5'}>Search products</h1>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className={theme? 'bg-black text-dark-primary': 'bg-light text-light-primary'}>
                            <BiSearch size="2rem" />
                        </InputGroup.Text>
                        <FormControl 
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e)=> setSerchInput(e.target.value)}
                            className={theme? 'bg-light-black text-light': 'bg-light text-black'}
                        />
                    </InputGroup>
                </Col>
                <SearchFilter 
                    value={searchInput}
                    data={ProductData}
                    renderResults={results =>(
                        <Row className="justify-content-center">
                             {results.map((item, i)=>(
                                // <h1>{item.title}</h1>
                                <ProductCart data={item} key={i} />
                            ))}
                        </Row>
                    )}
                />
                
            </Row>
        </Container>


    </>
  )
}
