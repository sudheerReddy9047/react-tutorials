import React, { Component } from "react";

export class MainContent extends Component {
    state = {
        pageTitle: "Customers Count : ",
        customersCount: 5,
        customers: [
            { id: 51, name: 'Alpha', price: 10, quantity: 2 },
            { id: 52, name: 'Beta', price: 10, quantity: 2 },
            { id: 53, name: 'Gama', price: 10, quantity: 2 },
        ],
        headers: [
            {
                label: '#',
                value: 'id'
            },
            {
                label: 'Product Name',
                value: 'name'
            },
            {
                label: 'Price',
                value: 'price'
            },
            {
                label: 'Quantity',
                value: 'quantity'
            },
            {
                label: 'Net Price',
                value: 'netPrice'
            }
        ]
    };

    render() {
        return (
            <React.Fragment>
                <h1>
                    {this.state.pageTitle}
                    <span className="badge badge-secondary">
                        {this.state.customersCount}
                    </span>
                </h1>
                <button className="btn btn-primary" onClick={this.onRefreshClick}>Refresh</button>
                <table className="table table-bordered">
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            {this.state.headers.map((item, hid) => <th key={hid}>{item.label}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((customer, cid) => <tr key={customer.id + '_' + cid}>{this.state.headers.map(header => <td style={{ textAlign: 'center' }} key={customer.id + '_' + header.value}>{this.getCellValue(customer, header, cid)}</td>)}</tr>)
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total :</td>
                            <td>{this.getGrossPrice()}</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    onRefreshClick = () => {
        this.setState({ customersCount: 7 });
    }

    getCellValue = (customer, header, ind) => {
        if (['id', 'name'].includes(header.value)) {
            return <span>{customer[header.value]}</span>;
        } else if (['price', 'quantity'].includes(header.value)) {
            return <input type="number" value={customer[header.value]} className="form-control" onChange={($event) => this.onValueChange(customer, header, $event, ind)} />
        } else {
            return customer.price * customer.quantity;
        }
    }


    onValueChange = (customer, header, event, ind) => {
        const custArray = this.state.customers;
        custArray[ind][header.value] = event.target.value;
        this.setState({ customers: custArray });
    }

    getGrossPrice() {
        const totSum = this.state.customers.reduce((sum, item) => {
            return sum + (+item.price * +item.quantity)
        }, 0);
        console.log('totSum :', totSum);
        return totSum;
    }
}