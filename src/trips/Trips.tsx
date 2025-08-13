import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where, type DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTripCard from "./UserTripCard";

function Trips() {

  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState<DocumentData[]>([]);

  useEffect(() => {
    getUserTrips();
  }, []);

  async function getUserTrips() {
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;
    
    if (!user) {
      navigate('/');
      return;
    }

    const trips: DocumentData[] = [];
    const q = query(collection(db, "Trips"), where("userEmail", "==", user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      trips.push(doc.data());
    });
    setUserTrips(trips);
  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 pt-16">
      <h2 className="font-bold text-3xl">Saved Trips</h2>
      <div className="mt-10 flex flex-wrap gap-5">
        {userTrips.map((trip) => (
          <UserTripCard key={trip.id} trip={trip}/>
        ))}
      </div>
    </div>
  )
}

export default Trips