import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const pdfjsVersion = '3.11.174';

export default function RegularStudentFilipinoModule() {
    const [pdfContent, setPdfContent] = useState(null);
    const [getAllPDF, setgetAllPDF] = useState([]);
    const [originalName, setOriginalName] = useState("");
    const [currentPdfId, setCurrentPdfId] = useState(null); // Track the selected PDF

    const fetchPdfContents = async (id, original_name) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/filipino-module/${id}`, {
                responseType: 'arraybuffer',
            });
            setPdfContent(response.data);
            setOriginalName(original_name);
            setCurrentPdfId(id); // Set the current PDF ID
        } catch (error) {
            console.error('Error fetching PDF content:', error);
        }
    };

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/filipino-module');
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
            <div className="flex gap-24">
                <div>
                    <h1 className="font-bold text-xl">Learning Materials for Filipino</h1>
                    <div>
                        {getAllPDF.map((pdf, i) => {
                            const isSelected = pdf.id === currentPdfId; // Check if this PDF is selected
                            return (
                                <div
                                    className={`flex gap-10 cursor-pointer ${
                                        isSelected ? 'bg-green-200 font-bold' : ''
                                    }`} // Add styling for the selected PDF
                                    key={i}
                                    onClick={() => fetchPdfContents(pdf.id, pdf.original_name)}
                                >
                                    <h1>{pdf.original_name}</h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div>
                    {pdfContent && (
                        <div className="mt-4 border p-4 w-[35rem]">
                            <p>{originalName}</p>
                            <Worker
                                workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`}
                            >
                                <Viewer
                                    fileUrl={URL.createObjectURL(
                                        new Blob([pdfContent], { type: 'application/pdf' })
                                    )}
                                />
                            </Worker>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
