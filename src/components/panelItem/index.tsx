import React, { FC } from 'react';

import './panelItem.scss';

interface PanelItemProps {
  image: string;
  name: string;
  handleAddItem: (image: string, name: string) => void;
}

export const PanelItem: FC<PanelItemProps> = ({ image, name, handleAddItem }) => {
  return (
    <div onClick={() => handleAddItem(image, name)} className="panelItem">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};
