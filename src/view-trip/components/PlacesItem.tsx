function PlacesItem( {place} : any ) {
  return (
    <div className="shadow-md mt-3 p-3 flex gap-5 rounded-xl">
      <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww" alt="" 
        className="w-[150px] h-[150px] rounded-xl"
      />
      <div>
        <h2 className="font-bold text-lg">{place.name}</h2>
        <p className="text-sm text-gray-600">{place.description}</p>
      </div>
    </div>
  )
}

export default PlacesItem