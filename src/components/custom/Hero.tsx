import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-12 md:mx-20 lg:mx-36 gap-9">
      <h1 className="font-bold text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center mt-16">
        Plan Your <div className="
            relative inline-block z-1
            before:content-[''] 
            before:absolute 
            before:inset-y-2
            before:inset-x-1
            before:bg-input
            before:-z-10 
            before:-skew-y-3">Dream Trip</div> in seconds:<br /> Crafted by Smart, Human-Centered AI
      </h1>
      <p className=" md:text-xl text-gray-500 text-center">
        Share your preferences, and let our smart trip planner design a journey that fits your style, schedule, and budget.
      </p>
      <Link to={'/create-trip'}>
        <Button>Get Started, It's Free</Button>
      </Link>
    </div>
  )
}

export default Hero;