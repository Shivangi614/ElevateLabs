const express = require('express')
const app= express()

const port =3000

app.use(express.json())

let books=[
    {id:1 , title : "Don Quixote" , author :"Miguel de Cervantes"},
    {id:2 , title : "Alice's Adventures in Wonderland" , author :"Lewis Carroll"},
    {id:3 , title : "The Adventures of Huckleberry Finn" , author :"Mark Twain"},
    {id:4 , title : "The Adventures of Tom Saw" , author :"Mark Twain"}
];

app.get('/books',(req,res)=>{
    res.json(books);
});

app.post('/books',(req,res)=>{
    const { id, title, author }=req.body;
    const newBook = {id,title,author};
    books.push(newBook);
    res.json(newBook);
});

app.put('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const {title,author}=req.body;
    const book = books.find(b=> b.id == id);
    if (book){
        book.title=title;
        book.author=author;
        res.json(book);
    }else{
        res.json({error: "Book NOT FOUND"});
    }
});

app.delete('/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const index =books.findIndex(b=> b.id==id);
    if (index !=-1){
        const deleteBook = books.splice(index,1);
        res.json(" Book Deleted ");
    }else{
        res.json({error: "Book NOT FOUND"});
    }
});

app.listen(port,()=>{
    console.log("Server is Running Successfully..")
})