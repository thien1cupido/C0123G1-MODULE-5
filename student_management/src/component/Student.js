import React from 'react';
import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'

export class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    id: 1,
                    studentName: "Nguyên Thiên",
                    age: 25,
                    address: "Quảng Nam"
                },
                {
                    id: 2,
                    studentName: "Nguyên Trung",
                    age: 25,
                    address: "Quảng Nam"
                },
                {
                    id: 3,
                    studentName: "Trung Thiện",
                    age: 25,
                    address: "Quảng Nam"
                }
            ]
        }
    }

    render() {
        return (
            <div className={"container"}>
                <h1 className="text-center">Student List</h1>
                <table className={"table table-hover"}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList.map((previous) =>
                            (
                                <tr>
                                    <td>{previous.id}</td>
                                    <td>{previous.studentName}</td>
                                    <td>{previous.age}</td>
                                    <td>{previous.address}</td>
                                </tr>
                            ))
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student;