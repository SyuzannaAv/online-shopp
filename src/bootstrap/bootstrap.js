import React from "react";
import Css from "./css.module.css";
import { Form, InputGroup, Button, Card } from "react-bootstrap";

class Bootstrap extends React.Component {

      state = {
            value: "",
            tasks: [],

      }

      handleChange = (evt) => {
            this.setState({
                  value: evt.target.value
            })
      }

      Add = () => {

            let add = {
                  text: this.state.value,
                  id: Math.random(),
                  completed: false,
                  edit: false
            }

            let newTask = [...this.state.tasks, add]

            this.setState({
                  tasks: newTask,
                  value: ""
            })
      }

      Delete = (id) => {

            let remove = this.state.tasks.filter(item => item.id !== id)
         
            this.setState ({
                  tasks: remove
            })
      }

      keyUp = (evt) => {
            if (evt.key === "Enter") {
                  this.Add()
            }
            
      }

      render() {

            let tasks = this.state.tasks

            return (
                  <InputGroup className= {Css.input} >

                        <Form.Control className="form"
                              value={this.state.value}
                              placeholder="Add New Task"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                              onChange={this.handleChange}
                              onKeyUp={this.keyUp}
                        />

                        <Button variant="outline-primary"
                              id="button-addon2"
                              onClick={this.Add}>
                              Button
                        </Button>         
                

                  {tasks.map((item) => {

                        let text = item.text.split (" ");
                           
                              return (
                                    <div key={item.id}>
                                          <Card className={Css.card}>
                                                <Card.Body>
                                                      <Card.Title> {text[0] + "..."} </Card.Title>
                                                      <Card.Text>
                                                           {item.text}
                                                      </Card.Text>
                                                      <Button className={Css.button} variant="primary" onClick={()=> this.Delete (item.id)}>Delete</Button>

                                                      <Button className={Css.button} variant="primary">Complete</Button>
                                                      
                                                      <Button className={Css.button} variant="primary">Edit</Button>
                                                </Card.Body>
                                          </Card>
                                    </div>
                              )
                        })
                  }
                 </InputGroup>

            )
      }
}

export default Bootstrap;