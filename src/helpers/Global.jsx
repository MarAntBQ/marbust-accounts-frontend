// config.js
// const config = {
//     local: {
//       api: 'http://localhost:3000/api',
//       app: 'http://localhost:5173',
//     },
//     production: {
//         api: 'https://v2.accounts.marbust.com/api',
//         app: 'https://accounts.marbust.com/',
//     },
//     // Puedes agregar más ambientes si es necesario
//   };

//   const API = config.local; // Cambia a config.local si estás en desarrollo
  
//   export default API;

const Global = {
  local: {
    url: 'http://localhost:3000/api',
    app: 'http://localhost:5173',
  },
  production: {
    url: 'https://v2.accounts.marbust.com/api',
    app: 'https://accounts.marbust.com/',
  }
}

export default Global.local;
