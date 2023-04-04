import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { todoFormAction } from "../store/todoForm"

const Form = styled.form`
  border: 1px solid black;
  padding: 30px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  & input {
    margin: 20px 0;
  }
  * {
    font-size: 20px;
  }
`

export const FormPage = () => {
  const {text, deadline} = useSelector(state => state.todoForm.form)
  const dispactch = useDispatch()

  const handleChange = (e) => {
    dispactch(todoFormAction.cahngeField({
      name: e.target.name,
      value: e.target.value
    }))
  }
  return (
    <>
    <Link to='/'>Go back to TodoList</Link>
      <Form>
        <textarea
          name="text"
          value={text}
          onChange={handleChange}
        ></textarea>
        <input 
          name="deadline"
          type="date"
          value={deadline}
          onChange={handleChange}
          />
        <button>Save todo</button>
      </Form>
    </>
  )
}