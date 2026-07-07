import { useEffect, useState } from 'react'
import './App.css'
import Japanese from './language/japanese/japanese.json'
type HiraganaWord = {
  character: string
  pronunciation: string
  category:string
}
let shuffle: number[]=[];
function App() {
  const [Word,setWord] = useState<HiraganaWord>({
    character:"--",
    pronunciation:"--",
    category:"--"
  });
  const characters: HiraganaWord[] = Japanese.hiragana;

  const wordRandomizer = () => {
    if(shuffle.length===46){
      shuffle = [];
    }
    let index: number=Math.floor(Math.random()*(characters.length-1));
    while(shuffle.includes(index) || characters[index].category==="Yoon"){
      index=Math.floor(Math.random()*45);
    }
    shuffle.push(index);
    console.log(shuffle);
    return setWord(characters[index]);
  }
  let Display: boolean=false;
  useEffect(()=>{
    Display = false
  },[Word]);
  return (
    <main>
      <div className='Card'>
      <div className="Title">
      <h1>Flashcards</h1>
      </div>
      <div className='CardWrapper'>
      <div className="CardBody">
        <div className='CardFront'>
          <h1>{Word.character}</h1>
        </div>
        <div className='CardBack'>
          <h1>{Word.character}</h1>
          <p>{Word.pronunciation}</p>
        </div>
        </div>
      </div>
      <button onClick={() => wordRandomizer()}>Generate</button>
      </div>
    </main>
  )
}

export default App
