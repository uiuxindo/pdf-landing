'use client'

import Modal from 'react-bootstrap/Modal'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function SubmitModal({ show, onHide, modalColor, linkColor = '#4DA2FF', stepperColor }) {

		const [step, setStep] = useState(1)
		const activeColor = stepperColor || '#1751DE'
		const bgColor = modalColor || '#EEF7FF'

	  return (
    <Modal show={show} 
					 onHide={() => {
						setStep(1)
						onHide()
						}} 
					 centered size="lg">
      <Modal.Header closeButton className='modal-header-submit' 
										style={{backgroundColor: bgColor}}>
				{/* <Modal.Title className='mb-md-0 mb-4 fw-700 modal-maintitle'>Isi Data Diri</Modal.Title> */}
      </Modal.Header>

      <Modal.Body className='modal-body-submit' style={{backgroundColor: bgColor}}>

				<div className="stepper mb-5 d-flex flex-row justify-content-center align-items-center">
					<div className='d-flex flex-row align-items-center'>
						<div className='py-1 text-white fs-md rounded-circle me-2' 
								 style={{background: step === 1 ? activeColor : '#22C55E', paddingLeft:'13px',paddingRight:'13px'}}
						>
							1
						</div>
						<p className='mb-0 text-step' style={{ color: step === 1 ? activeColor : '#22C55E' }}>Isi Data Peserta</p>
					</div>
					<div className="mx-3"
							 style={{
								width: '60px',
								height: '2px',
								borderTop: step === 1 
									? `2px solid ${activeColor}` 
									: `2px dashed #22C55E`
							}}
					/>
					<div className='d-flex flex-row align-items-center'>
						<div className='py-1 text-white fs-md rounded-circle me-2'
								 style={{background: step === 2 ? activeColor : '#D1D1D1', paddingLeft:'11px', paddingRight:'11px'}}
						>
							2
						</div>
						<p className='mb-0 text-step' style={{ color: step === 2 ? activeColor : '#D1D1D1' }}>Upload Instagram</p>
					</div>
				</div>

				{step === 1 && (
					<div className='d-flex flex-column align-items-center'>
						<div className='w-100 d-flex flex-column align-items-center'>
							<div className='w-100 p-2 radius-12' style={{background:'#FFB929'}}>
								<div className='p-3 radius-8' style={{border:'dashed 3px #000000'}}>
									<p className='mb-0 fw-700 text-center heading-submit'>Isi form / CTA submit di sini</p>
								</div>
							</div>

							<div className='link-submit-container' style={{background: linkColor}}>
								<Link href="https://bit.ly/uidc-2026" target='_blank' className='mb-0 fw-600 text-white link-submit'>
									bit.ly/uidc-2026
								</Link>
							</div>
						</div>

						<Link href="" 
									onClick={(e) => {
										e.preventDefault()
										setStep(2)
									}}
									className="fw-600 px-4 py-3 mt-5 rounded-pill"
									style={{background:"#FFB929", color:'#7A2F0D', border:'none'}}
						>
							Next
						</Link>
					</div>
				)}

				{step === 2 && (
					<div className='d-flex flex-column align-items-center' style={{background:modalColor}}>
						<Image className="img-fluid" src="/Assets/Revamp/UPDC-Revamp/Banner Payment.png" width={420} height={420} alt=""/>
						<Link href="https://www.instagram.com/" onClick={() => setStep(2)} className="fw-600 px-4 py-3 mt-4 rounded-pill"
							style={{background:"#FFB929", color:'#7A2F0D'}}
						>
							Submit
						</Link>
					</div>
				)}

      </Modal.Body>
    </Modal>
  )
}