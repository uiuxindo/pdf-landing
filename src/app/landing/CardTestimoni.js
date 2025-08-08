import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
import { Card } from 'react-bootstrap';

const CardTestimoni = () => {

  const dataTestimoni = [
    {
      id: 1,
      text: 'Materi di acara PDF sangat daging dan menarik! Semua narasumber sangat ahli di bidang mereka dan kita belajar banyak hal baru yang sesuai dengan standar industri dan bukan template materi di webinar yang lain. Saya juga mengikuti game challenge crazy 15 dimana dalam 15 menit kita melakukan desain cepat sebagai pengaplikasian apa yang kita pelajari selama PDF berlangsung, jadi kita langsung praktek setelah mempelajari sesuatu. Pengalaman di PDF 2025 ini sangat menarik meskipun saya baru pertama kali join dan definitely will be back for PDF 2026! 🥳',
      participant: 'Albert Fernando',
      avatar:'/Assets/Testimoni/Participant 1.png',
      status: 'Pemenang Crazy 15 UI/UX Challenge'
    },
    {
      id: 2,
      text: 'Senang banget bisa jadi bagian dari UPDC 2025! Dari awal challenge sampai pitching, semua prosesnya seru dan bikin aku banyak belajar. Materi di PDF 2025 juga ngebantu banget, mulai dari ngasah pemahaman soal desain sampai tips presentasi yang kepake banget pas pitching .',
      avatar:'/Assets/Testimoni/Participant 4.png',
      participant: 'Nahdah Syafqoh',
      status: 'Pemenang UPDC 2025'
    },
    {
      id: 3,
      text: 'Mengikuti acara UIUXINDO Product Design Challenge & Fun Games adalah pengalaman yang seru dan bermanfaat! Tantangannya mendorong saya untuk berpikir kreatif dalam waktu terbatas, sementara sesi fun games membuat suasana jadi santai dan menyenangkan. Benar-benar kombinasi belajar dan hiburan yang pas!',
      avatar:'/Assets/Testimoni/Female Avatar.png',
      participant: 'Fadiya Alyagina',
      status: 'Pemenang UPDC 2025'
    },
    {
      id: 4,
      text: 'Saya sangat bersyukur diberikan kesempatan untuk bisa belajar mengenai dunia UI UX Design melalui event Product Design Festival 2025 dari UIUXINDO ini. Melalui event ini, saya merasa wawasan saya tentang dunia UI UX Design semakin bertambah, apalagi materi yang disampaikan dibawakan oleh mentor profesional dan disampaikan secara lengkap dan sangat insightful mulai dari level pemula hingga ke level dunia kerja. Saya sangat berterima kasih atas ilmu yang telah diberikan selama event ini. Pada event ini juga saya sangat menyukai ketika sesi praktik setelah materi telah disampaikan dimana sesi ini semakin membuat saya menjadi lebih paham sekaligus mendapat feedback dari para mentor. Overall, event ini sangat membantu saya untuk belajar dan mempersiapkan diri saya dalam karir UI UX Design. Terima kasih kepada pihak UIUXINDO telah membuat acara yang sangat bermanfaat ini.',
      avatar:'/Assets/Testimoni/Participant 2.png',
      participant: 'Via Angelya',
      status: 'Peserta Teraktif PDF 2025'
    },
    {
      id: 5,
      text: 'Gamesnya seru dan gamesnya menantang peserta untuk mengasah skill tentang membuat produk dengan desain yang bagus. ',
      avatar:'/Assets/Testimoni/Male Avatar.png',
      status: 'Peserta PDF 2025',
      participant: 'Ahmad Fauzan',
    },
    {
      id: 6,
      text: 'Bagus, pembicaranya juga bagus bagus, materinya daging banget, moderatornya juga asikm, bikin suasananya hidup, keren dah pokoknyaa',
      avatar:'/Assets/Testimoni/Male Avatar.png',
      participant: 'Wayne Joel Marcelino',
      status: 'Pemenang UPDC 2025'
    },
    {
      id: 7,
      text: 'Terimakasih untuk segenap Team UIUXINDO! Selain bisa dapat experience baru mengikuti challenge, disini pematerinya insightful dan bisa berkoneksi dan berkomunitas dengan teman - teman yang sudah terjun maupun baru memulai karir membantu saya untuk pengembangan portfolio yang jauh lebih baik.',
      avatar:'/Assets/Testimoni/Participant 3.png',
      participant: 'Maria Anes',
      status: 'Peserta PDF 2026'
    },
    {
      id: 8,
      text: 'Sebulan ikut Product Design Festival 2025 bener-bener gak nyesel! Materi yang dibawain oleh narasumber sangat daging, didukung sama moderator yang jago menjaga suasana supaya tetep seru dan gak ngebosenin. Jadwalnya juga rapi, semua sesi tepat waktu, dan infonya selalu jelas selama acara.',
      avatar:'/Assets/Testimoni/Participant 5.png',
      status: 'Peserta PDF 2025',
      participant: 'Alan Iksan Ilyasa',
    },
    {
      id: 9,
      text: 'Pengalaman yang seru dan menantang. Saya belajar banyak tentang proses desain produk secara kolaboratif, sekaligus menikmati suasana kompetitif yang menyenangkan. Acara ini benar-benar memperluas wawasan dan jaringan saya di dunia UI/UX',
      avatar:'/Assets/Testimoni/Male Avatar.png',
      participant: 'Nabil Arif Triyanto',
      status: 'Peserta PDF 2025'
    },
  ];

  return (
      <div className="masonry-container">
        {dataTestimoni.map((item) => (
          <Card key={item.id} className="masonry-item card rounded-4 mb-4">
            <Card.Body>
              <Image
                className="mb-md-3 img-fluid"
                src="/Assets/Testimoni/quote-down.png"
                width={48}
                height={48}
                alt="Quote Icon"
              />
              <Card.Text className="card-text mb-4">{item.text}</Card.Text>
              <div className="d-flex flex-row align-items-center border-top pt-3">
                <Image
                  className="img-fluid"
                  src={item.avatar}
                  width={44}
                  height={44}
                  alt={`${item.participant}'s avatar`}
                />
                <div className="ms-3">
                  <h5 className="mb-0">{item.participant}</h5>
                  <p className="text-grey mb-0">{item.status}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

export default CardTestimoni;
