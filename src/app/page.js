import { FaInstagramSquare, FaSpotify } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4 py-12">
      {/* Profilbillede */}
      <img
        src="/tb.jpg"
        alt="Thorbjørn Rubow"
        className="w-50 h-50np rounded-full object-cover mb-6 shadow-lg"
      />

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

      {/* Pris på astrologi-session */}
      <div className="bg-indigo-800 bg-opacity-30 p-4 rounded-xl text-center max-w-xl mb-8">
        <h2 className="text-2xl font-semibold text-indigo-300 mb-2">Astrology Session</h2>
        <p className="text-md md:text-lg mb-1">
          A deep reading session (several hours): <strong>1000 DKK</strong>
        </p>
        <p className="text-md md:text-lg">
          Book via <a href="mailto:rubow10@gmail.com" className="underline">rubow10@gmail.com</a> or <a href="tel:21310094" className="underline">21310094</a>
        </p>
      </div>

      {/* Knapper */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/thorbjornrubow/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          <FaInstagramSquare className="w-5 h-5" />
          Instagram
        </a>

        {/* Spotify */}
        <a
          href="https://open.spotify.com/artist/6p9Kfwl2J5Paojnvw6veAr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
        >
          <FaSpotify className="w-5 h-5" />
          Spotify
        </a>

        {/* Horoscope */}
        <a
          href="https://horoscopes.astro-seek.com/calculate-birth-chart-horoscope-online/?minor_150=on&minor_45=on&minor_30=on&minor_135=on&minor_72=on&minor_144=on&hid_fortune_check=on&hid_vertex_check=on&hid_chiron_check=on&hid_lilith_check=on&hid_uzel_check=on&hid_fortune_asp=on&hid_vertex_asp=on&hid_chiron_asp=on&hid_lilith_asp=on&hid_uzel_asp=on&hid_asc_asp=on&nick=Thorbjørn%20Rubow&narozeni_den=25&narozeni_mesic=9&narozeni_rok=1996&narozeni_hodina=16&narozeni_minuta=58&narozeni_sekunda=00&narozeni_mesto_hidden=Copenhagen&narozeni_stat_hidden=DK&narozeni_podstat_kratky_hidden=&narozeni_city=Copenhagen,%20Denmark&narozeni_sirka_stupne=55&narozeni_sirka_minuty=41&narozeni_sirka_smer=0&narozeni_delka_stupne=12&narozeni_delka_minuty=34&narozeni_delka_smer=0&narozeni_timezone_form=auto&narozeni_timezone_dst_form=auto&house_system=whole_horizon&"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition"
        >
          <GiStarsStack className="w-5 h-5" />
          Horoscope
        </a>
  {/* Payment Page */}
<a
  href="/pay"
  className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition"
>
  💳 Payment
</a>

{/* Astrology Page */}
<a
  href="/zodiac"
  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition"
>
  🌌 Astrology Program
</a>

      </div>
    </main>
  );
}






