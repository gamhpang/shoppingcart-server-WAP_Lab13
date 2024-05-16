
let books = [
    {id:1,title:'Sapien',ISBN:1,publishedDate:'2024-5-15',author:'Yuval Noah Harari'},
    {id:2,title:'JAVA Programming Language',ISBN:2,publishedDate:'2024-1-15',author:'Gam'},
];
let id = 3;

module.exports = class Book{
    constructor(id,title,ISBN,publishedDate,author){
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    static getAll(){
        return books;
    }

    static findById(bookId){
        const index = books.findIndex(b=>b.id == bookId);
        if(index>-1){
            return books[index];
        }else{
            throw new Error('Not Found');
        }
    }

    save(){
        this.id = id;
        id++;
        books.push(this);
        return this;
    }

    update(){
        const index = books.findIndex(b=>b.id == this.id);
        if(index>-1){
            books.splice(index,1,this);
            return this;
        }else{
            throw new Error("Not Found");
        }
    }

    static deleteById(bookId){
        const index = books.findIndex(b=>b.id == bookId);
        if(index >-1){
            books.splice(index,1);
        }else{
            throw new Error("Not Found");
        }
    }

};