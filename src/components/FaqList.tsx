import { useState } from "react";
import FaqItem from "./Elements/FaqItem";

const faqs = [
  {
    question: "Apa jenis bunga yang tersedia di Lupy Florist?",
    answer: "Di Lupy Florist, kami menawarkan berbagai jenis bunga segar, termasuk mawar, lili, anggrek, dan banyak lagi. Kami juga menyediakan rangkaian bunga yang dipersonalisasi untuk berbagai acara, seperti pernikahan, ulang tahun, dan acara spesial lainnya."
  },
  {
    question: "Apakah Lupy Florist menyediakan layanan pengiriman?",
    answer: "Ya, kami menyediakan layanan pengiriman untuk semua pesanan bunga. Kami berkomitmen untuk memastikan bunga Anda tiba tepat waktu dan dalam kondisi sempurna. Silakan cek area pengiriman kami di situs web untuk informasi lebih lanjut."
  },
  {
    question: "Bagaimana cara melakukan pemesanan di Lupy Florist?",
    answer: "Anda dapat melakukan pemesanan melalui situs web kami dengan memilih produk yang Anda inginkan dan mengikuti langkah-langkah yang ada. Jika Anda memiliki pertanyaan atau membutuhkan bantuan, Anda juga dapat menghubungi tim layanan pelanggan kami melalui telepon atau email."
  }
];

const FaqList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className='flex justify-center'>
        <div className='w-full'>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleFAQClick(index)}
            />
          ))}
        </div>
      </div>
  );
};

export default FaqList;