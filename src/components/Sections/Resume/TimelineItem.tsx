import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import Image from 'next/image';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, itemImage} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {/* <div className="flex items-center justify-center gap-x-2 md:justify-start"> */}
          {location &&
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
              <span>•</span>
              <span className="flex-1 text-sm sm:flex-none">{date}</span>
            </div>
          }
          {!location &&
            <div className="flex items-center justify-center gap-x-2 md:justify-start">
              <span className="flex-1 text-sm sm:flex-none">{date}</span>
            </div>
          }
          {/* <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span> */}
          {/* <span className="flex-1 text-sm sm:flex-none">{date}</span> */}
        {/* </div> */}
      </div>
      {content}
      <br></br>
      {itemImage &&
        <div className="col-span-1 px-6 flex justify-center md:justify-start">
          <div className="relative h-24 w-48 overflow-hidden rounded-xl md:h-52 md:w-96">
            <Image alt="about-me-image" className="h-full w-full object-cover" src={itemImage}/>
          </div>
          <br></br>
          <br></br>
        </div>
      }
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
