import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  function onSubmit(data){
    console.log("subbmiting the form ", data)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>first name</label>
          <input type="text" {...register("firstName", { required: true, maxLength:{value:5 ,massage:"max length is 5"}, minLength:2 })}/>
          {errors.firstName && <p>{errors.firstName.massage}</p>}
        </div>
        <br />
        <div>
          <label>middle name</label>
          <input type="text" {...register("middleName", { required: true })}/>
        </div>
        <br />
        <div>
          <label>last name</label>
          <input type="text" {...register("lastName", { required: true, minLength: 5 })}/>
        </div>
        <div>
        <label htmlFor="">age</label>
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        </div>
        <input type="submit"/>
      </form>
    </>
  )
}

export default App
