export default function About() {
  return (
    <div className="flex md:flex-col flex-col-reverse justify-end md:justify-between md:h-svh p-6">
      <div className="flex flex-col md:items-end text-2xl md:text-4xl font-semibold gap-2 md:gap-5 px-3">
        <p>Take on challenges without fear of failure.</p>
        <p>Live each day to the fullest.</p>
        <p>Keep learning.</p>
      </div>
      <div className="flex flex-col gap-9 md:gap-14 md:items-start mb-6 px-3 md:px-0">
        <h2 className="md:text-8xl text-5xl font-semibold">ABOUT</h2>
        <div className="md:w-[40vw] md:leading-19 md:text-6xl text-3xl font-medium md:mb-0 mb-7">
          <p>Hello! My name is Ni.</p>
          <p>
            I'm a web developer that loves to bring thoughtful designs to life!
            With a<span className="text-slate-400"> mission to amaze</span>, I'm
            focused on building intuitive and engaging digital experiences for
            all.
          </p>
        </div>
      </div>
    </div>
  );
}
