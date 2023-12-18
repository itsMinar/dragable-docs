import { useRef } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      id: 1,
      desc: 'This is a simple description',
      fileSize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'green' },
    },
    {
      id: 2,
      desc: 'This is a simple description',
      fileSize: '.9mb',
      close: false,
      tag: { isOpen: false, tagTitle: 'Download Now', tagColor: 'blue' },
    },
    {
      id: 3,
      desc: 'This is a simple description',
      fileSize: '.9mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download Now', tagColor: 'blue' },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 z-[3] flex h-full w-full flex-wrap gap-10 p-5"
    >
      {data.map((item) => (
        <Card key={item.id} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
