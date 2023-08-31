import React, { useState } from "react";
import QRCode from "qrcode.react";
import './index.css';
import html2canvas from "html2canvas";

function App() {
  const [qrData, setQrData] = useState('');
  const [qrSize, setQrSize] = useState(150);

  const handleDownload = async () => {
    const qrImageContainer = document.querySelector(".qr-image-container");

    if (qrImageContainer) {
      const canvas = await html2canvas(qrImageContainer);
      const qrImageUrl = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = qrImageUrl;
      link.download = 'qr_code.png';
      link.click();
    }
  }

  return (
    <div className="app">
      <h1 className="title"> QR Code Generator </h1>

      <div className="input-container">
        <label className="input-label"> QR URL: </label>
        <input
          className="input-field"
          type="text"
          value={qrData}
          onChange={(event) => setQrData(event.target.value)}
        />
      </div>

      <div className="input-container">
        <label className="input-label"> QR Size: </label>
        <input
          className="input-field"
          type="number"
          value={qrSize}
          onChange={(event) => setQrSize(event.target.value)}
        />
      </div>

      <div className="qr-code">
        <div className="qr-image-container">
          {/* Use the QRCode component to render the QR Code */}
          <QRCode value={qrData} size={qrSize} />
        </div>
      </div>

      <button className="download-button" onClick={handleDownload}>
        Download QR Code
      </button>
    </div>
  );
}

export default App;


