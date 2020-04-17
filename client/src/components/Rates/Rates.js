import React, { Component } from 'react';
import './Rates.css';
import rates from '../../api/rates';

class Rates extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: '',
            fromMoneyText: 'EUR',
            toMoneyText: 'USD',
            result: '',
            displayResult:false,
            fromMoneyValue:'',
            toMoneyValue:''
        }
    }
    amountHandler = (e) => {
        this.setState({displayResult:false});
        this.setState({ amount: e.target.value });
    }
    firstValueHandler = (e) => {
        this.setState({displayResult:false})
        this.setState({ fromMoneyText: e.target.value });

    }
    secondValueHandler = (e) => {
        this.setState({displayResult:false})
        this.setState({ toMoneyText: e.target.value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.state.fromMoneyText === 'EUR' && this.state.toMoneyText === 'EUR'){ //to prevent fetching
            this.setState({result:1});
            
        }else {
            if (this.state.fromMoneyText === 'EUR'){
                this.setState({fromMoneyValue:1});
            }
            if(this.state.toMoneyValue === 'EUR'){
                this.setState({toMoneyValue:1});
            }
        }
    }
    componentDidMount(){    
            rates.get()
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }).catch(console.error);     
    }

    render() {
        const { amount } = this.state;
        return (
            <div className="rates-wrapper">
                <h1>Currency Converter</h1>
                <form onSubmit={this.submitHandler}>
                    <div className="amount-wrapper">
                        <label htmlFor="amount">Amount</label>
                        <input type="number"
                            value={amount}
                            onChange={this.amountHandler}
                            onBlur={this.amountHandler} />
                    </div>
                    <div className="first-value-wrapper">
                        <label htmlFor="rates1">From</label>
                        <select id="rates1" className="values" onChange={this.firstValueHandler} >
                            <option value="EUR" >EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            <option value="INR">INR</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                            <option value="SGD">SGD</option>
                            <option value="CNY">CNY</option>
                        </select>
                    </div>
                    <div className="second-value-wrapper">
                        <label htmlFor="rates2" className="values">To</label>
                        <select id="rates2" className="values" onChange={this.secondValueHandler}>

                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="INR">INR</option>
                            <option value="AUD">AUD</option>
                            <option value="CAD">CAD</option>
                            <option value="SGD">SGD</option>
                            <option value="CNY">CNY</option>
                        </select>
                    </div>
                    <button type="submit">Convert</button>
                </form>

                <div className="result-wrapper">

                </div>
            </div>
        )
    }
}

export default Rates;