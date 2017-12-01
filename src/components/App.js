import React from 'react';
import axios from 'axios';
import ReactDOM from'react-dom';
import Header from './Header';
import ResumePreview from './ResumePreview';


//Doing it like this adds states and lifecycles.

class App extends React.Component {
    
    state = {
        pageHeader:'James Tam',
        JTProfile:[]
    };
    
   
    //This checks mounted components.
    componentDidMount(){
        //ajax ....
        axios.get('/api/JTProfile')
        .then(resp => {
            this.setState({
                JTProfile: resp.data.JTProfile
            });
        })
        .catch(console.error)
    }
   
     /*    
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
                    {this.state.JTProfile.map(JTProfile =>
                        <ResumePreview key={JTProfile.id} {...JTProfile} />
                        // use below to just get one.
                        // <ResumePreview {...this.props.JTProfile[0]} />
                    )}
                </div>
            </div>
        );
    }
}

export default App;