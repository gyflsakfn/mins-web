import React, { useState } from 'react'
import { uploadImage } from '../api/uploader';
import Button from '../component/ui/Button';

const NewPortfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return
    }
    setPortfolio((port) => ({ ...port, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file)
      .then(url => {
        console.log(url);
        // Firebase에 새로우 제품 추가
      })
  }

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt='local file' />}
      <form onSubmit={handleSubmit}>
        <input type="file" accept='image/#' name='file' required onChange={handleChange} />
        <input type="text" name='title' value={portfolio.title ?? ''} placeholder='프로젝트명' required onChange={handleChange} />
        <input type="text" name='category' value={portfolio.category ?? ''} placeholder='카테고리' required onChange={handleChange} />
        <input type="text" name='demoUrl' value={portfolio.demoUrl ?? ''} placeholder='데모 사이트' required onChange={handleChange} />
        <input type="text" name='gitUrl' value={portfolio.gitUrl ?? ''} placeholder='깃헙 주소' required onChange={handleChange} />
        <Button text={'Submit'} />
      </form>
    </section>
  )
}

export default NewPortfolio