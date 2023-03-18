import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { PanelItem } from '..';
import { useAppDispatch } from '../../redux/hooks';
import { addItem } from '../../redux/slice/addEditorlist';

import './panel.scss';

export const Panel = () => {
  const dispatch = useAppDispatch();

  const handleAddItem = (image: string, name: string) => {
    dispatch(addItem({ image, name, id: uuidv4(), input: '' }));
  };

  return (
    <div className="panel">
      <div className="panel__content">
        <PanelItem handleAddItem={handleAddItem} image="./assets/Headline.svg" name="Headline" />
        <PanelItem
          handleAddItem={handleAddItem}
          image="./assets/text-align-left.svg"
          name="Paragraph"
        />
        <PanelItem handleAddItem={handleAddItem} image="./assets/image.svg" name="Button" />
        <PanelItem handleAddItem={handleAddItem} image="./assets/image.svg" name="Image" />
      </div>
    </div>
  );
};
