import { SweetAlertOptions } from "sweetalert2";

type CREATE_MSG_TYPE = {
  success: SweetAlertOptions;
  fail: {
    400: SweetAlertOptions;
    unexpected: SweetAlertOptions;
  };
};

type VIEW_MSG_TYPE = {
  info: SweetAlertOptions;
  fail: {
    400: SweetAlertOptions;
    unexpected: SweetAlertOptions;
  };
};

const CREATE_MSG: CREATE_MSG_TYPE = {
  success: {
    title: "Completion!",
    text: "New Data has been saved",
    icon: "success",
    timer: 1500,
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

const VIEW_MSG: VIEW_MSG_TYPE = {
  info: {
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

export { CREATE_MSG, VIEW_MSG };
