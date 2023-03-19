import React from 'react';
import { useDrop } from 'react-dnd';

import { useAppSelector } from '../../redux/hooks';

import { EditorItem } from '..';

import './editor.scss';

export const Editor = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: () => ({ name: 'box' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const [openItem, setOpenItem] = React.useState('');

  const editorList = useAppSelector((state) => state.addEditorListReducer.list);

  const isActive = canDrop && isOver;

  return (
    <div onClick={() => setOpenItem('')} className="editor">
      {editorList.length
        ? editorList.map((item) => (
            <EditorItem key={item.id} setOpenItem={setOpenItem} openItem={openItem} item={item} />
          ))
        : ''}
      <div
        data-testid="box"
        ref={drop}
        className={isActive ? 'editor__drop active' : 'editor__drop'}></div>
    </div>
  );
};
