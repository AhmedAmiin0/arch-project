export const theTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(80, 72, 229)',
    },
    secondary: {
      main: 'rgb(45, 55, 72)',
    },
    therdary: {
      main: 'rgb(117, 130, 235)',

    },
    background: {
      default: 'rgb(11, 15, 25)',
      paper: 'rgb(17, 24, 39)',
      transparent: 'rgba(255, 255, 255, 0.04)',
    },
    text: {
      main: 'rgb(255, 255, 255)',
      secondary: 'rgb(255, 255, 255)',
    },
  },
  components: {
    // Use `MuiDataGrid` on both DataGrid and DataGridPro
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(17, 24, 39)',
          border: 'none',
          width: '100%',
        },
        columnSeparator: {
          visibility: 'hidden',
        },
        cell: {
          padding: '15px 16px',
          outline: 'none',
        },
      },
    },
    MuiTextField: {
      borderColor: 'rgb(45, 55, 72)',
      borderRadius: '8px',
      root: {
        borderRadius: '8px',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '8px',
      },
      input: {
        padding: '12px 14px',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '8px',
      },
      contained: {
        borderRadius: '8px',
      }
    },
    MuiCard: {
      root: {
        borderRadius: '8px',
      }
    },
  },

  overRides: {
    MuiTextField: {
      borderColor: 'rgb(45, 55, 72)',
      borderRadius: '8px',
      root: {
        borderRadius: '8px',
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: '8px',
      },
      input: {
        padding: '12px 14px',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '8px',
      },
      contained: {
        borderRadius: '8px',
      }
    },
    MuiCard: {
      root: {
        borderRadius: '8px',
      }
    },
  }
}