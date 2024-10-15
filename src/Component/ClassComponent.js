import React, { Component } from 'react';

class ClassComponentExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            count: 0,
        };
    }

    // componentDidMount: Dipanggil setelah komponen dipasang (mounted) di DOM
    componentDidMount() {
        this.fetchData();
        console.log("Component mounted!");
    }

    // componentDidUpdate: Dipanggil setiap kali komponen diperbarui (props atau state berubah)
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log(`Component updated! Count is now: ${this.state.count}`);
        }
    }

    // componentWillUnmount: Dipanggil ketika komponen dihapus dari DOM
    componentWillUnmount() {
        console.log("Component unmounted!");
    }

    fetchData() {
        // Simulasi fetch data
        setTimeout(() => {
            this.setState({ data: "Some fetched data" });
        }, 3000);
    }

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <h2>Class Component Example</h2>
                <p>Data: {this.state.data}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment Count</button>
            </div>
        );
    }
}

export default ClassComponentExample;
