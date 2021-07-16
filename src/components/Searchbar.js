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
        const url = `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${ingredients},${dish}`;
        fetch(url,{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=> data)
        .then(json=>{
            // console.log(json)
             this.props.setrecipes(json.hits)
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