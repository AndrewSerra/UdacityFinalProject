import React from 'react';

export type WidgetErrorBoundaryProps = React.PropsWithChildren & {
}

export class WidgetErrorBoundary extends React.Component<WidgetErrorBoundaryProps> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    }

    render(): React.ReactNode {
        return this.props.children;
    }
}
