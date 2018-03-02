import index from './styles/index.styl';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppComponent from './AppComponent';
import reducer from './reduexs/index.js'


let store = createStore(reducer)

ReactDom.render(<Provider store={store}>
    <AppComponent />
</Provider>, document.getElementById('app'));