import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../components/styles/Brands.css';
import axios from 'axios'
 class Brands extends Component {
     state = { brandsLetters: []}
    componentDidMount(){
        axios.get(`http://localhost:3000/brands`)
        .then(res => {
            // console.log(res.data.brands)
            const brands = res.data.brands.map(brand => brand.name)
            const brandsId = res.data.brands.map(brand => brand._id)
            // console.log(brands)
            // console.log(brandsId)
            const letter = [...'abcdefghijklmnopqrstuvwxyz']
            const brandsLetters = letter.map((letter, index) => {
                
                const filteredBrands = brands.filter(brand => brand.charAt(0) === letter);
                const brandId = brandsId.map(brand => {
                    console.log(brand)
                })
                const brandsItems = filteredBrands.map( (brand, index) => <Link to={`/BrandProfile/${brandsId[index]}`}><li key={index}> {brand}</li></Link>);
                return brandsItems.length !== 0 ? <div key={index} className="brands-list-group"> <h4>{letter}</h4><ul>{brandsItems}</ul></div> : false;
                });
                this.setState({brandsLetters})
            })
        .catch(err => {
            console.log(err)
        })
    }
   
    render() {
        return (
            <div>
     <h1 className="brands-title">BRANDS A-Z</h1>
                <div className="brands-list">
                    {this.state.brandsLetters}
                </div>
                </div>
            
        )
    }
}
export default Brands;