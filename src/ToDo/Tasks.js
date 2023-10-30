import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import style from "./style.module.css";

class Tasks extends React.Component {

      


      render() {

            let {todos, Delete, Complete, ShowHide } = this.props

            return (
                  <>
                        <Row>
                              <Col>
                                    {todos.map((item, index) => {
 
                                          return (

                                                <Card key={item.id}
                                                className={style.card}
                                                >
                                                      
                                                      <Card.Body className={style.body} >
                                                            <Card.Title>Task ~ {index + 1} ~ </Card.Title>
                                                            <Card.Text className = {item.completed ? style.on : style.off}>
                                                                 {item.showHide ? item.text : item.text.slice (0,5) + "..."}
                                                            </Card.Text>

                                                            <div className={style.buttons}>
                                                                  <Button 
                                                                        variant="outline-info" 
                                                                        onClick={() => Delete(item.id)}>
                                                                        Delete
                                                                  </Button>

                                                                  <Button 
                                                                        variant="outline-info" 
                                                                        >
                                                                        {item.edit ? "Editing" : "Edit"}
                                                                  </Button>

                                                                  <Button 
                                                                        variant="outline-info" 
                                                                        onClick={() => Complete(item.id)}>
                                                                        Complete
                                                                  </Button>

                                                                  <Button 
                                                                        variant="outline-info" 
                                                                        onClick={() => ShowHide (item.id)}>
                                                                              
                                                                        {item.showHide ? "Less" : "Read more"}
                                                                  </Button>
                                                            </div>

                                                      </Card.Body>
                                                </Card>
                                          )

                                    })}
                              </Col>
                        </Row>
                  </>
            )
      }
}

export default Tasks;