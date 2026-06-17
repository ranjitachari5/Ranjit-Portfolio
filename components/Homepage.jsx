import 'tailwindcss'
const Homepage=()=>{
  return (
    <>
    <div className="bg-oklch(20.8% 0.042 265.755) text-white font-serif pt-20 pb-10">
  <div className="container mx-auto px-6 flex items-center justify-center text-left">
    <div>
      <h1 className="text-3xl font-bold">Hi, I'm<u className='text-green-700'> Ranjit</u>.</h1>
      <p className="mt-4">An Aspiring AI Engineer </p>
      <p className='mt-0'>and Python FullStack Learner ...</p>
    </div>
    <img className="ml-20 h-100" src="./assets/ranjit.jpeg" alt="Ranjit"></img>
  </div>
</div>

<div className="w-full overflow-hidden leading-0">
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-60px md:h-100px fill-[#e2e4dc]">
    <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
  </svg>
</div>

<div className="bg-[#e2e4dc] text-gray-900 py-7">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-serif">ABOUT ME</h2>
  </div>
</div>
<div className="bg-[#e2e4dc] text-green-800 font-serif pt-10 pb-10">
  <div className="container mx-auto px-6 flex items-center justify-center gap-12">
    
    <img
      className="ml-40 h-100"
      src="./assets/ranjit2.jpeg"
      alt="Ranjit"
    />

    <div className="max-w-sw">
      <p className="ml-4 mt-4 leading-relaxed">
        As a <b className='text-green-900 text-2xl'>Computer Science and Engineering </b>
        student, I'm passionate about software development and
        problem-solving. I enjoy building projects, learning new technologies,
        and exploring AI and web development. My goal is to continuously improve
        my skills and create innovative solutions that make a meaningful impact.
      </p>
    </div>

  </div>
</div>

<div className="w-100px overflow-hidden leading-0">
  <footer className='justify-center mt-20 text-amber-50 font-serif flex text-1xl'>© 2026 Ranjit Kumar A. All Rights Reserved.
Built with React and Tailwind CSS.</footer>
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-50px md:h-20px fill-[#48581a]">
    <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
  </svg>
</div>
</>
  );
};
export default Homepage;