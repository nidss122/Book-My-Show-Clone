import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";
import PlayFilters from "../components/PlayFilter/PlayFilters.Component";
import Poster from "../components/Poster/Poster.Component";

const Playpage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in Hospet</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of me by Sweets"
                subtitle="Comedy Shows | English, Kannada, Hindi | 18yrs+ | 2hrs 30min"
              />
            </div>
            <div className="w-1/2 md:1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of me by Sweets"
                subtitle="Comedy Shows | English, Kannada, Hindi | 18yrs+ | 2hrs 30min"
              />
            </div>
            <div className="w-1/2 md:1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of me by Sweets"
                subtitle="Comedy Shows | English, Kannada, Hindi | 18yrs+ | 2hrs 30min"
              />
            </div>
            <div className="w-1/2 md:1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of me by Sweets"
                subtitle="Comedy Shows | English, Kannada, Hindi | 18yrs+ | 2hrs 30min"
              />
            </div>
            <div className="w-1/2 md:1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of me by Sweets"
                subtitle="Comedy Shows | English, Kannada, Hindi | 18yrs+ | 2hrs 30min"
              />
            </div>
            <div className="w-1/2 md:1/3 lg:w-3/12 my-3 flex items-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-so-rude-of-me-by-swati-sachdeva-0-2022-9-4-t-6-10-37.jpg"
                title="So Rude of me by Sweets"
                subtitle="Comedy Shows | English, Kannada, Hindi | 18yrs+ | 2hrs 30min"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div>
            <PlayFilters
              title="Date"
              tags={["Today", "Tommorow", "This Weekend"]}
            />
            <PlayFilters
              title="Language"
              tags={["English", "Kannada", "Hindi"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(Playpage);
