import { useState } from 'react'

const Bookshelf = () => {
    
    const [books, setBooks] = useState([
        {title: 'Fourth Wing', author: 'Rebecca Yarros'},
        {title: "The Lion, the Witch and the Wardrobe", author: 'C.S. Lewis'}
        
    ])

    const [newBook, setNewBook] = useState({title: "", author: ""})


const handleSubmit = (event) => {
    event.preventDefault()
    console.log(typeof(books))
    setBooks([...books, newBook])
    setNewBook({title: "", author: ""})

}

const handleChange = (event) => {
    setNewBook({...newBook, [event.target.id] : event.target.value})
    
}

 return(
    <div className="bookshelfDiv">
            <div className="formDiv">
            <h3>Add a Book</h3>


     <form onSubmit={handleSubmit}>
     
      <label htmlFor ="title">title:</label>
      <input type="text" id="title"
                        onChange ={handleChange}
                        value={newBook.title}/>

      <label htmlFor="author">author:</label>
      <input type="text" id="author"
                        onChange ={handleChange}
                        value={newBook.author}/>

      <button type="submit">Send</button>
    </form>



            </div>
            <div className="bookCardsDiv">
               
                {books.map((book,index)=>
                
                <div className="bookCard" key = {index}>
                    
                <h1>{book.title}</h1>
                <h1>{book.author}</h1>
                </div>


            )}
            </div>
    </div>
  )
}

export default Bookshelf