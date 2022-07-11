 import * as React from "react"
 import {Link, useNavigate} from "react-router-dom"
 import apiClient from "../../services/apiClient"
 import "./NutritionForm.css"

 export default function NutriitionForm(){
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState({})
    const [form, setForm] = React.useState({
        name:"",
        category:"",
        quantity:"",
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
    
        const {data, error} = await apiClient.createNutrition({ 
            name: form.name, 
            category: form.category,
            quantity: form.quantity, 
            calories: form.calories, 
            imageUrl: form.imageUrl
        })
        if(error){
          setErrors(error)
        } 
        // if(data){
        //   setForm({name:"",
        //   category:"",
        //   quantity:"",
        //   calories:"",
        //   imageUrl:""})
        // }

        setIsLoading(false)
        navigate("/nutrition")
      }

  return(
    <div className="nutrition-form">
      <div className="container">
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
                    name="category" 
                    placeholder="Nutrition name" 
                    value= {form.category}
                    onChange={handleOnInputChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="split-input-field">
                <label htmlFor="quantity">Quantity</label>
              <input className="input-field" type="number" name="quantity" min={1} max={10000000000} value={form.quantity} onChange={handleOnInputChange}/>
              <label htmlFor="calories">Calories</label>
              <input className="input-field" type="number" name="calories" min={0} max ={10000000000} step={10} value={form.calories} onChange={handleOnInputChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="imageUrl">Image URL</label>
              <input className="input-field" type="url" name="imageUrl" placeholder="http://imageUrl.com/" value={form.imageUrl} onChange={handleOnInputChange}/>
              </div>
              <button className="submit-nutrition" onClick={handleOnSubmit}>{isLoading ? "Loading..." : "Save"}</button>
          </div>
          {/* End of form */}
      </div>
    </div>
  )
 }