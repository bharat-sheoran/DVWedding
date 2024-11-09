import GradualSpacing from "@/components/ui/gradual-spacing";
import TextRevealByWord from "@/components/ui/text-reveal";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Home() {
  const date = new Date("2024-11-24")
  return (
    <>
      <div className="bg-[#cfad30] w-full h-full fixed bg-[url('/TextureBackground1.JPG')] bg-cover bg-blend-overlay"></div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh/2)]">
        <div className="absolute top-24 md:top-20 left-auto md:left-3">
          <Image
            src="/GaneshJi.jpg" // Path to your image in the `public` folder
            alt="GaneshJi"
            width={150} // Adjust width as needed
            height={30} // Adjust height as needed
            className="rounded-lg shadow-lg 3xs:w-20 2xs:w-24 md:w-40 lg:w-52"
          />
        </div>
        <div className="text-md lg:text-xl font-bold text-center text-[#482e43] fixed top-3 backdrop-blur-sm bg-white/30">!! Om Shree Ganeshaye Namah !!</div>
        <div className="text-md lg:text-lg font-bold text-center text-[#482e43] absolute top-10">विघ्न हरण मंगल करण, श्री गणपति जी महाराज प्रथम निमंत्रण आपका, पूर्ण कीजिए काज</div>
        <div className="flex flex-col items-center font-bold text-center text-[#482e43] 3xs:mt-52 2xs:mt-52 xs:mt-52 md:mt-96" style={{ fontFamily: "Calligraffitti" }}>
          <GradualSpacing className="2xs:text-xl sm:text-3xl md:text-6xl lg:text-7xl" text="Welcome to Our" />
          <GradualSpacing className="2xs:text-xl sm:text-3xl md:text-6xl lg:text-7xl" text="Wedding Invitation!" />
        </div>
        <div className="flex flex-col absolute 3xs:relative 2xs:relative md:absolute top-16 3xs:top-3 2xs:top-3 md:top-20 md:right-3 2xs:right-0 border 2xs:border-0 md:border border-black rounded-xl">
          <Calendar className="2xs:text-sm" selected={date} />
          <div className="text-md flex justify-center font-bold text-center text-[#482e43]">24TH NOVEMBER 2024</div>
        </div>
        <div className="w-full fixed bottom-10 flex justify-between items-end p-2 backdrop-blur-sm bg-white/30 rounded-lg">
          <div className="">
            <h5 className="text-md 3xs:text-xs 2xs:text-xs sm:text-sm md:text-md lg:text-lg font-bold text-[#482e43]">Awaiting your benign presence:</h5>
            <h3 className="text-xl 3xs:text-sm 2xs:text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-[#482e43]">Ganga Ram Sheoran</h3>
            <h3 className="text-xl 2xs:text-sm sm:text-lg font-bold md:text-xl lg:text-2xl text-[#482e43]">Bharat Sheoran</h3>
            <h4 className="text-lg 2xs:text-xs sm:text-md font-bold md:text-lg lg:text-xl text-[#482e43]">Gali No.1, Jaat Nagar, Near Busstand</h4>
            <h4 className="text-lg 2xs:text-xs sm:text-md font-bold md:text-lg lg:text-xl text-[#482e43]">Radaur, Yamunanagar</h4>
            <h6 className="text-sm 2xs:text-xs sm:text-md font-bold md:text-sm lg:text-md text-[#482e43]">Mob. 9813281966, 9034781966</h6>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-md 3xs:text-xs 2xs:text-xs sm:text-sm md:text-md lg:text-lg font-bold text-center text-[#482e43]">::Venue::</h5>
            <h3 className="text-2xl 3xs:text-xs 2xs:text-sm sm:text-lg md:text-2xl lg:text-3xl italic font-bold text-center text-[#482e43]" style={{ fontFamily: "cursive" }}>Karan Resorts</h3>
            <h3 className="text-lg 3xs:text-xs 2xs:text-sm sm:text-md md:text-lg lg:text-xl font-bold text-center text-[#482e43]">Tejli Road, Jagadhri (Ynr.)</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.3159020703038!2d77.30255427583704!3d30.142383074874306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efbcbf271d9c9%3A0xc123d87e12c88f7!2sKaran%20Resorts!5e0!3m2!1sen!2sin!4v1731095558205!5m2!1sen!2sin" className="3xs:w-24 2xs:w-36 lg:w-72 2xs:h-28 lg:h-40" style={{ border: 0, borderRadius: 10 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-center" style={{ fontFamily: "Babylonica" }}><TextRevealByWord className="text-7xl md:text-8xl lg:text-10xl" text="Deepika with Vikrant" /></div>
      <div className="min-h-[calc(100vh/1.2)] relative bottom-10">
        <div className="text-4xl 2xs:text-3xl md:text-5xl lg:text-6xl font-bold text-center text-[#482e43]" style={{ fontFamily: "Calligraffitti" }}>Golden Moments</div>
        <div className="mt-10">
          <div className="text-base 2xs:text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-[#482e43]">Saturday, 23rd of November 2024</div>
          <div className="text-base md:text-lg lg:text-2xl font-bold text-center text-[#482e43]">Ladies Sangeet ........................ 8:00pm</div>
          <div className="text-sm lg:text-lg font-bold text-center text-[#482e43]">(At our Residence)</div>
        </div>
        <div className="mt-10">
          <div className="text-base 2xs:text-md sm:text-lg md:text-xl lg:text-2xl font-bold text-center text-[#482e43]">Sunday, 24th of November 2024</div>
          <div className="text-base md:text-lg lg:text-2xl font-bold text-center text-[#482e43]">Reception of Barat ........................ 7:00pm</div>
          <div className="text-base md:text-lg lg:text-2xl font-bold text-center text-[#482e43]">Dinner ........................ 8:00pm</div>
          <div className="text-base md:text-lg lg:text-2xl font-bold text-center text-[#482e43]">Doli ........................ <span className="text-sm">Tarron Ki Chhaon Mein</span></div>
          <div className="text-sm lg:text-lg font-bold text-center text-[#482e43]">(At Karan Resort)</div>
        </div>
        <div className="text-md font-bold text-center text-[#482e43] fixed bottom-3 backdrop-blur-sm bg-white/30"><VelocityScroll default_velocity={5} text={`--- Cold Drink Piyenge, Popcorn Khayenge, Bua ki Shaadi Mein, Dhoom Machayenge ~Dakshita ---`} /></div>
      </div>
    </>
  );
}
