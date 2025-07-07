export type TripType = {
  trip: Partial<{
    id: string;
    tripData: {
      budget: string;
      duration_days: number;
      hotel_options: Array<object>;
    };
    userEmail: string;
    userPreference: {
      budget: string;
      duration: string;
      location: string;
      people: string;
    };
  }>;
};