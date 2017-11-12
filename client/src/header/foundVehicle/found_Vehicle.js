import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Text, NestedForm } from 'react-form';
//import logo from './logo.svg';
//import './App.css';

const Questions = () => (
   <NestedForm field="questions">
     <Form>
       { formApi => (
         <div>
           <label htmlFor="color">Engine Number:</label>
           <Text field="color" id="color" />
           <label htmlFor="food">Chassis number:</label>
           <Text field="food" id="food" />
           <label htmlFor="car">Make of vehicle:</label>
           <Text field="car" id="car" />
           <label htmlFor="color">Model:</label>
           <Text field="color" id="color" />
           <label htmlFor="food">Color:</label>
           <Text field="food" id="food" />
           <label htmlFor="car">Found at Location:</label>
           <Text field="car" id="car" />
         </div>
       )}
     </Form>
   </NestedForm>
 );



class FoundVehicle extends Component {
  constructor( props ) {
     super( props );
     this.state = {};
   }
  render() {
    return (
      <div className="tab">
          <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form4">
                <label htmlFor="firstName3">Registration / Vehicle Number :</label>
                <Text field="firstName" id="firstName3" />
                <Questions />
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
              </form>
            )}
          </Form>
        </div>
    );
  }
}
export default FoundVehicle;
