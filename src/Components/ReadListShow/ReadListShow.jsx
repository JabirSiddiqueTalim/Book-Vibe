import React from 'react';

const ReadListShow = (read) => {
    const { bookName, author, image, rating, publisher, yearOfPublishing, tags, category, totalPages } = read.read;

    return (
        <div className="card lg:card-side bg-base-100 border border-gray-200 p-6 mb-6">
            {/* Left Image Section */}
            <figure className="bg-gray-100 rounded-2xl py-7 px-12">
                <img className='h-44 w-32 object-contain' src={image} alt={bookName} />
            </figure>

            {/* Right Content Section */}
            <div className="card-body p-0 lg:pl-6">
                <h2 className="text-2xl font-bold text-gray-100">{bookName}</h2>
                <p className="font-medium text-gray-600">By : {author}</p>

                {/* Tags and Year */}
                <div className="flex flex-wrap items-center gap-4 py-2">
                    <span className="font-bold text-gray-900">Tag</span>
                    {tags && tags.map((tag, index) => (
                        <span key={index} className="text-green-500 bg-green-50 px-3 py-1 rounded-full font-medium text-sm">
                            #{tag}
                        </span>
                    ))}
                    <div className="flex items-center gap-2 text-gray-500">
                        <span>📍</span> 
                        <span>Year of Publishing: {yearOfPublishing}</span>
                    </div>
                </div>

                {/* Publisher and Pages */}
                <div className="flex flex-wrap items-center gap-6 text-gray-500 pb-2">
                    <div className="flex items-center gap-2">
                        <span>👥</span>
                        <span>Publisher: {publisher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>📄</span>
                        <span>Page {totalPages || 192}</span>
                    </div>
                </div>

                <div className="border-t border-gray-100 my-2"></div>

                {/* Action Badges and Button */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="bg-blue-50 text-blue-500 px-5 py-2 rounded-full text-sm">
                        Category: {category || "Classic"}
                    </span>
                    <span className="bg-orange-50 text-orange-500 px-5 py-2 rounded-full text-sm">
                        Rating: {rating}
                    </span>
                    <button className="btn btn-success bg-green-500 border-none text-white rounded-full px-5 min-h-0 h-10 hover:bg-green-600">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReadListShow;