import React from 'react';
import axios from 'axios';
import ReactDOM from'react-dom';

import NavBar from './NavBar';
import Header from './Header';
import ResumePreview from './ResumePreview';

import Bio from './Bio';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Awards from './Awards';
import Contact from './Contact';


//Doing it like this adds states and lifecycles.
class App extends React.Component {

    state = { pageHeader:'Checking Header Content', JTProfile:[] };
    
    //This checks mounted components.
    componentDidMount(){
        //ajax ....
        axios.get('/api/JTProfile').then(resp => {
            this.setState({JTProfile: resp.data.JTProfile});
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

    {this.state.JTProfile.map(JTProfile =>
                            <ResumePreview key={JTProfile.id} {...JTProfile} />
                        )} 
                         <Header message={this.state.pageHeader}/>
    */
    
    render(){
        return (
            <div className="App">
                    <NavBar/>
                    <div className= "tab-content">
                        <div className="tab-pane active container" id="Bio">
                             <Bio {...this.state.JTProfile[2]} />
                        </div>
                        <div className="tab-pane container" id="Experience">
                             <Experience {...this.state.JTProfile[1]} />
                        </div>
                        <div className="tab-pane container" id="Projects">
                            <Projects {...this.state.JTProfile[3]} />
                        </div>
                        <div className="tab-pane container" id="Education">
                            <Education {...this.state.JTProfile[4]} />
                        </div>
                        <div className="tab-pane container" id="Awards">
                            <Awards {...this.state.JTProfile[5]} />
                        </div>
                        <div className="tab-pane container" id="Contact">
                            <Contact {...this.state.JTProfile[6]} />
                        </div>
                    </div>
            </div>
        );
    }
}

export default App;