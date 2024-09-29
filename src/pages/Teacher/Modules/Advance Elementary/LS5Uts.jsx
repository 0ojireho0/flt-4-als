import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const pdfjsVersion = '3.11.174';

export default function LS5Uts() {
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfContent, setPdfContent] = useState(null);
    const [getAllPDF, setgetAllPDF] = useState([]);
    const [originalName, setOriginalName] = useState("")

    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
      };

    const handleUpload = async () => {
        if (pdfFile) {
          const formData = new FormData();
          formData.append('pdf', pdfFile);
    
          try {
            const response = await axios.post('http://localhost:8000/api/ls5uts/upload', formData);
            console.log(response)
            alert('PDF uploaded successfully!');
          } catch (error) {
            console.error('Error uploading PDF:', error);
          }
        } else {
          alert('Please select a PDF file first');
        }
      };

      const fetchPdfContents = async (id, original_name) => {
        try {
          const response = await axios.get(`http://localhost:8000/api/ls5uts/${id}`, {
            responseType: 'arraybuffer',
          });
          setPdfContent(response.data);
          setOriginalName(original_name)
        } catch (error) {
          console.error('Error fetching PDF content:', error);
        }
      };

      useEffect(() => {
        const fetchContent = async () => {
          try {
            const res = await axios.get('http://localhost:8000/api/ls5uts');
            console.log(res.data.pdf); // Log the response
            setgetAllPDF(res.data.pdf);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchContent();
      }, []);

  return (
    <>
    <div className='flex gap-24'>
        <div>
            <h1 className=' font-bold text-xl'>Upload for LS1 Communication Skills</h1>
            <input type="file" accept="application/pdf" 
            onChange={handleFileChange} 
            className="my-4" />
            <button 
            onClick={handleUpload} 
            className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
                Upload PDF
            </button>
            <div>
            {getAllPDF.map((pdf, i) => {
                return (
                <div key={i} onClick={()=>fetchPdfContents(pdf.id, pdf.original_name)}>
                    {/* <h1>{pdf.id}</h1> */}
                    <h1>{pdf.original_name}</h1>
                </div>
                );
            })}
            </div>

        </div>
        <div>
            {/* <h1 className=' font-bold text-xl'>Upload for LS1 Communication Skills</h1> */}
            {pdfContent && (
                <div className="mt-4 border p-4 w-[35rem]">
                    <p>{originalName}</p>
                <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`}>
                    <Viewer fileUrl={URL.createObjectURL(new Blob([pdfContent], { type: 'application/pdf' }))} />
                </Worker>
                </div>
            )}
        </div>
    </div>



    </>
  )
}