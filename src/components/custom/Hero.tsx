import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-bold text-[3rem] text-center mt-16">
        Plan Your <span className="text-blue-400">Dream Trip</span> in seconds:<br /> Crafted by Smart, Human-Centered AI
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Share your preferences, and let our smart trip planner design a journey that fits your style, schedule, and budget.
      </p>
      <Link to={'/create-trip'}>
        <Button>Get Started, It's Free</Button>
      </Link>
    </div>
  )
}

export default Hero;