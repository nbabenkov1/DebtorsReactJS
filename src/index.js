import 'es5-shim';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var myArr = JSON.parse(this.responseText);
        ReactDOM.render(<App data={myArr}/>, document.getElementById('root'));
    }
};

xmlhttp.open("GET", "http://app-gf.esbt.loc:8081/debtors/getList", true);
xmlhttp.send();


