// Fungsi untuk mengonversi tanggal ke format dd/MM/yy
export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);  // Ambil 2 digit tahun
    return `${day}/${month}/${year}`;
};
