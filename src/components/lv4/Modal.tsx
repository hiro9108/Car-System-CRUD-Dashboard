import React, { useState, useCallback } from "react";
import ReactModal from "react-modal";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Color } from "@/theme";

ReactModal.setAppElement("#root");

const rootStyle = css`
  color: green;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Modal: React.FC<{ modalIsOpen: any; setIsOpen: any }> = ({
  children,
  modalIsOpen,
  setIsOpen,
}) => {
  return (
    <div css={rootStyle}>
      <ReactModal isOpen={modalIsOpen} style={customStyles}>
        <div css={rootStyle}>
          <div className="flex justify-end items-center">
            <FontAwesomeIcon
              icon={faTimesCircle}
              size="2x"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div>{children}</div>
        </div>
      </ReactModal>
    </div>
  );
};
