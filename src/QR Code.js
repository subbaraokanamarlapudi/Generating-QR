// API = "https://api.qrserver.com/v1/create-qr-code/"

function QRCode(qrData, qrSize) {
    const qrServerBaseUrl = 'https://api.qrserver.com/v1/create-qr-code/';
    const qrImageUrl = `${qrServerBaseUrl}?data=${encodeURIComponent(qrData)}&size=${qrSize}`;
    return qrImageUrl;
}

export default QRCode;
