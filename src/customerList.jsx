import { Component } from "react";
import { CustomerInfo } from "./customerInfo";
import { useNavigate } from "react-router-dom";

class CustomerList extends Component {

    state = {
        customers: []
    }

    render() {
        return (
            <div className="row" style={{ gap: '2rem', margin: '2rem' }}>
                {this.state.customers.map((item, ind) =>
                    <div className="col-lg-5 p-0" key={item.id}>
                        <CustomerInfo info={item} onItemCopy={this.onItemCopy} onItemDelete={() => this.onItemDelete(ind)}>
                            <button className="btn btn-info btn-sm" onClick={() => this.onBtnClick(item)}>Info</button>
                        </CustomerInfo>
                    </div>)}
            </div>
        )
    }

    componentDidMount() {
        this.getCustomersList();
    }

    onBtnClick = (item) => {
        const { navigate } = this.props;
        navigate('/customer-wiki/' + item.name);
    }

    onItemCopy = (item, action = '') => {
        const custArray = [...this.state.customers];
        const copyItem = JSON.parse(JSON.stringify(item));
        copyItem.id = Math.random();
        custArray.push(copyItem);
        this.setState({ customers: custArray });
    }

    onItemDelete = (ind) => {
        const custArray = [...this.state.customers];
        custArray.splice(ind, 1)
        this.setState({ customers: custArray });
    }

    getCustomersList() {
        fetch('http://localhost:3000/customers').then(re => re.json()).then(customers => {
            this.setState({ customers })
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