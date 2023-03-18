import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  arrowDownItem,
  arrowUpItem,
  copyItem,
  deleteItem,
  updateItem,
} from '../../redux/slice/addEditorlist';

import './editorItem.scss';

interface EditorItemProps {
  openItem: string;
  setOpenItem: (id: string) => void;
  item: { id: string; image: string; name: string; input: string };
}

export const EditorItem: FC<EditorItemProps> = ({ setOpenItem, openItem, item }) => {
  const [inputText, setInputText] = React.useState(item.input || '');

  const dispatch = useAppDispatch();
  const editorList = useAppSelector((state) => state.addEditorListReducer.list);

  React.useEffect(() => {
    const newInput = [...editorList];

    const index = newInput.findIndex((index) => index.id === item.id);

    const newFormList = {
      image: item.image,
      id: item.id,
      name: item.name,
      input: inputText,
    };

    newInput.splice(index, 1, newFormList);
    dispatch(updateItem(newInput));
  }, [inputText]);

  return (
    <div
      onClick={(event) => {
        setOpenItem(item.id);
        event.stopPropagation();
      }}
      className={openItem === item.id ? 'editorItem block' : 'editorItem'}>
      <img src={item.image} alt="name" />
      <p>{item.name}</p>
      <div className={openItem === item.id ? 'editorItem__content block' : 'editorItem__content'}>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <div className="editorItem__panel">
          <div className="editorItem__panel-item arrow">
            <img
              onClick={() => dispatch(arrowDownItem(item.id))}
              src="./assets/arrow-down.svg"
              alt="arrow"
            />
            <img
              onClick={() => dispatch(arrowUpItem(item.id))}
              src="./assets/arrow-top.svg"
              alt="arrow"
            />
          </div>
          <div className="editorItem__panel-item">
            <img
              onClick={() => dispatch(copyItem({ image: item.image, name: item.name }))}
              src="./assets/copy.svg"
              alt="copy"
            />
            <img
              onClick={() => dispatch(deleteItem(item.id))}
              src="./assets/delete.svg"
              alt="delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
