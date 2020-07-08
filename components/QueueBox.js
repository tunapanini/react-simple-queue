/* @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import React from "react";

import { CSSTransitionGroup } from "react-transition-group";

function QueueBox({ elements }) {
  return (
    <div
      css={css`
        label: QueueBox;
        background-color: #079494;
        display: flex;
        align-items: center;
        padding: 0 4px;
        color: #fff;
      `}
    >
      <span>Front</span>
      <CSSTransitionGroup
        transitionName="slide"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        css={css`
          flex: 1;
          height: 32px;
          display: inline-flex;
          overflow-y: hidden;
          overflow-x: auto;
          border: 1px solid #bbb;
        `}
      >
        {elements.map(el => (
          <span
            key={el.id}
            css={css`
              label: QueueBox__item;
              flex: 1;
              max-width: 32px;
              transition: all 400ms;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              border-right: 1px solid #bbb;
              &.slide-enter,
              &.slide-leave.slide-leave-active {
                min-width: 0px;
                flex-grow: 0;
              }
              &.slide-enter.slide-enter-active,
              &.slide-leave {
                flex-grow: 1;
              }
            `}
          >
            {el.value}
          </span>
        ))}
      </CSSTransitionGroup>
      <span>Rear</span>
    </div>
  );
}

export default QueueBox;
