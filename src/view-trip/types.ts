export type TripType = {
  trip: Partial<{
    id: string;
    tripData: {
      budget: string;
      duration_days: number;
      hotel_options: [{
        name: string;
        address: string;
        description: string;
        geo_coordinates: string;
        image_url: string;
        price_per_night: string;
        rating: number;
      }];
      itinerary: [{
        day: number;
        places: [{
          name: string;
          best_time_to_visit: string;
        }];
      }];
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