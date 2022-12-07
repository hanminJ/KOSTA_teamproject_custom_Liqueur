import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        style={{ height: "400px" }}
          className="d-block w-100"
          src="https://images.chosun.com/resizer/24xJRHywJLx7WR7Lhd9b4qm_OcU=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/ICWY4NN5YRCUPPDPYPQSEXRAZY.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{ height: "400px" }}
          className="d-block w-100"
          src="https://image5jvqbd.fmkorea.com/files/attach/new/20201206/486616/2019694562/3243841350/9dfe62d793b7ecbb3e67ab8352d1c3e9.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{ height: "400px" }}
          className="d-block w-100"
          src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/983/db28fa09a19f46e6d64fa57e296a74c3_res.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;