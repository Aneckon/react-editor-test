import React from 'react';
import { useAppSelector } from '../../redux/hooks';

import './webEditor.scss';

export const WebEditor = () => {
  const editorList = useAppSelector((state) => state.addEditorListReducer.list);

  return (
    <div
      className="webEditor"
      dangerouslySetInnerHTML={{
        __html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <style>
          .wrraper{
            text-align: center;
          }
          .img{
            max-width: 100%;
            width: 100%;
            height: auto;
            margin-bottom: 30px;
          }
          .title{
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 150%;
            letter-spacing: 0.02em;
            color: #252A32;
            margin-bottom: 30px;
          }
          .paragraph{
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: 0.02em;
            color: #97AACD;
            margin-bottom: 30px;
          }
          .button{
            margin: 0 auto;
            cursor: pointer;
            padding: 0 30px;
            height: 40px;
            background: #4368E0;
            border-radius: 4px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 145%;
            letter-spacing: 0.02em;
            color: #F6F9FE;
            margin-bottom: 30px;
          }
        </style>
        <body>
          ${
            editorList &&
            editorList
              .map(
                (item) =>
                  `<div class="wrraper" key=${item.id}>
                  ${
                    item.name === 'Image'
                      ? `<img class="img" src=${item.input} alt=${item.name} />`
                      : ''
                  }
                  ${item.name === 'Headline' ? `<h1 class="title">${item.input}</h1>` : ''}
                  ${item.name === 'Paragraph' ? `<p class="paragraph">${item.input}</p>` : ''}
                  ${item.name === 'Button' ? `<button class="button">${item.input}</button>` : ''}
                </div>`,
              )
              .join('')
          }
        </body>
        </html>`,
      }}
    />
  );
};
