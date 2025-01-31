import { Button, Heading } from "@chakra-ui/react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Loader.css'
import { useRef } from "react";
import QRCode from "react-qr-code";


export default function Success( name){

  const pdfRef= useRef();
  
  let downloadPDF =()=>{
    // console.log(id)
    const input=pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData=canvas.toDataURL('image/png');
      const pdf= new jsPDF('p','mm','a4',true);
      const pdfWidth=pdf.internal.pageSize.getWidth();
      const pdfHeight=pdf.internal.pageSize.getHeight();
      const imgWidth=canvas.width;
      const imgHeight=canvas.height;
      const ratio=Math.min(pdfWidth/imgWidth , pdfHeight/imgHeight);
      const imgX=(pdfWidth-imgWidth *ratio)/2;
      const imgY=30;
      pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgHeight*ratio);
      pdf.save('Ticket.pdf')
    })
  }
  // console.log(id.id);
  console.log(name);
  return (
    <>
      <div className="marg" ref={pdfRef}>
          <div className='flex' >
            <img src='loca.png' className='loca'></img>
            <img src='sloth.png' className='sloth'></img>
          </div>
        <img src="image.png"></img>
        <Heading>Thank you for Purchasing Ticket to Loca Luz </Heading>
          <Heading>Name : {name.nam}</Heading>
          <Heading>Phone : {name.phone}</Heading>
          <Heading>Email : {name.email}</Heading>
          <Heading>Ticket : {name.ticket}</Heading>
          <Heading>Category : {name.cat}</Heading>
        <div className="dis">
        <QRCode
    size={256}
    style={{ height: "auto",backgroundColor:"black", maxWidth: "30%", width: "30%" }}
    value={name.id}
    viewBox={`0 0 256 256`}
    className="qr"
    />
    </div>
      </div>
      <div>
        <Button onClick={downloadPDF} colorPalette="teal" variant="solid" >Download Ticket</Button>
      </div>
    </>
  )
}
