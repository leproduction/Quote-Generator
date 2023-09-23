import React from 'react'
import Card from './Card'
import {useState} from 'react'

export default function Main () {
    const getData = [{
        author: "Zhuangzi",
        quotes: "Life comes from the earth and life returns to the earth."
        }, { author: "William Hazlitt", quotes: "We are here to add what we can to life, not to get what we can from life."} ,{
            author: "William Shakespeare",
            quotes: "A rose by any other name would smell as sweet."
          }, {
            author: "John Kennedy",
            quotes: "Ask not what your country can do for you; ask what you can do for your country."
          }, {author:"Pablo Picasso", quotes:"Every child is an artist. The problem is how to remain an artist once he grows up." }]

    const [author, setAuthor]= useState("Author");

    const [quotes, setQuotes] = useState("Quotes for Today")
    async function handleClick() {
        
        const newRandomIndex = Math.floor(Math.random() * getData.length);
       
    
        const newRandomAuthor = getData[newRandomIndex].author;
        const newRandomQuote = getData[newRandomIndex].quotes;
    
        // Using Promise.all to update both states at the "same" time
        await Promise.all([
          setAuthor(newRandomAuthor),
          setQuotes(newRandomQuote)
        ]);
      }
  

    return (
      
        <div className='main'>
            <div className='cardClass'>

            <Card quotes={author}
            authors={quotes} />
            </div>
            <div className='btn'>
            <button onClick={handleClick}>Get Quote</button>
            </div>
      
        </div>
    );

    
}