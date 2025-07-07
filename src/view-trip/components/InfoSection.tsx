import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CiShare1 } from "react-icons/ci";
import type { TripType } from "../types";


function InfoSection({ trip }: TripType) {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww"
        alt=""
        className="h-[350px] w-full object-cover rounded-xl"
      />
      <div className="my-5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">
            {trip?.userPreference?.location}
          </h2>
          <Button variant="outline" size="sm">
            <CiShare1 /> Share
          </Button>
        </div>

        <div className="flex gap-5 flex-wrap">
          <Badge variant={"secondary"} className="p-1 px-3 text-sm">
            {trip?.userPreference?.duration} Days
          </Badge>
          <Badge variant={"secondary"} className="p-1 px-3 text-sm">
            {trip?.userPreference?.budget} Budget
          </Badge>
          <Badge variant={"secondary"} className="p-1 px-3 text-sm">
            Travelers : {trip?.userPreference?.people}
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
