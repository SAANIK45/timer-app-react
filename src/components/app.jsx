import React, { Component } from 'react';
import './app.style.css'




class App extends Component {

    state = {
        count: 0
    }

    intervalId = null;


    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    };

    decrementCount = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    startTimer = () => {
        if (this.state.count > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({ count: this.state.count - 1 },
                    () => {
                        if (this.state.count === 0) {
                            alert('Timer Finised');
                            clearInterval(this.intervalId);
                            this.intervalId = null;
                        }
                    })
            }, 1000)
        }
    }

    stopTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;

        }
    }

    resetTimer = () => {
        this.setState({ count: 0 })
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    render() {

        return (

            <div className='App'>

                <div className='main'>

                    <div className='timer-area'>
                        <h1 className='heading'>Timer</h1>

                        <div className='container first'>
                            <button className='btn' onClick={this.decrementCount}> - </button>

                            <span className='span'>{this.state.count}</span>

                            <button className='btn' onClick={this.incrementCount}> + </button>

                        </div>

                        <div className='container '>

                            <button className='btn' onClick={this.startTimer}>start</button>
                            <button className='btn' onClick={this.stopTimer}>stop</button>
                            <button className='btn' onClick={this.resetTimer}>reset</button>


                            <p>Created By Md. Samiul Ahmed</p>

                        </div>
                    </div>



                </div>




            </div>
        );
    }
}
export default App;

