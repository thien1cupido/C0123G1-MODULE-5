import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import {useEffect, useState} from "react";
import * as bookService from "../service/BookService";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

export function BookList() {
    const [bookList, setListBook] = useState([])
    const fetchApi = async () => {
        const result = await bookService.findAll()
        setListBook(result)
    }
    const handleDeleteBook = async (id) => {
        await bookService.deleteBook(id)
        fetchApi()
        toast("Delete successfully!!");
    }

    useEffect(() => {
            fetchApi()
        }, []
    )
    return (
        <>
            <div className="container">
                <div className='row    '>
                    <div className='d-flex justify-content-between mt-5'>
                        <h1>Library</h1>
                        <NavLink to="/create">
                            <button className='btn btn-success'>Add a new book</button>
                        </NavLink>
                    </div>
                    <table className="table table-striped text-center">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th colSpan='2'>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            bookList.map((value) =>
                                (
                                    <tr key={value.id}>
                                        <td>{value.id}</td>
                                        <td>{value.title}</td>
                                        <td>{value.quantity}</td>
                                        <td>
                                            <NavLink to={`/update/${value.id}`}>
                                                <button className='btn btn-warning me-4' type="button">Edit</button>
                                            </NavLink>
                                            <button className='btn btn-danger'
                                                    onClick={() => handleDeleteBook(value.id)} type="button">Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}