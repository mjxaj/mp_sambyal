import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">About Me</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg">
          <p className="leading-relaxed">
            I'm from Jammu and Kashmir, known for the historic Dogra State. I belong to Samba District, and I'm proud to call J&K the Crown of INDIA.
          </p>
          
          <div className="quote text-lg my-8">
            <p className="text-primary-800">"हम खंड मीठे लोग डोंगरे है।"</p>
          </div>
          
          <p className="leading-relaxed">
            I'm always ready to help people when their needs come to my notice, especially in the health sector, domestic help, and social causes. 
            I have conducted numerous yoga camps, organized blood donation drives, provided financial aid during disasters, 
            led plantation initiatives for ecological balance, and promoted water conservation programs.
          </p>
          
          <div className="quote text-lg my-8">
            <p className="text-primary-800">"जिओ और जीने दो।"</p>
          </div>
          
          <p className="leading-relaxed">
            I respect all religions and firmly believe that honesty is the best policy. 
            My philosophy is that if you can help someone, you should. 
            I believe in maintaining faith in God, knowing that God is always watching over us. 
            With this mindset, you will never do wrong to anyone.
          </p>
          
          <p className="leading-relaxed">
            Life is given to us only once, so we shouldn't waste it. I strive to make every moment count through service and compassion.
          </p>
          
          <div className="quote text-lg my-8">
            <p className="text-primary-800">"मेरा मानना है आप अगर किसी की मदद कर सकते हो तो ज़रूर करे। भगवान पर हमेशा विश्वास बनाए रखे क्योंकि भगवान आपको देख रहा है। यह सोचकर चलोगे तो आप कभी भी किसी के साथ गलत नही करोगे। यह जीवन एक बार मिला है इसलिए इसको ब्यर्थ न गवाएं।"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 