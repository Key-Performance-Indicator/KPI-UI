import React, {useCallback} from 'react'
import { Button } from 'react-bootstrap'
import {useDropzone, DropzoneRootProps, DropzoneInputProps} from 'react-dropzone'

function UploadFiles() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log('Accepted Files:', acceptedFiles)
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column' ,background:'#e9e9eb',padding:'15px'}}>
    
      <div className='form-group' style={{ margin: '30px' }}>
        <label>Proje Seç</label>
        <select className='form-control' id='exampleSelect'>
          <option>ESBİS</option>
          <option>TÜBİS</option>
          <option>E-GARANTİ</option>
          <option>REKLAM KURULU</option>
          <option>THY</option>
        </select>
      </div>
      <div className='form-group' style={{ margin: '30px' }}>
        <label>Sprint Seç</label>
        <select className='form-control' id='exampleSelect'>
          <option>Eylül-1</option>
          <option>Eylül-2</option>
          <option>Ekim-1</option>
          <option>Ekim-2</option>
          <option>Kasım-1</option>
        </select>
      </div>
      <div className='card card-custom' style={{ }}>
        <div className='card-header'>
          <div className='card-title'>
            <h3 className='card-label'>Dosya Yükle</h3>
          </div>
        </div>
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'dropzone-active' : ''}`}>
          <input {...getInputProps()} />
          <div className='dropzone-msg dz-message needsclick'>
            <h3 className='dropzone-msg-title'>
              {isDragActive
                ? 'Drop files here'
                : 'Dosya yüklemek için tıkla ya da sürükle bırak.'}
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div style={{ display:'flex',marginTop:'16px', marginBottom: '30px' }}>
      <Button>Gönder</Button>
    </div>
  </div>
  )
}

export default UploadFiles
