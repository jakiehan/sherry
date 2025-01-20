import { Component, ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from '@/widgets/PageError/ui/PageError';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

//ErrorBoundary - отлов ошибки JavaScript в любом месте своего дочернего дерева компонентов,
// регистрируют эти ошибки и отображают резервный пользовательский интерфейс вместо дерева компонентов, в котором произошел сбой.
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError />
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
