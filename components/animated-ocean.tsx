"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/use-animation-hook"

export function AnimatedOcean() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Enhanced office elements with more dynamic properties
    const desk = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      color: "#2c3e50",
      shadowColor: "rgba(0,0,0,0.4)",
      highlightColor: "#34495e",
      patternColor: "rgba(255,255,255,0.15)",
      patternSize: 15,
      woodGrainColor: "rgba(0,0,0,0.1)"
    }

    const computer = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      screenColor: "#1a1a1a",
      frameColor: "#2c3e50",
      glowColor: "rgba(52, 152, 219, 0.4)",
      screenGlow: "rgba(41, 128, 185, 0.3)",
      bezelColor: "#34495e",
      bezelWidth: 12,
      standColor: "#2c3e50",
      keyboardColor: "#34495e",
      keyboardGlow: "rgba(52, 152, 219, 0.2)"
    }

    const person = {
      x: 0,
      y: 0,
      headRadius: 0,
      bodyHeight: 0,
      armAngle: 0,
      bodyColor: "#34495e",
      skinColor: "#f5f6fa",
      hairColor: "#2c3e50",
      eyeColor: "#2c3e50",
      mouthAngle: 0,
      blinkTimer: 0,
      shirtColor: "#3498db",
      pantsColor: "#2c3e50",
      shoeColor: "#2c3e50"
    }

    const room = {
      windowColor: "rgba(52, 152, 219, 0.2)",
      curtainColor: "#34495e",
      plantColor: "#27ae60",
      potColor: "#7f8c8d",
      bookshelfColor: "#2c3e50",
      bookColors: ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6"],
      clockColor: "#ecf0f1",
      clockHandColor: "#2c3e50"
    }

    // Draw office background with enhanced effects
    const drawBackground = () => {
      const { width, height } = canvas.getBoundingClientRect()

      // Wall gradient with more sophisticated color stops
      const wallGradient = ctx.createLinearGradient(0, 0, 0, height)
      wallGradient.addColorStop(0, "#f5f6fa")
      wallGradient.addColorStop(0.4, "#dcdde1")
      wallGradient.addColorStop(0.7, "#c8c9cc")
      wallGradient.addColorStop(1, "#b2bec3")
      ctx.fillStyle = wallGradient
      ctx.fillRect(0, 0, width, height)

      // Draw window
      const windowWidth = width * 0.3
      const windowHeight = height * 0.4
      const windowX = width * 0.7
      const windowY = height * 0.1

      // Window frame
      ctx.fillStyle = "#34495e"
      ctx.fillRect(windowX - 5, windowY - 5, windowWidth + 10, windowHeight + 10)

      // Window glass
      ctx.fillStyle = room.windowColor
      ctx.fillRect(windowX, windowY, windowWidth, windowHeight)

      // Draw curtains
      ctx.fillStyle = room.curtainColor
      ctx.fillRect(windowX - 10, windowY, 10, windowHeight)
      ctx.fillRect(windowX + windowWidth, windowY, 10, windowHeight)

      // Draw plant
      const plantX = width * 0.1
      const plantY = height * 0.6
      ctx.fillStyle = room.potColor
      ctx.fillRect(plantX - 20, plantY, 40, 30)
      ctx.fillStyle = room.plantColor
      for (let i = 0; i < 5; i++) {
        ctx.beginPath()
        ctx.arc(plantX, plantY - 20, 30, i * Math.PI / 3, (i + 1) * Math.PI / 3)
        ctx.fill()
      }

      // Draw bookshelf
      const shelfX = width * 0.8
      const shelfY = height * 0.3
      ctx.fillStyle = room.bookshelfColor
      ctx.fillRect(shelfX, shelfY, 60, 200)

      // Draw books
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.fillStyle = room.bookColors[(i + j) % room.bookColors.length]
          ctx.fillRect(shelfX + 5 + j * 15, shelfY + 5 + i * 45, 12, 40)
        }
      }

      // Draw clock
      const clockX = width * 0.5
      const clockY = height * 0.2
      ctx.fillStyle = room.clockColor
      ctx.beginPath()
      ctx.arc(clockX, clockY, 30, 0, Math.PI * 2)
      ctx.fill()

      // Clock hands
      ctx.fillStyle = room.clockHandColor
      ctx.save()
      ctx.translate(clockX, clockY)
      ctx.rotate(time * 0.01)
      ctx.fillRect(-2, -20, 4, 20)
      ctx.restore()

      // Floor with enhanced pattern
      ctx.fillStyle = "#7f8c8d"
      ctx.fillRect(0, height * 0.7, width, height * 0.3)

      // Floor pattern with perspective
      for (let i = 0; i < width; i += 40) {
        ctx.beginPath()
        ctx.moveTo(i, height * 0.7)
        ctx.lineTo(i + 20, height)
        ctx.strokeStyle = "rgba(255,255,255,0.15)"
        ctx.stroke()
      }
    }

    // Draw desk with enhanced details
    const drawDesk = () => {
      const { width, height } = canvas.getBoundingClientRect()
      desk.width = width * 0.8
      desk.height = height * 0.2
      desk.x = width * 0.1
      desk.y = height * 0.5

      // Desk shadow with blur
      ctx.shadowColor = desk.shadowColor
      ctx.shadowBlur = 15
      ctx.fillStyle = desk.shadowColor
      ctx.fillRect(desk.x + 5, desk.y + 5, desk.width, desk.height)
      ctx.shadowBlur = 0

      // Desk main with wood grain
      ctx.fillStyle = desk.color
      ctx.fillRect(desk.x, desk.y, desk.width, desk.height)

      // Wood grain effect
      for (let i = 0; i < desk.width; i += 2) {
        ctx.beginPath()
        ctx.moveTo(desk.x + i, desk.y)
        ctx.lineTo(desk.x + i, desk.y + desk.height)
        ctx.strokeStyle = desk.woodGrainColor
        ctx.stroke()
      }

      // Desk highlight
      ctx.fillStyle = desk.highlightColor
      ctx.fillRect(desk.x, desk.y, desk.width, 2)

      // Desk pattern
      for (let i = 0; i < desk.width; i += desk.patternSize) {
        ctx.beginPath()
        ctx.moveTo(desk.x + i, desk.y)
        ctx.lineTo(desk.x + i + desk.patternSize, desk.y + desk.patternSize)
        ctx.strokeStyle = desk.patternColor
        ctx.stroke()
      }
    }

    // Draw computer with enhanced effects
    const drawComputer = () => {
      const { width, height } = canvas.getBoundingClientRect()
      computer.width = width * 0.3
      computer.height = height * 0.4
      computer.x = desk.x + desk.width * 0.1
      computer.y = desk.y - computer.height

      // Monitor glow
      ctx.shadowColor = computer.glowColor
      ctx.shadowBlur = 20
      ctx.fillStyle = computer.frameColor
      ctx.fillRect(computer.x, computer.y, computer.width, computer.height)
      ctx.shadowBlur = 0

      // Screen with glow
      ctx.shadowColor = computer.screenGlow
      ctx.shadowBlur = 15
      ctx.fillStyle = computer.screenColor
      ctx.fillRect(
        computer.x + computer.bezelWidth,
        computer.y + computer.bezelWidth,
        computer.width - computer.bezelWidth * 2,
        computer.height - computer.bezelWidth * 2
      )
      ctx.shadowBlur = 0

      drawCaribbeanMap()
    }

    // Draw person with enhanced details
    const drawPerson = () => {
      const { width, height } = canvas.getBoundingClientRect()
      person.x = desk.x + desk.width * 0.6
      person.y = desk.y
      person.headRadius = width * 0.03
      person.bodyHeight = height * 0.15
      person.armAngle = Math.sin(time * 0.05) * 0.2
      person.mouthAngle = Math.sin(time * 0.1) * 0.2
      person.blinkTimer = (person.blinkTimer + 1) % 60

      // Body with gradient
      const bodyGradient = ctx.createLinearGradient(
        person.x - 20,
        person.y - person.bodyHeight,
        person.x + 20,
        person.y
      )
      bodyGradient.addColorStop(0, person.bodyColor)
      bodyGradient.addColorStop(1, "#475569")
      ctx.fillStyle = bodyGradient
      ctx.fillRect(
        person.x - 20,
        person.y - person.bodyHeight,
        40,
        person.bodyHeight
      )

      // Head with hair
      ctx.beginPath()
      ctx.arc(person.x, person.y - person.bodyHeight - person.headRadius, person.headRadius, 0, Math.PI * 2)
      ctx.fillStyle = person.skinColor
      ctx.fill()

      // Hair
      ctx.beginPath()
      ctx.arc(person.x, person.y - person.bodyHeight - person.headRadius - 5, person.headRadius, 0, Math.PI)
      ctx.fillStyle = person.hairColor
      ctx.fill()

      // Eyes
      const eyeY = person.y - person.bodyHeight - person.headRadius - 5
      const eyeX = person.x - 5
      const eyeSize = 3

      if (person.blinkTimer < 5) {
        // Blinking
        ctx.beginPath()
        ctx.moveTo(eyeX - eyeSize, eyeY)
        ctx.lineTo(eyeX + eyeSize, eyeY)
        ctx.strokeStyle = person.eyeColor
        ctx.stroke()
      } else {
        // Open eyes
        ctx.beginPath()
        ctx.arc(eyeX, eyeY, eyeSize, 0, Math.PI * 2)
        ctx.fillStyle = person.eyeColor
        ctx.fill()
      }

      // Mouth
      ctx.beginPath()
      ctx.arc(person.x, eyeY + 10, 5, person.mouthAngle, Math.PI - person.mouthAngle)
      // Arms
      ctx.save()
      ctx.translate(person.x, person.y - person.bodyHeight * 0.7)
      ctx.rotate(person.armAngle)
      ctx.fillStyle = "#334155"
      ctx.fillRect(-5, 0, 10, person.bodyHeight * 0.4)
      ctx.restore()

      ctx.save()
      ctx.translate(person.x, person.y - person.bodyHeight * 0.7)
      ctx.rotate(-person.armAngle)
      ctx.fillStyle = "#334155"
      ctx.fillRect(-5, 0, 10, person.bodyHeight * 0.4)
      ctx.restore()
    }

    // Draw Caribbean map on computer screen
    const drawCaribbeanMap = () => {
      const { width, height } = canvas.getBoundingClientRect()
      caribbeanMap.x = computer.x + 20
      caribbeanMap.y = computer.y + 20
      caribbeanMap.width = computer.width - 40
      caribbeanMap.height = computer.height - 40

      // Draw map background
      ctx.fillStyle = "#0ea5e9"
      ctx.fillRect(
        caribbeanMap.x,
        caribbeanMap.y,
        caribbeanMap.width,
        caribbeanMap.height
      )

      // Draw islands
      const islands = [
        { x: 0.2, y: 0.3, size: 0.1 },
        { x: 0.5, y: 0.4, size: 0.15 },
        { x: 0.8, y: 0.3, size: 0.12 }
      ]

      islands.forEach(island => {
        ctx.beginPath()
        ctx.arc(
          caribbeanMap.x + island.x * caribbeanMap.width,
          caribbeanMap.y + island.y * caribbeanMap.height,
          island.size * caribbeanMap.width,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = "#22c55e"
        ctx.fill()
      })

      // Draw investment connections
      ctx.beginPath()
      ctx.moveTo(
        caribbeanMap.x + islands[0].x * caribbeanMap.width,
        caribbeanMap.y + islands[0].y * caribbeanMap.height
      )
      ctx.lineTo(
        caribbeanMap.x + islands[1].x * caribbeanMap.width,
        caribbeanMap.y + islands[1].y * caribbeanMap.height
      )
      ctx.lineTo(
        caribbeanMap.x + islands[2].x * caribbeanMap.width,
        caribbeanMap.y + islands[2].y * caribbeanMap.height
      )
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Animation loop
    const animate = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)

      drawBackground()
      drawDesk()
      drawComputer()
      drawPerson()

      time += 1
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-600">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl font-medium">Strategic Investment Office</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="relative w-full h-full rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: "block" }} />
    </motion.div>
  )
}
