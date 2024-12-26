import React from "react";
import { Search, Star, ThumbsUp, ThumbsDown } from "lucide-react";

const TestimonialsPage = () => {
  return (
    <div className="h-full overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Testimonials Management</h1>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search testimonials..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border-0 ring-1 ring-gray-200"
          />
        </div>
      </div>

      {/* Testimonials List */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500">March 1, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              "Amazing service and quality! The shoes I bought were in excellent
              condition and exactly as described. Will definitely buy again!"
            </p>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 text-green-600 hover:text-green-700">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Approve</span>
                </button>
                <button className="flex items-center gap-1 text-red-600 hover:text-red-700">
                  <ThumbsDown className="h-4 w-4" />
                  <span>Reject</span>
                </button>
              </div>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Published</option>
                <option>Hidden</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">Showing 1 of 10</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border rounded">Previous</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;