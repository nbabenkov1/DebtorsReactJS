import React, {Component} from 'react';
import './css/index.css';
import Search from './components/Search';
import FileNames from "./components/FileNames";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterText: ''
        }
    }

    filterUpdate(value){
        this.setState({
           filterText: value
        });
    }

    render() {
        return (
            <div className="mainwrapper">
                <div className="header">
                    {/*<!--<img id="headerlogo" src="IMG/logo50.png">-->*/}
                    <h1>Список задолжников</h1>
                </div>
                <div className="leftPanel">
                    {/*<!--строка поиска-->*/}
                    <Search filterUpdate={this.filterUpdate.bind(this)} />
                    {/*<!--таблица-->*/}
                    <FileNames data={this.props.data}
                               filterText={this.state.filterText} />
                </div>
            </div>
        );
    }
}

export default App;
