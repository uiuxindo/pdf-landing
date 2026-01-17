'use client'

import Image from 'next/image'

const tagData = [
  {
    id: 1,
    tagColor: '#22C55E',
    tagContent: 'LIVE Portfolio Review',
    tagIcon: '/Assets/Revamp/Tag Icon/task-square.png',
  },
  {
    id: 2,
    tagColor: '#F59E0B',
    tagContent: 'Virtual Games',
    tagIcon: '/Assets/Revamp/Tag Icon/game.png',
  },
  {
    id: 3,
    tagColor: '#EC4899',
    tagContent: 'LIVE Design Battle Show',
    tagIcon: '/Assets/Revamp/Tag Icon/pen-add.png',
  },
  {
    id: 4,
    tagColor: '#60A5FA',
    tagContent: 'Remote Working Session',
    tagIcon: '/Assets/Revamp/Tag Icon/house-2.png',
  },
  {
    id: 5,
    tagColor: '#22C55E',
    tagContent: 'Mental Health Session',
    tagIcon: '/Assets/Revamp/Tag Icon/heart-tick.png',
  },
  {
    id: 6,
    tagColor: '#F59E0B',
    tagContent: 'LIVE Workshop UI/UX & Software Engineering',
    tagIcon: '/Assets/Revamp/Tag Icon/monitor-recorder.png',
  },
  {
    id: 7,
    tagColor: '#FF4DA2',
    tagContent: 'English Professional & Public Speaking',
    tagIcon: '/Assets/Revamp/Tag Icon/microphone-2.png',
  },
  {
    id: 8,
    tagColor: '#4DA2FF',
    tagContent: 'Exclusive Job Info',
    tagIcon: '/Assets/Revamp/Tag Icon/brifecase-tick.png',
  },
]

export default function CarouselTag() {
  return (
    <div className="tag-carousel-wrapper">
      <div className="tag-carousel-track">
        {[...tagData, ...tagData].map((item, index) => {
          const rotateDeg = index % 2 === 0 ? '3deg' : '-3deg'

          return (
            <div className="tag-carousel-item" key={`${item.id}-${index}`}>
              <div
                className="tag-pill text-white fw-600 d-flex align-items-center ps-2 py-2 pe-3"
                style={{
                  backgroundColor: item.tagColor,
                  transform: `rotate(${rotateDeg})`,
                }}
              >
                <div className="tag-icon">
                  <Image
                    src={item.tagIcon}
                    alt={item.tagContent}
                    width={24}
                    height={24}
                  />
                </div>
                {item.tagContent}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
