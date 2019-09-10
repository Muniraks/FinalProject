import React, { Component } from 'react';
import '../components/styles/SellForm.css';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class SellForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

 

    render() {
        return (
            <div>

                <div className="sell-form">
                    <Form>
                        <Label>Name</Label>
                        <Input placeholder="" className="" />

                        <Label>Price</Label>
                        <Input type="number" placeholder="" className=""> </Input>

                        <Label>Brand</Label>
                        <Input placeholder="" className=""></Input>

                        <Label>Product description</Label>
                        <Input placeholder="" className="" type="textarea"></Input>

                        <Label>Stock</Label>
                        <Input placeholder="" className=""></Input>

                        <Label>Condition</Label>
                        <Input type="checkbox" ></Input>
                        <Input type="checkbox" ></Input>


                        <FormGroup>
                            <Label for="exampleFile">Image</Label>
                            <Input type="file" name="file" id="exampleFile" />
                        </FormGroup>
                    </Form>



                    <Button className="add-brand-btn" onClick={this.toggle}>Create a brand</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Create a new Brand</ModalHeader>
                        <ModalBody>
                            <Form>
                                <Label>Brand Name</Label>
                                <Input placeholder="" className="" />

                                <Label>Brand Image</Label>
                                {/* <Input type="file" name="file" id="exampleFile" /> */}
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button className="add-brand-btn" onClick={this.toggle}>Create</Button>{' '}
                            <Button className="add-brand-btn" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>


                </div>
            </div>
        )
    }
}

export default SellForm
