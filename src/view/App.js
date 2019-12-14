import * as React from 'react';
import { Canvas } from './components/Canvas';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class App extends React.Component {

    render() {
        return (
            <div style={{ backgroundColor: "#fff" }}>
                <table>
                    <thead>
                        <tr>
                            <th>Dashboard1</th>
                            <th>Dashboard2</th>
                            <th>Dashboard3</th>
                            <th>Dashboard4</th>
                        </tr>
                    </thead>
                </table>
                <Canvas />
            </div>
        );
    }
}