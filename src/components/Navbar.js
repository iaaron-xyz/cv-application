import html2canvas from "html2canvas"
import {jsPDF } from 'jspdf';

const Navbar = ( { printRef } ) => {

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    console.log(imgProperties);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = ((imgProperties.height) * pdfWidth) / (imgProperties.width);

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('cv.pdf');
  }

  return (
    <div className="flex w-full bg-slate-900 text-white p-6">
      <h1 className="main-font text-4xl">CV Creator</h1>
      <button className="ml-auto p-2 bg-emerald-600 rounded-md" onClick={handleDownloadPdf}>Generate PDF</button>
    </div>
  )
}

export default Navbar