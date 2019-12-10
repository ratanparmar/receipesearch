import React,{ Component } from 'react'
import {Form, FormControl,FormGroup,FormLabel,Button} from 'react-bootstrap'

class Searchbar extends Component{
    render(){
        // Use FormLable in place off ControlLabel 
        return(
            <Form inline>
                <FormGroup>
                    <FormLabel>Ingredients</FormLabel>
                    {''}
                        <FormControl type="text" placeholder='garlic,chicken'/>  
                </FormGroup>
                {''}
                <FormGroup>
                    <FormLabel>Dish</FormLabel>
                    {''}
                    <FormControl type="text" placeholder='butter chicken'/>
                </FormGroup>
                {''}
                <FormLabel>
                <Button>Submit</Button>
                </FormLabel>
                
            </Form>
        )
    }
}
export default Searchbar;