import Card from "../../component/ui/Card"
import { useState } from "react";
import { AiOutlineMinus } from "@react-icons/all-files/ai/AiOutlineMinus";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";



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