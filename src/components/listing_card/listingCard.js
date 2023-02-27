import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import "./listing_card.css"

function BasicExample(props) {
    const {description,photos,price,location,id,user_id} = props.obj
    console.log(props.obj)
    return (
      <Card style={{ width: '20rem' }}>
        <Carousel wrap ={false} interval={null}>
            <Carousel.Item wrap ={false} >
                <Card.Img variant="top" src={photos.split(',')[0]} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item  wrap ={false} interval={null}>
                <Card.Img variant="top" src={photos.split(',')[1]} alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item wrap ={false} interval={null}>
                <Card.Img variant="top" src={photos.split(',')[2]} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
        
        <Card.Body>
          <Card.Title>{location}</Card.Title>
          <Card.Text>
            {description}
            <br/>
            {"Mounthy " +'$'+ price}
          </Card.Text>
          <div className='card_b'>
            <Button variant="primary">Go somewhere</Button>
            <Button variant="primary">Go somewhere</Button>
          </div>
          
        </Card.Body>
      </Card>
    );
  }
  
  export default BasicExample;