const QRCode = require('qrcode');

const generateQRCode = async (text) => {
    try {
      const qrString = await QRCode.toDataURL(text);
      return qrString;
    } catch (error) {
    //   console.error('Error generating QR code:', error);
      return "";
    }
  };

  export { generateQRCode };