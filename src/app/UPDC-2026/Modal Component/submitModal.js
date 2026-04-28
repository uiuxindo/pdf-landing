'use client'

import Modal from 'react-bootstrap/Modal'
import Link from 'next/link'

export default function SubmitModal({ show, onHide, modalColor, linkColor }) {

	  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton className='modal-header-submit' 
										style={{backgroundColor: modalColor}}>
				<Modal.Title className='mb-md-0 mb-4 fw-700 modal-maintitle'>Isi Data Diri</Modal.Title>
      </Modal.Header>

      <Modal.Body className='modal-body-submit' style={{backgroundColor: modalColor}}>
				<div className='d-flex flex-column align-items-center'>
					<div className='w-100 d-flex flex-column align-items-center'>
						<div className='w-100 p-2 radius-12' style={{background:'#FFB929'}}>
							<div className='p-3 radius-8' style={{border:'dashed 4px #000000'}}>
								<p className='mb-0 fw-700 text-center heading-submit'>Isi form / CTA submit di sini</p>
							</div>
						</div>
						<div className='' style={{background: linkColor, width:'fit-content', padding:'12px 240px', borderBottomLeftRadius:'20px', borderBottomRightRadius:'20px'}}>
							<p className='mb-0 fw-600 text-white link-submit'>bit.ly/uidc-2026</p>
						</div>
					</div>
					<Link href='/payment' className="fw-600 px-4 py-3 mt-5 rounded-pill" style={{background:"#FFB929", color:'#7A2F0D'}}>Next</Link>
				</div>
      </Modal.Body>
    </Modal>
  )
}