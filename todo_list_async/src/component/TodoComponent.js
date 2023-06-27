import {useEffect, useState} from "react";
import *as todoService from "../service/TodoService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css'
import {toast} from "react-toastify";
import {useNavigate} from "react-router";

export function TodoComponent() {
    const [todoList, setTodoList] = useState([])
    const fetchApi = async () => {
        const result = await todoService.findAll()
        setTodoList(result)
    }
    useEffect(() => {
            fetchApi()
        }, []
    )
    return (
        <>
            <Formik
                initialValues={{
                    title: ''
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required("Can't be blank")
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(false)
                    const create = async () => {
                        await todoService.save(values)
                        fetchApi()
                    }
                    create()
                    toast("Add tittle successfully!!")
                }
                }

            >{
                ({isSubmitting}) => (
                    <div className="container">
                        <div className='row d-flex justify-content-center  '>
                            <div className='col-xxl-4'>
                                <h1>Todo List</h1>
                                <Form>
                                    <div className='my-3'>
                                        <Field className='form-control' type='text' name='title'/>
                                        <ErrorMessage component='span' style={{color: 'red'}} name='title'/>
                                    </div>
                                    {
                                        isSubmitting ? "Loading" :
                                            <button type='submit' className='btn btn-success'>Submit</button>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }
            </Formik>
            <div className="container mt-3">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todoList.map((todo) => (
                            <tr key={todo.id}>
                                <td className="text-center"> {todo.id}</td>
                                <td>
                                    {todo.title}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

