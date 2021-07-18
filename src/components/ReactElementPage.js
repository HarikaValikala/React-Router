import React, {useContext} from 'react';
import messageContext from '../contexts/messageContext';
import Outer from './components/outer';



function  ReactElementPage() {
    return (
        <>
            <h1>React Elements Topic</h1>
            <h2>Message: {useContext(messageContext)}</h2>
            <Outer></Outer>
        </>
    );
}

export default ReactElementPage;