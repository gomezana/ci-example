import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useLanguage } from './language.hooks';
import { LanguageProvider } from './language.context';

describe('useLanguage specs', () => {
  it('should return a message with language equals "es" when it renders the hook', () => {
    // Arrange
    const Provider: React.FC = (props) => {
      return <LanguageProvider>{props.children}</LanguageProvider>
    }

    // Act
    const { result } = renderHook(() => useLanguage(), {
      wrapper: Provider,
    });

    act(() => {
      result.current.setLanguage('es');
    })

    // Assert
    expect(result.current.message).toEqual('The current language is: es');
  });

  it('should return a message with language equals "english" when it renders the hook', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useLanguage(), {
      wrapper: LanguageProvider,
    });

    act(() => {
      result.current.setLanguage('english');
    })

    // Assert
    expect(result.current.message).toEqual('The current language is: english');
  });
});
