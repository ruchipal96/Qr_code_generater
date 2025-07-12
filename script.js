function generateQRCode() {
  const container = document.getElementById("qrcode");
  const input = document.getElementById("text").value;

  // Clear old QR code if any
  container.innerHTML = "";

  if (input.trim() === "") {
    alert("Please enter a valid URL or text");
    return;
  }

  // Generate QR Code
  new QRCode(container, {
    text: input,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}
