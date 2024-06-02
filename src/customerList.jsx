import React, { Component } from "react";
import { CustomerInfo } from "./customerInfo";
import { useNavigate } from "react-router-dom";

class CustomerList extends Component {

    state = {
        customers: [],
        currPage: 1,
        totalPages: 0
    }

    render() {
        return (
            <React.Fragment>
                <div className="row" style={{ gap: '1rem', margin: '1rem' }}>
                    {this.state.customers.slice(5 * (this.state.currPage - 1), 5 * this.state.currPage).map((item, ind) =>
                        <div className="col-lg-3 p-0" key={item.id}>
                            <CustomerInfo info={item} onItemCopy={this.onItemCopy} onItemDelete={() => this.onItemDelete(ind)}>
                                <button className="btn btn-info btn-sm" onClick={() => this.onBtnClick(item)}>Info</button>
                            </CustomerInfo>
                        </div>)
                    }
                </div>
                <div className="float-right">
                    {this.state.currPage > 1 && <button className="btn btn-primary btn-sm mx-2" onClick={this.goToPreviousPage}>Previous</button>}
                    {this.state.currPage < this.state.totalPages && <button className="btn btn-primary btn-sm mx-2" onClick={this.goToNextPage}> Next</button>}
                </div>
            </React.Fragment>
        )
    }

    goToPreviousPage = () => {
        if (this.state.currPage > 1) {
            this.setState({ currPage: this.state.currPage - 1 });
        }
    }

    goToNextPage = () => {
        if (this.state.currPage < this.state.totalPages) {
            this.setState({ currPage: this.state.currPage + 1 });
        }
    }

    componentDidMount() {
        this.getCustomersList();
    }

    onBtnClick = (item) => {
        const { navigate } = this.props;
        navigate('/customer-wiki/' + item.name);
    }

    onItemCopy = (item, action = '') => {
        const copyItem = JSON.parse(JSON.stringify(item));
        copyItem.id = +(Math.random() * 100).toFixed(0);
        fetch('http://localhost:3000/customers', {
            method: 'POST',
            body: JSON.stringify(copyItem),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(re => re.json()).then(customers => {
            this.getCustomersList();
        })
    }

    onItemDelete = (ind) => {
        const item = this.state.customers[ind];
        fetch('http://localhost:3000/customers/' + item.id, {
            method: 'DELETE',
        }).then(re => re.json()).then(customers => {
            this.getCustomersList();
        })
    }

    getCustomersList() {
        fetch('http://localhost:3000/customers').then(re => re.json()).then(customers => {
            this.setState({ customers, currPage: 1, totalPages: customers.length / 5 });
        })
    }
}

function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

export default withNavigation(CustomerList);