import { useState } from 'react'
import { useForm } from "react-hook-form";
function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  function onSubmit(data){
    console.log("submit the form data", data)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>first name</label>
          <input type="text" {...register("firstname", { required: true, maxLength:{ value:6, message:"plz enter a correct value" }})}/>
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <br />
        <div>
          <label>middel name</label>
          <input type="text" {...register("middelname" , { pattern:{ value: /^[A-Za-z]+$/i , message:"plz enter a valid letter"} })}/>
          {errors.middelname && <p>{errors.firstname.message}</p>}
        </div>
        <br />
        <div>
          <label>last name</label>
          <input type="text" {...register("last name")}/>
        </div>
        <input type="submit" />
      </form>
    </div>
      )
}

export default App
