export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: 'light',
    properties: {
      '--main-color': '#273a56',
      '--body-background': '#0000001a',
      '--menu-bg-color': 'linear-gradient(to bottom, #273a56, black)',
      '--btn-bg-color': '#273a56',
      '--btn-hover-bg-color': '#131c2b',
    },
  };
  
  export const dark: Theme = {
    name: 'dark',
    properties: {
        '--main-color': '#A968F2',
      '--body-background': '#0000001a',
      '--menu-bg-color': 'linear-gradient(to bottom, #53B1DB, black)',
      '--btn-bg-color': '#FFC861',
      '--btn-hover-bg-color': '#131c2b',
    },
  };
  