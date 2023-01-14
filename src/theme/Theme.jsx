import { memo } from 'react'
import Modal from '../component/Modal'
import BackgroundColor from './BackgroundColor'
import { backgroundColors, primaryColors } from './data'
import PrimaryColor from './PrimaryColor'
import './theme.css'

const Theme = () => {
  console.log('the렌더')
  return (
    <Modal className='theme__modal'>
      <h3>테마 커스터마이징</h3>
      <small>기본 및 배경 색을 원하는 색상으로 바꾸어 보세요!</small>
      <small className='en'>Change the primary and background color to your preference!</small>
      <div className="theme__primary-wrapper">
        <h5>기본 색상</h5>
        <div className="theme__primary-colors">
          {
            primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className} />)
          }
        </div>
      </div>
      <div className="theme__background_wrapper">
        <h5>배경 색상</h5>
        <div className="theme__background-colors">
          {
            backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
          }
        </div>
      </div>
    </Modal>
  )
}

export default memo(Theme)