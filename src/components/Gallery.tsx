import React, { useState } from 'react';

export const Gallery: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGhhaXIlMjBjdXR8ZW58MHx8MHx8fDA%3D',
      caption: 'Motif Garis'
    },
    {
      url: 'https://images.unsplash.com/photo-1578390432942-d323db577792?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhaXJzdHlsZXxlbnwwfHwwfHx8MA%3D%3D',
      caption: 'Undercut'
    },
    {
      url: 'https://images.unsplash.com/photo-1463430144406-394c977562d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VW5kZXJjdXR8ZW58MHx8MHx8fDA%3D',
      caption: 'Mullet'
    },
    {
      url: 'https://images.unsplash.com/photo-1602641902219-622a1b9a257a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGhhaXIlMjBtYW58ZW58MHx8MHx8fDA%3D',
      caption: 'Motif Berpola'
    },
    {
      url: 'https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhhaXIlMjBtYW58ZW58MHx8MHx8fDA%3D',
      caption: 'Kantoran'
    },
    {
      url: 'https://images.unsplash.com/photo-1607276252614-e874c044e09b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhhaXIlMjBtYW58ZW58MHx8MHx8fDA%3D',
      caption: 'Profesional'
    }
  ];

  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(2);
  };

  return (
    <section id="gallery" className="gallery min-h-screen pb-12 pt-20 bg-gray-800 inside-neu">
      <div className="md:max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Gallery Gaya Rambut
          </span>
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          Jelajahi berbagai gaya rambut yang kami tawarkan.
        </p>
        <div className="w-11/12 md:w-full flex flex-wrap justify-center gap-6">
          {images.slice(0, visibleCount).map((image, index) => (
            <div key={index} className="relative group w-72">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 main-border inside-neu inside-neu-hover">
                <img
                  src={image.url}
                  alt={`Hair Style ${index + 1}`}
                  className="w-full h-72 brightness-[0.6] hover:brightness-100 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  loading='lazy'
                />
              </div>
              <div className="absolute inset-0 bg-black rounded-lg main-border bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          {visibleCount < images.length && (
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition duration-300"
            >
              Load More
            </button>
          )}
          {visibleCount > 3 && (
            <button
              onClick={handleShowLess}
              className="ml-4 px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
