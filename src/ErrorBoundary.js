import React, { Component } from "react";
import StackTrace from "stacktrace-js";

// window.onerror = function(msg, file, line, col, error) {
//   StackTrace.fromError(error).then(err => {
//     StackTrace.report(
//       err,
//       `//${window.location.hostname}:${process.env.REACT_APP_LOGGER_PORT || 3334}/jsnlog.logger`,
//       {
//         type: "window.onerror",
//         url: window.location.href,
//         userId: window.userId,
//         agent: window.navigator.userAgent,
//         date: new Date(),
//         msg: msg
//       }
//     );
//   });
// };

function logErrorToMyService(error, errorInfo) {
  console.error(error, errorInfo);
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({hasError: true})
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
