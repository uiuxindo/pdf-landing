'use client'

import Link from "next/link"
import { useState } from 'react'
import BriefModal from "@/app/UPDC-2026/Modal Component/briefModal"
import SubmitModal from "@/app/UPDC-2026/Modal Component/submitModal"

export default function BenefitCards({ cardsData = [] }) {

  const [show, setShow] = useState(false)
  const [showBrief, setShowBrief] = useState(false)
  const [showSubmit, setShowSubmit] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div className="container">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={card.id} className={`card-benefit col-lg-6 px-0 ${
              index === 0 ? 'pe-lg-3' : 'ps-lg-3'
            }`}
          >
            <div className="card h-100 w-100 rounded-4" style={{ borderColor: card.theme }}>
              <div className="card-body d-flex flex-column card-body-benefit">

                <div className={`card-heading ${card.bgClass} ${card.subheading ? 'brief-heading' : ''}`}>
                  <div className="text-center py-3 px-3">
                    <p className="fw-700 mb-1 heading-benefit-1" style={{ color: card.titleColor }} dangerouslySetInnerHTML={{ __html: card.title }}>
                      {/* {card.title} */}
                    </p>

                    {card.subtitle && (
                      <p className="mb-0 card-subheading-benefit">{card.subtitle}</p>
                    )}
                  </div>
                </div>

                {/* BODY */}
                {card.subheading && (
                  <p className="text-start mb-0 fw-700 subheading-briefcard">{card.subheading}</p>
                )}

                {card.desc && (
                  <p className="text-start mb-0 py-3 desc-briefcard">{card.desc}</p>
                )}
                {card.closing && (
                  <p className="text-start fw-600 mb-3 desc-briefcard">{card.closing}</p>
                )}

                {card.closing && (
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedCard(card)
                      setShow(true)
                    }}
                    className="btn rounded-pill px-4 py-2 fw-600 mt-2 btn-brief"
                    style={{
                      backgroundColor: '#FFB929',
                      width: 'fit-content'
                    }}
                  >
                    See Brief
                  </Link>
                )}

                {/* list untuk homeCards */}
                {card.items && (
                  <ul className="list-unstyled mb-0 mt-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="d-flex mb-3">
                        <i className="bi bi-check-circle-fill me-2" style={{ color: card.theme }}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>

      <BriefModal show={show} onHide={() => setShow(false)} data={selectedCard}
        onSubmitClick={() => {
          setShow(false)

          setTimeout(() => {
            setShowSubmit(true)
          }, 200)
        }}
      />

      <SubmitModal show={showSubmit} onHide={() => setShowSubmit(false)} 
                  modalColor={selectedCard?.modal?.modalColor}
                  linkColor={selectedCard?.modal?.dateColor}
                  stepperColor={selectedCard?.modal?.stepperColor}
      />

    </div>
  )
}