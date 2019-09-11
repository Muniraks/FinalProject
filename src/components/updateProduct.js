import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
 
import axios from 'axios';

export class UpdateProduct extends Component {

        state = { 
        product:{
        name:'',
        price: 0,
        type:'',
        brand:'',
        stock: 0,
        condition:'',
        image:'',
        productDescription:'',
        tags:'',
        owner:localStorage.getItem('ownerId')
        }
        }

    componentDidMount() {
        const id = this.props.match.params.id;
        const product = this.props.findProduct(id);
        this.setState({ product })
    }
    changeHandler = (e) => {
        const { name, value} = e.target;
        let newProduct = {...this.state.product}
        if(name === 'price' || name === 'stock') {
            newProduct[name] = parseInt(value)
        } else {
            newProduct[name] = value
        }
        // this.setState({ [e.target.name] : e.target.value})
        this.setState({product: newProduct})
         console.log(this.state);
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        
        const getUserToken = localStorage.getItem('userToken')
        console.log(getUserToken)
        const token = {
            headers: {
                Authorization: `bearer ${getUserToken}`
            }
        }
        // const getOwnerId = localStorage.getItem('ownerId')
        // console.log(getOwnerId)
        console.log(getUserToken)
        const { id } = this.props.match.params;
        axios.patch('http://localhost:3000/products/' + id, this.state, token)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(this.state)
            console.log(err)
        })
    }

    render() {
        const {name, price, type, brand, stock, condition, image,productDescription, tags } = this.state.product

        return (
            <div>
            <div className="sell-form">
            <Form onSubmit={this.submitHandler}>
                <Label>Name</Label>
                <Input placeholder="" className="" name="name" value={name} onChange= {this.changeHandler} />

                <Label>Price</Label>
                <Input type="number" placeholder="" name="price" className="" value={price} onChange= {this.changeHandler}> </Input>

                <Label>Type</Label>
                <Input placeholder="" className="" name="type" value={type} onChange= {this.changeHandler}></Input>

                <Label>Brand</Label>
                <Input placeholder="" className="" name="brand" value={brand} onChange= {this.changeHandler}></Input>

                <Label>Stock</Label>
                <Input placeholder="" className="" name="stock" value={stock} onChange= {this.changeHandler}></Input>

                <Label>Condition</Label>
                <Input placeholder="" className="" name="condition" value={condition} onChange= {this.changeHandler}></Input>

                <Label>Product description</Label>
                <Input placeholder="" className="" name="productDescription" type="textarea" value={productDescription} onChange= {this.changeHandler}></Input>

                <Label>Tags</Label>
                <Input placeholder="" className="" name="tags" value={tags} onChange= {this.changeHandler}></Input>

                <FormGroup>
                    <Label for="exampleFile">Image</Label>
                    <Input type="text" value={image} name="image" onChange= {this.changeHandler}  />
                </FormGroup>
                <Button type='submit'>submit</Button>
            </Form>

            <Button className="add-brand-btn" onClick={this.toggle}>Create a brand</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Create a new Brand</ModalHeader>
                <ModalBody>
                    <Form>
                        <Label>Brand Name</Label>
                        <Input placeholder="" className="" />

                        <Label>Brand Image</Label>
                        <Input type="text"  id="exampleFile" />
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

export default UpdateProduct
