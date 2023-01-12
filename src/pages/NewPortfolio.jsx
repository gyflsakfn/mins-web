import React, { useState } from 'react'
import { addNewProject } from '../api/firebase';
import { uploadImage } from '../api/uploader';
import Button from '../component/ui/Button';
import './newportfolio.css'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const NewPortfolio = () => {
  const [project, setProject] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const queryClient = useQueryClient();
  const addProject = useMutation(({ project, url }) => addNewProject(project, url),
    {
      onSuccess: () => queryClient.invalidateQueries('projects'),
    });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return
    }
    setProject((port) => ({ ...port, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then(url => {
        addProject.mutate({ project, url }, {
          onSuccess: () => {
            setSuccess('프로젝트가 성공적으로 추가되었습니다.')
            setTimeout(() => {
              setSuccess(null);
            }, 4000)
          }
        })
      })
      .finally(() => setIsUploading(false))
  }

  return (
    <section className='container newPortfolio__container'>
      <h3>새로운 포토폴리오 등록</h3>
      {success && <p>✅ {success} </p>}
      <div className="newPortfolio__wrapper">
        <div className="thumenail__img">
          {file && <img src={URL.createObjectURL(file)} alt='local file' />}
        </div>
        <form className='input__form' onSubmit={handleSubmit}>
          <div>
            <input type="file" accept='image/#' name='file' required onChange={handleChange} />
            <input type="text" name='title' value={project.title ?? ''} placeholder='프로젝트명' required onChange={handleChange} />
            <input type="text" name='desc' value={project.desc ?? ''} placeholder='설명' required onChange={handleChange} />
            <input type="text" name='demoUrl' value={project.demoUrl ?? ''} placeholder='데모 사이트' required onChange={handleChange} />
            <input type="text" name='gitUrl' value={project.gitUrl ?? ''} placeholder='깃헙 주소' required onChange={handleChange} />
          </div>
          <Button text={isUploading ? '업로드 중...' : '등록하기'} disabled={isUploading} />
        </form>
      </div>
    </section>
  )
}

export default NewPortfolio