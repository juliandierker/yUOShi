import React, { Component } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import ReactSnap from "react-snap-svg";
export default class schoolFloor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classHover: false
    };
  }
  handleClassroomClick() {
    var elem = document.getElementById("path19102");
    var text = document.getElementById("text19162");
    console.log(text);
    var box = document.getElementById("rect19151");
    elem.style.fill = "rgb(4, 216, 76)";
    text.style.visibility = "visible";
    box.style.visibility = "visible";
    var that = this;
    setTimeout(function() {
      that.props.history.push("/student/test");
    }, 1500);
  }

  hoverOnClass() {
    console.log("hover");
    if (!this.state.classHover) {
      this.setState({ classHover: true });
      var menu = document.getElementById("classMenuItem");
      var text = document.getElementById("text19162");
      var box = document.getElementById("rect19151");
      var elem = document.getElementById("path19102");
      elem.style.fill = "rgb(206, 239, 174)";
      menu.className = "active left item";
      text.style.visibility = "visible";
      box.style.visibility = "visible";
    }
  }
  hoverOffClass() {
    console.log("leave");
    if (this.state.classHover) {
      this.setState({ classHover: false });
      var text = document.getElementById("text19162");
      var elem = document.getElementById("path19102");

      var box = document.getElementById("rect19151");
      elem.style.fill = "#80897d";
      var menu = document.getElementById("classMenuItem");
      menu.className = "left item";

      text.style.visibility = "hidden";
      box.style.visibility = "hidden";
    }
  }

  animateClassLayer() {
    console.log("animate");
    const s = new Snap("#layer6");
    console.log(s);
  }
  render() {
    return (
      <svg
        width="100%"
        height="60%"
        viewBox="0 0 297 210"
        version="1.1"
        id="svg8"
        inkscapeversion="0.92.4 (33fec40, 2019-01-16)"
        sodipodidocname="drawing_test_final.svg"
      >
        <defs id="defs2">
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath20">
            <path
              d="m 2912.26,2760.59 -158.65,83.16 h 218.6 l 14.08,-10.34 -25.79,-2.79 -48.24,-70.03 m 79.62,73.42 -6.63,5 h 53 l -46.37,-5 m -26.48,14.74 h -221.32 l -160.26,84 -2.28,1.84 h 267.01 l 116.85,-85.84 m -17.32,18.27 -89.66,67.57 h 528.74 l 12.87,-56.57 -33.61,-3.62 h -423.79 l 5.45,-7.38 m 456.68,11.51 -11.58,56.06 h 212.96 l -7.25,-35.13 -194.13,-20.93 m 199.55,21.52 7.86,34.54 h 312.46 l -0.42,-0.05 h -310.62 l -7.6,-32.87 0.95,-1.34 -2.63,-0.28 m 772.79,29.37 -1.33,5.17 h 11.19 l -9.86,-5.17 m 19.4,10.17 h -22.02 l -10.93,42.32 -173.87,-18.74 143.74,105.58 h 309.49 L 4396.5,2939.59 m -425.5,0 h -357.69 l 29.4,129.16 h 676.23 L 4177.02,2961.8 3971,2939.59 m -363.82,0 h -215.03 l -26.69,129.16 h 268.41 l -26.69,-129.16 m -221.16,0 h -534.24 l -171.39,129.16 h 676.23 l 29.4,-129.16 m -544.27,0 h -266.44 l -161,129.16 h 251.6 l 175.84,-129.16 M 4654.83,3075 h -312.91 l 183.22,134.59 h 287.73 l 2.11,-59.34 -0.09,-0.04 -0.3,8.54 -159.76,-83.75 m -327.6,0 h -683.1 l 30.63,134.59 h 831.06 L 4327.23,3075 m -692.07,0 h -270.99 l -27.81,134.59 h 326.61 L 3635.16,3075 m -279.96,0 h -683.11 l -149.56,112.71 h 787.7 l 15.36,-45.05 9.89,14.26 -11.98,52.67 h -701.44 702.5 L 3355.2,3075 m -697.8,0 h -250.88 l -126.05,101.13 211.11,20.67 165.82,-121.8 m -504.7,83.77 0.98,27.37 2.83,-1.68 -3.81,-25.69 m 2659.88,59.04 h -276.24 l 220.34,161.85 h 200.22 l -62.02,-105.89 h -4.46 v -2.72 l -78.04,-47.71 0.2,-5.53 m -295.84,0 h -840.1 l 22.13,97.25 659.49,64.6 h 373.25 l -214.77,-161.85 m -852.08,0 h -330 l -12.47,60.36 362.28,35.49 -19.81,-95.85 m -341.97,0 h -616.65 l 603.2,59.09 13.45,-59.09 m 1641.71,174.67 h -176.62 l 44.29,33.6 161.26,15.8 -28.93,-49.4"
              id="path18"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,1510.82,1510.82,0,3483.33,2630)"
            spreadMethod="pad"
            id="linearGradient28"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#fde4a7" }}
              offset={0}
              id="stop22"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#fde4a7" }}
              offset="0.195397"
              id="stop24"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e69b68" }}
              offset={1}
              id="stop26"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath38">
            <path
              d="M 5021.45,71.0508 4750.29,77.6406 4572.26,400 h 450.98 L 5021.45,71.0508 M 4718.97,78.3984 3496.59,108.082 3494.64,400 H 4546.25 L 4718.97,78.3984 M 3469.86,108.73 2279.3,137.641 2420.2,400 h 1051.6 l -1.94,-291.27 m -1220.16,29.629 -305.83,7.43 -1.39,254.211 h 451.71 L 2249.7,138.359 M 5023.35,420 v 0 l 2.68,490.93 h 0.01 L 5023.35,420 m -126.88,0 h -335.26 l -271.12,490.93 h 591.63 L 4896.47,420 m -360.96,0 h -1041 l -3.28,490.93 h 780.61 L 4535.51,420 m -1063.57,0 h -1041 l 263.67,490.93 h 780.6 L 3471.94,420 m -1066.7,0 H 2069.26 L 2084,910.93 h 592.36 L 2405.24,420 m -462.87,0 v 0 l -2.68,490.93 v 0 L 1942.37,420 m 3083.76,509.07 v 0 l 0.11,19.481 v 0 l -0.11,-19.481 m -144.95,0 h -601.11 l -61.65,111.63 529.42,-16.77 -84.19,249.84 h 11.53 l 201.24,-186.43 4.76,-158.27 m -619.09,0 h -770.97 l -0.9,134.69 711.64,-22.54 60.23,-112.15 m -786.76,0 h -770.97 l 84.27,156.92 687.6,-21.78 -0.9,-135.14 m -788.95,0 h -601.84 l 4.74,157.57 151.5,140.35 -78.91,-121.15 611.44,-19.37 -86.93,-157.4 m -746.79,0 v 0 l -0.1,18.809 v 0 l 0.1,-18.809 m 3676.31,19.192 -374.86,242.968 h 0.05 L 5615.9,948.289 v -0.027 m -441.86,286.388 -0.15,0.1 v 0.04 l 0.15,-0.1 v -0.04 m -514.47,53.57 h -0.79 l -0.35,1.06 1.14,-1.06 m 216.7,139.43 -133.35,86.43 h 0.06 l 133.29,-86.39 v -0.04 m -149.87,97.17 h -0.05 l -106.41,68.97 v 0.04 l 106.46,-69.01"
              id="path36"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2303.66,-2303.66,0,3483.25,2130)"
            spreadMethod="pad"
            id="linearGradient46"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#fde4a7" }}
              offset={0}
              id="stop40"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#fde4a7" }}
              offset="0.195397"
              id="stop42"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e69b68" }}
              offset={1}
              id="stop44"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath56">
            <path
              d="m 695.789,615.039 -22.012,444.241 78.766,33.8 28.52,1254.23 -171.817,14.31 -16.156,326.1 360.601,12.66 38.977,-829.21 216.092,92.71 L 1284.2,957.891 695.789,615.039 m 1097.571,620.231 -0.31,42.19 0.45,-16.63 v -25.47 l -0.14,-0.09 m -0.31,42.23 -10.4,1451.97 15.02,0.53 36.7,-1430.07 -41.32,-22.43 m 298.09,150.78 38.13,1071.72 33.05,-477.38 157.87,33.63 27.24,-461.86 -107.33,-69.57 h -39.81 v -10.74 h 23.24 l -132.39,-85.8 m 513.28,422.1 -0.57,79.6 29.43,6.26 -28.86,-85.86 m 132.49,507.26 -114.97,18.24 -0.23,202.46 -22.49,3.57 -0.38,53.04 -318.37,95.05 5.8,-98.42 -151.47,24.04 16.61,466.83 755.01,-373.44 -31.76,-94.5 c -26.14,-9.38 -49.78,-25.76 -69.89,-47.6 -7.45,-8.08 -14.42,-16.91 -20.84,-26.43 -7.68,-11.35 -14.59,-23.67 -20.66,-36.82 -21.31,-46.23 -32.05,-102.7 -28.36,-163.66 0.46,-7.53 1.13,-14.99 2,-22.36 m -428.97,270.5 v 0 l -4.27,72.41 0.75,-12.83 3.52,-59.58"
              id="path54"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient62"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#6f952b" }}
              offset={0}
              id="stop58"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dddb43" }}
              offset={1}
              id="stop60"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath72">
            <path
              d="m 6272.02,614.789 -19.94,11.621 23.53,192.391 6.38,-2.742 -9.97,-201.27 m -451.93,263.332 -136.91,79.77 30.32,404.109 241.97,-103.81 64.35,1369.24 -212.75,-17.72 7.33,97.68 338.52,-11.88 v -631.18 l 191.26,6.95 -25.2,-508.54 -97.14,-8.09 8.47,-372.14 -441.14,4.16 30.92,-308.549 m -204.19,70.18 -374.8,242.929 0.7,0.03 374.14,-242.408 -0.04,-0.551 m 619.55,8.148 -354.61,9.43 1.72,95.941 350.3,8.31 2.59,-113.681 m -1061.41,278.241 -0.15,0.1 v 26.04 l 0.44,16.67 -40.88,22.2 36.7,1430.3 14.6,-0.51 -10.71,-1494.8 m -126.84,111.83 -0.28,0.15 0.32,72.27 -0.04,-72.42 m -170.93,81.18 -133.28,86.38 h 23.16 v 10.74 h -39.74 l -106.47,69.02 26.95,457.04 132.65,-28.26 44.01,635.61 -142.18,-22.56 5.56,94.33 -270.85,-80.87 -30.27,246.54 -3.22,12.47 433.29,214.31 -0.99,27.76 0.09,0.04 61.29,-1722.55 m -216.56,1204.53 3.27,55.49 0.76,12.83 -4.03,-68.32 v 0"
              id="path70"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient78"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#6f952b" }}
              offset={0}
              id="stop74"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dddb43" }}
              offset={1}
              id="stop76"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath166">
            <path
              d="m 1939.37,968.672 -1.67,305.098 v 0 l 1.67,-305.09 v -0.008 m 150.47,136.898 5.06,168.2 h 176.35 l -5.07,-7.78 -176.34,-160.42 m -296.44,124.05 -0.04,5.65 0.14,0.09 v -5.68 l -0.1,-0.06 m 487.26,58.6 h -185.33 l 1.75,58.39 0.01,0.06 h -0.02 l -17.08,-3.8 8.34,6.48 2.81,78.93 132.39,85.8 h 204.23 l -147.1,-225.86 m -343.03,0 v 0 l -0.13,22.95 0.13,-22.95 m 497.13,236.6 H 2240.1 l 107.33,69.57 0.9,-15.4 20.67,13.51 -0.6,10.2 124.56,81.36 v -1.29 h 44.67 l -102.87,-157.95 m 108.67,166.86 h -38.8 l 59.52,38.88 -4.9,-14.59 -15.82,-24.29"
              id="path164"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2334.48,-2334.48,0,1436.67,2150)"
            spreadMethod="pad"
            id="linearGradient174"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset={0}
              id="stop168"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset="0.0128573"
              id="stop170"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dc6545" }}
              offset={1}
              id="stop172"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath184">
            <path
              d="m 5615.87,947.77 -1.61,1.082 -374.04,242.338 0.82,0.04 374.86,-242.968 -0.03,-0.492 m -589.52,21.562 v 0 l 1.67,304.438 -1.67,-304.438 m -150.5,136.918 -184.13,167.52 h 179.1 l 5.03,-167.52 m 298.15,122.42 -0.11,0.07 v 6.01 l 0.15,-0.1 -0.04,-5.98 m -145.9,59.55 v 0 l 0.12,21.92 v 0.98 l -0.12,-22.9 m -157.71,0 h -194.56 l -24.58,22.37 -68.57,203.49 h 160.24 l 133.35,-86.43 2.78,-78.3 9.01,-7 -19.41,4.32 h -0.02 v -0.06 l 1.76,-58.39 m 169.2,16.52 -11.28,6.38 1.57,0.05 -0.03,6.01 0.03,-6.01 9.71,-6.43 m -313.24,220.08 h -147.29 l -39.28,116.56 59.22,-38.69 -0.6,-10.19 20.66,-13.51 0.88,14.8 106.41,-68.97"
              id="path182"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2334.48,2334.48,0,5529.78,2150)"
            spreadMethod="pad"
            id="linearGradient192"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset={0}
              id="stop186"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset="0.0128573"
              id="stop188"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dc6545" }}
              offset={1}
              id="stop190"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath202">
            <path
              d="M 4750.29,77.6406 4718.97,78.3984 4546.25,400 H 3494.64 l 1.95,-291.918 -26.73,0.648 1.94,291.27 H 2420.2 L 2279.3,137.641 2249.7,138.359 2394.19,400 h -451.71 l -0.11,20 v 0 l 0.07,-12.918 126.31,-3.961 0.51,16.879 h 335.98 l 271.12,490.93 H 2084 l 0.54,18.14 h 601.84 l 86.93,157.4 15.32,-0.48 -84.27,-156.92 h 770.97 l 0.9,135.14 13.99,-0.45 0.9,-134.69 h 770.97 l -60.23,112.15 16.56,-0.52 61.65,-111.63 h 601.11 l 0.54,-18.14 H 4290.09 L 4561.21,420 h 335.26 l 0.5,-16.879 126.31,3.961 0.07,12.918 v 0 l -0.11,-20 H 4572.26 L 4750.29,77.6406 M 3491.23,910.93 3494.51,420 h 1041 l -263.67,490.93 h -780.61 m -796.62,0 L 2430.94,420 h 1041 l 3.27,490.93 h -780.6 m 2331.43,0 h -0.01 l 0.1,18.14 v 0 l -0.09,-18.14 m -3086.35,0 v 0 l -0.1,18.14 v 0 l 0.1,-18.14 m -0.2,36.949 -0.12,20.793 v 0.008 l 0.12,-20.801 v 0 m 3086.75,0.672 v 0 l 0.11,20.781 v 0 l -0.11,-20.781 m -2936.96,138.089 0.56,18.93 176.34,160.42 -25.4,-39 -151.5,-140.35 m 2787.14,0.7 -201.24,186.43 h -11.53 l -4.87,14.45 h 0.79 l -1.14,1.06 -7.18,21.31 24.58,-22.37 h 194.56 l 0.43,-14.45 h -179.1 l 184.13,-167.52 0.57,-18.91 m 151.6,186.43 v 0 l 0.08,14.45 -0.08,-14.45 m -2756.77,0 H 2094.9 l 0.43,14.45 h 185.33 l -9.41,-14.45 m -333.55,0 v 0 l -0.07,14.45 0.07,-14.45 m 2828.45,240.31 h -23.16 -0.01 -0.06 -160.24 l -3.62,10.74 h 147.29 0.05 0.01 39.74 v -10.74 m -2338.39,0 h -204.23 -23.24 v 10.74 h 39.81 194.66 l -7,-10.74 m 109.87,168.69 h -44.67 v 1.29 l 11.67,7.62 h 38.8 l -5.8,-8.91"
              id="path200"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2357.9,-2357.9,0,3483.22,2156.67)"
            spreadMethod="pad"
            id="linearGradient210"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset={0}
              id="stop204"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset="0.0128573"
              id="stop206"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dc6545" }}
              offset={1}
              id="stop208"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath220">
            <path
              d="m 673.777,1059.28 -64.531,1302.34 171.817,-14.31 -28.52,-1254.23 -78.766,-33.8"
              id="path218"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient226"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#82a628" }}
              offset={0}
              id="stop222"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e1e14a" }}
              offset={1}
              id="stop224"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath236">
            <path
              d="m 992.668,1871.17 -38.977,829.21 199.319,6.99 55.75,-743.49 -216.092,-92.71"
              id="path234"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath252">
            <path
              d="m 2162.32,2022.62 -33.05,477.38 5.53,155.62 151.47,-24.04 33.92,-575.33 -157.87,-33.63 m 160.91,346.18 -15.29,259.34 v 0 l 15.29,-259.34 m 298.71,7.08 -21.28,3.38 -1.44,202.65 22.49,-3.57 0.23,-202.46"
              id="path250"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath268">
            <path
              d="m 2603.85,1929.98 -1.32,186.42 19.7,4.2 -0.29,255.28 114.97,-18.24 c 2.84,-24.06 7.84,-47.27 14.71,-69.26 l -118.34,-352.14 -29.43,-6.26"
              id="path266"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath284">
            <path
              d="m 2602.53,2116.4 -1.87,262.86 21.28,-3.38 0.29,-255.28 -19.7,-4.2"
              id="path282"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient290"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#94b42a" }}
              offset={0}
              id="stop286"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e6e751" }}
              offset={1}
              id="stop288"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath300">
            <path
              d="m 6152.92,2064.33 v 631.18 l 221.81,-7.79 -30.55,-616.44 -191.26,-6.95"
              id="path298"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient306"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#82a628" }}
              offset={0}
              id="stop302"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e1e14a" }}
              offset={1}
              id="stop304"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath316">
            <path
              d="M 5955.47,1258.19 5713.5,1362 l 93.57,1247.71 212.75,17.72 -64.35,-1369.24"
              id="path314"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath332">
            <path
              d="m 6281.99,816.059 -6.38,2.742 10.95,89.461 -4.57,-92.203 m -40.74,140.242 -5.8,0.148 -2.59,113.681 8.39,0.2 V 956.301 m 58.86,225.559 -69.8,0.65 -8.47,372.14 97.14,8.09 -18.87,-380.88"
              id="path330"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath348">
            <path
              d="m 4779.54,2022.62 -132.65,28.26 34.48,584.79 142.18,22.56 -44.01,-635.61 m -152.83,50 33,559.61 v 0 l -33,-559.61"
              id="path346"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath364">
            <path
              d="m 1943.87,145.789 -848,20.59 L 1348.06,400 h 594.42 l 1.39,-254.211 M 1942.37,420 h -572.72 l 529.94,490.93 h 40.1 L 1942.37,420 m -2.78,509.07 h -20.41 l 20.31,18.809 0.1,-18.809"
              id="path362"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath376">
            <path
              d="M 1058.48,167.289 929.023,170.43 772.527,400 H 1314.28 L 1058.48,167.289 M 1336.26,420 H 758.895 L 701.266,504.539 571.895,420 701.266,504.539 1314,904.961 l 9.21,5.969 h 552.68 L 1336.26,420 m 559.58,509.07 h -544.65 l 1.39,0.899 -1.12,18.883 374.15,242.408 28.07,-1.32 39.82,25.8 -0.1,13.88 0.1,0.06 v -13.94 l 87.56,58.03 h 56.64 l 1.67,-305.098 -43.53,-39.602 m 41.79,359.15 h -34.76 l 34.63,22.95 0.13,-22.95"
              id="path374"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath388">
            <path
              d="m 1095.87,166.379 -37.39,0.91 L 1314.28,400 H 772.527 l -13.632,20 h 577.365 l 539.63,490.93 h -552.68 l 27.98,18.14 h 544.65 l 43.53,39.602 0.12,-20.793 -20.31,-18.809 h 20.41 l 0.1,-18.14 h -40.1 L 1369.65,420 h 572.72 l 0.11,-20 H 1348.06 L 1095.87,166.379 M 1937.7,1273.77 h -56.64 l 21.81,14.45 h 34.76 l 0.07,-14.45"
              id="path386"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath400">
            <path
              d="m 5028.22,1310.14 v 0.98 0 -0.98 m -159.59,36.47 v 0.06 h 0.02 -0.02 v -0.06"
              id="path398"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath412">
            <path
              d="m 5023.35,420 h -126.88 l -14.75,490.93 h 144.31 L 5023.35,420 m 2.78,509.07 h -144.95 l -4.76,158.27 149.82,-138.789 -0.11,-19.481"
              id="path410"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath424">
            <path
              d="m 5026.35,969.332 -150.5,136.918 -5.03,167.52 h 157.2 l -1.67,-304.438 m 1.75,318.888 h -157.71 l -1.76,58.39 v 0.06 h 0.02 l 19.41,-4.32 30.63,-23.79 0.57,-11.06 108.96,3.62 v -0.98 l -0.12,-21.92"
              id="path422"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath436">
            <path
              d="m 4896.97,403.121 -0.5,16.879 h 126.88 l -0.07,-12.918 -126.31,-3.961 m 129.06,507.809 h -144.31 l -0.54,18.14 h 144.95 l -0.1,-18.14 m 0.21,37.621 -149.82,138.789 -0.57,18.91 150.5,-136.918 -0.11,-20.781 m 1.78,325.219 h -157.2 l -0.43,14.45 h 157.71 l -0.08,-14.45"
              id="path434"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath448">
            <path
              d="M 5613.65,56.6719 5021.45,71.0508 5023.24,400 h 595.15 l 205.16,-190.051 0.92,-8.66 L 5613.65,56.6719 M 5596.8,420 h -573.45 l 2.69,490.93 h 40.82 L 5596.8,420 m -549.53,509.07 h -21.14 l 0.11,19.481 21.03,-19.481"
              id="path446"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath460">
            <path
              d="M 5819.51,247.762 5652.17,400 h 151.09 l 16.25,-152.238 M 5801.12,420 h -170.94 l -539.62,490.93 h 553.63 l 9.19,-5.961 v -0.008 l 175.51,-114.699 33.81,-337.332 -66,8.742 h -0.03 L 5801.12,420 M 5616.2,929.07 h -545.6 l -44.25,40.262 1.67,304.438 h 58.3 l 87.57,-58.03 v 13 l 0.11,-0.07 -0.09,-12.93 39.82,-25.8 26.49,1.25 374.04,-242.338 1.61,-1.082 -1.06,-17.801 1.39,-0.899 m -551.69,359.15 h -36.41 l 0.12,22.95 0.09,-0.05 11.28,-6.38 24.92,-16.52"
              id="path458"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath472">
            <path
              d="M 5823.55,209.949 5618.39,400 h -595.15 l 0.11,20 h 573.45 l -529.94,490.93 h -40.82 l 0.09,18.14 h 21.14 l -21.03,19.481 0.11,20.781 44.25,-40.262 h 545.6 l 27.99,-18.14 H 5090.56 L 5630.18,420 h 170.94 l 2.14,-20 h -151.09 l 167.34,-152.238 4.04,-37.813 M 5086.32,1273.77 h -58.3 l 0.08,14.45 h 36.41 l 21.81,-14.45"
              id="path470"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath484">
            <path
              d="m 6234.48,482.539 4.84,39.52 27.02,-17.661 -31.86,-21.859"
              id="path482"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath496">
            <path
              d="m 2097.08,1346.61 v 0.06 h -0.01 0.02 l -0.01,-0.06"
              id="path494"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath508">
            <path
              d="m 2069.26,420 h -126.89 l -2.68,490.93 H 2084 L 2069.26,420 m 15.28,509.07 h -144.95 l -0.1,18.809 149.79,138.761 -4.74,-157.57"
              id="path506"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath520">
            <path
              d="m 1939.37,968.68 -1.67,305.09 h 157.2 l -5.06,-168.2 -150.47,-136.89 m 155.96,319.54 h -157.7 l -0.13,22.95 110.62,-3.67 0.57,11.06 31.3,24.31 17.08,3.8 h 0.01 v -0.06 l -1.75,-58.39"
              id="path518"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath532">
            <path
              d="m 2068.75,403.121 -126.31,3.961 -0.07,12.918 h 126.89 l -0.51,-16.879 M 2084,910.93 h -144.31 l -0.1,18.14 h 144.95 L 2084,910.93 m -144.51,36.949 -0.12,20.801 150.47,136.89 -0.56,-18.93 -149.79,-138.761 m 155.41,325.891 h -157.2 l -0.07,14.45 h 157.7 l -0.43,-14.45"
              id="path530"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath780">
            <path
              d="M 0,209.621 V 1549.01 L 210.555,1585.97 243.98,874.891 673.777,1059.28 695.789,615.039 0,209.621 m 1834.37,1090.309 -36.7,1430.07 -15.02,-0.53 -0.94,130.96 -311.73,92.31 5.51,242.09 -547.185,45.59 25.386,-540.04 -360.601,-12.66 16.156,-326.1 -264.836,22.06 12.801,474.63 L 0,2987.36 V 4000 h 351.234 l 1560.886,-764.57 8.34,-1888.76 -86.09,-46.74"
              id="path778"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient786"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#636f24" }}
              offset={0}
              id="stop782"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#c4a431" }}
              offset={1}
              id="stop784"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath796">
            <path
              d="M 0,1549.01 V 2987.36 L 357.211,2858.31 344.41,2383.68 172.387,2398.01 210.555,1585.97 0,1549.01"
              id="path794"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient802"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#737c24" }}
              offset={0}
              id="stop798"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#c6a936" }}
              offset={1}
              id="stop800"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath812">
            <path
              d="m 243.98,874.891 -33.425,711.079 112.879,19.81 20.976,777.9 264.836,-22.06 L 673.777,1059.28 243.98,874.891"
              id="path810"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath828">
            <path
              d="m 210.555,1585.97 -38.168,812.04 172.023,-14.33 -20.976,-777.9 -112.879,-19.81"
              id="path826"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient834"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#838723" }}
              offset={0}
              id="stop830"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#caac3a" }}
              offset={1}
              id="stop832"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath844">
            <path
              d="m 953.691,2700.38 -25.386,540.04 547.185,-45.59 -5.51,-242.09 -282.69,83.72 h -58.95 l 24.67,-329.09 -199.319,-6.99"
              id="path842"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath860">
            <path
              d="M 69.8672,91.9297 541.289,400 h 0.004 L 69.8672,91.9297 M 571.895,420 v 0 l 129.371,84.539 v 0 L 571.895,420"
              id="path858"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath872">
            <path
              d="m 541.293,400 h -0.004 l 30.606,20 v 0 l -30.602,-20"
              id="path870"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath910">
            <path
              d="m 7000,190.621 -727.98,424.168 9.97,201.27 248.09,-106.438 24.93,530.429 L 7000,1002.34 V 190.621 M 5133.45,1299.7 l -86.25,46.82 0.04,72.42 8.03,1816.54 L 6616.06,4000 H 7000 V 2763.85 l -274.7,-74.07 40.41,859.79 -612.79,-296.75 v -557.31 l -338.52,11.88 24.67,329.07 h -58.96 l -594.42,-176.03 -0.94,-130.94 -14.6,0.51 -36.7,-1430.3 m 1185.53,263.04 25.2,508.54 149.9,5.45 v -499.39 l -175.1,-14.6"
              id="path908"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient916"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#636f24" }}
              offset={0}
              id="stop912"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#c4a431" }}
              offset={1}
              id="stop914"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath926">
            <path
              d="m 7000,1002.34 -444.99,237.71 16.16,343.71 -77.09,-6.42 v 499.39 l 202.75,7.37 28.47,605.68 274.7,74.07 V 1002.34"
              id="path924"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient932"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#737c24" }}
              offset={0}
              id="stop928"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#c6a936" }}
              offset={1}
              id="stop930"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath942">
            <path
              d="m 6344.18,2071.28 30.55,616.44 -221.81,7.79 v 557.31 l 612.79,296.75 -40.41,-859.79 -231.22,-62.35 v -550.7 l -149.9,-5.45"
              id="path940"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath958">
            <path
              d="m 6494.08,2076.73 v 550.7 l 231.22,62.35 -28.47,-605.68 -202.75,-7.37"
              id="path956"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient964"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#838723" }}
              offset={0}
              id="stop960"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#caac3a" }}
              offset={1}
              id="stop962"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath974">
            <path
              d="m 6530.08,709.621 -248.09,106.438 4.57,92.203 33.44,273.408 -19.89,0.19 18.87,380.88 175.1,14.6 V 1272.6 l 60.93,-32.55 -24.93,-530.429"
              id="path972"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath990">
            <path
              d="m 6555.01,1240.05 -60.93,32.55 v 304.74 l 77.09,6.42 -16.16,-343.71"
              id="path988"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1030">
            <path
              d="m 2583.82,2932.75 -3.49,1.84 h 1.21 l 2.29,-1.84 m -8.52,6.84 h -4.52 l -246.41,129.16 h 89.93 l 161,-129.16 M 2406.52,3075 h -94.06 l -159.76,83.75 v 0.02 l 3.81,25.69 2.24,-1.33 2.2,26.46 h 313.23 l 17.4,-12.79 -211.11,-20.67 126.05,-101.13 m 95.03,128.52 -8.05,6.07 h 128.56 -124.77 l 4.26,-6.07 m 204.49,14.29 h -223.45 l -214.78,161.85 h 1018.04 l 23.39,-102.76 -603.2,-59.09 m -243.06,0 h -301.34 l 0.23,2.82 -85,53.14 h -4.37 -153.13 l -200.81,105.89 h 524.09 l 220.33,-161.85 m 2584.94,55.96 h -153.04 l 62.02,105.89 h 291.83 l -200.81,-105.89 m -1725.73,4.4 -20.97,101.49 h 396.89 l -13.64,-66 -362.28,-35.49 m 376.58,36.89 14.71,64.6 h 644.78 l -659.49,-64.6 m 1574.27,77.42 H 4964.4 l 28.93,49.4 -161.26,-15.8 20.82,15.8 12.28,17.48 305.73,224.58 h 654.87 l -552.73,-291.46 m -1550.21,0 h -6.44 l 66.34,291.46 h 1352.55 l -12.25,-9.23 6.48,9.23 H 3784.58 l -19.51,-85.73 16.1,-23.21 H 4990.72 L 4854.09,3472.04 H 3734.57 l -16.54,-72.64 4.8,-6.92 m -22.07,0 h -402.19 l -60.22,291.46 h 522.63 l -60.22,-291.46 m -417.83,0 h -4.6 l 3.47,4.99 1.13,-4.99 m -1069.54,0 h -519.13 l -552.73,291.46 h 686.89 l 309.55,-227.39 10.31,-14.67 65.11,-49.4 m 1051.43,79.56 H 2145.23 L 2008.61,3575 H 3220 l 16.11,23.21 28.71,-126.17 m -39.53,173.67 -8.7,38.23 H 1871.66 l 8.57,-12.19 -16.18,12.19 h 1352.54 l 8.7,-38.23 m 2632.21,54.97 H 5193.68 L 5601.17,4000 h 823.98 L 5857.5,3700.68 m -700.01,0 H 3786.54 l 68.13,299.32 h 1700.01 l -397.19,-299.32 m -1393.06,0 H 3234.89 L 3173.04,4000 h 653.24 l -61.85,-299.32 m -551.65,0 H 1841.84 L 1444.64,4000 h 1700.01 l 68.13,-299.32 m -1407.14,0 H 1109.79 L 542.145,4000 h 856.015 l 407.48,-299.32"
              id="path1028"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,1510.82,1510.82,0,3483.33,2630)"
            spreadMethod="pad"
            id="linearGradient1038"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#e0a972" }}
              offset={0}
              id="stop1032"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e0a972" }}
              offset="0.195397"
              id="stop1034"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#ca724a" }}
              offset={1}
              id="stop1036"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1090">
            <path
              d="m 5021.06,0 h -227.9 L 4750.29,77.6406 5021.45,71.0508 5021.06,0 M 4761.08,0 H 3497.31 L 3496.59,108.082 4718.97,78.3984 4761.08,0 M 3469.13,0 H 2205.37 L 2279.3,137.641 3469.86,108.73 3469.13,0 M 2173.29,0 h -228.63 l -0.79,145.789 305.83,-7.43 L 2173.29,0"
              id="path1088"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2303.66,-2303.66,0,3483.25,2130)"
            spreadMethod="pad"
            id="linearGradient1098"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#e0a972" }}
              offset={0}
              id="stop1092"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e0a972" }}
              offset="0.195397"
              id="stop1094"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#ca724a" }}
              offset={1}
              id="stop1096"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1108">
            <path
              d="m 4793.16,0 h -32.08 l -42.11,78.3984 31.32,-0.7578 L 4793.16,0 M 3497.31,0 h -28.18 l 0.73,108.73 26.73,-0.648 L 3497.31,0 M 2205.37,0 h -32.08 l 76.41,138.359 29.6,-0.718 L 2205.37,0"
              id="path1106"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2357.9,-2357.9,0,3483.22,2156.67)"
            spreadMethod="pad"
            id="linearGradient1116"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#d7935d" }}
              offset={0}
              id="stop1110"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#d7935d" }}
              offset="0.0128573"
              id="stop1112"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#c34c34" }}
              offset={1}
              id="stop1114"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1126">
            <path
              d="M 1944.66,0 H 916.266 l 179.604,166.379 848,-20.59 L 1944.66,0"
              id="path1124"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1138">
            <path
              d="M 874.602,0 H 0 V 46.2695 L 69.8672,91.9297 541.293,400 H 772.527 L 929.023,170.43 1058.48,167.289 874.602,0 M 758.895,420 h -187 L 701.266,504.539 758.895,420"
              id="path1136"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1150">
            <path
              d="m 916.266,0 h -41.664 l 183.878,167.289 37.39,-0.91 L 916.266,0 M 772.527,400 H 541.293 l 30.602,20 h 187 l 13.632,-20"
              id="path1148"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1162">
            <path
              d="m 5845.97,0 h -824.91 l 0.39,71.0508 592.2,-14.3789 L 5824.47,201.289 5845.97,0"
              id="path1160"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1174">
            <path
              d="m 7000,0 h -801.89 l 26.56,400 h 201.42 L 7000,24.9609 V 0 m -604.51,420 h -168.66 l 7.65,62.539 31.86,21.859 L 6395.49,420"
              id="path1172"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1186">
            <path
              d="m 6426.09,400 h -201.42 l 0.32,4.922 0.01,0.078 1.83,15 h 168.66 l 30.6,-20"
              id="path1184"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1202">
            <path
              d="m 3839.3,2647.5 h -79.35 l 93.03,68.33 h 116.68 L 3839.3,2647.5 m -79.35,0 h -17.48 c -2.94,2.88 -5.93,5.68 -8.96,8.37 -35.44,31.48 -77.2,49.99 -121.02,50.19 v 0 h -1.48 v 0 c -18.55,-0.09 -36.33,-3.46 -53.07,-9.72 l 4.44,19.49 h 288.25 l -90.68,-68.33 m -271.78,0 h -4.63 c -2.94,2.88 -5.93,5.68 -8.96,8.37 -9.03,8.02 -18.46,15.2 -28.24,21.44 l -7.96,38.52 h 122.57 l -4.12,-19.91 c -24.95,-9.53 -47.55,-25.48 -66.89,-46.48 -0.59,-0.64 -1.18,-1.29 -1.77,-1.94 m -258.93,0 H 3128 l -130.36,68.33 h 148.71 l 86.99,-63.9 c -0.78,-0.82 -1.56,-1.65 -2.33,-2.49 -0.59,-0.64 -1.18,-1.29 -1.77,-1.94 m 4.16,4.5 -84.7,63.83 h 288.25 l 8.66,-38.05 c -28.41,17.99 -59.66,28.13 -92.05,28.28 v 0 h -1.47 v 0 c -45.56,-0.22 -86.47,-20.24 -118.69,-54.06 m 741.03,66.33 h -118.05 l 170.73,125.42 h 186.57 l -239.25,-125.42 m -120.48,0 h -291 l 28.55,125.42 h 2.97 l 3.46,-4.74 h 416.15 l -160.13,-120.68 m -292.49,0 h -123.6 l -25.91,125.42 h 175.43 l -25.92,-125.42 m -125.08,0 h -291 l -153.5,115.68 46.37,5 h 365 l 3.46,4.74 h 1.12 l 28.55,-125.42 m -293.44,0 h -150.07 l -80.61,42.26 48.24,70.03 25.79,2.79 156.65,-115.08 m 1080.28,130.42 h -189.3 l 116.85,85.84 h 225 l 1.33,-5.17 -153.88,-80.67 m -630.27,0 h -0.32 l 11.68,51.3 2.63,0.28 5.32,-7.55 h 473.17 l -30.01,-22.62 3.12,4.24 h -459.45 l -6.14,-25.65 m -4.54,0 h -177.49 l -6.16,29.78 194.13,20.93 -10.48,-50.71 m -187.55,25.65 h -34.44 l 33.61,3.62 0.83,-3.62 m 732.58,54.56 3.98,5.58 h -213.21 l 0.42,0.05 h 216.28 l -7.47,-5.63 m 241.04,10.63 h -216.9 l 32.1,23.58 173.87,18.74 10.93,-42.32 m -226.94,0 H 3971 l 206.02,22.21 -29.48,-22.21"
              id="path1200"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,1510.82,1510.82,0,3483.33,2630)"
            spreadMethod="pad"
            id="linearGradient1210"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#feedb9" }}
              offset={0}
              id="stop1204"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#feedb9" }}
              offset="0.195397"
              id="stop1206"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#ecb580" }}
              offset={1}
              id="stop1208"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1220">
            <path
              d="m 4747.84,1023.93 -529.42,16.77 -128.71,233.07 h 573.94 l 84.19,-249.84 m -545.98,17.29 -711.64,22.54 -1.4,210.01 h 588.14 l 124.9,-232.55 m -725.63,22.99 -687.6,21.78 100.85,187.78 h 588.15 l -1.4,-209.56 m -702.92,22.26 -611.44,19.37 78.91,121.15 50.49,46.78 h 585.47 l -103.43,-187.3 m 1885.47,201.75 h -577.06 l -124.73,225.86 h 458.77 l 242.67,-224.8 0.35,-1.06 m -589.58,0 h -580.48 l -1.5,225.86 h 460.68 l 121.3,-225.86 m -591.48,0 h -580.47 l 121.3,225.86 h 460.68 l -1.51,-225.86 m -592.99,0 h -577.85 l 243.81,225.86 h 458.77 l -124.73,-225.86 m 1519.43,236.6 h -453.11 l -87.22,157.95 h 369.83 l 170.5,-157.95 m -462.03,0 h -454.99 l -1.05,157.95 h 371.2 l 84.84,-157.95 m -462.82,0 h -454.99 l 84.83,157.95 h 371.21 l -1.05,-157.95 m -463.92,0 h -453.11 l 170.51,157.95 h 369.83 l -87.23,-157.95 m 1208.66,166.86 h -365.14 l -77.21,139.79 h 291.44 l 150.91,-139.79 m -371.53,0 h -366.49 l -0.93,139.79 h 292.33 l 75.09,-139.79 m -372.1,0 h -366.49 l 75.08,139.79 h 292.34 l -0.93,-139.79 m -372.88,0 H 2742.4 l 150.9,139.79 h 291.45 l -77.21,-139.79 m 1254.8,69.07 -0.11,0.08 v 0.04 l 0.11,-0.08 v -0.04 m -296.81,77.78 h -287.72 l -63.5,114.99 h 227.1 l 124.12,-114.99 m -291.88,0 h -288.6 l -0.77,114.99 h 227.62 l 61.75,-114.99 m -292.25,0 h -288.6 l 61.76,114.99 h 227.6 l -0.76,-114.99 m -292.76,0 h -287.72 l 124.12,114.99 h 227.1 l -63.5,-114.99 m 868.32,120.18 h -0.04 l -107.11,69.43 h 0.05 l 103.67,-67.19 3.43,-2.24 m -121.17,0 h -224.36 l -43.96,79.61 h 182.38 l 85.94,-79.61 m -226.69,0 h -224.85 l -0.53,79.61 h 182.62 l 42.76,-79.61 m -226.9,0 h -224.85 l 42.76,79.61 h 182.62 l -0.53,-79.61 m -227.19,0 h -224.36 l 85.95,79.61 h 182.38 l -43.97,-79.61 m 591.23,82.97 h -180.63 l -25.01,45.31 h 156.72 l 48.92,-45.31 m -181.7,0 H 3483.7 l -0.31,45.31 h 156.82 l 24.33,-45.31 m -181.79,0 h -180.84 l 24.34,45.31 h 156.8 l -0.3,-45.31 m -181.92,0 h -180.62 l 48.91,45.31 h 156.74 l -25.03,-45.31 m 494.86,46.81 h -155.92 l -13.27,24.01 12.89,-24.01 h -156.01 l -0.16,24.01 -0.16,-24.01 h -156.01 l 12.9,24.01 -13.26,-24.01 h -155.94 l 25.91,24.01 h -47.6 669.26 -48.53 l 25.9,-24.01"
              id="path1218"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2303.66,-2303.66,0,3483.25,2130)"
            spreadMethod="pad"
            id="linearGradient1228"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#feedb9" }}
              offset={0}
              id="stop1222"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#feedb9" }}
              offset="0.195397"
              id="stop1224"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#ecb580" }}
              offset={1}
              id="stop1226"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1238">
            <path
              d="m 2605.05,1761.37 -0.63,89.01 28.86,85.86 230.47,49.1 -0.16,142.44 c 3.48,-2.33 7,-4.55 10.57,-6.64 l 12.65,-170.1 -281.65,-182.91 v -6.7 l -0.11,-0.06 m 431.81,280.31 h -0.04 l -0.53,74.39 c 14.51,8.02 28.04,18.32 40.37,30.59 9.8,9.76 18.84,20.76 27.01,32.86 7.18,10.62 13.69,22.08 19.47,34.27 7.2,15.23 13.25,31.61 18.01,48.91 l 5.52,-146.73 -109.81,-70.03 v -4.26 m 96.07,439.27 c -7.65,22.41 -17.25,43.45 -28.47,62.72 -7.11,12.22 -14.89,23.73 -23.22,34.42 -0.63,0.81 -1.26,1.61 -1.9,2.41 -4.16,5.21 -8.45,10.22 -12.87,15.01 -5.83,6.33 -11.89,12.29 -18.14,17.84 -2.92,2.59 -5.89,5.1 -8.89,7.52 -33.65,27.04 -72.37,42.66 -112.85,42.66 -18.12,0 -35.52,-3.13 -51.93,-9.02 l 31.76,94.5 220.53,-109.08 5.98,-158.98"
              id="path1236"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient1244"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#96b32b" }}
              offset={0}
              id="stop1240"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e6e752" }}
              offset={1}
              id="stop1242"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1254">
            <path
              d="m 4362.34,1760.8 -0.11,0.07 v 7.26 l -281.64,182.9 2.48,33.26 280.44,-59.75 -1.17,-163.74 m -310.03,200.94 -102.44,66.4 0.74,0.03 101.7,-66.43 m -121.73,79.94 h -0.05 v 4.26 l -110.52,70.48 6.36,168.94 c 8.51,-28.29 20.1,-54.62 34.13,-78.21 7.24,-12.19 15.15,-23.65 23.62,-34.27 7.59,-9.51 15.62,-18.35 24.05,-26.43 7.39,-7.09 15.07,-13.6 23.02,-19.48 l -0.61,-85.29 m 298.51,319.79 c -0.12,3.95 -0.3,7.91 -0.55,11.9 -3.69,60.97 -21.29,117.43 -48.22,163.67 -7.65,13.14 -16.06,25.46 -25.12,36.83 -9.64,12.08 -20.03,23.09 -31,32.84 -35.64,31.65 -77.66,50.19 -121.75,50.19 v 0 0 0 c -46.99,0 -89.08,-21.06 -121.81,-56.62 -7.46,-8.09 -14.43,-16.92 -20.86,-26.43 -7.67,-11.36 -14.58,-23.67 -20.65,-36.82 -1.23,-2.68 -2.43,-5.39 -3.59,-8.13 l 4.16,110.72 542.89,268.52 3.22,-12.47 30.27,-246.54 -47.52,-14.18 -0.34,-48.99 -48.06,-7.62 -0.23,-202.46 -90.84,-14.41"
              id="path1252"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient1260"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#96b32b" }}
              offset={0}
              id="stop1256"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e6e752" }}
              offset={1}
              id="stop1258"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1298">
            <path
              d="m 2266.18,1265.99 5.07,7.78 h 3.48 l -8.55,-7.78 m 24.44,22.23 h -9.96 l 147.1,225.86 h 111.12 l -248.26,-225.86 m 260.07,236.6 h -115.93 l 102.87,157.95 h 186.68 l -173.62,-157.95 m 183.41,166.86 h -190.67 l 15.82,24.29 4.9,14.59 4.64,3.03 15.04,-0.71 21.33,13.94 -0.11,14.55 0.11,0.06 v -14.61 l 125.21,84.65 h 157.39 L 2734.1,1691.68 m 161.41,146.85 H 2740.8 l 154.26,104.28 11.41,7.46 -0.19,3.25 h 115.63 l -126.4,-114.99 m 132.11,120.18 h -117.18 l 106.35,69.46 8.3,-0.39 11.77,7.69 -0.02,2.85 h 0.02 v -2.85 l 4.15,2.85 h 74.12 l -87.51,-79.61 m 91.19,82.97 h -72.92 l 66.01,45.31 h 56.72 l -49.81,-45.31 m 51.47,46.81 h -56.19 l 34.97,24.01 h 47.6 l -26.38,-24.01"
              id="path1296"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2334.48,-2334.48,0,1436.67,2150)"
            spreadMethod="pad"
            id="linearGradient1306"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset={0}
              id="stop1300"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset="0.0128573"
              id="stop1302"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e88a50" }}
              offset={1}
              id="stop1304"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1316">
            <path
              d="m 4651.25,1310.59 -223.68,203.49 h 155.11 l 68.57,-203.49 m -72.19,214.23 h -163.31 l -173.61,157.95 h 231.35 v 1.92 l 66.29,-43.31 v 0 l 39.28,-116.56 m -116.28,166.86 h -230.43 l -153.67,139.79 h 158.33 l 125.22,-84.65 v 14.01 l 0.11,-0.08 -0.09,-13.93 21.32,-13.94 15.04,0.71 64.17,-41.91 m -236.2,146.85 h -155.64 l -126.4,114.99 h 116.58 l -0.19,-3.25 11.39,-7.44 v -0.02 l 154.26,-104.28 m -169.66,120.18 h -118.09 l -87.51,79.61 h 75.05 l 4.16,-2.85 v 2.85 h 0.03 l -0.02,-2.85 11.77,-7.69 7.5,0.36 107.11,-69.43 m -135.43,82.97 h -73.85 l -49.82,45.31 h 57.67 l 66,-45.31 m -68.2,46.81 h -57.12 l -26.38,24.01 h 48.53 l 34.97,-24.01"
              id="path1314"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2334.48,2334.48,0,5529.78,2150)"
            spreadMethod="pad"
            id="linearGradient1324"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset={0}
              id="stop1318"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset="0.0128573"
              id="stop1320"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e88a50" }}
              offset={1}
              id="stop1322"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1334">
            <path
              d="m 4218.42,1040.7 -16.56,0.52 -124.9,232.55 h -588.14 l 1.4,-210.01 -13.99,0.45 1.4,209.56 h -588.15 l -100.85,-187.78 -15.32,0.48 103.43,187.3 h -585.47 l -50.49,-46.78 25.4,39 8.55,7.78 h -3.48 l 9.41,14.45 h 9.96 l 248.26,225.86 h -111.12 l 7,10.74 h 115.93 l 173.62,157.95 h -186.68 l 5.8,8.91 h 190.67 l 153.66,139.79 h -157.39 l 10.43,7.06 h 154.71 l 126.4,114.99 h -115.63 l -0.14,2.38 4.3,2.81 h 117.18 l 87.51,79.61 h -74.12 l 4.88,3.36 h 72.92 l 49.81,45.31 h -56.72 l 2.19,1.5 h 56.19 l 26.38,24.01 -25.91,-24.01 h 155.94 l 13.26,24.01 -12.9,-24.01 h 156.01 l 0.16,24.01 0.16,-24.01 h 156.01 l -12.89,24.01 13.27,-24.01 h 155.92 l -25.9,24.01 26.38,-24.01 h 57.12 l 2.2,-1.5 h -57.67 l 49.82,-45.31 h 73.85 l 4.88,-3.36 h -75.05 l 87.51,-79.61 h 118.09 0.04 l 4.3,-2.81 -0.14,-2.38 h -116.58 l 126.4,-114.99 h 155.64 l 10.43,-7.06 h -158.33 l 153.67,-139.79 h 230.43 l 10.71,-6.99 v -1.92 h -231.35 l 173.61,-157.95 h 163.31 l 3.62,-10.74 h -155.11 l 223.68,-203.49 7.18,-21.31 -242.67,224.8 h -458.77 l 124.73,-225.86 h 577.06 l 4.87,-14.45 h -573.94 l 128.71,-233.07 m -731.2,473.38 1.5,-225.86 h 580.48 l -121.3,225.86 h -460.68 m -468.67,0 -121.3,-225.86 h 580.47 l 1.51,225.86 h -460.68 m -467.86,0 -243.81,-225.86 h 577.85 l 124.73,225.86 h -458.77 m 1313.14,168.69 87.22,-157.95 h 453.11 l -170.5,157.95 h -369.83 m -377.74,0 1.05,-157.95 h 454.99 l -84.84,157.95 h -371.2 m -376.94,0 -84.83,-157.95 h 454.99 l 1.05,157.95 h -371.21 m -376.36,0 -170.51,-157.95 h 453.11 l 87.23,157.95 h -369.83 m 1048.91,148.7 77.21,-139.79 h 365.14 l -150.91,139.79 H 3781.7 m -296.6,0 0.93,-139.79 h 366.49 l -75.09,139.79 H 3485.1 m -296.09,0 -75.08,-139.79 h 366.49 l 0.93,139.79 h -292.34 m -295.71,0 -150.9,-139.79 h 365.14 l 77.21,139.79 H 2893.3 m 821.01,122.05 63.5,-114.99 h 287.72 l -124.12,114.99 h -227.1 m -230.03,0 0.77,-114.99 h 288.6 l -61.75,114.99 h -227.62 m -229.72,0 -61.76,-114.99 h 288.6 l 0.76,114.99 h -227.6 m -229.52,0 -124.12,-114.99 h 287.72 l 63.5,114.99 h -227.1 m 642.43,84.8 43.96,-79.61 h 224.36 l -85.94,79.61 h -182.38 m -183.75,0 0.53,-79.61 h 224.85 l -42.76,79.61 h -182.62 m -183.61,0 -42.76,-79.61 h 224.85 l 0.53,79.61 h -182.62 m -183.51,0 -85.95,-79.61 h 224.36 l 43.97,79.61 H 3116.6 m 524,48.67 25.01,-45.31 h 180.63 l -48.92,45.31 H 3640.6 m -157.21,0 0.31,-45.31 h 180.84 l -24.33,45.31 h -156.82 m -157.14,0 -24.34,-45.31 h 180.84 l 0.3,45.31 h -156.8 m -157.13,0 -48.91,-45.31 h 180.62 l 25.03,45.31 h -156.74 m 761.44,-48.67 h -0.03 v 3.36 h 0.05 l -0.02,-3.36 m -893.7,0 h -0.02 l -0.02,3.36 h 0.04 v -3.36"
              id="path1332"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2357.9,-2357.9,0,3483.22,2156.67)"
            spreadMethod="pad"
            id="linearGradient1342"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset={0}
              id="stop1336"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset="0.0128573"
              id="stop1338"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e88a50" }}
              offset={1}
              id="stop1340"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1352">
            <path
              d="m 2633.28,1936.24 118.34,352.14 c 8.4,-26.92 19.59,-52.01 33.02,-74.6 7.25,-12.19 15.15,-23.65 23.62,-34.27 4.83,-6.06 9.85,-11.85 15.03,-17.34 2.95,-3.13 5.96,-6.16 9.02,-9.09 9.92,-9.52 20.37,-17.99 31.28,-25.3 l 0.16,-142.44 -230.47,-49.1"
              id="path1350"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient1358"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#a5be32" }}
              offset={0}
              id="stop1354"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e9eb5c" }}
              offset={1}
              id="stop1356"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1368">
            <path
              d="m 4319.93,2375.88 0.23,202.46 48.06,7.62 -1.45,-202.64 -46.84,-7.44"
              id="path1366"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient1374"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#a5be32" }}
              offset={0}
              id="stop1370"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e9eb5c" }}
              offset={1}
              id="stop1372"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1384">
            <path
              d="m 4363.51,1924.54 -280.44,59.75 8.6,115.63 c 22.39,8.53 42.89,22.23 60.84,40.11 9.8,9.76 18.85,20.76 27.02,32.85 7.19,10.62 13.69,22.09 19.46,34.28 20.68,43.7 31.84,96.79 30.1,154.31 l 90.84,14.41 -0.29,-255.28 45.2,-9.63 -1.33,-186.43"
              id="path1382"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1400">
            <path
              d="m 4364.84,2110.97 -45.2,9.63 0.29,255.28 46.84,7.44 -1.93,-272.35"
              id="path1398"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient1406"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#b1c833" }}
              offset={0}
              id="stop1402"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#edee66" }}
              offset={1}
              id="stop1404"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1476">
            <path
              d="m 3387.25,2138.99 v 0 0 c 44.08,0 83.85,18.54 115.64,50.2 3.46,3.45 6.84,7.06 10.11,10.81 v 0 c -3.27,-3.75 -6.64,-7.36 -10.11,-10.81 -31.78,-31.66 -71.56,-50.2 -115.64,-50.2"
              id="path1474"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1488">
            <path
              d="m 3483.54,2647.5 v 0 c -2.95,2.88 -5.93,5.68 -8.97,8.37 -9.02,8.02 -18.46,15.19 -28.23,21.44 v 0 c 9.78,-6.24 19.21,-13.42 28.24,-21.44 3.03,-2.69 6.02,-5.49 8.96,-8.37 m -37.93,30.27 c -28.41,17.99 -59.67,28.14 -92.05,28.29 v 0 c 32.39,-0.15 63.64,-10.29 92.05,-28.28 v -0.01"
              id="path1486"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1500">
            <path
              d="m 3486,2645.05 c -0.82,0.82 -1.64,1.64 -2.46,2.45 v 0 c 0.83,-0.81 1.65,-1.63 2.46,-2.45 v 0"
              id="path1498"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1512">
            <path
              d="m 3446.34,2677.31 c -0.24,0.16 -0.48,0.31 -0.73,0.46 v 0.01 c 0.24,-0.16 0.49,-0.31 0.73,-0.47 v 0"
              id="path1510"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1524">
            <path
              d="m 3483.54,2647.5 h -31.04 l -6.16,29.81 c 9.77,-6.25 19.21,-13.42 28.23,-21.44 3.04,-2.69 6.02,-5.49 8.97,-8.37 m -31.04,0 h -213.13 l -5.97,4.5 c 32.22,33.82 73.13,53.84 118.69,54.06 h 1.47 c 32.38,-0.15 63.64,-10.3 92.05,-28.29 l 6.89,-30.27 m -213.13,0 h -10.13 c 0.59,0.65 1.18,1.3 1.77,1.94 0.77,0.84 1.55,1.67 2.33,2.49 l 6.03,-4.43"
              id="path1522"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1536">
            <path
              d="m 3491.1,2225 h -258.93 c -7.59,9.78 -14.71,20.25 -21.29,31.31 -27.78,46.7 -45.96,104.12 -49.73,166.21 -3.2,52.78 4.42,102.18 20.36,144.5 l 32.61,0.19 14.53,-288.88 h 229.17 c 3.76,-7.57 7.76,-14.92 11.98,-22.02 6.58,-11.06 13.7,-21.53 21.3,-31.31"
              id="path1534"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1548">
            <path
              d="m 3181.51,2567.02 c 2.47,6.57 5.14,12.96 8,19.17 6.07,13.15 12.98,25.46 20.66,36.82 5.91,8.76 12.29,16.94 19.07,24.49 h 10.13 213.13 31.04 c 0.82,-0.81 1.64,-1.63 2.46,-2.45 -5.98,-6.86 -11.63,-14.22 -16.91,-22.04 -7.67,-11.36 -14.59,-23.67 -20.65,-36.82 -2.53,-5.47 -4.9,-11.1 -7.12,-16.85 l -227.27,-0.79 0.07,-1.34 -32.61,-0.19"
              id="path1546"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1560">
            <path
              d="m 3387.25,2138.99 c -47,0 -91.64,21.06 -128.7,56.62 -8.43,8.08 -16.47,16.91 -24.05,26.43 -0.78,0.98 -1.56,1.97 -2.33,2.96 h 258.93 c 0.77,-0.99 1.55,-1.98 2.33,-2.96 6.23,-7.82 12.76,-15.18 19.57,-22.04 -3.27,-3.75 -6.65,-7.36 -10.11,-10.81 -31.79,-31.66 -71.56,-50.2 -115.65,-50.2"
              id="path1558"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1572">
            <path
              d="m 3457.82,2278.33 h -229.17 l -14.53,288.88 -0.07,1.34 227.27,0.79 c -1.28,-3.29 -2.5,-6.63 -3.67,-10.01 l -213.23,-0.74 2.07,-41.09 h -4.25 v -7.5 h 4.63 l 11.16,-221.66 h 215.02 c 1.54,-3.38 3.13,-6.71 4.77,-10.01"
              id="path1570"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1584">
            <path
              d="M 3453.05,2288.34 H 3238.03 L 3226.87,2510 h 198.03 c -3.58,-20.13 -5.49,-41.25 -5.54,-63.06 v 0 -1.71 0 c 0.02,-7.49 0.25,-15.06 0.72,-22.71 2.95,-48.54 14.71,-94.24 32.97,-134.18 m -26.73,229.16 h -199.83 l -2.07,41.09 213.23,0.74 c -4.61,-13.33 -8.41,-27.3 -11.33,-41.83"
              id="path1582"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1596">
            <path
              d="m 3424.9,2510 h -198.03 -4.63 v 7.5 h 4.25 199.83 c -0.5,-2.48 -0.97,-4.98 -1.42,-7.5"
              id="path1594"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1608">
            <path
              d="m 3452.5,2647.5 v 0 l -6.89,30.27 c 0.25,-0.15 0.49,-0.3 0.73,-0.46 l 6.16,-29.81 m -213.13,0 v 0 m 0,0 -6.03,4.43 c 0.02,0.02 0.04,0.05 0.06,0.07 l 5.97,-4.5"
              id="path1606"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1620">
            <path
              d="m 3790.81,2225 h -0.01 c 6.41,9.78 12.26,20.25 17.49,31.32 5.85,12.35 10.93,25.45 15.18,39.19 0,-0.01 0,-0.01 0,-0.01 -4.24,-13.74 -9.33,-26.83 -15.17,-39.18 -5.24,-11.07 -11.08,-21.54 -17.49,-31.32"
              id="path1618"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1632">
            <path
              d="m 3646.17,2138.99 v 0 0 c 44.09,0 83.85,18.54 115.64,50.2 9.81,9.76 18.85,20.76 27.02,32.85 0.67,0.98 1.32,1.97 1.97,2.96 h 0.01 c -0.65,-0.99 -1.31,-1.98 -1.97,-2.96 -8.18,-12.09 -17.22,-23.09 -27.02,-32.85 -31.79,-31.66 -71.56,-50.2 -115.65,-50.2"
              id="path1630"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1644">
            <path
              d="m 3742.47,2647.5 h -0.01 c -2.94,2.88 -5.93,5.68 -8.96,8.37 -35.44,31.48 -77.19,49.99 -121.02,50.19 h 0.01 c 43.82,-0.2 85.58,-18.71 121.02,-50.19 3.03,-2.69 6.02,-5.49 8.96,-8.37"
              id="path1642"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1656">
            <path
              d="m 3825.15,2500.39 c -6.76,24.99 -15.9,48.57 -27.01,70.24 v 0 c 11.11,-21.66 20.25,-45.24 27.01,-70.24 v 0"
              id="path1654"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1668">
            <path
              d="m 3798.14,2570.63 c -2.72,5.3 -5.56,10.5 -8.52,15.57 -7.65,13.14 -16.06,25.45 -25.12,36.83 -6.98,8.74 -14.34,16.92 -22.04,24.47 h 0.01 c 7.69,-7.55 15.06,-15.73 22.03,-24.47 9.06,-11.38 17.47,-23.69 25.13,-36.83 2.95,-5.07 5.79,-10.27 8.51,-15.57 v 0"
              id="path1666"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1680">
            <path
              d="M 3742.46,2647.5 H 3500 3488.17 c 0.59,0.65 1.18,1.3 1.77,1.94 19.34,21 41.94,36.95 66.89,46.48 l -10,-48.42 11.11,48.84 c 16.74,6.26 34.52,9.63 53.07,9.72 h 1.47 c 43.83,-0.2 85.58,-18.71 121.02,-50.19 3.03,-2.69 6.02,-5.49 8.96,-8.37"
              id="path1678"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1692">
            <path
              d="m 3790.8,2225 h -258.92 c 6.41,9.78 12.26,20.25 17.49,31.32 3.36,7.1 6.47,14.44 9.31,22.01 h 200.16 l 6.92,292.11 32.38,0.19 c 11.11,-21.67 20.25,-45.25 27.01,-70.24 -9.69,-31.34 -15.02,-66.01 -15.09,-102.65 v 0 -1.68 0 c 0.01,-7.49 0.25,-15.06 0.71,-22.69 1.64,-27.01 6.01,-53.12 12.7,-77.86 -4.25,-13.74 -9.33,-26.84 -15.18,-39.19 -5.23,-11.07 -11.08,-21.54 -17.49,-31.32"
              id="path1690"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1704">
            <path
              d="m 3539.7,2569.68 c -2.87,5.64 -5.87,11.15 -9,16.52 -7.65,13.14 -16.06,25.45 -25.12,36.83 -6.23,7.8 -12.77,15.16 -19.58,22.02 0.72,0.82 1.45,1.64 2.17,2.45 h 254.29 c 7.7,-7.55 15.06,-15.73 22.04,-24.47 9.06,-11.38 17.47,-23.69 25.12,-36.83 2.96,-5.07 5.8,-10.27 8.52,-15.57 l -32.38,-0.19 v 0.02 l -226.06,-0.78"
              id="path1702"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1716">
            <path
              d="m 3646.17,2138.99 c -46.99,0 -91.64,21.06 -128.7,56.62 -1.5,1.44 -2.99,2.9 -4.47,4.39 5.98,6.86 11.63,14.22 16.91,22.04 0.66,0.98 1.32,1.97 1.97,2.96 h 258.92 c -0.65,-0.99 -1.3,-1.98 -1.97,-2.96 -8.17,-12.09 -17.21,-23.09 -27.02,-32.85 -31.79,-31.66 -71.55,-50.2 -115.64,-50.2"
              id="path1714"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1728">
            <path
              d="m 3758.84,2278.33 h -200.16 c 1.24,3.3 2.42,6.63 3.56,10.01 h 186.69 l 5.26,221.66 h 3.37 v 7.5 h -3.2 l 1.02,42.93 -210.8,-0.73 c -1.58,3.37 -3.21,6.7 -4.88,9.98 l 226.06,0.78 v -0.02 l -6.92,-292.11"
              id="path1726"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1740">
            <path
              d="m 3748.93,2288.34 h -186.69 c 11.16,33.24 17.34,70.46 17.4,110 v 1.24 c -0.01,7.57 -0.25,15.23 -0.72,22.95 -1.85,30.53 -7.18,59.92 -15.43,87.47 h 190.7 l -5.26,-221.66 m 5.43,229.16 h -193.2 c -4.73,14.66 -10.29,28.76 -16.58,42.2 l 210.8,0.73 -1.02,-42.93"
              id="path1738"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1752">
            <path
              d="m 3757.56,2510 h -3.37 -190.7 c -0.75,2.52 -1.53,5.02 -2.33,7.5 h 193.2 3.2 v -7.5"
              id="path1750"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1764">
            <path
              d="m 3546.83,2647.5 10,48.42 c 0.37,0.15 0.74,0.29 1.11,0.42 l -11.11,-48.84"
              id="path1762"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1776">
            <path
              d="m 3531.88,2225 v 0 c 6.41,9.78 12.25,20.25 17.49,31.32 3.36,7.1 6.47,14.44 9.31,22.01 v 0 c -2.84,-7.57 -5.95,-14.91 -9.31,-22.01 -5.23,-11.07 -11.08,-21.54 -17.49,-31.32"
              id="path1774"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1788">
            <path
              d="m 3539.69,2569.68 c -2.86,5.64 -5.87,11.15 -8.99,16.52 -7.66,13.14 -16.07,25.45 -25.12,36.83 -6.24,7.8 -12.77,15.16 -19.58,22.02 v 0 c 6.81,-6.86 13.35,-14.22 19.58,-22.02 9.06,-11.38 17.47,-23.69 25.12,-36.83 3.13,-5.37 6.13,-10.88 9,-16.52 h -0.01"
              id="path1786"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1800">
            <path
              d="m 3513,2200 v 0 c 5.98,6.86 11.62,14.22 16.91,22.04 0.66,0.98 1.32,1.97 1.97,2.96 v 0 c -0.65,-0.99 -1.31,-1.98 -1.97,-2.96 -5.28,-7.82 -10.93,-15.18 -16.91,-22.04"
              id="path1798"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1812">
            <path
              d="m 3558.68,2278.33 v 0 c 1.23,3.3 2.42,6.63 3.55,10.01 h 0.01 c -1.14,-3.38 -2.32,-6.71 -3.56,-10.01 m -14.11,281.37 c -1.58,3.37 -3.2,6.7 -4.88,9.98 h 0.01 c 1.67,-3.28 3.3,-6.61 4.88,-9.98 h -0.01"
              id="path1810"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1824">
            <path
              d="m 3562.24,2288.34 h -0.01 c 13.42,39.94 19.64,85.64 16.69,134.19 -1.85,30.53 -7.19,59.92 -15.44,87.47 h 0.01 c 8.25,-27.55 13.58,-56.94 15.43,-87.47 0.47,-7.72 0.71,-15.38 0.72,-22.95 v -1.24 c -0.06,-39.54 -6.24,-76.76 -17.4,-110 m -1.08,229.16 h -0.01 c -4.72,14.66 -10.28,28.76 -16.58,42.2 h 0.01 c 6.29,-13.44 11.85,-27.54 16.58,-42.2"
              id="path1822"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1836">
            <path
              d="m 3563.49,2510 h -0.01 c -0.75,2.52 -1.53,5.02 -2.33,7.5 h 0.01 c 0.8,-2.48 1.58,-4.98 2.33,-7.5"
              id="path1834"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1848">
            <path
              d="m 3531.88,2225 h -40.78 c -7.6,9.78 -14.72,20.25 -21.3,31.31 -4.22,7.1 -8.22,14.45 -11.98,22.02 h 28.33 7.5 65.03 c -2.84,-7.57 -5.95,-14.91 -9.31,-22.01 -5.24,-11.07 -11.08,-21.54 -17.49,-31.32"
              id="path1846"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1860">
            <path
              d="m 3441.32,2569.34 c 2.22,5.75 4.59,11.38 7.12,16.85 6.06,13.15 12.98,25.46 20.65,36.82 5.28,7.82 10.93,15.18 16.91,22.04 6.81,-6.86 13.34,-14.22 19.58,-22.02 9.05,-11.38 17.46,-23.69 25.12,-36.83 3.12,-5.37 6.13,-10.88 8.99,-16.52 l -98.37,-0.34"
              id="path1858"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1872">
            <path
              d="m 3513,2200 c -6.81,6.86 -13.34,14.22 -19.57,22.04 -0.78,0.98 -1.56,1.97 -2.33,2.96 h 40.78 c -0.65,-0.99 -1.31,-1.98 -1.97,-2.96 -5.29,-7.82 -10.93,-15.18 -16.91,-22.04"
              id="path1870"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1884">
            <path
              d="m 3558.68,2278.33 h -65.03 v 10.01 h 68.58 c -1.13,-3.38 -2.32,-6.71 -3.55,-10.01 m -72.53,0 h -28.33 c -1.64,3.3 -3.23,6.63 -4.77,10.01 h 33.1 v -10.01 m -48.5,281 c 1.17,3.38 2.39,6.72 3.67,10.01 l 98.37,0.34 c 1.68,-3.28 3.3,-6.61 4.88,-9.98 l -50.92,-0.18 v 7.2 h -7.5 v -7.22 l -48.5,-0.17"
              id="path1882"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1896">
            <path
              d="m 3562.23,2288.34 h -68.58 V 2510 h 69.83 c 8.25,-27.55 13.59,-56.94 15.44,-87.47 2.95,-48.55 -3.27,-94.25 -16.69,-134.19 m -76.08,0 h -33.1 c -18.26,39.94 -30.02,85.64 -32.97,134.18 -0.47,7.65 -0.7,15.22 -0.72,22.71 v 1.71 c 0.05,21.81 1.96,42.93 5.54,63.06 h 61.25 v -221.66 m 75,229.16 h -67.5 v 42.02 l 50.92,0.18 c 6.3,-13.44 11.86,-27.54 16.58,-42.2 m -75,0 h -59.83 c 2.92,14.53 6.72,28.5 11.33,41.83 l 48.5,0.17 v -42"
              id="path1894"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1908">
            <path
              d="m 3493.65,2278.33 h -7.5 v 10.01 221.66 h -61.25 c 0.45,2.52 0.92,5.02 1.42,7.5 h 59.83 v 42 7.22 h 7.5 v -7.2 -42.02 h 67.5 c 0.8,-2.48 1.58,-4.98 2.33,-7.5 h -69.83 v -221.66 -10.01"
              id="path1906"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1920">
            <path
              d="m 3036.29,2116.07 v 0.01 c 14.51,8.01 28.04,18.31 40.36,30.58 9.8,9.77 18.84,20.77 27.02,32.86 7.18,10.62 13.69,22.08 19.46,34.27 7.21,15.24 13.26,31.62 18.01,48.93 l 0.01,-0.02 c -4.76,-17.3 -10.81,-33.68 -18.01,-48.91 -5.78,-12.19 -12.29,-23.65 -19.47,-34.27 -8.17,-12.1 -17.21,-23.1 -27.01,-32.86 -12.33,-12.27 -25.86,-22.57 -40.37,-30.59 m 96.64,364.87 c -7.65,22.41 -17.25,43.47 -28.47,62.74 -7.12,12.21 -14.89,23.72 -23.22,34.41 8.33,-10.69 16.11,-22.2 23.22,-34.42 11.22,-19.27 20.82,-40.31 28.47,-62.72 v -0.01"
              id="path1918"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1932">
            <path
              d="m 3141.15,2262.7 -0.01,0.02 c 9.82,35.75 14.08,75.46 11.54,117.29 -2.16,35.55 -9.04,69.57 -19.75,100.93 v 0.01 c 10.71,-31.36 17.6,-65.39 19.76,-100.94 2.54,-41.84 -1.73,-81.56 -11.54,-117.31"
              id="path1930"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1944">
            <path
              d="m 2874.16,2121.14 c -3.57,2.09 -7.09,4.31 -10.57,6.64 v 0 c 3.48,-2.33 7,-4.55 10.57,-6.64 v 0"
              id="path1942"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1956">
            <path
              d="m 2863.59,2127.78 c -10.91,7.31 -21.36,15.78 -31.28,25.3 -3.06,2.93 -6.07,5.96 -9.02,9.09 2.95,-3.13 5.96,-6.16 9.01,-9.09 9.92,-9.51 20.38,-17.99 31.29,-25.3 v 0"
              id="path1954"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1968">
            <path
              d="m 2961,2096.47 c -14.55,0 -28.88,2.02 -42.82,5.86 v 0.01 c 13.94,-3.85 28.27,-5.87 42.82,-5.86 11.72,0 23.13,1.3 34.17,3.82 v -0.01 c -11.04,-2.51 -22.45,-3.82 -34.17,-3.82 m 35.64,4.17 v 0.01 c 6.72,1.6 13.29,3.65 19.71,6.12 v -0.01 c -6.42,-2.47 -12.99,-4.52 -19.71,-6.12 m -79.97,2.12 c -6.63,1.89 -13.16,4.19 -19.6,6.89 v 0 c 6.44,-2.69 12.97,-5 19.6,-6.89 v 0"
              id="path1966"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1980">
            <path
              d="m 3016.35,2106.76 v 0.01 c 2.75,1.06 5.46,2.19 8.15,3.41 v -0.01 c -2.69,-1.21 -5.4,-2.35 -8.15,-3.41"
              id="path1978"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1992">
            <path
              d="m 2884.89,2115.28 c -3.62,1.83 -7.2,3.78 -10.73,5.86 v 0 c 3.53,-2.07 7.11,-4.03 10.73,-5.86 v 0"
              id="path1990"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2004">
            <path
              d="m 2897.07,2109.65 c -4.1,1.72 -8.17,3.6 -12.18,5.63 v 0 c 4.01,-2.03 8.08,-3.91 12.18,-5.63 v 0 m 127.43,0.52 v 0.01 c 4,1.8 7.93,3.77 11.79,5.9 v -0.01 c -3.86,-2.13 -7.79,-4.1 -11.79,-5.9"
              id="path2002"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2016">
            <path
              d="m 2995.17,2100.29 v 0.01 c 0.49,0.11 0.98,0.23 1.47,0.35 v -0.01 c -0.49,-0.12 -0.98,-0.23 -1.47,-0.35 m -76.99,2.04 c -0.51,0.14 -1.01,0.28 -1.51,0.43 v 0 c 0.5,-0.14 1,-0.28 1.51,-0.42 v -0.01"
              id="path2014"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2028">
            <path
              d="m 3066.47,2595.51 c -5.83,6.33 -11.89,12.29 -18.14,17.84 -2.92,2.6 -5.89,5.1 -8.89,7.52 3,-2.42 5.97,-4.93 8.89,-7.52 6.25,-5.55 12.31,-11.51 18.14,-17.84"
              id="path2026"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2040">
            <path
              d="m 2772.97,2351.91 -36.06,5.73 c -0.87,7.37 -1.54,14.83 -2,22.36 -3.69,60.96 7.05,117.43 28.36,163.66 6.07,13.15 12.98,25.47 20.66,36.82 6.42,9.52 13.39,18.35 20.84,26.43 20.11,21.84 43.75,38.22 69.89,47.6 l -25.6,-76.17 h -8.91 l 1.62,-21.72 -68.8,-204.71"
              id="path2038"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2052">
            <path
              d="m 2751.62,2288.38 c -6.87,21.99 -11.87,45.2 -14.71,69.26 l 36.06,-5.73 -21.35,-63.53"
              id="path2050"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2064">
            <path
              d="m 2841.77,2556.62 -1.62,21.72 h 8.91 l -7.29,-21.72"
              id="path2062"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2076">
            <path
              d="m 3036.29,2116.08 -2.92,409.77 -175.78,52.49 h -8.53 l 25.6,76.17 c 16.41,5.89 33.81,9.02 51.93,9.02 40.48,0 79.2,-15.62 112.85,-42.66 3,-2.42 5.97,-4.92 8.89,-7.52 6.25,-5.55 12.31,-11.51 18.14,-17.84 4.42,-4.79 8.71,-9.8 12.87,-15.01 0.64,-0.8 1.27,-1.6 1.9,-2.41 8.33,-10.69 16.1,-22.2 23.22,-34.41 11.22,-19.27 20.82,-40.33 28.47,-62.74 l 8.21,-218.22 c -4.75,-17.31 -10.8,-33.69 -18.01,-48.93 -5.77,-12.19 -12.28,-23.65 -19.46,-34.27 -8.18,-12.09 -17.22,-23.09 -27.02,-32.86 -12.32,-12.27 -25.85,-22.57 -40.36,-30.58"
              id="path2074"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2088">
            <path
              d="m 3141.14,2262.72 -8.21,218.22 c 10.71,-31.36 17.59,-65.38 19.75,-100.93 2.54,-41.83 -1.72,-81.54 -11.54,-117.29"
              id="path2086"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2100">
            <path
              d="m 2874.16,2121.14 c -3.57,2.09 -7.09,4.31 -10.57,6.64 l -0.16,137.6 10.73,-144.24 m 22.11,2.06 -25.87,438.87 0.41,-7.08 25.46,-431.79 m -38.28,215.22 -85.02,13.49 68.8,204.71 16.22,-218.2"
              id="path2098"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2112">
            <path
              d="m 2863.59,2127.78 c -10.91,7.31 -21.37,15.79 -31.29,25.3 -3.05,2.93 -6.06,5.96 -9.01,9.09 -5.18,5.49 -10.2,11.28 -15.03,17.34 -8.47,10.62 -16.37,22.08 -23.62,34.27 -13.43,22.59 -24.62,47.68 -33.02,74.6 l 21.35,63.53 85.02,-13.49 5.44,-73.04 0.16,-137.6"
              id="path2110"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2124">
            <path
              d="m 2961,2096.48 c -14.55,-0.01 -28.88,2.01 -42.82,5.86 l -5.29,87.3 82.28,10.74 V 2100.3 c -11.04,-2.52 -22.45,-3.82 -34.17,-3.82 m 35.64,4.17 v 101.43 l -84.62,-11.04 -0.69,-0.1 5.34,-88.18 c -6.63,1.89 -13.16,4.2 -19.6,6.89 l -0.8,13.55 -25.46,431.79 143.27,-41.75 1.55,-277.8 c -2.91,-0.39 -5.57,-1.97 -7.27,-4.83 h -4.75 c -2.86,-3.75 -2.58,-7.75 -0.93,-11.87 l 4.53,-0.69 c 0.97,-3 2.85,-5.17 5.43,-5.17 1.08,0 2.12,0.19 3.11,0.56 l 0.6,-106.67 c -6.42,-2.47 -12.99,-4.52 -19.71,-6.12 m -87.49,114.49 v 0 l 86.75,12.42 v 266.48 l -105.97,22.24 19.22,-301.14"
              id="path2122"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2136">
            <path
              d="m 3016.35,2106.77 -0.6,106.67 c 3.34,1.26 6.04,4.57 6.99,9.4 1.23,6.26 -0.93,12.7 -5.63,12.7 -0.5,0 -0.99,-0.03 -1.48,-0.1 l -1.55,277.8 -143.27,41.75 -0.41,7.08 151.21,-45.15 2.89,-406.74 c -2.69,-1.22 -5.4,-2.35 -8.15,-3.41"
              id="path2134"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2148">
            <path
              d="m 2884.89,2115.28 c -3.62,1.83 -7.2,3.79 -10.73,5.86 l -10.73,144.24 -5.44,73.04 -16.22,218.2 7.29,21.72 h 8.53 l 27.3,-463.06"
              id="path2146"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2160">
            <path
              d="m 2897.07,2109.65 c -4.1,1.72 -8.17,3.6 -12.18,5.63 l -27.3,463.06 175.78,-52.49 2.92,-409.77 c -3.86,-2.13 -7.79,-4.1 -11.79,-5.9 l -2.89,406.74 -151.21,45.15 25.87,-438.87 0.8,-13.55"
              id="path2158"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2172">
            <path
              d="m 2909.15,2215.14 -19.22,301.14 0.54,-8.48 95.82,-18.98 0.46,-260.56 9.15,-0.7 -9.15,0.7 -77.76,-10.56 0.16,-2.56 m 0,244.74 2.96,-43.73 h 62.6 l 1.6,36.4 -67.16,7.33 m -2.33,0 3.04,-43.73 h 2.25 l -2.96,43.73 h -2.33"
              id="path2170"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2184">
            <path
              d="m 2995.9,2227.56 v 0 l -9.15,0.7 -0.46,260.56 -95.82,18.98 -0.54,8.48 105.97,-22.24 v -266.48"
              id="path2182"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2196">
            <path
              d="m 2909.15,2215.14 v 0 l -0.16,2.56 77.76,10.56 9.15,-0.7 -86.75,-12.42"
              id="path2194"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2208">
            <path
              d="m 3007.21,2218.05 -4.53,0.69 c -1.65,4.12 -1.93,8.12 0.93,11.87 h 4.75 c -0.71,-1.19 -1.25,-2.61 -1.58,-4.25 -0.55,-2.83 -0.37,-5.85 0.43,-8.31"
              id="path2206"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2220">
            <path
              d="m 3012.64,2212.88 c -2.58,0 -4.46,2.17 -5.43,5.17 -0.8,2.46 -0.98,5.48 -0.43,8.31 0.33,1.64 0.87,3.06 1.58,4.25 1.7,2.86 4.36,4.44 7.27,4.83 0.49,0.07 0.98,0.1 1.48,0.1 4.7,0 6.86,-6.44 5.63,-12.7 -0.95,-4.83 -3.65,-8.14 -6.99,-9.4 -0.99,-0.37 -2.03,-0.56 -3.11,-0.56 m -0.25,19.88 c -2.13,-1.22 -3.8,-3.42 -4.45,-6.71 -1.05,-5.36 0.99,-11.53 5.01,-11.53 3.61,0 6.84,2.57 8.22,6.97 -1.51,-2.93 -4.07,-4.59 -6.87,-4.59 -3.73,0 -5.62,5.72 -4.65,10.68 0.45,2.29 1.45,3.98 2.74,5.18 m 7.1,0.46 c -1.33,0 -2.57,-0.83 -2.91,-2.59 -0.35,-1.76 0.32,-3.8 1.65,-3.8 1.32,0 2.5,1.04 2.84,2.81 0.35,1.76 -0.26,3.58 -1.58,3.58"
              id="path2218"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2232">
            <path
              d="m 3012.95,2214.52 c -4.02,0 -6.06,6.17 -5.01,11.53 0.65,3.29 2.32,5.49 4.45,6.71 -1.29,-1.2 -2.29,-2.89 -2.74,-5.18 -0.97,-4.96 0.92,-10.68 4.65,-10.68 2.8,0 5.36,1.66 6.87,4.59 -1.38,-4.4 -4.61,-6.97 -8.22,-6.97"
              id="path2230"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2244">
            <path
              d="m 3018.23,2226.83 c -1.33,0 -2,2.04 -1.65,3.8 0.34,1.76 1.58,2.59 2.91,2.59 1.32,0 1.93,-1.82 1.58,-3.58 -0.34,-1.77 -1.52,-2.81 -2.84,-2.81"
              id="path2242"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2256">
            <path
              d="m 2974.71,2416.15 h -62.6 l -2.96,43.73 67.16,-7.33 -1.6,-36.4"
              id="path2254"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2268">
            <path
              d="m 2912.11,2416.15 h -2.25 l -3.04,43.73 h 2.33 l 2.96,-43.73"
              id="path2266"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2280">
            <path
              d="m 2995.17,2100.3 v 100.08 l -82.28,-10.74 5.29,-87.3 c -0.51,0.14 -1.01,0.28 -1.51,0.42 l -5.34,88.18 0.69,0.1 84.62,11.04 v -101.43 c -0.49,-0.12 -0.98,-0.24 -1.47,-0.35"
              id="path2278"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2292">
            <path
              d="m 4229.08,2361.47 c -0.12,3.95 -0.3,7.91 -0.54,11.9 -3.69,60.97 -21.3,117.43 -48.22,163.67 -7.66,13.14 -16.07,25.46 -25.12,36.83 -9.65,12.08 -20.03,23.09 -31,32.84 -35.64,31.65 -77.66,50.19 -121.75,50.19 v 0 0 c 44.09,0 86.11,-18.54 121.75,-50.19 10.97,-9.75 21.36,-20.76 31,-32.84 9.06,-11.37 17.47,-23.69 25.12,-36.83 26.93,-46.24 44.53,-102.7 48.22,-163.67 0.25,-3.99 0.43,-7.95 0.55,-11.9 h -0.01"
              id="path2290"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2304">
            <path
              d="m 4091.67,2099.92 v 0 c 22.39,8.54 42.89,22.23 60.83,40.11 9.81,9.76 18.85,20.76 27.03,32.85 7.18,10.62 13.69,22.09 19.46,34.28 20.68,43.7 31.83,96.79 30.09,154.31 h 0.01 c 1.74,-57.52 -9.42,-110.61 -30.1,-154.31 -5.77,-12.19 -12.27,-23.66 -19.46,-34.28 -8.17,-12.09 -17.22,-23.09 -27.02,-32.85 -17.95,-17.88 -38.45,-31.58 -60.84,-40.11"
              id="path2302"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2316">
            <path
              d="m 4037.59,2089.84 v 0 c 3.66,0.01 7.3,0.16 10.91,0.43 v 0 c -3.61,-0.27 -7.24,-0.42 -10.91,-0.43 m 12.39,0.55 v 0 c 6.57,0.55 13.04,1.53 19.38,2.9 v 0 c -6.34,-1.37 -12.81,-2.35 -19.38,-2.9"
              id="path2314"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2328">
            <path
              d="m 4081.4,2096.41 v 0 c 3.46,1.05 6.89,2.22 10.27,3.51 v 0 c -3.38,-1.29 -6.81,-2.46 -10.27,-3.51"
              id="path2326"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2340">
            <path
              d="m 4069.36,2093.29 v 0 c 4.06,0.88 8.08,1.92 12.04,3.12 v 0 c -3.96,-1.2 -7.98,-2.24 -12.04,-3.12"
              id="path2338"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2352">
            <path
              d="m 4048.5,2090.27 v 0 c 0.49,0.04 0.98,0.07 1.48,0.12 v 0 c -0.5,-0.05 -0.99,-0.09 -1.48,-0.12"
              id="path2350"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2364">
            <path
              d="m 3931.19,2126.97 c -7.95,5.88 -15.63,12.39 -23.02,19.48 -8.43,8.08 -16.46,16.92 -24.05,26.43 -8.47,10.62 -16.38,22.08 -23.62,34.27 -14.03,23.59 -25.62,49.92 -34.13,78.21 l 0.88,23.36 c 7.31,27.84 11.28,58.02 11.32,89.68 v 1.15 c -0.01,7.58 -0.25,15.25 -0.72,22.98 -0.86,14.13 -2.46,28.01 -4.75,41.58 l 2.44,64.79 c 1.16,2.74 2.36,5.45 3.59,8.13 6.07,13.15 12.98,25.46 20.65,36.82 6.43,9.51 13.4,18.34 20.86,26.43 32.73,35.56 74.82,56.62 121.81,56.62 44.09,0 86.11,-18.54 121.75,-50.19 10.97,-9.75 21.35,-20.76 31,-32.84 9.05,-11.37 17.46,-23.69 25.12,-36.83 26.92,-46.24 44.53,-102.7 48.22,-163.67 0.24,-3.99 0.42,-7.95 0.54,-11.9 l -119.37,-18.95 17.54,235.82 h -17.43 l -175.8,-52.49 -2.83,-398.88"
              id="path2362"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2376">
            <path
              d="m 3826.37,2285.36 c -1.01,3.35 -1.98,6.73 -2.9,10.14 1.35,4.35 2.61,8.75 3.78,13.22 l -0.88,-23.36 m 6.73,178.75 c -2.09,12.37 -4.76,24.49 -7.95,36.28 3.04,9.85 6.51,19.36 10.39,28.51 l -2.44,-64.79"
              id="path2374"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2388">
            <path
              d="m 4091.67,2099.92 18.04,242.6 119.37,18.95 c 1.74,-57.52 -9.41,-110.61 -30.09,-154.31 -5.77,-12.19 -12.28,-23.66 -19.46,-34.28 -8.18,-12.09 -17.22,-23.09 -27.03,-32.85 -17.94,-17.88 -38.44,-31.57 -60.83,-40.11"
              id="path2386"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2400">
            <path
              d="m 4037.59,2089.84 h -1.48 c -21.99,0.1 -43.46,4.82 -63.87,13.47 v 97.07 l 82.27,-10.74 -6.01,-99.37 c -3.61,-0.27 -7.25,-0.42 -10.91,-0.43 m 12.39,0.55 6.08,100.55 -0.68,0.1 -84.62,11.04 v -98.14 c -6.68,2.9 -13.24,6.22 -19.67,9.94 l 0.56,99.56 c 0.99,-0.37 2.04,-0.56 3.12,-0.56 2.57,0 4.46,2.17 5.43,5.17 l 4.52,0.69 c 1.66,4.12 1.93,8.12 -0.92,11.87 h -4.76 v 0 c -1.7,2.86 -4.36,4.44 -7.27,4.83 l 1.55,277.8 143.26,41.74 -27.22,-461.69 c -6.34,-1.37 -12.81,-2.35 -19.38,-2.9 m -78.49,137.17 v 0 l 86.75,-12.42 0.17,2.56 v 0 l 19.06,298.58 -105.98,-22.24 v -266.48"
              id="path2398"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2412">
            <path
              d="m 3951.09,2113.88 c -2.73,1.58 -5.44,3.24 -8.13,4.96 l 2.83,398.08 151.21,45.15 -0.42,-7.09 -143.26,-41.74 -1.55,-277.8 c -0.49,0.07 -0.98,0.1 -1.48,0.1 -4.69,0 -6.86,-6.44 -5.62,-12.7 0.95,-4.83 3.64,-8.14 6.98,-9.4 l -0.56,-99.56"
              id="path2410"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2424">
            <path
              d="m 4081.4,2096.41 28.42,481.93 h 17.43 l -17.54,-235.82 -18.04,-242.6 c -3.38,-1.29 -6.81,-2.46 -10.27,-3.51"
              id="path2422"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2436">
            <path
              d="m 4069.36,2093.29 27.22,461.69 0.42,7.09 -151.21,-45.15 -2.83,-398.08 c -3.98,2.56 -7.91,5.27 -11.77,8.13 l 2.83,398.88 175.8,52.49 -28.42,-481.93 c -3.96,-1.2 -7.98,-2.24 -12.04,-3.12"
              id="path2434"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2448">
            <path
              d="m 4058.41,2217.7 -77.76,10.56 -9.16,-0.7 9.16,0.7 0.46,260.56 95.81,18.98 0.55,8.48 -19.06,-298.58 m -0.17,242.18 -2.96,-43.73 h 2.26 l 3.05,43.73 h -2.35 m 0,0 -67.15,-7.33 1.6,-36.4 h 62.59 l 2.96,43.73"
              id="path2446"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2460">
            <path
              d="m 3971.49,2227.56 v 0 266.48 l 105.98,22.24 -0.55,-8.48 -95.81,-18.98 -0.46,-260.56 -9.16,-0.7"
              id="path2458"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2472">
            <path
              d="m 4058.24,2215.14 -86.75,12.42 9.16,0.7 77.76,-10.56 v 0 l -0.17,-2.56"
              id="path2470"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2484">
            <path
              d="m 3960.2,2218.05 c 0.79,2.46 0.97,5.48 0.42,8.31 -0.33,1.64 -0.87,3.06 -1.58,4.25 v 0 h 4.76 c 2.85,-3.75 2.58,-7.75 0.92,-11.87 l -4.52,-0.69"
              id="path2482"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2496">
            <path
              d="m 3954.77,2212.88 c -1.08,0 -2.13,0.19 -3.12,0.56 -3.34,1.26 -6.03,4.57 -6.98,9.4 -1.24,6.26 0.93,12.7 5.62,12.7 0.5,0 0.99,-0.03 1.48,-0.1 2.91,-0.39 5.57,-1.97 7.27,-4.83 0.71,-1.19 1.25,-2.61 1.58,-4.25 0.55,-2.83 0.37,-5.85 -0.42,-8.31 -0.97,-3 -2.86,-5.17 -5.43,-5.17 m -8.54,8.61 c 1.39,-4.4 4.61,-6.97 8.22,-6.97 4.03,0 6.07,6.17 5.01,11.53 -0.65,3.29 -2.32,5.49 -4.44,6.71 1.29,-1.2 2.27,-2.89 2.72,-5.18 0.98,-4.96 -0.9,-10.68 -4.63,-10.68 -2.81,0 -5.37,1.66 -6.88,4.59 m 1.68,11.73 c -1.32,0 -1.93,-1.82 -1.58,-3.58 0.35,-1.77 1.52,-2.81 2.85,-2.81 1.32,0 1.99,2.04 1.65,3.8 -0.35,1.76 -1.59,2.59 -2.92,2.59"
              id="path2494"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2508">
            <path
              d="m 3954.45,2214.52 c -3.61,0 -6.83,2.57 -8.22,6.97 1.51,-2.93 4.07,-4.59 6.88,-4.59 3.73,0 5.61,5.72 4.63,10.68 -0.45,2.29 -1.43,3.98 -2.72,5.18 2.12,-1.22 3.79,-3.42 4.44,-6.71 1.06,-5.36 -0.98,-11.53 -5.01,-11.53"
              id="path2506"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2520">
            <path
              d="m 3949.18,2226.83 c -1.33,0 -2.5,1.04 -2.85,2.81 -0.35,1.76 0.26,3.58 1.58,3.58 1.33,0 2.57,-0.83 2.92,-2.59 0.34,-1.76 -0.33,-3.8 -1.65,-3.8"
              id="path2518"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2532">
            <path
              d="m 4055.28,2416.15 h -62.59 l -1.6,36.4 67.15,7.33 -2.96,-43.73"
              id="path2530"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2544">
            <path
              d="m 4057.54,2416.15 h -2.26 l 2.96,43.73 h 2.35 l -3.05,-43.73"
              id="path2542"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2556">
            <path
              d="m 4048.5,2090.27 6.01,99.37 -82.27,10.74 v -97.07 c -0.5,0.21 -0.98,0.42 -1.48,0.63 v 98.14 l 84.62,-11.04 0.68,-0.1 -6.08,-100.55 c -0.5,-0.05 -0.99,-0.08 -1.48,-0.12"
              id="path2554"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2568">
            <path
              d="m 3827.25,2308.72 v 0.03 c 9.14,34.83 13.05,73.31 10.6,113.78 -0.86,14.12 -2.46,27.99 -4.75,41.56 v 0.02 c 2.29,-13.57 3.89,-27.45 4.75,-41.58 0.47,-7.73 0.71,-15.4 0.72,-22.98 v -1.15 c -0.04,-31.66 -4.01,-61.84 -11.32,-89.68"
              id="path2566"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2580">
            <path
              d="m 3823.47,2295.5 c 0,0 0,0 0,0.01 1.34,4.35 2.61,8.76 3.78,13.24 v -0.03 c -1.17,-4.47 -2.43,-8.87 -3.78,-13.22 m 9.63,168.59 c -2.09,12.37 -4.76,24.49 -7.95,36.3 v 0 c 3.19,-11.79 5.86,-23.91 7.95,-36.28 v -0.02"
              id="path2578"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2592">
            <path
              d="m 3827.25,2308.75 5.85,155.34 c 2.29,-13.57 3.89,-27.44 4.75,-41.56 2.45,-40.47 -1.46,-78.95 -10.6,-113.78"
              id="path2590"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2604">
            <path
              d="m 3823.47,2295.51 c -6.69,24.74 -11.06,50.85 -12.7,77.86 -0.46,7.63 -0.7,15.2 -0.71,22.69 v 1.68 c 0.07,36.64 5.4,71.31 15.09,102.65 3.19,-11.81 5.86,-23.93 7.95,-36.3 l -5.85,-155.34 c -1.17,-4.48 -2.44,-8.89 -3.78,-13.24"
              id="path2602"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2630">
            <path
              d="M 6224.99,404.922 V 405 h 0.01 l -0.01,-0.078"
              id="path2628"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2642">
            <path
              d="m 5796.7,461.672 h -0.01 -0.02 v 0 h 0.03"
              id="path2640"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2654">
            <path
              d="m 6198.11,0 h -0.01 l 26.56,400 h 0.01 L 6198.11,0"
              id="path2652"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2666">
            <path
              d="m 6224.67,400 h -0.01 l 0.33,5 h 0.01 l -0.01,-0.078 -0.32,-4.922"
              id="path2664"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2678">
            <path
              d="m 5862.7,452.93 -66.01,8.742 h 0.01 l 66,-8.742 v 0"
              id="path2676"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2690">
            <path
              d="m 5824.47,201.289 -0.92,8.66 5.76,-5.34 -4.84,-3.32"
              id="path2688"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2702">
            <path
              d="M 5850.77,219.32 5819.51,247.762 5803.26,400 h 310.9 L 5850.77,219.32 M 5866,420 h -64.88 l -4.45,41.672 h 0.02 L 5862.7,452.93 5866,420"
              id="path2700"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2714">
            <path
              d="m 5829.31,204.609 -5.76,5.34 -4.04,37.813 31.26,-28.442 -21.46,-14.711 M 6114.16,400 h -310.9 l -2.14,20 H 5866 l 1.5,-15 h 253.94 l -7.28,-5"
              id="path2712"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2726">
            <path
              d="m 6050.18,0 h -204.21 l -21.5,201.289 4.84,3.32 L 6050.18,0"
              id="path2724"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2738">
            <path
              d="M 6198.1,0 H 6091.84 L 5850.77,219.32 6114.16,400 h 110.5 L 6198.1,0"
              id="path2736"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2750">
            <path
              d="m 6091.84,0 h -41.66 L 5829.31,204.609 5850.77,219.32 6091.84,0 m 132.82,400 h -110.5 l 7.28,5 H 6225 l -0.34,-5"
              id="path2748"
              inkscapeconnector-curvature={0}
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath20-3">
            <path
              d="m 2912.26,2760.59 -158.65,83.16 h 218.6 l 14.08,-10.34 -25.79,-2.79 -48.24,-70.03 m 79.62,73.42 -6.63,5 h 53 l -46.37,-5 m -26.48,14.74 h -221.32 l -160.26,84 -2.28,1.84 h 267.01 l 116.85,-85.84 m -17.32,18.27 -89.66,67.57 h 528.74 l 12.87,-56.57 -33.61,-3.62 h -423.79 l 5.45,-7.38 m 456.68,11.51 -11.58,56.06 h 212.96 l -7.25,-35.13 -194.13,-20.93 m 199.55,21.52 7.86,34.54 h 312.46 l -0.42,-0.05 h -310.62 l -7.6,-32.87 0.95,-1.34 -2.63,-0.28 m 772.79,29.37 -1.33,5.17 h 11.19 l -9.86,-5.17 m 19.4,10.17 h -22.02 l -10.93,42.32 -173.87,-18.74 143.74,105.58 h 309.49 L 4396.5,2939.59 m -425.5,0 h -357.69 l 29.4,129.16 h 676.23 L 4177.02,2961.8 3971,2939.59 m -363.82,0 h -215.03 l -26.69,129.16 h 268.41 l -26.69,-129.16 m -221.16,0 h -534.24 l -171.39,129.16 h 676.23 l 29.4,-129.16 m -544.27,0 h -266.44 l -161,129.16 h 251.6 l 175.84,-129.16 M 4654.83,3075 h -312.91 l 183.22,134.59 h 287.73 l 2.11,-59.34 -0.09,-0.04 -0.3,8.54 -159.76,-83.75 m -327.6,0 h -683.1 l 30.63,134.59 h 831.06 L 4327.23,3075 m -692.07,0 h -270.99 l -27.81,134.59 h 326.61 L 3635.16,3075 m -279.96,0 h -683.11 l -149.56,112.71 h 787.7 l 15.36,-45.05 9.89,14.26 -11.98,52.67 h -701.44 702.5 L 3355.2,3075 m -697.8,0 h -250.88 l -126.05,101.13 211.11,20.67 165.82,-121.8 m -504.7,83.77 0.98,27.37 2.83,-1.68 -3.81,-25.69 m 2659.88,59.04 h -276.24 l 220.34,161.85 h 200.22 l -62.02,-105.89 h -4.46 v -2.72 l -78.04,-47.71 0.2,-5.53 m -295.84,0 h -840.1 l 22.13,97.25 659.49,64.6 h 373.25 l -214.77,-161.85 m -852.08,0 h -330 l -12.47,60.36 362.28,35.49 -19.81,-95.85 m -341.97,0 h -616.65 l 603.2,59.09 13.45,-59.09 m 1641.71,174.67 h -176.62 l 44.29,33.6 161.26,15.8 -28.93,-49.4"
              id="path18-6"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,1510.82,1510.82,0,3483.33,2630)"
            spreadMethod="pad"
            id="linearGradient28-7"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#fde4a7" }}
              offset={0}
              id="stop22-5"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#fde4a7" }}
              offset="0.195397"
              id="stop24-3"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e69b68" }}
              offset={1}
              id="stop26-5"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath38-6">
            <path
              d="M 5021.45,71.0508 4750.29,77.6406 4572.26,400 h 450.98 L 5021.45,71.0508 M 4718.97,78.3984 3496.59,108.082 3494.64,400 H 4546.25 L 4718.97,78.3984 M 3469.86,108.73 2279.3,137.641 2420.2,400 h 1051.6 l -1.94,-291.27 m -1220.16,29.629 -305.83,7.43 -1.39,254.211 h 451.71 L 2249.7,138.359 M 5023.35,420 v 0 l 2.68,490.93 h 0.01 L 5023.35,420 m -126.88,0 h -335.26 l -271.12,490.93 h 591.63 L 4896.47,420 m -360.96,0 h -1041 l -3.28,490.93 h 780.61 L 4535.51,420 m -1063.57,0 h -1041 l 263.67,490.93 h 780.6 L 3471.94,420 m -1066.7,0 H 2069.26 L 2084,910.93 h 592.36 L 2405.24,420 m -462.87,0 v 0 l -2.68,490.93 v 0 L 1942.37,420 m 3083.76,509.07 v 0 l 0.11,19.481 v 0 l -0.11,-19.481 m -144.95,0 h -601.11 l -61.65,111.63 529.42,-16.77 -84.19,249.84 h 11.53 l 201.24,-186.43 4.76,-158.27 m -619.09,0 h -770.97 l -0.9,134.69 711.64,-22.54 60.23,-112.15 m -786.76,0 h -770.97 l 84.27,156.92 687.6,-21.78 -0.9,-135.14 m -788.95,0 h -601.84 l 4.74,157.57 151.5,140.35 -78.91,-121.15 611.44,-19.37 -86.93,-157.4 m -746.79,0 v 0 l -0.1,18.809 v 0 l 0.1,-18.809 m 3676.31,19.192 -374.86,242.968 h 0.05 L 5615.9,948.289 v -0.027 m -441.86,286.388 -0.15,0.1 v 0.04 l 0.15,-0.1 v -0.04 m -514.47,53.57 h -0.79 l -0.35,1.06 1.14,-1.06 m 216.7,139.43 -133.35,86.43 h 0.06 l 133.29,-86.39 v -0.04 m -149.87,97.17 h -0.05 l -106.41,68.97 v 0.04 l 106.46,-69.01"
              id="path36-2"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2303.66,-2303.66,0,3483.25,2130)"
            spreadMethod="pad"
            id="linearGradient46-9"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#fde4a7" }}
              offset={0}
              id="stop40-1"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#fde4a7" }}
              offset="0.195397"
              id="stop42-2"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e69b68" }}
              offset={1}
              id="stop44-7"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath56-0">
            <path
              d="m 695.789,615.039 -22.012,444.241 78.766,33.8 28.52,1254.23 -171.817,14.31 -16.156,326.1 360.601,12.66 38.977,-829.21 216.092,92.71 L 1284.2,957.891 695.789,615.039 m 1097.571,620.231 -0.31,42.19 0.45,-16.63 v -25.47 l -0.14,-0.09 m -0.31,42.23 -10.4,1451.97 15.02,0.53 36.7,-1430.07 -41.32,-22.43 m 298.09,150.78 38.13,1071.72 33.05,-477.38 157.87,33.63 27.24,-461.86 -107.33,-69.57 h -39.81 v -10.74 h 23.24 l -132.39,-85.8 m 513.28,422.1 -0.57,79.6 29.43,6.26 -28.86,-85.86 m 132.49,507.26 -114.97,18.24 -0.23,202.46 -22.49,3.57 -0.38,53.04 -318.37,95.05 5.8,-98.42 -151.47,24.04 16.61,466.83 755.01,-373.44 -31.76,-94.5 c -26.14,-9.38 -49.78,-25.76 -69.89,-47.6 -7.45,-8.08 -14.42,-16.91 -20.84,-26.43 -7.68,-11.35 -14.59,-23.67 -20.66,-36.82 -21.31,-46.23 -32.05,-102.7 -28.36,-163.66 0.46,-7.53 1.13,-14.99 2,-22.36 m -428.97,270.5 v 0 l -4.27,72.41 0.75,-12.83 3.52,-59.58"
              id="path54-9"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient62-3"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#6f952b" }}
              offset={0}
              id="stop58-6"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dddb43" }}
              offset={1}
              id="stop60-0"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath72-6">
            <path
              d="m 6272.02,614.789 -19.94,11.621 23.53,192.391 6.38,-2.742 -9.97,-201.27 m -451.93,263.332 -136.91,79.77 30.32,404.109 241.97,-103.81 64.35,1369.24 -212.75,-17.72 7.33,97.68 338.52,-11.88 v -631.18 l 191.26,6.95 -25.2,-508.54 -97.14,-8.09 8.47,-372.14 -441.14,4.16 30.92,-308.549 m -204.19,70.18 -374.8,242.929 0.7,0.03 374.14,-242.408 -0.04,-0.551 m 619.55,8.148 -354.61,9.43 1.72,95.941 350.3,8.31 2.59,-113.681 m -1061.41,278.241 -0.15,0.1 v 26.04 l 0.44,16.67 -40.88,22.2 36.7,1430.3 14.6,-0.51 -10.71,-1494.8 m -126.84,111.83 -0.28,0.15 0.32,72.27 -0.04,-72.42 m -170.93,81.18 -133.28,86.38 h 23.16 v 10.74 h -39.74 l -106.47,69.02 26.95,457.04 132.65,-28.26 44.01,635.61 -142.18,-22.56 5.56,94.33 -270.85,-80.87 -30.27,246.54 -3.22,12.47 433.29,214.31 -0.99,27.76 0.09,0.04 61.29,-1722.55 m -216.56,1204.53 3.27,55.49 0.76,12.83 -4.03,-68.32 v 0"
              id="path70-2"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient78-6"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#6f952b" }}
              offset={0}
              id="stop74-1"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dddb43" }}
              offset={1}
              id="stop76-8"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath166-7">
            <path
              d="m 1939.37,968.672 -1.67,305.098 v 0 l 1.67,-305.09 v -0.008 m 150.47,136.898 5.06,168.2 h 176.35 l -5.07,-7.78 -176.34,-160.42 m -296.44,124.05 -0.04,5.65 0.14,0.09 v -5.68 l -0.1,-0.06 m 487.26,58.6 h -185.33 l 1.75,58.39 0.01,0.06 h -0.02 l -17.08,-3.8 8.34,6.48 2.81,78.93 132.39,85.8 h 204.23 l -147.1,-225.86 m -343.03,0 v 0 l -0.13,22.95 0.13,-22.95 m 497.13,236.6 H 2240.1 l 107.33,69.57 0.9,-15.4 20.67,13.51 -0.6,10.2 124.56,81.36 v -1.29 h 44.67 l -102.87,-157.95 m 108.67,166.86 h -38.8 l 59.52,38.88 -4.9,-14.59 -15.82,-24.29"
              id="path164-9"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2334.48,-2334.48,0,1436.67,2150)"
            spreadMethod="pad"
            id="linearGradient174-2"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset={0}
              id="stop168-0"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset="0.0128573"
              id="stop170-2"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dc6545" }}
              offset={1}
              id="stop172-3"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath184-7">
            <path
              d="m 5615.87,947.77 -1.61,1.082 -374.04,242.338 0.82,0.04 374.86,-242.968 -0.03,-0.492 m -589.52,21.562 v 0 l 1.67,304.438 -1.67,-304.438 m -150.5,136.918 -184.13,167.52 h 179.1 l 5.03,-167.52 m 298.15,122.42 -0.11,0.07 v 6.01 l 0.15,-0.1 -0.04,-5.98 m -145.9,59.55 v 0 l 0.12,21.92 v 0.98 l -0.12,-22.9 m -157.71,0 h -194.56 l -24.58,22.37 -68.57,203.49 h 160.24 l 133.35,-86.43 2.78,-78.3 9.01,-7 -19.41,4.32 h -0.02 v -0.06 l 1.76,-58.39 m 169.2,16.52 -11.28,6.38 1.57,0.05 -0.03,6.01 0.03,-6.01 9.71,-6.43 m -313.24,220.08 h -147.29 l -39.28,116.56 59.22,-38.69 -0.6,-10.19 20.66,-13.51 0.88,14.8 106.41,-68.97"
              id="path182-5"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2334.48,2334.48,0,5529.78,2150)"
            spreadMethod="pad"
            id="linearGradient192-9"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset={0}
              id="stop186-2"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset="0.0128573"
              id="stop188-2"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dc6545" }}
              offset={1}
              id="stop190-8"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath202-9">
            <path
              d="M 4750.29,77.6406 4718.97,78.3984 4546.25,400 H 3494.64 l 1.95,-291.918 -26.73,0.648 1.94,291.27 H 2420.2 L 2279.3,137.641 2249.7,138.359 2394.19,400 h -451.71 l -0.11,20 v 0 l 0.07,-12.918 126.31,-3.961 0.51,16.879 h 335.98 l 271.12,490.93 H 2084 l 0.54,18.14 h 601.84 l 86.93,157.4 15.32,-0.48 -84.27,-156.92 h 770.97 l 0.9,135.14 13.99,-0.45 0.9,-134.69 h 770.97 l -60.23,112.15 16.56,-0.52 61.65,-111.63 h 601.11 l 0.54,-18.14 H 4290.09 L 4561.21,420 h 335.26 l 0.5,-16.879 126.31,3.961 0.07,12.918 v 0 l -0.11,-20 H 4572.26 L 4750.29,77.6406 M 3491.23,910.93 3494.51,420 h 1041 l -263.67,490.93 h -780.61 m -796.62,0 L 2430.94,420 h 1041 l 3.27,490.93 h -780.6 m 2331.43,0 h -0.01 l 0.1,18.14 v 0 l -0.09,-18.14 m -3086.35,0 v 0 l -0.1,18.14 v 0 l 0.1,-18.14 m -0.2,36.949 -0.12,20.793 v 0.008 l 0.12,-20.801 v 0 m 3086.75,0.672 v 0 l 0.11,20.781 v 0 l -0.11,-20.781 m -2936.96,138.089 0.56,18.93 176.34,160.42 -25.4,-39 -151.5,-140.35 m 2787.14,0.7 -201.24,186.43 h -11.53 l -4.87,14.45 h 0.79 l -1.14,1.06 -7.18,21.31 24.58,-22.37 h 194.56 l 0.43,-14.45 h -179.1 l 184.13,-167.52 0.57,-18.91 m 151.6,186.43 v 0 l 0.08,14.45 -0.08,-14.45 m -2756.77,0 H 2094.9 l 0.43,14.45 h 185.33 l -9.41,-14.45 m -333.55,0 v 0 l -0.07,14.45 0.07,-14.45 m 2828.45,240.31 h -23.16 -0.01 -0.06 -160.24 l -3.62,10.74 h 147.29 0.05 0.01 39.74 v -10.74 m -2338.39,0 h -204.23 -23.24 v 10.74 h 39.81 194.66 l -7,-10.74 m 109.87,168.69 h -44.67 v 1.29 l 11.67,7.62 h 38.8 l -5.8,-8.91"
              id="path200-7"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2357.9,-2357.9,0,3483.22,2156.67)"
            spreadMethod="pad"
            id="linearGradient210-3"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset={0}
              id="stop204-6"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f5c587" }}
              offset="0.0128573"
              id="stop206-1"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#dc6545" }}
              offset={1}
              id="stop208-2"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath220-9">
            <path
              d="m 673.777,1059.28 -64.531,1302.34 171.817,-14.31 -28.52,-1254.23 -78.766,-33.8"
              id="path218-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath236-4">
            <path
              d="m 992.668,1871.17 -38.977,829.21 199.319,6.99 55.75,-743.49 -216.092,-92.71"
              id="path234-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath252-8">
            <path
              d="m 2162.32,2022.62 -33.05,477.38 5.53,155.62 151.47,-24.04 33.92,-575.33 -157.87,-33.63 m 160.91,346.18 -15.29,259.34 v 0 l 15.29,-259.34 m 298.71,7.08 -21.28,3.38 -1.44,202.65 22.49,-3.57 0.23,-202.46"
              id="path250-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath268-5">
            <path
              d="m 2603.85,1929.98 -1.32,186.42 19.7,4.2 -0.29,255.28 114.97,-18.24 c 2.84,-24.06 7.84,-47.27 14.71,-69.26 l -118.34,-352.14 -29.43,-6.26"
              id="path266-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath284-3">
            <path
              d="m 2602.53,2116.4 -1.87,262.86 21.28,-3.38 0.29,-255.28 -19.7,-4.2"
              id="path282-6"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient290-1"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#94b42a" }}
              offset={0}
              id="stop286-0"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e6e751" }}
              offset={1}
              id="stop288-6"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath300-3">
            <path
              d="m 6152.92,2064.33 v 631.18 l 221.81,-7.79 -30.55,-616.44 -191.26,-6.95"
              id="path298-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath316-1">
            <path
              d="M 5955.47,1258.19 5713.5,1362 l 93.57,1247.71 212.75,17.72 -64.35,-1369.24"
              id="path314-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath332-5">
            <path
              d="m 6281.99,816.059 -6.38,2.742 10.95,89.461 -4.57,-92.203 m -40.74,140.242 -5.8,0.148 -2.59,113.681 8.39,0.2 V 956.301 m 58.86,225.559 -69.8,0.65 -8.47,372.14 97.14,8.09 -18.87,-380.88"
              id="path330-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath348-7">
            <path
              d="m 4779.54,2022.62 -132.65,28.26 34.48,584.79 142.18,22.56 -44.01,-635.61 m -152.83,50 33,559.61 v 0 l -33,-559.61"
              id="path346-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath364-5">
            <path
              d="m 1943.87,145.789 -848,20.59 L 1348.06,400 h 594.42 l 1.39,-254.211 M 1942.37,420 h -572.72 l 529.94,490.93 h 40.1 L 1942.37,420 m -2.78,509.07 h -20.41 l 20.31,18.809 0.1,-18.809"
              id="path362-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath376-9">
            <path
              d="M 1058.48,167.289 929.023,170.43 772.527,400 H 1314.28 L 1058.48,167.289 M 1336.26,420 H 758.895 L 701.266,504.539 571.895,420 701.266,504.539 1314,904.961 l 9.21,5.969 h 552.68 L 1336.26,420 m 559.58,509.07 h -544.65 l 1.39,0.899 -1.12,18.883 374.15,242.408 28.07,-1.32 39.82,25.8 -0.1,13.88 0.1,0.06 v -13.94 l 87.56,58.03 h 56.64 l 1.67,-305.098 -43.53,-39.602 m 41.79,359.15 h -34.76 l 34.63,22.95 0.13,-22.95"
              id="path374-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath388-7">
            <path
              d="m 1095.87,166.379 -37.39,0.91 L 1314.28,400 H 772.527 l -13.632,20 h 577.365 l 539.63,490.93 h -552.68 l 27.98,18.14 h 544.65 l 43.53,39.602 0.12,-20.793 -20.31,-18.809 h 20.41 l 0.1,-18.14 h -40.1 L 1369.65,420 h 572.72 l 0.11,-20 H 1348.06 L 1095.87,166.379 M 1937.7,1273.77 h -56.64 l 21.81,14.45 h 34.76 l 0.07,-14.45"
              id="path386-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath400-5">
            <path
              d="m 5028.22,1310.14 v 0.98 0 -0.98 m -159.59,36.47 v 0.06 h 0.02 -0.02 v -0.06"
              id="path398-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath412-5">
            <path
              d="m 5023.35,420 h -126.88 l -14.75,490.93 h 144.31 L 5023.35,420 m 2.78,509.07 h -144.95 l -4.76,158.27 149.82,-138.789 -0.11,-19.481"
              id="path410-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath424-7">
            <path
              d="m 5026.35,969.332 -150.5,136.918 -5.03,167.52 h 157.2 l -1.67,-304.438 m 1.75,318.888 h -157.71 l -1.76,58.39 v 0.06 h 0.02 l 19.41,-4.32 30.63,-23.79 0.57,-11.06 108.96,3.62 v -0.98 l -0.12,-21.92"
              id="path422-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath436-4">
            <path
              d="m 4896.97,403.121 -0.5,16.879 h 126.88 l -0.07,-12.918 -126.31,-3.961 m 129.06,507.809 h -144.31 l -0.54,18.14 h 144.95 l -0.1,-18.14 m 0.21,37.621 -149.82,138.789 -0.57,18.91 150.5,-136.918 -0.11,-20.781 m 1.78,325.219 h -157.2 l -0.43,14.45 h 157.71 l -0.08,-14.45"
              id="path434-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath448-0">
            <path
              d="M 5613.65,56.6719 5021.45,71.0508 5023.24,400 h 595.15 l 205.16,-190.051 0.92,-8.66 L 5613.65,56.6719 M 5596.8,420 h -573.45 l 2.69,490.93 h 40.82 L 5596.8,420 m -549.53,509.07 h -21.14 l 0.11,19.481 21.03,-19.481"
              id="path446-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath460-8">
            <path
              d="M 5819.51,247.762 5652.17,400 h 151.09 l 16.25,-152.238 M 5801.12,420 h -170.94 l -539.62,490.93 h 553.63 l 9.19,-5.961 v -0.008 l 175.51,-114.699 33.81,-337.332 -66,8.742 h -0.03 L 5801.12,420 M 5616.2,929.07 h -545.6 l -44.25,40.262 1.67,304.438 h 58.3 l 87.57,-58.03 v 13 l 0.11,-0.07 -0.09,-12.93 39.82,-25.8 26.49,1.25 374.04,-242.338 1.61,-1.082 -1.06,-17.801 1.39,-0.899 m -551.69,359.15 h -36.41 l 0.12,22.95 0.09,-0.05 11.28,-6.38 24.92,-16.52"
              id="path458-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath472-8">
            <path
              d="M 5823.55,209.949 5618.39,400 h -595.15 l 0.11,20 h 573.45 l -529.94,490.93 h -40.82 l 0.09,18.14 h 21.14 l -21.03,19.481 0.11,20.781 44.25,-40.262 h 545.6 l 27.99,-18.14 H 5090.56 L 5630.18,420 h 170.94 l 2.14,-20 h -151.09 l 167.34,-152.238 4.04,-37.813 M 5086.32,1273.77 h -58.3 l 0.08,14.45 h 36.41 l 21.81,-14.45"
              id="path470-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath484-4">
            <path
              d="m 6234.48,482.539 4.84,39.52 27.02,-17.661 -31.86,-21.859"
              id="path482-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath496-1">
            <path
              d="m 2097.08,1346.61 v 0.06 h -0.01 0.02 l -0.01,-0.06"
              id="path494-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath508-9">
            <path
              d="m 2069.26,420 h -126.89 l -2.68,490.93 H 2084 L 2069.26,420 m 15.28,509.07 h -144.95 l -0.1,18.809 149.79,138.761 -4.74,-157.57"
              id="path506-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath520-0">
            <path
              d="m 1939.37,968.68 -1.67,305.09 h 157.2 l -5.06,-168.2 -150.47,-136.89 m 155.96,319.54 h -157.7 l -0.13,22.95 110.62,-3.67 0.57,11.06 31.3,24.31 17.08,3.8 h 0.01 v -0.06 l -1.75,-58.39"
              id="path518-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath532-8">
            <path
              d="m 2068.75,403.121 -126.31,3.961 -0.07,12.918 h 126.89 l -0.51,-16.879 M 2084,910.93 h -144.31 l -0.1,18.14 h 144.95 L 2084,910.93 m -144.51,36.949 -0.12,20.801 150.47,136.89 -0.56,-18.93 -149.79,-138.761 m 155.41,325.891 h -157.2 l -0.07,14.45 h 157.7 l -0.43,-14.45"
              id="path530-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath780-2">
            <path
              d="M 0,209.621 V 1549.01 L 210.555,1585.97 243.98,874.891 673.777,1059.28 695.789,615.039 0,209.621 m 1834.37,1090.309 -36.7,1430.07 -15.02,-0.53 -0.94,130.96 -311.73,92.31 5.51,242.09 -547.185,45.59 25.386,-540.04 -360.601,-12.66 16.156,-326.1 -264.836,22.06 12.801,474.63 L 0,2987.36 V 4000 h 351.234 l 1560.886,-764.57 8.34,-1888.76 -86.09,-46.74"
              id="path778-6"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient786-6"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#636f24" }}
              offset={0}
              id="stop782-4"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#c4a431" }}
              offset={1}
              id="stop784-9"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath796-5">
            <path
              d="M 0,1549.01 V 2987.36 L 357.211,2858.31 344.41,2383.68 172.387,2398.01 210.555,1585.97 0,1549.01"
              id="path794-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath812-7">
            <path
              d="m 243.98,874.891 -33.425,711.079 112.879,19.81 20.976,777.9 264.836,-22.06 L 673.777,1059.28 243.98,874.891"
              id="path810-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath828-7">
            <path
              d="m 210.555,1585.97 -38.168,812.04 172.023,-14.33 -20.976,-777.9 -112.879,-19.81"
              id="path826-2"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient834-7"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#838723" }}
              offset={0}
              id="stop830-2"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#caac3a" }}
              offset={1}
              id="stop832-2"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath844-6">
            <path
              d="m 953.691,2700.38 -25.386,540.04 547.185,-45.59 -5.51,-242.09 -282.69,83.72 h -58.95 l 24.67,-329.09 -199.319,-6.99"
              id="path842-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath860-0">
            <path
              d="M 69.8672,91.9297 541.289,400 h 0.004 L 69.8672,91.9297 M 571.895,420 v 0 l 129.371,84.539 v 0 L 571.895,420"
              id="path858-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath872-1">
            <path
              d="m 541.293,400 h -0.004 l 30.606,20 v 0 l -30.602,-20"
              id="path870-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath910-9">
            <path
              d="m 7000,190.621 -727.98,424.168 9.97,201.27 248.09,-106.438 24.93,530.429 L 7000,1002.34 V 190.621 M 5133.45,1299.7 l -86.25,46.82 0.04,72.42 8.03,1816.54 L 6616.06,4000 H 7000 V 2763.85 l -274.7,-74.07 40.41,859.79 -612.79,-296.75 v -557.31 l -338.52,11.88 24.67,329.07 h -58.96 l -594.42,-176.03 -0.94,-130.94 -14.6,0.51 -36.7,-1430.3 m 1185.53,263.04 25.2,508.54 149.9,5.45 v -499.39 l -175.1,-14.6"
              id="path908-4"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient916-9"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#636f24" }}
              offset={0}
              id="stop912-0"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#c4a431" }}
              offset={1}
              id="stop914-9"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath926-1">
            <path
              d="m 7000,1002.34 -444.99,237.71 16.16,343.71 -77.09,-6.42 v 499.39 l 202.75,7.37 28.47,605.68 274.7,74.07 V 1002.34"
              id="path924-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath942-1">
            <path
              d="m 6344.18,2071.28 30.55,616.44 -221.81,7.79 v 557.31 l 612.79,296.75 -40.41,-859.79 -231.22,-62.35 v -550.7 l -149.9,-5.45"
              id="path940-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath958-9">
            <path
              d="m 6494.08,2076.73 v 550.7 l 231.22,62.35 -28.47,-605.68 -202.75,-7.37"
              id="path956-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath974-7">
            <path
              d="m 6530.08,709.621 -248.09,106.438 4.57,92.203 33.44,273.408 -19.89,0.19 18.87,380.88 175.1,14.6 V 1272.6 l 60.93,-32.55 -24.93,-530.429"
              id="path972-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath990-6">
            <path
              d="m 6555.01,1240.05 -60.93,32.55 v 304.74 l 77.09,6.42 -16.16,-343.71"
              id="path988-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1030-6">
            <path
              d="m 2583.82,2932.75 -3.49,1.84 h 1.21 l 2.29,-1.84 m -8.52,6.84 h -4.52 l -246.41,129.16 h 89.93 l 161,-129.16 M 2406.52,3075 h -94.06 l -159.76,83.75 v 0.02 l 3.81,25.69 2.24,-1.33 2.2,26.46 h 313.23 l 17.4,-12.79 -211.11,-20.67 126.05,-101.13 m 95.03,128.52 -8.05,6.07 h 128.56 -124.77 l 4.26,-6.07 m 204.49,14.29 h -223.45 l -214.78,161.85 h 1018.04 l 23.39,-102.76 -603.2,-59.09 m -243.06,0 h -301.34 l 0.23,2.82 -85,53.14 h -4.37 -153.13 l -200.81,105.89 h 524.09 l 220.33,-161.85 m 2584.94,55.96 h -153.04 l 62.02,105.89 h 291.83 l -200.81,-105.89 m -1725.73,4.4 -20.97,101.49 h 396.89 l -13.64,-66 -362.28,-35.49 m 376.58,36.89 14.71,64.6 h 644.78 l -659.49,-64.6 m 1574.27,77.42 H 4964.4 l 28.93,49.4 -161.26,-15.8 20.82,15.8 12.28,17.48 305.73,224.58 h 654.87 l -552.73,-291.46 m -1550.21,0 h -6.44 l 66.34,291.46 h 1352.55 l -12.25,-9.23 6.48,9.23 H 3784.58 l -19.51,-85.73 16.1,-23.21 H 4990.72 L 4854.09,3472.04 H 3734.57 l -16.54,-72.64 4.8,-6.92 m -22.07,0 h -402.19 l -60.22,291.46 h 522.63 l -60.22,-291.46 m -417.83,0 h -4.6 l 3.47,4.99 1.13,-4.99 m -1069.54,0 h -519.13 l -552.73,291.46 h 686.89 l 309.55,-227.39 10.31,-14.67 65.11,-49.4 m 1051.43,79.56 H 2145.23 L 2008.61,3575 H 3220 l 16.11,23.21 28.71,-126.17 m -39.53,173.67 -8.7,38.23 H 1871.66 l 8.57,-12.19 -16.18,12.19 h 1352.54 l 8.7,-38.23 m 2632.21,54.97 H 5193.68 L 5601.17,4000 h 823.98 L 5857.5,3700.68 m -700.01,0 H 3786.54 l 68.13,299.32 h 1700.01 l -397.19,-299.32 m -1393.06,0 H 3234.89 L 3173.04,4000 h 653.24 l -61.85,-299.32 m -551.65,0 H 1841.84 L 1444.64,4000 h 1700.01 l 68.13,-299.32 m -1407.14,0 H 1109.79 L 542.145,4000 h 856.015 l 407.48,-299.32"
              id="path1028-3"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,1510.82,1510.82,0,3483.33,2630)"
            spreadMethod="pad"
            id="linearGradient1038-9"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#e0a972" }}
              offset={0}
              id="stop1032-4"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e0a972" }}
              offset="0.195397"
              id="stop1034-8"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#ca724a" }}
              offset={1}
              id="stop1036-1"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1090-2">
            <path
              d="m 5021.06,0 h -227.9 L 4750.29,77.6406 5021.45,71.0508 5021.06,0 M 4761.08,0 H 3497.31 L 3496.59,108.082 4718.97,78.3984 4761.08,0 M 3469.13,0 H 2205.37 L 2279.3,137.641 3469.86,108.73 3469.13,0 M 2173.29,0 h -228.63 l -0.79,145.789 305.83,-7.43 L 2173.29,0"
              id="path1088-9"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2303.66,-2303.66,0,3483.25,2130)"
            spreadMethod="pad"
            id="linearGradient1098-3"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#e0a972" }}
              offset={0}
              id="stop1092-9"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e0a972" }}
              offset="0.195397"
              id="stop1094-0"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#ca724a" }}
              offset={1}
              id="stop1096-8"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1108-8">
            <path
              d="m 4793.16,0 h -32.08 l -42.11,78.3984 31.32,-0.7578 L 4793.16,0 M 3497.31,0 h -28.18 l 0.73,108.73 26.73,-0.648 L 3497.31,0 M 2205.37,0 h -32.08 l 76.41,138.359 29.6,-0.718 L 2205.37,0"
              id="path1106-5"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2357.9,-2357.9,0,3483.22,2156.67)"
            spreadMethod="pad"
            id="linearGradient1116-0"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#d7935d" }}
              offset={0}
              id="stop1110-9"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#d7935d" }}
              offset="0.0128573"
              id="stop1112-6"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#c34c34" }}
              offset={1}
              id="stop1114-3"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1126-8">
            <path
              d="M 1944.66,0 H 916.266 l 179.604,166.379 848,-20.59 L 1944.66,0"
              id="path1124-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1138-6">
            <path
              d="M 874.602,0 H 0 V 46.2695 L 69.8672,91.9297 541.293,400 H 772.527 L 929.023,170.43 1058.48,167.289 874.602,0 M 758.895,420 h -187 L 701.266,504.539 758.895,420"
              id="path1136-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1150-1">
            <path
              d="m 916.266,0 h -41.664 l 183.878,167.289 37.39,-0.91 L 916.266,0 M 772.527,400 H 541.293 l 30.602,20 h 187 l 13.632,-20"
              id="path1148-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1162-9">
            <path
              d="m 5845.97,0 h -824.91 l 0.39,71.0508 592.2,-14.3789 L 5824.47,201.289 5845.97,0"
              id="path1160-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1174-4">
            <path
              d="m 7000,0 h -801.89 l 26.56,400 h 201.42 L 7000,24.9609 V 0 m -604.51,420 h -168.66 l 7.65,62.539 31.86,21.859 L 6395.49,420"
              id="path1172-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1186-1">
            <path
              d="m 6426.09,400 h -201.42 l 0.32,4.922 0.01,0.078 1.83,15 h 168.66 l 30.6,-20"
              id="path1184-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1202-3">
            <path
              d="m 3839.3,2647.5 h -79.35 l 93.03,68.33 h 116.68 L 3839.3,2647.5 m -79.35,0 h -17.48 c -2.94,2.88 -5.93,5.68 -8.96,8.37 -35.44,31.48 -77.2,49.99 -121.02,50.19 v 0 h -1.48 v 0 c -18.55,-0.09 -36.33,-3.46 -53.07,-9.72 l 4.44,19.49 h 288.25 l -90.68,-68.33 m -271.78,0 h -4.63 c -2.94,2.88 -5.93,5.68 -8.96,8.37 -9.03,8.02 -18.46,15.2 -28.24,21.44 l -7.96,38.52 h 122.57 l -4.12,-19.91 c -24.95,-9.53 -47.55,-25.48 -66.89,-46.48 -0.59,-0.64 -1.18,-1.29 -1.77,-1.94 m -258.93,0 H 3128 l -130.36,68.33 h 148.71 l 86.99,-63.9 c -0.78,-0.82 -1.56,-1.65 -2.33,-2.49 -0.59,-0.64 -1.18,-1.29 -1.77,-1.94 m 4.16,4.5 -84.7,63.83 h 288.25 l 8.66,-38.05 c -28.41,17.99 -59.66,28.13 -92.05,28.28 v 0 h -1.47 v 0 c -45.56,-0.22 -86.47,-20.24 -118.69,-54.06 m 741.03,66.33 h -118.05 l 170.73,125.42 h 186.57 l -239.25,-125.42 m -120.48,0 h -291 l 28.55,125.42 h 2.97 l 3.46,-4.74 h 416.15 l -160.13,-120.68 m -292.49,0 h -123.6 l -25.91,125.42 h 175.43 l -25.92,-125.42 m -125.08,0 h -291 l -153.5,115.68 46.37,5 h 365 l 3.46,4.74 h 1.12 l 28.55,-125.42 m -293.44,0 h -150.07 l -80.61,42.26 48.24,70.03 25.79,2.79 156.65,-115.08 m 1080.28,130.42 h -189.3 l 116.85,85.84 h 225 l 1.33,-5.17 -153.88,-80.67 m -630.27,0 h -0.32 l 11.68,51.3 2.63,0.28 5.32,-7.55 h 473.17 l -30.01,-22.62 3.12,4.24 h -459.45 l -6.14,-25.65 m -4.54,0 h -177.49 l -6.16,29.78 194.13,20.93 -10.48,-50.71 m -187.55,25.65 h -34.44 l 33.61,3.62 0.83,-3.62 m 732.58,54.56 3.98,5.58 h -213.21 l 0.42,0.05 h 216.28 l -7.47,-5.63 m 241.04,10.63 h -216.9 l 32.1,23.58 173.87,18.74 10.93,-42.32 m -226.94,0 H 3971 l 206.02,22.21 -29.48,-22.21"
              id="path1200-0"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,1510.82,1510.82,0,3483.33,2630)"
            spreadMethod="pad"
            id="linearGradient1210-4"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#feedb9" }}
              offset={0}
              id="stop1204-4"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#feedb9" }}
              offset="0.195397"
              id="stop1206-4"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#ecb580" }}
              offset={1}
              id="stop1208-4"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1220-7">
            <path
              d="m 4747.84,1023.93 -529.42,16.77 -128.71,233.07 h 573.94 l 84.19,-249.84 m -545.98,17.29 -711.64,22.54 -1.4,210.01 h 588.14 l 124.9,-232.55 m -725.63,22.99 -687.6,21.78 100.85,187.78 h 588.15 l -1.4,-209.56 m -702.92,22.26 -611.44,19.37 78.91,121.15 50.49,46.78 h 585.47 l -103.43,-187.3 m 1885.47,201.75 h -577.06 l -124.73,225.86 h 458.77 l 242.67,-224.8 0.35,-1.06 m -589.58,0 h -580.48 l -1.5,225.86 h 460.68 l 121.3,-225.86 m -591.48,0 h -580.47 l 121.3,225.86 h 460.68 l -1.51,-225.86 m -592.99,0 h -577.85 l 243.81,225.86 h 458.77 l -124.73,-225.86 m 1519.43,236.6 h -453.11 l -87.22,157.95 h 369.83 l 170.5,-157.95 m -462.03,0 h -454.99 l -1.05,157.95 h 371.2 l 84.84,-157.95 m -462.82,0 h -454.99 l 84.83,157.95 h 371.21 l -1.05,-157.95 m -463.92,0 h -453.11 l 170.51,157.95 h 369.83 l -87.23,-157.95 m 1208.66,166.86 h -365.14 l -77.21,139.79 h 291.44 l 150.91,-139.79 m -371.53,0 h -366.49 l -0.93,139.79 h 292.33 l 75.09,-139.79 m -372.1,0 h -366.49 l 75.08,139.79 h 292.34 l -0.93,-139.79 m -372.88,0 H 2742.4 l 150.9,139.79 h 291.45 l -77.21,-139.79 m 1254.8,69.07 -0.11,0.08 v 0.04 l 0.11,-0.08 v -0.04 m -296.81,77.78 h -287.72 l -63.5,114.99 h 227.1 l 124.12,-114.99 m -291.88,0 h -288.6 l -0.77,114.99 h 227.62 l 61.75,-114.99 m -292.25,0 h -288.6 l 61.76,114.99 h 227.6 l -0.76,-114.99 m -292.76,0 h -287.72 l 124.12,114.99 h 227.1 l -63.5,-114.99 m 868.32,120.18 h -0.04 l -107.11,69.43 h 0.05 l 103.67,-67.19 3.43,-2.24 m -121.17,0 h -224.36 l -43.96,79.61 h 182.38 l 85.94,-79.61 m -226.69,0 h -224.85 l -0.53,79.61 h 182.62 l 42.76,-79.61 m -226.9,0 h -224.85 l 42.76,79.61 h 182.62 l -0.53,-79.61 m -227.19,0 h -224.36 l 85.95,79.61 h 182.38 l -43.97,-79.61 m 591.23,82.97 h -180.63 l -25.01,45.31 h 156.72 l 48.92,-45.31 m -181.7,0 H 3483.7 l -0.31,45.31 h 156.82 l 24.33,-45.31 m -181.79,0 h -180.84 l 24.34,45.31 h 156.8 l -0.3,-45.31 m -181.92,0 h -180.62 l 48.91,45.31 h 156.74 l -25.03,-45.31 m 494.86,46.81 h -155.92 l -13.27,24.01 12.89,-24.01 h -156.01 l -0.16,24.01 -0.16,-24.01 h -156.01 l 12.9,24.01 -13.26,-24.01 h -155.94 l 25.91,24.01 h -47.6 669.26 -48.53 l 25.9,-24.01"
              id="path1218-6"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2303.66,-2303.66,0,3483.25,2130)"
            spreadMethod="pad"
            id="linearGradient1228-3"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#feedb9" }}
              offset={0}
              id="stop1222-1"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#feedb9" }}
              offset="0.195397"
              id="stop1224-7"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#ecb580" }}
              offset={1}
              id="stop1226-5"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1238-9">
            <path
              d="m 2605.05,1761.37 -0.63,89.01 28.86,85.86 230.47,49.1 -0.16,142.44 c 3.48,-2.33 7,-4.55 10.57,-6.64 l 12.65,-170.1 -281.65,-182.91 v -6.7 l -0.11,-0.06 m 431.81,280.31 h -0.04 l -0.53,74.39 c 14.51,8.02 28.04,18.32 40.37,30.59 9.8,9.76 18.84,20.76 27.01,32.86 7.18,10.62 13.69,22.08 19.47,34.27 7.2,15.23 13.25,31.61 18.01,48.91 l 5.52,-146.73 -109.81,-70.03 v -4.26 m 96.07,439.27 c -7.65,22.41 -17.25,43.45 -28.47,62.72 -7.11,12.22 -14.89,23.73 -23.22,34.42 -0.63,0.81 -1.26,1.61 -1.9,2.41 -4.16,5.21 -8.45,10.22 -12.87,15.01 -5.83,6.33 -11.89,12.29 -18.14,17.84 -2.92,2.59 -5.89,5.1 -8.89,7.52 -33.65,27.04 -72.37,42.66 -112.85,42.66 -18.12,0 -35.52,-3.13 -51.93,-9.02 l 31.76,94.5 220.53,-109.08 5.98,-158.98"
              id="path1236-6"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient1244-2"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#96b32b" }}
              offset={0}
              id="stop1240-1"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e6e752" }}
              offset={1}
              id="stop1242-7"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1254-8">
            <path
              d="m 4362.34,1760.8 -0.11,0.07 v 7.26 l -281.64,182.9 2.48,33.26 280.44,-59.75 -1.17,-163.74 m -310.03,200.94 -102.44,66.4 0.74,0.03 101.7,-66.43 m -121.73,79.94 h -0.05 v 4.26 l -110.52,70.48 6.36,168.94 c 8.51,-28.29 20.1,-54.62 34.13,-78.21 7.24,-12.19 15.15,-23.65 23.62,-34.27 7.59,-9.51 15.62,-18.35 24.05,-26.43 7.39,-7.09 15.07,-13.6 23.02,-19.48 l -0.61,-85.29 m 298.51,319.79 c -0.12,3.95 -0.3,7.91 -0.55,11.9 -3.69,60.97 -21.29,117.43 -48.22,163.67 -7.65,13.14 -16.06,25.46 -25.12,36.83 -9.64,12.08 -20.03,23.09 -31,32.84 -35.64,31.65 -77.66,50.19 -121.75,50.19 v 0 0 0 c -46.99,0 -89.08,-21.06 -121.81,-56.62 -7.46,-8.09 -14.43,-16.92 -20.86,-26.43 -7.67,-11.36 -14.58,-23.67 -20.65,-36.82 -1.23,-2.68 -2.43,-5.39 -3.59,-8.13 l 4.16,110.72 542.89,268.52 3.22,-12.47 30.27,-246.54 -47.52,-14.18 -0.34,-48.99 -48.06,-7.62 -0.23,-202.46 -90.84,-14.41"
              id="path1252-5"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient1260-7"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#96b32b" }}
              offset={0}
              id="stop1256-4"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e6e752" }}
              offset={1}
              id="stop1258-1"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1298-8">
            <path
              d="m 2266.18,1265.99 5.07,7.78 h 3.48 l -8.55,-7.78 m 24.44,22.23 h -9.96 l 147.1,225.86 h 111.12 l -248.26,-225.86 m 260.07,236.6 h -115.93 l 102.87,157.95 h 186.68 l -173.62,-157.95 m 183.41,166.86 h -190.67 l 15.82,24.29 4.9,14.59 4.64,3.03 15.04,-0.71 21.33,13.94 -0.11,14.55 0.11,0.06 v -14.61 l 125.21,84.65 h 157.39 L 2734.1,1691.68 m 161.41,146.85 H 2740.8 l 154.26,104.28 11.41,7.46 -0.19,3.25 h 115.63 l -126.4,-114.99 m 132.11,120.18 h -117.18 l 106.35,69.46 8.3,-0.39 11.77,7.69 -0.02,2.85 h 0.02 v -2.85 l 4.15,2.85 h 74.12 l -87.51,-79.61 m 91.19,82.97 h -72.92 l 66.01,45.31 h 56.72 l -49.81,-45.31 m 51.47,46.81 h -56.19 l 34.97,24.01 h 47.6 l -26.38,-24.01"
              id="path1296-5"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2334.48,-2334.48,0,1436.67,2150)"
            spreadMethod="pad"
            id="linearGradient1306-9"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset={0}
              id="stop1300-7"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset="0.0128573"
              id="stop1302-5"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e88a50" }}
              offset={1}
              id="stop1304-3"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1316-8">
            <path
              d="m 4651.25,1310.59 -223.68,203.49 h 155.11 l 68.57,-203.49 m -72.19,214.23 h -163.31 l -173.61,157.95 h 231.35 v 1.92 l 66.29,-43.31 v 0 l 39.28,-116.56 m -116.28,166.86 h -230.43 l -153.67,139.79 h 158.33 l 125.22,-84.65 v 14.01 l 0.11,-0.08 -0.09,-13.93 21.32,-13.94 15.04,0.71 64.17,-41.91 m -236.2,146.85 h -155.64 l -126.4,114.99 h 116.58 l -0.19,-3.25 11.39,-7.44 v -0.02 l 154.26,-104.28 m -169.66,120.18 h -118.09 l -87.51,79.61 h 75.05 l 4.16,-2.85 v 2.85 h 0.03 l -0.02,-2.85 11.77,-7.69 7.5,0.36 107.11,-69.43 m -135.43,82.97 h -73.85 l -49.82,45.31 h 57.67 l 66,-45.31 m -68.2,46.81 h -57.12 l -26.38,24.01 h 48.53 l 34.97,-24.01"
              id="path1314-8"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2334.48,2334.48,0,5529.78,2150)"
            spreadMethod="pad"
            id="linearGradient1324-3"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset={0}
              id="stop1318-1"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset="0.0128573"
              id="stop1320-8"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e88a50" }}
              offset={1}
              id="stop1322-9"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1334-6">
            <path
              d="m 4218.42,1040.7 -16.56,0.52 -124.9,232.55 h -588.14 l 1.4,-210.01 -13.99,0.45 1.4,209.56 h -588.15 l -100.85,-187.78 -15.32,0.48 103.43,187.3 h -585.47 l -50.49,-46.78 25.4,39 8.55,7.78 h -3.48 l 9.41,14.45 h 9.96 l 248.26,225.86 h -111.12 l 7,10.74 h 115.93 l 173.62,157.95 h -186.68 l 5.8,8.91 h 190.67 l 153.66,139.79 h -157.39 l 10.43,7.06 h 154.71 l 126.4,114.99 h -115.63 l -0.14,2.38 4.3,2.81 h 117.18 l 87.51,79.61 h -74.12 l 4.88,3.36 h 72.92 l 49.81,45.31 h -56.72 l 2.19,1.5 h 56.19 l 26.38,24.01 -25.91,-24.01 h 155.94 l 13.26,24.01 -12.9,-24.01 h 156.01 l 0.16,24.01 0.16,-24.01 h 156.01 l -12.89,24.01 13.27,-24.01 h 155.92 l -25.9,24.01 26.38,-24.01 h 57.12 l 2.2,-1.5 h -57.67 l 49.82,-45.31 h 73.85 l 4.88,-3.36 h -75.05 l 87.51,-79.61 h 118.09 0.04 l 4.3,-2.81 -0.14,-2.38 h -116.58 l 126.4,-114.99 h 155.64 l 10.43,-7.06 h -158.33 l 153.67,-139.79 h 230.43 l 10.71,-6.99 v -1.92 h -231.35 l 173.61,-157.95 h 163.31 l 3.62,-10.74 h -155.11 l 223.68,-203.49 7.18,-21.31 -242.67,224.8 h -458.77 l 124.73,-225.86 h 577.06 l 4.87,-14.45 h -573.94 l 128.71,-233.07 m -731.2,473.38 1.5,-225.86 h 580.48 l -121.3,225.86 h -460.68 m -468.67,0 -121.3,-225.86 h 580.47 l 1.51,225.86 h -460.68 m -467.86,0 -243.81,-225.86 h 577.85 l 124.73,225.86 h -458.77 m 1313.14,168.69 87.22,-157.95 h 453.11 l -170.5,157.95 h -369.83 m -377.74,0 1.05,-157.95 h 454.99 l -84.84,157.95 h -371.2 m -376.94,0 -84.83,-157.95 h 454.99 l 1.05,157.95 h -371.21 m -376.36,0 -170.51,-157.95 h 453.11 l 87.23,157.95 h -369.83 m 1048.91,148.7 77.21,-139.79 h 365.14 l -150.91,139.79 H 3781.7 m -296.6,0 0.93,-139.79 h 366.49 l -75.09,139.79 H 3485.1 m -296.09,0 -75.08,-139.79 h 366.49 l 0.93,139.79 h -292.34 m -295.71,0 -150.9,-139.79 h 365.14 l 77.21,139.79 H 2893.3 m 821.01,122.05 63.5,-114.99 h 287.72 l -124.12,114.99 h -227.1 m -230.03,0 0.77,-114.99 h 288.6 l -61.75,114.99 h -227.62 m -229.72,0 -61.76,-114.99 h 288.6 l 0.76,114.99 h -227.6 m -229.52,0 -124.12,-114.99 h 287.72 l 63.5,114.99 h -227.1 m 642.43,84.8 43.96,-79.61 h 224.36 l -85.94,79.61 h -182.38 m -183.75,0 0.53,-79.61 h 224.85 l -42.76,79.61 h -182.62 m -183.61,0 -42.76,-79.61 h 224.85 l 0.53,79.61 h -182.62 m -183.51,0 -85.95,-79.61 h 224.36 l 43.97,79.61 H 3116.6 m 524,48.67 25.01,-45.31 h 180.63 l -48.92,45.31 H 3640.6 m -157.21,0 0.31,-45.31 h 180.84 l -24.33,45.31 h -156.82 m -157.14,0 -24.34,-45.31 h 180.84 l 0.3,45.31 h -156.8 m -157.13,0 -48.91,-45.31 h 180.62 l 25.03,45.31 h -156.74 m 761.44,-48.67 h -0.03 v 3.36 h 0.05 l -0.02,-3.36 m -893.7,0 h -0.02 l -0.02,3.36 h 0.04 v -3.36"
              id="path1332-4"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0,-2357.9,-2357.9,0,3483.22,2156.67)"
            spreadMethod="pad"
            id="linearGradient1342-3"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset={0}
              id="stop1336-3"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#f7d49e" }}
              offset="0.0128573"
              id="stop1338-3"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e88a50" }}
              offset={1}
              id="stop1340-8"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1352-6">
            <path
              d="m 2633.28,1936.24 118.34,352.14 c 8.4,-26.92 19.59,-52.01 33.02,-74.6 7.25,-12.19 15.15,-23.65 23.62,-34.27 4.83,-6.06 9.85,-11.85 15.03,-17.34 2.95,-3.13 5.96,-6.16 9.02,-9.09 9.92,-9.52 20.37,-17.99 31.28,-25.3 l 0.16,-142.44 -230.47,-49.1"
              id="path1350-0"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            spreadMethod="pad"
            id="linearGradient1358-4"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#a5be32" }}
              offset={0}
              id="stop1354-8"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#e9eb5c" }}
              offset={1}
              id="stop1356-8"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1368-8">
            <path
              d="m 4319.93,2375.88 0.23,202.46 48.06,7.62 -1.45,-202.64 -46.84,-7.44"
              id="path1366-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1384-6">
            <path
              d="m 4363.51,1924.54 -280.44,59.75 8.6,115.63 c 22.39,8.53 42.89,22.23 60.84,40.11 9.8,9.76 18.85,20.76 27.02,32.85 7.19,10.62 13.69,22.09 19.46,34.28 20.68,43.7 31.84,96.79 30.1,154.31 l 90.84,14.41 -0.29,-255.28 45.2,-9.63 -1.33,-186.43"
              id="path1382-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1400-3">
            <path
              d="m 4364.84,2110.97 -45.2,9.63 0.29,255.28 46.84,7.44 -1.93,-272.35"
              id="path1398-0"
            />
          </clipPath>
          <linearGradient
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            spreadMethod="pad"
            id="linearGradient1406-3"
          >
            <stop
              style={{ stopOpacity: 1, stopColor: "#b1c833" }}
              offset={0}
              id="stop1402-0"
            />
            <stop
              style={{ stopOpacity: 1, stopColor: "#edee66" }}
              offset={1}
              id="stop1404-9"
            />
          </linearGradient>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1476-2">
            <path
              d="m 3387.25,2138.99 v 0 0 c 44.08,0 83.85,18.54 115.64,50.2 3.46,3.45 6.84,7.06 10.11,10.81 v 0 c -3.27,-3.75 -6.64,-7.36 -10.11,-10.81 -31.78,-31.66 -71.56,-50.2 -115.64,-50.2"
              id="path1474-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1488-4">
            <path
              d="m 3483.54,2647.5 v 0 c -2.95,2.88 -5.93,5.68 -8.97,8.37 -9.02,8.02 -18.46,15.19 -28.23,21.44 v 0 c 9.78,-6.24 19.21,-13.42 28.24,-21.44 3.03,-2.69 6.02,-5.49 8.96,-8.37 m -37.93,30.27 c -28.41,17.99 -59.67,28.14 -92.05,28.29 v 0 c 32.39,-0.15 63.64,-10.29 92.05,-28.28 v -0.01"
              id="path1486-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1500-5">
            <path
              d="m 3486,2645.05 c -0.82,0.82 -1.64,1.64 -2.46,2.45 v 0 c 0.83,-0.81 1.65,-1.63 2.46,-2.45 v 0"
              id="path1498-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1512-4">
            <path
              d="m 3446.34,2677.31 c -0.24,0.16 -0.48,0.31 -0.73,0.46 v 0.01 c 0.24,-0.16 0.49,-0.31 0.73,-0.47 v 0"
              id="path1510-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1524-9">
            <path
              d="m 3483.54,2647.5 h -31.04 l -6.16,29.81 c 9.77,-6.25 19.21,-13.42 28.23,-21.44 3.04,-2.69 6.02,-5.49 8.97,-8.37 m -31.04,0 h -213.13 l -5.97,4.5 c 32.22,33.82 73.13,53.84 118.69,54.06 h 1.47 c 32.38,-0.15 63.64,-10.3 92.05,-28.29 l 6.89,-30.27 m -213.13,0 h -10.13 c 0.59,0.65 1.18,1.3 1.77,1.94 0.77,0.84 1.55,1.67 2.33,2.49 l 6.03,-4.43"
              id="path1522-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1536-2">
            <path
              d="m 3491.1,2225 h -258.93 c -7.59,9.78 -14.71,20.25 -21.29,31.31 -27.78,46.7 -45.96,104.12 -49.73,166.21 -3.2,52.78 4.42,102.18 20.36,144.5 l 32.61,0.19 14.53,-288.88 h 229.17 c 3.76,-7.57 7.76,-14.92 11.98,-22.02 6.58,-11.06 13.7,-21.53 21.3,-31.31"
              id="path1534-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1548-7">
            <path
              d="m 3181.51,2567.02 c 2.47,6.57 5.14,12.96 8,19.17 6.07,13.15 12.98,25.46 20.66,36.82 5.91,8.76 12.29,16.94 19.07,24.49 h 10.13 213.13 31.04 c 0.82,-0.81 1.64,-1.63 2.46,-2.45 -5.98,-6.86 -11.63,-14.22 -16.91,-22.04 -7.67,-11.36 -14.59,-23.67 -20.65,-36.82 -2.53,-5.47 -4.9,-11.1 -7.12,-16.85 l -227.27,-0.79 0.07,-1.34 -32.61,-0.19"
              id="path1546-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1560-5">
            <path
              d="m 3387.25,2138.99 c -47,0 -91.64,21.06 -128.7,56.62 -8.43,8.08 -16.47,16.91 -24.05,26.43 -0.78,0.98 -1.56,1.97 -2.33,2.96 h 258.93 c 0.77,-0.99 1.55,-1.98 2.33,-2.96 6.23,-7.82 12.76,-15.18 19.57,-22.04 -3.27,-3.75 -6.65,-7.36 -10.11,-10.81 -31.79,-31.66 -71.56,-50.2 -115.65,-50.2"
              id="path1558-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1572-8">
            <path
              d="m 3457.82,2278.33 h -229.17 l -14.53,288.88 -0.07,1.34 227.27,0.79 c -1.28,-3.29 -2.5,-6.63 -3.67,-10.01 l -213.23,-0.74 2.07,-41.09 h -4.25 v -7.5 h 4.63 l 11.16,-221.66 h 215.02 c 1.54,-3.38 3.13,-6.71 4.77,-10.01"
              id="path1570-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1584-2">
            <path
              d="M 3453.05,2288.34 H 3238.03 L 3226.87,2510 h 198.03 c -3.58,-20.13 -5.49,-41.25 -5.54,-63.06 v 0 -1.71 0 c 0.02,-7.49 0.25,-15.06 0.72,-22.71 2.95,-48.54 14.71,-94.24 32.97,-134.18 m -26.73,229.16 h -199.83 l -2.07,41.09 213.23,0.74 c -4.61,-13.33 -8.41,-27.3 -11.33,-41.83"
              id="path1582-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1596-9">
            <path
              d="m 3424.9,2510 h -198.03 -4.63 v 7.5 h 4.25 199.83 c -0.5,-2.48 -0.97,-4.98 -1.42,-7.5"
              id="path1594-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1608-6">
            <path
              d="m 3452.5,2647.5 v 0 l -6.89,30.27 c 0.25,-0.15 0.49,-0.3 0.73,-0.46 l 6.16,-29.81 m -213.13,0 v 0 m 0,0 -6.03,4.43 c 0.02,0.02 0.04,0.05 0.06,0.07 l 5.97,-4.5"
              id="path1606-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1620-0">
            <path
              d="m 3790.81,2225 h -0.01 c 6.41,9.78 12.26,20.25 17.49,31.32 5.85,12.35 10.93,25.45 15.18,39.19 0,-0.01 0,-0.01 0,-0.01 -4.24,-13.74 -9.33,-26.83 -15.17,-39.18 -5.24,-11.07 -11.08,-21.54 -17.49,-31.32"
              id="path1618-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1632-1">
            <path
              d="m 3646.17,2138.99 v 0 0 c 44.09,0 83.85,18.54 115.64,50.2 9.81,9.76 18.85,20.76 27.02,32.85 0.67,0.98 1.32,1.97 1.97,2.96 h 0.01 c -0.65,-0.99 -1.31,-1.98 -1.97,-2.96 -8.18,-12.09 -17.22,-23.09 -27.02,-32.85 -31.79,-31.66 -71.56,-50.2 -115.65,-50.2"
              id="path1630-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1644-5">
            <path
              d="m 3742.47,2647.5 h -0.01 c -2.94,2.88 -5.93,5.68 -8.96,8.37 -35.44,31.48 -77.19,49.99 -121.02,50.19 h 0.01 c 43.82,-0.2 85.58,-18.71 121.02,-50.19 3.03,-2.69 6.02,-5.49 8.96,-8.37"
              id="path1642-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1656-1">
            <path
              d="m 3825.15,2500.39 c -6.76,24.99 -15.9,48.57 -27.01,70.24 v 0 c 11.11,-21.66 20.25,-45.24 27.01,-70.24 v 0"
              id="path1654-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1668-8">
            <path
              d="m 3798.14,2570.63 c -2.72,5.3 -5.56,10.5 -8.52,15.57 -7.65,13.14 -16.06,25.45 -25.12,36.83 -6.98,8.74 -14.34,16.92 -22.04,24.47 h 0.01 c 7.69,-7.55 15.06,-15.73 22.03,-24.47 9.06,-11.38 17.47,-23.69 25.13,-36.83 2.95,-5.07 5.79,-10.27 8.51,-15.57 v 0"
              id="path1666-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1680-0">
            <path
              d="M 3742.46,2647.5 H 3500 3488.17 c 0.59,0.65 1.18,1.3 1.77,1.94 19.34,21 41.94,36.95 66.89,46.48 l -10,-48.42 11.11,48.84 c 16.74,6.26 34.52,9.63 53.07,9.72 h 1.47 c 43.83,-0.2 85.58,-18.71 121.02,-50.19 3.03,-2.69 6.02,-5.49 8.96,-8.37"
              id="path1678-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1692-4">
            <path
              d="m 3790.8,2225 h -258.92 c 6.41,9.78 12.26,20.25 17.49,31.32 3.36,7.1 6.47,14.44 9.31,22.01 h 200.16 l 6.92,292.11 32.38,0.19 c 11.11,-21.67 20.25,-45.25 27.01,-70.24 -9.69,-31.34 -15.02,-66.01 -15.09,-102.65 v 0 -1.68 0 c 0.01,-7.49 0.25,-15.06 0.71,-22.69 1.64,-27.01 6.01,-53.12 12.7,-77.86 -4.25,-13.74 -9.33,-26.84 -15.18,-39.19 -5.23,-11.07 -11.08,-21.54 -17.49,-31.32"
              id="path1690-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1704-2">
            <path
              d="m 3539.7,2569.68 c -2.87,5.64 -5.87,11.15 -9,16.52 -7.65,13.14 -16.06,25.45 -25.12,36.83 -6.23,7.8 -12.77,15.16 -19.58,22.02 0.72,0.82 1.45,1.64 2.17,2.45 h 254.29 c 7.7,-7.55 15.06,-15.73 22.04,-24.47 9.06,-11.38 17.47,-23.69 25.12,-36.83 2.96,-5.07 5.8,-10.27 8.52,-15.57 l -32.38,-0.19 v 0.02 l -226.06,-0.78"
              id="path1702-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1716-8">
            <path
              d="m 3646.17,2138.99 c -46.99,0 -91.64,21.06 -128.7,56.62 -1.5,1.44 -2.99,2.9 -4.47,4.39 5.98,6.86 11.63,14.22 16.91,22.04 0.66,0.98 1.32,1.97 1.97,2.96 h 258.92 c -0.65,-0.99 -1.3,-1.98 -1.97,-2.96 -8.17,-12.09 -17.21,-23.09 -27.02,-32.85 -31.79,-31.66 -71.55,-50.2 -115.64,-50.2"
              id="path1714-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1728-2">
            <path
              d="m 3758.84,2278.33 h -200.16 c 1.24,3.3 2.42,6.63 3.56,10.01 h 186.69 l 5.26,221.66 h 3.37 v 7.5 h -3.2 l 1.02,42.93 -210.8,-0.73 c -1.58,3.37 -3.21,6.7 -4.88,9.98 l 226.06,0.78 v -0.02 l -6.92,-292.11"
              id="path1726-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1740-4">
            <path
              d="m 3748.93,2288.34 h -186.69 c 11.16,33.24 17.34,70.46 17.4,110 v 1.24 c -0.01,7.57 -0.25,15.23 -0.72,22.95 -1.85,30.53 -7.18,59.92 -15.43,87.47 h 190.7 l -5.26,-221.66 m 5.43,229.16 h -193.2 c -4.73,14.66 -10.29,28.76 -16.58,42.2 l 210.8,0.73 -1.02,-42.93"
              id="path1738-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1752-2">
            <path
              d="m 3757.56,2510 h -3.37 -190.7 c -0.75,2.52 -1.53,5.02 -2.33,7.5 h 193.2 3.2 v -7.5"
              id="path1750-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1764-0">
            <path
              d="m 3546.83,2647.5 10,48.42 c 0.37,0.15 0.74,0.29 1.11,0.42 l -11.11,-48.84"
              id="path1762-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1776-2">
            <path
              d="m 3531.88,2225 v 0 c 6.41,9.78 12.25,20.25 17.49,31.32 3.36,7.1 6.47,14.44 9.31,22.01 v 0 c -2.84,-7.57 -5.95,-14.91 -9.31,-22.01 -5.23,-11.07 -11.08,-21.54 -17.49,-31.32"
              id="path1774-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1788-9">
            <path
              d="m 3539.69,2569.68 c -2.86,5.64 -5.87,11.15 -8.99,16.52 -7.66,13.14 -16.07,25.45 -25.12,36.83 -6.24,7.8 -12.77,15.16 -19.58,22.02 v 0 c 6.81,-6.86 13.35,-14.22 19.58,-22.02 9.06,-11.38 17.47,-23.69 25.12,-36.83 3.13,-5.37 6.13,-10.88 9,-16.52 h -0.01"
              id="path1786-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1800-8">
            <path
              d="m 3513,2200 v 0 c 5.98,6.86 11.62,14.22 16.91,22.04 0.66,0.98 1.32,1.97 1.97,2.96 v 0 c -0.65,-0.99 -1.31,-1.98 -1.97,-2.96 -5.28,-7.82 -10.93,-15.18 -16.91,-22.04"
              id="path1798-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1812-3">
            <path
              d="m 3558.68,2278.33 v 0 c 1.23,3.3 2.42,6.63 3.55,10.01 h 0.01 c -1.14,-3.38 -2.32,-6.71 -3.56,-10.01 m -14.11,281.37 c -1.58,3.37 -3.2,6.7 -4.88,9.98 h 0.01 c 1.67,-3.28 3.3,-6.61 4.88,-9.98 h -0.01"
              id="path1810-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1824-1">
            <path
              d="m 3562.24,2288.34 h -0.01 c 13.42,39.94 19.64,85.64 16.69,134.19 -1.85,30.53 -7.19,59.92 -15.44,87.47 h 0.01 c 8.25,-27.55 13.58,-56.94 15.43,-87.47 0.47,-7.72 0.71,-15.38 0.72,-22.95 v -1.24 c -0.06,-39.54 -6.24,-76.76 -17.4,-110 m -1.08,229.16 h -0.01 c -4.72,14.66 -10.28,28.76 -16.58,42.2 h 0.01 c 6.29,-13.44 11.85,-27.54 16.58,-42.2"
              id="path1822-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1836-3">
            <path
              d="m 3563.49,2510 h -0.01 c -0.75,2.52 -1.53,5.02 -2.33,7.5 h 0.01 c 0.8,-2.48 1.58,-4.98 2.33,-7.5"
              id="path1834-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1848-0">
            <path
              d="m 3531.88,2225 h -40.78 c -7.6,9.78 -14.72,20.25 -21.3,31.31 -4.22,7.1 -8.22,14.45 -11.98,22.02 h 28.33 7.5 65.03 c -2.84,-7.57 -5.95,-14.91 -9.31,-22.01 -5.24,-11.07 -11.08,-21.54 -17.49,-31.32"
              id="path1846-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1860-9">
            <path
              d="m 3441.32,2569.34 c 2.22,5.75 4.59,11.38 7.12,16.85 6.06,13.15 12.98,25.46 20.65,36.82 5.28,7.82 10.93,15.18 16.91,22.04 6.81,-6.86 13.34,-14.22 19.58,-22.02 9.05,-11.38 17.46,-23.69 25.12,-36.83 3.12,-5.37 6.13,-10.88 8.99,-16.52 l -98.37,-0.34"
              id="path1858-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1872-9">
            <path
              d="m 3513,2200 c -6.81,6.86 -13.34,14.22 -19.57,22.04 -0.78,0.98 -1.56,1.97 -2.33,2.96 h 40.78 c -0.65,-0.99 -1.31,-1.98 -1.97,-2.96 -5.29,-7.82 -10.93,-15.18 -16.91,-22.04"
              id="path1870-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1884-9">
            <path
              d="m 3558.68,2278.33 h -65.03 v 10.01 h 68.58 c -1.13,-3.38 -2.32,-6.71 -3.55,-10.01 m -72.53,0 h -28.33 c -1.64,3.3 -3.23,6.63 -4.77,10.01 h 33.1 v -10.01 m -48.5,281 c 1.17,3.38 2.39,6.72 3.67,10.01 l 98.37,0.34 c 1.68,-3.28 3.3,-6.61 4.88,-9.98 l -50.92,-0.18 v 7.2 h -7.5 v -7.22 l -48.5,-0.17"
              id="path1882-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1896-3">
            <path
              d="m 3562.23,2288.34 h -68.58 V 2510 h 69.83 c 8.25,-27.55 13.59,-56.94 15.44,-87.47 2.95,-48.55 -3.27,-94.25 -16.69,-134.19 m -76.08,0 h -33.1 c -18.26,39.94 -30.02,85.64 -32.97,134.18 -0.47,7.65 -0.7,15.22 -0.72,22.71 v 1.71 c 0.05,21.81 1.96,42.93 5.54,63.06 h 61.25 v -221.66 m 75,229.16 h -67.5 v 42.02 l 50.92,0.18 c 6.3,-13.44 11.86,-27.54 16.58,-42.2 m -75,0 h -59.83 c 2.92,14.53 6.72,28.5 11.33,41.83 l 48.5,0.17 v -42"
              id="path1894-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1908-0">
            <path
              d="m 3493.65,2278.33 h -7.5 v 10.01 221.66 h -61.25 c 0.45,2.52 0.92,5.02 1.42,7.5 h 59.83 v 42 7.22 h 7.5 v -7.2 -42.02 h 67.5 c 0.8,-2.48 1.58,-4.98 2.33,-7.5 h -69.83 v -221.66 -10.01"
              id="path1906-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1920-6">
            <path
              d="m 3036.29,2116.07 v 0.01 c 14.51,8.01 28.04,18.31 40.36,30.58 9.8,9.77 18.84,20.77 27.02,32.86 7.18,10.62 13.69,22.08 19.46,34.27 7.21,15.24 13.26,31.62 18.01,48.93 l 0.01,-0.02 c -4.76,-17.3 -10.81,-33.68 -18.01,-48.91 -5.78,-12.19 -12.29,-23.65 -19.47,-34.27 -8.17,-12.1 -17.21,-23.1 -27.01,-32.86 -12.33,-12.27 -25.86,-22.57 -40.37,-30.59 m 96.64,364.87 c -7.65,22.41 -17.25,43.47 -28.47,62.74 -7.12,12.21 -14.89,23.72 -23.22,34.41 8.33,-10.69 16.11,-22.2 23.22,-34.42 11.22,-19.27 20.82,-40.31 28.47,-62.72 v -0.01"
              id="path1918-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1932-4">
            <path
              d="m 3141.15,2262.7 -0.01,0.02 c 9.82,35.75 14.08,75.46 11.54,117.29 -2.16,35.55 -9.04,69.57 -19.75,100.93 v 0.01 c 10.71,-31.36 17.6,-65.39 19.76,-100.94 2.54,-41.84 -1.73,-81.56 -11.54,-117.31"
              id="path1930-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1944-0">
            <path
              d="m 2874.16,2121.14 c -3.57,2.09 -7.09,4.31 -10.57,6.64 v 0 c 3.48,-2.33 7,-4.55 10.57,-6.64 v 0"
              id="path1942-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1956-6">
            <path
              d="m 2863.59,2127.78 c -10.91,7.31 -21.36,15.78 -31.28,25.3 -3.06,2.93 -6.07,5.96 -9.02,9.09 2.95,-3.13 5.96,-6.16 9.01,-9.09 9.92,-9.51 20.38,-17.99 31.29,-25.3 v 0"
              id="path1954-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1968-6">
            <path
              d="m 2961,2096.47 c -14.55,0 -28.88,2.02 -42.82,5.86 v 0.01 c 13.94,-3.85 28.27,-5.87 42.82,-5.86 11.72,0 23.13,1.3 34.17,3.82 v -0.01 c -11.04,-2.51 -22.45,-3.82 -34.17,-3.82 m 35.64,4.17 v 0.01 c 6.72,1.6 13.29,3.65 19.71,6.12 v -0.01 c -6.42,-2.47 -12.99,-4.52 -19.71,-6.12 m -79.97,2.12 c -6.63,1.89 -13.16,4.19 -19.6,6.89 v 0 c 6.44,-2.69 12.97,-5 19.6,-6.89 v 0"
              id="path1966-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1980-5">
            <path
              d="m 3016.35,2106.76 v 0.01 c 2.75,1.06 5.46,2.19 8.15,3.41 v -0.01 c -2.69,-1.21 -5.4,-2.35 -8.15,-3.41"
              id="path1978-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath1992-9">
            <path
              d="m 2884.89,2115.28 c -3.62,1.83 -7.2,3.78 -10.73,5.86 v 0 c 3.53,-2.07 7.11,-4.03 10.73,-5.86 v 0"
              id="path1990-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2004-7">
            <path
              d="m 2897.07,2109.65 c -4.1,1.72 -8.17,3.6 -12.18,5.63 v 0 c 4.01,-2.03 8.08,-3.91 12.18,-5.63 v 0 m 127.43,0.52 v 0.01 c 4,1.8 7.93,3.77 11.79,5.9 v -0.01 c -3.86,-2.13 -7.79,-4.1 -11.79,-5.9"
              id="path2002-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2016-8">
            <path
              d="m 2995.17,2100.29 v 0.01 c 0.49,0.11 0.98,0.23 1.47,0.35 v -0.01 c -0.49,-0.12 -0.98,-0.23 -1.47,-0.35 m -76.99,2.04 c -0.51,0.14 -1.01,0.28 -1.51,0.43 v 0 c 0.5,-0.14 1,-0.28 1.51,-0.42 v -0.01"
              id="path2014-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2028-9">
            <path
              d="m 3066.47,2595.51 c -5.83,6.33 -11.89,12.29 -18.14,17.84 -2.92,2.6 -5.89,5.1 -8.89,7.52 3,-2.42 5.97,-4.93 8.89,-7.52 6.25,-5.55 12.31,-11.51 18.14,-17.84"
              id="path2026-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2040-6">
            <path
              d="m 2772.97,2351.91 -36.06,5.73 c -0.87,7.37 -1.54,14.83 -2,22.36 -3.69,60.96 7.05,117.43 28.36,163.66 6.07,13.15 12.98,25.47 20.66,36.82 6.42,9.52 13.39,18.35 20.84,26.43 20.11,21.84 43.75,38.22 69.89,47.6 l -25.6,-76.17 h -8.91 l 1.62,-21.72 -68.8,-204.71"
              id="path2038-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2052-2">
            <path
              d="m 2751.62,2288.38 c -6.87,21.99 -11.87,45.2 -14.71,69.26 l 36.06,-5.73 -21.35,-63.53"
              id="path2050-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2064-6">
            <path
              d="m 2841.77,2556.62 -1.62,21.72 h 8.91 l -7.29,-21.72"
              id="path2062-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2076-3">
            <path
              d="m 3036.29,2116.08 -2.92,409.77 -175.78,52.49 h -8.53 l 25.6,76.17 c 16.41,5.89 33.81,9.02 51.93,9.02 40.48,0 79.2,-15.62 112.85,-42.66 3,-2.42 5.97,-4.92 8.89,-7.52 6.25,-5.55 12.31,-11.51 18.14,-17.84 4.42,-4.79 8.71,-9.8 12.87,-15.01 0.64,-0.8 1.27,-1.6 1.9,-2.41 8.33,-10.69 16.1,-22.2 23.22,-34.41 11.22,-19.27 20.82,-40.33 28.47,-62.74 l 8.21,-218.22 c -4.75,-17.31 -10.8,-33.69 -18.01,-48.93 -5.77,-12.19 -12.28,-23.65 -19.46,-34.27 -8.18,-12.09 -17.22,-23.09 -27.02,-32.86 -12.32,-12.27 -25.85,-22.57 -40.36,-30.58"
              id="path2074-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2088-1">
            <path
              d="m 3141.14,2262.72 -8.21,218.22 c 10.71,-31.36 17.59,-65.38 19.75,-100.93 2.54,-41.83 -1.72,-81.54 -11.54,-117.29"
              id="path2086-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2100-9">
            <path
              d="m 2874.16,2121.14 c -3.57,2.09 -7.09,4.31 -10.57,6.64 l -0.16,137.6 10.73,-144.24 m 22.11,2.06 -25.87,438.87 0.41,-7.08 25.46,-431.79 m -38.28,215.22 -85.02,13.49 68.8,204.71 16.22,-218.2"
              id="path2098-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2112-1">
            <path
              d="m 2863.59,2127.78 c -10.91,7.31 -21.37,15.79 -31.29,25.3 -3.05,2.93 -6.06,5.96 -9.01,9.09 -5.18,5.49 -10.2,11.28 -15.03,17.34 -8.47,10.62 -16.37,22.08 -23.62,34.27 -13.43,22.59 -24.62,47.68 -33.02,74.6 l 21.35,63.53 85.02,-13.49 5.44,-73.04 0.16,-137.6"
              id="path2110-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2124-9">
            <path
              d="m 2961,2096.48 c -14.55,-0.01 -28.88,2.01 -42.82,5.86 l -5.29,87.3 82.28,10.74 V 2100.3 c -11.04,-2.52 -22.45,-3.82 -34.17,-3.82 m 35.64,4.17 v 101.43 l -84.62,-11.04 -0.69,-0.1 5.34,-88.18 c -6.63,1.89 -13.16,4.2 -19.6,6.89 l -0.8,13.55 -25.46,431.79 143.27,-41.75 1.55,-277.8 c -2.91,-0.39 -5.57,-1.97 -7.27,-4.83 h -4.75 c -2.86,-3.75 -2.58,-7.75 -0.93,-11.87 l 4.53,-0.69 c 0.97,-3 2.85,-5.17 5.43,-5.17 1.08,0 2.12,0.19 3.11,0.56 l 0.6,-106.67 c -6.42,-2.47 -12.99,-4.52 -19.71,-6.12 m -87.49,114.49 v 0 l 86.75,12.42 v 266.48 l -105.97,22.24 19.22,-301.14"
              id="path2122-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2136-0">
            <path
              d="m 3016.35,2106.77 -0.6,106.67 c 3.34,1.26 6.04,4.57 6.99,9.4 1.23,6.26 -0.93,12.7 -5.63,12.7 -0.5,0 -0.99,-0.03 -1.48,-0.1 l -1.55,277.8 -143.27,41.75 -0.41,7.08 151.21,-45.15 2.89,-406.74 c -2.69,-1.22 -5.4,-2.35 -8.15,-3.41"
              id="path2134-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2148-5">
            <path
              d="m 2884.89,2115.28 c -3.62,1.83 -7.2,3.79 -10.73,5.86 l -10.73,144.24 -5.44,73.04 -16.22,218.2 7.29,21.72 h 8.53 l 27.3,-463.06"
              id="path2146-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2160-7">
            <path
              d="m 2897.07,2109.65 c -4.1,1.72 -8.17,3.6 -12.18,5.63 l -27.3,463.06 175.78,-52.49 2.92,-409.77 c -3.86,-2.13 -7.79,-4.1 -11.79,-5.9 l -2.89,406.74 -151.21,45.15 25.87,-438.87 0.8,-13.55"
              id="path2158-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2172-4">
            <path
              d="m 2909.15,2215.14 -19.22,301.14 0.54,-8.48 95.82,-18.98 0.46,-260.56 9.15,-0.7 -9.15,0.7 -77.76,-10.56 0.16,-2.56 m 0,244.74 2.96,-43.73 h 62.6 l 1.6,36.4 -67.16,7.33 m -2.33,0 3.04,-43.73 h 2.25 l -2.96,43.73 h -2.33"
              id="path2170-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2184-0">
            <path
              d="m 2995.9,2227.56 v 0 l -9.15,0.7 -0.46,260.56 -95.82,18.98 -0.54,8.48 105.97,-22.24 v -266.48"
              id="path2182-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2196-2">
            <path
              d="m 2909.15,2215.14 v 0 l -0.16,2.56 77.76,10.56 9.15,-0.7 -86.75,-12.42"
              id="path2194-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2208-6">
            <path
              d="m 3007.21,2218.05 -4.53,0.69 c -1.65,4.12 -1.93,8.12 0.93,11.87 h 4.75 c -0.71,-1.19 -1.25,-2.61 -1.58,-4.25 -0.55,-2.83 -0.37,-5.85 0.43,-8.31"
              id="path2206-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2220-0">
            <path
              d="m 3012.64,2212.88 c -2.58,0 -4.46,2.17 -5.43,5.17 -0.8,2.46 -0.98,5.48 -0.43,8.31 0.33,1.64 0.87,3.06 1.58,4.25 1.7,2.86 4.36,4.44 7.27,4.83 0.49,0.07 0.98,0.1 1.48,0.1 4.7,0 6.86,-6.44 5.63,-12.7 -0.95,-4.83 -3.65,-8.14 -6.99,-9.4 -0.99,-0.37 -2.03,-0.56 -3.11,-0.56 m -0.25,19.88 c -2.13,-1.22 -3.8,-3.42 -4.45,-6.71 -1.05,-5.36 0.99,-11.53 5.01,-11.53 3.61,0 6.84,2.57 8.22,6.97 -1.51,-2.93 -4.07,-4.59 -6.87,-4.59 -3.73,0 -5.62,5.72 -4.65,10.68 0.45,2.29 1.45,3.98 2.74,5.18 m 7.1,0.46 c -1.33,0 -2.57,-0.83 -2.91,-2.59 -0.35,-1.76 0.32,-3.8 1.65,-3.8 1.32,0 2.5,1.04 2.84,2.81 0.35,1.76 -0.26,3.58 -1.58,3.58"
              id="path2218-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2232-2">
            <path
              d="m 3012.95,2214.52 c -4.02,0 -6.06,6.17 -5.01,11.53 0.65,3.29 2.32,5.49 4.45,6.71 -1.29,-1.2 -2.29,-2.89 -2.74,-5.18 -0.97,-4.96 0.92,-10.68 4.65,-10.68 2.8,0 5.36,1.66 6.87,4.59 -1.38,-4.4 -4.61,-6.97 -8.22,-6.97"
              id="path2230-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2244-2">
            <path
              d="m 3018.23,2226.83 c -1.33,0 -2,2.04 -1.65,3.8 0.34,1.76 1.58,2.59 2.91,2.59 1.32,0 1.93,-1.82 1.58,-3.58 -0.34,-1.77 -1.52,-2.81 -2.84,-2.81"
              id="path2242-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2256-5">
            <path
              d="m 2974.71,2416.15 h -62.6 l -2.96,43.73 67.16,-7.33 -1.6,-36.4"
              id="path2254-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2268-2">
            <path
              d="m 2912.11,2416.15 h -2.25 l -3.04,43.73 h 2.33 l 2.96,-43.73"
              id="path2266-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2280-0">
            <path
              d="m 2995.17,2100.3 v 100.08 l -82.28,-10.74 5.29,-87.3 c -0.51,0.14 -1.01,0.28 -1.51,0.42 l -5.34,88.18 0.69,0.1 84.62,11.04 v -101.43 c -0.49,-0.12 -0.98,-0.24 -1.47,-0.35"
              id="path2278-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2292-8">
            <path
              d="m 4229.08,2361.47 c -0.12,3.95 -0.3,7.91 -0.54,11.9 -3.69,60.97 -21.3,117.43 -48.22,163.67 -7.66,13.14 -16.07,25.46 -25.12,36.83 -9.65,12.08 -20.03,23.09 -31,32.84 -35.64,31.65 -77.66,50.19 -121.75,50.19 v 0 0 c 44.09,0 86.11,-18.54 121.75,-50.19 10.97,-9.75 21.36,-20.76 31,-32.84 9.06,-11.37 17.47,-23.69 25.12,-36.83 26.93,-46.24 44.53,-102.7 48.22,-163.67 0.25,-3.99 0.43,-7.95 0.55,-11.9 h -0.01"
              id="path2290-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2304-8">
            <path
              d="m 4091.67,2099.92 v 0 c 22.39,8.54 42.89,22.23 60.83,40.11 9.81,9.76 18.85,20.76 27.03,32.85 7.18,10.62 13.69,22.09 19.46,34.28 20.68,43.7 31.83,96.79 30.09,154.31 h 0.01 c 1.74,-57.52 -9.42,-110.61 -30.1,-154.31 -5.77,-12.19 -12.27,-23.66 -19.46,-34.28 -8.17,-12.09 -17.22,-23.09 -27.02,-32.85 -17.95,-17.88 -38.45,-31.58 -60.84,-40.11"
              id="path2302-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2316-4">
            <path
              d="m 4037.59,2089.84 v 0 c 3.66,0.01 7.3,0.16 10.91,0.43 v 0 c -3.61,-0.27 -7.24,-0.42 -10.91,-0.43 m 12.39,0.55 v 0 c 6.57,0.55 13.04,1.53 19.38,2.9 v 0 c -6.34,-1.37 -12.81,-2.35 -19.38,-2.9"
              id="path2314-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2328-9">
            <path
              d="m 4081.4,2096.41 v 0 c 3.46,1.05 6.89,2.22 10.27,3.51 v 0 c -3.38,-1.29 -6.81,-2.46 -10.27,-3.51"
              id="path2326-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2340-9">
            <path
              d="m 4069.36,2093.29 v 0 c 4.06,0.88 8.08,1.92 12.04,3.12 v 0 c -3.96,-1.2 -7.98,-2.24 -12.04,-3.12"
              id="path2338-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2352-2">
            <path
              d="m 4048.5,2090.27 v 0 c 0.49,0.04 0.98,0.07 1.48,0.12 v 0 c -0.5,-0.05 -0.99,-0.09 -1.48,-0.12"
              id="path2350-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2364-4">
            <path
              d="m 3931.19,2126.97 c -7.95,5.88 -15.63,12.39 -23.02,19.48 -8.43,8.08 -16.46,16.92 -24.05,26.43 -8.47,10.62 -16.38,22.08 -23.62,34.27 -14.03,23.59 -25.62,49.92 -34.13,78.21 l 0.88,23.36 c 7.31,27.84 11.28,58.02 11.32,89.68 v 1.15 c -0.01,7.58 -0.25,15.25 -0.72,22.98 -0.86,14.13 -2.46,28.01 -4.75,41.58 l 2.44,64.79 c 1.16,2.74 2.36,5.45 3.59,8.13 6.07,13.15 12.98,25.46 20.65,36.82 6.43,9.51 13.4,18.34 20.86,26.43 32.73,35.56 74.82,56.62 121.81,56.62 44.09,0 86.11,-18.54 121.75,-50.19 10.97,-9.75 21.35,-20.76 31,-32.84 9.05,-11.37 17.46,-23.69 25.12,-36.83 26.92,-46.24 44.53,-102.7 48.22,-163.67 0.24,-3.99 0.42,-7.95 0.54,-11.9 l -119.37,-18.95 17.54,235.82 h -17.43 l -175.8,-52.49 -2.83,-398.88"
              id="path2362-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2376-9">
            <path
              d="m 3826.37,2285.36 c -1.01,3.35 -1.98,6.73 -2.9,10.14 1.35,4.35 2.61,8.75 3.78,13.22 l -0.88,-23.36 m 6.73,178.75 c -2.09,12.37 -4.76,24.49 -7.95,36.28 3.04,9.85 6.51,19.36 10.39,28.51 l -2.44,-64.79"
              id="path2374-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2388-3">
            <path
              d="m 4091.67,2099.92 18.04,242.6 119.37,18.95 c 1.74,-57.52 -9.41,-110.61 -30.09,-154.31 -5.77,-12.19 -12.28,-23.66 -19.46,-34.28 -8.18,-12.09 -17.22,-23.09 -27.03,-32.85 -17.94,-17.88 -38.44,-31.57 -60.83,-40.11"
              id="path2386-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2400-0">
            <path
              d="m 4037.59,2089.84 h -1.48 c -21.99,0.1 -43.46,4.82 -63.87,13.47 v 97.07 l 82.27,-10.74 -6.01,-99.37 c -3.61,-0.27 -7.25,-0.42 -10.91,-0.43 m 12.39,0.55 6.08,100.55 -0.68,0.1 -84.62,11.04 v -98.14 c -6.68,2.9 -13.24,6.22 -19.67,9.94 l 0.56,99.56 c 0.99,-0.37 2.04,-0.56 3.12,-0.56 2.57,0 4.46,2.17 5.43,5.17 l 4.52,0.69 c 1.66,4.12 1.93,8.12 -0.92,11.87 h -4.76 v 0 c -1.7,2.86 -4.36,4.44 -7.27,4.83 l 1.55,277.8 143.26,41.74 -27.22,-461.69 c -6.34,-1.37 -12.81,-2.35 -19.38,-2.9 m -78.49,137.17 v 0 l 86.75,-12.42 0.17,2.56 v 0 l 19.06,298.58 -105.98,-22.24 v -266.48"
              id="path2398-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2412-0">
            <path
              d="m 3951.09,2113.88 c -2.73,1.58 -5.44,3.24 -8.13,4.96 l 2.83,398.08 151.21,45.15 -0.42,-7.09 -143.26,-41.74 -1.55,-277.8 c -0.49,0.07 -0.98,0.1 -1.48,0.1 -4.69,0 -6.86,-6.44 -5.62,-12.7 0.95,-4.83 3.64,-8.14 6.98,-9.4 l -0.56,-99.56"
              id="path2410-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2424-9">
            <path
              d="m 4081.4,2096.41 28.42,481.93 h 17.43 l -17.54,-235.82 -18.04,-242.6 c -3.38,-1.29 -6.81,-2.46 -10.27,-3.51"
              id="path2422-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2436-3">
            <path
              d="m 4069.36,2093.29 27.22,461.69 0.42,7.09 -151.21,-45.15 -2.83,-398.08 c -3.98,2.56 -7.91,5.27 -11.77,8.13 l 2.83,398.88 175.8,52.49 -28.42,-481.93 c -3.96,-1.2 -7.98,-2.24 -12.04,-3.12"
              id="path2434-5"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2448-1">
            <path
              d="m 4058.41,2217.7 -77.76,10.56 -9.16,-0.7 9.16,0.7 0.46,260.56 95.81,18.98 0.55,8.48 -19.06,-298.58 m -0.17,242.18 -2.96,-43.73 h 2.26 l 3.05,43.73 h -2.35 m 0,0 -67.15,-7.33 1.6,-36.4 h 62.59 l 2.96,43.73"
              id="path2446-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2460-4">
            <path
              d="m 3971.49,2227.56 v 0 266.48 l 105.98,22.24 -0.55,-8.48 -95.81,-18.98 -0.46,-260.56 -9.16,-0.7"
              id="path2458-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2472-1">
            <path
              d="m 4058.24,2215.14 -86.75,12.42 9.16,0.7 77.76,-10.56 v 0 l -0.17,-2.56"
              id="path2470-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2484-6">
            <path
              d="m 3960.2,2218.05 c 0.79,2.46 0.97,5.48 0.42,8.31 -0.33,1.64 -0.87,3.06 -1.58,4.25 v 0 h 4.76 c 2.85,-3.75 2.58,-7.75 0.92,-11.87 l -4.52,-0.69"
              id="path2482-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2496-4">
            <path
              d="m 3954.77,2212.88 c -1.08,0 -2.13,0.19 -3.12,0.56 -3.34,1.26 -6.03,4.57 -6.98,9.4 -1.24,6.26 0.93,12.7 5.62,12.7 0.5,0 0.99,-0.03 1.48,-0.1 2.91,-0.39 5.57,-1.97 7.27,-4.83 0.71,-1.19 1.25,-2.61 1.58,-4.25 0.55,-2.83 0.37,-5.85 -0.42,-8.31 -0.97,-3 -2.86,-5.17 -5.43,-5.17 m -8.54,8.61 c 1.39,-4.4 4.61,-6.97 8.22,-6.97 4.03,0 6.07,6.17 5.01,11.53 -0.65,3.29 -2.32,5.49 -4.44,6.71 1.29,-1.2 2.27,-2.89 2.72,-5.18 0.98,-4.96 -0.9,-10.68 -4.63,-10.68 -2.81,0 -5.37,1.66 -6.88,4.59 m 1.68,11.73 c -1.32,0 -1.93,-1.82 -1.58,-3.58 0.35,-1.77 1.52,-2.81 2.85,-2.81 1.32,0 1.99,2.04 1.65,3.8 -0.35,1.76 -1.59,2.59 -2.92,2.59"
              id="path2494-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2508-2">
            <path
              d="m 3954.45,2214.52 c -3.61,0 -6.83,2.57 -8.22,6.97 1.51,-2.93 4.07,-4.59 6.88,-4.59 3.73,0 5.61,5.72 4.63,10.68 -0.45,2.29 -1.43,3.98 -2.72,5.18 2.12,-1.22 3.79,-3.42 4.44,-6.71 1.06,-5.36 -0.98,-11.53 -5.01,-11.53"
              id="path2506-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2520-4">
            <path
              d="m 3949.18,2226.83 c -1.33,0 -2.5,1.04 -2.85,2.81 -0.35,1.76 0.26,3.58 1.58,3.58 1.33,0 2.57,-0.83 2.92,-2.59 0.34,-1.76 -0.33,-3.8 -1.65,-3.8"
              id="path2518-1"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2532-2">
            <path
              d="m 4055.28,2416.15 h -62.59 l -1.6,36.4 67.15,7.33 -2.96,-43.73"
              id="path2530-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2544-8">
            <path
              d="m 4057.54,2416.15 h -2.26 l 2.96,43.73 h 2.35 l -3.05,-43.73"
              id="path2542-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2556-2">
            <path
              d="m 4048.5,2090.27 6.01,99.37 -82.27,10.74 v -97.07 c -0.5,0.21 -0.98,0.42 -1.48,0.63 v 98.14 l 84.62,-11.04 0.68,-0.1 -6.08,-100.55 c -0.5,-0.05 -0.99,-0.08 -1.48,-0.12"
              id="path2554-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2568-8">
            <path
              d="m 3827.25,2308.72 v 0.03 c 9.14,34.83 13.05,73.31 10.6,113.78 -0.86,14.12 -2.46,27.99 -4.75,41.56 v 0.02 c 2.29,-13.57 3.89,-27.45 4.75,-41.58 0.47,-7.73 0.71,-15.4 0.72,-22.98 v -1.15 c -0.04,-31.66 -4.01,-61.84 -11.32,-89.68"
              id="path2566-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2580-6">
            <path
              d="m 3823.47,2295.5 c 0,0 0,0 0,0.01 1.34,4.35 2.61,8.76 3.78,13.24 v -0.03 c -1.17,-4.47 -2.43,-8.87 -3.78,-13.22 m 9.63,168.59 c -2.09,12.37 -4.76,24.49 -7.95,36.3 v 0 c 3.19,-11.79 5.86,-23.91 7.95,-36.28 v -0.02"
              id="path2578-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2592-3">
            <path
              d="m 3827.25,2308.75 5.85,155.34 c 2.29,-13.57 3.89,-27.44 4.75,-41.56 2.45,-40.47 -1.46,-78.95 -10.6,-113.78"
              id="path2590-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2604-3">
            <path
              d="m 3823.47,2295.51 c -6.69,24.74 -11.06,50.85 -12.7,77.86 -0.46,7.63 -0.7,15.2 -0.71,22.69 v 1.68 c 0.07,36.64 5.4,71.31 15.09,102.65 3.19,-11.81 5.86,-23.93 7.95,-36.3 l -5.85,-155.34 c -1.17,-4.48 -2.44,-8.89 -3.78,-13.24"
              id="path2602-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2630-3">
            <path
              d="M 6224.99,404.922 V 405 h 0.01 l -0.01,-0.078"
              id="path2628-8"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2642-0">
            <path
              d="m 5796.7,461.672 h -0.01 -0.02 v 0 h 0.03"
              id="path2640-4"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2654-7">
            <path
              d="m 6198.11,0 h -0.01 l 26.56,400 h 0.01 L 6198.11,0"
              id="path2652-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2666-8">
            <path
              d="m 6224.67,400 h -0.01 l 0.33,5 h 0.01 l -0.01,-0.078 -0.32,-4.922"
              id="path2664-9"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2678-0">
            <path
              d="m 5862.7,452.93 -66.01,8.742 h 0.01 l 66,-8.742 v 0"
              id="path2676-6"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2690-8">
            <path
              d="m 5824.47,201.289 -0.92,8.66 5.76,-5.34 -4.84,-3.32"
              id="path2688-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2702-9">
            <path
              d="M 5850.77,219.32 5819.51,247.762 5803.26,400 h 310.9 L 5850.77,219.32 M 5866,420 h -64.88 l -4.45,41.672 h 0.02 L 5862.7,452.93 5866,420"
              id="path2700-0"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2714-3">
            <path
              d="m 5829.31,204.609 -5.76,5.34 -4.04,37.813 31.26,-28.442 -21.46,-14.711 M 6114.16,400 h -310.9 l -2.14,20 H 5866 l 1.5,-15 h 253.94 l -7.28,-5"
              id="path2712-3"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2726-3">
            <path
              d="m 6050.18,0 h -204.21 l -21.5,201.289 4.84,3.32 L 6050.18,0"
              id="path2724-7"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2738-3">
            <path
              d="M 6198.1,0 H 6091.84 L 5850.77,219.32 6114.16,400 h 110.5 L 6198.1,0"
              id="path2736-2"
            />
          </clipPath>
          <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2750-6">
            <path
              d="m 6091.84,0 h -41.66 L 5829.31,204.609 5850.77,219.32 6091.84,0 m 132.82,400 h -110.5 l 7.28,5 H 6225 l -0.34,-5"
              id="path2748-5"
            />
          </clipPath>
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient226"
            id="linearGradient18740"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient226"
            id="linearGradient18742"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient226"
            id="linearGradient18744"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient226"
            id="linearGradient18746"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient306"
            id="linearGradient18748"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient306"
            id="linearGradient18750"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient306"
            id="linearGradient18752"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient306"
            id="linearGradient18754"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient802"
            id="linearGradient18756"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient802"
            id="linearGradient18758"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient802"
            id="linearGradient18760"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(3470.13,0,0,-3470.13,-323.333,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient932"
            id="linearGradient18762"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient932"
            id="linearGradient18764"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient964"
            id="linearGradient18766"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient932"
            id="linearGradient18768"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient964"
            id="linearGradient18770"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient1374"
            id="linearGradient18772"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
          <linearGradient
            inkscapecollect="always"
            xlinkHref="#linearGradient1374"
            id="linearGradient18774"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-3510,0,0,3510,7350,1986.67)"
            x1={0}
            y1={0}
            x2={1}
            y2={0}
            spreadMethod="pad"
          />
        </defs>
        <sodipodinamedview
          id="base"
          pagecolor="#ffffff"
          bordercolor="#666666"
          borderopacity={1.0}
          inkscapepageopacity={0}
          inkscapepageshadow={2}
          inkscapezoom="0.7"
          inkscapecx="751.54215"
          inkscapecy="293.01814"
          inkscapedocument-units="mm"
          inkscapecurrent-layer="layer8"
          showgrid="false"
          inkscapewindow-width={1920}
          inkscapewindow-height={1200}
          inkscapewindow-x={2560}
          inkscapewindow-y={240}
          inkscapewindow-maximized={1}
        />

        <g inkscapegroupmode="layer" id="layer4" inkscapelabel="background">
          <g
            id="g10"
            transform="matrix(0.41804752,0,0,-0.51139787,2.5318748,205.87851)"
          >
            <g id="g12" transform="scale(0.1)">
              <g id="g14">
                <g id="g16" clipPath="url(#clipPath20-3)">
                  <path
                    d="m 2912.26,2760.59 -158.65,83.16 h 218.6 l 14.08,-10.34 -25.79,-2.79 -48.24,-70.03 m 79.62,73.42 -6.63,5 h 53 l -46.37,-5 m -26.48,14.74 h -221.32 l -160.26,84 -2.28,1.84 h 267.01 l 116.85,-85.84 m -17.32,18.27 -89.66,67.57 h 528.74 l 12.87,-56.57 -33.61,-3.62 h -423.79 l 5.45,-7.38 m 456.68,11.51 -11.58,56.06 h 212.96 l -7.25,-35.13 -194.13,-20.93 m 199.55,21.52 7.86,34.54 h 312.46 l -0.42,-0.05 h -310.62 l -7.6,-32.87 0.95,-1.34 -2.63,-0.28 m 772.79,29.37 -1.33,5.17 h 11.19 l -9.86,-5.17 m 19.4,10.17 h -22.02 l -10.93,42.32 -173.87,-18.74 143.74,105.58 h 309.49 L 4396.5,2939.59 m -425.5,0 h -357.69 l 29.4,129.16 h 676.23 L 4177.02,2961.8 3971,2939.59 m -363.82,0 h -215.03 l -26.69,129.16 h 268.41 l -26.69,-129.16 m -221.16,0 h -534.24 l -171.39,129.16 h 676.23 l 29.4,-129.16 m -544.27,0 h -266.44 l -161,129.16 h 251.6 l 175.84,-129.16 M 4654.83,3075 h -312.91 l 183.22,134.59 h 287.73 l 2.11,-59.34 -0.09,-0.04 -0.3,8.54 -159.76,-83.75 m -327.6,0 h -683.1 l 30.63,134.59 h 831.06 L 4327.23,3075 m -692.07,0 h -270.99 l -27.81,134.59 h 326.61 L 3635.16,3075 m -279.96,0 h -683.11 l -149.56,112.71 h 787.7 l 15.36,-45.05 9.89,14.26 -11.98,52.67 h -701.44 702.5 L 3355.2,3075 m -697.8,0 h -250.88 l -126.05,101.13 211.11,20.67 165.82,-121.8 m -504.7,83.77 0.98,27.37 2.83,-1.68 -3.81,-25.69 m 2659.88,59.04 h -276.24 l 220.34,161.85 h 200.22 l -62.02,-105.89 h -4.46 v -2.72 l -78.04,-47.71 0.2,-5.53 m -295.84,0 h -840.1 l 22.13,97.25 659.49,64.6 h 373.25 l -214.77,-161.85 m -852.08,0 h -330 l -12.47,60.36 362.28,35.49 -19.81,-95.85 m -341.97,0 h -616.65 l 603.2,59.09 13.45,-59.09 m 1641.71,174.67 h -176.62 l 44.29,33.6 161.26,15.8 -28.93,-49.4"
                    style={{
                      fill: "url(#linearGradient28-7)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path30"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g32">
                <g id="g34" clipPath="url(#clipPath38-6)">
                  <path
                    d="M 5021.45,71.0508 4750.29,77.6406 4572.26,400 h 450.98 L 5021.45,71.0508 M 4718.97,78.3984 3496.59,108.082 3494.64,400 H 4546.25 L 4718.97,78.3984 M 3469.86,108.73 2279.3,137.641 2420.2,400 h 1051.6 l -1.94,-291.27 m -1220.16,29.629 -305.83,7.43 -1.39,254.211 h 451.71 L 2249.7,138.359 M 5023.35,420 v 0 l 2.68,490.93 h 0.01 L 5023.35,420 m -126.88,0 h -335.26 l -271.12,490.93 h 591.63 L 4896.47,420 m -360.96,0 h -1041 l -3.28,490.93 h 780.61 L 4535.51,420 m -1063.57,0 h -1041 l 263.67,490.93 h 780.6 L 3471.94,420 m -1066.7,0 H 2069.26 L 2084,910.93 h 592.36 L 2405.24,420 m -462.87,0 v 0 l -2.68,490.93 v 0 L 1942.37,420 m 3083.76,509.07 v 0 l 0.11,19.481 v 0 l -0.11,-19.481 m -144.95,0 h -601.11 l -61.65,111.63 529.42,-16.77 -84.19,249.84 h 11.53 l 201.24,-186.43 4.76,-158.27 m -619.09,0 h -770.97 l -0.9,134.69 711.64,-22.54 60.23,-112.15 m -786.76,0 h -770.97 l 84.27,156.92 687.6,-21.78 -0.9,-135.14 m -788.95,0 h -601.84 l 4.74,157.57 151.5,140.35 -78.91,-121.15 611.44,-19.37 -86.93,-157.4 m -746.79,0 v 0 l -0.1,18.809 v 0 l 0.1,-18.809 m 3676.31,19.192 -374.86,242.968 h 0.05 L 5615.9,948.289 v -0.027 m -441.86,286.388 -0.15,0.1 v 0.04 l 0.15,-0.1 v -0.04 m -514.47,53.57 h -0.79 l -0.35,1.06 1.14,-1.06 m 216.7,139.43 -133.35,86.43 h 0.06 l 133.29,-86.39 v -0.04 m -149.87,97.17 h -0.05 l -106.41,68.97 v 0.04 l 106.46,-69.01"
                    style={{
                      fill: "url(#linearGradient46-9)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path48"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g50">
                <g id="g52" clipPath="url(#clipPath56-0)">
                  <path
                    d="m 695.789,615.039 -22.012,444.241 78.766,33.8 28.52,1254.23 -171.817,14.31 -16.156,326.1 360.601,12.66 38.977,-829.21 216.092,92.71 L 1284.2,957.891 695.789,615.039 m 1097.571,620.231 -0.31,42.19 0.45,-16.63 v -25.47 l -0.14,-0.09 m -0.31,42.23 -10.4,1451.97 15.02,0.53 36.7,-1430.07 -41.32,-22.43 m 298.09,150.78 38.13,1071.72 33.05,-477.38 157.87,33.63 27.24,-461.86 -107.33,-69.57 h -39.81 v -10.74 h 23.24 l -132.39,-85.8 m 513.28,422.1 -0.57,79.6 29.43,6.26 -28.86,-85.86 m 132.49,507.26 -114.97,18.24 -0.23,202.46 -22.49,3.57 -0.38,53.04 -318.37,95.05 5.8,-98.42 -151.47,24.04 16.61,466.83 755.01,-373.44 -31.76,-94.5 c -26.14,-9.38 -49.78,-25.76 -69.89,-47.6 -7.45,-8.08 -14.42,-16.91 -20.84,-26.43 -7.68,-11.35 -14.59,-23.67 -20.66,-36.82 -21.31,-46.23 -32.05,-102.7 -28.36,-163.66 0.46,-7.53 1.13,-14.99 2,-22.36 m -428.97,270.5 v 0 l -4.27,72.41 0.75,-12.83 3.52,-59.58"
                    style={{
                      fill: "url(#linearGradient62-3)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path64"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g66">
                <g id="g68" clipPath="url(#clipPath72-6)">
                  <path
                    d="m 6272.02,614.789 -19.94,11.621 23.53,192.391 6.38,-2.742 -9.97,-201.27 m -451.93,263.332 -136.91,79.77 30.32,404.109 241.97,-103.81 64.35,1369.24 -212.75,-17.72 7.33,97.68 338.52,-11.88 v -631.18 l 191.26,6.95 -25.2,-508.54 -97.14,-8.09 8.47,-372.14 -441.14,4.16 30.92,-308.549 m -204.19,70.18 -374.8,242.929 0.7,0.03 374.14,-242.408 -0.04,-0.551 m 619.55,8.148 -354.61,9.43 1.72,95.941 350.3,8.31 2.59,-113.681 m -1061.41,278.241 -0.15,0.1 v 26.04 l 0.44,16.67 -40.88,22.2 36.7,1430.3 14.6,-0.51 -10.71,-1494.8 m -126.84,111.83 -0.28,0.15 0.32,72.27 -0.04,-72.42 m -170.93,81.18 -133.28,86.38 h 23.16 v 10.74 h -39.74 l -106.47,69.02 26.95,457.04 132.65,-28.26 44.01,635.61 -142.18,-22.56 5.56,94.33 -270.85,-80.87 -30.27,246.54 -3.22,12.47 433.29,214.31 -0.99,27.76 0.09,0.04 61.29,-1722.55 m -216.56,1204.53 3.27,55.49 0.76,12.83 -4.03,-68.32 v 0"
                    style={{
                      fill: "url(#linearGradient78-6)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path80"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <path
                d="M 3819.86,2112.5 H 3146.8 l -20.13,535 H 3840 l -20.14,-535"
                style={{
                  fill: "#e8e659",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path82"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3129.71,2566.72 707.25,4.13 2.88,76.65 h -713.17 l 3.04,-80.78"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path84"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3146.8,2112.5 -3.47,112.5 h 680.62 l -4.23,-112.5 H 3146.8"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path86"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3758.84,2278.33 h -530.19 l -14.6,290.22 551.71,1.91 -6.92,-292.13"
                style={{
                  fill: "#80a962",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path88"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3238.03,2288.34 -13.61,270.25 530.96,1.84 -6.45,-272.09 h -510.9"
                style={{
                  fill: "#fef6df",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path90"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3757.56,2517.5 h -263.91 v 49.22 h -7.5 v -49.22 h -263.91 v -7.5 h 263.91 v -231.67 h 7.5 V 2510 h 263.91 v 7.5"
                style={{
                  fill: "#80a962",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path92"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3120.34,4106.82 332.16,-1459.32 -302.84,1465.68 -29.32,-6.36 M 1282.7,4122.04 3239.37,2647.5 1264.79,4097.96 l 17.91,24.08"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path94"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3849.67,4113.18 -302.84,-1465.68 332.15,1459.32 -29.31,6.36 m 1884.86,-15.22 -1974.58,-1450.46 1956.67,1474.54 17.91,-24.08"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path96"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1089.69,3683.94 h 4790.62 v 16.7344 H 1089.69 Z"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path98"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1685.63,3379.66 h 3598.75 v 12.8164 H 1685.63 Z"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path100"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2019.38,3209.59 h 2931.25 v 8.2266 H 2019.38 Z"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path102"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 2305,3068.75 H 4665 V 3075 H 2305 Z"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path104"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2563.33,2934.59 h 1843.34 v 5 H 2563.33 Z"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path106"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2739.58,2843.75 h 1490.84 v 5 H 2739.58 Z"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path108"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2989.06,2715.83 h 988.391 v 2.5 H 2989.06 Z"
                style={{
                  fill: "#d98851",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path110"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 1896.66,3648.34 1993.33,3575 H 3220 l -25,73.34 H 1896.66"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path112"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 3216.59,3683.94 H 1871.66 l 25,-35.6 H 3195 l 25,-73.34 16.11,23.21 -19.52,85.73"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path114"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2148.28,3441.88 81.91,-62.14 h 1039.3 l -21.18,62.14 H 2148.28"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path116"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 3266.61,3472.04 H 2127.1 l 21.18,-30.16 h 1100.03 l 21.18,-62.14 13.65,19.66 -16.53,72.64"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path118"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2512.65,3187.71 59.38,-45.05 h 753.56 l -15.36,45.05 h -797.58"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path120"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3323.5,3209.59 h -826.21 l 15.36,-21.88 h 797.58 l 15.36,-45.05 9.89,14.26 -11.98,52.67"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path122"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2635.18,3094.67 52.08,-38.16 h 660.94 l -13.47,38.16 h -699.55"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path124"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3346.36,3113.21 h -724.65 l 13.47,-18.54 h 699.55 l 13.47,-38.16 8.68,12.08 -10.52,44.62"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path126"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2873.49,2920.89 37.65,-28.11 h 477.77 l -9.74,28.11 h -505.68"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path128"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3387.58,2934.54 h -523.83 l 9.74,-13.65 h 505.68 l 9.74,-28.11 6.28,8.89 -7.61,32.87"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path130"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2951.17,2862.83 33.02,-23.82 h 419.06 l -8.54,23.82 h -443.54"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path132"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3402.08,2874.4 h -459.45 l 8.54,-11.57 h 443.54 l 8.54,-23.82 5.5,7.54 -6.67,27.85"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path134"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 5104.51,3648.34 5007.84,3575 H 3781.17 l 25,73.34 h 1298.34"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path136"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3784.58,3683.94 h 1344.93 l -25,-35.6 H 3806.17 l -25,-73.34 -16.1,23.21 19.51,85.73"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path138"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4852.89,3441.88 -81.9,-62.14 H 3731.68 l 21.18,62.14 h 1100.03"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path140"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3734.57,3472.04 h 1139.5 l -21.18,-30.16 H 3752.86 l -21.18,-62.14 -13.65,19.66 16.54,72.64"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path142"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4488.53,3187.71 -59.39,-45.05 h -753.55 l 15.36,45.05 h 797.58"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path144"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3677.68,3209.59 h 826.21 l -15.36,-21.88 h -797.58 l -15.36,-45.05 -9.9,14.26 11.99,52.67"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path146"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4366,3094.67 -52.08,-38.16 h -660.94 l 13.47,38.16 H 4366"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path148"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3654.81,3113.21 h 724.65 L 4366,3094.67 h -699.55 l -13.47,-38.16 -8.68,12.08 10.51,44.62"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path150"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4127.69,2920.89 -37.65,-28.11 h -477.78 l 9.74,28.11 h 505.69"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path152"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3613.59,2934.54 h 523.83 l -9.73,-13.65 H 3622 l -9.74,-28.11 -6.27,8.89 7.6,32.87"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path154"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4050,2862.83 -33.02,-23.82 h -419.05 l 8.53,23.82 H 4050"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path156"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3599.09,2874.4 h 459.45 l -8.54,-11.57 h -443.54 l -8.53,-23.82 -5.51,7.54 6.67,27.85"
                style={{
                  fill: "#bd7648",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path158"
                inkscapeconnector-curvature={0}
              />
              <g id="g160">
                <g id="g162" clipPath="url(#clipPath166-7)">
                  <path
                    d="m 1939.37,968.672 -1.67,305.098 v 0 l 1.67,-305.09 v -0.008 m 150.47,136.898 5.06,168.2 h 176.35 l -5.07,-7.78 -176.34,-160.42 m -296.44,124.05 -0.04,5.65 0.14,0.09 v -5.68 l -0.1,-0.06 m 487.26,58.6 h -185.33 l 1.75,58.39 0.01,0.06 h -0.02 l -17.08,-3.8 8.34,6.48 2.81,78.93 132.39,85.8 h 204.23 l -147.1,-225.86 m -343.03,0 v 0 l -0.13,22.95 0.13,-22.95 m 497.13,236.6 H 2240.1 l 107.33,69.57 0.9,-15.4 20.67,13.51 -0.6,10.2 124.56,81.36 v -1.29 h 44.67 l -102.87,-157.95 m 108.67,166.86 h -38.8 l 59.52,38.88 -4.9,-14.59 -15.82,-24.29"
                    style={{
                      fill: "url(#linearGradient174-2)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path176"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g178">
                <g id="g180" clipPath="url(#clipPath184-7)">
                  <path
                    d="m 5615.87,947.77 -1.61,1.082 -374.04,242.338 0.82,0.04 374.86,-242.968 -0.03,-0.492 m -589.52,21.562 v 0 l 1.67,304.438 -1.67,-304.438 m -150.5,136.918 -184.13,167.52 h 179.1 l 5.03,-167.52 m 298.15,122.42 -0.11,0.07 v 6.01 l 0.15,-0.1 -0.04,-5.98 m -145.9,59.55 v 0 l 0.12,21.92 v 0.98 l -0.12,-22.9 m -157.71,0 h -194.56 l -24.58,22.37 -68.57,203.49 h 160.24 l 133.35,-86.43 2.78,-78.3 9.01,-7 -19.41,4.32 h -0.02 v -0.06 l 1.76,-58.39 m 169.2,16.52 -11.28,6.38 1.57,0.05 -0.03,6.01 0.03,-6.01 9.71,-6.43 m -313.24,220.08 h -147.29 l -39.28,116.56 59.22,-38.69 -0.6,-10.19 20.66,-13.51 0.88,14.8 106.41,-68.97"
                    style={{
                      fill: "url(#linearGradient192-9)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path194"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g196">
                <g id="g198" clipPath="url(#clipPath202-9)">
                  <path
                    d="M 4750.29,77.6406 4718.97,78.3984 4546.25,400 H 3494.64 l 1.95,-291.918 -26.73,0.648 1.94,291.27 H 2420.2 L 2279.3,137.641 2249.7,138.359 2394.19,400 h -451.71 l -0.11,20 v 0 l 0.07,-12.918 126.31,-3.961 0.51,16.879 h 335.98 l 271.12,490.93 H 2084 l 0.54,18.14 h 601.84 l 86.93,157.4 15.32,-0.48 -84.27,-156.92 h 770.97 l 0.9,135.14 13.99,-0.45 0.9,-134.69 h 770.97 l -60.23,112.15 16.56,-0.52 61.65,-111.63 h 601.11 l 0.54,-18.14 H 4290.09 L 4561.21,420 h 335.26 l 0.5,-16.879 126.31,3.961 0.07,12.918 v 0 l -0.11,-20 H 4572.26 L 4750.29,77.6406 M 3491.23,910.93 3494.51,420 h 1041 l -263.67,490.93 h -780.61 m -796.62,0 L 2430.94,420 h 1041 l 3.27,490.93 h -780.6 m 2331.43,0 h -0.01 l 0.1,18.14 v 0 l -0.09,-18.14 m -3086.35,0 v 0 l -0.1,18.14 v 0 l 0.1,-18.14 m -0.2,36.949 -0.12,20.793 v 0.008 l 0.12,-20.801 v 0 m 3086.75,0.672 v 0 l 0.11,20.781 v 0 l -0.11,-20.781 m -2936.96,138.089 0.56,18.93 176.34,160.42 -25.4,-39 -151.5,-140.35 m 2787.14,0.7 -201.24,186.43 h -11.53 l -4.87,14.45 h 0.79 l -1.14,1.06 -7.18,21.31 24.58,-22.37 h 194.56 l 0.43,-14.45 h -179.1 l 184.13,-167.52 0.57,-18.91 m 151.6,186.43 v 0 l 0.08,14.45 -0.08,-14.45 m -2756.77,0 H 2094.9 l 0.43,14.45 h 185.33 l -9.41,-14.45 m -333.55,0 v 0 l -0.07,14.45 0.07,-14.45 m 2828.45,240.31 h -183.47 l -3.62,10.74 h 187.09 v -10.74 m -2338.39,0 h -227.47 v 10.74 h 234.47 l -7,-10.74 m 109.87,168.69 h -44.67 v 1.29 l 11.67,7.62 h 38.8 l -5.8,-8.91"
                    style={{
                      fill: "url(#linearGradient210-3)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path212"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g214">
                <g id="g216" clipPath="url(#clipPath220-9)">
                  <path
                    d="m 673.777,1059.28 -64.531,1302.34 171.817,-14.31 -28.52,-1254.23 -78.766,-33.8"
                    style={{
                      fill: "url(#linearGradient18740)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path228"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g230">
                <g id="g232" clipPath="url(#clipPath236-4)">
                  <path
                    d="m 992.668,1871.17 -38.977,829.21 199.319,6.99 55.75,-743.49 -216.092,-92.71"
                    style={{
                      fill: "url(#linearGradient18742)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path244"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g246">
                <g id="g248" clipPath="url(#clipPath252-8)">
                  <path
                    d="m 2162.32,2022.62 -33.05,477.38 5.53,155.62 151.47,-24.04 33.92,-575.33 -157.87,-33.63 m 160.91,346.18 -15.29,259.34 v 0 l 15.29,-259.34 m 298.71,7.08 -21.28,3.38 -1.44,202.65 22.49,-3.57 0.23,-202.46"
                    style={{
                      fill: "url(#linearGradient18744)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path260"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g262">
                <g id="g264" clipPath="url(#clipPath268-5)">
                  <path
                    d="m 2603.85,1929.98 -1.32,186.42 19.7,4.2 -0.29,255.28 114.97,-18.24 c 2.84,-24.06 7.84,-47.27 14.71,-69.26 l -118.34,-352.14 -29.43,-6.26"
                    style={{
                      fill: "url(#linearGradient18746)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path276"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g278">
                <g id="g280" clipPath="url(#clipPath284-3)">
                  <path
                    d="m 2602.53,2116.4 -1.87,262.86 21.28,-3.38 0.29,-255.28 -19.7,-4.2"
                    style={{
                      fill: "url(#linearGradient290-1)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path292"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g294">
                <g id="g296" clipPath="url(#clipPath300-3)">
                  <path
                    d="m 6152.92,2064.33 v 631.18 l 221.81,-7.79 -30.55,-616.44 -191.26,-6.95"
                    style={{
                      fill: "url(#linearGradient18748)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path308"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g310">
                <g id="g312" clipPath="url(#clipPath316-1)">
                  <path
                    d="M 5955.47,1258.19 5713.5,1362 l 93.57,1247.71 212.75,17.72 -64.35,-1369.24"
                    style={{
                      fill: "url(#linearGradient18750)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path324"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g326">
                <g id="g328" clipPath="url(#clipPath332-5)">
                  <path
                    d="m 6281.99,816.059 -6.38,2.742 10.95,89.461 -4.57,-92.203 m -40.74,140.242 -5.8,0.148 -2.59,113.681 8.39,0.2 V 956.301 m 58.86,225.559 -69.8,0.65 -8.47,372.14 97.14,8.09 -18.87,-380.88"
                    style={{
                      fill: "url(#linearGradient18752)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path340"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g342">
                <g id="g344" clipPath="url(#clipPath348-7)">
                  <path
                    d="m 4779.54,2022.62 -132.65,28.26 34.48,584.79 142.18,22.56 -44.01,-635.61 m -152.83,50 33,559.61 v 0 l -33,-559.61"
                    style={{
                      fill: "url(#linearGradient18754)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path356"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g358">
                <g id="g360" clipPath="url(#clipPath364-5)">
                  <g id="g366" transform="matrix(860.2,0,0,817.2,1088.9,139.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACqCAYAAADmzX6gAAAABHNCSVQICAgIfAhkiAAAAmVJREFUeJzt3dFtw0AMREGewWbTVepLEb40IUDAw0wF+lgQa+p8On+/P3cg4PP2A8BT9oozEfu5WgYNO3PefgZ4hDCToTGTIcxkCDMZVnNk7Pm+/QjwDJOZDKs5MsxlMlacqRBlMnZsM4hYv/+osM0gQ2cmY2cczqdhz1EzaFj/mqJCZyZjtQwqrObIUDPI2HE6n4idq2bQoDOToTOT4XA+GaJMhjCTIcxkCDMZ9sxkmMxk7BFnIkSZjL3OGRFhMpMhzGS40YgMk5kM55nJcKMRGWoGGWoGGSYzGW40IsOemYy1zKBCZyZDzSDDZCZDmMnw0oQM3zQhY8f3holYtZkKSSZDmMkQZjKcmiPDZCZDmMkQZjKEmQxhJkOYyXBqjgw3GpGhZpCxV80gwmQmw70ZZLhqgIyVZSp0ZjKEmQxhJkOYyRBmMhw0IsNBIzLUDDKEmQxhJsMRUDJMZjJsM8jY+QgzDWoGGTtfeaZBksnwTxMyTGYydo5tBg0mMxk7V2umwWQmQ5jJEGYyHDQiY+/HD0Aadr5vPwI8Q2cmQ5jJEGYybDPI2LHNIMI2gwydmQxhJkOYydjjei4irObI8FFLMnxumIyVZSpsM8gQZjJsM8hwbwYZVnNk6MxkCDMZwkyGMJMhzGQ4m0GGyUyGMJMhzGR4A0jGXj8AiVAzyBBmMoSZDGEmQ5jJ8DqbDB+CJ2PHWxMidGYyhJkMYSZDmMnYcdKICJOZjHU7FxUmMxnCTIYvtJJhMpPhsnEyTGYyhJkMYSZDmMnwgR4ydiyaiVAzyBBmMoSZDGEmw5W2ZDibQYaaQcY/KdA77fjkOFAAAAAASUVORK5CYII="
                      id="image368"
                    />
                  </g>
                </g>
              </g>
              <g id="g370">
                <g id="g372" clipPath="url(#clipPath376-9)">
                  <g
                    id="g378"
                    transform="matrix(1383.2,0,0,1157.2,565.9,159.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAADxCAYAAABrlmq+AAAABHNCSVQICAgIfAhkiAAAA8lJREFUeJzt3cER2zAQBMGjalNzOk7YuYgOYx7qjoCvqQNAkM+/v3/eAwh86gcAfpcAARkBAjICBGQECMjsnIEBERMQkBEgICNAQEaAgMzuvvUzAD9q933qZwB+lCUYkBEgICNAQGbvxx4Q0NjpDxDZvY7hgYY9ICCzR4OAiD0gIGP8ATICBGQECMgIEJCxCQ1kTEBAZgYgoLKzBgMilmBAZufPhEBk91iCAQ1LMCAjQEBmdoCAyh7H8EDEVQwgYw8IyAgQkBEgICNAQEaAgMzudQwGNPaYgYCI2/BAxouIQMYeEJCxAwRkfJAMyJiAgIwAAZndfetnAH7UDEFARX2AjAABGQECMq5iABkTEJCZy/BAxRIMyEx/gIo9ICBjCQZkbEIDmZ0RCIjsHiMQ0LAJDWQECMjYAwIyJiAgI0BARoCAjAABGVcxgIwJCMjsvkYgoDEzEFCRHyAjQEBm54NAQGT32IQGGr6ICGTsAQGZ+SAiUPEeEJCRHyAjQEBGgICMAAEZAQIyAgRk9n5cxQAaJiAgs/t6FRpo+DMqkNnjOjwQsQcEZPZagQERExCQ2fNqENDY+3zrZwB+lPEHyAgQkBEgIGMTGsh4DwjIGH+AjAABmSkQUNEfICNAQGYuYgAVExCQESAgs+fxSVagYQICMnvdxQAiJiAgI0BAZn4ND1RMQEBm58+oQGTnFAyI7PQHiNgDAjICBGQECMgIEJCZU3igYgICMnt9DwiIzBAEVPbYBAIixh8gI0BARoCAjAABGQECMgIEZAQIyAgQkBEgICNAQEaAgIwAARm/5QEyJiAgs3tMQEDDBARkdvetnwH4USYgIOMUDMjs/BUDiFiCARm/5QEy6gNkHMMDGadgQMYpGJCxBwRknIIBGfUBMgIEZHavTWigYQICMnscwwOR3XkREWhYggGZvSYgILKzBQREdgoEROwBARm34YGMCQjICBCQ2b0aBDTUB8g4hgcyJiAgI0BAZn4LBlR2H5dRgYYlGJARICDjGB7ImICAjFMwILPXIRgQsQQDMgIEZPZYggERExCQcQoGZExAQEaAgIwAARkBAjI7u9BAZIYgoKI+QEaAgIwAARkBAjICBGR2r29CAw0TEJARICAzCzCgYgICMrvzTVagYQICMn7NDGRMQEBGgICMAAEZAQIyu9cxPNAwAQEZAQIyAgRkBAjIzIvQQMUEBGQECMgIEJDZPf4NDzT2+iAZEHEVA8jYAwIyAgRkBAjICBCQ2Z1jeKAx/QEqlmBARoCAjAABGQECMgIEZHavTyICjf+Yyk9G5jgucgAAAABJRU5ErkJggg=="
                      id="image380"
                    />
                  </g>
                </g>
              </g>
              <g id="g382">
                <g id="g384" clipPath="url(#clipPath388-7)">
                  <g
                    id="g390"
                    transform="matrix(1196.2,0,0,1138.2,752.9,159.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADtCAYAAAB9CNMdAAAABHNCSVQICAgIfAhkiAAAA49JREFUeJzt3dmNG0EQRMEaIl2TO3JYvnBkxWKBhwgL+JPI6mOaz7+/f94Dsj6//QOAn7XT45CmySFOyCFOyCFOyCFud9/f/g3AD9p9n9/+DcAPMq5DnJBDnJBD3N6PNTmU7WQc0navIzQosyaHuD1yDmnW5BCnxiFOk0Ocl2EgzrgOccZ1iNPkEDdFDm27R8yhzO46xFmTQ5zddYjT5BAn5BAn5BC3syiHNBtvEGdchzghhzghh7i5ug5te91dh7Tdq8qhbI9VOaSJOMTtHotyKNPkEGfjDeK88QZxxnWIE3KIE3KIE3KIE3KIE3KIE3KI88YbxGlyiBNyiBNyiJslObRpcoizuw5xmhziPBoBccZ1iNudhxyhzJoc4nbmdUizJoe4WZJDmzU5xDknh7jdx7wOZcZ1iHOEBnGaHOKEHOKEHOKEHOJca4U4TQ5x7q5D3B4hh7QZ2KFNxCFOyCFur0U5pO3xPTmkGdchTsghbqZ1aNPkELd7VDmU7b6//ROAn7THFyqQZk0OcXbXIU6TQ9zkHNokHOJ2ztAgTZNDnJBDnI03iNvjZRhI2+s2DKSZ1SFuUg5tMg5xOxtvkKbJIW5fu+uQpskhbo+HHCHNV2gQZ1yHOCGHOHfXIW4fGYc04zrECTnE7fxNEqTtzqIcyozrECfkECfkECfkECfkECfkEOecHOL2KnNI26PJIU2NQ5yQQ5y/LoY4CYc4r7VCnCaHOCGHuHmsFdrmn4uhzbgOcc7JIc4RGsSpcYgTcoizJoc4CYc4j0ZAnCaHuL2aHNLcXYc4d9chzhEaxEk4xAk5xAk5xO19fIUGZXbXIc7uOsRJOMQJOcQJOcQJOcTt8ZAjpO3OZ2hQZlyHOCGHOCGHuL3W5JA2T7xB285XaJBmTQ5xQg5xPjWFOAmHOLvrEKfJIW6nyiFNk0Pc7nGtFco0OcTZXYc4TQ5xQg5xjtAgTpNDnJBD3Dy7Dm27j8swUGZchzghhzhHaBCnySHO7jrEaXKIE3KIm5hD284fHkLa7usIDcoM6xAn5BAn5BAn5BAn5BDnSWaI8xUaxBnXIW6vG2+Q5u46xIk4xHk0AuI0OcQ5QoM4TQ5xQg5xQg5xu1fOoUzCIU7IIc4RGsRpcogTcojzMgzEaXKIE3KIE3KI2/tYlEOZJoe43eshRyjT5BAn5BAn5BAn5BC38yYzpHl3HeKM6xAn5BAn5BD3HySUVFBj0V5fAAAAAElFTkSuQmCC"
                      id="image392"
                    />
                  </g>
                </g>
              </g>
              <g id="g394">
                <g id="g396" clipPath="url(#clipPath400-5)">
                  <g id="g402" transform="matrix(174.2,0,0,54.2,4861.9,1301.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAALCAYAAAAX+i97AAAABHNCSVQICAgIfAhkiAAAADtJREFUOI1jfL00/z/DIAJMA+0AdMDC+G+gnYAKBl8I/WccaCegApb/DIMqTQ++KBt0DhrNZYTAoHMQAH6vCBhfpr9WAAAAAElFTkSuQmCC"
                      id="image404"
                    />
                  </g>
                </g>
              </g>
              <g id="g406">
                <g id="g408" clipPath="url(#clipPath412-5)">
                  <g id="g414" transform="matrix(169.2,0,0,682.2,4866.9,413.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAACOCAYAAAC7W7FpAAAABHNCSVQICAgIfAhkiAAAAX5JREFUeJzt2rF5xDAMg1HSwbhZK9PdDla6S4pj7VcQE/wfRFKQ6X79fJ9ClKp+muGtQCyVZg4Jc+Z6GuC/0hAOhILB5NxOBacuCaacQWPVTEEjOJI5ccpXsqUWZhbVTZgz5+tphrf2mCZRMNQEzoEiBPaihGCsAq66n2Z4iwpXDklhMGno3WQ5Iz3iduhNWphJOU79WgWccznWWDXT1je9pxH+BKFgiwzLmYJaOwV1E3VMFAy1O8CckV6U5zjm5EAj2LGlMJhcx2ltKnamIWesmoHe/RVo5lnHRMGknXsSc0Yq4ECdjR2TxJOGYqdjS2EwVM04JIVt/FOb9D5rYSZRBWw5c7abPouCob4DW840lMjT0JKSeh3sBJ60sXMS1k3tXJTWIkMqm11kTNrt7aQNV5MWZlIuZwBjzpQUyKUdpWNLYTBW0rulfzuln3mo2EkVMAWzSW8S9du25gw0gaVAvt00abtpktVN0IanUrfjDFYzUNLDnNnY+VnU3fQLrElMzuoC328AAAAASUVORK5CYII="
                      id="image416"
                    />
                  </g>
                </g>
              </g>
              <g id="g418">
                <g id="g420" clipPath="url(#clipPath424-7)">
                  <g id="g426" transform="matrix(174.2,0,0,395.2,4861.9,960.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABSCAYAAAA8e3ZEAAAABHNCSVQICAgIfAhkiAAAAO5JREFUaIHt2MERAjEMQ1FlR7XRD/1SC+EMB3Lcd7Aq+GPJsZ31ej52IF13A/yq2etuhi81Fg9o2ZoK/VeDhYirEAc0bX9SE2qUkRWymCyaJM2yMjQv9UmgZRZPurAMzSw7qdjR4b1DzftuhG9VSxGGk9RKEBhqzzJtp+Ysm1l20gCd5D2MG9upQcsui8miSdJtRUisEPZR3WBLdS9sunp32bIc87qMA+q+rBBxS75nmdZl3NXB3WVchjigLgypW+sybtpjk2Pa/igvQws7zETLLM+4CnFAxf6rvAxxSz736cmFmgOaaX8SB1Sr6ZMPPJwhsvId5YwAAAAASUVORK5CYII="
                      id="image428"
                    />
                  </g>
                </g>
              </g>
              <g id="g430">
                <g id="g432" clipPath="url(#clipPath436-4)">
                  <g id="g438" transform="matrix(174.2,0,0,903.2,4861.9,394.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAC8CAYAAAAQNQy2AAAABHNCSVQICAgIfAhkiAAAAdFJREFUeJzt27FxBDEMQ1FqB725INfrVk6Oz4EZ3guACv6AkERpuefn++sOpOfTAH8VjcmimZnMoSI0mTmfZnhTS7YpY/FMDpahYDxgqC/mELcPZV6fRnhXtBRhODOxEkSG2uLxzjIv1FrJOIc4oMxjpTrnZYVIbD+0kj1Wri2aAYFyrQhN7rGWmVeyR1v22sbolexg9zLPoftYIfIc0k57zyHszdO7SnMl44BysH2IW/a52FmWg6Woy35TO8ZNOdjFrPeyTQXa1I1xUw522nMOcUBe+3Gxh3PMHxAo1qIXHcJODtEhzCJussEr2cHehT2H7rWYLJop0C4OyBu1eNox/q9crGSeQxoT11NnsOlcq14DAnGhtmgGBPJG4LX3IQynQLu41w9uBN57/dC+2zfUmzyHsG/A7YdWcU1+sM/2YsmwaRTOIQ6IOzq40x7shyyDGupVnEMF2sStslws1Z2w2sTtQ1youZIVaFOBNhVoU4E2FWhT/wTeFGziS3QI69A8h+ZltYycQxxQP5Nv4oB6lm0q0CYOiGs/uso2FWgTBxQs05PBRuC5QQIuQxwQNx3j/WiirTKrXtNlv6tAmzrQtIkD4uaHOIc4IO5eFuxsnV9Mh0rh54yWJgAAAABJRU5ErkJggg=="
                      id="image440"
                    />
                  </g>
                </g>
              </g>
              <g id="g442">
                <g id="g444" clipPath="url(#clipPath448-0)">
                  <g id="g450" transform="matrix(816.2,0,0,908.2,5015.9,48.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAC9CAYAAAAjpeahAAAABHNCSVQICAgIfAhkiAAAAqNJREFUeJzt3cFtxDAMRUF6wWbTVepLEauUkNxWD5ipwIcPUpRl+fn5/joDl3t9+gHgP/aIKgH7Ojo/99uZ59PPAH8SVBKsUEkQVBIElQTbUyTs8/70I8DfVFQSbE+RoJ6SsKJKgZiSsGPqJ2DNUhSY+kmwRiVhZxyc5n77PFo/91tfolBgjUrC6vwU2J4iQesnYcfJaQJ2jtbP/axRSbBGJcHBaRLElARBJUFQSRBUEuyjkqCikrCPqBIgpiTscSaFABWVBEElwU0pJKioJDiPSoKbUkjQ+knQ+klQUUlwUwoJ9lFJWEM/BdaoJGj9JKioJAgqCTb8SXCHPwk7/jFJwFqmUiClJAgqCYJKgtNTJKioJAgqCYJKgqCSIKgkCCoJTk+R4KYUErR+EvZo/QSoqCT4rp8En0uTsHJKgTUqCYJKgqCSIKgkCCoJDqWQ4FAKCVo/CYJKgqCS4JgfCSoqCaZ+EnZegsr9tH4Sdt6yyv2klAQn/ElQUUnYeUz93E9FJWHnWKVyPxWVBEElQVBJcCiFhD0vwxT3W39Bp8AalQRBJUFQSTD1k7Bj6ifA1E+CNSoJgkqCoJKwjyt9CLA9RYIfopHgF5MkrJxSYOonQVBJMPWT4Lt+EmxPkWCNSoKgkiCoJAgqCYJKgnf9JKioJAgqCYJKgjdTJOwxTBGg9ZMgqCQIKgmCSoKgkuAVKgl+2kvCjh1/AqxRSRBUEgSVBEElYcepFAJUVBLWjT4UqKgkCCoJ/txHgopKgot8SVBRSRBUEgSVBEElwc8mSNixkUqA1k+CoJIgqCQIKgmunSTBu34StH4SBJUEQSVBUElw7SQJKioJtqdIUFFJEFQSBJUEUz8JKioJpn4SVkwp0PpJEFQSTP0kqKgkCCoJtqdI+AU300Ma1+HYlgAAAABJRU5ErkJggg=="
                      id="image452"
                    />
                  </g>
                </g>
              </g>
              <g id="g454">
                <g id="g456" clipPath="url(#clipPath460-8)">
                  <g
                    id="g462"
                    transform="matrix(851.2,0,0,1076.2,5019.9,240.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAADgCAYAAABM+4eXAAAABHNCSVQICAgIfAhkiAAAAxhJREFUeJzt3cEN2zAQRUHK+K2lnTScXsQU4YPxgJkKfHhYrClbfP79/XMPhH1+/QHgWyImT8TkiZg8EZO342yCOJOYPBGTJ2LyREzeznl//RngKzvv8+vPAF+xTpAnYvJETN7ux05M246Gidu5jthosxOTt0fHxNmJyTOGyRMxeSImT8Tk+WJHnklM3gxi6nbsE8RZJ8jb8fYU4nYe6wRt1gnyREzebMTU7XHERpzHzuTZickTMXkiJk/E5ImYvJ3reIK2PWYxcX7FRp6HHeTZicmzEZPnR/HkmcTkiZg8lzGSN8OYOgWTJ2LyREyex87kmcTkzY/YqLNOkOcl2+TZicmzTpDnix157uwgb+cximnzxY48EZNnJybPJCZPxOSJmDwRk+exM3kmMXk7r1FM28xi6iRMnojJc90Bed5PTJ5/dpBnJyZv/thBnXNi8iRMnojJEzF5IiZPxOSJmLzdj8fOtJnE5O28HtnR5g1A5O3xMzbi7MTk7domiDOJydtzdUzb7vP++jPAV4xh8kRMnojJ88WOPOfE5BnD5ImYvKmYOg2TJ2Ly5qEzdSYxeSImb493uxJnEpO367kzcSYxeSImb17FRp1JTJ4bRcnbcTpB3LxPkDo7MXkiJk/E5ImYvDlho84kJm/X74mJm2FMnYtnyDOGyRMxeSImT8TkiZg8EZMnYvJETJ6IyRMxeSImT8Tk+cs+eSYxeTuPSUybSUzeznF/Em0mMXlOJ8jb8W9n4qwT5PnLPnkKJs8RG3lOJ8hzOkGenZg8pxPkKZg8EZO3c32xo80kJm+PIzbidtyLS5x1grxdk5g4lzGSt6Ni4uzE5PkVG3kmMXkiJm/n6pg2BZPniI08k5g8EZM3r52gbufjB0C0WSfIEzF5jtjIM4nJczpB3rwUkzrrBHkiJm9uxaXOJCbP6QR5JjF5IiZPxOSJmDyXMZLn9iTyFEyeiMkTMXkiJk/E5LmMkTyTmDwRkzfLBHUmMXmuxSXPJCbPa6zIM4nJEzF5IiZPxOTteKMgcSYxeSImT8TkiZi8eWBHnUlM3n+xTkgfIQa8uAAAAABJRU5ErkJggg=="
                      id="image464"
                    />
                  </g>
                </g>
              </g>
              <g id="g466">
                <g id="g468" clipPath="url(#clipPath472-8)">
                  <g
                    id="g474"
                    transform="matrix(816.2,0,0,1095.2,5015.9,202.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAADkCAYAAAAIJL+eAAAABHNCSVQICAgIfAhkiAAAAzhJREFUeJzt3dGNIzkQRMGiUK6tO+fw+SKuCbN/wwdEWKCPRBbJZqvP///9uQOP+/z2D4B/saNPCdCoJAgqCYJKgqCSsDPf3/4N8KOd7/nt3wA/MvpJEFQSBJWEvR9rVN63I6cE7FzHU7zPGpWEPbJKgDUqCeqUBI1Kghv+JBj9JBj9JGhUElahUrBzRJX32fWTYI1Kgl0/CRqVBEElQVBJ2LFIJcBmigSjnwRBJUFQSViP+inY61k/ATtXpfK+PVapBIgpCTvHIpX3aVQSbKZI8M4UCUY/CYJKgqCSIKgkCCoJgkqCoJLgnSkSNCoJgkqCoJLgj3xJ0Kgk2PWToFFJcHGaBKOfhB1fmyDAGpUEf+RLgjUqCT6IRoI1KgnOUUnY+Zj9vM/oJ8HxFAkalQRBJUFQSRBUEjxCJUGjkuBZPwnroygUrOFPgZiSIKgk7LVIJWCP+6gEGP0kCCoJa/JToFFJ8NFeEna+v/0T4Gd73EohwBqVBLt+EjQqCSurFEgpCTvOpwjQqCQIKgk2UyTsccOfgL1O/Akw90lYSaVATknYsZkiQKOSsF+7fgI0Kgl7vNxHgNtTJBj9JAgqCZ71k7AfOSXA6CdBUEnY8Zc+BOz4xiQBRj8JgkqCoJIgqCQIKgmCSoJzVBL2KlUCfGyCBHVKgqCS4G8nSZBSEryFSoJGJUFQSfCJSRLWv05SYPST4ByVBMdTJKhTEgSVBGtUEqSUBBenSdCoJOzVqAR41k+CZ/0kOJ4iQUpJEFQSBJWEvcftKd5n10+CXT8JUkqCoJIgqCQIKgl7vNxHgE9MkmD0kyCoJAgqCXutUQlYr0xRsOP2FAHWqCQIKgmu+ZEgpSTY9ZOgUUnYUakEaFQSdo5HqLxPo5Jg10+CRiVBUElwPEWCRiVBUElYr/VTsPNx4M/7jH4SBJUEx1MkaFQS7PpJ0KgkCCoJK6oU+CNfEna+jqd4n8FPgqCSIKgkCCoJgkqC16VJcHuKBKOfBJ/vIcGzfhLElAQXp0nQqCQ4niJBo5IgqCQIKgk7V1Z5n5SSIKgkOJ4iQaOSIKgkuOFPgkYlQVBJEFQS9h6LVN6nUUnYuV7u431/ASs6Uj4owXG+AAAAAElFTkSuQmCC"
                      id="image476"
                    />
                  </g>
                </g>
              </g>
              <g id="g478">
                <g id="g480" clipPath="url(#clipPath484-4)">
                  <g
                    id="g486"
                    transform="matrix(49.2002,0,0,54.2,6224.9,475.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAABHNCSVQICAgIfAhkiAAAADZJREFUGJWNkEENADAQwsqCvumZ3Dm5s1DeTSHkvzuIHAMBNFFCClGgrx5pLG4iRZJ+I/IebVzhwgfHcfbP6wAAAABJRU5ErkJggg=="
                      id="image488"
                    />
                  </g>
                </g>
              </g>
              <g id="g490">
                <g id="g492" clipPath="url(#clipPath496-1)">
                  <g
                    id="g498"
                    transform="matrix(15.2002,0,0,16.2,2087.9,1339.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABHNCSVQICAgIfAhkiAAAABhJREFUCJljfL00/z8DFDAxIAEWxn8IDgB44AQFagZfvgAAAABJRU5ErkJggg=="
                      id="image500"
                    />
                  </g>
                </g>
              </g>
              <g id="g502">
                <g id="g504" clipPath="url(#clipPath508-9)">
                  <g id="g510" transform="matrix(164.2,0,0,682.2,1933.9,413.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAACOCAYAAABUmdpXAAAABHNCSVQICAgIfAhkiAAAAX5JREFUeJzt2sFxxDAMQ1HQYblpK9VtD1YOmRyWW4DfgajgD0RSkOl6/XyfAOqknmZIkjTCkS7iYCBHrqcB/tWFoCAYEEif26jWzqWAxBgkTo0EGa2tmNJGqSp2ZEE+xXQN5Mj5epohyR7NpxgQZrL2QWIA9NJDQJxiTe6nGZJAwcigCATShbxrHEeUB9YOtKkFmepj1KpTrH0uwxKnRsr5hvY0wp8QDGgp4DgSpH07SNcwR8OAMN/iIUeUl945hil9kNFq2BEIpK9jtC8TFbsQR5waQd7gaWSeOUfDgHQZdx7kiFKsjXQvdDQKSxcSFQ07AoEwNWJQBNqEdzahvWtBpphidRw52zXvYkCY76yOI4Wk5y5kqcek+J2sUxsVp6CuKePSc5YCSpnsUmBqt5xTG4ymFmSqL2OwQo5ECc/KTs+wIxCIk9Bu5V9F5UcWJioyxcqAbEKbYn41lhxBJqsSnrdrprZrppyuQbYk6dyGI1CNIAkNcmSj4ruYu+YXYzJMztbkzeYAAAAASUVORK5CYII="
                      id="image512"
                    />
                  </g>
                </g>
              </g>
              <g id="g514">
                <g id="g516" clipPath="url(#clipPath520-0)">
                  <g id="g522" transform="matrix(174.2,0,0,395.2,1928.9,960.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABSCAYAAAA8e3ZEAAAABHNCSVQICAgIfAhkiAAAAO5JREFUaIHt2MERAjEMQ1FlR7XRD/1SC+EMB3Lcd7Aq+GPJsZ31ej52IF13A/yq2etuhi81Fg9o2ZoK/VeDhYirEAc0bX9SE2qUkRWymCyaJM2yMjQv9UmgZRZPurAMzSw7qdjR4b1DzftuhG9VSxGGk9RKEBhqzzJtp+Ysm1l20gCd5D2MG9upQcsui8miSdJtRUisEPZR3WBLdS9sunp32bIc87qMA+q+rBBxS75nmdZl3NXB3WVchjigLgypW+sybtpjk2Pa/igvQws7zETLLM+4CnFAxf6rvAxxSz736cmFmgOaaX8SB1Sr6ZMPPJwhsvId5YwAAAAASUVORK5CYII="
                      id="image524"
                    />
                  </g>
                </g>
              </g>
              <g id="g526">
                <g id="g528" clipPath="url(#clipPath532-8)">
                  <g id="g534" transform="matrix(174.2,0,0,903.2,1928.9,394.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAC8CAYAAAAQNQy2AAAABHNCSVQICAgIfAhkiAAAAdFJREFUeJzt27FxBDEMQ1FqB725INfrVk6Oz4EZ3guACv6AkERpuefn++sOpOfTAH8VjcmimZnMoSI0mTmfZnhTS7YpY/FMDpahYDxgqC/mELcPZV6fRnhXtBRhODOxEkSG2uLxzjIv1FrJOIc4oMxjpTrnZYVIbD+0kj1Wri2aAYFyrQhN7rGWmVeyR1v22sbolexg9zLPoftYIfIc0k57zyHszdO7SnMl44BysH2IW/a52FmWg6Woy35TO8ZNOdjFrPeyTQXa1I1xUw522nMOcUBe+3Gxh3PMHxAo1qIXHcJODtEhzCJussEr2cHehT2H7rWYLJop0C4OyBu1eNox/q9crGSeQxoT11NnsOlcq14DAnGhtmgGBPJG4LX3IQynQLu41w9uBN57/dC+2zfUmzyHsG/A7YdWcU1+sM/2YsmwaRTOIQ6IOzq40x7shyyDGupVnEMF2sStslws1Z2w2sTtQ1youZIVaFOBNhVoU4E2FWhT/wTeFGziS3QI69A8h+ZltYycQxxQP5Nv4oB6lm0q0CYOiGs/uso2FWgTBxQs05PBRuC5QQIuQxwQNx3j/WiirTKrXtNlv6tAmzrQtIkD4uaHOIc4IO5eFuxsnV9Mh0rh54yWJgAAAABJRU5ErkJggg=="
                      id="image536"
                    />
                  </g>
                </g>
              </g>
              <path
                d="m 1232.01,2958.16 484.45,-140.03 9.15,-1626.87 -374.15,-242.408 -119.45,2009.308"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path538"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1230.6,2981.91 511.32,-151.42 11.76,-1640.55 -28.07,1.32 -9.15,1626.87 -484.45,140.03 -1.41,23.75"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path540"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 1314,904.961 1187.29,3036.46 h -58.95 L 1287.91,908.332 1314,904.961"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path542"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1230.6,2981.91 511.32,-151.42 11.76,-1640.55 39.82,25.8 -11.79,1644.69 -594.42,176.03 L 1314,904.961 1352.58,929.969 1230.6,2981.91"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path544"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1296.66,2828.34 65,-1010.01 L 1655,1860 v 893.75 l -358.34,74.59"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path546"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1298.5,2799.9 324,-63.65 1.56,-873.91 30.94,-2.34 v 893.75 l -358.34,74.59 1.84,-28.44"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path548"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 1361.67,1818.33 1655,1860 l -30.94,2.34 -262.95,-35.44 0.56,-8.57"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path550"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1697.13,1870.22 h -16.09 c -9.65,-12.58 -8.73,-26 -3.12,-39.8 l 15.3,-2.33 3.91,42.13"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path552"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1745.74,1844.14 c -4.17,-20.99 -18.25,-33.4 -34.15,-33.4 -15.9,0 -23.97,24.22 -19.8,45.22 4.17,20.98 19.01,30.8 34.9,30.8 15.9,0 23.22,-21.62 19.05,-42.62"
                style={{
                  fill: "#f8ab11",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path554"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1717.19,1824.24 c -12.6,0 -19,19.2 -15.69,35.83 1.52,7.65 4.88,13.34 9.23,17.35 -7.18,-4.08 -12.83,-11.47 -15.03,-22.51 -3.57,-17.95 3.34,-38.66 16.93,-38.66 12.22,0 23.13,8.63 27.81,23.4 -5.12,-9.85 -13.77,-15.41 -23.25,-15.41"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path556"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1740.11,1866.95 c -1.17,-5.91 -5.14,-9.42 -9.63,-9.42 -4.48,0 -6.76,6.84 -5.58,12.75 1.17,5.92 5.36,8.69 9.84,8.69 4.48,0 6.55,-6.1 5.37,-12.02"
                style={{
                  fill: "#fae1a1",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path558"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1361.67,2639.17 10,-146.67 h 211.66 l 5.42,122.08 -227.08,24.59"
                style={{
                  fill: "#fccc60",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path560"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1361.67,2639.17 h -7.92 l 10.31,-146.67 h 7.61 l -10,146.67"
                style={{
                  fill: "#e45265",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path562"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1374.3,1732.82 39.68,-650.31 238.52,137.27 v 549.05 z m 35.18,-658.67 -40.45,663.03 2.31,0.3 286.16,37.03 v -557.63 l -248.02,-142.73"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path564"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2304.42,2687.72 259.47,-75.62 4.9,-878.51 -200.39,-130.9 -63.98,1085.03"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path566"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2303.67,2700.55 273.86,-81.77 6.3,-885.9 -15.04,0.71 -4.9,878.51 -259.47,75.62 -0.75,12.83"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path568"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 2348.33,1578.99 2280.47,2730 h -31.58 l 85.48,-1149.18 13.96,-1.83"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path570"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2303.67,2700.55 273.86,-81.77 6.3,-885.9 21.33,13.94 -6.32,888.13 -318.37,95.05 67.86,-1151.01 20.67,13.51 -65.33,1108.05"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path572"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2339.05,2617.61 34.82,-545.39 157.11,22.5 v 482.62 l -191.93,40.27"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path574"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2340.03,2602.26 173.54,-34.37 0.83,-471.91 16.58,-1.26 v 482.62 l -191.93,40.27 0.98,-15.35"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path576"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2373.87,2072.22 157.11,22.5 -16.58,1.26 -140.83,-19.13 0.3,-4.63"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path578"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2553.54,2100.23 h -8.62 c -5.17,-6.79 -4.68,-14.04 -1.67,-21.49 l 8.2,-1.25 2.09,22.74"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path580"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2579.58,2086.15 c -2.24,-11.33 -9.78,-18.03 -18.3,-18.03 -8.51,0 -12.83,13.08 -10.6,24.41 2.24,11.34 10.18,16.64 18.7,16.64 8.51,0 12.43,-11.68 10.2,-23.02"
                style={{
                  fill: "#f8ab11",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path582"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2564.28,2075.41 c -6.75,0 -10.17,10.36 -8.4,19.34 0.81,4.13 2.61,7.21 4.95,9.37 -3.85,-2.2 -6.88,-6.19 -8.05,-12.15 -1.92,-9.69 1.79,-20.88 9.07,-20.88 6.54,0 12.38,4.66 14.89,12.64 -2.75,-5.32 -7.38,-8.32 -12.46,-8.32"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path584"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2576.56,2098.47 c -0.63,-3.2 -2.76,-5.09 -5.15,-5.09 -2.41,0 -3.63,3.69 -3,6.89 0.63,3.2 2.87,4.69 5.28,4.69 2.4,0 3.5,-3.29 2.87,-6.49"
                style={{
                  fill: "#fae1a1",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path586"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2373.87,2515.46 5.35,-79.2 h 113.37 l 2.9,65.93 -121.62,13.27"
                style={{
                  fill: "#fccc60",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path588"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2373.87,2515.46 h -4.25 l 5.53,-79.2 h 4.07 l -5.35,79.2"
                style={{
                  fill: "#e45265",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path590"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2380.63,2026.04 21.25,-351.17 127.76,74.12 v 296.49 z m 18.84,-355.68 -21.66,358.03 1.24,0.16 153.26,20 v -301.12 l -132.84,-77.07"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path592"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2870.81,2554.99 143.27,-41.75 2.71,-485.07 -110.65,-72.27 -35.33,599.09"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path594"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2870.4,2562.07 151.21,-45.15 3.48,-489.14 -8.3,0.39 -2.71,485.07 -143.27,41.75 -0.41,7.08"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path596"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2895.06,1942.81 -37.47,635.53 h -17.44 l 47.19,-634.52 7.72,-1.01"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path598"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2870.4,2562.07 151.21,-45.15 3.48,-489.14 11.77,7.69 -3.49,490.38 -175.78,52.49 37.47,-635.53 11.41,7.46 -36.07,611.8"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path600"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2889.93,2516.28 19.22,-301.14 86.75,12.42 v 266.48 l -105.97,22.24"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path602"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2890.47,2507.8 95.82,-18.98 0.46,-260.56 9.15,-0.7 v 266.48 l -105.97,22.24 0.54,-8.48"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path604"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2909.15,2215.14 86.75,12.42 -9.15,0.7 -77.76,-10.56 0.16,-2.56"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path606"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3008.36,2230.61 h -4.75 c -2.86,-3.75 -2.58,-7.75 -0.93,-11.87 l 4.53,-0.69 1.15,12.56"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path608"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3022.74,2222.84 c -1.24,-6.26 -5.4,-9.96 -10.1,-9.96 -4.7,0 -7.09,7.22 -5.86,13.48 1.24,6.26 5.63,9.18 10.33,9.18 4.7,0 6.86,-6.44 5.63,-12.7"
                style={{
                  fill: "#f8ab11",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path610"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3014.3,2216.9 c -3.73,0 -5.62,5.72 -4.65,10.68 0.45,2.29 1.45,3.98 2.74,5.18 -2.13,-1.22 -3.8,-3.42 -4.45,-6.71 -1.05,-5.36 0.99,-11.53 5.01,-11.53 3.61,0 6.84,2.57 8.22,6.97 -1.51,-2.93 -4.07,-4.59 -6.87,-4.59"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path612"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3021.07,2229.64 c -0.34,-1.77 -1.52,-2.81 -2.84,-2.81 -1.33,0 -2,2.04 -1.65,3.8 0.34,1.76 1.58,2.59 2.91,2.59 1.32,0 1.93,-1.82 1.58,-3.58"
                style={{
                  fill: "#fae1a1",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path614"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2909.15,2459.88 2.96,-43.73 h 62.6 l 1.6,36.4 -67.16,7.33"
                style={{
                  fill: "#fccc60",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path616"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2909.15,2459.88 h -2.33 l 3.04,-43.73 h 2.25 l -2.96,43.73"
                style={{
                  fill: "#e45265",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path618"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2912.89,2189.64 11.74,-193.89 70.54,40.93 v 163.7 l -82.28,-10.74 m 10.4,-196.38 -11.96,197.68 0.69,0.1 84.62,11.04 v -166.27 l -73.35,-42.55"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path620"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 5735.39,2958.16 5250.95,2818.13 5241.8,1191.26 5615.94,948.852 5735.39,2958.16"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path622"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5736.8,2981.91 -511.32,-151.42 -11.75,-1640.55 28.07,1.32 9.15,1626.87 484.44,140.03 1.41,23.75"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path624"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5653.4,904.961 126.71,2131.499 h 58.96 L 5679.48,908.332 5653.4,904.961"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path626"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5736.8,2981.91 -511.32,-151.42 -11.75,-1640.55 -39.82,25.8 11.78,1644.69 594.42,176.03 -126.71,-2131.499 -38.59,25.008 121.99,2051.941"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path628"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5670.73,2828.34 -65,-1010.01 -293.33,41.67 v 893.75 l 358.33,74.59"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path630"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5668.91,2799.9 -324.01,-63.65 -1.56,-873.91 -30.94,-2.34 v 893.75 l 358.33,74.59 -1.82,-28.44"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path632"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5605.73,1818.33 -293.33,41.67 30.94,2.34 262.95,-35.44 -0.56,-8.57"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path634"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5270.27,1870.22 h 16.09 c 9.66,-12.58 8.74,-26 3.12,-39.8 l -15.3,-2.33 -3.91,42.13"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path636"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5221.67,1844.14 c 4.17,-20.99 18.24,-33.4 34.14,-33.4 15.9,0 23.98,24.22 19.81,45.22 -4.17,20.98 -19.02,30.8 -34.92,30.8 -15.89,0 -23.21,-21.62 -19.03,-42.62"
                style={{
                  fill: "#f8ab11",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path638"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5250.21,1824.24 c 12.6,0 19,19.2 15.7,35.83 -1.53,7.65 -4.88,13.34 -9.24,17.35 7.18,-4.08 12.83,-11.47 15.03,-22.51 3.56,-17.95 -3.34,-38.66 -16.93,-38.66 -12.22,0 -23.12,8.63 -27.81,23.4 5.12,-9.85 13.77,-15.41 23.25,-15.41"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path640"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5227.29,1866.95 c 1.18,-5.91 5.15,-9.42 9.63,-9.42 4.49,0 6.76,6.84 5.59,12.75 -1.18,5.92 -5.36,8.69 -9.85,8.69 -4.49,0 -6.55,-6.1 -5.37,-12.02"
                style={{
                  fill: "#fae1a1",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path642"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5605.73,2639.17 -10,-146.67 h -211.66 l -5.42,122.08 227.08,24.59"
                style={{
                  fill: "#fccc60",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path644"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5605.73,2639.17 h 7.92 l -10.31,-146.67 h -7.61 l 10,146.67"
                style={{
                  fill: "#e45265",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path646"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5314.9,1768.83 v -549.05 l 238.52,-137.27 39.69,650.31 z m -5,-551.95 v 557.63 l 286.16,-37.03 2.31,-0.3 -40.45,-663.03 -248.02,142.73"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path648"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4662.98,2687.72 -259.47,-75.62 -4.9,-878.51 200.39,-130.9 63.98,1085.03"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path650"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4663.74,2700.55 -273.87,-81.77 -6.3,-885.9 15.04,0.71 4.9,878.51 259.47,75.62 0.76,12.83"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path652"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 4619.06,1578.99 4686.93,2730 h 31.59 l -85.48,-1149.18 -13.98,-1.83"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path654"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4663.74,2700.55 -273.87,-81.77 -6.3,-885.9 -21.32,13.94 6.31,888.13 318.37,95.05 -67.87,-1151.01 -20.66,13.51 65.34,1108.05"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path656"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4628.35,2617.61 -34.82,-545.39 -157.1,22.5 v 482.62 l 191.92,40.27"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path658"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4627.37,2602.26 -173.53,-34.37 -0.84,-471.91 -16.57,-1.26 v 482.62 l 191.92,40.27 -0.98,-15.35"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path660"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4593.53,2072.22 -157.1,22.5 16.57,1.26 140.83,-19.13 -0.3,-4.63"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path662"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4413.87,2100.23 h 8.61 c 5.17,-6.79 4.68,-14.04 1.67,-21.49 l -8.19,-1.25 -2.09,22.74"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path664"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4387.83,2086.15 c 2.23,-11.33 9.78,-18.04 18.28,-18.04 8.52,0 12.84,13.09 10.61,24.42 -2.23,11.34 -10.18,16.63 -18.69,16.63 -8.52,0 -12.43,-11.67 -10.2,-23.01"
                style={{
                  fill: "#f8ab11",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path666"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4403.12,2075.41 c 6.74,0 10.17,10.36 8.4,19.34 -0.81,4.13 -2.61,7.21 -4.95,9.37 3.85,-2.2 6.88,-6.19 8.06,-12.15 1.9,-9.69 -1.79,-20.88 -9.07,-20.88 -6.55,0 -12.39,4.66 -14.9,12.64 2.75,-5.32 7.39,-8.32 12.46,-8.32"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path668"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4390.84,2098.47 c 0.64,-3.2 2.75,-5.09 5.16,-5.09 2.4,0 3.62,3.69 2.99,6.89 -0.63,3.2 -2.88,4.69 -5.27,4.69 -2.4,0 -3.51,-3.29 -2.88,-6.49"
                style={{
                  fill: "#fae1a1",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path670"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4593.54,2515.46 -5.36,-79.2 h -113.37 l -2.9,65.93 121.63,13.27"
                style={{
                  fill: "#fccc60",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path672"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4593.54,2515.46 h 4.23 l -5.51,-79.2 h -4.08 l 5.36,79.2"
                style={{
                  fill: "#e45265",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path674"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4437.76,2045.48 v -296.49 l 127.76,-74.12 21.25,351.17 -149.01,19.44 m -2.67,-298.05 v 301.12 l 153.27,-20 1.24,-0.16 -21.67,-358.03 -132.84,77.07"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path676"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4096.59,2554.99 -143.27,-41.75 -2.71,-485.07 110.65,-72.27 35.33,599.09"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path678"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4097,2562.07 -151.21,-45.15 -3.48,-489.14 8.3,0.39 2.71,485.07 143.27,41.75 0.41,7.08"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path680"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4072.34,1942.81 37.48,635.53 h 17.43 l -47.19,-634.52 -7.72,-1.01"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path682"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4097,2562.07 -151.21,-45.15 -3.48,-489.14 -11.77,7.69 3.48,490.38 175.8,52.49 -37.48,-635.53 -11.41,7.46 36.07,611.8"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path684"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4077.47,2516.28 -19.23,-301.14 -86.75,12.42 v 266.48 l 105.98,22.24"
                style={{
                  fill: "#feefc9",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path686"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4076.92,2507.8 -95.81,-18.98 -0.46,-260.56 -9.16,-0.7 v 266.48 l 105.98,22.24 -0.55,-8.48"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path688"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4058.24,2215.14 -86.75,12.42 9.16,0.7 77.76,-10.56 -0.17,-2.56"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path690"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3959.04,2230.61 h 4.76 c 2.85,-3.75 2.58,-7.75 0.92,-11.87 l -4.53,-0.69 -1.15,12.56"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path692"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3944.67,2222.84 c 1.23,-6.26 5.39,-9.96 10.1,-9.96 4.69,0 7.09,7.22 5.85,13.48 -1.23,6.26 -5.62,9.18 -10.33,9.18 -4.69,0 -6.86,-6.44 -5.62,-12.7"
                style={{
                  fill: "#f8ab11",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path694"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3953.11,2216.9 c 3.73,0 5.61,5.72 4.63,10.68 -0.45,2.29 -1.43,3.98 -2.72,5.18 2.12,-1.22 3.79,-3.42 4.44,-6.71 1.06,-5.36 -0.98,-11.53 -5.01,-11.53 -3.61,0 -6.83,2.57 -8.22,6.97 1.51,-2.93 4.07,-4.59 6.88,-4.59"
                style={{
                  fill: "#da7928",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path696"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3946.33,2229.64 c 0.35,-1.77 1.52,-2.81 2.85,-2.81 1.32,0 1.99,2.04 1.65,3.8 -0.35,1.76 -1.59,2.59 -2.92,2.59 -1.32,0 -1.93,-1.82 -1.58,-3.58"
                style={{
                  fill: "#fae1a1",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path698"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4058.24,2459.88 -2.96,-43.73 h -62.59 l -1.6,36.4 67.15,7.33"
                style={{
                  fill: "#fccc60",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path700"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4058.24,2459.88 h 2.35 l -3.05,-43.73 h -2.26 l 2.96,43.73"
                style={{
                  fill: "#e45265",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path702"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3972.24,2200.38 v -163.7 l 70.53,-40.93 11.74,193.89 -82.27,10.74 m -1.48,-164.57 v 166.27 l 84.62,-11.04 0.68,-0.1 -11.96,-197.68 -73.34,42.55"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path704"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1920.59,1317.73 -8.64,1956.04 h 160.55 l -30,-1960.02 -121.91,3.98"
                style={{
                  fill: "#40a664",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path706"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2072.5,3273.77 82.5,-50.43 -66.67,-1873.99 -45.83,-35.6 30,1960.02"
                style={{
                  fill: "#e6e45c",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path708"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 1314,904.961 -472.5,-262.5 -490,-122.5 1310.95,956.23 1314,904.961"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path710"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M -490,-122.5 1310.95,956.23 1284.2,957.891 -570,-122.5 h 80"
                style={{
                  fill: "#cf8842",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path712"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1793.5,1215.74 144,95.43 0.21,35.5 -144.21,-85.84 v -45.09"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path714"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1793.5,1260.83 144.21,85.84 h -17.25 l -127.41,-69.17 0.45,-16.67"
                style={{
                  fill: "#cf8842",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path716"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1937.71,1346.67 112.29,-2.5 -1.88,-36.67 -110.62,3.67 0.21,35.5"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path718"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2050,1344.17 48.75,33.33 -1.67,-30.83 -48.95,-39.17 1.87,36.67"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path720"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2050,1344.17 -7.03,0.16 46.4,34.01 9.38,-0.84 -48.75,-33.33"
                style={{
                  fill: "#cf8842",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path722"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2348.33,1578.99 -257.57,-161.47 1.22,34.35 256.35,150.83 v -23.71"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path724"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2605.16,1746.82 289.9,195.99 -0.77,13.09 -289.13,-187.77 v -21.31"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path726"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3036.86,2035.47 112.2,77.03 v 5 l -112.2,-71.56 v -10.47"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path728"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2348.33,1602.7 h -15.6 l -240.34,-139.17 -0.41,-11.66 256.35,150.83"
                style={{
                  fill: "#cf8842",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path730"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5046.8,1317.73 8.64,1956.04 h -160.56 l 30,-1960.02 121.92,3.98"
                style={{
                  fill: "#40a664",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path732"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4894.88,3273.77 -82.5,-50.43 66.67,-1873.99 45.83,-35.6 -30,1960.02"
                style={{
                  fill: "#e6e45c",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path734"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5653.38,904.961 1786.5,-1167.461 17.5,140 -1800.95,1078.73 -3.05,-51.269"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path736"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 7457.38,-122.5 -1800.95,1078.73 26.75,1.661 1854.2,-1080.391 h -80"
                style={{
                  fill: "#cf8842",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path738"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5173.89,1215.74 -144.01,95.43 -0.2,35.5 144.21,-85.84 v -45.09"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path740"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5173.89,1260.83 -144.21,85.84 h 17.24 l 127.41,-69.17 -0.44,-16.67"
                style={{
                  fill: "#cf8842",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path742"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5029.68,1346.67 -112.3,-2.5 1.88,-36.67 110.62,3.67 -0.2,35.5"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path744"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4917.38,1344.17 -48.75,33.33 1.67,-30.83 48.96,-39.17 -1.88,36.67"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path746"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4917.38,1344.17 7.03,0.16 -46.39,34.01 -9.39,-0.84 48.75,-33.33"
                style={{
                  fill: "#cf8842",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path748"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4619.05,1578.99 257.57,-161.47 -1.22,34.35 -256.35,150.83 v -23.71"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path750"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4362.23,1746.82 -289.91,195.99 0.78,13.09 289.13,-187.77 v -21.31"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path752"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3930.53,2035.47 -112.21,77.03 v 5 l 112.21,-71.56 v -10.47"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path754"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4619.05,1602.7 h 15.6 l 240.34,-139.17 0.41,-11.66 -256.35,150.83"
                style={{
                  fill: "#cf8842",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path756"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 327.5,4113.18 1591.87,-839.41 v -41.89 L 126.664,4110 327.5,4113.18"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path758"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1919.37,3231.88 h 157.5 v 41.8984 h -157.5 z"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path760"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2076.87,3231.88 81.88,-48.75 3.12,37.5 -85,53.14 v -41.89"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path762"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 2152.7,3158.75 3128,2647.5 v -8.08 l -976.59,483.03 1.29,36.3"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path764"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 6639.79,4113.18 5047.92,3273.77 v -41.89 l 1792.71,878.12 -200.84,3.18"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path766"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4890.42,3231.88 h 157.5 v 41.8984 h -157.5 z"
                style={{
                  fill: "#832943",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path768"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4890.42,3231.88 -81.88,-48.75 -3.12,37.5 85,53.14 v -41.89"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path770"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 4814.59,3158.75 3839.3,2647.5 v -8.08 l 976.58,483.03 -1.29,36.3"
                style={{
                  fill: "#c35b2a",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path772"
                inkscapeconnector-curvature={0}
              />
              <g id="g774">
                <g id="g776" clipPath="url(#clipPath780-2)">
                  <path
                    d="M 0,209.621 V 1549.01 L 210.555,1585.97 243.98,874.891 673.777,1059.28 695.789,615.039 0,209.621 m 1834.37,1090.309 -36.7,1430.07 -15.02,-0.53 -0.94,130.96 -311.73,92.31 5.51,242.09 -547.185,45.59 25.386,-540.04 -360.601,-12.66 16.156,-326.1 -264.836,22.06 12.801,474.63 L 0,2987.36 V 4000 h 351.234 l 1560.886,-764.57 8.34,-1888.76 -86.09,-46.74"
                    style={{
                      fill: "url(#linearGradient786-6)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path788"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g790">
                <g id="g792" clipPath="url(#clipPath796-5)">
                  <path
                    d="M 0,1549.01 V 2987.36 L 357.211,2858.31 344.41,2383.68 172.387,2398.01 210.555,1585.97 0,1549.01"
                    style={{
                      fill: "url(#linearGradient18756)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path804"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g806">
                <g id="g808" clipPath="url(#clipPath812-7)">
                  <path
                    d="m 243.98,874.891 -33.425,711.079 112.879,19.81 20.976,777.9 264.836,-22.06 L 673.777,1059.28 243.98,874.891"
                    style={{
                      fill: "url(#linearGradient18758)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path820"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g822">
                <g id="g824" clipPath="url(#clipPath828-7)">
                  <path
                    d="m 210.555,1585.97 -38.168,812.04 172.023,-14.33 -20.976,-777.9 -112.879,-19.81"
                    style={{
                      fill: "url(#linearGradient834-7)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path836"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g838">
                <g id="g840" clipPath="url(#clipPath844-6)">
                  <path
                    d="m 953.691,2700.38 -25.386,540.04 547.185,-45.59 -5.51,-242.09 -282.69,83.72 h -58.95 l 24.67,-329.09 -199.319,-6.99"
                    style={{
                      fill: "url(#linearGradient18760)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path852"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g854">
                <g id="g856" clipPath="url(#clipPath860-0)">
                  <g id="g862" transform="matrix(649.2,0,0,428.2,61.9,82.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAABZCAYAAAAU0zdVAAAABHNCSVQICAgIfAhkiAAAASRJREFUeJzt3MERgkAQAMGF2qgMxYTNSk2AecOjOwIeU3t3cHp83q/fwIWd4+5H4Kl2vurg2nn3A/Bc4iDtnPajXDM5SOIgOa2QTA6SOEjiIImDtOM1B8GHN5JlhSQOkjhI4iA5rZD2e/cT8FiWFZI4SHt6CUYwOUhOKySTgyQOkjhI4iDt2JESdtz2IVhWSOIgiYMkDpI4SI6yJJODJA6SO6Qkk4Pk9TnJ5CA5ypJMDpI4SOIgiYO0h/0oweQgiYMkDpI4SH5ITTI5SOIgiYPkqyzJNUHSjjoI9hwkcZDEQRIHSRwkl31IJgdJHCRxkMRBEgfJV1mSyUESB0kcJHGQxEHa+flPMK45ypIsKyRxkMRBEgfJr+xJJgfJUZZkcpDEQfoDkmEZNLzh3kEAAAAASUVORK5CYII="
                      id="image864"
                    />
                  </g>
                </g>
              </g>
              <g id="g866">
                <g id="g868" clipPath="url(#clipPath872-1)">
                  <g id="g874" transform="matrix(49.2,0,0,34.2,531.9,394.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAABHNCSVQICAgIfAhkiAAAACJJREFUGJVjPB5p/Z+BCMBEjKIBVsjCQJRXGBhYGBiJUwgA9qMDbD5DogsAAAAASUVORK5CYII="
                      id="image876"
                    />
                  </g>
                </g>
              </g>
              <path
                d="m 1246.73,2710.66 -14.72,247.5 484.45,-140.03 0.51,-90.96 -61.97,-2.18 v 28.76 l -358.34,74.59 7.45,-115.66 -57.38,-2.02"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path878"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1716.97,2727.17 -0.51,90.96 -484.45,140.03 -1.41,23.75 511.32,-151.42 0.73,-102.42 -25.68,-0.9"
                style={{
                  fill: "#742130",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path880"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1153.01,2707.37 -24.67,329.09 h 58.95 l 19.45,-327.2 -53.73,-1.89"
                style={{
                  fill: "#742130",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path882"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1206.74,2709.26 -19.45,327.2 282.69,-83.72 311.73,-92.31 0.94,-130.96 -40,-1.4 -0.73,102.42 -511.32,151.42 1.41,-23.75 14.72,-247.5 -39.99,-1.4"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path884"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1304.11,2712.68 -7.45,115.66 1.84,-28.44 324,-63.65 0.02,-12.4 -318.41,-11.17"
                style={{
                  fill: "#e0b189",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path886"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1622.52,2723.85 -0.02,12.4 -324,63.65 -1.84,28.44 358.34,-74.59 v -28.76 l -32.48,-1.14"
                style={{
                  fill: "#742130",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path888"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1920.46,1346.67 -8.34,1888.76 7.25,-3.55 v 41.89 -41.89 h 0.03 l 1.22,-1885.21 h -0.16"
                style={{
                  fill: "#357b48",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path890"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 0,46.2695 V 171 L 697.102,588.551 701.266,504.539 571.895,420 541.289,400 69.8672,91.9297 0,46.2695"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path892"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 0,171 v 38.621 L 695.789,615.039 697.102,588.551 0,171"
                style={{
                  fill: "#b76331",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path894"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1835.81,1243.79 -1.07,41.59 102.76,61.16 v -35.37 l -101.69,-67.38"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path896"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1834.74,1285.38 -0.37,14.55 86.09,46.74 h 0.16 v -0.42 l 16.88,0.29 -102.76,-61.16"
                style={{
                  fill: "#b76331",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path898"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1919.37,3231.88 -7.25,3.55 L 351.234,4000 H 542.145 L 1919.37,3273.77 v -41.89"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path900"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1919.4,3231.88 h -0.03 v 41.89 l 0.03,-41.89"
                style={{
                  fill: "#742130",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path902"
                inkscapeconnector-curvature={0}
              />
              <g id="g904">
                <g id="g906" clipPath="url(#clipPath910-9)">
                  <path
                    d="m 7000,190.621 -727.98,424.168 9.97,201.27 248.09,-106.438 24.93,530.429 L 7000,1002.34 V 190.621 M 5133.45,1299.7 l -86.25,46.82 0.04,72.42 8.03,1816.54 L 6616.06,4000 H 7000 V 2763.85 l -274.7,-74.07 40.41,859.79 -612.79,-296.75 v -557.31 l -338.52,11.88 24.67,329.07 h -58.96 l -594.42,-176.03 -0.94,-130.94 -14.6,0.51 -36.7,-1430.3 m 1185.53,263.04 25.2,508.54 149.9,5.45 v -499.39 l -175.1,-14.6"
                    style={{
                      fill: "url(#linearGradient916-9)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path918"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g920">
                <g id="g922" clipPath="url(#clipPath926-1)">
                  <path
                    d="m 7000,1002.34 -444.99,237.71 16.16,343.71 -77.09,-6.42 v 499.39 l 202.75,7.37 28.47,605.68 274.7,74.07 V 1002.34"
                    style={{
                      fill: "url(#linearGradient18762)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path934"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g936">
                <g id="g938" clipPath="url(#clipPath942-1)">
                  <path
                    d="m 6344.18,2071.28 30.55,616.44 -221.81,7.79 v 557.31 l 612.79,296.75 -40.41,-859.79 -231.22,-62.35 v -550.7 l -149.9,-5.45"
                    style={{
                      fill: "url(#linearGradient18764)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path950"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g952">
                <g id="g954" clipPath="url(#clipPath958-9)">
                  <path
                    d="m 6494.08,2076.73 v 550.7 l 231.22,62.35 -28.47,-605.68 -202.75,-7.37"
                    style={{
                      fill: "url(#linearGradient18766)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path966"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g968">
                <g id="g970" clipPath="url(#clipPath974-7)">
                  <path
                    d="m 6530.08,709.621 -248.09,106.438 4.57,92.203 33.44,273.408 -19.89,0.19 18.87,380.88 175.1,14.6 V 1272.6 l 60.93,-32.55 -24.93,-530.429"
                    style={{
                      fill: "url(#linearGradient18768)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path982"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g984">
                <g id="g986" clipPath="url(#clipPath990-6)">
                  <path
                    d="m 6555.01,1240.05 -60.93,32.55 v 304.74 l 77.09,6.42 -16.16,-343.71"
                    style={{
                      fill: "url(#linearGradient18770)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path998"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <path
                d="m 5720.67,2710.68 -57.38,2.01 5.61,87.21 h 0.01 l 1.82,28.44 -358.33,-74.59 v -28.74 l -61.96,2.17 0.51,90.95 484.44,140.03 -14.72,-247.48"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1000"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5250.44,2727.18 -25.7,0.9 0.74,102.41 511.32,151.42 -1.42,-23.75 -484.43,-140.03 -0.51,-90.95"
                style={{
                  fill: "#742130",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1002"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5814.4,2707.39 -53.74,1.88 19.45,327.19 h 58.96 l -24.67,-329.07"
                style={{
                  fill: "#742130",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1004"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5760.66,2709.27 -39.99,1.41 14.71,247.48 1.42,23.75 -511.32,-151.42 -0.74,-102.41 -39.99,1.41 0.94,130.94 594.42,176.03 -19.45,-327.19"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1006"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5663.29,2712.69 -318.41,11.18 0.02,12.38 324.01,63.65 -5.62,-87.21"
                style={{
                  fill: "#e0b189",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1008"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5344.88,2723.87 -32.48,1.14 v 28.74 l 358.33,74.59 -1.82,-28.44 -324.01,-63.65 -0.02,-12.38"
                style={{
                  fill: "#742130",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1010"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5047.24,1418.94 1.18,1813.18 6.85,3.36 -8.03,-1816.54"
                style={{
                  fill: "#357b48",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1012"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 7000,25.2383 -733.45,479.3007 4.15,83.75 L 7000,151.461 V 25.2383"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1014"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 7000,151.461 -729.3,436.828 1.32,26.5 L 7000,190.621 v -39.16"
                style={{
                  fill: "#b76331",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1016"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5132.01,1243.79 -101.69,67.38 v 35.12 l 102.75,-61.17 -1.06,-41.33"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1018"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5133.07,1285.12 -102.75,61.17 v 0.25 l 16.88,-0.29 v 0.27 l 86.25,-46.82 -0.38,-14.58"
                style={{
                  fill: "#b76331",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1020"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5048.42,3232.12 0.03,41.65 1377.23,726.23 h 190.38 l -1560.79,-764.52 -6.85,-3.36"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1022"
                inkscapeconnector-curvature={0}
              />
              <g id="g1024">
                <g id="g1026" clipPath="url(#clipPath1030-6)">
                  <path
                    d="m 2583.82,2932.75 -3.49,1.84 h 1.21 l 2.29,-1.84 m -8.52,6.84 h -4.52 l -246.41,129.16 h 89.93 l 161,-129.16 M 2406.52,3075 h -94.06 l -159.76,83.75 v 0.02 l 3.81,25.69 2.24,-1.33 2.2,26.46 h 313.23 l 17.4,-12.79 -211.11,-20.67 126.05,-101.13 m 95.03,128.52 -8.05,6.07 h 128.56 -124.77 l 4.26,-6.07 m 204.49,14.29 h -223.45 l -214.78,161.85 h 1018.04 l 23.39,-102.76 -603.2,-59.09 m -243.06,0 h -301.34 l 0.23,2.82 -85,53.14 h -157.5 l -200.81,105.89 h 524.09 l 220.33,-161.85 m 2584.94,55.96 h -153.04 l 62.02,105.89 h 291.83 l -200.81,-105.89 m -1725.73,4.4 -20.97,101.49 h 396.89 l -13.64,-66 -362.28,-35.49 m 376.58,36.89 14.71,64.6 h 644.78 l -659.49,-64.6 m 1574.27,77.42 H 4964.4 l 28.93,49.4 -161.26,-15.8 20.82,15.8 12.28,17.48 305.73,224.58 h 654.87 l -552.73,-291.46 m -1550.21,0 h -6.44 l 66.34,291.46 h 1352.55 l -12.25,-9.23 6.48,9.23 H 3784.58 l -19.51,-85.73 16.1,-23.21 H 4990.72 L 4854.09,3472.04 H 3734.57 l -16.54,-72.64 4.8,-6.92 m -22.07,0 h -402.19 l -60.22,291.46 h 522.63 l -60.22,-291.46 m -417.83,0 h -4.6 l 3.47,4.99 1.13,-4.99 m -1069.54,0 h -519.13 l -552.73,291.46 h 686.89 l 309.55,-227.39 10.31,-14.67 65.11,-49.4 m 1051.43,79.56 H 2145.23 L 2008.61,3575 H 3220 l 16.11,23.21 28.71,-126.17 m -39.53,173.67 -8.7,38.23 H 1871.66 l 8.57,-12.19 -16.18,12.19 h 1352.54 l 8.7,-38.23 m 2632.21,54.97 H 5193.68 L 5601.17,4000 h 823.98 L 5857.5,3700.68 m -700.01,0 H 3786.54 l 68.13,299.32 h 1700.01 l -397.19,-299.32 m -1393.06,0 H 3234.89 L 3173.04,4000 h 653.24 l -61.85,-299.32 m -551.65,0 H 1841.84 L 1444.64,4000 h 1700.01 l 68.13,-299.32 m -1407.14,0 H 1109.79 L 542.145,4000 h 856.015 l 407.48,-299.32"
                    style={{
                      fill: "url(#linearGradient1038-9)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1040"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <path
                d="m 2491.58,3196.8 -17.4,12.79 h 19.32 l 8.05,-6.07 3.77,-5.37 -13.74,-1.35 m -8.99,21.01 h -19.61 l -220.33,161.85 h 25.16 l 214.78,-161.85 m 826.65,59.09 -23.39,102.76 h 15.37 l 20.97,-101.49 -12.95,-1.27 m -10.67,115.58 h -15.64 l -1.13,4.99 1.34,1.93 -16.53,72.64 h -1.79 l -28.71,126.17 v 0 l -10.82,47.5 -8.7,38.23 h 21.76 l 60.22,-291.46 m -1160.6,64.07 -309.55,227.39 h 35.63 l 16.18,-12.19 16.43,-23.41 96.67,-73.34 h 15.28 l 136.62,-102.96 h -18.13 l 10.87,-15.49 m 1096.92,244.13 h -22.11 L 3144.65,4000 h 28.39 l 61.85,-299.32 m -1393.05,0 h -36.2 L 1398.16,4000 h 46.48 l 397.2,-299.32"
                style={{
                  fill: "#c1643d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1042"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3684.47,3313.66 13.64,66 h 15.37 l -14.71,-64.6 -14.3,-1.4 m 31.92,78.82 h -15.63 l 60.22,291.46 h 21.75 l -66.34,-291.46 m 1148.78,66.88 8.9,12.68 h -19.98 L 4990.72,3575 h 17.12 l 96.67,73.34 18.52,26.37 12.25,9.23 h 35.62 l -305.73,-224.58 m 328.51,241.32 h -36.19 L 5554.68,4000 h 46.49 l -407.49,-299.32 m -1407.14,0 h -22.11 l 61.85,299.32 h 28.39 l -68.13,-299.32"
                style={{
                  fill: "#c1643d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1044"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 5825.77,3683.94 H 1141.53 l -31.74,16.74 H 5857.5 l -31.73,-16.74"
                style={{
                  fill: "#c1643d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1046"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 5248.73,3379.66 H 4956.9 l 7.5,12.82 h 308.64 l -24.31,-12.82 m -890.47,0 h -2639.7 l -24.3,12.82 h 519.13 l 16.8,-12.74 h 1039.3 l 8.84,12.74 h 444.5 l 8.85,-12.74 h 627.37 l -0.79,-0.08"
                style={{
                  fill: "#c1643d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1048"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2622.06,3209.59 h -461.11 l 0.69,8.22 h 544.4 l -83.98,-8.22"
                style={{
                  fill: "#c1643d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1050"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2414.31,3068.75 h -89.93 l -11.92,6.25 h 94.06 l 7.79,-6.25"
                style={{
                  fill: "#c1643d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1052"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2581.54,2934.59 h -1.21 l -9.54,5 h 4.52 l 6.23,-5"
                style={{
                  fill: "#c1643d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1054"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 3220,3575 H 1993.33 l -96.67,73.34 H 3195 l 25,-73.34"
                style={{
                  fill: "#e0b189",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1056"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3220,3575 v 0 l -25,73.34 H 1896.66 l -16.43,23.41 -8.57,12.19 h 1344.93 l 8.7,-38.23 10.82,-47.5 v 0 L 3220,3575"
                style={{
                  fill: "#a55735",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1058"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3269.49,3379.74 h -1039.3 l -16.8,12.74 -65.11,49.4 h 1100.03 l 21.18,-62.14"
                style={{
                  fill: "#e0b189",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1060"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3269.49,3379.74 v 0 l -21.18,62.14 H 2148.28 l -10.31,14.67 -10.87,15.49 h 1139.51 l 16.53,-72.64 -1.34,-1.93 -3.47,-4.99 -8.84,-12.74"
                style={{
                  fill: "#a55735",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1062"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2505.32,3198.15 -3.77,5.37 -4.26,6.07 h 124.77 l -116.74,-11.44"
                style={{
                  fill: "#a55735",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1064"
                inkscapeconnector-curvature={0}
              />
              <path
                d="M 5007.84,3575 H 3781.17 l 25,73.34 H 5104.51 L 5007.84,3575"
                style={{
                  fill: "#e0b189",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1066"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3781.17,3575 -16.1,23.21 19.51,85.73 h 1344.93 l -6.48,-9.23 -18.52,-26.37 H 3806.17 l -25,-73.34"
                style={{
                  fill: "#a55735",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1068"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4359.05,3379.74 h -627.37 l 21.18,62.14 h 1100.03 l -20.82,-15.8 -473.02,-46.34"
                style={{
                  fill: "#e0b189",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1070"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3731.68,3379.74 -8.85,12.74 -4.8,6.92 16.54,72.64 h 1139.5 l -8.9,-12.68 -12.28,-17.48 H 3752.86 l -21.18,-62.14"
                style={{
                  fill: "#a55735",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1072"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2152.7,3158.75 v 0.02 -0.02"
                style={{
                  fill: "#cbaa41",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1074"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2076.87,3273.77 h -157.5 157.5"
                style={{
                  fill: "#742130",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1076"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2158.75,3183.13 -2.24,1.33 5.36,36.17 -0.23,-2.82 -0.69,-8.22 -2.2,-26.46 m 3.12,37.5 -85,53.14 85,-53.14"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1078"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2583.83,2932.75 -431.13,226 159.76,-83.75 11.92,-6.25 246.41,-129.16 9.54,-5 3.49,-1.84 h 0.01"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1080"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5048.45,3273.77 h -0.53 l 200.81,105.89 24.31,12.82 552.73,291.46 31.73,16.74 567.65,299.32 h 0.53 L 5048.45,3273.77"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1082"
                inkscapeconnector-curvature={0}
              />
              <g id="g1084">
                <g id="g1086" clipPath="url(#clipPath1090-2)">
                  <path
                    d="m 5021.06,0 h -227.9 L 4750.29,77.6406 5021.45,71.0508 5021.06,0 M 4761.08,0 H 3497.31 L 3496.59,108.082 4718.97,78.3984 4761.08,0 M 3469.13,0 H 2205.37 L 2279.3,137.641 3469.86,108.73 3469.13,0 M 2173.29,0 h -228.63 l -0.79,145.789 305.83,-7.43 L 2173.29,0"
                    style={{
                      fill: "url(#linearGradient1098-3)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1100"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1102">
                <g id="g1104" clipPath="url(#clipPath1108-8)">
                  <path
                    d="m 4793.16,0 h -32.08 l -42.11,78.3984 31.32,-0.7578 L 4793.16,0 M 3497.31,0 h -28.18 l 0.73,108.73 26.73,-0.648 L 3497.31,0 M 2205.37,0 h -32.08 l 76.41,138.359 29.6,-0.718 L 2205.37,0"
                    style={{
                      fill: "url(#linearGradient1116-0)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1118"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1120">
                <g id="g1122" clipPath="url(#clipPath1126-8)">
                  <g id="g1128" transform="matrix(1047.2,0,0,183.2,906.9,-8.1)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAAmCAYAAACiTYW5AAAABHNCSVQICAgIfAhkiAAAAKdJREFUeJzt2kENwzAUBUG7Mr0CKshSiovCGymdQfAvq6dYmd/Pew/gqNfdB8A/EBoEhAaBtefdJ8DzWTQICA0CQoOA0CAgNAiscXl2hNMsGgTWmH51hNMsGgSEBgGhQWANn2hwnEWDwBomDY6zaBAQGgSEBoG1r7tPgOezaBAQGgQ870PAokFAaBAQGgSEBgGhQUBoEBAaBIQGAaFBQGgQEBoEhAaBHzZNCuVOaNXEAAAAAElFTkSuQmCC"
                      id="image1130"
                    />
                  </g>
                </g>
              </g>
              <g id="g1132">
                <g id="g1134" clipPath="url(#clipPath1138-6)">
                  <g id="g1140" transform="matrix(1071.2,0,0,519.2,-5.1,-8.1)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN8AAABsCAYAAADqp2f3AAAABHNCSVQICAgIfAhkiAAAAYlJREFUeJzt3cERgzAMAEHBqKqUkobTFdBF7sFuBXxu5Ng4HL/v5x7g73aO+hHgnXYu9UHhrB8A3kp8ENk57bdAweSDiPggYrcTIiYfRMQHEfFBRHwQ2XHMBwkvVkPEshMi4oOI+CAiPojY7YTIXvUTwEtZdkJEfBDZ0yE7JEw+iNjthIjJBxHxQUR8EBEfRHbsuEBix21aSFh2QkR8EBEfRMQHEfFBxFEDREw+iIgPIv7DBSImH0S8XgYRkw8ijhogYvJBRHwQER9ExAeRPey3QMLkg4j4ICI+iIgPIj6UAhGTDyLig4j4IOJWA0T8jQREdtQHCb/5ICI+iIgPIuKDiPgg4jItREw+iIgPIuKDiPggIj6IuNUAEZMPIuKDiPggIj6IiA8iO7dvskPBUQNELDshIj6IiA8i4oOIrxRBxOSDiKMGiJh8EBEfRMQHEbudEDH5ICI+iIgPIuKDiPggIj6IrJMGaJh8EBEfRNxqgMje2oOEZSdExAcR8UFEfBARH0R2bHdC4gF6piBd7Q1pSQAAAABJRU5ErkJggg=="
                      id="image1142"
                    />
                  </g>
                </g>
              </g>
              <g id="g1144">
                <g id="g1146" clipPath="url(#clipPath1150-1)">
                  <g
                    id="g1152"
                    transform="matrix(572.2,0,0,437.2,531.9,-8.10001)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABbCAYAAABJVxrHAAAABHNCSVQICAgIfAhkiAAAASJJREFUeJzt24ENgkAUBcE787uyEiu2q4MqCMlmpgKSzUMOdf9/32uR9Hn7AniOuGHihokbNsvjVNas/fYl8BS35TBxw8QNEzfM03KY5YaJG+acG2a5YR6owiw3TNwwccPEDRM3TNywWc5CWZYbNsf7xyzLDRM3TNwwccMchcIsN0zcMHHDZl9eYlRZbpi4YY5CYZYbJm6Y3y2HWW6YuGHihs3xoZtluWGzztuXwFMsN0zcMHHDxA0TN2y2Y26W5YaJGyZumLhh4ob5gVyY5YaJGyZumLhh4obN8i+/LEehMLflMHHDxA0TN8y//MIsN8xRKMxyw8QNEzfM03KY5YaJGyZumLhh4oaJGzZOQl2WGyZumG+FwubSNsttOUzcMHHDbvjMGistVci6AAAAAElFTkSuQmCC"
                      id="image1154"
                    />
                  </g>
                </g>
              </g>
              <g id="g1156">
                <g id="g1158" clipPath="url(#clipPath1162-9)">
                  <g
                    id="g1164"
                    transform="matrix(836.2,0,0,217.2,5015.9,-8.10001)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAtCAYAAAA3KFCYAAAABHNCSVQICAgIfAhkiAAAALlJREFUeJzt3MEJwzAUBUEp/PrSUGpMS1ZqcC5mYaYCHZaHEbb39/M+C2JeTx8A/iFckoRLknBJmnU9fQS4b9ZyqUCPRwWShEuScEkSLklz9tNHgPssLknCJUm4JAmXJOGSNOtyrUCPxSVp1vaSDT0WlyThkiRcksZ75BRZXJJ8ukOSxSVJuCQJl6Q5/qtAkMUlSbgkuQ4jyeKSJFyShEuScEkSLknCJUm4JAmXJOGSJFyShEuScEn6AXKFDPf+tlSnAAAAAElFTkSuQmCC"
                      id="image1166"
                    />
                  </g>
                </g>
              </g>
              <g id="g1168">
                <g id="g1170" clipPath="url(#clipPath1174-4)">
                  <g id="g1176" transform="matrix(816.2,0,0,519.2,6191.9,-8.1)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAABsCAYAAAD6xykrAAAABHNCSVQICAgIfAhkiAAAAX9JREFUeJzt3MGRgzAQAMGF2qgcyiV8WRmHYP9gqroj4DG1smTB8f/3ugYebue4+xHgu523Unm+8+4HgF8IlYSd016K5zNRSRAqCXb9JJioJAiVBKGSIFQSdhyjEuBSCgmWfhKESoJQSRAqCXb9JOz77ieAH1j6SRAqCXs68CfARCXBrp8EE5UEoZIgVBKESsKO3RQBO25OE2DpJ0GoJAiVBKGSIFQSHE+RYKKSIFQSvDNFgolKgr9QSTBRSXA8RYKJSoJQSRAqCUIlYQ97KQJMVBKESoJQSRAqCT6SRoKJSoJQSRAqCW5PkeBVFBJ2lEqA36gkCJUEoZIgVBKESoKL0ySYqCQIlQShkiBUEoRKgttTJJioJAiVBKGSIFQShErCzuUb/jyf4ykSLP0kCJUEoZIgVBJ8zY8EE5UEx1MkmKgkCJUEoZJg10+CiUqCUEkQKglCJUGoJAiVhHU6RYGJSoJQSXB7ioS9dEqApZ8EoZIgVBKESoJQSdix7SfgA9NKIF14ZRwVAAAAAElFTkSuQmCC"
                      id="image1178"
                    />
                  </g>
                </g>
              </g>
              <g id="g1180">
                <g id="g1182" clipPath="url(#clipPath1186-1)">
                  <g id="g1188" transform="matrix(216.2,0,0,34.2,6215.9,394.9)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAHCAYAAACcLcTKAAAABHNCSVQICAgIfAhkiAAAACxJREFUOI1jPB5p/Z9hiAGmgXYAOWDU0fQCQ9LRLAxDLhsyMLAwMA60E0gHADEsA2yY9aOjAAAAAElFTkSuQmCC"
                      id="image1190"
                    />
                  </g>
                </g>
              </g>
              <path
                d="M 7000,24.9609 6426.09,400 l -30.6,20 -129.15,84.398 0.21,0.141 L 7000,25.2383 v -0.2774"
                style={{
                  fill: "#ab441f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1192"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4362.34,1760.79 -0.11,0.08 v 0 l 0.11,-0.07 v -0.01 m -308.81,200.16 -103.67,67.19 h 0.01 l 102.44,-66.4 1.22,-0.79"
                style={{
                  fill: "#fffbf2",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1194"
                inkscapeconnector-curvature={0}
              />
              <g id="g1196">
                <g id="g1198" clipPath="url(#clipPath1202-3)">
                  <path
                    d="m 3839.3,2647.5 h -79.35 l 93.03,68.33 h 116.68 L 3839.3,2647.5 m -79.35,0 h -17.48 c -2.94,2.88 -5.93,5.68 -8.96,8.37 -35.44,31.48 -77.2,49.99 -121.02,50.19 h -1.48 v 0 c -18.55,-0.09 -36.33,-3.46 -53.07,-9.72 l 4.44,19.49 h 288.25 l -90.68,-68.33 m -271.78,0 h -4.63 c -2.94,2.88 -5.93,5.68 -8.96,8.37 -9.03,8.02 -18.46,15.2 -28.24,21.44 l -7.96,38.52 h 122.57 l -4.12,-19.91 c -24.95,-9.53 -47.55,-25.48 -66.89,-46.48 -0.59,-0.64 -1.18,-1.29 -1.77,-1.94 m -258.93,0 H 3128 l -130.36,68.33 h 148.71 l 86.99,-63.9 c -0.78,-0.82 -1.56,-1.65 -2.33,-2.49 -0.59,-0.64 -1.18,-1.29 -1.77,-1.94 m 4.16,4.5 -84.7,63.83 h 288.25 l 8.66,-38.05 c -28.41,17.99 -59.66,28.13 -92.05,28.28 h -1.47 v 0 c -45.56,-0.22 -86.47,-20.24 -118.69,-54.06 m 741.03,66.33 h -118.05 l 170.73,125.42 h 186.57 l -239.25,-125.42 m -120.48,0 h -291 l 28.55,125.42 h 2.97 l 3.46,-4.74 h 416.15 l -160.13,-120.68 m -292.49,0 h -123.6 l -25.91,125.42 h 175.43 l -25.92,-125.42 m -125.08,0 h -291 l -153.5,115.68 46.37,5 h 365 l 3.46,4.74 h 1.12 l 28.55,-125.42 m -293.44,0 h -150.07 l -80.61,42.26 48.24,70.03 25.79,2.79 156.65,-115.08 m 1080.28,130.42 h -189.3 l 116.85,85.84 h 225 l 1.33,-5.17 -153.88,-80.67 m -630.27,0 h -0.32 l 11.68,51.3 2.63,0.28 5.32,-7.55 h 473.17 l -30.01,-22.62 3.12,4.24 h -459.45 l -6.14,-25.65 m -4.54,0 h -177.49 l -6.16,29.78 194.13,20.93 -10.48,-50.71 m -187.55,25.65 h -34.44 l 33.61,3.62 0.83,-3.62 m 732.58,54.56 3.98,5.58 h -213.21 l 0.42,0.05 h 216.28 l -7.47,-5.63 m 241.04,10.63 h -216.9 l 32.1,23.58 173.87,18.74 10.93,-42.32 m -226.94,0 H 3971 l 206.02,22.21 -29.48,-22.21"
                    style={{
                      fill: "url(#linearGradient1210-4)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1212"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1214">
                <g id="g1216" clipPath="url(#clipPath1220-7)">
                  <path
                    d="m 4747.84,1023.93 -529.42,16.77 -128.71,233.07 h 573.94 l 84.19,-249.84 m -545.98,17.29 -711.64,22.54 -1.4,210.01 h 588.14 l 124.9,-232.55 m -725.63,22.99 -687.6,21.78 100.85,187.78 h 588.15 l -1.4,-209.56 m -702.92,22.26 -611.44,19.37 78.91,121.15 50.49,46.78 h 585.47 l -103.43,-187.3 m 1885.47,201.75 h -577.06 l -124.73,225.86 h 458.77 l 242.67,-224.8 0.35,-1.06 m -589.58,0 h -580.48 l -1.5,225.86 h 460.68 l 121.3,-225.86 m -591.48,0 h -580.47 l 121.3,225.86 h 460.68 l -1.51,-225.86 m -592.99,0 h -577.85 l 243.81,225.86 h 458.77 l -124.73,-225.86 m 1519.43,236.6 h -453.11 l -87.22,157.95 h 369.83 l 170.5,-157.95 m -462.03,0 h -454.99 l -1.05,157.95 h 371.2 l 84.84,-157.95 m -462.82,0 h -454.99 l 84.83,157.95 h 371.21 l -1.05,-157.95 m -463.92,0 h -453.11 l 170.51,157.95 h 369.83 l -87.23,-157.95 m 1208.66,166.86 h -365.14 l -77.21,139.79 h 291.44 l 150.91,-139.79 m -371.53,0 h -366.49 l -0.93,139.79 h 292.33 l 75.09,-139.79 m -372.1,0 h -366.49 l 75.08,139.79 h 292.34 l -0.93,-139.79 m -372.88,0 H 2742.4 l 150.9,139.79 h 291.45 l -77.21,-139.79 m 1254.8,69.07 -0.11,0.08 v 0.04 l 0.11,-0.08 v -0.04 m -296.81,77.78 h -287.72 l -63.5,114.99 h 227.1 l 124.12,-114.99 m -291.88,0 h -288.6 l -0.77,114.99 h 227.62 l 61.75,-114.99 m -292.25,0 h -288.6 l 61.76,114.99 h 227.6 l -0.76,-114.99 m -292.76,0 h -287.72 l 124.12,114.99 h 227.1 l -63.5,-114.99 m 868.32,120.18 h -0.04 l -107.11,69.43 h 0.05 l 103.67,-67.19 3.43,-2.24 m -121.17,0 h -224.36 l -43.96,79.61 h 182.38 l 85.94,-79.61 m -226.69,0 h -224.85 l -0.53,79.61 h 182.62 l 42.76,-79.61 m -226.9,0 h -224.85 l 42.76,79.61 h 182.62 l -0.53,-79.61 m -227.19,0 h -224.36 l 85.95,79.61 h 182.38 l -43.97,-79.61 m 591.23,82.97 h -180.63 l -25.01,45.31 h 156.72 l 48.92,-45.31 m -181.7,0 H 3483.7 l -0.31,45.31 h 156.82 l 24.33,-45.31 m -181.79,0 h -180.84 l 24.34,45.31 h 156.8 l -0.3,-45.31 m -181.92,0 h -180.62 l 48.91,45.31 h 156.74 l -25.03,-45.31 m 494.86,46.81 h -155.92 l -13.27,24.01 12.89,-24.01 h -156.01 l -0.16,24.01 -0.16,-24.01 h -156.01 l 12.9,24.01 -13.26,-24.01 h -155.94 l 25.91,24.01 h -47.6 669.26 -48.53 l 25.9,-24.01"
                    style={{
                      fill: "url(#linearGradient1228-3)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1230"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1232">
                <g id="g1234" clipPath="url(#clipPath1238-9)">
                  <path
                    d="m 2605.05,1761.37 -0.63,89.01 28.86,85.86 230.47,49.1 -0.16,142.44 c 3.48,-2.33 7,-4.55 10.57,-6.64 l 12.65,-170.1 -281.65,-182.91 v -6.7 l -0.11,-0.06 m 431.81,280.31 h -0.04 l -0.53,74.39 c 14.51,8.02 28.04,18.32 40.37,30.59 9.8,9.76 18.84,20.76 27.01,32.86 7.18,10.62 13.69,22.08 19.47,34.27 7.2,15.23 13.25,31.61 18.01,48.91 l 5.52,-146.73 -109.81,-70.03 v -4.26 m 96.07,439.27 c -7.65,22.41 -17.25,43.45 -28.47,62.72 -7.11,12.22 -14.89,23.73 -23.22,34.42 -0.63,0.81 -1.26,1.61 -1.9,2.41 -4.16,5.21 -8.45,10.22 -12.87,15.01 -5.83,6.33 -11.89,12.29 -18.14,17.84 -2.92,2.59 -5.89,5.1 -8.89,7.52 -33.65,27.04 -72.37,42.66 -112.85,42.66 -18.12,0 -35.52,-3.13 -51.93,-9.02 l 31.76,94.5 220.53,-109.08 5.98,-158.98"
                    style={{
                      fill: "url(#linearGradient1244-2)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1246"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1248">
                <g id="g1250" clipPath="url(#clipPath1254-8)">
                  <path
                    d="m 4362.34,1760.8 -0.11,0.07 v 7.26 l -281.64,182.9 2.48,33.26 280.44,-59.75 -1.17,-163.74 m -310.03,200.94 -102.44,66.4 0.74,0.03 101.7,-66.43 m -121.73,79.94 h -0.05 v 4.26 l -110.52,70.48 6.36,168.94 c 8.51,-28.29 20.1,-54.62 34.13,-78.21 7.24,-12.19 15.15,-23.65 23.62,-34.27 7.59,-9.51 15.62,-18.35 24.05,-26.43 7.39,-7.09 15.07,-13.6 23.02,-19.48 l -0.61,-85.29 m 298.51,319.79 c -0.12,3.95 -0.3,7.91 -0.55,11.9 -3.69,60.97 -21.29,117.43 -48.22,163.67 -7.65,13.14 -16.06,25.46 -25.12,36.83 -9.64,12.08 -20.03,23.09 -31,32.84 -35.64,31.65 -77.66,50.19 -121.75,50.19 v 0 c -46.99,0 -89.08,-21.06 -121.81,-56.62 -7.46,-8.09 -14.43,-16.92 -20.86,-26.43 -7.67,-11.36 -14.58,-23.67 -20.65,-36.82 -1.23,-2.68 -2.43,-5.39 -3.59,-8.13 l 4.16,110.72 542.89,268.52 3.22,-12.47 30.27,-246.54 -47.52,-14.18 -0.34,-48.99 -48.06,-7.62 -0.23,-202.46 -90.84,-14.41"
                    style={{
                      fill: "url(#linearGradient1260-7)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1262"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <path
                d="m 3146.67,2115.97 -5.52,146.73 c 9.81,35.75 14.08,75.47 11.54,117.31 -2.16,35.55 -9.05,69.58 -19.76,100.94 l -5.98,158.98 v 0 l 2.76,-73.21 51.8,0.3 c -15.94,-42.32 -23.56,-91.72 -20.36,-144.5 3.77,-62.09 21.95,-119.51 49.73,-166.21 6.58,-11.06 13.7,-21.53 21.29,-31.31 h -88.84 l 3.36,-109.01 -0.02,-0.02 m 673.34,0.45 -0.14,0.09 4.08,108.49 h -33.14 c 6.41,9.78 12.25,20.25 17.49,31.32 5.84,12.35 10.93,25.44 15.17,39.18 0.92,-3.41 1.89,-6.79 2.9,-10.14 l -6.36,-168.94 m 5.14,383.97 c -6.76,25 -15.9,48.58 -27.01,70.24 l 38.82,0.22 2.58,68.69 0.16,0.08 -4.16,-110.72 c -3.88,-9.15 -7.35,-18.66 -10.39,-28.51"
                style={{
                  fill: "#edee71",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1264"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3129.71,2566.72 -2.76,73.21 1.05,-0.51 v 8.08 h 101.24 c -6.78,-7.55 -13.16,-15.73 -19.07,-24.49 -7.68,-11.36 -14.59,-23.67 -20.66,-36.82 -2.86,-6.21 -5.53,-12.6 -8,-19.17 l -51.8,-0.3 m 668.43,3.91 c -2.72,5.3 -5.56,10.5 -8.51,15.57 -7.66,13.14 -16.07,25.45 -25.13,36.83 -6.97,8.74 -14.34,16.92 -22.03,24.47 h 96.83 v -8.08 l 0.24,0.12 -2.58,-68.69 -38.82,-0.22 M 3486,2645.05 c -0.81,0.82 -1.63,1.64 -2.46,2.45 h 4.63 c -0.72,-0.81 -1.45,-1.63 -2.17,-2.45"
                style={{
                  fill: "#fef5d3",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1266"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3818.32,2112.5 h -669.26 v 5 l -2.37,-1.51 -3.36,109.01 h 88.84 c 0.77,-0.99 1.55,-1.98 2.33,-2.96 7.58,-9.52 15.62,-18.35 24.05,-26.43 37.06,-35.56 81.7,-56.62 128.7,-56.62 v 0 c 44.08,0 83.86,18.54 115.64,50.2 3.47,3.45 6.84,7.06 10.11,10.81 1.48,-1.49 2.97,-2.95 4.47,-4.39 37.06,-35.56 81.71,-56.62 128.7,-56.62 v 0 c 44.09,0 83.86,18.54 115.65,50.2 9.8,9.76 18.84,20.76 27.02,32.85 0.66,0.98 1.32,1.97 1.97,2.96 h 33.14 l -4.08,-108.49 -1.55,0.99 v -5"
                style={{
                  fill: "#fef5d3",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1268"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3233.34,2651.93 -86.99,63.9 h 2.35 l 84.7,-63.83 c -0.02,-0.02 -0.04,-0.05 -0.06,-0.07 m 213,25.38 c -0.24,0.16 -0.49,0.31 -0.73,0.47 l -8.66,38.05 h 1.43 l 7.96,-38.52 m -8.48,41.02 h -1.48 l -28.55,125.42 h 4.12 l 25.91,-125.42 m -292.48,0 h -2.44 l -156.65,115.08 5.59,0.6 153.5,-115.68 m 265.54,130.42 h -2.7 l -6.14,25.65 h -1.22 l -0.83,3.62 4.73,0.51 6.16,-29.78"
                style={{
                  fill: "#e4a960",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1270"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3759.95,2647.5 v 0 l 90.68,68.33 h 2.35 l -93.03,-68.33 m -203.12,48.42 4.12,19.91 h 1.43 l -4.44,-19.49 c -0.37,-0.13 -0.74,-0.27 -1.11,-0.42 m 299.55,22.41 h -2.43 l 160.13,120.68 h 2.9 l 6.57,4.74 h 3.56 l -170.73,-125.42 m -293.43,0 h -1.49 l 25.92,125.42 h 4.12 l -28.55,-125.42 m 470.97,130.42 h -3.44 l 19.52,14.08 5.42,7.33 30.01,22.62 h 4.61 l 37.65,28.11 5.75,8.07 7.47,5.63 h 9.86 l -116.85,-85.84 m -441.29,0 h -4.22 l 10.48,50.71 5.42,0.59 -11.68,-51.3 m 564.95,90.84 h -10.04 l 29.48,22.21 12.66,1.37 -32.1,-23.58"
                style={{
                  fill: "#e4a960",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1272"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4375.77,2934.59 h -451.14 l 46.37,5 h 403.48 l 1.29,-5"
                style={{
                  fill: "#e4a960",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1274"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4213.68,2843.75 h -190.13 l 6.93,5 h 192.74 l -9.54,-5 m -619.21,0 h -187.76 l 2.04,2.8 -0.53,2.2 h 184.73 l -0.53,-2.2 2.05,-2.8"
                style={{
                  fill: "#e4a960",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1276"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3969.66,2715.83 h -972.02 l -4.77,2.5 h 981.56 l -4.77,-2.5"
                style={{
                  fill: "#e4a960",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1278"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3403.25,2839.01 h -365 l 220.94,23.82 h 135.52 l 8.54,-23.82"
                style={{
                  fill: "#fef5d3",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1280"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3403.25,2839.01 v 0 l -8.54,23.82 h -135.52 l 107.23,11.57 h 35.66 l 6.14,-25.65 0.53,-2.2 -2.04,-2.8 -3.46,-4.74"
                style={{
                  fill: "#cf9c53",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1282"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4090.04,2892.78 h -477.78 l 2.93,8.44 182.46,19.67 h 330.04 l -37.65,-28.11"
                style={{
                  fill: "#fef5d3",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1284"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3612.26,2892.78 -5.32,7.55 8.25,0.89 -2.93,-8.44 m 515.43,28.11 h -330.04 l 126.56,13.65 h 213.21 l -3.98,-5.58 -5.75,-8.07"
                style={{
                  fill: "#cf9c53",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1286"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4016.98,2839.01 h -419.05 l 8.53,23.82 H 4050 l -19.52,-14.08 -6.93,-5 -6.57,-4.74"
                style={{
                  fill: "#fef5d3",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1288"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3597.93,2839.01 -3.46,4.74 -2.05,2.8 0.53,2.2 6.14,25.65 h 459.45 l -3.12,-4.24 -5.42,-7.33 h -443.54 l -8.53,-23.82"
                style={{
                  fill: "#cf9c53",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1290"
                inkscapeconnector-curvature={0}
              />
              <g id="g1292">
                <g id="g1294" clipPath="url(#clipPath1298-8)">
                  <path
                    d="m 2266.18,1265.99 5.07,7.78 h 3.48 l -8.55,-7.78 m 24.44,22.23 h -9.96 l 147.1,225.86 h 111.12 l -248.26,-225.86 m 260.07,236.6 h -115.93 l 102.87,157.95 h 186.68 l -173.62,-157.95 m 183.41,166.86 h -190.67 l 15.82,24.29 4.9,14.59 4.64,3.03 15.04,-0.71 21.33,13.94 -0.11,14.55 0.11,0.06 v -14.61 l 125.21,84.65 h 157.39 L 2734.1,1691.68 m 161.41,146.85 H 2740.8 l 154.26,104.28 11.41,7.46 -0.19,3.25 h 115.63 l -126.4,-114.99 m 132.11,120.18 h -117.18 l 106.35,69.46 8.3,-0.39 11.77,7.69 -0.02,2.85 h 0.02 v -2.85 l 4.15,2.85 h 74.12 l -87.51,-79.61 m 91.19,82.97 h -72.92 l 66.01,45.31 h 56.72 l -49.81,-45.31 m 51.47,46.81 h -56.19 l 34.97,24.01 h 47.6 l -26.38,-24.01"
                    style={{
                      fill: "url(#linearGradient1306-9)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1308"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1310">
                <g id="g1312" clipPath="url(#clipPath1316-8)">
                  <path
                    d="m 4651.25,1310.59 -223.68,203.49 h 155.11 l 68.57,-203.49 m -72.19,214.23 h -163.31 l -173.61,157.95 h 231.35 v 1.92 l 66.29,-43.31 v 0 l 39.28,-116.56 m -116.28,166.86 h -230.43 l -153.67,139.79 h 158.33 l 125.22,-84.65 v 14.01 l 0.11,-0.08 -0.09,-13.93 21.32,-13.94 15.04,0.71 64.17,-41.91 m -236.2,146.85 h -155.64 l -126.4,114.99 h 116.58 l -0.19,-3.25 11.39,-7.44 v -0.02 l 154.26,-104.28 m -169.66,120.18 h -118.09 l -87.51,79.61 h 75.05 l 4.16,-2.85 v 2.85 h 0.03 l -0.02,-2.85 11.77,-7.69 7.5,0.36 107.11,-69.43 m -135.43,82.97 h -73.85 l -49.82,45.31 h 57.67 l 66,-45.31 m -68.2,46.81 h -57.12 l -26.38,24.01 h 48.53 l 34.97,-24.01"
                    style={{
                      fill: "url(#linearGradient1324-3)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1326"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1328">
                <g id="g1330" clipPath="url(#clipPath1334-6)">
                  <path
                    d="m 4218.42,1040.7 -16.56,0.52 -124.9,232.55 h -588.14 l 1.4,-210.01 -13.99,0.45 1.4,209.56 h -588.15 l -100.85,-187.78 -15.32,0.48 103.43,187.3 h -585.47 l -50.49,-46.78 25.4,39 8.55,7.78 h -3.48 l 9.41,14.45 h 9.96 l 248.26,225.86 h -111.12 l 7,10.74 h 115.93 l 173.62,157.95 h -186.68 l 5.8,8.91 h 190.67 l 153.66,139.79 h -157.39 l 10.43,7.06 h 154.71 l 126.4,114.99 h -115.63 l -0.14,2.38 4.3,2.81 h 117.18 l 87.51,79.61 h -74.12 l 4.88,3.36 h 72.92 l 49.81,45.31 h -56.72 l 2.19,1.5 h 56.19 l 26.38,24.01 -25.91,-24.01 h 155.94 l 13.26,24.01 -12.9,-24.01 h 156.01 l 0.16,24.01 0.16,-24.01 h 156.01 l -12.89,24.01 13.27,-24.01 h 155.92 l -25.9,24.01 26.38,-24.01 h 57.12 l 2.2,-1.5 h -57.67 l 49.82,-45.31 h 73.85 l 4.88,-3.36 h -75.05 l 87.51,-79.61 h 118.13 l 4.3,-2.81 -0.14,-2.38 h -116.58 l 126.4,-114.99 h 155.64 l 10.43,-7.06 h -158.33 l 153.67,-139.79 h 230.43 l 10.71,-6.99 v -1.92 h -231.35 l 173.61,-157.95 h 163.31 l 3.62,-10.74 h -155.11 l 223.68,-203.49 7.18,-21.31 -242.67,224.8 h -458.77 l 124.73,-225.86 h 577.06 l 4.87,-14.45 h -573.94 l 128.71,-233.07 m -731.2,473.38 1.5,-225.86 h 580.48 l -121.3,225.86 h -460.68 m -468.67,0 -121.3,-225.86 h 580.47 l 1.51,225.86 h -460.68 m -467.86,0 -243.81,-225.86 h 577.85 l 124.73,225.86 h -458.77 m 1313.14,168.69 87.22,-157.95 h 453.11 l -170.5,157.95 h -369.83 m -377.74,0 1.05,-157.95 h 454.99 l -84.84,157.95 h -371.2 m -376.94,0 -84.83,-157.95 h 454.99 l 1.05,157.95 h -371.21 m -376.36,0 -170.51,-157.95 h 453.11 l 87.23,157.95 h -369.83 m 1048.91,148.7 77.21,-139.79 h 365.14 l -150.91,139.79 H 3781.7 m -296.6,0 0.93,-139.79 h 366.49 l -75.09,139.79 H 3485.1 m -296.09,0 -75.08,-139.79 h 366.49 l 0.93,139.79 h -292.34 m -295.71,0 -150.9,-139.79 h 365.14 l 77.21,139.79 H 2893.3 m 821.01,122.05 63.5,-114.99 h 287.72 l -124.12,114.99 h -227.1 m -230.03,0 0.77,-114.99 h 288.6 l -61.75,114.99 h -227.62 m -229.72,0 -61.76,-114.99 h 288.6 l 0.76,114.99 h -227.6 m -229.52,0 -124.12,-114.99 h 287.72 l 63.5,114.99 h -227.1 m 642.43,84.8 43.96,-79.61 h 224.36 l -85.94,79.61 h -182.38 m -183.75,0 0.53,-79.61 h 224.85 l -42.76,79.61 h -182.62 m -183.61,0 -42.76,-79.61 h 224.85 l 0.53,79.61 h -182.62 m -183.51,0 -85.95,-79.61 h 224.36 l 43.97,79.61 H 3116.6 m 524,48.67 25.01,-45.31 h 180.63 l -48.92,45.31 H 3640.6 m -157.21,0 0.31,-45.31 h 180.84 l -24.33,45.31 h -156.82 m -157.14,0 -24.34,-45.31 h 180.84 l 0.3,45.31 h -156.8 m -157.13,0 -48.91,-45.31 h 180.62 l 25.03,45.31 h -156.74 m 761.44,-48.67 h -0.03 v 3.36 h 0.05 l -0.02,-3.36 m -893.7,0 h -0.02 l -0.02,3.36 h 0.04 v -3.36"
                    style={{
                      fill: "url(#linearGradient1342-3)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1344"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1346">
                <g id="g1348" clipPath="url(#clipPath1352-6)">
                  <path
                    d="m 2633.28,1936.24 118.34,352.14 c 8.4,-26.92 19.59,-52.01 33.02,-74.6 7.25,-12.19 15.15,-23.65 23.62,-34.27 4.83,-6.06 9.85,-11.85 15.03,-17.34 2.95,-3.13 5.96,-6.16 9.02,-9.09 9.92,-9.52 20.37,-17.99 31.28,-25.3 l 0.16,-142.44 -230.47,-49.1"
                    style={{
                      fill: "url(#linearGradient1358-4)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1360"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1362">
                <g id="g1364" clipPath="url(#clipPath1368-8)">
                  <path
                    d="m 4319.93,2375.88 0.23,202.46 48.06,7.62 -1.45,-202.64 -46.84,-7.44"
                    style={{
                      fill: "url(#linearGradient18772)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1376"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1378">
                <g id="g1380" clipPath="url(#clipPath1384-6)">
                  <path
                    d="m 4363.51,1924.54 -280.44,59.75 8.6,115.63 c 22.39,8.53 42.89,22.23 60.84,40.11 9.8,9.76 18.85,20.76 27.02,32.85 7.19,10.62 13.69,22.09 19.46,34.28 20.68,43.7 31.84,96.79 30.1,154.31 l 90.84,14.41 -0.29,-255.28 45.2,-9.63 -1.33,-186.43"
                    style={{
                      fill: "url(#linearGradient18774)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1392"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <g id="g1394">
                <g id="g1396" clipPath="url(#clipPath1400-3)">
                  <path
                    d="m 4364.84,2110.97 -45.2,9.63 0.29,255.28 46.84,7.44 -1.93,-272.35"
                    style={{
                      fill: "url(#linearGradient1406-3)",
                      fillOpacity: 1,
                      fillRule: "nonzero",
                      stroke: "none"
                    }}
                    id="path1408"
                    inkscapeconnector-curvature={0}
                  />
                </g>
              </g>
              <path
                d="m 2564.15,1730.56 4.59,13.64 0.05,-10.61 -4.64,-3.03"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1410"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2583.83,1732.88 -15.04,0.71 -0.05,10.61 14.7,43.74 0.39,-55.06"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1412"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2583.83,1732.88 v 0 l -0.39,55.06 20.98,62.44 0.63,-89.01 0.11,-14.55 -21.33,-13.94"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1414"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2906.14,1955.9 -9.07,153.75 c 6.44,-2.7 12.97,-5 19.6,-6.89 l 6.62,-109.5 73.35,42.55 v 64.83 c 6.72,1.6 13.29,3.65 19.71,6.12 l 0.44,-78.59 -106.35,-69.46 -4.3,-2.81 m 18.49,39.85 -6.45,106.58 c 13.94,-3.84 28.27,-5.86 42.82,-5.86 11.72,0 23.13,1.31 34.17,3.82 v -63.61 l -70.54,-40.93"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1416"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3025.09,2027.78 -8.3,0.39 -0.44,78.59 c 2.75,1.06 5.46,2.2 8.15,3.41 l 0.59,-82.39"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1418"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2886.81,1951.04 -12.65,170.1 c 3.53,-2.08 7.11,-4.03 10.73,-5.86 l 9.4,-159.38 -7.48,-4.86"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1420"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2895.06,1942.81 v 0 l -0.77,13.09 -9.4,159.38 c 4.01,-2.03 8.08,-3.91 12.18,-5.63 l 9.07,-153.75 0.14,-2.38 0.19,-3.25 -11.41,-7.46 m 130.03,84.97 v 0 l -0.59,82.39 c 4,1.8 7.93,3.77 11.79,5.9 l 0.53,-74.39 0.02,-3.36 0.02,-2.85 -11.77,-7.69"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1422"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2923.29,1993.26 -6.62,109.5 c 0.5,-0.15 1,-0.29 1.51,-0.43 l 6.45,-106.58 70.54,40.93 v 63.61 c 0.49,0.12 0.98,0.23 1.47,0.35 v -64.83 l -73.35,-42.55"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1424"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4539.78,1641.38 -66.29,43.31 -10.71,6.99 -64.17,41.91 1.87,335.55 c 1.79,-0.67 3.69,-1.03 5.63,-1.03 4.68,0 8.09,3.95 9.85,9.38 v 0 l 8.19,1.25 c 3.01,7.45 3.5,14.7 -1.67,21.49 h -8.61 c -3.08,5.19 -7.9,8.04 -13.17,8.76 l 2.81,503.11 16.52,4.82 16.4,-133.56 v -388.64 l 48.56,-6.96 5.7,-46.46 -55.6,7.25 v -301.12 l 98.7,-57.27 5.99,-48.78 m -6.4,52.14 -95.62,55.47 v 296.49 l 53.27,-6.95 42.35,-345.01"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1426"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4383.57,1732.88 6.3,885.9 28.87,8.62 1.29,-10.48 -16.52,-4.82 -2.81,-503.11 c -0.88,0.12 -1.77,0.17 -2.67,0.17 -8.52,0 -12.43,-11.67 -10.2,-23.01 1.72,-8.74 6.6,-14.73 12.65,-17.01 l -1.87,-335.55 -15.04,-0.71"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1428"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4383.57,1732.88 -21.32,13.94 0.09,13.93 v 0.05 l 1.17,163.74 1.33,186.43 1.93,272.35 1.45,202.64 0.34,48.99 47.52,14.18 2.66,-21.73 -28.87,-8.62 -6.3,-885.9"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1430"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4484.5,2091.7 -31.5,4.28 -16.57,-1.26 16.57,1.26 0.44,248.77 31.06,-253.05"
                style={{
                  fill: "#fef5d3",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1432"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4436.43,2094.72 v 388.64 l 17.01,-138.61 -0.44,-248.77 -16.57,-1.26"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1434"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4484.99,2087.76 -48.56,6.96 16.57,1.26 31.5,-4.28 0.49,-3.94"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1436"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4415.96,2077.49 v 0 c 1.44,4.46 1.77,9.93 0.76,15.04 -0.59,2.98 -1.57,5.54 -2.85,7.7 h 8.61 c 5.17,-6.79 4.68,-14.04 1.67,-21.49 l -8.19,-1.25"
                style={{
                  fill: "#e49e2c",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1438"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4406.11,2068.11 c -1.94,0 -3.84,0.36 -5.63,1.03 -6.05,2.28 -10.93,8.27 -12.65,17.01 -2.23,11.34 1.68,23.01 10.2,23.01 0.9,0 1.79,-0.05 2.67,-0.17 5.27,-0.72 10.09,-3.57 13.17,-8.76 1.28,-2.16 2.26,-4.72 2.85,-7.7 1.01,-5.11 0.68,-10.58 -0.76,-15.04 -1.76,-5.43 -5.17,-9.38 -9.85,-9.38 m -15.45,15.62 c 2.51,-7.98 8.35,-12.64 14.9,-12.64 7.28,0 10.97,11.19 9.07,20.88 -1.18,5.96 -4.21,9.95 -8.06,12.15 2.34,-2.16 4.14,-5.24 4.95,-9.37 1.77,-8.98 -1.66,-19.34 -8.4,-19.34 -5.07,0 -9.71,3 -12.46,8.32 m 3.06,21.23 c -2.4,0 -3.51,-3.29 -2.88,-6.49 0.63,-3.19 2.75,-5.09 5.15,-5.09 0,0 0,0 0.01,0 2.4,0 3.62,3.69 2.99,6.89 -0.63,3.2 -2.88,4.69 -5.27,4.69"
                style={{
                  fill: "#f9c318",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1440"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4405.56,2071.09 c -6.55,0 -12.39,4.66 -14.9,12.64 2.75,-5.32 7.39,-8.32 12.46,-8.32 6.74,0 10.17,10.36 8.4,19.34 -0.81,4.13 -2.61,7.21 -4.95,9.37 3.85,-2.2 6.88,-6.19 8.06,-12.15 1.9,-9.69 -1.79,-20.88 -9.07,-20.88"
                style={{
                  fill: "#e49e2c",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1442"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4395.99,2093.38 c -2.4,0 -4.52,1.9 -5.15,5.09 -0.63,3.2 0.48,6.49 2.88,6.49 2.39,0 4.64,-1.49 5.27,-4.69 0.63,-3.2 -0.59,-6.89 -2.99,-6.89 -0.01,0 -0.01,0 -0.01,0"
                style={{
                  fill: "#faeab3",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1444"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4533.79,1690.16 -98.7,57.27 v 301.12 l 55.6,-7.25 0.34,-2.77 -53.27,6.95 v -296.49 l 95.62,-55.47 0.41,-3.36"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1446"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4061.26,1955.9 -4.3,2.81 -3.43,2.24 -1.22,0.79 -101.7,66.43 0.48,85.71 c 6.43,-3.72 12.99,-7.04 19.67,-9.94 v -68.13 l 73.34,-42.55 5.88,97.13 c 6.57,0.55 13.04,1.53 19.38,2.9 l -8.1,-137.39 m -18.49,39.85 -70.53,40.93 v 66.63 c 20.41,-8.65 41.88,-13.37 63.87,-13.47 h 1.48 v 0 c 3.67,0.01 7.3,0.16 10.91,0.43 l -5.73,-94.52"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1448"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3942.31,2027.78 0.65,91.06 c 2.69,-1.72 5.4,-3.38 8.13,-4.96 l -0.48,-85.71 -0.74,-0.03 h -0.06 l -7.5,-0.36"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1450"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4080.59,1951.03 -7.48,4.86 8.29,140.52 c 3.46,1.05 6.89,2.22 10.27,3.51 l -8.6,-115.63 -2.48,-33.26"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1452"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4072.32,1942.83 -11.39,7.44 0.19,3.25 0.14,2.38 8.1,137.39 c 4.06,0.88 8.08,1.92 12.04,3.12 l -8.29,-140.52 -0.01,0.01 -0.78,-13.07 m -130.01,84.95 -11.77,7.69 0.02,2.85 0.02,3.36 0.61,85.29 c 3.86,-2.86 7.79,-5.57 11.77,-8.13 l -0.65,-91.06"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1454"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4044.1,1993.26 -73.34,42.55 v 68.13 c 0.5,-0.21 0.98,-0.42 1.48,-0.63 v -66.63 l 70.53,-40.93 5.73,94.52 c 0.49,0.03 0.98,0.07 1.48,0.12 l -5.88,-97.13"
                style={{
                  fill: "#aa3251",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1456"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 2605.16,1746.82 v 21.31 l 281.65,182.91 7.48,4.86 0.77,-13.09 -154.26,-104.28 -10.43,-7.06 -125.21,-84.65"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1458"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3036.86,2035.47 v 10.47 l 109.81,70.03 0.02,0.02 2.37,1.51 v -5 l -34.97,-24.01 -2.19,-1.5 -66.01,-45.31 -4.88,-3.36 -4.15,-2.85"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1460"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 4362.23,1746.82 -125.22,84.65 -10.43,7.06 -154.26,104.28 v 0.02 l 0.78,13.07 0.01,-0.01 7.48,-4.86 281.64,-182.9 v -21.31"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1462"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3930.53,2035.47 -4.16,2.85 -4.88,3.36 -66,45.31 -2.2,1.5 -34.97,24.01 v 5 l 1.55,-0.99 0.14,-0.09 110.52,-70.48 v -10.47"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1464"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3128,2639.42 -1.05,0.51 v 0 l -220.53,109.08 2.04,6.05 3.8,5.53 80.61,-42.26 4.77,-2.5 130.36,-68.33 v -8.08"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1466"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 3839.3,2639.42 v 8.08 l 130.36,68.33 4.77,2.5 239.25,125.42 9.54,5 153.88,80.67 5.49,-21.28 -542.89,-268.52 -0.16,-0.08 -0.24,-0.12"
                style={{
                  fill: "#d6772f",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path1468"
                inkscapeconnector-curvature={0}
              />
              <g id="g1470">
                <g id="g1472" clipPath="url(#clipPath1476-2)">
                  <g
                    id="g1478"
                    transform="matrix(140.2,0,0,78.2002,3378.9,2131.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAQCAYAAADqDXTRAAAABHNCSVQICAgIfAhkiAAAACNJREFUOI1j/Pf18n8GOgMmels4aumopaOWjlo6aumopbQFAAUnA+WyDP1WAAAAAElFTkSuQmCC"
                      id="image1480"
                    />
                  </g>
                </g>
              </g>
              <g id="g1482">
                <g id="g1484" clipPath="url(#clipPath1488-4)">
                  <g
                    id="g1490"
                    transform="matrix(145.2,0,0,73.2002,3344.9,2640.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAPCAYAAADzun+cAAAABHNCSVQICAgIfAhkiAAAACNJREFUOI1j/Pt2x3+GAQBMA2HpqMWjFo9aPGrxqMWjFuMFACRyA7+kRTDsAAAAAElFTkSuQmCC"
                      id="image1492"
                    />
                  </g>
                </g>
              </g>
              <g id="g1494">
                <g id="g1496" clipPath="url(#clipPath1500-5)">
                  <g
                    id="g1502"
                    transform="matrix(20.2002,0,0,20.2002,3474.9,2635.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABHNCSVQICAgIfAhkiAAAABZJREFUCJlj/Pf18n8GJMDEgAYICwAA+EsDzUeVRWUAAAAASUVORK5CYII="
                      id="image1504"
                    />
                  </g>
                </g>
              </g>
              <g id="g1506">
                <g id="g1508" clipPath="url(#clipPath1512-4)">
                  <g
                    id="g1514"
                    transform="matrix(16.2002,0,0,15.2002,3435.9,2669.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABHNCSVQICAgIfAhkiAAAABVJREFUCJljfLIi4T8DFDAxIAEUDgBrGQLxDOU+bQAAAABJRU5ErkJggg=="
                      id="image1516"
                    />
                  </g>
                </g>
              </g>
              <g id="g1518">
                <g id="g1520" clipPath="url(#clipPath1524-9)">
                  <g
                    id="g1526"
                    transform="matrix(270.2,0,0,73.2002,3219.9,2640.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAPCAYAAACx+QwLAAAABHNCSVQICAgIfAhkiAAAADVJREFUSIlj/Pt2x3+GYQyYBtoBtAajHhzqYNSDQx2MenCog1EPDnUw6sGhDkY9ONTBsPcgAKRUA79bm9DPAAAAAElFTkSuQmCC"
                      id="image1528"
                    />
                  </g>
                </g>
              </g>
              <g id="g1530">
                <g id="g1532" clipPath="url(#clipPath1536-2)">
                  <g
                    id="g1538"
                    transform="matrix(352.2,0,0,356.2,3147.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABKCAYAAAD353lyAAAABHNCSVQICAgIfAhkiAAADJ5JREFUeJy1XNuWraoOrGB/8Pnw/Qe7pc5DEggh6lx7ORljtorIpaxcCNjyzz//IwAAdiiThKOkvA6xfEED0CDSABEIBB0y83BApEHkAHAAIkADRLyutv2aABxtxR5pf8+zA+jW/w6Qes4++qfXBNlBnAA6yBMA0aSDAr1v5ceRQJOOnxtkPkz7ANZ8UTDGwCbQ/ldGXktHCff9WY56CRrAzUBpUFBg5wTQQAdQBEIx0K0uCUfGNubxBZB8uDIBkQmcDsLz2riWDYwWro9ZPg5oAUlhOh0YCWXYAXFG0eD0pzVfmY0Aqqddol4CCViAGoDpoBWyCJCLZDNQjwEag9jGZ/akgxFx0fKft+si6GApg7Q8Qw3AClRui2+JmzPlAiDRwQqaAiIOwIEBhusuB8jKcAF+7bwygoC4LuoATkydREAIokOaADSREoCUVOMU4/X6FSZdMwgQZYLMwYs0CBycYwUmgKMANTS5B4kDnKl3VNzaAG6IrADkYS9O69jZlA3T3+qkzJ4xyHAeGYRjAtPcwrXBLEYxwwFBQ3tg0lTKfZaRNvUS9Vm3kNIUWPFnSWvT63TApv57iUnOgh0sB0gBiUAdlr+b/cm0qMxXV0Bc14ib/qCTlkFGa0p7ESaqA2QDZ+grB1uffQSpXVn4iJGLlekWrdvBCgN2sPADZ1RnFEP7yRRDDnGsuKR+jutEUtDpcDhYs6w9AbrlM6DEQCUBmn+nOutVJkV9dASAnAlHACify1TkCOUxnc8oLmvLqpSdRZRuA+wQOafSp3tatHbsucEqTzHvLZ0ULduin1YFDPGBG0ABpDYYGC3esT4/rJ+3CUwmqD4iOoTmMOJEp9lWMYXdqWIsXXUSG7IjkMXTRfYvFXcAqrRuASzJIuciZaxxBY8DMnTXVOiS2OT6RDB9JJGu4iburHaAJyzLFPahboFbuQ2kDNRrzuQDQPk8zOVcmQ8n0q6nD3WMult6w84kZdEJoqMJ0NkhIjZPA4RiVdAYxSFVZAZm/33BT0ICKwEXRdKYRBxoYn6RiRxxoC1+1O4GiJl/4lTDMVhzus9o7Z/D7Ku4ua/k1i64D4Xue29asoheyMz6aoiCgGbRmrGmGcMmQC6KNUg+3dBhmlV1Zkgqh2bgdBM3949CvSJB+mb+zz6hi4qxyo8VNOxvIObvPtCqjKeiVuBMmS8AudjlPlgf7QU0nsPv1rpO+Euhu0FCEAeGj8RgVIbnvr/oxKTqbVX3Y7xH5d2pLcNvCmacB9BMGdMUc3QPTO9wnP9MKzfaiiAxHCdDG521/syJTvXhPGbUhRCa0pepj9jNGEjXyfAIwWziVsllxahCB7loLfdayC/YlOZpq1WLIGWFncHy9j1rf9FDwaOBi1+mzBp94a6421bbK6liY9Xx2RGpwL3NQ5Gf9ZfPB00HLtOc9JPqXNOL8aQ59P06MQ4W21k6eaW7su7Lfo17yTEvl5nMYThisWyVqtG8L4dvC9GUDNR0Flc2ZOXv9ysPOZrwWMwmwDwwIgVcAbvs5/tM2i3CfblVxOSWQdMjH4ks6kzxIANKrzzWHSfMVXu1qH9B3GKq3lINzOi8FAPJfpIk68bMgtA8CcgBsJvyPjGsLjw4d93PL4F0Y/2KHzHDJOtk1qctziZgBSEAJREopDJmvZJeougkdxHpAZjNWez3RSaZ+fTgf1glEZnXMTwroewuEkhWRwNkzedow2lUH0jPG5oQYEMX9ehd5DzESxNlegTTzl26O19n0qcsusrf53jKtOrZPPUA4ttfopAixhqtV9As8p2MRSjzBXGrqB7zr0Qt+0ceNdqV++oGAHt7XH8jFNtRDfxOUee8F4Ju+frzn5SDTkxbROzqRbj1mqHYmrFF/Tcs9rJf8rirlAcdl5uvyqdnt+sK9AogTazKSgXM+vsOSPI8oE/SHte+E2tvt2rj6WVEwHL5VxX3ZwOPnchrqJ/XH84vzf9s58/q3a8Tk6KTludAKO7lzQZepIobV3VVHX1KVdm7up9S7ut+/ydn1OeS8jpWQP2YAYx7h/Iv123nlxskLgbiczQwvZyibBAtikzHfXl+/7WdYncMymWu3uAdgJ8n+aj8bIOX7VTK28/zM7nPr1i3PxGVKiXweTXQKgTy38AH8Af6kG9Zt78B6vlN1uDk/Lv6nkCs2p7py1GAnIwpFlumTR/iwHReH/JC+bK+ceRH4ilIbTODuevll0CqFP6VQs/K3Y+COYWIa/J5p0g2InrOSwPxKZOu2PoKSE+Uv/7NpeoJxni7MvN0h8eV5dNycxOE/XgPmmyWLPd7ju1FJj38loHP41zLhwFwQoNukzljMZNipdw60YDryC7HtHSzvbgfqRL1K333CFJ/FHN7M0KANqyxQur35q4Pih4Ftj2Gui+yCW1pWld2tY8+XfDzlroP/NJyeBZgdXT6UpLt4zaG9ZJNNWB/yaRKx8RdZoH6sp67aAhOZQadFafGfuxcm6ECJBdvbNlUGkE6rY3ZnusvCdezjnqML+kkByaGPWNHG3LncxzJ7doMThQOLq9cjdheBdbcdeLX9+L2FcV9xyTTGTyh6/oBtMGw0xS2TRd8HR8IdRErcDllgE6MHXCBOcSp55tivxrba+Km6+catI+AOVN2XTHYNIABFoaNdX0HtUrRHUhs4n7Osh/PLsOXmNSK/HyU0PEzDHp98ysQGSxnVxa3Ciy3pLNPLACp0ssgZXNfAThNtO985WCNgjQGY3sgJ1DRVWA4T/0IVivqHlZ9vRuHpf8AUnh7xIzmjWwDiCfmpvNs4Yw51W7/ZftMqBdF2SVF5ky9pPrNfoFVWjfTvQq4BaRPJqk7Nbt5w4QoFrD5EQGRjlMAcOof/7ZNQJwNOGx/UzcTLONzK/W3xBk1lrovgm7DDYgK/ARxgtSjgzE4RQL9F8C/+v0bz8E27Y4y+z+KW6Z6ZhOMTaZTFh8pWC7aulp0GHkOdqrrROgqbIeui8V2vdFKrCeD1KL92oeAWYGf2B3RyKjX/KRPFGBtRWgOJcmxZZGovgEY6F/UC1SKu7Zo0cGMeqzu88uhkifnrKdzfZPdnm2E7bcWdMNCeJgRaAboKnK0pyXWGz4jVVFfWbWzpuo7xvHlCS5qy0aayAVFDmin7THd9KllfRctQf0OxPcXIW54Xy0e08ugKW1xvYRfDEdyU/D3L/clZzKeV+zxFPUF4O9fgAEuvSqZxlJBDxbPnvV2p5k3ZjG2YzqJgUXL/czwnU0v6qR4fgWSKe1CtUQWKS66Y1Zn74dFB1y0ZH0OGMxTfePtukWbE91qXlerg9eYNLs6jxmYrHzPeUkDZMSEOIMBA8ywQ4QeR9rbV9zjQK98pRNcgLybomjeX4PUlvizWSy6XnBg5l/fnzR1kYD8tRKHXU8wzxSlRKgtgjSOzCCZlQvzN48pweNL9Bc0pyoMzuULOsmPcQ4FrDtbPe1eM9E0+GWfoE8mhTbi14yXTm90AzJIrpuu3IM7vfSquGVGOUBV4D4O9BxA6S59LTq/bswbq3Iq5m4RpDRN8f8sMb7d3cRtF70X/SSvNE4+PUXA3Ku2p3gO6yWmk9ys6VdFR6jvCSRvywZrAHEA5JPrKWbPgbfXrFs8zwAZGwjML649XuSWn/Ytx3yDugHUP4yppiNIeRmkaOG6zd9cP7nO3MMnXxS3mHbbcxljopZX869+0PiXIaCN3591JjIdEa6zZZo+Ec0nIqMuAvZl9WypX193i2JRMGrzxjt808JYJjLFTdCkMAJSgZSZFEVtVdAMoRKO/4rD2bcNaE1f+myCYSxhECMy4J1zsVOmUGCWTjtNIdDtvn8iumAkIZ/h2MOxY8S3HJzYD9+AOvIZ+q/Xfw1S75HyCTNi/F8BlaC4HK2x65/DloroOsm2Cvumc9/FNo4BYyDkJ0Z4fCkcJS6Omij/9gIkBxdE56vflljPo6qIg1kyjAr24fAs38IAh3JKQCEB5fmJBQOgCJg91IM4BWeyBvr1DRPeWQSPsFLknp/kfwTpvC5PUfdk8a50ErBZqkXMMctcruJ68ddcgEJRZ0ZtN7WTHPM5B8LCKcNjB54ByvXGgWazjnTv66GS2LmCMQtQ8SJMS2jraiN+XVmvpynJldddgROZG3TUuL+D+iUX4NNnAjDxc6rN7D+Bk+u+AIkVYFfnr4J0lT4DbP63NWCK26cgear00g2DSuZfg/slkC70VFkO2D3nPKG9A6nSS5X+KZTycj+XmflfZpL/P6MrsDIDsm4R87OufIorj/uToyZf76vuefryxtJs4iqTFwHKAFSdrpgQy/4ZSHu9+/3/AyPOwxg467kHAAAAAElFTkSuQmCC"
                      id="image1540"
                    />
                  </g>
                </g>
              </g>
              <g id="g1542">
                <g id="g1544" clipPath="url(#clipPath1548-7)">
                  <g
                    id="g1550"
                    transform="matrix(323.2,0,0,96.2002,3171.9,2559.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAUCAYAAADWQYA8AAAABHNCSVQICAgIfAhkiAAAAjNJREFUWIXtl0lyAzEIRflq3/9yOUt2KZEFQgxSz46dhalq94TU8MQgo35/MX2EiIjKuw34T/KB4eQDw8nj3QZ4YY5rA9RT7+/KS2FkZ+7qM5cOxOtehfTnMM4CeMb8+uwslKfDuOQ8tLvvja1Rh9nGM1ZtOQrlqTA2QWA01r1M5z5jul/iuz6n05uA8em0Ja+pGQOI7ER8DwhU5i0H4MYXN4VCqtNo2ZLbMIZoAItxOaRNIVyr430+qsQkEIBi12kuAYUwUqTYGUQK5UiBvQVjnhYlnbsJzhhxUh2MC2jjWH9QLBE0WmCARjB9dJsvptta2lwq9VMI4JV00EMg+NVmqvuRjBx5HpZFUI6wAAcYbGMu/VC5HBkjkA1j2i1Tbc4UAhkUU9nZV6g+iouKnw4IVLbrDGAdKPkC1PMw1mtEf+C+nVbRGe3PREQM9GhmNw5c3T0IzE6XCXiESIvF91i3UTkFY7tGEM1A2HeLc147AZpO1A0RgtK0pSCz7jghRRrMofb4dbdI8VAKEead5l43Wdk7jCAm3QDL9J2lDoiJ3Q6kzdmuuXcrqTvI0Y/SuqxPHV2E1mlSylyHAVvZWKxiSsgjcVzgjCmijoto5/C/XnMhohgNBiQDr26cj5J53bjxx8GHfLtSAK3AybFI+LbCqYYFQybGzfRmuqKjYKxzhfHIxVrzMYbU4cjY+8/RW2beRA1NxcJ99jwYDBDYr6Rc6x5Fzpo2/nu1+ZjAYdZtbB/yCxlt+bKIL7N0AAAAAElFTkSuQmCC"
                      id="image1552"
                    />
                  </g>
                </g>
              </g>
              <g id="g1554">
                <g id="g1556" clipPath="url(#clipPath1560-5)">
                  <g
                    id="g1562"
                    transform="matrix(294.2,0,0,102.2,3224.9,2131.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAVCAYAAAD1neayAAAABHNCSVQICAgIfAhkiAAAAL5JREFUWIXtkkESwyAIRT9O7n+5nqVbfxfRxlCj0dpFB94qjgR4oMTngxiEDMdBBCABIYBQiZZuPpEAMuoqKodqk+ksBCgpj85RZ7sV9dFkPMRzcabGREv2Z7oLt+KKO2r5MWFgUrosctp6rak9OH3kxvSLKP9JMey/kFmmpTOnrV/xHkQWaW21LVurN7JlYIF0q2h3GIM1cr5RSc0S6Su+be5X+dat4o9waSu4tBVc2goubQWXtoJLW8GlrfACjfk/60UyUrgAAAAASUVORK5CYII="
                      id="image1564"
                    />
                  </g>
                </g>
              </g>
              <g id="g1566">
                <g id="g1568" clipPath="url(#clipPath1572-8)">
                  <g
                    id="g1574"
                    transform="matrix(260.2,0,0,303.2,3205.9,2271.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image1576"
                    />
                  </g>
                </g>
              </g>
              <g id="g1578">
                <g id="g1580" clipPath="url(#clipPath1584-2)">
                  <g
                    id="g1586"
                    transform="matrix(245.2,0,0,284.2,3215.9,2280.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image1588"
                    />
                  </g>
                </g>
              </g>
              <g id="g1590">
                <g id="g1592" clipPath="url(#clipPath1596-9)">
                  <g
                    id="g1598"
                    transform="matrix(216.2,0,0,25.2002,3215.9,2501.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAFCAYAAADR5WXBAAAABHNCSVQICAgIfAhkiAAAAVNJREFUKJFdk0tyI0EIRF8mtHTkOdRcw6eyGvCCVitsNgQVVEF+Sv+//g0IOwEIB1KQjq0jkUT6QBJ2EHEQEQSBnUggG2OOeGAHM4MjMXvHMtUnkgkfIDH1Qk5mmo3hrG/uqouzXkhwdlF10l3kCIyBRtpFpb1kB7IXyDUcQLwbNskmZDKfGGMnMwVAOkFGDgIRcSBAEticVUQczDQDeHq3mWYsTDNdpANhRidJf4a/Q/KvfCPRArCDkDHJkQdgwlolMJawn0hCij2XUe7gCylMc8QSMRdT4kF3IURThIKxaZqYomysu9nLpnxLKn1YlbW1RNhYeVloF7YSTewyH6RctK5641vNdJBxEJctpfzL3JV2huZ6C5MwnyaLv2EbK7CSI5KeeTuO1hCAbvssyxlPZvr28v6JB7KpKsK5CgAjsMwIpg18r/+nl7B+gaAEyQNx8gPz5mgvof29DQAAAABJRU5ErkJggg=="
                      id="image1600"
                    />
                  </g>
                </g>
              </g>
              <g id="g1602">
                <g id="g1604" clipPath="url(#clipPath1608-6)">
                  <g
                    id="g1610"
                    transform="matrix(236.2,0,0,44.2002,3224.9,2640.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAJCAYAAACbtcTcAAAABHNCSVQICAgIfAhkiAAAACtJREFUOI1jfLIi4T/DEAdMA+0AaoBRTwwWMOqJwQJGPTFYAH09wcRIE2MBdbEDABI1PNsAAAAASUVORK5CYII="
                      id="image1612"
                    />
                  </g>
                </g>
              </g>
              <g id="g1614">
                <g id="g1616" clipPath="url(#clipPath1620-0)">
                  <g
                    id="g1622"
                    transform="matrix(49.2002,0,0,82.2002,3781.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAABHNCSVQICAgIfAhkiAAAABpJREFUKJFjfPuu4D8DEYCJGEWjCkcV0kkhAB3uA2wL5ao2AAAAAElFTkSuQmCC"
                      id="image1624"
                    />
                  </g>
                </g>
              </g>
              <g id="g1626">
                <g id="g1628" clipPath="url(#clipPath1632-1)">
                  <g
                    id="g1634"
                    transform="matrix(159.2,0,0,102.2,3637.9,2131.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAVCAYAAADID4fUAAAABHNCSVQICAgIfAhkiAAAADVJREFUSIntzjERACAQBLED/+7QQgtf7SDhKTYKMs5eN81mdyAx8ZiACZiACZiACZiACXyRKAlsA+/fjYXxAAAAAElFTkSuQmCC"
                      id="image1636"
                    />
                  </g>
                </g>
              </g>
              <g id="g1638">
                <g id="g1640" clipPath="url(#clipPath1644-5)">
                  <g
                    id="g1646"
                    transform="matrix(145.2,0,0,73.2002,3603.9,2640.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAPCAYAAADzun+cAAAABHNCSVQICAgIfAhkiAAAACNJREFUOI1j/Pt2x3+GAQBMA2HpqMWjFo9aPGrxqMWjFuMFACRyA7+kRTDsAAAAAElFTkSuQmCC"
                      id="image1648"
                    />
                  </g>
                </g>
              </g>
              <g id="g1650">
                <g id="g1652" clipPath="url(#clipPath1656-1)">
                  <g
                    id="g1658"
                    transform="matrix(39.2002,0,0,88.2002,3791.9,2491.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAASCAYAAABmQp92AAAABHNCSVQICAgIfAhkiAAAABlJREFUKJFjfPuu4D8DHsCET3JUwagCdAAAxh4DbhzUMAkAAAAASUVORK5CYII="
                      id="image1660"
                    />
                  </g>
                </g>
              </g>
              <g id="g1662">
                <g id="g1664" clipPath="url(#clipPath1668-8)">
                  <g
                    id="g1670"
                    transform="matrix(73.2002,0,0,92.2002,3733.9,2563.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAABHNCSVQICAgIfAhkiAAAAB1JREFUOI1j/Pf18n8GMgETuRpHNY9qHtU8qhkOAGMRA+uPDTDYAAAAAElFTkSuQmCC"
                      id="image1672"
                    />
                  </g>
                </g>
              </g>
              <g id="g1674">
                <g id="g1676" clipPath="url(#clipPath1680-0)">
                  <g
                    id="g1682"
                    transform="matrix(269.2,0,0,73.2002,3479.9,2640.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAPCAYAAACx+QwLAAAABHNCSVQICAgIfAhkiAAAADVJREFUSIlj/Pt2x3+GYQyYBtoBtAajHhzqYNSDQx2MenCog1EPDnUw6sGhDkY9ONTBsPcgAKRUA79bm9DPAAAAAElFTkSuQmCC"
                      id="image1684"
                    />
                  </g>
                </g>
              </g>
              <g id="g1686">
                <g id="g1688" clipPath="url(#clipPath1692-4)">
                  <g
                    id="g1694"
                    transform="matrix(308.2,0,0,361.2,3522.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image1696"
                    />
                  </g>
                </g>
              </g>
              <g id="g1698">
                <g id="g1700" clipPath="url(#clipPath1704-2)">
                  <g
                    id="g1706"
                    transform="matrix(327.2,0,0,92.2002,3479.9,2563.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAATCAYAAAApmKv9AAAABHNCSVQICAgIfAhkiAAAAglJREFUWIXtVkuy2zAMA5Tc/3I9S3cdsQuZ4ke0Hefz2kU4Y8eOJYqEQFDsv38Jvjat/esA/jf7ApLsC0iy+08sIhJxJ/ul7z9pbwEkJ/TqeJEWQMnvn7SnAbkKwqv+/fsnwbkEyGUQqB39bF6PY0RsvnA3jk8A8xAgh0BwDdh93HnPR5+bX835dOMKcD5RSoeAlAtSsL/jOZGYANk2v0dJ0M1vzoUC1UvWvMt2AVFWTHZMIPYOtgzPmvz0hw7BAIJs9oysFT35ymXXABoo79aWEpC6RFr6nWG4gEaimmTcSJsnemMzeJU1HCAZi5Qxnn0bKGimN3hPCYXsSiAoOzpBKBP0UgAE/ZzViUH+XdCD38y+EDrpxPsklwdsYcjqaJ8RACb1NSHybv/NGSfnDudjskv+mM/AmMqslH38zzBmArIAsYjnKpCZBZqMB0DIIDvCBrrkhABVr+ZYCcAqY0acXmOOu9Azdh+LHGkGgEIn/NoGQKx3YdQSoo0voVy8r77N6aBI0CJfFMaYQldeBKXmMquatbbpE1q6BG8QtsEE2OX95eSMWUrYoRtCIjPTSrPasHZyLjq3tcvQK3qgwaBwAGMcqMamrOUykre2uVW5u/uRNwCRFcoe5mM8rWUfa8t1HSkY4um/PTlm2K7fBpXZUIMBB0a0SmTz2DHGaUthEgiU2FR0nkfsL2Jo2ctvx2xXAAAAAElFTkSuQmCC"
                      id="image1708"
                    />
                  </g>
                </g>
              </g>
              <g id="g1710">
                <g id="g1712" clipPath="url(#clipPath1716-8)">
                  <g
                    id="g1718"
                    transform="matrix(293.2,0,0,102.2,3503.9,2131.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAVCAYAAAD1neayAAAABHNCSVQICAgIfAhkiAAAAL1JREFUWIXtkkESwyAIRT9O73+5nqVbfxeFxjCJmsZNB94qjgR4oNTXkxhAlu0gApCAEEA5iJZROogUkNVXcTlcW9SzEKBoHp9jjsdMkEjdxK04tTHxksMZqnAvrrmjl78nDExKt0V2Wz9q6hOsH9aYfxHtPxrD8QtZxbS0sdv6Gd9BmEhvq31ZX+/Oho3L0r3Cw2FcrGH5Voi2/CR9xurmVucz1q3mj0jpKKR0FFI6CikdhZSOQkpHIaWj8AZRVT/rqfWjLQAAAABJRU5ErkJggg=="
                      id="image1720"
                    />
                  </g>
                </g>
              </g>
              <g id="g1722">
                <g id="g1724" clipPath="url(#clipPath1728-2)">
                  <g
                    id="g1730"
                    transform="matrix(241.2,0,0,308.2,3531.9,2271.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image1732"
                    />
                  </g>
                </g>
              </g>
              <g id="g1734">
                <g id="g1736" clipPath="url(#clipPath1740-4)">
                  <g
                    id="g1742"
                    transform="matrix(227.2,0,0,289.2,3536.9,2280.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image1744"
                    />
                  </g>
                </g>
              </g>
              <g id="g1746">
                <g id="g1748" clipPath="url(#clipPath1752-2)">
                  <g
                    id="g1754"
                    transform="matrix(212.2,0,0,25.2002,3551.9,2501.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAFCAYAAAA+Jw7/AAAABHNCSVQICAgIfAhkiAAAAVxJREFUKJFVklGSHDEIQ5+Ee+b+V8h1coVcJNsNyoe9sxU+rIKyQcjS7z+/IoFsjLnqhV0kwbUwwi4s0/MgmfIFEukbeZEMO8LTX3yyaZ6+keCZpvthpukMoeluum9mmmeapJmZc6eZaSY7T4YkLNhkS2atN8bYi6QBWF4gIxeFqLoQIAlsnm6qrt0QcAYDkyEWZsg0y4Uw0YNonjuIOUJBAT1BCpIhfXA2AkmzrnUBpiwkbcIS9htJSLXrMlp7KHtLyHBVEcE+QLyYaYQYmlIRm2GoNG3DNOUiNMzizl9I9nv5hzSDEBByRPI3WWuh1CbyCXHkRAJipDrKbywvlhbS4r/QWUAFGOX0wizqWGtha1tvFfbP7G3F7x7+4LFEIYS91V31JpmPdyWx/EI23U15IRWvVWSbFdlkDHxtv+eoMzcIWrB4IR7u9Pc+IO1fmEYYaU5ZkMLOx54A/wAoErVda++hSwAAAABJRU5ErkJggg=="
                      id="image1756"
                    />
                  </g>
                </g>
              </g>
              <g id="g1758">
                <g id="g1760" clipPath="url(#clipPath1764-0)">
                  <g
                    id="g1766"
                    transform="matrix(30.2002,0,0,63.2002,3536.9,2640.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAANCAYAAACKCx+LAAAABHNCSVQICAgIfAhkiAAAABdJREFUGJVjfLIi4T8DFsCETXBUAisAAL76AwVq/2uPAAAAAElFTkSuQmCC"
                      id="image1768"
                    />
                  </g>
                </g>
              </g>
              <g id="g1770">
                <g id="g1772" clipPath="url(#clipPath1776-2)">
                  <g
                    id="g1778"
                    transform="matrix(44.2002,0,0,68.2002,3522.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAYAAAD9lDaoAAAABHNCSVQICAgIfAhkiAAAAKRJREFUKJFlkEFuwzAMBGcZ/TqPbu6NOT1Isl2YgABJJIfLzc/nLRQQwgsAMgg17xSDf+E8NiJk/g37gDQQyGsRjvle5IIGnRwPpC+qAn0f5+oGaSIQwVCmOWmuO2Ku9nFR5hgbUqBCxhpnYwqQrPa5TLB/IdsMFyWbuJdxb7d178JeyWMVf6nTwAfxIZxb4TRSgBSxGGeS287bMxvpm6ZHXDL+AILCYziZwE35AAAAAElFTkSuQmCC"
                      id="image1780"
                    />
                  </g>
                </g>
              </g>
              <g id="g1782">
                <g id="g1784" clipPath="url(#clipPath1788-9)">
                  <g
                    id="g1790"
                    transform="matrix(68.2002,0,0,88.2002,3479.9,2563.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAABHNCSVQICAgIfAhkiAAAAHlJREFUOI3l00EOgCAMBMDdxv9/zrd4pR4UpC0lytUmJpgw2UUDy7ErFkZW0F/g9mWz6pPzCvagzrTqCIAKkDmsqOEbTBOHSW2rRDir5id8nIj9Oy0MgOqQTZW0YoJIAZj9DnMmhwCAMoDsryfNUlGgjH1cxXEScT0nOpEgIptHfXUAAAAASUVORK5CYII="
                      id="image1792"
                    />
                  </g>
                </g>
              </g>
              <g id="g1794">
                <g id="g1796" clipPath="url(#clipPath1800-8)">
                  <g
                    id="g1802"
                    transform="matrix(34.2002,0,0,39.2002,3503.9,2194.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAABHNCSVQICAgIfAhkiAAAABZJREFUCJlj/Pf18n8GHIAJl8TQkwQAaYAD1QrWbC0AAAAASUVORK5CYII="
                      id="image1804"
                    />
                  </g>
                </g>
              </g>
              <g id="g1806">
                <g id="g1808" clipPath="url(#clipPath1812-3)">
                  <g
                    id="g1814"
                    transform="matrix(40.2002,0,0,308.2,3531.9,2271.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAABHNCSVQICAgIfAhkiAAAAtRJREFUSIldlV2C4zYMgz+A8uxeu0fqMXqkTkyiD1Kc2SoPSSQZxA8t6e9//goICUoFgF0IgWBJwhaKAai6kAAXCizJmEIWklEVSrA2go2RBIAsyGAfNNW7hEGCCElYG9EqlrV3C+PakwDWOt8Sek/yIQpw1WJRRdko2vJsrlogbQ4LY4xsqq69mcLSLsth8HPYe1Flll1I4uv6BZi1rofPI7Pq2jXZXKTjCbB2gVPiXdCmZNb6xaq6sIulhTDXugBTfpsmbeYyy/UsWgul3qAAYZRTYhO3zSpfW5J23asuyA+S3oY/OFIhBWmbtTZ54Squ+v1EbYnyxfJaSObLX+fpRzSuxVJEuQ58EFBeyIuSfqqARO8fHxTXgZXRkYlM3m30hshZtOqRjIxBWLsnyuugfWT78+dDR9pN8+UvLIy1sPbCO1vX8SMMeC8+HS6RQAS2DAMBJvOUKfHpye1etuUukB9OD7MBhhz9h+zO0ST5sJdQNipvq316UOfzczgMiQ50SIYIOKm656bnX/4/MsMkH5KZ5p6bmd6M//A3f3qAtiYyu+VOjj/ohYmYNM4jfB4PEkiasvGwySSBzFYC3PMiybvEkAyToefeNFz03DgzkJxNeULLDGHwnA0Pk2y0bdopMcqGDlhBXDjh7hfuA/eB2DQnfbLIMGfDz6jffhigp/l+fW+5Cn1/09mkPWlC0xk6L+77+8mm0/i+v5k5Yc9H5hzZK8nemToZNDp5DcNKhkwzal59UxQ5Hkzm82b1kdXdz/GTCHf6OAfdL8JW1HPTebFmBtmQHRINLuiAszaHnk1sG/9x9JlKhkFwf5O6WFq7GQdM2IwnDMP0i7tvSGga92z27+NpTrN+3y9mjg8zUBINVBUzjRTud1dDmGks08m2MYNjVs99zqYTd9/0vpuhwJMhms9bddqec+rtlpvtvS26s6+kc9l7Ms+TPfdW8faqm/8AVKS/hfdZEG8AAAAASUVORK5CYII="
                      id="image1816"
                    />
                  </g>
                </g>
              </g>
              <g id="g1818">
                <g id="g1820" clipPath="url(#clipPath1824-1)">
                  <g
                    id="g1826"
                    transform="matrix(54.2002,0,0,284.2,3536.9,2280.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAA7CAYAAACt1nCLAAAABHNCSVQICAgIfAhkiAAAAZRJREFUSImVVluSwzAIE0zuf9C9wX7U6keweRgnu8y0aW0hC0HSyvj9IQBABDnUrr5+PYKEBh4GfmTTdL2OwHSiTLDmRWGrFyKBWeab7EBn7iIzzrh8Tw8gl6kO7CLX08sQ2U/CcqPaFRgDvlltbNvBTPr84lZqlnAqVCrzXKysaly6PvXyi1r1LzYXEjOciwS0m65KTUb+h3AuPQ2SA8k4GztkbZF5Rxd+b9hGcvXIeO/JktQ0ZX8qiDWodcO1DsSZacCa7IoSX5grzbsNEXygOTL/wWMDAz17LIdvMsYhnXJgP5+1GHMH26bkKu+ELOWq2YBsTSEBEUJXNiPzXtxBcy30Hqb7hm2BRFeoJiLurfRCx2zKnFsGFQQ5rLij5hojPjf+NXWwaZ92sckfE2x6a8J6eUI7Gzd+OuNJmuza+ozkTrEu6v+EtVRgPLJGO6LRDbaS/B6k5IRKgDiiXSQ7l3XT64adAPiZmuORXcL0nbUpXYKfov0c2XyUEQhPpCinK3rYn5PQ0l0Sluf2E/qUMGUJvrNLrFCGman8AAAAAElFTkSuQmCC"
                      id="image1828"
                    />
                  </g>
                </g>
              </g>
              <g id="g1830">
                <g id="g1832" clipPath="url(#clipPath1836-3)">
                  <g
                    id="g1838"
                    transform="matrix(20.2002,0,0,25.2002,3551.9,2501.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAYAAABirU3bAAAABHNCSVQICAgIfAhkiAAAADlJREFUCJk1y7ERgDAQA8E7vTz03wLt0AK9mIBxuMH6vPdWMCGEwo8xtBddXUCYiEoOYnHPKYNIEj41HwS2zcL0EQAAAABJRU5ErkJggg=="
                      id="image1840"
                    />
                  </g>
                </g>
              </g>
              <g id="g1842">
                <g id="g1844" clipPath="url(#clipPath1848-0)">
                  <g
                    id="g1850"
                    transform="matrix(116.2,0,0,68.2002,3450.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAABHNCSVQICAgIfAhkiAAAATpJREFUOI2tlDtyAzEMQx9kHT7XdZ0skYLUb70zaaJiLckkCIAc6f3+sglwABdgcGAZ+wIAO+8l8AW8QEIS0AAhXhmrjmi5p9FNgSRSfmUgDvAkARpxJgseuUVuBpqezCn2JBBgu1TV/0pQC+QAGo4LFIBAr2J+5bkUtQSIWR02a4iyYLPpUBh1D/Y1ySVWxvQM1IM1S5k1sTNR40ILcJoXyEOx6MbInuCOUjOs0g408C6sBjjBnHuq6ZZmRh8gy5ZhTRWdStpp2aq2yASoVf/U0yL7Z/MMTub72odBs/BSUhbFBRKOb5DudLYmfbB8+mUrdG98xmxjOgLvTT6VPTV2eGNFKVkqzzE9mN/PT/fb3s/W9nO2qafgDvi07mM6cpUnNeRGX8DBp4K/1oi5PxmqJyP2HvznWoV/AdiF9cX20KfyAAAAAElFTkSuQmCC"
                      id="image1852"
                    />
                  </g>
                </g>
              </g>
              <g id="g1854">
                <g id="g1856" clipPath="url(#clipPath1860-9)">
                  <g
                    id="g1862"
                    transform="matrix(116.2,0,0,92.2002,3431.9,2559.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAATCAYAAACKsM07AAAABHNCSVQICAgIfAhkiAAAANlJREFUOI3tk0sSwjAMQ59M7385zsI2ZpGG/BzaAbqjM5lOY1mSlUbpcXcufOxK8r/AOQH3azU2gCIipZ+QtqZtVfiUeOQw9P01CI3JQWIDAwEkcHXgM5EV/KtPTg4mG2+kZxdHkcV1697FfrGc10AyZvsukpXcAJ6BI/EsMn4LUNkV3STF0YHIC9cZ6rkMgWRB0SaRils5r8RSTt+Q1Y0JaMu49qY1OYAME4YLfDffTxNxtr/jTI7ASZmvzFePwnDS3CgFZzIbaZ2LvCxyGmd9awFhj5Ng6H0CVXVBZ05tYoUAAAAASUVORK5CYII="
                      id="image1864"
                    />
                  </g>
                </g>
              </g>
              <g id="g1866">
                <g id="g1868" clipPath="url(#clipPath1872-9)">
                  <g
                    id="g1874"
                    transform="matrix(54.2002,0,0,39.2002,3483.9,2194.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAABHNCSVQICAgIfAhkiAAAABdJREFUGJVj/Pf18n8GIgETsQpHFaMDAFCeA9XZ2DpFAAAAAElFTkSuQmCC"
                      id="image1876"
                    />
                  </g>
                </g>
              </g>
              <g id="g1878">
                <g id="g1880" clipPath="url(#clipPath1884-9)">
                  <g
                    id="g1886"
                    transform="matrix(140.2,0,0,308.2,3431.9,2271.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image1888"
                    />
                  </g>
                </g>
              </g>
              <g id="g1890">
                <g id="g1892" clipPath="url(#clipPath1896-3)">
                  <g
                    id="g1898"
                    transform="matrix(179.2,0,0,284.2,3411.9,2280.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAA7CAYAAAD8QkPoAAAABHNCSVQICAgIfAhkiAAABKtJREFUaIGVWmuuHisMC7T73+ndwJUO6Y8h4DiGmYNUtR+PxOThhFHb+P8/NxuWhvvzd8O5kddbE/vdzPr8d4d1kIPnzPZ+UNafHz3vi4NJGOxpbmUgIByxtTUC1Oef9kBo7ZHRHKXEJgDeTsD4EgSo8TojZeug3G79Qag2FEmX0TcQdtsboGS9xxL5SmsdDrK11DgBSoLRE+GqBusb5N8FohVJU8h4BMSt2TWRAD72GsZRuqSBVxBQWgw0jeetxg0oU5Y7xpEI/rrJdhhZWCo2/Hk0tgGKp7VOPiwpLhSmqV7BEPhu7Y/mjiJTKQfTuX1w28lqOL8CvU9B5ErOyOJC3v/L0SIBsu6eFC/5c3MiSSC6Kv2mmdzWgEgFLzZpT2bd+D3qVnlWuE7KP/MhQRWxtKyFQjidLxYsJcnz+vpry+p5wuqBBLSL9bcBNc6suk3o7Fl+WEtVcsVl+KNV8KpwrzNspQmldSDP4jbORnSjogwu1qfug2miyqDaF7UkFCvrcCJ8GRjcUfdwLaz0tGb9W5wgn8RUs5qRtAdllm6g6otesTdpAR4iNlw0dRhDx3jSY+PowOiJHNkicdsXRR6UTxc81se97L5bm87tdjYtxwx1l6XjXP2NOFugLJlOd+1m+A7oeX8ZEUNYBAms2VxT8XaTvcH2cB2jzfvU7VWwMkEegp6BQl1su/aJulbKCwNUSuY551LClmxbFIs26tGTC9/aEj+slXnlyrmysOcmsrdjLXrJtJJRhww9yu+JBtAA6d23kd+sxDafGddE9X8ZpzguKVEpBYs0LvJT/w3I165C2DVZ62osPMouUyC+M7wq978Wkt136ZU+cNSUkJUn933CNTct941pbnVYzVWL05NWUMwFh5xwij0PSjjdsNLFvUA5KPQ0eU6dhlaiPatg38e9IK0CK7aUND257DQGiQDy5ImsB27GceIcS2Zm7dfU8ADLLuyZ6vk8g70pnBe49lxuaFGnMukzXHpqw6VOVXTx3/g94RAzK9iNLKlrYvdbz7KUxGEOcvlN6CwvC6ffT4bOh0NMhK5b+n4BMN1zBY5rNeD7+zeCkeUmy7qVwHbmKIFNJMMO+LF5qmQBchRKxED2KC9fPn4giXriPfeRPs0vUA6bMqCEEm75BsYtA3kbY7/7cHINWeUFwARyaJDpEt9Gl6y6LEXxJJVyX0XgkrspkwvOZ607C0FwBSxSxA/tPVWFUDbdyMBKeRroPi68DJCBtwNNZQVnvEymG1xPSFOAR1/0m4Fy4hKCyVluMpZz66KsolzHkk7gidMwE5cbf4y91NOZk7w3fWpeWfmaidi6lDbo1M5+cSVZTnYgmH1ewXvqpy7oneNjzqvnYaE3VZaowFNI0MMBgxsP3J7vYk6+ZS/sn2hiQJfgP5fKzgFLAJLwy9HFVcJabg8GM9UlEAMX8rNsiU+sgeFxArZDo+dgY466sfQc5f1ANVQ2owrYFvyXJx5AShL8XlY6xEnMN3gshYVZZhD2+lTp4jVTGjDusdSg/7NwHOxGdakR2UeprlI1ppSVjh/QyJVQShDEku+r9k13OXSFp1tcWyxRiAPYcucN2JzzZv8A7tkeetfKr14AAAAASUVORK5CYII="
                      id="image1900"
                    />
                  </g>
                </g>
              </g>
              <g id="g1902">
                <g id="g1904" clipPath="url(#clipPath1908-0)">
                  <g
                    id="g1910"
                    transform="matrix(155.2,0,0,303.2,3416.9,2271.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image1912"
                    />
                  </g>
                </g>
              </g>
              <g id="g1914">
                <g id="g1916" clipPath="url(#clipPath1920-6)">
                  <g
                    id="g1922"
                    transform="matrix(121.2,0,0,476.2,3027.9,2107.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAABjCAYAAABuUKvEAAAABHNCSVQICAgIfAhkiAAAAERJREFUaIHtzTEBACAIADCkof1vrQEpuNgK7Lx/K4bldCCRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkkuVJA43JA+F2dqx3AAAAAElFTkSuQmCC"
                      id="image1924"
                    />
                  </g>
                </g>
              </g>
              <g id="g1926">
                <g id="g1928" clipPath="url(#clipPath1932-4)">
                  <g
                    id="g1934"
                    transform="matrix(40.2002,0,0,231.2,3123.9,2256.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAwCAYAAAAsJjtLAAAABHNCSVQICAgIfAhkiAAAACBJREFUOI1jfPuu4D8DHsCET3JUwaiCUQWjCkYVjBQFAII2A6pmLy9bAAAAAElFTkSuQmCC"
                      id="image1936"
                    />
                  </g>
                </g>
              </g>
              <g id="g1938">
                <g id="g1940" clipPath="url(#clipPath1944-0)">
                  <g
                    id="g1946"
                    transform="matrix(24.2002,0,0,20.2002,2855.9,2112.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAYAAABGM/VAAAAABHNCSVQICAgIfAhkiAAAABVJREFUCJljfPLU/z8DGmBCFyBNEAD9mQMfc+OAkQAAAABJRU5ErkJggg=="
                      id="image1948"
                    />
                  </g>
                </g>
              </g>
              <g id="g1950">
                <g id="g1952" clipPath="url(#clipPath1956-6)">
                  <g
                    id="g1958"
                    transform="matrix(54.2002,0,0,54.2002,2816.9,2117.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAABHNCSVQICAgIfAhkiAAAABhJREFUGJVjfP4y6j8DkYCJWIWjigepYgAsEgM/X9MLrAAAAABJRU5ErkJggg=="
                      id="image1960"
                    />
                  </g>
                </g>
              </g>
              <g id="g1962">
                <g id="g1964" clipPath="url(#clipPath1968-6)">
                  <g
                    id="g1970"
                    transform="matrix(135.2,0,0,30.2002,2888.9,2088.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAGCAYAAADQQP5pAAAABHNCSVQICAgIfAhkiAAAABlJREFUKJFjvFau95+BjoCJnpaNWjg8LAQAm7YChm3kOfUAAAAASUVORK5CYII="
                      id="image1972"
                    />
                  </g>
                </g>
              </g>
              <g id="g1974">
                <g id="g1976" clipPath="url(#clipPath1980-5)">
                  <g
                    id="g1982"
                    transform="matrix(25.2002,0,0,20.2002,3008.9,2098.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAYAAABGM/VAAAAABHNCSVQICAgIfAhkiAAAABVJREFUCJljXGkY8J8BDTChC5AmCACxIQIxYA+zqQAAAABJRU5ErkJggg=="
                      id="image1984"
                    />
                  </g>
                </g>
              </g>
              <g id="g1986">
                <g id="g1988" clipPath="url(#clipPath1992-9)">
                  <g
                    id="g1994"
                    transform="matrix(30.2002,0,0,20.2002,2864.9,2107.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAABHNCSVQICAgIfAhkiAAAABVJREFUCJljXGkY8J8BC2DCJkieBADUAQIxO/f8LgAAAABJRU5ErkJggg=="
                      id="image1996"
                    />
                  </g>
                </g>
              </g>
              <g id="g1998">
                <g id="g2000" clipPath="url(#clipPath2004-7)">
                  <g
                    id="g2006"
                    transform="matrix(164.2,0,0,20.2002,2879.9,2103.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAECAYAAADrsu3pAAAABHNCSVQICAgIfAhkiAAAABpJREFUKJFjvFau959hEACmgXYADIw6BB0AAFHdAoLRrcdBAAAAAElFTkSuQmCC"
                      id="image2008"
                    />
                  </g>
                </g>
              </g>
              <g id="g2010">
                <g id="g2012" clipPath="url(#clipPath2016-8)">
                  <g
                    id="g2018"
                    transform="matrix(97.2002,0,0,15.2002,2907.9,2093.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAABHNCSVQICAgIfAhkiAAAABZJREFUCJljXGkY8J+BioCJmobRxEAACt4CL+r2p+MAAAAASUVORK5CYII="
                      id="image2020"
                    />
                  </g>
                </g>
              </g>
              <g id="g2022">
                <g id="g2024" clipPath="url(#clipPath2028-9)">
                  <g
                    id="g2030"
                    transform="matrix(39.2002,0,0,40.2002,3032.9,2587.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAABHNCSVQICAgIfAhkiAAAABZJREFUGJVjfPos8D8DHsCET3L4KAAANa0DK0aMKUEAAAAASUVORK5CYII="
                      id="image2032"
                    />
                  </g>
                </g>
              </g>
              <g id="g2034">
                <g id="g2036" clipPath="url(#clipPath2040-6)">
                  <g
                    id="g2042"
                    transform="matrix(155.2,0,0,317.2,2725.9,2343.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABCCAYAAAA2RtSlAAAABHNCSVQICAgIfAhkiAAAA/BJREFUaIHtWV2anDgMrBKcbO9/gM1dgmsf9GMbmGRx9yQvzTc9QxsblaVSSTD88e8/AgD475cOu5w8WPO3jg+AD4APgA+AD4APgL8MgNj/pDGv+ZyG/gCA0SBjpI99MwDGD6+XDED7FgC8PZ0MA6D43hCQvLR1l51Pxv3at4WAYWDMM4p5scbeAmA0lq6drt8Y9jVvSMM0LgKmwbIBhSTZXwAI2BtCMBnHbHyM83SYxyS9sgzg1vhIsst8A4zgSFRbDMGXO28A7ep20tAxsQNZTUNJQzyH42Lcdw3FOYIVBGwjAHutGNlJdPLmbjxAqA+W+2V1h/cJEXhiO/vfzcdt2wARqrTd1jzgcf2V5HbjMAINgAzt0GQcWODAOfb1/S7Xa9hgZhAJhmEAMO6vh+BU4dF3n/XBjY/gqkbw1Y6oNuu3JG2g+enulQUJzve+lobFty+aDaN/zd2HFvi0zddRMHsYApIX8SFv2w2YbYHUwjN049WgLJJwgDMR0IEQNHNihPEBaawynwNbk+Lc/d2uq/hYDxPpgIjwBPyT428ToqkNkIUwRdxtH4xHNoTHHgNoEOxcB6yHAKDrvG1zSxYtG/cNRHJhtRYMJZUk0IRei4mh9FW6Qc4PwlOV3EA+BDCV+am92qrQWNgf6z5tgyfClTmPPWDgFwyEx5yG2KLLbiGxSElPRwu9eASg7+qk++YXqh0YdSJoVhyR80Q0UIvl+NaRxn7FdbnPT/XL70bnwpN+4LYDGsazHyDguxtFKMERMG6gDDCDPSVh9YK3b7Y9zdy1ObKD+1YAyS1qFStMaw3JKMMFjL1AnWUCW3jEY+9KmGRcPTSwG4JL1NCMZM42ucfoUXcVzHUvNKU9CA3BOhDZLRtADfywvibDE2H43wCkm7jb7GvlvCBBrunp6kQ17sGBFzxQElw9XjdGWJRdwGwv0lFBRPZ+YD0EF49c6z+5z4ScUpnPakFvPvr3MRPMeufTSTgVBABbcSS9sOYBEpKm570GuVdGpl2OFsnTILVL3/rbo+WN0/1NQDv8ZpMMd2CShjbc6jnB5XmVA1MjOiifjkEfAKn1JYXLhuR7KsX1cHkV49aOwVTiZKiDALUA1OAhWvDA72qBuA19YIC51DCbQC4+nAaLjdULIKD5DtGzYMJ6NrciRIrYSnMvWNfDaL4CIaCWXBhDcNxC+rXtkWB50u4ECXCMrdb0WaPJ9mItiJtM73++6hfrPsfEoTc8mGSlU6RhtsUnwwAouXd0QCFeb/iHhcf3/Igq/PTYV3VUgJo9+dqDySTHusxhPJrnJEldimP+YwBtNMT+4lH5kSD9DIMH1A4IrRQypTjrwX/i0iemmxUDAQAAAABJRU5ErkJggg=="
                      id="image2044"
                    />
                  </g>
                </g>
              </g>
              <g id="g2046">
                <g id="g2048" clipPath="url(#clipPath2052-2)">
                  <g
                    id="g2054"
                    transform="matrix(49.2002,0,0,83.2002,2730.9,2280.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAABHNCSVQICAgIfAhkiAAAABxJREFUKJFjvHff4z/jfwaCgImwklGFowrpphAAExwEJpgseREAAAAASUVORK5CYII="
                      id="image2056"
                    />
                  </g>
                </g>
              </g>
              <g id="g2058">
                <g id="g2060" clipPath="url(#clipPath2064-6)">
                  <g
                    id="g2066"
                    transform="matrix(24.2002,0,0,34.2002,2831.9,2549.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAABHNCSVQICAgIfAhkiAAAAEFJREFUCJlVzMERAjEUw9CnT4qhD0rbwsOBzAK+WSO76/nakE92WaBuGEYZ/1luIx19DeZnvmV9K52rVZnDZ+chb9xGBS2LwtfpAAAAAElFTkSuQmCC"
                      id="image2068"
                    />
                  </g>
                </g>
              </g>
              <g id="g2070">
                <g id="g2072" clipPath="url(#clipPath2076-3)">
                  <g
                    id="g2078"
                    transform="matrix(308.2,0,0,563.2,2840.9,2107.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2080"
                    />
                  </g>
                </g>
              </g>
              <g id="g2082">
                <g id="g2084" clipPath="url(#clipPath2088-1)">
                  <g
                    id="g2090"
                    transform="matrix(40.2002,0,0,231.2,3123.9,2256.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAwCAYAAAAsJjtLAAAABHNCSVQICAgIfAhkiAAAACBJREFUOI1jfPuu4D8DHsCET3JUwaiCUQWjCkYVjBQFAII2A6pmLy9bAAAAAElFTkSuQmCC"
                      id="image2092"
                    />
                  </g>
                </g>
              </g>
              <g id="g2094">
                <g id="g2096" clipPath="url(#clipPath2100-9)">
                  <g
                    id="g2102"
                    transform="matrix(140.2,0,0,457.2,2763.9,2112.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2104"
                    />
                  </g>
                </g>
              </g>
              <g id="g2106">
                <g id="g2108" clipPath="url(#clipPath2112-1)">
                  <g
                    id="g2114"
                    transform="matrix(126.2,0,0,241.2,2744.9,2117.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAyCAYAAABCtcuVAAAABHNCSVQICAgIfAhkiAAAAtdJREFUWIXtl9tuGzEMRM/ITttv7P8DRf8grS1OH0RdfKt3m+ShQAgsVitLGnE0pGj9+PndPDSBhHwAFQoFSkE6gL4iviAdQUeKBLwgvaDyQtEXpG+IA9KR8hjk1gID9/cVdm6gUHQAwFTAGDg+X12g1izZMCAMrhi1XhXMCRlqiENR/tKe50DFfWWWxpX5gaMBVLB2UBcm+mJuDesMnLGDS6ROcWSvnwEtk6UBCBXHr9uxrtgVHIRr7ukVc3pGXafJrem2x9Kn2fO3MaViCwIqpugrwAaPbCwg6uJhvfQSY1ciauIKVOj0QWwQw6MNEI0qaXGoUVaKGsU6QlP6VjFE86pT1d/jqcseansufo8tQHd064wn10Yt1wsD6qI4YZ/3ZYa5SH+LRmGAz9gnwFNxOmckPJV3WuSCtCwROXlSGFgtluxo/Y7c229qfd0IpJge9ah1p7QByGWOIQinYr35jDqAsOr4DgM+jYWsmmdFenUmXBHC3gx0BXphtYG5ju85tFL9CmyWtxb6GGcTF5j3pJ9C4bTDI18NHVHao5/MIjVzXmSybbYdSJHqWy+/6ZJd6bQ1sDMzmLfKe8RPZojx3Z0xkjCRAMtMBxF7qOvWDyai3VFq52CfpuSHNzG83Q80vLrFhkgKwazU7Tmjy6WZKmvLdgphvk1NL+uea+KyXrAy5dkt58mj3btAed1vKU7ugdkZV4fWJxGGMoTS64hAHKBVhHuti2FJSWGQCZuI28Dekev+AqtcLGbtELEoLs/z34FGAC+lllnahjhnBv8Xed+xdhflPbQEdAx5vwN1EywBUi8xPGtFzBuqoMzokXstqUJHOiQoPbz2lMSPrF8fqcIhDuYLvUUM12CLOBqNeRdlfnoD0FV51QGHEpdx8W5iuALLosSOpHLLH7HdYJqAAFFweUd53wJ23EbnBwDdB/sgoBXszarbB/bBQNM+gT6BPoH+I6A/4CQIl0kYgWUAAAAASUVORK5CYII="
                      id="image2116"
                    />
                  </g>
                </g>
              </g>
              <g id="g2118">
                <g id="g2120" clipPath="url(#clipPath2124-9)">
                  <g
                    id="g2126"
                    transform="matrix(159.2,0,0,471.2,2864.9,2088.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2128"
                    />
                  </g>
                </g>
              </g>
              <g id="g2130">
                <g id="g2132" clipPath="url(#clipPath2136-0)">
                  <g
                    id="g2138"
                    transform="matrix(174.2,0,0,471.2,2859.9,2098.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAABiCAYAAAA4AXHpAAAABHNCSVQICAgIfAhkiAAADFZJREFUaIHtWlGS3LoN7MbIlQvlKLlmDpiyhc4HGiA0u377HKdS+XhyjUdaSWQTaDRAcvjPv/9DJEAAABEkIICsv0D11ZcA0afziB6P+m99Jf9f3wnVlZ7vpk+ueHR0wFCrxwHsb9It9fPVL1fH8MD2IQgBIEHQT3ZT/X0R8eiorgKkCiDn5j41ygN4d1pQ2zLvoDj35qYHBAJXkNMZSIRhvwPtc76fjOkMQAsKgVQ+AFGCQIgHx/oPVyBOuyTCI39ajKt/4ufHOGyd1flxkpD7Wr7PGsjFYLOnAEynPABxSM4/wrPJ2p1nuR+qvySB0HgIt4QAkQACby4jGxwHQDCOuckDyEzuS5nkkoakEBEsl6UfLFIfT4e5H4AttAFtMGyQ2zptuSMTT2YCpJ2VgqjqEUOxsUyf14WmmesVsRrnWKlNccVrWWiB242NhRapfU/ZoBOSkMrFMyBZXEo7+eLxgfliUG0lm6k59gz9Y6UJ5o6erG4jWLxSR1YALHGgfUcRZJYOfYyqBhIgiAhftxysiHyojEkrh7DCg/QfJQJKCIkWApEIlGtbaK62RAOJTh+21MvAEAcQxh4n5DRppPngKBPGIkBHmUOfQnu0rX4FXzNqMvAymFcDZevUcuFYaEv0M2fJoX4FIaW1p3q1NCKZCLaFErcc9rTLwgBi8aithX7uBNrTQgtOCZ4AysmUILIInImkIDXAREvni8BVXEG5aj5RHmrPLoI3kEdOa0ASxAMLEl6OoVagtAwGATGQ1GSExAij+YGyEJvUQ/YA40B5B9MeFAsUbQGoXAMRoUQmEJGAAjcERILF/rKRhKvqD46bIqLcZFAg8Wqik8OEFyoFfLeQD6NU9qjIKjKnsksLpHPXSwKSuEWIREq4IVzo5EqWJdZ3kzx4NKqiv8I5oqxCcjihjqLWGgkhIp1OIqsCCDqFiFCeKukaDYLJjLJQ/3uZ5C8zWSMPciR+8N4pwCTcQ+saUmtQSojO+9YhQrg6d9GAgkSoOMMwGMZEm+ygl6Xp9QZGktOX7BpCVuGnUnT2LwuCJZ5Xx1OHfyAq9A1yyE06UprELRV4HNk1owAw8YoEMkYAjzmrKmilFgIvCBcjpoMCEnhFDMEbVGWQsMkNxm0/kkgn3CyVvkBk5PGVlRtIiIGwVoUSN1Gk7ixOHv5UyjCpI+yadp2jzCTuCl2oKEoId6j6VSXRmaFEWyYcEDfoiUWgBrAyu/XHFkIUsI60FkjnbLxYCdJR7sEfUYwEbqd0imCaBhCohEbvSq+IxPU356pXEC8Aryi9CJMaCCg41okpQQykI80+CwOi9egl4A7g+61qMytCvwehJL6RSBI3iB8grpIhPqyEINBWooGZ1Ee9O+Sd31b5oSldwy6rNthi5PTBh9WLfte4akVaJ1GSDv+P95vNB5BD2SkjFWAklGWBsHt7thGogq3/1nJwxfxhg3EqiSrQYnwdplAMoGhrrZnspURmQgj8CJWqU0Xo7OSdSAbArGByCr565D39CbuIXHrU5+H8ZhBN6BkeiztQqZsyEc5VPUh1mpkMf6qIAJ3tP7FO2G2B1qRTAYCEtE3dYuQIY5YVKYRLjGCYZyr9sQ4J98zLCJ1cdrSo4+dE1i5HNrnF5wjHWgJoUEGNB+T3oxPulhy/fbVKVyFWYQ6+ym1Y3BltfurRY1bWKt0phnLlIH8wnGlp6POJMgJ4gbiAw58ozlzx8gs8H5cncOS9pqjfyFy2Rhie8E1CUPiBgChETwIQiOjayRZqkmL0yNba2rQJvCw0uenMDo//1O8HZBeS5hnytI/lsj0T3TGz1Xg6jgWmAQ7QY5mZBpkbj8S7JaIBqTXNLtuKeWYWnHcekbR90/eeU7T1B7kzt5ttbTwSarq7EHC92eGZQj5w5xMLQfjUSsvW7xE8maDHbWBiF3d49tHxc6zzNAzeX+Lbzc0x97qXcvb5zAELul32NqbPGfXe6QL1bp3FoeLM2wAcAOMNu6+F5dHVZ+dfH8v+n738Zmq+PbPHdAnA7ccE4BtOTVNHn3tkzubP+vjPHZZdCFVxUkXo258EELM40J3oFOk66yvnGwvsWuXA49k3JI8BPpubMY6FOuE1GH9SsqWqgpnkua306GGfrEGs5zTX9ZlFCb8mClfNaKvGTQRSNqvOCoWQYBv7A6B3UmvdX1b3Yqim7fOOVh1+SeXImg0kpJi8kil4llTTYqrSwWcW2mbSE5TWIHqgaIANmHV9zWIlvBDQLoMT4HbF26gfKq0N6LhXOCBEQdm33gblZq/ZmVirFfJikzagXmTaVgJPoz/h0KPPIf4JpEefcNhzmfFh1m64E2Jnai1QO3vqCeY8m77Mp4U3eAO8QnJi8+TtXiIWwr8YoFATxu6A9i/LIg88OKNGJiKr4L+9Tl2LWLUCcKv0p9ccQeCaxUjV1JcQ7vRsk6gCjMesU88sV3BpkTwLNSHHOuMaPGnRA2omX7d6X0z4MR2ejghvlqiWcOkRFn86VegA87Pc7kc6gr2iZhg5YM6y8XAoXXynGxMS9MoXWGuBtfcVAxTEiURLxeaOJNxu80RwbzH4g6NPCeHqMGCmM69Hl/VIeisATLwSnikYDblK0iN6bSUokUik0nscJwvkloN3HaqL8HfW1GbJTiaGU17FHUDZuz8Nq7mSdkYmMp+d5/rssBeAq1ZICUWNiIxCEEB6OTcSkIiMmhKbvQCJ+9NIg8lcrhoLZUJ5ABwrtQAI1w+5bMwEgxVhXomiEswCK7BkBKxtAxapc9dBWHnKLhtty6c1mmMlEzlDulI35EqFqiRaHMqquQJQRpE+PFNVTyK79n7uLAoYd9x231zn4RBT+DH6WGAvpUAmFB7QfKuSLliLy3J68QJX9V7Tva5Ku0LJBayiKovg75xpSyEtDcBVO33ljuyAcg9kIkUga/FBqM24gFwPt/5wWagTKobAQBG7uZRbJGXSexBXmkOp0p0SN69+mVf0Enev4iS8lt2AdlEsC5+W+MlgWgKsOUcsMW68TqkRuHvTX8QUZQJYauTsUMvHdX9Q2E4nXbaV0gk1USKp9T3OagmAcKUVGdTsUVQCrBAn4Kl7aU6YF0S71WBUwro4uvjSbspSbvQ+Gh7us1KXpKRDsGYC/tGIE25PfStpqPZKDeaUnyONAyqXugqOOORJF5NOTjtTMdICl5m1y4PwklxU6BOQ7ir5eTZYOuSJg6s4YcFsQFma1ANv7sC8quhMXN9VWTocVeEoD4sfWVpQQGpFdXZv2KUHHpaZQrIT9UoVd+bJZRCYP2avLAFchZbeb0Dt3LA2+Bm1ltizUsumy46ylPf/JmVUHjsRNzzKVuscfZq8hxNtV5swOFXOcAiqiq4zekzUlQ5RrK3KQ59jpUc9BEBpKzyTKnAiTAKuW1lgVCul9WsV2x0EWCmlYFiDyFqVD7oQWzI0xjlkLmzPOqhBtnWyXSYl7qW0vYD0WPUQQNaeVzCqCihTHpdtQCv13+2aXW60dbr0aS0CcN3oKTNsfq+yG1COe87vOypn8XDn4H6zEJCZTy5NpB2OtRtv2kI9US5QXTladXTWccLzt96neP5u6w2Qz2rCYPeM68wx7tRiUg+xUNtG1WntQaDLeVsnVT/B2AOQC/0BYrXusBvXrOwOiy+6qux/6Zq6X62sY6K6RP1m6/RWwr1W3RvwUO55ghFGdVXY1yetfPfqVB8XOgetSEELnogTcxodqoJiT1kXq3fI4bNoW5ZqS641gqND6iQg9IysJqi9YcrasLWLZk+kpfkzA+H8grOEEE9ST2o547h6Dai4cu6VasuS0LHtctVz/VgNGeW7gYorOgXYWRs6GX7JfK+g1dDaLmOZpU8PBZ9ncBrrqPvESlqAHuqNE43tmSt9vqfQNaKToI4Djw7N41PU4VNi7/UnbTANElqPq8K+i/NmlzqsWVbp0nZxzwsT05Xbm8p6QPUvzg6PzSG9Pe7DLusVxGqI9m1vinSX8dZxjUHPFufG0iFsMOfO+2sAPLfX+SXE+1N7Zf08c7gS+8cfm0/9zkNP1vkuwJ+APoL4+liW+uxV/fTiq4fXBt6fevzjkV/c/9Wh/iagngTwD574RUD61Tf2wbbQzxvRn+ngEWW/PIaftvVfaeFLl/0Hbf7W8Xsc+lxKHscf0OvzsP/dwf1Rf9PpLxzx9SP/2+P3OfRbYfrx+L+z0F+Avjr+AvTV8Regr45/A8YGPEe8M6LdAAAAAElFTkSuQmCC"
                      id="image2140"
                    />
                  </g>
                </g>
              </g>
              <g id="g2142">
                <g id="g2144" clipPath="url(#clipPath2148-5)">
                  <g
                    id="g2150"
                    transform="matrix(59.2002,0,0,476.2,2835.9,2107.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABjCAYAAACv1+FoAAAABHNCSVQICAgIfAhkiAAABOdJREFUWIXtmFGS5LgNRF+C7L2Pb+Jr+ooeEekPgBSrZjbCB1hFdKuLAkggMwGoWv/5178tie9LwPe6COZe3I9uI0lgYRIRIDN/2/pyEkIBEKjOZH4fHRLuu7hOQyCYoQHyFZaIK3S1owRYb0h7UVzh1AKyCAlCTO3dBVEBn+O3oQVBkJi5jT7gRGCIUc9GbzgZTOOzcxBEJ+ANAgEk0iAQMwgEjBh3poy+91OGhA1TIWS9u8mgRr133dcco1BSqIJk/7iYBYaiAFAQErMWxGi8Q3Hg3WhtQpvz2ssdVjpfLhqAMUbfo0IK9ULEIUwd4s+cqJMXMPdRI+JIoTb5/LxTj+AlTm20IR6HODVKs0IaEQRxOURvKX40iCiEpGAe4yiWN2rBLe73mlIcHWySAjHGuD4HEcFglPS3yKTmIQK5i+ggdsEqxBxxjA86FhHl8Nf4IQTzFp0AZe00YvSJYsYkWhpxwyeCMQoErIqd0WEVN4eEoVHHb6YD3qc+UcytkzesksToGthSD3fXuJmspMVASEYKZDGap79+ft6uMcfgZipiVA4SiuBnzALgDic6/uhKC8p4hhid9ByIOeZLHEEEb+JAjBfWeUoxWmTHUUAw47MNhckXOYuIOPVcLacgzQqBOIXS5ZgJ2FdORdxoiUc6G9Jms7UTcxQrDfOWToRKN1iFi8S4GH+VUKHGGG2szfQOp8IMiRgtmxBxZCIYoyRRSYuwPzpfo2QkH788f7ty/xqMIQnbhBtK71o2atlH96hQELYv/xoeRMHJlnqZn9yQRDqxE2PIN/F3L3cR/Wmox/faNWXx56OwPpZ2eb4OaiQ6l1SFZJu8XO1CLWzjLHn0DcKne5ehrxP+cOUy9uIu/g+ULlPcCKVhreTJhQ12gk08ThIXw+K8Rlh0KO1E2cXYs2wnt3/1Scp7XcTKLNLyTc4qLhKzdho2Jn9P2jZps9a6Pidr1f1qhmV4l2jBnZjEMtjMRYLFz6Ez+eXErnkmBmHxeBVKm7HlZOXiyfWmbwqdDi8x4SwByNWIDRTkDXV2dWQVVqQL4ZWLx6sIUuVSqeTuXLBRWmnWTrp/AJ61WDZmtabEzJNI5eJQh7MIBitXyeUHWEFkLvJS5MpCg4RksbZ0lkmz232TJTMQTy4yzMiaz2nzaJHZ0ZQssul/hZfZObWg0lkoVfjJyiRJ5MIcmW69rBZVVJ/weTFZaf6bv3pHk17kWqfygobRmZ18KXetxeM8jnZFEDu2pPvS1TKUJUpMl4+bB4llgxMFLNMjMXkMA4MHXmbiGlpzv26Willr4QiUBlSQhojsGl5+Tl2Ai8BXtwXNSbrltfLFe0P963lK+s36GezuKbScZ4jsU57VEzVEVN+pU7amViaP85xUKij255GGdt0GBIQDoyZVp7NMt1Z2GKmaRlaS3q/tIhwkWTPuZrNjOO/iO8RtN/eiqMbltWCMArPnHjJP7zW9OwDdBGxyJRE6so5LvbG1U42s8e+mcMjz9S1lx3/aWCnutOi1HlKCrHfbmV6nH4XuLl4qPeNM8OQi7gG4ibvD3H57GJ2Q9u72lmwZLPJ8GQyul8Q8lbOKRH0PGrPcTH8P97TRtS7X9zt9EPfl5EMou1YLmGPw8ZLyu+O+PkbWmXFfzobTpH/7n8DfOf3xhP/n+sfhH4e/uf4HQUhIRaXshvsAAAAASUVORK5CYII="
                      id="image2152"
                    />
                  </g>
                </g>
              </g>
              <g id="g2154">
                <g id="g2156" clipPath="url(#clipPath2160-7)">
                  <g
                    id="g2162"
                    transform="matrix(193.2,0,0,480.2,2850.9,2103.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2164"
                    />
                  </g>
                </g>
              </g>
              <g id="g2166">
                <g id="g2168" clipPath="url(#clipPath2172-4)">
                  <g
                    id="g2174"
                    transform="matrix(121.2,0,0,313.2,2883.9,2208.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAABBCAYAAAAkNA/5AAAABHNCSVQICAgIfAhkiAAABC5JREFUWIWdWNu2KykILDr+/zfOZ5yHicwDAgVqkjmutXenFSjurcr8848q6hA8AASAxgxEgEWpohDNdcV0qjJ8fmgIZZTHqUy4s0uyG+hZKcUsgCMBlrYsLSirjoIXTZPFGv/gyismRtE8OFloX0tBCSDl1YU70DCAZsERDG2tjwW2rBP1mDzLkm9CpMVMJ8VtkjWcQsLuEphLyGwAeF6RTSmwvUfwHeABVkax6zImrF08m3X93Wkpve3prjOkARmV+BYfdplOWlpeCCCWYcAjzN4ypVnHjAXwTTwA8FpzOUYic9G5u14EzkA0J69mmRoQNOZb2nRBNMfB3mh57CJHldWqP9oKr2tWusegpDOI11xn7pIXaZYF5dlxtXArDXKTwJSQByP9zoMz5FnKJY1y3+b+tbVzs2gkJed2gkhJa9AcoBFw51VAhSx6A+LZJViLCSBb0+xDg0ajtWABVb6UJCdBN4Bvw2Nrzbf1D7aiV/+pQzs9x29X6jnXxckSb6QnN7J79/pqrf5mxQm4tSF4++JPs62PPdi3D9ivo34lAU13ydYuehF+EBi/TdFQdhnwMMFdwKe5MxiPvhc6MPR5ObzfBtWJbDXyf2ujA1cZh1Z/1ub8Th+yTuWKy8eYfAK8AZ8s+mjJ37pwz8rnl8B9zjRe0+Pvx152n9b50/q38VPge1A70DfgYsmN6WZdX/tERyC6HYPqnva7UB57do2zBaf8b3vlbe0ew75d/6LlLwmwDkF6iYnyTvDqop6NN+CcH7Y36juPG5O05yf6tabKX8bO7L97LFjw+an6DgAAeIBJpyUlX54Cqe1vtyQAaGRMNH+ovg/u64JP7z7Y8vmp4m/a3mtK41xS+Q4pzEwn4ee5mpmV7sl4zAhUEszQTiludvhMoWWb6gGPM+RcFR/HNloMt+oCEtK4txpSLA6mW6sH0APN2izt78nAACzDLLRixFy7PrLIzfm6/dKSmeEZeh+FUAA7U7yIyH+eXNRoNgCz7umoYeY315x+XzLsCaELNQOHA9BFe+eN95Wpa2qEn7Z4OM8qsHAh8NsFTk9hk4K8XfBNjKBaxTE6fRaW9uVGooA0bdhtAOymAdi01Q6yu3jAi4v3w6HJ7TixhPg5Py4J2N35HMkyUS8s27elXcpsRhXlqKdh4rErPDVvFBedauI2eqv3aZM7pFjhKdzcF5Z9A6InXa4NABAIAbmZfsEM7Gd87jU95dvnAm8MF25iZrJrAmaImsDYntX5vPEWCNbdiuJfxEUNHjL8HXN59ce1AnRLTGnehACDPz5JZLei61wcmn0brrkLj7t6iUv+GZc86toTw60H17FTiE6Lib1YjYgqVCg2K141Mc7vWJfNNuZqEtqvPZbWCyiZJq3afAqehVtKjzPnjXRR9btZVqvcgF2Q8blSrn23VDHxH1VzbD7KkwFEAAAAAElFTkSuQmCC"
                      id="image2176"
                    />
                  </g>
                </g>
              </g>
              <g id="g2178">
                <g id="g2180" clipPath="url(#clipPath2184-0)">
                  <g
                    id="g2186"
                    transform="matrix(121.2,0,0,303.2,2883.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2188"
                    />
                  </g>
                </g>
              </g>
              <g id="g2190">
                <g id="g2192" clipPath="url(#clipPath2196-2)">
                  <g
                    id="g2198"
                    transform="matrix(101.2,0,0,25.2002,2903.9,2208.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFCAYAAACqwacNAAAABHNCSVQICAgIfAhkiAAAAJhJREFUGJVtkMFxAzEMxLCcq8vNpNA0Zi7ykOKX9yWRIgZUfl8/TgKBIZCQcPM5fIkooBRBqKJl2uXdPUUEz4PdAn6FcSEH+H89wFqeKgNsl2QwEkMtZyIM8G6ZmQ+wliTHwaJeMDwiFQbAYkA9mzfYZa9jAVvk9s0FHtPJkXm2ZRJgqHc8YQxkCaFHmemF3y/KhdfTWKUuf4P0iN241PjxAAAAAElFTkSuQmCC"
                      id="image2200"
                    />
                  </g>
                </g>
              </g>
              <g id="g2202">
                <g id="g2204" clipPath="url(#clipPath2208-6)">
                  <g
                    id="g2210"
                    transform="matrix(20.2002,0,0,30.2002,2994.9,2208.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAGCAYAAADkOT91AAAABHNCSVQICAgIfAhkiAAAADtJREFUCJkly7ERwzAMADHwTjNl9qyUHSx+CpcoML/vJzN6FpzCXUqXY9MTmOX0ZF6/BcSWKaeNm0GbP5pLJblUfCdVAAAAAElFTkSuQmCC"
                      id="image2212"
                    />
                  </g>
                </g>
              </g>
              <g id="g2214">
                <g id="g2216" clipPath="url(#clipPath2220-0)">
                  <g
                    id="g2222"
                    transform="matrix(29.2002,0,0,40.2002,2999.9,2203.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAABHNCSVQICAgIfAhkiAAAAE9JREFUCJlljskNwDAIBGct6kj//aSZfMzmgYVj5TVoGQ4992UAXCALg/EPlSaYBgvlagK2CRJk95QXh7bYIQlxmNkG4Xk+JaoIf1aJfesFWL4y0OztOr0AAAAASUVORK5CYII="
                      id="image2224"
                    />
                  </g>
                </g>
              </g>
              <g id="g2226">
                <g id="g2228" clipPath="url(#clipPath2232-2)">
                  <g
                    id="g2234"
                    transform="matrix(29.2002,0,0,30.2002,2999.9,2208.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAABHNCSVQICAgIfAhkiAAAAElJREFUCJk9jLENxEAMw2jAO2X2jJQdzmIK57+SCBGq5770BADHzSPtCSgOAJSA0p61KhCELHdtfuNCIr2SlPLrjLQTCjAi/K9eUBg4nfFNGOYAAAAASUVORK5CYII="
                      id="image2236"
                    />
                  </g>
                </g>
              </g>
              <g id="g2238">
                <g id="g2240" clipPath="url(#clipPath2244-2)">
                  <g
                    id="g2246"
                    transform="matrix(20.2002,0,0,20.2002,3008.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABHNCSVQICAgIfAhkiAAAAC1JREFUCJlFybENwCAQBDA/yv5TZSF6uE8TQWm51nxbAtQ2LqITjwpa/zFwQHw8dRWcTSimpAAAAABJRU5ErkJggg=="
                      id="image2248"
                    />
                  </g>
                </g>
              </g>
              <g id="g2250">
                <g id="g2252" clipPath="url(#clipPath2256-5)">
                  <g
                    id="g2258"
                    transform="matrix(82.2002,0,0,58.2002,2903.9,2410.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAACEJVa/AAAABHNCSVQICAgIfAhkiAAAAQJJREFUKJFdkkFyQyEMQ58MaXr/G+VOWaUf1IUNn5YZhgFsWZKt+X4ZAqIBAjXAQACzzgE2KGB88t21FXSiZ6D6key6r1VvDDLeMAdoAKJn5ZZVCPAAdUz8BZERAq4ECTIPk+XOJPWSpRvDzgMhZhWcW1ZHzwJoIBKAqMC1ZoGB9Y345L8zvN8AS5Jqk2yWofggJmAgTfBVGg7m6dFp6PGm9u8/GfY0p0E8SrvSFy2TW/lTxjOLIZgvpIujj9mBTFiVH+zWEpW8xgHwxLvF8TxoRjVmadQuYM+8eoFmjX4PVRqqTX0N3tIe5bNz4BzgC/xDvzvCARAHsG95gDTxZtIgxC8Qz16J+BJbEQAAAABJRU5ErkJggg=="
                      id="image2260"
                    />
                  </g>
                </g>
              </g>
              <g id="g2262">
                <g id="g2264" clipPath="url(#clipPath2268-2)">
                  <g
                    id="g2270"
                    transform="matrix(20.2002,0,0,58.2002,2898.9,2410.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAMCAYAAABFohwTAAAABHNCSVQICAgIfAhkiAAAAGFJREFUCJlFjrERQjEUw2T5kc+x/zpMwECUoQgc7nRS4bxfz00FgJahQiQK98XQ4pQ9QxomOXmmpDLpSdNCxQNCBUWAnfDbpAWPzbohbP66iKfIY+EUqeQaEtmG7wnBwIYPj6YJkQGp2ggAAAAASUVORK5CYII="
                      id="image2272"
                    />
                  </g>
                </g>
              </g>
              <g id="g2274">
                <g id="g2276" clipPath="url(#clipPath2280-0)">
                  <g
                    id="g2282"
                    transform="matrix(101.2,0,0,116.2,2903.9,2093.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAABHNCSVQICAgIfAhkiAAAARtJREFUOI3tkklyRDEIQ5/4vlSuknvmdgFlYfyn7qpOdlk0G08gCRl9fXwaIIDQRtlIRgShoFysuJ8Bygbm3XoZ2PNCopyEhQ1WUs6mWwC5dnOxuraPNgJGVrLFRlUSsVHyocwCLf64gJUMMpWnTkJkJaNsXK2gEyIm9bfzkEERW7QagyFXHWCgiql0tlWEAlOAyLZEQLU6AZVMdQtl95TOEYUZ7tesIqQJfOQhtCuRiqrrR+1KDWrrRtZSEhSFpDkBe1snBt+A9k1/WE/GuLKph0G4Wb2skHgId2fMEVwxDk+m6SFNID9iPEFthQaS6C6H7YuKs/HXLl6zrNpxL7i3eSf9DdG4XzxL/I3Kc8TrlL/HG/QN+gb996A/i/XA6+RhiEwAAAAASUVORK5CYII="
                      id="image2284"
                    />
                  </g>
                </g>
              </g>
              <g id="g2286">
                <g id="g2288" clipPath="url(#clipPath2292-8)">
                  <g
                    id="g2294"
                    transform="matrix(246.2,0,0,313.2,3992.9,2352.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAABBCAYAAAB8S5zgAAAABHNCSVQICAgIfAhkiAAAAHlJREFUaIHtzzsSQAAQBUHc0P1jjoFQIvEJutR0vm9rxmWd92EbnhvP4/3FzNXI3b3pi/+KYlTFqIpRFaMqRlWMqhhVMapiVMWoilEVoypGVYyqGFUxqmJUxaiKURWjKkZVjKoYVTGqYlTFqIpRFaMqRlWMqhjVr2IOZucIl+/eFCcAAAAASUVORK5CYII="
                      id="image2296"
                    />
                  </g>
                </g>
              </g>
              <g id="g2298">
                <g id="g2300" clipPath="url(#clipPath2304-8)">
                  <g
                    id="g2306"
                    transform="matrix(155.2,0,0,274.2,4083.9,2093.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA5CAYAAABXoymnAAAABHNCSVQICAgIfAhkiAAAAEBJREFUWIXtzkENADAIADGGzPlPlqkAGfDoGbie92/FYDk5BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWAFoRHcDm43SAoQAAAAASUVORK5CYII="
                      id="image2308"
                    />
                  </g>
                </g>
              </g>
              <g id="g2310">
                <g id="g2312" clipPath="url(#clipPath2316-4)">
                  <g
                    id="g2318"
                    transform="matrix(44.2002,0,0,16.2002,4031.9,2083.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAADCAYAAABBCiV2AAAABHNCSVQICAgIfAhkiAAAABVJREFUCJljvFau95+BAGAipIBoRQAOZwKAldfHOAAAAABJRU5ErkJggg=="
                      id="image2320"
                    />
                  </g>
                </g>
              </g>
              <g id="g2322">
                <g id="g2324" clipPath="url(#clipPath2328-9)">
                  <g
                    id="g2330"
                    transform="matrix(25.2002,0,0,20.2002,4074.9,2088.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAYAAABGM/VAAAAABHNCSVQICAgIfAhkiAAAABVJREFUCJljXGkY8J8BDTChC5AmCACxIQIxYA+zqQAAAABJRU5ErkJggg=="
                      id="image2332"
                    />
                  </g>
                </g>
              </g>
              <g id="g2334">
                <g id="g2336" clipPath="url(#clipPath2340-9)">
                  <g
                    id="g2342"
                    transform="matrix(30.2002,0,0,20.2002,4059.9,2083.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAABHNCSVQICAgIfAhkiAAAABVJREFUCJljvFau958BC2DCJkieBADzUgKC6SVhHAAAAABJRU5ErkJggg=="
                      id="image2344"
                    />
                  </g>
                </g>
              </g>
              <g id="g2346">
                <g id="g2348" clipPath="url(#clipPath2352-2)">
                  <g
                    id="g2354"
                    transform="matrix(15.2002,0,0,16.2002,4040.9,2083.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABHNCSVQICAgIfAhkiAAAABVJREFUCJljXGkY8J8BCpgYkAAKBwBO5AIvAK9HzgAAAABJRU5ErkJggg=="
                      id="image2356"
                    />
                  </g>
                </g>
              </g>
              <g id="g2358">
                <g id="g2360" clipPath="url(#clipPath2364-4)">
                  <g
                    id="g2366"
                    transform="matrix(419.2,0,0,548.2,3819.9,2117.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2368"
                    />
                  </g>
                </g>
              </g>
              <g id="g2370">
                <g id="g2372" clipPath="url(#clipPath2376-9)">
                  <g
                    id="g2378"
                    transform="matrix(29.2002,0,0,260.2,3815.9,2275.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAA2CAYAAADktujlAAAABHNCSVQICAgIfAhkiAAAAB9JREFUOI1jfPuu4D8DFsCETXBUYlRiVGJUYlQCFQAAcz8Dtt5zIssAAAAASUVORK5CYII="
                      id="image2380"
                    />
                  </g>
                </g>
              </g>
              <g id="g2382">
                <g id="g2384" clipPath="url(#clipPath2388-3)">
                  <g
                    id="g2390"
                    transform="matrix(155.2,0,0,274.2,4083.9,2093.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA5CAYAAABXoymnAAAABHNCSVQICAgIfAhkiAAAA2dJREFUWIXtmF2Sm0oMhT912P9Osr5c27ROHiRBAzNJDNR9sqpmbGSQjv7V2K//fkp6Ih4gRzyQnrieyF9IHfdfSDPQETPohfTAXWACdyQHc0C8Qy0+DPiRLAdAi5zXerc0KGjx3d9T+A0AEdb10oSZDSiEWQP7kWDrGQPL63YOSBtdZhCuLCVmodSmvMOPEuzIeguAJISDNEBRAtlratuHLyrnIDHJ1SMh1YcwdFAnPBbJ5mNK+Dk0DeZFigG2uLs4gDxuNTv+VqyzOSAcwwHH6UgPysLV2swNbUN1UwgUrgYM4epIe2t211mOmxBcAVCudX9tJZrjQ+3LwlP54+bjGgA54olZKtPa0ZqtdW9qfJO3VwCEMi1l1sAa4gXq6RVAMzIPPiRI1k54CNs/AwBwbEk6rcIp2Z1sU+lxB42+P58ITXrhhKWuVybgCGBQJLHMgFJs15KgiZ7Wl8xsNun+mIIg60BfKgZTOsW3zngXgCGkGbPsfPgXZVhDahxEbHlqnAlFCwu1tN+Q2bP8ivaCbZjCXwyodwCE8tdgfQrUnLx5ua6xvQVlAcLOAZk2wiSw+VBS655Q4Hzz2BWauj9CkuZlLHtNwh0dckPvr2B7aqSio8IClSGg51/OACP/XSvDKZpKxW/GfeaQWHK2OfenBH0TQGyzkYC+uHT0hu2uk+fZwk8mX1EsJOphucL6baiz+xWzBtZIJ7ehAGAWNW+7RqIe3U97jwy32PVQTBFzsu7XrA7lztp+hz0w1ud4zu10DwCYqF5fVbD0erZ8fJeAObTsahlulA+DR+P2k8pLmWs3gM6DmFYLZ2Tz8NPY/eIMGDugVv7JJWQDoHr8Uk65DwSwAOFenhh3w3toCoF9Y1ntAF83nBsGwAggdr/K/toF6gREHMEhh96QExv322lgbTl4LJav7l2Vax2YlYgat+MLSbgeTIY5ryHmg+WhvJaWbV6cBiA9V0FZamH4H5S7Xa7/BQD1moV9n9m7fVR+j/UAk1OKxjkwDpwd377gX6DhFc2oPL8uynw38e4rxbbEOnf8UhjngGw60qk3YP9CU5z5R1Z2Rc/aPrj87kY0urmo3H1jy/0WQCjMId90e5b/HYA6cSSvWMOV1vo+AJRL6Uj/j3K4+3XHB8AHwAfAB8AHwAfACfoN9jqaknmhoPQAAAAASUVORK5CYII="
                      id="image2392"
                    />
                  </g>
                </g>
              </g>
              <g id="g2394">
                <g id="g2396" clipPath="url(#clipPath2400-0)">
                  <g
                    id="g2402"
                    transform="matrix(159.2,0,0,476.2,3944.9,2083.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2404"
                    />
                  </g>
                </g>
              </g>
              <g id="g2406">
                <g id="g2408" clipPath="url(#clipPath2412-0)">
                  <g
                    id="g2414"
                    transform="matrix(168.2,0,0,462.2,3935.9,2107.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2416"
                    />
                  </g>
                </g>
              </g>
              <g id="g2418">
                <g id="g2420" clipPath="url(#clipPath2424-9)">
                  <g
                    id="g2426"
                    transform="matrix(58.2002,0,0,495.2,4074.9,2088.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAABnCAYAAAA0RqN+AAAABHNCSVQICAgIfAhkiAAABLdJREFUWIXtl02S7DYOhL8E6QP5JnPNOaOLSC8AUlS538R44Z3VHVFVEn4SyQRI6b+//8f8jWtK+vGB/XOcCImfXH4VKPaD/9dpCjEi8AUjLziSXvCmBLYQ7ocilKcOX45VA0FIT3oZEcdIX9Bm4deTfv/5inxlKkgAF4snMgUX5XGKMSYzBhENY2f74m3Dmv2LIBgjWLkAkRgQiyQQaaMq+h1BBFwkhAqc+t6MmIRd3CshIHMX9TBXNQYRqCBJ0NEjRMR47K96jpZCATLRTh3vghZIJoQYisvA7LpiRNO7M4hQVJQIEQpmTCAYTceI0c+EBDMkEhU7kYAPM2BSSRAsElnEGMEc82SQxRzjsBN+Ci4kXdhQi/BAiSagMspNzozBePi7GKmFCg1w1QgitoaGRmW5NDX0UIwEohZujgldw1B9Gjiibq3JRU3B6GdDg2in+tsqoFQ9hk7HzSh2FEGEUGwyihBkZmlnlKSdBS0LLIalVVwc8V2dZpupYCiuFo2ShoRk5hiD/LBLwT09hgIF5PpcjAfFblSjRFS03dN08Y/8YQ4GKYPExwsnSGbEwLlwO+3hFjEHv0W3dopqi2faKa65JVU/qAs9FMeGB7t6qdfkLMwW5aXOW192Vp0lNrWMxRy38GqtRwRjjNbSiJJa8LRqS5kQY4x2VLXZM4jjgaWu63T3cxXzUToabbh9Wz5ngke3G3EorBX+LSZDE1FwXhlkXQOzIoIfvbPHJz0q/grzOEq1V2jsKdKbYrxGYTf/HptfEWO0qIbE6Ol/X5Zfm2RUsb0wPBtRxJNtPHAK0tkbto4ePdR+1z8TE7Zf+7DO17em4i76fpSuiJlbpZWxiheR15a6cb6rLgQfFjWoX8+KkcwEsjbCO4ApVdhmcT2UsJ5skhiIMa5VUWYXn6fLsjPW/S468TFoyM/3rLGz+jiBITKTBFaLTq3rcal0Q7P9HLB2HRU1+XwWqOB4uU8GEM5kraLMuUiZtUzKON/nvsRdA/sUFs1evuvq3aJqsLFXpXaycuF9Ujg6uVhqUnGnpKeDeuv9rA8LN2wI5Telm0LzFg2kk7mcfDL55B8YWJkkybeKETjN/GSyvF7H0M3Ipnqt1QevPpE5K/1y4izxma8MDXZ+8g+S4t7AsmvB0rXnvbQCsfvP4caep4nomorqcpwW5Gqq+6ZtMhfri6XlZK6V9dDFzPJqdVaAfK04hMlmpT531EcySWby2SwtN62uIpXl7Mwnuh7IM1dRmJmkK246SQrOOYFK2IuZVMrVRjtyftGJ/czudPbJ0eeEXzW3TI6WzPz00WCxDu+ZeYbsHgLpWqe5Wpkrm6VmI3mcbhZjR30Z9+8tyG1sm3mM/NxcfkNi90eamdkKJbG5SiwYe25l28yT0k+WY9zULmfNq6Qc9s1y1FPihscz/uenNb8Lq+9fjZPn3Yt5GsRir/qzwJut/apm5sfN0mpD+UyPXcPdrnMzsKfb3i9O8YduYZK58klb/782Bpi3wRHdBcF3LfZD6+2wX/JeEm/nWWn1grJh3IXva974HuMHzvc1b+MdTV/Grzf22/Avjl+v91QNz/D6vn66N3+6+b+uXxzg/nX41+Gfd/gTjKmPHhHbYd4AAAAASUVORK5CYII="
                      id="image2428"
                    />
                  </g>
                </g>
              </g>
              <g id="g2430">
                <g id="g2432" clipPath="url(#clipPath2436-3)">
                  <g
                    id="g2438"
                    transform="matrix(198.2,0,0,500.2,3920.9,2083.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2440"
                    />
                  </g>
                </g>
              </g>
              <g id="g2442">
                <g id="g2444" clipPath="url(#clipPath2448-1)">
                  <g
                    id="g2450"
                    transform="matrix(121.2,0,0,313.2,3963.9,2208.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAABBCAYAAAAkNA/5AAAABHNCSVQICAgIfAhkiAAABCxJREFUWIWVWVmS7CgMTNHc/4xzjPlp8n0goQXZVe2IjjIYJGVqYWlZ//9HhCc1Xh6BpNHEgmCAWADWHsP9fVahgp+iTkAhpAykCvJn6OhxZlIWhMR04QOAaEMSpP0tdgiEhkSO2o0GAdEAZWGKWpAUQHzu6Q/v9kqzmBDKEV4VTcgAyD3wUCVZ4JEYLRdAFrZ3eIa40TyK5oEf6UoKoqLaP1Jr+2CPNZ8JfjDfBf/tEQxFxIPIkSQKDFEJJxkAF9J4/ob2iSn3qyqbFfKeI5l+o0oqZTqXCy0Timo7vlp8oqtOLNRKUE4GpDHHYD5hY6kJCkZweTtZXyPRo3HTdQQXoWRWcIwIiLnSZ8jc85BRjduSIATFgDRWbiNaUeJlxSdEVI1PaNRCWR5OY0JmbapPpCstTwib7JefIPi3GHCiq3Dd0nPTAFnAKZSRBQGEJzhmnpR9IC2ijYAkgJ9Tv47DI22abzM7dr/LlXT2zSkSpY2U/LkqGlOLjaA4uSLIRuRxpfxboQ20zzuC6hMVpFpzEJGxP+bJ7gt5YlTV/GiqQEPx9T3kUHK8dMn1GF1mPXUeQS6kpVsL5Hjn+YX/xvqtbOQolbGRiHyiJj6R+9tPVpDjEtMg+UZBfO+SNxvcrFidwDfFVfjdP/qs/jT5b3Pqsoiekq79PO4YLq909bC/G3u3nxetx4lv7z2N87OFT6hYvt9bd/t5ia6wj3o9UDx9sxpGjH7Qt6eUt8cy3ndnX0ziw7u141/oIzDIv1LxpqzvH/fHzspPQssMXkq0RF/CKvQnY24jRK4Q7qzuwvcTreGQ2iFxNHViRViFvvmMZwcz9563E2AZ/E1guELyVp7oIldYgtMa+oWirm1INJYdzVO5qOXldjjPycuoOkjy8kndyniAPNWm3MfrAGTKli2/Ds3ePUI+O/g5BfZzosv7uuR7zpscrkpTCeGZj2iAHw0QdoaEyE8Kc9trvSasn0+0IbVWMiiU4FRD8Hu+ZTbUEKPQL3BMK1RZPDfi/UkOZ+mDIrGt5dagv+Fky5InV9rk6ExKuQDajUS0OCHqLO+Sc50ScqECMHDVrChw4fX7Edj9+uNlJR7HTEGdaGcO6egJCBjHn+j6RT5bFIuqID5YzdWMByb0di2F41rZJ68RVmrfFW0nhGM0KaoYACmDxfMn9hO4KaYiOVeDXTSJJ2pV2i5y+ZdYEMquXUIp1nYOD3R8jLisfNqlsVtdV8SSbI2Qq81dkuwuee7uqijetVSEnULiMoybLlViCpYOjY6m63qynGGM5lq8/RaUNV4Ulbebyvy0TQqW75tinpFTuMAwz+7aRYWwKRNGbTUoLOLJ4JAnI0xoLE32d9HVj5Vdhe0/CjsJKVuh541RUO+LBZl/v2x2oxWJR5bC5K7m8f8gQN6L5Tk3uv1/E19J/wE3e1GjESuiiAAAAABJRU5ErkJggg=="
                      id="image2452"
                    />
                  </g>
                </g>
              </g>
              <g id="g2454">
                <g id="g2456" clipPath="url(#clipPath2460-4)">
                  <g
                    id="g2462"
                    transform="matrix(121.2,0,0,303.2,3963.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,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"
                      id="image2464"
                    />
                  </g>
                </g>
              </g>
              <g id="g2466">
                <g id="g2468" clipPath="url(#clipPath2472-1)">
                  <g
                    id="g2474"
                    transform="matrix(102.2,0,0,25.2002,3963.9,2208.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFCAYAAACqwacNAAAABHNCSVQICAgIfAhkiAAAAKJJREFUGJVF0MENwzAMQ9FPxnN1mQ7axSKyBzstb5QA4UH6vN61BAIjZLGj3RGXDUBSanAhAgVKAFFKKFDW5CYylgjCFddlmjASAibhiSMGkMzNnGkxogmhrD0rBaStnAlIuAUJ9nZr6b6T4Z8y7a+taaHBMlK21heiBJGjXDbo321Dy/10nRdMWOlgTJrzQVBCBaWoR3/AQsxR9qibEIse7Rd4sWs2Ar4ZVAAAAABJRU5ErkJggg=="
                      id="image2476"
                    />
                  </g>
                </g>
              </g>
              <g id="g2478">
                <g id="g2480" clipPath="url(#clipPath2484-6)">
                  <g
                    id="g2486"
                    transform="matrix(25.2002,0,0,30.2002,3949.9,2208.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAABHNCSVQICAgIfAhkiAAAAEhJREFUCJlVzLENwzAUxNB3ikbK5FkqS1j/UhgpzIYAC+b7eTcLCSu3lB4PdkpDT7nKi90zmhCyoo09UyvumJhrrP9npnoG/ADX0h7Kgys0JwAAAABJRU5ErkJggg=="
                      id="image2488"
                    />
                  </g>
                </g>
              </g>
              <g id="g2490">
                <g id="g2492" clipPath="url(#clipPath2496-4)">
                  <g
                    id="g2498"
                    transform="matrix(34.2002,0,0,40.2002,3935.9,2203.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAABHNCSVQICAgIfAhkiAAAAGBJREFUCJlFjcERhEAMw+SwZdB/OfRzj414BA5/kvGMpfyuUysQgEAxOUIppCUNKLx3S9Gi8ib9/ML6t0qGPWtkDSpYDo6QgJVZKrAhmYUFMRR7HOHz0mA3CyT2p36wNNzfoTXZg5vNkwAAAABJRU5ErkJggg=="
                      id="image2500"
                    />
                  </g>
                </g>
              </g>
              <g id="g2502">
                <g id="g2504" clipPath="url(#clipPath2508-2)">
                  <g
                    id="g2510"
                    transform="matrix(30.2002,0,0,30.2002,3939.9,2208.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAABHNCSVQICAgIfAhkiAAAAEtJREFUCJk9zMENgEAMA8F1dB1ROF1RBFJsHuHOT680eu4rKoFABUhQouSgAIE0ZwXgHYF0yGuWHar+Q5sUa4iQoSdIQ6VzbDukzQe98ie7knpTIQAAAABJRU5ErkJggg=="
                      id="image2512"
                    />
                  </g>
                </g>
              </g>
              <g id="g2514">
                <g id="g2516" clipPath="url(#clipPath2520-4)">
                  <g
                    id="g2522"
                    transform="matrix(20.2002,0,0,20.2002,3939.9,2218.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABHNCSVQICAgIfAhkiAAAAC9JREFUCJlFycEJwDAMBDDZdP+ZMlIHCL4+EuhXqv2uSANdOhNqDkzc+vFhy1wXH4/vEKkr3A/GAAAAAElFTkSuQmCC"
                      id="image2524"
                    />
                  </g>
                </g>
              </g>
              <g id="g2526">
                <g id="g2528" clipPath="url(#clipPath2532-2)">
                  <g
                    id="g2534"
                    transform="matrix(82.2002,0,0,58.2002,3983.9,2410.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAYAAACEJVa/AAAABHNCSVQICAgIfAhkiAAAAQJJREFUKJFtkkFuxDAMA4eym/3/m/qlXopsxB4kJ8aiBgzHjkRRIpU/3yYG5AlxAIDEvWzA9X2dINebE0jwRdzBcYBGbcYDogEIFLXRVqjuk5gd6H7cAwBfnRwQCfng1Epm02gg8B2hAtZAGPwusFAVcUJe4GASB77pPxS3oWAS9IVMzYRsQAqkAFbfKzk2kKy7jTWQf/t/Vi1NJoyn531wqx3WvEoN8wIu5HfXG8Tdgp65FKvxz/mpTqk2Ny03Nn5kJTphyZLgURECnEw0IF4fibSZYrurjRZ9CjMQC2R5pKkX0/XeppXaM0uIs2RHC6QqavVJsJtPygaKAvAFmm2AwR9ZYVyTYYZrJAAAAABJRU5ErkJggg=="
                      id="image2536"
                    />
                  </g>
                </g>
              </g>
              <g id="g2538">
                <g id="g2540" clipPath="url(#clipPath2544-8)">
                  <g
                    id="g2546"
                    transform="matrix(20.2002,0,0,58.2002,4045.9,2410.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAMCAYAAABFohwTAAAABHNCSVQICAgIfAhkiAAAAGxJREFUCJklzbFxA1EMxNDHJWW5/3rUgCryjOx/dHAJImBQP+/XOmv34vMrlJtlO0YXNfSlPsfk+2nPsYeqMVDdFvqY/Rp1VnA92tQMuaylW1RhSWTaVO6+HP6IuKXkTur5YEYlNnVvTSOS+Adv7CIMdB7cXgAAAABJRU5ErkJggg=="
                      id="image2548"
                    />
                  </g>
                </g>
              </g>
              <g id="g2550">
                <g id="g2552" clipPath="url(#clipPath2556-2)">
                  <g
                    id="g2558"
                    transform="matrix(102.2,0,0,126.2,3963.9,2083.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAaCAYAAABYQRdDAAAABHNCSVQICAgIfAhkiAAAATlJREFUSIntkkFy5TAIRF8TX2quMhfN5aLuWQjZ+i6nKlXZzOKzsQTmQYP0+edvkCgKY4oCAImjCjtIIBUCknRYBEh83R1GzGEAGyuUhDOAoiS+xpgFAjCTV0Ec7hZMgMMeEFEFTmYCxjYVNWQBap7DVJbl74IRVjiGjRC4iDLzI+qjZvcLvNKTHtUzkIQjHTQT7gQBdBeDzKIbwBmtqHkJIqw6xx6YQRHNgZ+oc346Px/U6ffZbUNtkOaG52ZnX5UiF6PnlytZvZpWFK7FHcHs/0vzPBjwsmBdccDxtqitzbt8Sd1t8WK6ql6c25NqWcEcq9olEWAg5oNe+doKpWf45Jvyz5lskL7nRd7gbqX7CNr/oqBfwE/tCQjbTO/wuy0Ve+zJ9y30p4W+U1WP3l/aG/qGvqH/PfQfMLTb/imCfSMAAAAASUVORK5CYII="
                      id="image2560"
                    />
                  </g>
                </g>
              </g>
              <g id="g2562">
                <g id="g2564" clipPath="url(#clipPath2568-8)">
                  <g
                    id="g2570"
                    transform="matrix(30.2002,0,0,174.2,3819.9,2299.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAkCAYAAACqqEt1AAAABHNCSVQICAgIfAhkiAAAABtJREFUKJFjfPos8D8DFsCETXBUYlRiVILaEgBmBQNjecjSvgAAAABJRU5ErkJggg=="
                      id="image2572"
                    />
                  </g>
                </g>
              </g>
              <g id="g2574">
                <g id="g2576" clipPath="url(#clipPath2580-6)">
                  <g
                    id="g2582"
                    transform="matrix(24.2002,0,0,222.2,3815.9,2285.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAuCAYAAADgBNMQAAAABHNCSVQICAgIfAhkiAAAABtJREFUKJFjfPuu4D8DGmBCFxgVHBUcFRy8ggATRAOmpUZuvQAAAABJRU5ErkJggg=="
                      id="image2584"
                    />
                  </g>
                </g>
              </g>
              <g id="g2586">
                <g id="g2588" clipPath="url(#clipPath2592-3)">
                  <g
                    id="g2594"
                    transform="matrix(30.2002,0,0,174.2,3819.9,2299.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAkCAYAAACqqEt1AAAABHNCSVQICAgIfAhkiAAAABtJREFUKJFjfPos8D8DFsCETXBUYlRiVILaEgBmBQNjecjSvgAAAABJRU5ErkJggg=="
                      id="image2596"
                    />
                  </g>
                </g>
              </g>
              <g id="g2598">
                <g id="g2600" clipPath="url(#clipPath2604-3)">
                  <g
                    id="g2606"
                    transform="matrix(39.2002,0,0,222.2,3800.9,2285.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAuCAYAAAAV+ligAAAABHNCSVQICAgIfAhkiAAAACBJREFUOI1jfPuu4D8DHsCET3JUwaiCUQWjCkYVDA0FAJCVA6bvykOaAAAAAElFTkSuQmCC"
                      id="image2608"
                    />
                  </g>
                </g>
              </g>
              <path
                d="m 456.117,3207.84 280,20 -8.328,-68.33 -271.672,13.33 v 35"
                style={{
                  fill: "#477071",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2610"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 456.117,3026.58 283.629,17.4 -7.25,-59.47 -276.379,11.6 v 30.47"
                style={{
                  fill: "#477071",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2612"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1018.64,3396.91 c -12.91,0 -64.878,0 -78.769,0 -141.426,0 -261.535,-148.03 -267.312,-304.72 -5.782,-156.68 104.961,-262.68 246.386,-262.68 12.825,0 64.789,0 78.766,0 141.429,0 260.759,127.01 266.539,283.7 5.78,156.68 -104.19,283.7 -245.61,283.7"
                style={{
                  fill: "#d5edb5",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2614"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 1185.48,3113.21 c -5.77,-156.69 -125.11,-283.7 -266.535,-283.7 -141.425,0 -252.168,106 -246.386,262.68 5.777,156.69 125.886,304.72 267.312,304.72 141.429,0 251.389,-127.02 245.609,-283.7"
                style={{
                  fill: "#86a09d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2616"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 918.945,2849.51 c -64.449,0 -122.832,23.75 -164.398,66.88 -42.52,44.12 -64.535,106.29 -62.004,175.07 5.609,152.06 121.187,285.45 247.328,285.45 57.996,0 112.819,-23.75 154.369,-66.86 48.05,-49.84 74.02,-121.32 71.26,-196.1 -5.38,-145.82 -115.98,-264.44 -246.555,-264.44"
                style={{
                  fill: "#d0e3d8",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2618"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 793.926,2916.39 c -42.516,44.12 -64.535,106.29 -62,175.07 5.332,144.52 110.008,272.09 228.664,284.38 -6.852,0.68 -13.758,1.07 -20.719,1.07 -126.141,0 -241.719,-133.39 -247.328,-285.45 -2.531,-68.78 19.484,-130.95 62.004,-175.07 41.566,-43.13 99.949,-66.88 164.398,-66.88 6.442,0 12.817,0.37 19.153,0.93 -56.364,4.46 -107.008,27.39 -144.172,65.95"
                style={{
                  fill: "#477071",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2620"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 995.082,3081.48 c -8.062,6.55 -16.496,12.37 -25.141,17.77 -1.781,1.17 -3.703,2.07 -5.543,3.13 5.817,21.1 8.5,43.01 12.79,64.51 5.097,25.3 9.957,50.66 14.57,76.09 4.351,25.5 9.122,50.89 13.112,76.47 l -2.91,0.74 c -8.632,-24.41 -16.476,-49.03 -24.749,-73.53 -8.008,-24.57 -15.77,-49.21 -23.293,-73.9 -5.859,-19.1 -13.156,-37.84 -18.125,-57.17 -7.207,2.8 -14.449,5.54 -21.535,8.61 -18.672,8.09 -37.461,15.95 -56.36,23.6 -19.019,7.4 -37.847,15.19 -57.039,22.26 l -1.363,-2.67 c 17.024,-11.34 34.414,-21.96 51.602,-32.96 17.316,-10.77 34.746,-21.31 52.285,-31.63 9.051,-5.34 17.789,-11.28 26.746,-16.81 -3.25,-21.44 -5.328,-43.18 -3.895,-65.8 l 2.907,-0.74 c 10.824,17.35 18.839,35.41 25.679,53.76 l 1.528,-0.7 c 9.457,-3.8 19.132,-7.19 29.175,-9.84 10,-2.74 20.267,-4.97 31.267,-5.74 l 1.35,2.68 c -7.1,8.43 -14.95,15.41 -23.058,21.87"
                style={{
                  fill: "#86a09d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2622"
                inkscapeconnector-curvature={0}
              />
              <g id="g2624">
                <g id="g2626" clipPath="url(#clipPath2630-3)">
                  <g
                    id="g2632"
                    transform="matrix(15.2002,0,0,15.2,6215.9,399.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABHNCSVQICAgIfAhkiAAAABhJREFUCJljPB5p/Z8BCpgYkAALw38EBwBhOwNhu5bzqwAAAABJRU5ErkJggg=="
                      id="image2634"
                    />
                  </g>
                </g>
              </g>
              <g id="g2636">
                <g id="g2638" clipPath="url(#clipPath2642-0)">
                  <g
                    id="g2644"
                    transform="matrix(16.2002,0,0,16.2,5787.9,451.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABHNCSVQICAgIfAhkiAAAABlJREFUCJljfFDh/58BClgYGOBsBiYGJAAAeEoDreIv070AAAAASUVORK5CYII="
                      id="image2646"
                    />
                  </g>
                </g>
              </g>
              <g id="g2648">
                <g id="g2650" clipPath="url(#clipPath2654-7)">
                  <g
                    id="g2656"
                    transform="matrix(39.2002,0,0,418.2,6191.9,-8.1)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABXCAYAAAA51wSpAAAABHNCSVQICAgIfAhkiAAAAHpJREFUSIndlMENwDAIA03EVl2kC3etphvYkYgoId8gw1kYe+5rgrzBPgHAh/ECrQA6wYJCQoFDTOkAN6ICRRxzQ4s3rBC2OgFzg1F2RC7+H1JnU62cQ1RUsLrHwvTI5kou+I06AjOe7gqYFW5UBqagTLm0s4PVDoHxAZpiGiM91ndbAAAAAElFTkSuQmCC"
                      id="image2658"
                    />
                  </g>
                </g>
              </g>
              <g id="g2660">
                <g id="g2662" clipPath="url(#clipPath2666-8)">
                  <g
                    id="g2668"
                    transform="matrix(15.2002,0,0,20.2,6215.9,394.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAYAAABLLYUHAAAABHNCSVQICAgIfAhkiAAAABtJREFUCJljPB5p/Z8BCpgYkAALw39kDiOCAwCNZwNmxSDPqAAAAABJRU5ErkJggg=="
                      id="image2670"
                    />
                  </g>
                </g>
              </g>
              <g id="g2672">
                <g id="g2674" clipPath="url(#clipPath2678-0)">
                  <g
                    id="g2680"
                    transform="matrix(83.2002,0,0,20.2,5787.9,447.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAECAYAAABodtTSAAAABHNCSVQICAgIfAhkiAAAABxJREFUGJVjfFDh/5+BQsDCwECxGQxMFJtALUMApqIDr+5djU0AAAAASUVORK5CYII="
                      id="image2682"
                    />
                  </g>
                </g>
              </g>
              <g id="g2684">
                <g id="g2686" clipPath="url(#clipPath2690-8)">
                  <g
                    id="g2692"
                    transform="matrix(20.2002,0,0,25.2,5816.9,192.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAYAAABirU3bAAAABHNCSVQICAgIfAhkiAAAACBJREFUCJljfDIl4T8DEmBiQAMYAiz/GdEEmBhQjGAAABu/BOYHowJ/AAAAAElFTkSuQmCC"
                      id="image2694"
                    />
                  </g>
                </g>
              </g>
              <g id="g2696">
                <g id="g2698" clipPath="url(#clipPath2702-9)">
                  <g
                    id="g2704"
                    transform="matrix(332.2,0,0,256.2,5787.9,211.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAA1CAYAAAAXryboAAAABHNCSVQICAgIfAhkiAAAAMlJREFUaIHt28ERwjAMRFHJszVRCZ3TD+aM9e/x4b8KPBppcZTQn/drl/6spw9wI4sCUv30Ee6TMlGG1LJVTinnZ4hJOxm0wEYBZgpItb/JpzhBkxUBqeX4nLIM2sHxAbEsk/cUYJ8AOwWkvdEO2XbKYKaAVNspJzsFuI4E2U7PYKMAiwIsCjBTQNp7ypD2mj+YKcCiAN8lA5dMwPEBbvNB6vv0Ee5jnwDHB8Rl/uQno8CgBSYKMGhB2i3TkPIfC4PrSOBTMjBmwQ/9nxAw9q2otgAAAABJRU5ErkJggg=="
                      id="image2706"
                    />
                  </g>
                </g>
              </g>
              <g id="g2708">
                <g id="g2710" clipPath="url(#clipPath2714-3)">
                  <g
                    id="g2716"
                    transform="matrix(337.2,0,0,231.2,5792.9,197.9)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAwCAYAAACsVQxYAAAABHNCSVQICAgIfAhkiAAAAL1JREFUaIHt2sERgzAQQ9Fdj5pKJak87ZAUEP0zHP6rwKORF7DZz/v1Hf05dy/gqTJrYRobAzJrNk3GnVTFzdTlzN69hkeyMSDjkKky61ZqfCqBjMO3irF0+ZpM5fAFvsUAgwExmc7hCywMyBwr02Suu5fwTNnjx1KTcfpWvvmCjFupik/szoMqYF2AwQCvT4CxAIMB3hKA+N9Q57ED8O4aOHyBwYCs5zGVjQFenwAbAzzBAzYGZC6HTGNjwA+/ohQglZVLHQAAAABJRU5ErkJggg=="
                      id="image2718"
                    />
                  </g>
                </g>
              </g>
              <g id="g2720">
                <g id="g2722" clipPath="url(#clipPath2726-3)">
                  <g id="g2728" transform="matrix(241.2,0,0,221.2,5816.9,-8.1)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAuCAYAAABqK0pRAAAABHNCSVQICAgIfAhkiAAAAJdJREFUaIHt2IENAyEMBEE7utbSTgpNUc83gYQ1Yivw6mww9P/3XQXwOV3ALq7INBiRVPXpGrbgJNJFnL5QIsiIOIkwIllt9FaW4eG0FiPCrCjMPRJkQ6koQ6J4VJDOchJhRNLI+cvMSAq5SO72O4208rCq53QJe2Ba64pMgxGJooJoQCLML4qTSCMqiEZVnrtrzeKKTOMFrkoOCNYuFzsAAAAASUVORK5CYII="
                      id="image2730"
                    />
                  </g>
                </g>
              </g>
              <g id="g2732">
                <g id="g2734" clipPath="url(#clipPath2738-3)">
                  <g id="g2740" transform="matrix(390.2,0,0,418.2,5840.9,-8.1)">
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABXCAYAAAB81qkrAAAABHNCSVQICAgIfAhkiAAAAS9JREFUeJzt24ENgzAQQ9FL5G06RsfuboQh/CVE9d8EyHK4JKXr9/2cUSVrPf0I7xcz7GVMsZY5ptjKLOdKy3ciwOUMcLAAMuM7sZWxirWMR5aa0xmwn36Af5Djcq7ZRIDHPoBNBLhPBNhEgCECPLEAbCLAEAHZ7hNrNhHgPhFgEwGGCDBEQPzFtGcTAdlO55pNBBgiwBABnlgAfosDyGURaxlTrGWbYc3pDDBEgCECDBHgZhtgEwE2EWATAX7kCYhl7GXmevoZXs8aAgwRkPEap2YTAdnucGr+8x6QWW5xWr4TAV5AAGwiwBABTmeAV2EAlzPAEAGGCDBEgNMZkOV0rrmcATmenWs2EWCIAEMExBh7RggwRIAhAuL3TD2bCDBEgCEC3CcCjBCQubxPbN2uGBtIk0J8IgAAAABJRU5ErkJggg=="
                      id="image2742"
                    />
                  </g>
                </g>
              </g>
              <g id="g2744">
                <g id="g2746" clipPath="url(#clipPath2750-6)">
                  <g
                    id="g2752"
                    transform="matrix(409.2,0,0,423.2,5821.9,-8.10001)"
                  >
                    <image
                      width={1}
                      height={1}
                      style={{ imageRendering: "optimizeSpeed" }}
                      preserveAspectRatio="none"
                      transform="matrix(1,0,0,-1,0,1)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABYCAYAAACEa7uEAAAABHNCSVQICAgIfAhkiAAAATRJREFUeJzt3IFthDAQRFGDtpu0kbJT212a2C8k9F4FaDTGNhiuv9+f72HV/fQFvNHcerpuvtfTl/A+c4S6zj01oKmBuUxU6+aYqdYZ/gETVWDEum+O8b/O7B8w+APzvQz/bZoaEGrA4j+gqYGR6j6ZBuZjSbVOUwP2/oG5bf7XGf4BoQaEGnBCJaCpAa+oA5oamNs2dd2cY/G/zfAPCDXggUpAUwNCDQg14NRfQKSBOZ+nL+F9NDUg1MCc2+J/m6YGxkOqfZ78B+Y4TLFu3Fb3STQg1IBQA3P8mWadpgb8QimgqQGhBrxOCcz52Ptvc5YqYPAHhBowUQVEGjD7BzQ1YEkV0NSAH9MENDXgvX9AUwNCDQg1YPYPaGpAqAGfUQY0NSDUgEO/AR+nBbyjCog0INTAP1KTG0sQtg0tAAAAAElFTkSuQmCC"
                      id="image2754"
                    />
                  </g>
                </g>
              </g>
              <path
                d="m 5700,1213.33 h 488.33 l 131.67,-31.66 -530.83,5 -89.17,26.66"
                style={{
                  fill: "#477071",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2756"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 6210,987.922 4.13,81.768 -48.3,-1.15 4.16,-79.739 -434.16,9.531 84.17,-30.832 470,-12.5 -80,32.922"
                style={{
                  fill: "#477071",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2758"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5880.84,965.879 1.72,95.941 358.69,8.51 V 956.301 l -360.41,9.578 m 439.16,215.791 -530.83,5 L 5867.5,405 H 6225 l 95,776.67"
                style={{
                  fill: "#86a09d",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2760"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 5786.88,1064.19 14.41,-89.831 -51.25,18.77 -5.48,80.361 z M 5867.5,405 5789.17,1186.67 5700,1213.33 5796.67,461.672 5867.5,405"
                style={{
                  fill: "#cde9d7",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2762"
                inkscapeconnector-curvature={0}
              />
              <path
                d="m 6024.47,415 h -103.06 l -44.15,540.969 160.69,-4.27 L 6024.47,415 m -152.63,607.2 -12.54,153.81 184.23,-1.73 -2.47,-98.69 -168.33,-4.01 -0.89,-49.38"
                style={{
                  fill: "#9fb3a7",
                  fillOpacity: 1,
                  fillRule: "nonzero",
                  stroke: "none"
                }}
                id="path2764"
                inkscapeconnector-curvature={0}
              />
            </g>
          </g>
        </g>
        <g
          onMouseEnter={() => this.hoverOnClass()}
          onMouseLeave={() => this.hoverOffClass()}
          inkscapegroupmode="layer"
          id="layer6"
          inkscapelabel="marker_raw"
          style={{ opacity: 1, cursor: "pointer" }}
          className="testyy testyy-1"
          onClick={() => this.handleClassroomClick()}
        >
          {this.animateClassLayer()}
          <g
            id="g19122"
            transform="matrix(0.05129999,0,0,0.04498282,59.596193,87.999829)"
          >
            <path
              id="path19100"
              style={{ fill: "#8a9585" }}
              data-old_color="#5ca33b"
              className="active-path"
              data-original="#5CA33B"
              d="m 390.02734,194.76172 c 0,68.55078 -35.42187,128.82812 -88.95312,163.53125 -8.06641,5.23437 -14.80078,12.26562 -19.53906,20.625 l -69.94532,123.5625 c -0.15625,0.27344 -0.3164,0.53515 -0.49609,0.80078 -7.47266,11.88281 -25.12891,11.62109 -32.16016,-0.80078 L 108.98828,378.91797 C 104.26172,370.56641 97.539062,363.53906 89.484375,358.32422 35.183594,323.13672 -0.492188,261.64453 0.519531,191.89062 2.03125,87.03125 87.628906,1.476562 192.48828,0.0195312 c 6.27735,-0.0859374 12.4961,0.1249998 18.62891,0.6210938 100.15234,8.054687 178.91015,91.886719 178.91015,194.121095 z m 0,0"
              inkscapeconnector-curvature={0}
            />
            <path
              id="path19102"
              style={{ fill: "#80897d" }}
              data-old_color="#6dc54a"
              className
              data-original="#6DC54A"
              d="m 390.02734,194.76172 c 0,68.55078 -35.42187,128.82812 -88.95312,163.53125 -8.06641,5.23437 -14.80078,12.26562 -19.53906,20.625 l -69.94532,123.5625 c -0.15625,0.27344 -0.3164,0.53515 -0.49609,0.80078 -0.17969,-0.26563 -0.33594,-0.52734 -0.49609,-0.80078 l -69.94532,-123.5625 c -4.72656,-8.35156 -11.44921,-15.37891 -19.5039,-20.59375 C 66.847656,323.13672 31.171875,261.64453 32.183594,191.89062 33.628906,91.410156 112.28125,8.664062 211.11719,0.640625 311.26953,8.695312 390.02734,92.527344 390.02734,194.76172 Z m 0,0"
              inkscapeconnector-curvature={0}
            />
            <path
              id="path19104"
              className
              data-original="#C2EAF2"
              d="m 339.07031,194.52734 c 0,79.44141 -64.41406,143.8086 -143.80859,143.8086 -79.42188,0 -143.804689,-64.38282 -143.804689,-143.8086 0,-85.36718 74.105469,-152.316402 159.636719,-142.929684 71.97266,7.886719 127.97656,68.871094 127.97656,142.929684 z m 0,0"
              inkscapeconnector-curvature={0}
              style={{ fill: "#c2eaf2", cursor: "pointer" }}
            />
            <path
              id="path19106"
              data-original="#DEF4F8"
              d="m 339.07031,194.52734 c 0,74.07422 -56.0039,135.0586 -127.97656,142.94141 C 139.125,329.58594 83.121094,268.60156 83.121094,194.52734 c 0,-74.05859 56.003906,-135.042965 127.972656,-142.929684 71.97266,7.886719 127.97656,68.871094 127.97656,142.929684 z m 0,0"
              inkscapeconnector-curvature={0}
              style={{ fill: "#def4f8" }}
            />
            <path
              id="path19108"
              data-original="#F29500"
              d="M 251.99219,81.371094 H 138.53125 c -4.37109,0 -7.91406,3.546875 -7.91406,7.917968 0,4.371094 3.54297,7.914063 7.91406,7.914063 h 10.82031 v 71.246095 c 0,4.37109 3.54297,7.91406 7.91406,7.91406 4.375,0 7.91797,-3.54297 7.91797,-7.91406 V 97.203125 h 60.16016 v 71.246095 c 0,4.37109 3.54297,7.91406 7.91406,7.91406 4.375,0 7.91797,-3.54297 7.91797,-7.91406 V 97.203125 h 10.81641 c 4.375,0 7.91797,-3.542969 7.91797,-7.914063 0,-4.371093 -3.54297,-7.917968 -7.91797,-7.917968 z m 0,0"
              inkscapeconnector-curvature={0}
              style={{ fill: "#f29500" }}
            />
            <path
              id="path19110"
              className
              data-original="#FFD993"
              d="m 309.78125,169.50391 v 112.0039 c -26.26953,34.53516 -67.80469,56.82813 -114.51953,56.82813 -46.73438,0 -88.25781,-22.29297 -114.515626,-56.81641 V 169.50391 c 0,-17.77344 14.417968,-32.19141 32.191406,-32.19141 h 164.65234 c 17.77344,0 32.19141,14.41797 32.19141,32.19141 z m 0,0"
              inkscapeconnector-curvature={0}
              style={{ fill: "#ffd993", cursor: "pointer" }}
            />
            <path
              id="path19112"
              className
              data-original="#FFCD71"
              d="M 277.58984,137.3125 H 112.9375 c -8.09375,0 -15.484375,2.99609 -21.140625,7.92969 v -0.004 c -2.496094,2.17578 -4.695313,4.76953 -6.449219,7.67578 -5.953125,9.89844 -4.601562,15.23828 -4.601562,52.22266 v 76.38281 c 26.257816,34.52344 67.781246,56.81641 114.515626,56.81641 5.35156,0 10.62891,-0.29688 15.82422,-0.86719 C 146.16797,330.34766 94.25,280.04297 84.699219,215.89063 c -0.398438,-2.65625 2.730469,-4.375 4.757812,-2.60938 3.6875,3.22266 9.082031,7.92578 17.011719,14.86328 5.78516,5.06641 13.20313,7.85156 20.88672,7.85156 h 135.80469 c 7.68359,0 15.11718,-2.78515 20.89843,-7.85156 27.5625,-24.11328 24.41407,-21.30469 25.72266,-22.6289 v -36.01172 c 0,-17.77735 -14.41406,-32.19141 -32.19141,-32.19141 z m 0,0"
              inkscapeconnector-curvature={0}
              style={{ fill: "#ffcd71" }}
            />
            <path
              id="path19114"
              data-original="#FFB52D"
              d="m 309.78125,169.50391 v 19.125 c -1.30859,1.32421 1.83984,-1.48438 -25.72266,22.6289 -5.78515,5.06641 -13.21484,7.85156 -20.89843,7.85156 -3.71094,0 -137.78125,0 -135.80469,0 -7.6836,0 -15.10547,-2.78515 -20.88672,-7.85156 C 78.664062,186.93359 82.011719,190.05078 80.746094,188.25 v -18.74609 c 0,-17.77344 14.417968,-32.19141 32.191406,-32.19141 h 164.65234 c 17.77344,0 32.19141,14.41797 32.19141,32.19141 z m 0,0"
              inkscapeconnector-curvature={0}
              style={{ fill: "#ffb52d" }}
            />
            <g id="g19120" style={{ fill: "#f29500", cursor: "pointer" }}>
              <path
                id="path19116"
                className
                data-original="#000000"
                d="m 139.05859,249.71875 c -5.97265,0 -10.8164,-4.84375 -10.8164,-10.82031 V 200.375 c 0,-5.97266 4.84375,-10.81641 10.8164,-10.81641 5.97657,0 10.82032,4.84375 10.82032,10.81641 v 38.52344 c 0,5.97656 -4.84375,10.82031 -10.82032,10.82031 z m 0,0"
                inkscapeconnector-curvature={0}
              />
              <path
                id="path19118"
                className
                data-original="#000000"
                d="m 251.46484,249.71875 c -5.97265,0 -10.8164,-4.84375 -10.8164,-10.82031 V 200.375 c 0,-5.97266 4.84375,-10.81641 10.8164,-10.81641 5.97657,0 10.82032,4.84375 10.82032,10.81641 v 38.52344 c 0,5.97656 -4.84375,10.82031 -10.82032,10.82031 z m 0,0"
                inkscapeconnector-curvature={0}
              />
            </g>
          </g>
        </g>
        <g
          inkscapegroupmode="layer"
          id="layer7"
          inkscapelabel="classroomfield"
          style={{ opacity: "0.664" }}
        >
          <rect
            id="rect19151"
            width="71.552292"
            height="19.194799"
            x="32.471485"
            y="109.25399"
            style={{
              fill: "#666666",
              strokeWidth: "0.13134168",
              visibility: "hidden"
            }}
          />
        </g>
        <g inkscapegroupmode="layer" id="layer8" inkscapelabel="classText">
          <text
            xmlSpace="preserve"
            style={{
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              fontStretch: "normal",
              fontSize: "8.59389019px",
              lineHeight: "1.25",
              fontFamily: "Loma",
              InkscapeFontSpecification: "Loma",
              letterSpacing: "0px",
              wordSpacing: "0px",
              fill: "#000000",
              fillOpacity: 1,
              stroke: "none",
              strokeWidth: "0.21484725",
              visibility: "hidden"
            }}
            x="62.591473"
            y="130.23853"
            id="text19162"
            transform="scale(1.1179932,0.89445983)"
          >
            <tspan
              sodipodirole="line"
              id="tspan19160"
              x="63.752995"
              y="130.23853"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                fontStretch: "normal",
                fontSize: "6.87511206px",
                fontFamily: "Loma",
                InkscapeFontSpecification: "Loma",
                textAlign: "center",
                textAnchor: "middle",
                fill: "#ffffff",
                strokeWidth: "0.21484725"
              }}
            >
              Klassenzimmer{" "}
            </tspan>
            <tspan
              sodipodirole="line"
              x="62.591473"
              y="140.9809"
              style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                fontStretch: "normal",
                fontSize: "6.87511206px",
                fontFamily: "Loma",
                InkscapeFontSpecification: "Loma",
                textAlign: "center",
                textAnchor: "middle",
                fill: "#ffffff",
                strokeWidth: "0.21484725"
              }}
              id="tspan19164"
            >
              betreten
            </tspan>
          </text>
        </g>
      </svg>
    );
  }
}
