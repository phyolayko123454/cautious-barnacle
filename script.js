function payAndDownload(fileUrl) {
  Swal.fire({
    title: 'ငွေပေးချေမှု',
    html: `
      <p>ဤဓာတ်ပုံကို ဒေါင်းလုပ်ရန် ထိုင်းဘတ် 50 ပေးချေရမည်။</p>
      <p>ဘဏ်အကောင့်: 012-345678-9</p>
      <p>QR Code: <br><img src="https://via.placeholder.com/150" alt="QR"></p>
    `,
    confirmButtonText: 'ငွေပေးချေပြီးပါပြီ',
    showCancelButton: true,
    cancelButtonText: 'မပေးချေသေးပါ'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('ကျေးဇူးတင်ပါတယ်', 'ဒေါင်းလုပ်စတင်ပါသည်...', 'success');
      setTimeout(() => {
        window.location.href = fileUrl;
      }, 1500);
    } else {
      Swal.fire('Cancel', 'ငွေပေးချေပြီးမှသာ ဒေါင်းလုပ်လုပ်နိုင်ပါသည်။', 'warning');
    }
  });
}

// Disable screenshot keys (F12, PrintScreen)
document.addEventListener('keydown', function(e) {
  if (e.key === 'F12' || e.key === 'PrintScreen') {
    e.preventDefault();
    alert("Screenshot ကို ကန့်သတ်ထားသည်။");
  }
});
