import React from 'react';

import { EditorItem } from '..';

import './editor.scss';
import { useAppSelector } from '../../redux/hooks';

export const Editor = () => {
  const [openItem, setOpenItem] = React.useState('');

  const editorList = useAppSelector((state) => state.addEditorListReducer.list);

  return (
    <div onClick={() => setOpenItem('')} className="editor">
      {editorList.length
        ? editorList.map((item) => (
            <EditorItem key={item.id} setOpenItem={setOpenItem} openItem={openItem} item={item} />
          ))
        : ''}
    </div>
  );
};
