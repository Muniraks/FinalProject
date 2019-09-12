import React, {
    Component
} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import '../components/styles/newProduct.css';

import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export class NewProduct extends Component {
constructor(props){
    super(props)
    this.state = { 
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

    // super(props);
    // this.state = {
    //     modal: false
    // };

    // this.toggle = this.toggle.bind(this);
}

// toggle() {
//     this.setState(prevState => ({
//         modal: !prevState.modal
//     }));

// }

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
            
            const getUserToken = localStorage.getItem('token')
            console.log(getUserToken)
            const token = {
                headers: {
                    Authorization: `bearer ${getUserToken}`
                }
            }
            // const getOwnerId = localStorage.getItem('ownerId')
            // console.log(getOwnerId)
            console.log(getUserToken)
            
            axios.post('http://localhost:3000/products', this.state, token)
            .then(res => {
                console.log(res)
                this.props.history.push('/products');
            })
            .catch(err => {
                console.log(this.state)
                console.log(err)
            })
        }
    render() {
        const {name, price, type, brand, stock, condition, image,productDescription, tags } = this.state
        return ( 
            <div>
                
                <div className="sell-form">
                <h2> Sell your product with THE STORE</h2>
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
                        <Button className="submit-product-btn" type='submit'>submit</Button>
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
export default withRouter(NewProduct);