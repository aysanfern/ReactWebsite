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
        title:'bag'
    },
    {
        key:2,
        img:bag2,
        title:'clothes'
    },
    {
        key:3,
        img:bag3,
        title:'clothes'
    },
    {
        key:4,
        img:bag4,
        title:'clothes'
    },
]
const listItems= items.map((item)=>


<Link to={`shop/${item.key}`}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={item.img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
  </Card.Body>
</Card>
</Link>


)














export function Clothes(){
    return (
        
        <Container>
            <CardGroup>
       {listItems}
       </CardGroup>

        </Container>



    ) 

}