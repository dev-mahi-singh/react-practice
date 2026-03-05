import { useState } from 'react'
import UserCard from './components/UserCard'
import UserForm from './components/UserForm'

const App = () => {

  const [cards, setCards] = useState([]);

  const addCardHandler = (cardData) => {
    setCards([...cards, cardData]);
  };



  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center flex-col pt-5 lg:px-0 px-5'>
      <UserForm onAddCard={addCardHandler} />
      <UserCard cards={cards} />

    </div>
  )
}

export default App