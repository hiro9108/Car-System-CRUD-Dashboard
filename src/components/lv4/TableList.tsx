import React, { useState, useCallback } from "react";
import { css } from "@emotion/react";
import { api } from "@/utils/api";
import Swal from "sweetalert2";
import { VIEW_MSG } from "@/constants";
import { CAR_STATUS } from "@/types/globalTypes";
import { faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rootStyle = css`
  table {
    width: 100%;
    border-collapse: collapse;
  }
  table th {
    padding: 0.5rem;
    text-align: center;
    vertical-align: top;
    border: 0.05rem solid #666666;
    font-size: 1.2rem;
  }
  table td {
    padding: 0.5rem;
    background-color: #fff;
    border: 0.05rem solid #666666;
  }
`;

const iconStyle = css`
  pointer-events: none;
`;

export const TableList: React.FC<{ cars: CAR_STATUS[] }> = ({ cars }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const onViewHandler = useCallback(async (e) => {
    try {
      const params = e.target.id;

      const res = await api.get(`/${params}`);

      if (res.status === 201) {
        Swal.fire({
          title: "Car Information",
          html: `
            <div>
              <div>NO : ${res.data.car._id}</div>
              <div>MAKE : ${res.data.car.make}</div>
              <div>MODEL : ${res.data.car.model}</div>
              <div>YEAR : ${res.data.car.year}</div>
              <div>PRICE : ${res.data.car.price}</div>
              <div>STATUS : ${res.data.car.status}</div>
            </div>
          `,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setIsOpen(false);
      } else {
        Swal.fire(VIEW_MSG.fail.unexpected);
      }
    } catch (err) {
      Swal.fire(VIEW_MSG.fail[400]);
    }
  }, []);

  const onUpdateHandler = useCallback(() => {
    // TODO: Edit
  }, []);

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
                onClick={onViewHandler}
              >
                <FontAwesomeIcon icon={faEye} css={iconStyle} />
              </div>
            </td>
            <td className="text-center">
              <FontAwesomeIcon
                icon={faPen}
                css={iconStyle}
                onClick={onUpdateHandler}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
