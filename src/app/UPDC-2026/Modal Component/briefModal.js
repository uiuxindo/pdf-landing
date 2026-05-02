'use client'

import Modal from 'react-bootstrap/Modal'
import Link from 'next/link'
import { useState } from 'react'
import SubmitModal from './submitModal'

export default function BriefModal({ show, onHide, data, onSubmitClick }) {
  if (!data) return null

  const modalData = data.modal

  return (
    <Modal show={show} onHide={onHide} centered size="lg" contentClassName='modal-brief-content'>
      <Modal.Header closeButton className='d-flex flex-column justify-content-between align-items-lg-center modal-header-custom' style={{backgroundColor:modalData.modalColor}}>
				<div className='w-100'>
					<div className='d-flex flex-lg-row flex-column justify-content-between align-items-lg-center'>
						<Modal.Title className='mb-md-0 mb-4 fw-700 modal-maintitle'>{modalData.mainTitle}</Modal.Title>
						<div className='d-flex flex-row justify-content-center align-items-center radius-8 date-brief' 
								 style={{backgroundColor:modalData.dateColor}}>
							<i className="bi bi-calendar-week me-2 text-white"></i>
							<p className='mb-0 text-white fs-md fw-600'>{modalData.date}</p>
						</div>
					</div>
				</div>
      </Modal.Header>

        <Modal.Body className='pt-0' style={{backgroundColor:modalData.modalColor}}>

					{/* Latar Belakang & Fitur */}
					<div className='p-md-4 p-3 bg-white radius-8 mb-4'>
						<div className='mb-4'>
							<p className='fw-700 mb-1 content-title'>{modalData.background.title}</p>
							<p>{modalData.background.content}</p>
						</div>
						<div>
							<p className="mt-3 fw-700 mb-1 fs-xl content-title">{modalData.feature.title}</p>
							<ol className='mb-0' style={{paddingLeft:'16px'}}>
									{modalData.feature.items.map((item, i) => (
									<li key={i}>{item}</li>
									))}
							</ol>
						</div>
					</div>
					
					{/* Deliverables & Kriteria */}
					<div className='p-md-4 p-3 bg-white radius-8 mb-4'>
						<div className='mb-4'>
							<p className="fw-700 mb-1 content-title">{modalData.deliverable.title}</p>
							<ol className='mb-0' style={{paddingLeft:'16px'}}>
									{modalData.deliverable.items.map((item, i) => (
									<li key={i}>{item}</li>
									))}
							</ol>
						</div>
						<div>
							<p className="fw-700 mb-1 content-title">{modalData.criteria.title}</p>
							<ol className='mb-0' style={{paddingLeft:'16px'}}>
									{modalData.criteria.items.map((item, i) => (
									<li key={i}>{item}</li>
									))}
							</ol>
						</div>
					</div>

					{/* Rules * Upload */}
					<div className='p-md-4 p-3 bg-white radius-8 mb-4'>
						<div className='mb-4'>
							<p className="fw-700 mb-1 content-title">{modalData.rules.title}</p>
							<ol className='mb-0' style={{paddingLeft:'16px'}}>
									{modalData.rules.items.map((item, i) => (
									<li key={i}>{item}</li>
									))}
							</ol>
						</div>
						<div>
							<p className="fw-700 mb-1 content-title">{modalData.upload.title}</p>
							<ol className='mb-0' style={{paddingLeft:'16px'}}>
									{modalData.upload.items.map((item, i) => (
									<li key={i}>{item}</li>
									))}
							</ol>
						</div>
					</div>

      </Modal.Body>
			<Modal.Footer className='justify-content-center' style={{backgroundColor:modalData.modalColor}}>
        <Link href="https://bit.ly/cover-uidc2026" target='_blank' className="rounded-pill fw-600 px-4 py-3 me-md-4" style={{color:'#7A2F0D', border:'solid 1px #7A2F0D'}}>
          Download Cover
        </Link>
        <Link href="" 
							className="fw-600 px-4 py-3 rounded-pill" style={{background:"#FFB929", color:'#7A2F0D'}}
							onClick={(e) => {
                e.preventDefault()
                onSubmitClick()
              }}
				>
          Submit Challenge
        </Link>
      </Modal.Footer>
    </Modal>
  )
}