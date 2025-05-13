export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4 py-12">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        Thorbjørn Rubow
      </h1>

      <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
        I'm a passionate developer focused on aesthetics, functionality, and modern web technologies.
      </p>

      <p className="text-md md:text-lg text-center max-w-2xl mb-4">
        I’m a rock musician who plays guitar, bass, and drums, and I’ve released several tracks with the band <strong>Venus In Leo</strong>.
      </p>

      <p className="text-md md:text-lg text-center max-w-2xl mb-4">
        I work at <strong>Søpavillonen</strong>, where I help manage operations and hold significant responsibility.
      </p>

      <p className="text-md md:text-lg text-center max-w-2xl mb-4">
        I also host a podcast about astrology and have extensive knowledge of the subject.  
        You can contact me at <a href="tel:21310094" className="underline">21310094</a> or <a href="mailto:rubow10@gmail.com" className="underline">rubow10@gmail.com</a> if you'd like me to analyze your birth chart.
      </p>

      <p className="text-md md:text-lg text-center max-w-2xl mb-6">
        You can also check mine: I was born on <strong>September 25, 1996 at 16:58 in Gentofte</strong>.
      </p>

      <a
        href="https://www.instagram.com/thorbjornrubow/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition"
      >
        Follow me on Instagram
      </a>
    </main>
  );
}


