 import * as React from "react"
 import {Link, useNavigate} from "react-router-dom"
 import apiClient from "..//../services/apiClient"
 import "./NutritionForm.css"

 export default function NutriitionForm(){
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState({})
    const [form, setForm] = React.useState({
        name:"",
        category:"",
        calories:"",
        imageUrl:""

    })
  
    const handleOnInputChange = (event) => {
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
      }

      const handleOnSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors((e) => ({ ...e, form: null }))
    
        const {data, error} = await apiClient.loginUser({ 
            name: form.name, 
            category: form.category, 
            calories: form.calories, 
            imageUrl: form.imageUrl
        })
        if(error){
          setErrors((e) => ({ ...e, form: error}))
        } 

        setIsLoading(false)
        nagivate("/nutrition")
      }

  return(
    <div className="nutrition-form">
      <div className="container">
          <h2>Record Nutrition</h2>
          <br />

          <div className="form">
              <div className="input-field">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nutrition name" 
                    value= {form.name}
                    onChange={handleOnInputChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="input-field">
                <label htmlFor="name">Category</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Nutrition name" 
                    value= {form.category}
                    onChange={handleOnInputChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>

              <input className="input-field" type="number" name="calories" placeholder="Calories" value={form.calories} onChange={handleOnInputChange}/>
              <input className="input-field" type="url" name="imageUrl" placeholder="http://imageUrl.com/" value={form.imageUrl} onChange={handleOnInputChange}/>
              <button className="submit-nutrition" onClick={handleOnSubmit}>{isLoading ? "Loading..." : "Save"}</button>
          </div>
          {/* End of form */}
      </div>
    </div>
  )
 }