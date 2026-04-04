import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

const Card = ({ card, index }) => {
  const [spot, setSpot] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const mouseHandler = (e) => {
    if (!cardRef.current) return

    const bounds = cardRef.current.getBoundingClientRect()

    setSpot({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={mouseHandler}
      className="group relative h-full overflow-hidden rounded-2xl p-[2px] sm:m-2"
    >
      {/* normal border */}
      <div className="absolute inset-0 rounded-2xl bg-gray-200 dark:bg-gray-700" />

      {/* moving border glow */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(
            260px circle at ${spot.x}px ${spot.y}px,
            rgba(168,85,247,0.65) 0%,
            rgba(59,130,246,0.45) 35%,
            rgba(34,211,238,0.25) 55%,
            transparent 75%
          )`,
        }}
      />

      {/* inner card */}
      <div className="relative z-10 h-full w-full rounded-[14px] bg-white dark:bg-gray-900">
        {/* moving inner soft glow */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-[14px] transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `radial-gradient(
              240px circle at ${spot.x}px ${spot.y}px,
              rgba(168,85,247,0.10) 0%,
              rgba(59,130,246,0.07) 35%,
              rgba(34,211,238,0.04) 55%,
              transparent 75%
            )`,
          }}
        />

        <div className="relative z-20 flex h-full w-full items-start gap-5 rounded-[14px] px-5 py-5 sm:items-center sm:gap-6 sm:px-6 sm:py-6">
          <div className="shrink-0 rounded-full dark:bg-gray-700">
            <img
              src={card.img}
              alt={card.title}
              className="m-1.5 w-14 rounded-full dark:bg-gray-900"
            />
          </div>

          <div className="min-w-0 flex-1 text-start">
            <h1 className="mb-1.5 break-words whitespace-normal text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
              {card.title}
            </h1>
            <p className="break-words whitespace-normal text-xs leading-relaxed text-gray-500 dark:text-white/70 sm:text-sm">
              {card.text}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card