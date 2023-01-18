import faqs from './data'
import FAQ from './FAQ'
import './faqs.css'

const FAQs = () => {
  return (
    <section id='faqs'><h2>Frequently Asked Questions</h2>
      <p>제가 종종 받는 질문들이며 클릭하면 답변을 볼 수 있습니다.</p>
      <div className="container faqs__container">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq} />
          ))
        }
      </div>
    </section>
  )
}

export default FAQs