import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((Response) => {
                console.log("getting thing::", Response.data);
                setData(Response.data);
            })
     }, []);

    const arr1 = data.map((data, index) => {
        return (
            <tr key = {index}>
                <td>{data.userId}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
            </tr>
        );
    });

    return (
        <div className="App">
            <h1>axios is here</h1>
            <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                  </tr>
            </thead>
            <tbody>
                {arr1}
        </tbody>
            </table>
        </div>
    );
}

export default App;
