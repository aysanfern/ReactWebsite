import {items} from './newIn'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const style1 = {
    paddingTop:'30px',
    paddingLeft:'1px',
    width:'400px'
}


export function ItemDetail({match}){
    console.log(match)
    console.log(match.params.id)
    var idsp = match.params.id -1
    console.log(items[idsp])
    return(
        <>
        <div className='alignitems'>
        <Image style={style1} src= {items[idsp].img}/>
        <h1>
            {items[idsp].title}
        </h1>
        </div>
        <div className='button'>
        <Button role="link">
        Purchase On Depop
        </Button>
        </div>
        </>
        
    )
}