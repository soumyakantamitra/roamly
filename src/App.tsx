import "./App.css";
import Hero from "./components/custom/Hero";
import { useTheme } from "./components/theme-provider";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <div className="min-h-screen w-full relative pt-16">
        <div
          className="absolute inset-0 z-0"
          style={
            theme === "light"
              ? {
                  background:
                    "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
                }
              : {
                  background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
                }
          }
        />
        <div className="relative ">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
