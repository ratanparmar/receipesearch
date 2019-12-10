import React,{ Component } from 'react'
import {Form, FormControl,FormGroup,FormLabel,Button} from 'react-bootstrap'

class Searchbar extends Component{
    constructor(){
        super()

        this.state = {
            ingredients:'',
            dish:''
        }
        

    }
    search(){
        const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`;
        fetch(url,{
            method:'GET'
        })
        .then(res=>res.json())
        .then(data=> data)
        .then(json=> console.log(json));
        //console.log('state',this.state);
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
export default Searchbar;