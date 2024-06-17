import React from 'react'
import { useState } from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";

function FAQ () {
  const [selectedL, setSelectedL] = useState(null)
  const [selectedR, setSelectedR] = useState(null)
  const toggleL = (i) => {
    if (selectedL === i) {
      return setSelectedL(null)
    }

    setSelectedL(i)
  }
  const toggleR = (i) => {
    if (selectedR === i) {
      return setSelectedR(null)
    }

    setSelectedR(i)
  }
  return (
    <div className='bg-light'> 
      <div className='container pt-3 pb-3'>
        <div className='row'><h4>Booking flights with FlyHigh</h4></div>

        <div className="row">
          <div className='accordian col-md-6'>
            {dataL.map((item, i) => (
              <div className='item'>
                <div className='title' onClick={() => toggleL(i)}>
                  <h6>{item.questionL}</h6>
                  <span>{selectedL === i ? '-' : '+'}</span>
                </div>
                <div className={selectedL === i ? 'content show' : 'content'}>
                  <h6>{item.answerL}</h6>
                </div>
              </div>
              ))}
          </div>
          <div className='accordian col-md-6'>
            {dataR.map((item, i) => (
              <div className='item'>
                <div className='title' onClick={() => toggleR(i)}>
                  <h6>{item.questionR}</h6>
                  <span>{selectedR === i ? '-' : '+'}</span>
                </div>
                <div className={selectedR === i ? 'content show' : 'content'}>
                  <h6>{item.answerR}</h6>
                </div>
              </div>
              ))}
          </div>

        </div>
      </div>
    </div>
  )
}

const dataL = [
  {
    questionL: "How does FlyHigh work?",
    answerL: "We're a flight, car hire and hotel search engine. We scan all the top airlines and travel providers across the net, so you can compare flight fares and other travel costs in one place. Once you’ve found the best flight, car hire or hotel, you book directly with the provider.",
  },
  {
    questionL: "How can I find the cheapest flight using FlyHigh?",
    answerL: "Finding flights is easy here - over 100 million savvy travellers come to us each month to find cheap flight tickets, hotels and car hire. Here are a few simple tips on how to get the most out of your flight search.Save money and time Whether it's the fastest flight or the smartest stay, you can pick your preferred flight provider or hotel based on real traveller ratings, and book instantly.Search Everywhere. Go anywhere.Fancy a trip but don't mind where? Or perhaps you want to discover somewhere new.Search Everywhere for the best budget airfare anywhere on any given day.Find the cheapest time to fly.If you have a destination in mind and want to find the cheapest flight,Cheapest month, when you search. Then find flights on the cheapest day.",
  },
  {
    questionL: "Where should I book a flight to right now?",
    answerL: "If you're looking for inspiration for your next trip, search Everywhere to find a cheap flight ticket anywhere.",
  },
  {
    questionL: "Do I book my flight with FlyHigh?",
    answerL: "We're a search engine, so after you've found the best flight ticket you'll book directly with the airline or travel provider on their site. This will give you the opportunity to add any loyalty information you would like and select your preferred flight options, such as seating.",
  },
  {
    questionL: "What happens after I have booked my flight?",
    answerL: "Your flight booking confirmation email and all the other info you'll need will come from the airline or provider you booked with. If you have any follow-up questions about your booking, or want to change or cancel your flight, you’d need to get in touch with them.",
  },
]

const dataR = [
  {
    questionR: "Does FlyHigh do hotels too?",
    answerR: "Yes! You can use the same magic that powers our flight search to find your perfect stay anywhere.",
  },
  {
    questionR: "What about car hire?",
    answerR: "You can also use Skyscanner to search for and compare cheap car hire in seconds, then pick up your wheels from the airport as soon as you touch down.",
  },
  {
    questionR: "What's a Price Alert?",
    answerR: "If you set up a Price Alert, we'll watch the price of plane tickets for you, and let you know via email or push notification via the app if they rise or fall.",
  },
  {
    questionR: "Can I book a flexible flight ticket?",
    answerR: "We understand how important it is to have flexible holiday plans. Sometimes, you can pay an extra fee for an amendable airline ticket, so look out for this option as you book. You can also look for hotels and car hire options with free cancellation, so you can book now and amend or even cancel later if you need to.",
  },
  {
    questionR: "Can I book flights that emit less CO₂?",
    answerR: "Yes - since we began showing carbon emission info on flights where it's available, over 100 million travellers have found a plane ticket with lower emissions for their route.",
  },

]

export default FAQ