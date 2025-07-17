"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PaymentPage() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const methodsRef = useRef([]);
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(headingRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    gsap.from(paragraphRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    gsap.from(methodsRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      delay: 0.7,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(footerRef.current, {
      opacity: 0,
      y: 20,
      delay: 1.4,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-20 flex items-center justify-center">
      <div
        ref={containerRef}
        className="bg-black bg-opacity-70 p-8 rounded-xl max-w-xl text-center shadow-lg"
      >
        <h1 ref={headingRef} className="text-4xl font-bold text-indigo-300 mb-6">
          Payment Options
        </h1>

        <p ref={paragraphRef} className="text-lg mb-6">
          A full astrology session costs <strong>1000 DKK</strong> and lasts several hours.
          You can choose your preferred payment method below:
        </p>

        <div className="space-y-6 text-left text-md leading-relaxed">
          {[
            {
              title: "📱 MobilePay",
              text: "Send payment to: +45 21310094",
            },
            {
              title: "💻 PayPal",
              text: "Send to: rubow10@gmail.com",
            },
            {
              title: "💵 Cash",
              text: "You can also pay in cash at the beginning of the session (in person only).",
            },
          ].map((method, i) => (
            <div key={i} ref={(el) => (methodsRef.current[i] = el)}>
              <h2 className="text-xl font-semibold text-indigo-200 mb-1">{method.title}</h2>
              <p>{method.text}</p>
            </div>
          ))}
        </div>

        <p
          ref={footerRef}
          className="text-sm text-gray-300 mt-8"
        >
          If you have any questions or need to confirm your booking, feel free to contact me at{" "}
          <a href="mailto:rubow10@gmail.com" className="underline">rubow10@gmail.com</a>{" "}
          or send a text to{" "}
          <a href="tel:21310094" className="underline">+45 21310094</a>.
        </p>
      </div>
    </main>
  );
}

  
  