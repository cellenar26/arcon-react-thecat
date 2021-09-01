import * as Sentry from '@sentry/browser'
import { Component } from 'react';
const isProduction = process.env.NODE_ENV === 'production'

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        console.log(error, info);

        this.setState({ hasError: true})

        if (isProduction) {
            Sentry.captureException(error, {extra: info})
        }
    }
    render() {
        if (this.state.error) {
            return <div>Error!</div>
        }

        return this.props.children
    }
}
export default ErrorBoundary