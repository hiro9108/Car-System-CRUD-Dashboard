import React, { Dispatch, SetStateAction } from "react";
import { css } from "@emotion/react";
import { Color, Typography } from "@/theme";
import { Button } from "@/components/lv1";

const rootStyle = css`
  color: ${Color.Primary};
`;

const rowStyle = css`
  width: 350px;
  font-size: 1.8rem;
  display: flex;
  margin: 2rem 0.5rem;
  border-bottom: 1px solid ${Color.PrimaryLight};
  font-family: ${Typography.Primary};
`;

const keyStyle = css`
  flex: 1;
`;

const valueStyle = css`
  flex: 1;
`;

const colonStyle = css`
  flex: 1;
  text-align: center;
`;

export const ViewField: React.FC<{
  value?: any;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}> = ({ value, setIsOpen }) => {
  const { _id, make, model, year, price, status } = value;

  const newObj = {
    _id,
    make,
    model,
    year,
    price,
    status,
  };

  return (
    <div css={rootStyle}>
      {Object.keys(newObj).map((key, i) => (
        <div css={rowStyle} key={i}>
          <div css={keyStyle}>{key === "_id" ? "NO" : key.toUpperCase()}</div>
          <div css={colonStyle}>:</div>
          <div css={valueStyle}>
            {key === "status" ? (value[key] ? "Live" : "Sold") : value[key]}
          </div>
        </div>
      ))}
      <div className="text-center">
        <Button type="submit" onClick={() => setIsOpen?.(false)}>
          Back
        </Button>
      </div>
    </div>
  );
};
