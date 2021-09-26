import React from "react";
import { css } from "@emotion/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Color } from "@/theme";

type SearchIconProps = {
  className?: string;
  onClick?: () => void;
};

const rootStyle = css`
  padding: 0.3rem;
  border: 1px solid ${Color.Black0};
  font-size: 2.6rem;
  color: ${Color.White0};
  background-color: ${Color.Black0};
  cursor: pointer;
`;

export const SearchIcon: React.FC<SearchIconProps> = ({
  className,
  onClick,
}) => {
  return (
    <FontAwesomeIcon
      css={rootStyle}
      icon={faSearch}
      className={className}
      onClick={onClick}
    />
  );
};
