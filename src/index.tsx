import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { App } from '@/app/App';
import '@/app/providers/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import '@/app/styles/index.scss';
import { StoreProvider } from '@/app/providers/StoreProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
