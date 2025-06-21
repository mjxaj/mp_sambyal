"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { FaNewspaper, FaTimes, FaCalendar, FaEye } from "react-icons/fa";

function getExcerpt(text: string, maxLength = 120) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function formatDate(timestamp: any) {
  if (!timestamp) return "";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export default function News() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const q = query(collection(db, "news"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(q);
        setNews(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error('Error fetching news:', error);
        // You might want to set an error state here
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading latest news...</p>
          </div>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <FaNewspaper className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">No News Available</h2>
            <p className="text-gray-500">Check back soon for updates!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4">
            <FaNewspaper className="text-2xl text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest activities, events, and developments in our community
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map(item => {
            const thumb = item.media && item.media.length > 0 ? item.media[0] : null;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
                onClick={() => setSelected(item)}
              >
                {/* Media Thumbnail */}
                {thumb && (
                  <div className="h-48 w-full overflow-hidden relative">
                    {thumb.type === "image" ? (
                      <img 
                        src={thumb.url} 
                        alt="news thumbnail" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                      />
                    ) : thumb.type === "video" ? (
                      <video 
                        src={thumb.url} 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                        controls={false}
                        muted
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaEye className="text-primary text-sm" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FaCalendar className="mr-2" />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {getExcerpt(item.content)}
                  </p>
                  <button className="text-primary font-semibold hover:text-primary-dark transition-colors duration-200 flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full News Modal */}
        {selected && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelected(null)}
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideIn" 
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FaCalendar className="mr-2" />
                      {formatDate(selected.date)}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 pr-8">
                      {selected.title}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setSelected(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 -m-2"
                  >
                    <FaTimes className="text-xl" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Media Gallery */}
                {selected.media && selected.media.length > 0 && (
                  <div className="mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selected.media.map((m: any, idx: number) => (
                        <div key={idx} className="rounded-lg overflow-hidden bg-gray-100">
                          {m.type === "image" ? (
                            <img 
                              src={m.url} 
                              alt="media" 
                              className="w-full h-auto object-cover" 
                            />
                          ) : m.type === "video" ? (
                            <video 
                              src={m.url} 
                              className="w-full h-auto" 
                              controls 
                            />
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-800 whitespace-pre-line leading-relaxed">
                    {selected.content}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 rounded-b-2xl">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Published on {formatDate(selected.date)}
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 