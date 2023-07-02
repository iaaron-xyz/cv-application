import html2canvas from "html2canvas"
import {jsPDF } from 'jspdf';

const Navbar = ( { printRef, darkMode, setDarkMode } ) => {

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = ((imgProperties.height) * pdfWidth) / (imgProperties.width);

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('cv.pdf');
  }

  const handleDarkModeBtn = () => {
    // toggle dark class to html
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('dark');
    setDarkMode(!darkMode);
  }

  return (
    <div className="flex w-full bg-slate-900 text-white p-6">
      <h1 className="main-font text-4xl">CV Creator</h1>
      <div className="ml-auto">
        <button className="mono-font p-2 mr-4 dark:bg-white dark:text-slate-950 rounded-md bg-slate-900 border border-white text-white" onClick={handleDarkModeBtn}>{darkMode ? 'Light' : 'Dark'}</button>
        <button className="p-2 bg-emerald-600 rounded-md" onClick={handleDownloadPdf}>Generate PDF</button>
      </div>
    </div>
  )
}

export default Navbar