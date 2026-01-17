'use client'

const cardsData = [
  {
    id: 1,
    title: 'Exclusive Participant Benefits',
    subtitle: 'Get premium perks you can’t find anywhere else',
    theme: '#4DA2FF',
    bgClass: 'bg-blue',
    titleColor: '#1244DA',
    items: [
      'Sertifikat Digital',
      'Hadiah uang tunai hingga 1 Juta Rupiah',
      'Gratis Ebook UI/UX untuk Pemula dari UIUXINDO',
      'Gratis Handbook & Video Recording PDF 2026',
      'Diskon hingga 30% untuk semua e-book & video premium UIUXINDO',
      'Diskon Bootcamp Fullstack UI/UX Design dari UIUXINDO Academy',
      'Akses gratis ke semua acara rutin dari UIUXINDO & Partners',
    ],
  },
  {
    id: 2,
    title: 'Skill & Career Upgrade',
    subtitle: 'Upgrade your skills. Elevate your career. Stand out everywhere',
    theme: '#FF4DA2',
    bgClass: 'bg-pink',
    titleColor: '#D10557',
    items: [
      'Dapatkan strategi berkarir sebagai UI/UX Designer & Software Engineer profesional di perusahaan global',
      'Ambil kesempatan untuk sesi mentoring bersama mentor profesional',
      'Tingkatkan skill bahasa Inggris & public speakingmu di dunia profesional',
      'Seimbangkan kehidupanmu dengan sesi mental health agar lebih mindfull dalam berkarir',
      'Tingkatkan portfolio berkualitas & menarik di mata perusahaan global',
    ],
  },
]

export default function BenefitCards() {
  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={card.id} 
               className={`card-benefit col-lg-6 px-0 ${
                          index === 0 ? 'pe-lg-3' : 'ps-lg-3'
                        }`}>
            <div className={`card h-100 w-100 rounded-4`} style={{borderColor:card.theme}}>
              <div className="card-body card-body-benefit d-flex flex-column">
                
                <div className={`card-heading ${card.bgClass}`}>
                  <div className="text-center p-md-3 py-3" style={{paddingLeft:'12px', paddingRight:'12px'}}>
                    <p
                      className="card-heading-benefit fw-700 mb-1"
                      style={{ color: card.titleColor }}
                    >
                      {card.title}
                    </p>
                    <p className="mb-0">{card.subtitle}</p>
                  </div>
                </div>

                <ul className="list-unstyled mb-0">
                  {card.items.map((item, index) => (
                    <li key={index} className="d-flex ms mb-3">
                      <i className={`bi bi-check-circle-fill me-2`} style={{color:card.theme}}></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
