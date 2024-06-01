import { Component } from "react";
import { CustomerInfo } from "./customerInfo";

export class CustomerList extends Component {

    state = {
        customers: [
            { id: 51, name: 'Alpha', price: 10, quantity: 2 },
            { id: 52, name: 'Beta', price: 10, quantity: 2 },
            { id: 53, name: 'Gama', price: 10, quantity: 2 },
        ]
    }

    render() {
        return (
            <div className="row" style={{ gap: '2rem', margin: '2rem' }}>
                {this.state.customers.map(item => <div className="col-5 p-0" ><CustomerInfo key={item.id} info={item} /></div>)}
            </div>
        )
    }
}