import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.error("Caught in Error boundary", err, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error.
          <Link to="/">Back to Home</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
