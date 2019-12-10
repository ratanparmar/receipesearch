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
                    onChange={(e)=> this.state.setState({ingredients=e.target.value})} />  
                </FormGroup>
                {''}
                <FormGroup>
                    <FormLabel><b>Dish</b></FormLabel>
                    {''}
                    <FormControl 
                    type="text" 
                    placeholder='butter chicken'
                    />
                </FormGroup>
                {''}
                <Button>Submit</Button>
            </Form>
        )
    }
}
export default Searchbar;