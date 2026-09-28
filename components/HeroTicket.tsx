"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#E8A817",
  "#FFE66D",
  "#1E6FE0",
  "#7BDFF2",
  "#F25C54",
  "#F7A8C4",
  "#9B5DE5",
  "#2EC4B6",
  "#FF8C42",
  "#F6F1E7",
];

type Shape = "rect" | "circle" | "ribbon";

type Piece = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  rot: number;
  spin: number;
  color: string;
  shape: Shape;
  life: number;
  decay: number;
  wobble: number;
};

export function HeroTicket() {
  const ticketRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const piecesRef = useRef<Piece[]>([]);
  const frameRef = useRef(0);
  const resizeRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(frameRef.current);
      if (resizeRef.current) window.removeEventListener("resize", resizeRef.current);
      canvasRef.current?.remove();
    };
  }, []);

  function release() {
    const ticket = ticketRef.current;
    if (!ticket) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = ticket.getBoundingClientRect();
    const count = reduced ? 22 : 170;

    for (let index = 0; index < count; index += 1) {
      const fromStub = index % 3 === 0;
      const x = fromStub
        ? rect.right - rect.height * 0.28
        : rect.left + 12 + Math.random() * (rect.width - 24);
      const y = rect.top + 6 + Math.random() * 10;
      const spread = fromStub ? 1.15 : 2.1;
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * spread;
      const speed = reduced ? 1.4 + Math.random() * 1.6 : 6.2 + Math.random() * 5.5;
      const shape: Shape =
        index % 7 === 0 ? "ribbon" : index % 3 === 0 ? "circle" : "rect";
      const size = shape === "ribbon" ? 6 + Math.random() * 4 : 8 + Math.random() * 9;

      piecesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        w: size,
        h: shape === "ribbon" ? size * 3.4 : size * (0.5 + Math.random() * 0.65),
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * (reduced ? 0.05 : 0.16),
        color: COLORS[index % COLORS.length],
        shape,
        life: 1,
        decay: reduced ? 0.05 : 0.0046 + Math.random() * 0.003,
        wobble: Math.random() * Math.PI * 2,
      });
    }

    start();
  }

  function start() {
    if (!canvasRef.current) {
      const canvas = document.createElement("canvas");
      canvas.setAttribute("aria-hidden", "true");
      canvas.style.cssText =
        "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:70;";
      document.body.appendChild(canvas);
      canvasRef.current = canvas;
      const onResize = () => fit(canvas);
      resizeRef.current = onResize;
      window.addEventListener("resize", onResize);
      fit(canvas);
    }

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(draw);
  }

  function draw() {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    context.clearRect(0, 0, width, height);

    const alive: Piece[] = [];
    for (const piece of piecesRef.current) {
      piece.vy += 0.18;
      piece.vx *= 0.994;
      piece.wobble += 0.11;
      piece.x += piece.vx + Math.sin(piece.wobble) * 0.27;
      piece.y += piece.vy;
      piece.rot += piece.spin;
      piece.life -= piece.decay;
      if (piece.life <= 0 || piece.y > height + 48) continue;
      alive.push(piece);

      context.save();
      context.globalAlpha = Math.max(piece.life, 0);
      context.translate(piece.x, piece.y);
      context.rotate(piece.rot);
      context.fillStyle = piece.color;
      if (piece.shape === "circle") {
        context.beginPath();
        context.arc(0, 0, piece.w / 2, 0, Math.PI * 2);
        context.fill();
      } else {
        context.fillRect(-piece.w / 2, -piece.h / 2, piece.w, piece.h);
      }
      context.restore();
    }

    piecesRef.current = alive;
    if (alive.length > 0) {
      frameRef.current = requestAnimationFrame(draw);
      return;
    }

    if (resizeRef.current) window.removeEventListener("resize", resizeRef.current);
    resizeRef.current = null;
    canvas.remove();
    canvasRef.current = null;
  }

  return (
    <button
      ref={ticketRef}
      type="button"
      onClick={release}
      className="mt-5 flex w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-navy bg-field p-0 text-left text-base text-navy shadow-[8px_8px_0_0_#0A1A3B] transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[10px_10px_0_0_#0A1A3B] active:translate-y-0.5 active:shadow-[4px_4px_0_0_#0A1A3B]"
    >
      <span className="flex-1 px-5 py-4">
        <span className="block font-ui text-xs font-semibold uppercase tracking-[0.2em]">
          Admit one family
        </span>
        <span className="mt-1 block font-display text-4xl font-bold leading-none">Free</span>
        <span className="mt-2 block text-base text-muted">
          Kids, siblings, and parents. No fee for families.
        </span>
      </span>
      <span className="flex w-14 items-center justify-center border-l-2 border-dashed border-navy bg-gold sm:w-16">
        <span className="rotate-180 font-ui text-xs font-bold uppercase tracking-[0.22em] text-navy [writing-mode:vertical-rl]">
          Joy
        </span>
      </span>
      <span className="sr-only">Press to release confetti.</span>
    </button>
  );
}

function fit(canvas: HTMLCanvasElement) {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  const context = canvas.getContext("2d");
  context?.setTransform(ratio, 0, 0, ratio, 0, 0);
}
