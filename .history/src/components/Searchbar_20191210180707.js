import React,{ Component } from 'react'
import {Form, FormControl,FormGroup,FormLabel,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import setrecipes from '../actions'
class Searchbar extends Component{
    constructor(){
        super()

        this.state = {
            ingredients:'',
            dish:''
        } 

    }
    search(){
        const {ingredients,dish} = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        fetch(url,{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=> data)
        .then(json=>{
             this.props.setrecipes(json.results)
        })
        
    }
    render(){
        // Use FormLable in place off ControlLabel 
        return(
            <Form inline>
                <FormGroup>
                    <FormLabel><b>Ingredients</b></FormLabel>
                    {''}
                    <FormControl 
                    type="text" 
                    placeholder='garlic,chicken'
                    onChange={(e)=> this.setState({ingredients:e.target.value})} />  
                </FormGroup>
                {''}
                <FormGroup>
                    <FormLabel><b>Dish</b></FormLabel>
                    {''}
                    <FormControl 
                    type="text" 
                    placeholder='butter chicken'
                    onChange={(e)=> this.setState({dish:e.target.value})}
                    />
                </FormGroup>
                {''}
                <Button onClick={()=> this.search()}>Submit</Button>
            </Form>
        )
    }
}


export default connect(null,{setrecipes})(Searchbar);