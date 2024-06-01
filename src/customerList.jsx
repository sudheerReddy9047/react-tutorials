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
                {this.state.customers.map((item, ind) =>
                    <div className="col-lg-5 p-0" key={item.id + '_' + ind}>
                        <CustomerInfo info={item} onItemCopy={this.onItemCopy} onItemDelete={() => this.onItemDelete(ind)}>
                            <button className="btn btn-info btn-sm" onClick={() => this.onBtnClick(item, 'info')}>Info</button>
                            <button className="btn btn-primary btn-sm ml-2" onClick={() => this.onBtnClick(item, 'save')}>Save</button>
                        </CustomerInfo>
                    </div>)}
            </div>
        )
    }

    onBtnClick = (item, action) => {
        alert('action is ' + action + ' and item is ' + JSON.stringify(item));
    }

    onItemCopy = (item, action = '') => {
        console.log('action :', action);
        const custArray = [...this.state.customers];
        custArray.push(item);
        this.setState({ customers: custArray });
    }

    onItemDelete = (ind) => {
        console.log('ind :', ind);
        const custArray = [...this.state.customers];
        custArray.splice(ind, 1)
        this.setState({ customers: custArray });
    }
}