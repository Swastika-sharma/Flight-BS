import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://sky-scanner3.p.rapidapi.com/flights/auto-complete', {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com',
          'x-rapidapi-key': '870099929emshe2510235f38a70dp157559jsn449d9146969c'
        },
        params: {
          query: 'New York'
        }
      });

      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default App;

// const data = [
//   {
//     "presentation": {
//       "title": "New York",
//       "suggestionTitle": "New York (Any)",
//       "subtitle": "United States",
//       "id": "eyJlIjoiMjc1Mzc1NDIiLCJzIjoiTllDQSIsImgiOiIyNzUzNzU0MiIsInQiOiJDSVRZIn0=",
//       "skyId": "NYCA"
//     },
//     "navigation": {
//       "entityId": "27537542",
//       "entityType": "CITY",
//       "localizedName": "New York",
//       "relevantFlightParams": {
//         "skyId": "NYCA",
//         "entityId": "27537542",
//         "flightPlaceType": "CITY",
//         "localizedName": "New York"
//       },
//       "relevantHotelParams": {
//         "entityId": "27537542",
//         "entityType": "CITY",
//         "localizedName": "New York"
//       }
//     }
//   },
//   {
//     "presentation": {
//       "title": "New York John F. Kennedy",
//       "suggestionTitle": "New York John F. Kennedy (JFK)",
//       "subtitle": "United States",
//       "id": "eyJlIjoiOTU1NjUwNTgiLCJzIjoiSkZLIiwiaCI6IjI3NTM3NTQyIiwidCI6IkFJUlBPUlQifQ==",
//       "skyId": "JFK"
//     },
//     "navigation": {
//       "entityId": "95565058",
//       "entityType": "AIRPORT",
//       "localizedName": "New York John F. Kennedy",
//       "relevantFlightParams": {
//         "skyId": "JFK",
//         "entityId": "95565058",
//         "flightPlaceType": "AIRPORT",
//         "localizedName": "New York John F. Kennedy"
//       },
//       "relevantHotelParams": {
//         "entityId": "27537542",
//         "entityType": "CITY",
//         "localizedName": "New York"
//       }
//     }
//   },
//   {
//     "presentation": {
//       "title": "New York Newark",
//       "suggestionTitle": "New York Newark (EWR)",
//       "subtitle": "United States",
//       "id": "eyJlIjoiOTU1NjUwNTkiLCJzIjoiRVdSIiwiaCI6IjI3NTM3NTQyIiwidCI6IkFJUlBPUlQifQ==",
//       "skyId": "EWR"
//     },
//     "navigation": {
//       "entityId": "95565059",
//       "entityType": "AIRPORT",
//       "localizedName": "New York Newark",
//       "relevantFlightParams": {
//         "skyId": "EWR",
//         "entityId": "95565059",
//         "flightPlaceType": "AIRPORT",
//         "localizedName": "New York Newark"
//       },
//       "relevantHotelParams": {
//         "entityId": "27537542",
//         "entityType": "CITY",
//         "localizedName": "New York"
//       }
//     }
//   },
//   {
//     "presentation": {
//       "title": "New York LaGuardia",
//       "suggestionTitle": "New York LaGuardia (LGA)",
//       "subtitle": "United States",
//       "id": "eyJlIjoiOTU1NjUwNTciLCJzIjoiTEdBIiwiaCI6IjI3NTM3NTQyIiwidCI6IkFJUlBPUlQifQ==",
//       "skyId": "LGA"
//     },
//     "navigation": {
//       "entityId": "95565057",
//       "entityType": "AIRPORT",
//       "localizedName": "New York LaGuardia",
//       "relevantFlightParams": {
//         "skyId": "LGA",
//         "entityId": "95565057",
//         "flightPlaceType": "AIRPORT",
//         "localizedName": "New York LaGuardia"
//       },
//       "relevantHotelParams": {
//         "entityId": "27537542",
//         "entityType": "CITY",
//         "localizedName": "New York"
//       }
//     }
//   },
//   {
//     "presentation": {
//       "title": "Stewart International",
//       "suggestionTitle": "Stewart International (SWF)",
//       "subtitle": "United States",
//       "id": "eyJlIjoiOTU1NjYyODAiLCJzIjoiU1dGIiwiaCI6IjI3NTM3NTQyIiwidCI6IkFJUlBPUlQifQ==",
//       "skyId": "SWF"
//     },
//     "navigation": {
//       "entityId": "95566280",
//       "entityType": "AIRPORT",
//       "localizedName": "Stewart International",
//       "relevantFlightParams": {
//         "skyId": "SWF",
//         "entityId": "95566280",
//         "flightPlaceType": "AIRPORT",
//         "localizedName": "Stewart International"
//       },
//       "relevantHotelParams": {
//         "entityId": "27537542",
//         "entityType": "CITY",
//         "localizedName": "New York"
//       }
//     }
//   },
//   {
//     "presentation": {
//       "title": "Buffalo Niagara",
//       "suggestionTitle": "Buffalo Niagara (BUF)",
//       "subtitle": "United States",
//       "id": "eyJlIjoiOTU2NzMzNTgiLCJzIjoiQlVGIiwiaCI6IjI3NTM5NjA1IiwidCI6IkFJUlBPUlQifQ==",
//       "skyId": "BUF"
//     },
//     "navigation": {
//       "entityId": "95673358",
//       "entityType": "AIRPORT",
//       "localizedName": "Buffalo Niagara",
//       "relevantFlightParams": {
//         "skyId": "BUF",
//         "entityId": "95673358",
//         "flightPlaceType": "AIRPORT",
//         "localizedName": "Buffalo Niagara"
//       },
//       "relevantHotelParams": {
//         "entityId": "27539605",
//         "entityType": "CITY",
//         "localizedName": "Buffalo"
//       }
//     }
//   },
//   {
//     "presentation": {
//       "title": "Albany",
//       "suggestionTitle": "Albany (ALB)",
//       "subtitle": "United States",
//       "id": "eyJlIjoiOTU2NzQyMjkiLCJzIjoiQUxCIiwiaCI6IjI3NTM2NTM3IiwidCI6IkFJUlBPUlQifQ==",
//       "skyId": "ALB"
//     },
//     "navigation": {
//       "entityId": "95674229",
//       "entityType": "AIRPORT",
//       "localizedName": "Albany",
//       "relevantFlightParams": {
//         "skyId": "ALB",
//         "entityId": "95674229",
//         "flightPlaceType": "AIRPORT",
//         "localizedName": "Albany"
//       },
//       "relevantHotelParams": {
//         "entityId": "27536537",
//         "entityType": "CITY",
//         "localizedName": "Albany"
//       }
//     }
//   },
//   {
//     "presentation": {
//       "title": "Syracuse",
//       "suggestionTitle": "Syracuse (SYR)",
//       "subtitle": "United States",
//       "id": "eyJlIjoiOTU2NzQwMDQiLCJzIjoiU1lSIiwiaCI6IjI3NTQ3MTAzIiwidCI6IkFJUlBPUlQifQ==",
//       "skyId": "SYR"
//     },
//     "navigation": {
//       "entityId": "95674004",
//       "entityType": "AIRPORT",
//       "localizedName": "Syracuse",
//       "relevantFlightParams": {
//         "skyId": "SYR",
//         "entityId": "95674004",
//         "flightPlaceType": "AIRPORT",
//         "localizedName": "Syracuse"
//       },
//       "relevantHotelParams": {
//         "entityId": "27547103",
//         "entityType": "CITY",
//         "localizedName": "Syracuse"
//       },
//     "status": true,
//     "message": "Successful"
//     }
//   }
// ]



