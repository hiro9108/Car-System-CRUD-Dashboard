import { SweetAlertOptions } from "sweetalert2";

type COMMON_MSG_TYPE = {
  success: SweetAlertOptions;
  fail: {
    400: SweetAlertOptions;
    unexpected: SweetAlertOptions;
  };
};

const CREATE_MSG: COMMON_MSG_TYPE = {
  success: {
    title: "Completion!",
    text: "New Data has been saved",
    icon: "success",
    timer: 3000,
  },
  fail: {
    400: {
      title: "Error! Bad Request",
      text: "Please try to check your input parameter",
      icon: "error",
    },
    unexpected: {
      title: "Something Wrong",
      text: "Please ask system admin",
      icon: "error",
    },
  },
};

const VIEW_MSG: COMMON_MSG_TYPE = {
  success: {
    title: "Car Information",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  },
  fail: {
    400: {
      title: "Error! Bad Request",
      text: "Please try again",
      icon: "error",
    },
    unexpected: {
      title: "Something Wrong",
      text: "Please ask system admin",
      icon: "error",
    },
  },
};

const UPDATE_MSG: COMMON_MSG_TYPE = {
  success: {
    title: "Completion!",
    text: "Data is updated",
    icon: "success",
    timer: 3000,
  },
  fail: {
    400: {
      title: "Error! Bad Request",
      text: "Please try again",
      icon: "error",
    },
    unexpected: {
      title: "Something Wrong",
      text: "Please ask system admin",
      icon: "error",
    },
  },
};

export { CREATE_MSG, VIEW_MSG, UPDATE_MSG };
