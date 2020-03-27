import React from 'react';

export function LogoIcon() {
  return(
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="54" height="54">
        <rect width="54" height="54" fill="url(#pattern0)"/>
      </mask>
      <g mask="url(#mask0)">
        <path d="M25.5 11.5H30.5L38 13.375L46.5 18.5L45.5 24L40 29L30.5 26L20.5 34L23 39.5L30.5 43L37 39L47.5 42.5L44.5 47.5L41.5 50.5L38 53L34.5 54L29 55.5L24.5 55L19 53.5L14.5 51.5L11 48.5L7.5 44L6 37.5L5.5 32.5L6 27.5L7.5 23.5L10 19.5L14 15.5L19.5 12.5L25.5 11.5Z" fill="white"/>
        <path d="M13.5 -2L1 14.5L0 16L3.5 18.5L0.5 22L-1 31.5L0 40.5H6.5L6 37L5.5 32L6 27L7.5 23L10 19L14.5 15L20 12.5L23.5 11.5L26.5 11L29.5 11.5L32 11L32.5 8L37.5 3L13.5 -2Z" fill="#8E75F9"/>
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0" transform="translate(0 -0.00353357) scale(0.00353357)"/>
        </pattern>
        <image id="image0" width="283" height="285" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAAEdCAYAAAA8dMM8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDMtMDZUMTA6NTE6NTArMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAzLTA2VDEwOjU1OjI0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAzLTA2VDEwOjU1OjI0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlhOGE2YTM4LTljZWItNGZlNy05YTNhLWQ1ZTU1MTE0NDI4MyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjlmMWZiNjQ3LWY5NmMtMzg0Yy05NDNjLTRiMzQxM2ZiMTUwYyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE3OGUxY2M3LWE3N2QtNDY3Mi1iM2QwLTE2MmI2OWFlM2E0YiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTc4ZTFjYzctYTc3ZC00NjcyLWIzZDAtMTYyYjY5YWUzYTRiIiBzdEV2dDp3aGVuPSIyMDIwLTAzLTA2VDEwOjUxOjUwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWE4YTZhMzgtOWNlYi00ZmU3LTlhM2EtZDVlNTUxMTQ0MjgzIiBzdEV2dDp3aGVuPSIyMDIwLTAzLTA2VDEwOjU1OjI0KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5vJfZTAABKqklEQVR4nO2dd5gc1ZX233NvVXX3dPfkUSAIZQmxiCARbUxUgMXedYC1vY6sDbZxIBpwWD7WEZNNclyc1vaCwxqDGAlsFuMFEURGaJRAQqA0sadTVd17z/dHjfIojaanOtTveeZBdFVXvV1d9fa56RxCxD4zfvaV0yTrLwpgGUE8ZwmsWvrMjRvC1hURsT3MHLaEQaGwBVQKJ554aWJDEQ/0ZQtnxBwLUpKpi8VeY+JXtOYVRmKVMNZSKQvLVj59eyZs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" />
      </defs>
    </svg>
  );
}

export function ChartIcon() {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12V21H6V12H2Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 7V21H22V7H18Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 3V21H14V3H10Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export function FilesIcon() {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13 2V9H20" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export function MailIcon() {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 6L12 13L2 6" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  );
}

export function FoldersIcon() {
  return(
    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15.2222C21 15.6937 20.7893 16.1459 20.4142 16.4793C20.0391 16.8127 19.5304 17 19 17H3C2.46957 17 1.96086 16.8127 1.58579 16.4793C1.21071 16.1459 1 15.6937 1 15.2222V2.77778C1 2.30628 1.21071 1.8541 1.58579 1.5207C1.96086 1.1873 2.46957 1 3 1H8L10 3.66667H19C19.5304 3.66667 20.0391 3.85397 20.4142 4.18737C20.7893 4.52076 21 4.97295 21 5.44444V15.2222Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export function SettingsIcon() {
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" fill="#969CBA" fill-opacity="0.2" stroke="#969CBA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}
