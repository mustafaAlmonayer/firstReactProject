import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createTodo, getTodo } from './api/TodoService'
import { useAuth } from './security/AuthContext';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { updateTodo } from './api/TodoService';

function TodoComponent() {

    const { id } = useParams();

    const { username } = useAuth();

    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState(null);

    useEffect(retriveTodo, [])

    const navigate = useNavigate();

    let todo;

    function retriveTodo() {
        if (id != -1) {
            getTodo(username, id)
                .then((responce) => {
                    setDescription(responce.data.description)
                    setTargetDate(responce.data.targetDate)
                });
        }
    }

    function onSubmit(values) {
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }

        if(id != -1){

        updateTodo(username, id, todo)
            .then(responce => {
                setDescription(responce.data.description)
                setTargetDate(responce.data.targetDate)
            })
        } else {
            createTodo(username, todo)
        }

        navigate("/todos")
    }

    function validate(values) {
        let errors = {};
        if (values.description.length < 5)
            errors.description = "description should be more than 5 characters"
        return errors
    }

    return (
        <div className="container">
            <h1>Enter todo details</h1>
            <div>
                <Formik
                    initialValues={{ targetDate, description }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}>
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name='description'
                                    component="div"
                                    className="alert alert-danger"
                                />
                                <ErrorMessage
                                    name='targetDate'
                                    component="div"
                                    className="alert alert-danger"
                                />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" name="description" className="form-control" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target date</label>
                                    <Field type="date" name="targetDate" className="form-control" />
                                </fieldset>
                                <div className='m-3'>
                                    <button className='btn btn-success' type='submit'>Update</button>
                                </div>
                            </Form>
                        )

                    }
                </Formik>
            </div>
        </div>
    )
}

export default TodoComponent;