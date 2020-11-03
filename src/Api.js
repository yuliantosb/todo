import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Api() {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setDatas(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="container mt-5">
            <p>Fetch data dari api</p>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map(data => {
                            return <tr key={data.id}>
                                        <td>{data.title}</td>
                                        <td>{data.body}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Api
