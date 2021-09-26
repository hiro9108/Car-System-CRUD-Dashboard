import React, { useState, useCallback } from "react";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { css } from "@emotion/react";
import { faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { api } from "@/utils/api";
import { Color } from "@/theme";
import { selectCarStatus, update } from "@/redux/carStatusReducer";
import { UPDATE_MSG } from "@/constants";
import { CAR_STATUS } from "@/types/globalTypes";
import { FormField, ViewField } from "@/components/lv2";
import { Modal } from "@/components/lv4";

const rootStyle = css`
  padding: 0 2.5rem 5rem 2.5rem;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  table th {
    padding: 0.5rem;
    text-align: center;
    vertical-align: top;
    border: 0.05rem solid ${Color.PrimaryLight};
    font-size: 1.2rem;
    color: ${Color.White0};
    background-color: ${Color.Primary};
  }
  table td {
    padding: 0.5rem;
    background-color: #fff;
    border: 0.05rem solid ${Color.PrimaryLight};
  }
`;

const iconStyle = css`
  pointer-events: none;
  color: ${Color.PrimaryDark};
`;

export const TableList: React.FC<{ cars: CAR_STATUS[] }> = ({ cars }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateModalData, setUpdateModalData] = useState<CAR_STATUS>();
  const [targetId, setTargetId] = useState<string>();
  const [isClickUpdateBtn, setIsClickUpdateBtn] = useState(false);

  const [isView, setIsView] = useState(false);

  const status = useSelector(selectCarStatus);
  const dispatch = useDispatch();

  const openCarModal = useCallback(
    (isViewCondition, e) => {
      const targetId = e.target.id;

      const findStatus = status.find((el) => {
        return el._id === parseInt(targetId);
      });
      setTargetId(targetId);
      setUpdateModalData(findStatus);
      setIsView(isViewCondition);
      setIsOpen(true);
    },
    [status]
  );

  const onUpdateHandler = useCallback(
    async (data) => {
      if (updateModalData === undefined) return;

      try {
        const { make, model, year, price } = data;

        const res = await api.put(`/${targetId}`, {
          make,
          model,
          year,
          price,
          status: isClickUpdateBtn
            ? updateModalData.status
            : !updateModalData.status,
        });

        if (res.status === 201) {
          // Update the store
          dispatch(update(res.data.car));
          Swal.fire(UPDATE_MSG.success);
          setIsOpen(false);
        } else {
          Swal.fire(UPDATE_MSG.fail.unexpected);
        }
      } catch (err) {
        Swal.fire(UPDATE_MSG.fail[400]);
      }
    },
    [targetId, updateModalData, isClickUpdateBtn, dispatch]
  );

  if (!cars) {
    return (
      <div>
        <p>Empty</p>
      </div>
    );
  }

  return (
    <div css={rootStyle}>
      <table>
        <tr>
          <th>No</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
          <th>Status</th>
          <th>{null}</th>
          <th>{null}</th>
        </tr>
        {cars.map((car) => (
          <tr key={car._id}>
            <td>{car._id}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>${car.price.toLocaleString()}</td>
            <td>{car.status ? "Live" : "Sold"}</td>
            <td className="text-center">
              <div
                className="cursor-pointer inline"
                id={car._id.toString()}
                onClick={(e) => openCarModal(true, e)}
              >
                <FontAwesomeIcon icon={faEye} css={iconStyle} />
              </div>
            </td>
            <td className="text-center">
              <div
                className="cursor-pointer inline"
                id={car._id.toString()}
                onClick={(e) => openCarModal(false, e)}
              >
                <FontAwesomeIcon icon={faPen} css={iconStyle} />
              </div>
            </td>
          </tr>
        ))}
      </table>
      <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
        {isView ? (
          <ViewField value={updateModalData} setIsOpen={setIsOpen} />
        ) : (
          <FormField
            onSubmit={onUpdateHandler}
            setIsClickUpdateBtn={setIsClickUpdateBtn}
            value={updateModalData}
          />
        )}
      </Modal>
    </div>
  );
};
