import {useState} from 'react'

const ModalForm = ({ handleFormSubmit, initialData, submitButton}) => {

  const defaultData = {
    name: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    longDesc: ''
  }
  
  const formData = initialData ? {...initialData} : defaultData
  

  const [form, setForm] = useState(formData)
  
  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({...form, [name]: value})
  }

  const handleGenreChange = (event) => {
    const { options } = event.target
    const optionsLength = options.length
    let value = []

    for (let i; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setForm({...form, genre: value.toString()})
  }

  const submitForm = () => {
    handleFormSubmit({...form})
  }

    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            name="name"
            value={form.name} 
            type="text" 
            className="form-control" 
            id="name" 
            aria-describedby="emailHelp" 
            placeholder="Lord of the Rings" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            name="description"
            value={form.description} 
            type="text" 
            className="form-control" 
            id="description" 
            placeholder="Somewhere in Middle-earth..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Rating</label>
          <input
            onChange={handleChange}
            name="rating"
            value={form.rating} 
            type="number" 
            max="5" min="0" 
            className="form-control" 
            id="rating" 
            placeholder="3"
          />
          <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            onChange={handleChange}
            name="image"
            value={form.image} 
            type="text" 
            className="form-control" 
            id="image" 
            placeholder="http://....." 
          />
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover</label>
          <input
            onChange={handleChange}
            name="cover"
            value={form.cover} 
            type="text" 
            className="form-control" 
            id="cover" 
            placeholder="http://......" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="longDesc">Long Description</label>
          <textarea
            onChange={handleChange}
            name="longDesc"
            value={form.longDesc} 
            className="form-control" 
            id="longDesc" 
            rows="3">
          </textarea>
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            onChange={handleGenreChange}
            multiple className="form-control" 
            id="genre">
            <option>drama</option>
            <option>adventure</option>
            <option>history</option>
            <option>action</option>
            <option>comedy</option>
            <option>crime</option>
            <option>adventure</option>
            <option>fantasy</option>
          </select>
        </div>
        
        <button
        onClick={submitForm}
        type="button"
        className="btn btn-primary">
          { submitButton || 'Add movie' }
        </button>
      </form>
    )
  }
  
  export default ModalForm