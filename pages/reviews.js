"use client"

import { useState } from "react"
import Head from "next/head"
import { Star, User } from "lucide-react"

// Dummy data for initial reviews
const initialReviews = [
  { "id": 1, "name": "Tuul", "rating": 5, "comment": "Thank you so much, @Oyuna Oyu, for organizing such a valuable and heartfelt event. Wishing you success in all your endeavors!" },
  { "id": 2, "name": "Oyu T", "rating": 5, "comment": "I received very useful information at the right time. Big thank you!" },
  { "id": 3, "name": "Baigali", "rating": 5, "comment": "Thank you very much. It was a truly insightful training session filled with valuable information, heartfelt advice, and encouragement that gave us great confidence." },
  { "id": 4, "name": "Batzul", "rating": 5, "comment": "Thank you so much for organizing this wonderful meeting with so much dedication to our children's future. We were also treated to delicious buuz, salad, aaruul, urum, and boortsog. Best wishes! @Oyuna Oyu @Bolortuya Betty Nasanjargal" },
  { "id": 5, "name": "Enkhtamir", "rating": 5, "comment": "Thank you, @Oyuna Oyu, for providing the opportunity to hear about our children's progress. Today's session was incredibly informative and filled with genuine care for our kids. Thank you again, @Bolortuya Betty Nasanjargal." },
  { "id": 6, "name": "Munguu", "rating": 5, "comment": "This was such a wonderful and necessary meeting. My daughter felt highly motivated even before her one-on-one session. It was an incredibly inspiring gathering. Thank you!" },
  { "id": 7, "name": "Batnasan", "rating": 5, "comment": "Thank you so much, @Bolortuya Betty Nasanjargal, for the invaluable information, and @Oyuna Oyu for organizing it so well. I sincerely hope you will hold this event again next year." },
  { "id": 8, "name": "Puje", "rating": 5, "comment": "A huge thank you to @Bolortuya Betty Nasanjargal for providing invaluable advice with such sincerity. Also, thank you @Oyuna Oyu for dedicating your time and efforts to Mongolian children in Washington. This meeting was an A+ event!" },
  { "id": 9, "name": "Nomin", "rating": 5, "comment": "Thank you so much, @Oyuna Oyu and @Bolortuya Betty Nasanjargal! My daughter was truly inspired by this session." },
  { "id": 10, "name": "Suvdaa", "rating": 5, "comment": "Good evening. I would like to express my deepest gratitude to @Oyuna Oyu for organizing this event and to @Bolortuya Betty Nasanjargal for offering free, valuable guidance to our children with such sincerity. Looking forward to meeting again in the future. Safe travels!" },
  { "id": 11, "name": "Delkhi", "rating": 5, "comment": "Thank you to all the wonderful people who selflessly shared their knowledge, guidance, and support for the well-being of our children. Special thanks to @Bolortuya Betty for traveling all this way to be with us, @Oyuna Oyu for organizing everything so well, and everyone who contributed to making this event possible." },
  { "id": 12, "name": "Handaa", "rating": 5, "comment": "I deeply appreciate @Oyuna Oyu for organizing this meeting and @Bolortuya Betty Nasanjargal for generously sharing her invaluable advice for our Mongolian children. Wishing you both continued success in all your work!" },
  { "id": 13, "name": "Tseegii", "rating": 5, "comment": "Thank you so much, @Bolortuya Betty Nasanjargal and @Oyuna Oyu!" },
  { "id": 14, "name": "Undraa", "rating": 5, "comment": "This was such an important and beneficial meeting. Thank you!" },
  { "id": 15, "name": "Damba", "rating": 5, "comment": "Thank you, @Oyuna Oyu! As the saying goes, 'Together, we are an ocean of strength.' Let's continue supporting our children!" },
  { "id": 16, "name": "Saikhna", "rating": 5, "comment": "Thank you, @Bolortuya Betty Nasanjargal, for sharing your valuable experience and knowledge with Mongolian children, and @Oyuna Oyu for organizing this meaningful event so beautifully!" },
  { "id": 17, "name": "Ariunjargal", "rating": 5, "comment": "@Oyuna Oyu, thank you so much for the excellent organization, and @Enkhjin, thank you as well. @Bolortuya Betty Nasanjargal, your openness and willingness to help were truly remarkable. Wishing you great success in all your work!" },
  { "id": 18, "name": "Jargalmaa", "rating": 5, "comment": "Thank you for everything, @Oyuna Oyu!" },
  { "id": 19, "name": "Zaya", "rating": 5, "comment": "Thank you, @Oyuna Oyu, and everyone else who helped and participated!" },
  { "id": 20, "name": "Soko", "rating": 5, "comment": "Heartfelt thanks to @Oyuna Oyu and all those who dedicated their time and energy to organizing this event. Also, a big thank you to @Bolortuya Betty Nasanjargal for selflessly sharing her expertise and advice to help our Mongolian children." },
  { "id": 21, "name": "Oyu T", "rating": 5, "comment": "@Bolortuya Betty Nasanjargal, your sincerity was truly felt throughout the training. I have no doubt that many Mongolian children will achieve success by following your guidance. Hard work is important, but when done with sincerity, it becomes something truly special." },
  { "id": 22, "name": "Bolortuya", "rating": 5, "comment": "Good morning, Seattle moms! I have safely arrived back home. Thank you for inviting me and making me feel so welcome. Although I am back, I still cannot forget the warm and wonderful two days spent in Seattle." }
]


export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews)
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewReview((prev) => ({ ...prev, [name]: name === "rating" ? Number.parseInt(value) : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = reviews.length + 1
    setReviews((prev) => [...prev, { id, ...newReview }])
    setNewReview({ name: "", rating: 5, comment: "" })
  }

  return (
    <>
      <Head>
        <title>Reviews - Mongolian Cultural Center</title>
        <meta name="description" content="Read and submit reviews for the Mongolian Cultural Center" />
      </Head>

      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Reviews</h1>

          {/* Review submission form */}
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">Submit Your Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue focus:ring-opacity-50"
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Star{num !== 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="3"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Display reviews */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">What Our Visitors Say</h2>
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <User className="h-6 w-6 text-gray-400 mr-2" />
                  <span className="font-semibold">{review.name}</span>
                </div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

