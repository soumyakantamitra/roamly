export const travelerCount= [
  {
    id: 1,
    title: 'Only Me',
    desc: 'One travels alone in pursuit of exploration',
    icon: '✈️',
    people: '1 people'
  },
  {
    id: 2,
    title: 'Couple',
    desc: 'Two voyagers on a shared path',
    icon: '🌄',
    people: '2 people'
  },
  {
    id: 3,
    title: 'Family',
    desc: 'A fun-loving family always ready for adventure',
    icon: '🏡',
    people: '3 to 5 people'
  },
  {
    id: 4,
    title: 'Friends',
    desc: 'A tight group of pals always up for the next big thrill',
    icon: '🤘',
    people: '5 to 10 people'
  }
]

export const budgetSelect = [
  {
    id: 1,
    title: 'Affordable',
    desc: 'Cost conscious',
    icon: '💵',
  },
  {
    id: 2,
    title: 'Moderate',
    desc: 'Average costs',
    icon: '💳'
  },
  {
    id: 3,
    title: 'Luxurious',
    desc: 'Costs dont matter',
    icon: '💎'
  }
]

export const prompt = `
Generate a detailed travel itinerary for the following:

Location: {{location}}
Number of Days: {{duration}}
Number of People: {{people}}
Budget: {{budget}} (e.g. Affordable / Moderate / Luxury)

Your response must be in valid JSON format with this structure:

{
"location": "{{location}}",
"duration_days": {{duration}},
"people_count": {{people}},
"budget": "{{budget}}",
"hotel_options": [
{
"name": "Hotel Name",
"address": "Full Address",
"price_per_night": "Price range(e.g. $XX to $YY per night)",
"image_url": "Direct image URL",
"geo_coordinates": {
"latitude": 36.0000,
"longitude": -115.0000
},
"rating": 4.5,
"description": "Short description of the hotel"
}
],
"itinerary": [
{
"day": 1,
"places": [
{
"name": "Place Name",
"description": "Short description of the place",
"image_url": "Direct image URL",
"geo_coordinates": {
"latitude": 36.0000,
"longitude": -115.0000
},
"ticket_pricing": "Free / $XX per person",
"rating": 4.7,
"best_time_to_visit": "10:00 - 11:00"(e.g. HH:MM - HH:MM),
"time_to_travel_minutes": 15
}
]
},
{
"day": 2,
"places": [ /* Same structure */ ]
}
// Continue for each day up to {{days}}
]
}

Response Guidelines:

Return only valid JSON — no markdown, no comments, no explanations.

Use real-world, budget-appropriate data for hotels and places.

Use valid latitude/longitude coordinates.

Each day must include 2–4 popular places based on budget and convenience.

Limit hotel options to a maximum of 3.

Ensure direct image URLs (not HTML or links to webpages).

Replace the placeholder values in the JSON and return the response.
`;