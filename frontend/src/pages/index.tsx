import React, { useState, useEffect } from 'react'
import "../App.css"

function Home() {
  const [filePPTX, setFilePPTX] = useState<File | null>(null)
  const [filePDF, setFilePDF] = useState<File | null>(null)

  const [base64PPTX, setBase64PPTX] = useState<string | null>(null)
  const [base64PDF, setBase64PDF] = useState<string | null>(null)

  const [decodedPPTX, setDecodedPPTX] = useState<Blob | null>(null)
  const [decodedPDF, setDecodedPDF] = useState<Blob | null>(null)

  const [pdfurl, setPdfurl] = useState<string | null>()
  const [pptxurl, setPptxurl] = useState<string | null>()
  
  useEffect(() => {
    console.log("file")
    console.log(filePPTX)
    console.log(filePDF)

    if (filePPTX) {
      const url = URL.createObjectURL(filePPTX)
      setPptxurl(url)
    }
    if (filePDF) {
      const url = URL.createObjectURL(filePDF)
      setPdfurl(url)
    }
  }, [filePPTX, filePDF])

  const handleFilePPTX = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFilePPTX(e.target.files[0])
    }
  }

  const handleFilePDF = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFilePDF(e.target.files[0])
    }
  }

  const fileToBase64 = async (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const base64ToPDF = async (base64: string) => {
    const bin = atob(base64.replace(/^.*,/, ''));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    return new Blob([buffer], { type: 'application/pdf' })
  }

  const base64ToPPTX = async (base64: string) => {
    const bin = atob(base64.replace(/^.*,/, ''));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    return new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' })
  }

  const handleSubmit = async () => {
    const filePPTXBase64 = filePPTX ? await fileToBase64(filePPTX) : null
    const filePDFBase64 = filePDF ? await fileToBase64(filePDF) : null

    console.log(filePPTXBase64)
    console.log(filePDFBase64)

    setBase64PPTX(filePPTXBase64 as string)
    setBase64PDF(filePDFBase64 as string)

    // const res = await CreateFile(filePDFBase64 as string, filePPTXBase64 as string)
    // console.log(res)
  }

  const encode = async () => {
    const filePPTXBase64 = filePPTX ? await fileToBase64(filePPTX) : null
    const filePDFBase64 = filePDF ? await fileToBase64(filePDF) : null

    console.log(typeof filePPTXBase64)
    console.log(typeof filePDFBase64)

    setBase64PPTX(filePPTXBase64 as string)
    setBase64PDF(filePDFBase64 as string)
  }

  const decode = async () => {
    const decodedFilePPTX = base64PPTX ? await base64ToPPTX(base64PPTX) : null
    const decodedFilePDF = base64PDF ? await base64ToPDF(base64PDF) : null

    console.log(filePPTX)
    console.log(filePDF)

    setDecodedPDF(decodedFilePDF)
    setDecodedPPTX(decodedFilePPTX)
  }

  return (
    <>
      <p>ファイルアップロード</p>
      <form>
        <div>
          <input type="file" accept='.pptx' onChange={handleFilePPTX} />
          <input type="file" accept='.pdf' onChange={handleFilePDF} />
        </div>
        <button type="submit" onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>送信</button>
      </form>
      <button onClick={encode}>encode</button>
      <button onClick={decode}>decode</button>

      <p>default file</p>
      <div>
        <p>PDF</p>
        {
          pdfurl && <a href={pdfurl}>{pdfurl}</a>
        }
        <p>PPTX</p>
        {
          pptxurl && <a href={pptxurl}>{pptxurl}</a>
        }
      </div>

      <p>decoded file</p>
      <div>
        <p>PDF</p>
        {
          decodedPDF && <a href={decodedPDF && URL.createObjectURL(decodedPDF)}>pdf</a>
        }
        <p>PPTX</p>
        {
          decodedPPTX && <a href={decodedPPTX && URL.createObjectURL(decodedPPTX)}>pptx</a>
        }
      </div>
    </>
  )
}

export default Home