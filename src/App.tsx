import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const arr1=[
        {id: 1, title: "HTML&CSS11", isDone: true},
        {id: 2, title: "JS11", isDone: true},
        {id: 3, title: "ReactJS11", isDone: false},
        {id: 4, title: "Rest API11", isDone: false},
    ]

    const arr2=[
        {id: 1, title: "HTML&CSS222", isDone: true},
        {id: 2, title: "JS222", isDone: true},
        {id: 3, title: "ReactJS2222", isDone: false},
        {id: 4, title: "Rest API22222", isDone: false},
        {id: 5, title: "GraphQL22222", isDone: false},
    ]

    return (
        <div className="App">
            <Todolist topic1={'What to learn111'} arr={arr1}/>
            <Todolist topic1={'What to learn222'} arr={arr2}/>
        </div>
    );
}

export default App;
