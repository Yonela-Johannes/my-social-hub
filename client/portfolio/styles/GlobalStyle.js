import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #575151;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    .scroll-content {
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
      }
    }
  }
`;
export default GlobalStyles;
