import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AxiosResponse } from "axios";
import { css } from "@emotion/react";
import { api } from "@/utils/api";
import { CAR_STATUS } from "@/types/globalTypes";
import { selectCarStatus, init } from "@/redux/carStatusReducer";
import { HeaderBar } from "@/components/lv3";
import { TableList } from "@/components/lv4";

import { VerticalBar } from "@/components/lv1";

const rootStyle = css`
  min-width: 600px;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectCarStatus);

  useEffect(() => {
    api
      .get("/")
      .then((res: AxiosResponse<{ cars: CAR_STATUS[] }>) => {
        dispatch(init(res.data.cars));
      })
      .catch((err) => console.log(`Error API Connection: ${err}`));
  }, [dispatch]);

  return (
    <div css={rootStyle}>
      <HeaderBar />
      <div>
        <VerticalBar data={status} />
        <TableList cars={status} />
      </div>
    </div>
  );
};

export default App;
