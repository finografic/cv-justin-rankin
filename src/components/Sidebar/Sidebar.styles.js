import { css } from '@emotion/core';
import { colors, layout } from 'styles';

export const styles = css`
  flex: 0 0 ${layout.sidebar.width};
  min-height: 100vh;
  padding: 0;
  .sidebar-content-wrapper {
    position: fixed;
    width: ${layout.sidebar.width};
    padding: ${layout.padding};
  }
  header {
    padding: ${layout.padding} 0;
    margin-bottom: ${layout.padding};
  }
  .logo {
    width: 100%;
    max-width: 100%;
  }
`;
