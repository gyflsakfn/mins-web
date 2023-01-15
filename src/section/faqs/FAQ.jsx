import Card from "../../component/Card"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from "react";

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const { question, answer } = faq;
  return (
    <Card className="faq" onClick={() => setShowAnswer(prev => !prev)}>
      <div>
        <h5 className='faq__question'>{question}</h5>
        <button className="faq__icon">
          {
            showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </div>
      {
        showAnswer && <p className='faq__answer'>{answer}</p>
      }
    </Card>
  )
}

export default FAQ