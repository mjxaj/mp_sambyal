import React from 'react';

const quotes = [
  {
    text: "हम खंड मीठे लोग डोंगरे है।",
    translation: "We are the sweet people of the hills."
  },
  {
    text: "जिओ और जीने दो।",
    translation: "Live and let live."
  },
  {
    text: "Honesty is the Best Policy में मेरा अटूट विश्वास है।",
    translation: "I have unshakable faith in the principle that honesty is the best policy."
  },
  {
    text: "मेरा मानना है आप अगर किसी की मदद कर सकते हो तो ज़रूर करे।",
    translation: "I believe that if you can help someone, you must do so."
  },
  {
    text: "भगवान पर हमेशा विश्वास बनाए रखे क्योंकि भगवान आपको देख रहा है।",
    translation: "Always maintain faith in God because God is watching you."
  },
  {
    text: "यह जीवन एक बार मिला है इसलिए इसको ब्यर्थ न गवाएं।",
    translation: "Life is given only once, so don't waste it."
  }
];

const Quotes = () => {
  return (
    <section id="quotes" className="py-16 px-4 md:px-8 lg:px-16 bg-accent bg-opacity-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">My Beliefs & Sayings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl font-medium mb-3 text-primary">{quote.text}</p>
              <p className="text-gray-600 italic">{quote.translation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quotes; 