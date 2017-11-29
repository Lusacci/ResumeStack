import React from 'react';
import ReactDOM from'react-dom';
import Header from './Header';
import ResumePreview from './ResumePreview';

//Doing it like this adds states and lifecycles.

class App extends React.Component {
    state = {
        pageHeader:'James Tam',
        test: 37
    };
    
    /*
    //This checks mounted components.
    componentDidMount(){
        //timers, listeners.
        console.log('ya mounted!');
        debugger;
    }
    //This checks unmounted components.
    componentWillUnmount(){
        //clean timers, listeners.
        console.log('ya didnt mounted!'); // no apostraphes
        debugger;
    }
    */

    render(){
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.props.JTProfile.map(JTProfile =>
                    <ResumePreview {...JTProfile} />
                    // use below to just get one.
                    // <ResumePreview {...this.props.JTProfile[0]} />
                )}
                </div>
            </div>
        );
    }
}

export default App;