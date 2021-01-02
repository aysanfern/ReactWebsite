import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export function About(){
    return(
        <Jumbotron>
            <h2>Great Value Vintage Bags and Clothes</h2>
        <p>
            I have a shop on Depop in which you can find more great items. Click on the link below!
        </p>
        <Button variant="primary" href='https://www.depop.com/lauracreativewonders/'>Visit Shop</Button>
        
        </Jumbotron>
        
    )
}