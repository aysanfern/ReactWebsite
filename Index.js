import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Container from 'react-bootstrap/Container'
import {useState} from 'react'
import {New} from './newIn'
import {Style} from '../style/styles.css'
import {Clothes} from './Clothes'


export function Index(){
    const [key, setKey] = useState('home')
    return (
       

        <Container>
<Tabs
className="tabs"
id="controlled-tab-"
activeKey={key}
onSelect={(key) => setKey(key)}
>
<Tab  eventKey="home" title="Bags & Accessories">
<New/>
</Tab>
<Tab eventKey="profile" title="Clothes">
<Clothes/>
</Tab>
</Tabs>
</Container>
    )
}

