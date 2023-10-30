import React from "react";
import { Container, Col, Row, InputGroup, Form, Button } from "react-bootstrap";
import Tasks from "./Tasks";
import style from "./style.module.css";

class ToDo extends React.Component {

      state = {
            value: "",
            tasks: []
      }

      Change = (evt) => {


            this.setState({
                  value: evt.target.value
            })
      }

      Enter = (evt) => {
            if (evt.key === "Enter") {
                  this.Add()
            }

      }

      Add = () => {


            if (this.state.value === "") {
                  alert ("Please enter your task")
            }
            
            else { 
                let add = {
                  text: this.state.value,
                  id: Math.random(),
                  completed: false,
                  edit: false,
                  showHide: false,
            }
 
            let newTask = [add, ...this.state.tasks]

            this.setState({
                  tasks: newTask,
                  value: ""
            })  
            }
     
      }

      Delete = (id) => {

            let remove = this.state.tasks.filter(item => item.id !== id)

            this.setState({
                  tasks: remove
            })
      }


      DeleteAll = () => {

            this.setState ({
                  tasks: []
            })
      }


      Complete = (id) => {

            let complete = [...this.state.tasks].map(item => {
                        if (item.id === id) {
                              item.completed = !item.completed
                  }

                        return item;
            })

            this.setState ({
                  tasks: complete      
            })
      }

     

      ShowHide = (id) => {

            let show = this.state.tasks.map (item => {
                  if (item.id === id ) {
                        item.showHide = !item.showHide
                  }

                  return item;
            })

            this.setState ({ 

                  tasks: show
            })
      }

    

      render() {
            return (
                  <>
                        <Container>
                              <Row>
                                    <Col>
                                    <h1>To Do List</h1>
                                          <InputGroup className= {style.input} >
                                                <Form.Control
                                                      className= {style.form}
                                                      placeholder="Add your task"
                                                      value={this.state.value}
                                                      onChange={this.Change}
                                                      onKeyUp={this.Enter}
                                                   
                                                />

                                                <Button 
                                                      variant="outline-info" 
                                                      id="button-addon2"
                                                      onClick={this.Add}>
                                                      Add
                                                </Button>

                                                <Button 
                                                variant="outline-info" 
                                                id="button-addon2"
                                                onClick={this.DeleteAll}>
                                                      Delete All
                                                </Button>
                                          </InputGroup>
                                    </Col>
                              </Row>
                        </Container>

                        < Tasks 
                              todos = {this.state.tasks} 
                              Delete = {this.Delete}
                              Complete = {this.Complete}
                              Edit = {this.Edit}
                              ShowHide = {this.ShowHide}
                        />
                  </>
            )
      }
}

export default ToDo;