"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaInstagramSquare, FaSpotify } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";

export default function HomePage() {
  const textRefs = useRef([]);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const sessionRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(headingRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });

    textRefs.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3 + i * 0.15,
        ease: "power2.out",
      });
    });

    gsap.from(sessionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });
  }, []);

  const buttons = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/thorbjornrubow/",
      className: "bg-white text-gray-900 hover:bg-gray-200",
      icon: <FaInstagramSquare className="w-5 h-5" />,
    },
    {
      label: "Spotify",
      href: "https://open.spotify.com/artist/6p9Kfwl2J5Paojnvw6veAr",
      className: "bg-green-500 text-white hover:bg-green-600",
      icon: <FaSpotify className="w-5 h-5" />,
    },
    {
      label: "Horoscope",
      href: "https://horoscopes.astro-seek.com/calculate-birth-chart-horoscope-online/?minor_150=on&minor_45=on&minor_30=on&minor_135=on&minor_72=on&minor_144=on&hid_fortune_check=on&hid_vertex_check=on&hid_chiron_check=on&hid_lilith_check=on&hid_uzel_check=on&hid_fortune_asp=on&hid_vertex_asp=on&hid_chiron_asp=on&hid_lilith_asp=on&hid_uzel_asp=on&hid_asc_asp=on&nick=Thorbjørn%20Rubow&narozeni_den=25&narozeni_mesic=9&narozeni_rok=1996&narozeni_hodina=16&narozeni_minuta=58",
      className: "bg-indigo-500 text-white hover:bg-indigo-600",
      icon: <GiStarsStack className="w-5 h-5" />,
    },
    {
      label: "Payment",
      href: "/pay",
      className: "bg-yellow-400 text-gray-900 hover:bg-yellow-300",
      icon: <>💳</>,
    },
    {
      label: "Astrology Program",
      href: "/zodiac",
      className: "bg-purple-600 text-white hover:bg-purple-500",
      icon: <>🌌</>,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4 py-12 relative">
      {/* Toggle Button - visible only on small screens */}
      <button
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white px-4 py-2 rounded-full md:hidden"
        onClick={() => setShowButtons(!showButtons)}
      >
        {showButtons ? "Home" : "Home"}
      </button>

      {/* Buttons */}
      <div className={`fixed bottom-4 right-4 z-40 flex flex-col gap-3 items-end transition-all duration-300 ${showButtons ? "opacity-100" : "opacity-0 pointer-events-none"} md:opacity-100 md:pointer-events-auto`}>
        {buttons.map((button, i) => (
          <a
            key={i}
            href={button.href}
            target={button.href.startsWith("http") ? "_blank" : undefined}
            rel={button.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-2 px-6 py-3 font-semibold rounded-full shadow-lg transition ${button.className}`}
          >
            {button.icon}
            {button.label}
          </a>
        ))}
      </div>

      {/* Content */}
      <img
        ref={imageRef}
        src="/tb.jpg"
        alt="Thorbjørn Rubow"
        className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
      />

      <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold text-center mb-4">
        Thorbjørn Rubow
      </h1>

      {[
        "I'm a passionate developer focused on aesthetics, functionality, and modern web technologies.",
        "I’m a rock musician who plays guitar, bass, and drums, and I’ve released several tracks with the band Venus In Leo.",
        "I work at Søpavillonen, where I help manage operations and hold significant responsibility.",
        "I also host a podcast about astrology and have extensive knowledge of the subject.",
        "You can contact me at 21310094 or rubow10@gmail.com if you'd like me to analyze your birth chart.",
        "You can also check mine: I was born on September 25, 1996 at 16:58 in Gentofte.",
      ].map((text, index) => (
        <p
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="text-md md:text-lg text-center max-w-2xl mb-4"
        >
          {text}
        </p>
      ))}

      <div
        ref={sessionRef}
        className="bg-indigo-800 bg-opacity-30 p-4 rounded-xl text-center max-w-xl mb-8"
      >
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Astrology Session</h2>
        <p className="text-md md:text-lg mb-1">
          A deep reading session (several hours): <strong>1000 DKK</strong>
        </p>
        <p className="text-md md:text-lg">
          Book via <a href="mailto:rubow10@gmail.com" className="underline">rubow10@gmail.com</a> or <a href="tel:21310094" className="underline">21310094</a>
        </p>
      </div>
    </main>
  );
}
















