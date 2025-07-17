"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GiStarsStack } from "react-icons/gi";

export default function ZodiacPage() {
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const sectionRefs = useRef([]);
  const bookingRef = useRef(null);

  useEffect(() => {
    gsap.from(iconRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(headingRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(sectionRefs.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
      delay: 0.6,
      ease: "power2.out",
    });

    gsap.from(bookingRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 1.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white px-4 py-20 flex items-center justify-center"
      style={{ backgroundImage: "url('/stars-bg.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 p-8 rounded-xl max-w-2xl text-center shadow-lg">
        <div className="flex justify-center mb-4">
          <GiStarsStack ref={iconRef} className="w-12 h-12 text-indigo-400" />
        </div>

        <h1 ref={headingRef} className="text-4xl font-bold mb-6 text-indigo-300">
          My Story with Astrology
        </h1>

        <div className="space-y-6 text-lg leading-relaxed">
          {[
            {
              title: "How It Began",
              text: "I first discovered astrology when my mom told me about it, and from there I just started listening to podcasts, reading about it, and looking at birth charts.",
            },
            {
              title: "Why It Fascinates Me",
              text: "I think it’s incredibly fascinating, and you learn so much about other people — but especially about yourself.",
            },
            {
              title: "Astrology as a Life Tool",
              text: "Astrology is a tool for life. You always have a choice, no matter what your chart says — it’s up to you to believe in it or not. I always say: think for yourself. If something doesn’t resonate, then it simply isn’t right for you.",
            },
            {
              title: "Helping Others",
              text: "I want to help others understand astrology and read their birth charts. I can teach you how to read the language of astrology and help you understand yourself — or someone important in your life.",
            },
            {
              title: "For Couples and Friend Groups",
              text: "I can also work with couples to help them understand each other better, or even with a group of friends. I’ll give you exactly what you need.",
            },
          ].map((section, i) => (
            <div key={i} ref={(el) => (sectionRefs.current[i] = el)}>
              <h2 className="text-2xl font-semibold text-indigo-300 mb-2">{section.title}</h2>
              <p>{section.text}</p>
            </div>
          ))}

          {/* Booking */}
          <div ref={bookingRef} className="mt-8">
            <h2 className="text-2xl font-semibold text-green-300 mb-2">Price & Booking</h2>
            <p className="mb-4">
              A full conversation and reading session lasts several hours and costs <strong>1000 DKK</strong>.
              You will receive detailed insights and guidance tailored to your birth chart.
            </p>
            <p>
              Contact me at{" "}
              <a href="mailto:rubow10@gmail.com" className="underline text-indigo-300">
                rubow10@gmail.com
              </a>{" "}
              or by phone at{" "}
              <a href="tel:21310094" className="underline text-indigo-300">
                21310094
              </a>{" "}
              to book your session.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}





  