import React from 'react'

const Feedback = () => {
  return (
    <section className="bg-background_section_8">
      <div className="container section text-text_2 ">
        <h4>ЧОМУ CREEN?</h4>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="460"
                height="515"
                src="https://www.youtube.com/embed/sIkpvn0pcBo?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.screenphoto.com.ua&widgetid=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
           
          </div>
          <div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="460"
                height="515"
                src="https://www.youtube.com/embed/6f6nUVMr4Nw?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.screenphoto.com.ua&widgetid=3"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;