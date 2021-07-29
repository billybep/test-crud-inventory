import React, { useState } from 'react'
import { Card, Container, Row, Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

const Home = () => {

  const history = useHistory()
  const [modalShow, setModalShow] = useState(false)

  return(
    <>
      <h1 
        style={{ 
          color: '#D78100',
          marginTop: '4rem',
          fontSize: '4rem'
        }}>
        INVENTORY
      </h1>

      <Container 
        style={{
          marginTop: '8rem',
        }}
      >
        <Row>
          <Card 
            border="warning" 
            style={{ 
              width: '18rem',
              cursor: 'pointer',
              margin: '.5rem'
            }}
            onClick={ _ => setModalShow(true) }
          >
            <Card.Body>
              <Card.Title>ADD ITEM</Card.Title>
              <Card.Text>
                Create new item
              </Card.Text>
            </Card.Body>
          </Card>

          <Card 
            border="warning" 
            style={{ 
              width: '18rem',
              cursor: 'pointer',
              margin: '.5rem'
            }}
            onClick={ _ => history.push('/items')}
            >
            <Card.Body>
              <Card.Title>SHOW ITEM</Card.Title>
              <Card.Text>
                List item, Update, and Delete items
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ADD FORM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Add New Item</h4>
          <p>
            Form Untuk add item
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Home