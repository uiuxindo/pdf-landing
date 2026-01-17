'use client'; 

import { useEffect, useRef, useState, forwardRef } from 'react'; 
import { toPng } from 'html-to-image'; 
import Card from 'react-bootstrap/Card'; 
import Image from 'next/image'; 

const galleryCardData = [ 
  { id: 1, 
    image: '/Assets/Revamp/Highlight1.png', 
    title: 'Product Design Festival', 
    description: 'Peserta dan mentor dari seluruh Indonesia berkumpul!' 
  }, 
  { 
    id: 2, 
    image: '/Assets/Revamp/Highlight2.png', 
    title: 'Task Mapping', 
    description: 'Diskusi seru memetakan proses desain bersama mentor' 
  }, 
  { 
    id: 3, 
    image: '/Assets/Revamp/Highlight3.png', 
    title: 'Case Study', 
    description: 'Kolaborasi merancang solusi dengan pengguna nyata' 
  },
  {
    id: 4,
    image: '/Assets/Revamp/Highlight4.png',
    title: 'Kahoot Challenge',
    description:'Game interaktif seru menguji pemahaman desain',
  },
  {
    id: 5,
    image: '/Assets/Revamp/Highlight5.png',
    title: 'Scrum Workshop',
    description:'Simulasi kerja nyata menggunakan metode agile',
  },
]; 

const CardItem = forwardRef(
  function CardItem( { title, description, image }, ref ) { 
    return ( 
    <div className='card-container position-relative' ref={ref}> 
      <div className='blue-clip'/>
      <Card className="px-3" 
            style={{ width: 360, borderRadius: 24, overflow: 'hidden', paddingTop:'28px', paddingBottom:'28px'}} > 
        <Card.Body className="p-0"> 
          {image && (
            <div className="card-image-wrapper">
              <img
                src={image}
                alt={title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                crossOrigin="anonymous"
              />
            </div>
          )}
          <Card.Title className="mb-2 mt-2 fw-700" style={{ fontSize: '24px' }}> {title} </Card.Title> 
          <Card.Text className="" style={{fontSize:'18px', lineHeight:'18px'}}>{description}</Card.Text> 
        </Card.Body> 
      </Card> 
    </div> 
    ); 
  }); 
    
    export default function GalleryCardGenerator({ onGenerated }) { 
      
      const cardRefs = useRef([]); 
      const hasGeneratedRef = useRef(false); 
      const [ready, setReady] = useState(false); 
      
      useEffect(() => { setReady(true); }, []); 
        useEffect(() => { 
          if (!ready) return; 
          if (hasGeneratedRef.current) return; 
          hasGeneratedRef.current = true; 
          
          const generateImages = async () => { 
            const results = []; for (let i = 0; i < cardRefs.current.length; i++) { 
              const node = cardRefs.current[i]; 
              if (!node) continue; 
              const dataUrl = await toPng(node, { 
                pixelRatio: 2, 
                cacheBust: true, 
                backgroundColor: '#ffffff' 
              }); 
              results.push({ 
                image: dataUrl, 
                text: galleryCardData[i].title 
              }); 
            } 
            
            onGenerated(results); 
          }; 
          
          generateImages(); }, [ready, onGenerated]); 
          
          return ( 
            <div style={{ position: 'absolute', left: '-9999px', top: 0 }} > 
              {galleryCardData.map((item, index) => ( 
                <CardItem key={item.id} {...item} ref={(el) => (cardRefs.current[index] = el)} /> 
              ))} 
            </div> 
          ); 
        }