import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


import bag1 from '../images/bags/bag1.jpg'
import bag2 from '../images/bags/bag2.jpg'
import bag3 from '../images/bags/bag3.jpg'
import bag4 from '../images/bags/bag4.jpg'


export const items = [
    {   key:1,
        img: bag1,
        title:'Hand bag'
    },
    {
        key:2,
        img:bag2,
        title:'Jeep Rucksack Green'
    },
    {
        key:3,
        img:bag3,
        title:'Jeep Rucksack Navy'
    },
    {
        key:4,
        img:bag4,
        title:'Hand Bag'
    },
]

const listItems= items.map((item)=>
<Link to={`shop/${item.key}`}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={item.img} />
  <Card.Body>
    <Card.Title className='better'>{item.title}</Card.Title>
  </Card.Body>
</Card>
</Link>


)














export function New(){
    return (
        
        <Container>
            <CardGroup>
       {listItems}
       </CardGroup>

        </Container>



    ) 

}