import { useEffect, useRef, useState } from "react";

export default function Portrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className={`relative aspect-[4/5] w-full max-w-[380px] overflow-hidden border border-border bg-card transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
    </div>
  );
}
