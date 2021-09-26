import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { css } from "@emotion/react";
import Swal from "sweetalert2";

import { CREATE_MSG } from "@/constants";
import { api } from "@/utils/api";
import { Color } from "@/theme";
import { create } from "@/redux/carStatusReducer";
import { Button } from "@/components/lv1";
import { SearchBox, FormField } from "@/components/lv2";
import { Modal } from "@/components/lv4";

const rootStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Color.Black0};
`;

export const HeaderBar: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openCreateCarModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCreateHandler = async (data: any) => {
    const { make, model, year, price } = data;

    try {
      const res = await api.post("/", {
        make,
        model,
        year,
        price,
        status: true,
      });

      if (res.status === 201) {
        // Update the store
        dispatch(create(res.data.car));

        Swal.fire(CREATE_MSG.success);

        setIsOpen(false);
      } else {
        Swal.fire(CREATE_MSG.fail.unexpected);
      }
    } catch (err) {
      Swal.fire(CREATE_MSG.fail[400]);
    }
  };
  return (
    <div css={rootStyle}>
      <div>
        <Button type="button" onClick={openCreateCarModal}>
          Add New Vehicle
        </Button>
        <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
          <FormField onSubmit={onCreateHandler} />
        </Modal>
      </div>
      <SearchBox />
    </div>
  );
};
