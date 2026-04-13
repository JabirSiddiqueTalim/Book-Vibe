import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[#131313] mb-4">About Our Library</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We believe in the power of stories to shape identity and connect people across generations.
                </p>
            </div>

            {/* Main Info Card (Styled like your Book Card) */}
            <div className="card lg:card-side bg-base-100 border border-gray-200 p-8 gap-8 mb-10">
                {/* Visual Placeholder */}
                <figure className="bg-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                    <div className="text-6xl mb-4">📖</div>
                    <h3 className="text-xl font-bold text-[#131313]">Our Vision</h3>
                </figure>

                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-[#131313] mb-4">Cultivating Curiosity</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Established with a passion for literature, our platform serves as a digital sanctuary 
                        for readers. We curate collections that focus on **#Identity**, **#Growth**, 
                        and **#Classic** literature to help young adults find their path.
                    </p>

                    {/* Stats/Tags Row */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="font-bold text-gray-900">Key Stats</span>
                        <span className="text-green-500 bg-green-50 px-4 py-1 rounded-full font-medium text-sm">
                            #10k+ Books
                        </span>
                        <span className="text-green-500 bg-green-50 px-4 py-1 rounded-full font-medium text-sm">
                            #50k Readers
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 ml-2">
                            <span>📍</span>
                            <span>HQ: New York, NY</span>
                        </div>
                    </div>

                    <hr className="border-gray-100 mb-6" />

                    {/* Bottom Features */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-blue-50 text-blue-500 px-5 py-2 rounded-full text-sm">
                            Founded: 2024
                        </span>
                        <span className="bg-orange-50 text-orange-500 px-5 py-2 rounded-full text-sm">
                            Community Rating: 4.9
                        </span>
                        <button className="btn btn-success bg-green-500 border-none text-white rounded-full px-8 min-h-0 h-11 hover:bg-green-600">
                            Join Our Community
                        </button>
                    </div>
                </div>
            </div>

            {/* Simple Grid for extra info */}
            <div className="grid md:grid-cols-3 gap-6">
                {['Free Access', 'Digital Archive', 'Member Events'].map((item, index) => (
                    <div key={index} className="border border-gray-100 p-6 rounded-2xl text-center">
                        <div className="text-2xl mb-2">⭐</div>
                        <h4 className="font-bold text-gray-800">{item}</h4>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default About;