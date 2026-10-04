import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an unhandled error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-6 text-stone-800">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 text-amber-600">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-stone-900">Der opstod en visningsfejl</h2>
              <p className="text-sm text-stone-500 leading-relaxed">
                Appen stødte på et uventet problem. Du kan genindlæse siden for at fortsætte søgningen.
              </p>
            </div>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-[#ed6a56] hover:bg-[#d85c49] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#ed6a56]/20 transition-all active:scale-95"
            >
              <RefreshCw className="w-4 h-4" /> Genindlæs siden
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
