// export const StateProvider = ({children}) => {
//
// };
// const themeActions =
//     (chosenTheme) => {
//         return {
//             type: 'CHANGE_THEME',
//             payload: theme.chosenTheme
//         }
//     }
//
// const themeReducer = (state, action) => {
//     switch (action.type) {
//         case 'CHANGE_THEME':
//             return action.payload
//         default:
//             return state
//     }
// }
// const getTheme = () => {
//     if (typeof window !== "undefined") {
//         if (window.localStorage.getItem('theme') !== null) {
//             if (window.localStorage.getItem('theme') === 'dark') {
//                 return theme.dark
//             } else {
//                 return theme.white
//             }
//         }
//         if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//             window.localStorage.setItem('theme', 'dark')
//             return theme.dark;
//         }
//         return theme.white;
//     }
//     return theme.white;
// }
