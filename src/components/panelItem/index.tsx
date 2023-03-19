import React, { FC } from 'react';
import { useDrag } from 'react-dnd';

import './panelItem.scss';

interface PanelItemProps {
  image: string;
  name: string;
  handleAddItem: (image: string, name: string) => void;
}

export const PanelItem: FC<PanelItemProps> = ({ image, name, handleAddItem }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'item',
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleAddItem(image, name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={isDragging ? { opacity: 0.4 } : { opacity: 1 }}
      onClick={() => handleAddItem(image, name)}
      className="panelItem">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};
