"use client"

import { useState } from "react"
import Head from "next/head"
import { Star, User } from "lucide-react"

// Dummy data for initial reviews
const initialReviews = [
  { id: 1, name: "John Doe", rating: 5, comment: "Incredible experience! Learned so much about Mongolian culture." },
  { id: 2, name: "Jane Smith", rating: 4, comment: "Great events and friendly staff. Highly recommended!" },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    comment: "The language classes are excellent. Can't wait to visit Mongolia!",
  },
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

