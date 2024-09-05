import React from "react";

const AboutSection = () => {
  return (
    <div className="px-4 md:px-16">
      <div className="text-[#C465FF] text-lg md:text-2xl font-bold pt-16">
        About
      </div>
      <div className="text-lg break-words w-full md:w-[45vw] p-2 md:p-4 font-semibold">
        Hi there, Are you looking for additional support to navigate your data
        science career? Do you feel you can't speak to your manager freely? Are
        you feeling a bit confused on how to take your career to the next level?
        When I was starting out 10 years ago, I had the same feeling of, "Am I
        on the right track? What do I need to do to be promoted?" I had mentors
        to help guide my career and am eternally grateful to them, but I also
        wish I had someone who had gone through the same data science career
        path that could give me specific data science guidance. Having worked in
        different data jobs and been promoted several times over the years, I'm
        better equipped to advise my younger self. Since that's not possible, I
        would love to help you navigate your data science career if you're
        starting out. With your input, we can develop a focused plan to reach
        your goals and support you every step of the way. If you’re interested
        in working with me and want to learn more about the mentoring process,
        feel free to send me a message and we can take it from there. Talk to
        you soon!~Jen
      </div>
      <div className="text-[#C465FF] text-lg md:text-2xl font-bold pt-16">
        Achievements and Awards Section:
      </div>
      <div className="text-lg break-words w-full md:w-[45vw] p-2 md:p-4 font-semibold gap-2">
        <ul className="list-disc space-y-3">
          <li>"Top 50 Product Managers in India" by ProductCon (2023)</li>
          <li>
            "Innovation Excellence Award" for leading the launch of a
            groundbreaking AI-driven product at TechX Solutions (2022)
          </li>
          <li>
            "Mentor of the Year" at the National Career Development Conference
            (2021)
          </li>
        </ul>
      </div>
      <div className="text-[#C465FF] text-lg md:text-2xl font-bold pt-16">
        Personal Statement
      </div>
      <div className="text-lg break-words w-full md:w-[45vw] p-2 md:p-4 font-semibold">
        "I believe that with the right guidance, anyone can unlock their full
        potential in the tech industry. My goal as a mentor is to empower you
        with the insights, tools, and confidence you need to carve out a
        successful and fulfilling career. Let’s work together to turn your
        career aspirations into reality."
      </div>
      <div className="text-[#C465FF] text-2xl md:text-2xl font-bold pt-16">
      User Testimonials
      </div>
      <div className="text-sm break-words w-full md:w-[45vw] p-2 md:p-4 font-semibold">
        <div className="flex flex-col-2">
      <img src="/images/review.png" className="w-[76px] h-[65px] object-cover"/>
      <div className="pl-5 pt-2">
        <h1 className="text-black text-3xl font-bold">Sneha Patel</h1>
        <p className="text-gray-400 text-lg font-semibold">DPS RK Puram</p>
      </div>
      </div>
      <div className="mr-8 pt-5 text-lg">
      Jennifer is an outstanding mentor with exceptional communication skills. She has been instrumental in my growth, providing invaluable and aiding in the development of a career plan
      </div>
      </div>
      <div className="text-sm break-words w-full md:w-[45vw] p-2 md:p-4 font-semibold">
        <div className="flex flex-col-2">
      <img src="/images/review.png" className="w-[76px] h-[65px] object-cover"/>
      <div className="pl-5 pt-2">
        <h1 className="text-black text-3xl font-bold">Sneha Patel</h1>
        <p className="text-gray-400 text-lg font-semibold">DPS RK Puram</p>
      </div>
      </div>
      <div className="mr-8 pt-5 text-lg">
      Jennifer is an outstanding mentor with exceptional communication skills. She has been instrumental in my growth, providing invaluable and aiding in the development of a career plan
      </div>
      </div>
    </div>
  );
};

export default AboutSection;
