import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys =
  | "headerImageBox"
  | "headerImage"
  | "canvasBox"
  | "canvas"
  | "resultImage"
  | "resultColumn"
  | "border"
  | "topRightBorder"
  | "bottomRightBorder"
  | "topLeftBorder"
  | "bottomLeftBorder"
  | "smallMargin"
  | "smallHeight"
  | "groupIdColumn"
  | "leftGroupId"
  | "rightGroupId"
  | "countryName"
  | "flagBox"
  | "flag"
  | "leftEight"
  | "leftFour"
  | "leftTwo"
  | "leftOne"
  | "winner"
  | "rightOne"
  | "rightTwo"
  | "rightFour"
  | "rightEight"
  | "winnerBorder"
  | "qrcodeBox"
  | "qrcode"
  | "qrcodeTitle"
  | "qrcodeDesc"
  | "qrcodeDescBold"
  | "qrcodeFloat";

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  headerImageBox: {
    width: "95%",
    paddingTop: 20,
    paddingBottom: 0,
    flexGrow: 1
  },
  headerImage: {
    width: "100%"
  },
  canvas: {
    height: "100%",
    width: "100%",
    position: "relative"
  },
  canvasBox: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    // bottom: 0,
    zIndex: 300
  },
  resultImage: {
    width: "95%",
    flexGrow: 1
    // zIndex: 200
  },
  resultColumn: {
    flex: 1
  },
  border: {
    border: "4px solid white",
    position: "relative"
  },
  topRightBorder: {
    borderBottom: "none",
    borderLeft: "none"
    // borderTopRightRadius: 8
  },
  bottomRightBorder: {
    borderTop: "none",
    borderLeft: "none"
    // borderBottomRightRadius: 8
  },
  topLeftBorder: {
    borderBottom: "none",
    borderRight: "none"
    // borderTopLeftRadius: 8
  },
  bottomLeftBorder: {
    borderTop: "none",
    borderRight: "none"
    // borderBottomLeftRadius: 8
  },
  smallMargin: {
    marginTop: 10
  },
  smallHeight: {
    height: 10
  },
  groupIdColumn: {
    flexShrink: 0,
    width: 45,
    color: "white"
  },
  leftGroupId: {
    fontSize: 10,
    padding: "16px 0px",
    height: 16.4
  },
  rightGroupId: {
    fontSize: 10,
    padding: "16px 0px",
    height: 16.4,
    textAlign: "right"
  },
  countryName: {
    marginTop: -3,
    fontSize: 8,
    color: "white"
  },
  flagBox: {
    zIndex: 5,
    position: "absolute",
    width: 65
  },
  flag: {
    zIndex: 5,
    position: "absolute"
  },
  leftEight: {
    "&> $topRightBorder": {
      marginTop: 23,
      height: 22,
      "&> $flagBox": {
        left: -47,
        top: -18
      }
    },
    "&> $bottomRightBorder": {
      marginBottom: 45,
      height: 21,
      "&> $flagBox": {
        top: 9,
        left: -47
      }
    }
  },
  leftFour: {
    "&> $topRightBorder": {
      marginTop: 46,
      height: 48,
      "&> $flag": {
        left: -10,
        top: -18
      }
    },
    "&> $bottomRightBorder": {
      marginBottom: 90,
      height: 48,
      "&> $flag": {
        top: 32,
        left: -9
      }
    }
  },
  leftTwo: {
    "&> $topRightBorder": {
      marginTop: 93,
      height: 98,
      "&> $flag": {
        left: -18,
        top: -18
      }
    },
    "&> $bottomRightBorder": {
      height: 97,
      "&> $flag": {
        top: 82,
        left: -18
      }
    }
  },
  leftOne: {
    marginTop: 145,
    height: 50,
    "&> $flag": {
      top: 36,
      left: -18
    },
    "&$winnerBorder": {
      zIndex: 1
    }
  },
  winner: {
    width: 0,
    flex: 0,
    position: "relative",
    "& + $resultColumn": {
      marginLeft: -4
    },
    "&> $flag": {
      top: 118,
      left: -27,
      width: 48
    }
  },
  rightOne: {
    marginTop: 145,
    height: 50,
    "&> $flag": {
      top: 36,
      right: -18
    }
  },
  rightTwo: {
    "&> $topLeftBorder": {
      marginTop: 93,
      height: 98,
      "&> $flag": {
        right: -18,
        top: -18
      }
    },
    "&> $bottomLeftBorder": {
      height: 97,
      "&> $flag": {
        top: 82,
        right: -18
      }
    }
  },
  rightFour: {
    "&> $topLeftBorder": {
      marginTop: 45,
      height: 49,
      "&> $flag": {
        right: -11,
        top: -18
      }
    },
    "&> $bottomLeftBorder": {
      marginBottom: 90,
      height: 48,
      "&> $flag": {
        top: 32,
        right: -11
      }
    }
  },
  rightEight: {
    "&> $topLeftBorder": {
      marginTop: 23,
      height: 21,
      "&> $flagBox": {
        right: -47,
        top: -18
      }
    },
    "&> $bottomLeftBorder": {
      marginBottom: 45,
      height: 22,
      "&> $flagBox": {
        top: 9,
        right: -47
      }
    }
  },
  winnerBorder: {
    borderColor: "yellow"
  },
  qrcodeBox: {
    maxWidth: 768,
    width: "100%",
    boxSizing: "border-box",
    padding: "0px 20px 20px"
  },
  qrcode: {
    width: "140px",
    paddingRight: "20px"
  },
  qrcodeTitle: {
    paddingTop: 5,
    paddingBottom: 10
  },
  qrcodeDesc: {
    color: "white",
    fontSize: "14px"
  },
  qrcodeDescBold: {
    fontWeight: "bold"
  },
  qrcodeFloat: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // zIndex: 20,
    background: "#D80000"
  }
});

export default styles;
