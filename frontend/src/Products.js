import { Container, Row, Col, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function Products() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(" http://localhost:3001/products")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setItems(result)
                },
                (error) => {
                    setIsLoaded(true)
                }
            )
    }, [])

    const rows = [...Array(Math.ceil(items.length / 4))]
    const productRows = rows.map((row, idx) => items.slice(idx * 4, idx * 4 + 4));
    const content = productRows.map((row, idx) => (
        <Row key={idx}>
            { row.map(product => <Col key={product.name} style={{ cursor: "pointer", padding: 0, maxWidth: "25%" }}>
                <Card style={{ margin: 10, maxWidth: "24rem" }}>
                    <Card.Img variant="top" src={product.image} style={{ backgroundColor: "#F5F5F5", width: "100%", height: "15vw", objectFit: "cover" }} />
                    <Card.Body>
                        <Card.Title style={{ fontSize: "15px" }}>{product.name}</Card.Title>
                        <Card.Text>
                            From {product.price.symbol} {product.price.amount}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>)
    );

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container fluid className="" style={{
                fontSize: "15px", maxWidth: '80%', marginLeft: "10%", marginRight: "10%", marginTop: 30, marginBottom: 30
            }
            }>
                { content}
            </Container >
        )
    }
}

export default Products;