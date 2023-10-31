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
                <td>{data.id}</td>
                <td>{data.userId}</td>
                <td>{data.title}</td>
                <td>{data.body.slice(1 , 100)}</td>
            </tr>
        );
    });

    return (
        <div className="App">
            <h1>Getting data from jsonplaceholder api</h1>
            <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User</th>
                    <th>Title</th>
                    <th>Body</th>
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
