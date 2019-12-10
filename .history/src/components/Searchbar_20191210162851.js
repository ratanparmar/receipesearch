import React,{ Component } from 'react'
import {Form, FormControl,FormGroup,FormLabel,Button} from 'react-bootstrap'

class Searchbar extends Component{
    render(){
        // Use FormLable in place off ControlLabel 
        return(
            <Form inline>
                <FormGroup>
                    <FormLabel><b>Ingredients</b></FormLabel>
                    {''}
                        <FormControl type="text" placeholder='garlic,chicken'/>  
                </FormGroup>
                {''}
                <FormGroup>
                    <FormLabel><b>Dish</b></FormLabel>
                    {''}
                    <FormControl type="text" placeholder='butter chicken'/>
                </FormGroup>
                {''}
                <Button>Submit</Button>
            </Form>
        )
    }
}
export default Searchbar;