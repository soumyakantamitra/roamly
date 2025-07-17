import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesItinerary from "../components/PlacesItinerary";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState({});

  useEffect(() => {
    const getTripData = async () => {
      const docRef = doc(db, "Trips", tripId!);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Documents:", docSnap.data());
        setTrip(docSnap.data());
      } else {
        console.log("No Such Document");
        toast("No Trip Found!");
      }
    };
    if (tripId) {
      getTripData();
    }
  }, [tripId]);

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <InfoSection trip={trip} />
      <Hotels trip={trip} />
      <PlacesItinerary trip={trip}/>
    </div>
  );
}

export default ViewTrip;
