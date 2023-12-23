import { ErrorRequestHandler } from "express";
import config from "../config";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorMessage: any = "";

  let errorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err?.message,
      },
    ];
  }

  //ultimate return
  return res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    errorDetails: err,
    stack: config.node_env === "development" ? err?.stack : null,
  });
};

export default globalErrorHandler;
