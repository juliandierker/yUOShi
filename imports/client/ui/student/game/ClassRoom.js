import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../../Loading";
import { Button, Card, Image } from "semantic-ui-react";
import { Dropdown, Icon, Menu, Segment, Grid } from "semantic-ui-react";

import StudentTopMenu from "../StudentTopMenu";
import SchoolFloor from "../vektors/SchoolFloor";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default class ClassRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: null,
      trainings: null,
      packages: null,
      currentSubPackageIndex: 0
    };
  }
  render() {
    return (
      <svg
        viewBox="0 0 443.12 227.98666"
        height="227.98666"
        width="443.12"
        xmlSpace="preserve"
        id="svg2"
        version="1.1"
      >
        <defs id="defs6">
          <clipPath id="clipPath56" clipPathUnits="userSpaceOnUse">
            <path
              id="path54"
              d="m 1933.78,838.785 h -680.59 v 334.665 h 680.59 V 838.785 m -676.93,20.797 v -2.672 -15.34 h 672.24 v 15.34 2.672 311.198 h -672.24 v -2.05 h -1.26 v -75.87 c 0.42,0.77 0.83,1.53 1.26,2.29 V 965.563 c -0.43,1.253 -0.84,2.511 -1.26,3.769 v -109.75 h 1.26"
            />
          </clipPath>
          <clipPath id="clipPath1010" clipPathUnits="userSpaceOnUse">
            <path
              id="path1008"
              d="m 2036.93,1039.06 c -29.52,0 -53.47,1.23 -53.47,2.73 0,0.53 3,1.03 8.2,1.46 0.76,-1.02 1.97,-1.68 3.34,-1.68 h 83.21 c 1.39,0 2.62,0.68 3.37,1.73 5.59,-0.44 8.84,-0.95 8.84,-1.51 0,-1.5 -23.95,-2.73 -53.49,-2.73"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1020"
            spreadMethod="pad"
            gradientTransform="matrix(0,5.6106,5.6106,0,2036.94,1038.55)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1012"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#cfc9bd" }}
            />
            <stop
              id="stop1014"
              offset="0.00350765"
              style={{ stopOpacity: 1, stopColor: "#cfc9bd" }}
            />
            <stop
              id="stop1016"
              offset="0.824247"
              style={{ stopOpacity: 1, stopColor: "#928578" }}
            />
            <stop
              id="stop1018"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#928578" }}
            />
          </linearGradient>
          <clipPath id="clipPath1030" clipPathUnits="userSpaceOnUse">
            <path
              id="path1028"
              d="m 2082.33,1045.75 c 0,-2.28 -1.84,-4.13 -4.12,-4.13 H 1995 c -2.28,0 -4.13,1.85 -4.13,4.13 0,2.29 1.85,4.13 4.13,4.13 h 83.21 c 2.28,0 4.12,-1.84 4.12,-4.13"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1044"
            spreadMethod="pad"
            gradientTransform="matrix(0,-17.4115,-17.4115,0,2036.6,1054.92)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1032"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#fbbf60" }}
            />
            <stop
              id="stop1034"
              offset="0.0336259"
              style={{ stopOpacity: 1, stopColor: "#fbbf60" }}
            />
            <stop
              id="stop1036"
              offset="0.457317"
              style={{ stopOpacity: 1, stopColor: "#fbbf60" }}
            />
            <stop
              id="stop1038"
              offset="0.682927"
              style={{ stopOpacity: 1, stopColor: "#d17921" }}
            />
            <stop
              id="stop1040"
              offset="0.97561"
              style={{ stopOpacity: 1, stopColor: "#c7711c" }}
            />
            <stop
              id="stop1042"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#c7711c" }}
            />
          </linearGradient>
          <clipPath id="clipPath1056" clipPathUnits="userSpaceOnUse">
            <path
              id="path1054"
              d="m 2030.6,1049.31 h -12.38 c -4.21,0.14 -8.56,0.19 -12.57,0.19 -2,0 -3.9,-0.02 -5.67,-0.03 v 0.37 h 74.07 v -0.03 c -1.21,-0.05 -2.49,-0.11 -3.87,-0.19 -3.69,-0.08 -7.93,-0.1 -12.27,-0.1 -5.93,0 -12.05,0.05 -17.25,0.1 -5,0.04 -9.16,0.11 -11.5,0.11 -2.34,0 -2.85,-0.07 -0.56,-0.29 0.63,-0.05 1.3,-0.09 2,-0.13 m -37.52,0.05 v 0 l 1.72,0.47 c 0.07,0 0.13,0.01 0.2,0.01 h 0.66 v -0.43 c -0.95,-0.02 -1.81,-0.04 -2.58,-0.05"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1070"
            spreadMethod="pad"
            gradientTransform="matrix(0,-17.4115,-17.4115,0,2036.6,1054.92)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1058"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#f28f2f" }}
            />
            <stop
              id="stop1060"
              offset="0.0336259"
              style={{ stopOpacity: 1, stopColor: "#f28f2f" }}
            />
            <stop
              id="stop1062"
              offset="0.457317"
              style={{ stopOpacity: 1, stopColor: "#f28f2f" }}
            />
            <stop
              id="stop1064"
              offset="0.682927"
              style={{ stopOpacity: 1, stopColor: "#ca5b1e" }}
            />
            <stop
              id="stop1066"
              offset="0.97561"
              style={{ stopOpacity: 1, stopColor: "#be541f" }}
            />
            <stop
              id="stop1068"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#be541f" }}
            />
          </linearGradient>
          <clipPath id="clipPath1082" clipPathUnits="userSpaceOnUse">
            <path
              id="path1080"
              d="m 2080.9,1042.69 h -88.6 c -0.85,0.75 -1.39,1.85 -1.39,3.06 0,0.08 0,0.15 0.01,0.22 v 0.02 c 0.46,-0.01 0.92,-0.01 1.37,-0.02 0.92,-0.51 2.36,-0.71 3.53,-0.78 0.32,-0.91 1.06,-1.51 2,-1.51 0.28,0 0.56,0.07 0.81,0.18 v 0 c 0,0 0.01,0.01 0.01,0.01 0.51,0.24 0.92,0.7 1.15,1.29 h 74.44 c 0.02,-0.06 0.04,-0.11 0.06,-0.17 0.02,-0.04 0.04,-0.07 0.06,-0.11 0.04,-0.09 0.09,-0.17 0.14,-0.25 0.01,-0.02 0.03,-0.05 0.05,-0.07 0.21,-0.31 0.47,-0.55 0.77,-0.7 v 0.03 c 0.27,-0.14 0.57,-0.21 0.9,-0.21 0.86,0 1.62,0.59 1.96,1.46 0.37,-0.03 0.76,-0.07 1.16,-0.07 1.05,0 2.11,0.21 2.65,0.95 l 0.08,0.17 c 0.07,0.01 0.13,0.01 0.2,0.01 0.01,-0.15 0.02,-0.3 0.02,-0.45 0,-1.21 -0.53,-2.31 -1.38,-3.06 m -89.33,4.13 c -0.16,0.01 -0.32,0.01 -0.47,0.02 l 0.06,0.32 c 0.03,0.07 0.05,0.14 0.08,0.21 l 0.33,-0.55"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1096"
            spreadMethod="pad"
            gradientTransform="matrix(0,-17.4115,-17.4115,0,2036.6,1054.92)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1084"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#f5a241" }}
            />
            <stop
              id="stop1086"
              offset="0.0336259"
              style={{ stopOpacity: 1, stopColor: "#f5a241" }}
            />
            <stop
              id="stop1088"
              offset="0.457317"
              style={{ stopOpacity: 1, stopColor: "#f5a241" }}
            />
            <stop
              id="stop1090"
              offset="0.682927"
              style={{ stopOpacity: 1, stopColor: "#cd661d" }}
            />
            <stop
              id="stop1092"
              offset="0.97561"
              style={{ stopOpacity: 1, stopColor: "#c25f1e" }}
            />
            <stop
              id="stop1094"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#c25f1e" }}
            />
          </linearGradient>
          <clipPath id="clipPath1110" clipPathUnits="userSpaceOnUse">
            <path
              id="path1108"
              d="M 2078.21,1041.67 H 1995 c -1.03,0 -1.98,0.38 -2.7,1.02 h 88.6 c -0.72,-0.64 -1.66,-1.02 -2.69,-1.02"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1124"
            spreadMethod="pad"
            gradientTransform="matrix(0,-17.4115,-17.4115,0,2036.6,1054.92)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1112"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#ec7821" }}
            />
            <stop
              id="stop1114"
              offset="0.0336259"
              style={{ stopOpacity: 1, stopColor: "#ec7821" }}
            />
            <stop
              id="stop1116"
              offset="0.457317"
              style={{ stopOpacity: 1, stopColor: "#ec7821" }}
            />
            <stop
              id="stop1118"
              offset="0.682927"
              style={{ stopOpacity: 1, stopColor: "#c64d1f" }}
            />
            <stop
              id="stop1120"
              offset="0.97561"
              style={{ stopOpacity: 1, stopColor: "#b9471f" }}
            />
            <stop
              id="stop1122"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#b9471f" }}
            />
          </linearGradient>
          <clipPath id="clipPath1136" clipPathUnits="userSpaceOnUse">
            <path
              id="path1134"
              d="m 2009.73,1047.13 c -3.21,0 -6.59,0 -9.75,0.04 v 0.51 c 1,-0.04 2.2,-0.06 3.51,-0.07 1.32,-0.02 2.82,-0.03 4.23,-0.03 4.1,0 7.39,0.08 2.76,0.38 -2.28,0.16 -4.55,0.2 -6.51,0.2 -1.59,0 -2.97,-0.02 -3.99,-0.06 v 0.41 c 1.59,0.04 3.28,0.06 5.02,0.06 2.62,0 5.33,-0.05 7.97,-0.2 10.76,-0.57 15.36,-1.24 9.46,-1.24 -0.21,0 -0.42,0 -0.65,0 -0.74,0.01 -1.61,0.01 -2.59,0.01 -1.29,0 -2.76,-0.01 -4.34,-0.01 -1.61,0 -3.34,0 -5.12,0 m -14.07,0.12 c -1.62,0.04 -3.11,0.09 -4.4,0.15 0.12,0.27 0.27,0.53 0.44,0.76 1.06,0.07 2.41,0.14 3.96,0.2 v -1.11"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1150"
            spreadMethod="pad"
            gradientTransform="matrix(0,-17.4115,-17.4115,0,2036.6,1054.92)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1138"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#fbcb6d" }}
            />
            <stop
              id="stop1140"
              offset="0.0336259"
              style={{ stopOpacity: 1, stopColor: "#fbcb6d" }}
            />
            <stop
              id="stop1142"
              offset="0.457317"
              style={{ stopOpacity: 1, stopColor: "#fbcb6d" }}
            />
            <stop
              id="stop1144"
              offset="0.682927"
              style={{ stopOpacity: 1, stopColor: "#dd9530" }}
            />
            <stop
              id="stop1146"
              offset="0.97561"
              style={{ stopOpacity: 1, stopColor: "#d38c2c" }}
            />
            <stop
              id="stop1148"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#d38c2c" }}
            />
          </linearGradient>
          <clipPath id="clipPath1166" clipPathUnits="userSpaceOnUse">
            <path
              id="path1164"
              d="m 2017.81,1045.75 c -4.74,0 -10.61,0.04 -17.85,0.12 0.01,0.11 0.02,0.22 0.02,0.33 v 0.41 c 4.59,-0.08 8.97,-0.11 12.96,-0.11 11.4,0 19.62,0.27 20.55,0.39 1.56,0.2 1.74,0.51 -13.01,1.65 -4.92,0.37 -10.07,0.5 -14.75,0.5 -2.02,0 -3.96,-0.02 -5.75,-0.06 v 0.33 h 18.24 c 2.59,-0.08 5.13,-0.2 7.5,-0.36 8.9,-0.62 18.63,-0.9 29.18,-0.9 6.11,0 12.49,0.09 19.15,0.27 v -0.69 c -4.65,-0.15 -10.36,-0.31 -15.9,-0.37 -1.46,-0.01 -2.82,-0.02 -4.08,-0.02 -3.41,0 -6.13,0.05 -8.32,0.09 -2.19,0.05 -3.85,0.09 -5.16,0.09 -1.24,0 -2.16,-0.04 -2.9,-0.16 -2.08,-0.33 7.17,-1.51 -19.88,-1.51 m -22.14,0.18 c -1.1,0.01 -2.23,0.02 -3.38,0.04 -0.13,0.08 -0.26,0.16 -0.36,0.24 l -0.36,0.61 c 1.37,-0.04 2.74,-0.08 4.09,-0.11 v -0.51 c 0,-0.09 0,-0.18 0.01,-0.27 m -4.75,0.06 v 0 c 0.02,0.29 0.06,0.58 0.14,0.85 0.01,0 0.02,0 0.04,0 l -0.18,-0.85 m 87.45,1.79 v 0.67 c 0.97,0.03 1.9,0.07 2.81,0.1 0.18,-0.2 0.35,-0.41 0.49,-0.64 -0.9,-0.03 -2.02,-0.08 -3.3,-0.13 m -86.17,0.94 c 0.24,0.23 0.51,0.43 0.8,0.59 h 2.66 v -0.45 c -1.32,-0.04 -2.48,-0.09 -3.46,-0.14"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1180"
            spreadMethod="pad"
            gradientTransform="matrix(0,-17.4115,-17.4115,0,2036.6,1054.92)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1168"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#fbcb6d" }}
            />
            <stop
              id="stop1170"
              offset="0.0336259"
              style={{ stopOpacity: 1, stopColor: "#fbcb6d" }}
            />
            <stop
              id="stop1172"
              offset="0.457317"
              style={{ stopOpacity: 1, stopColor: "#fbcb6d" }}
            />
            <stop
              id="stop1174"
              offset="0.682927"
              style={{ stopOpacity: 1, stopColor: "#dd9530" }}
            />
            <stop
              id="stop1176"
              offset="0.97561"
              style={{ stopOpacity: 1, stopColor: "#d38c2c" }}
            />
            <stop
              id="stop1178"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#d38c2c" }}
            />
          </linearGradient>
          <clipPath id="clipPath1192" clipPathUnits="userSpaceOnUse">
            <path
              id="path1190"
              d="m 2018.22,1049.31 h -18.24 v 0.16 c 1.77,0.01 3.67,0.03 5.67,0.03 4.01,0 8.36,-0.05 12.57,-0.19 m -22.56,0 H 1993 c 0.03,0.02 0.05,0.03 0.08,0.05 0.77,0.01 1.63,0.03 2.58,0.05 v -0.1"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1206"
            spreadMethod="pad"
            gradientTransform="matrix(0,-17.4115,-17.4115,0,2036.6,1054.92)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1194"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#f4a43c" }}
            />
            <stop
              id="stop1196"
              offset="0.0336259"
              style={{ stopOpacity: 1, stopColor: "#f4a43c" }}
            />
            <stop
              id="stop1198"
              offset="0.457317"
              style={{ stopOpacity: 1, stopColor: "#f4a43c" }}
            />
            <stop
              id="stop1200"
              offset="0.682927"
              style={{ stopOpacity: 1, stopColor: "#d77920" }}
            />
            <stop
              id="stop1202"
              offset="0.97561"
              style={{ stopOpacity: 1, stopColor: "#d0741f" }}
            />
            <stop
              id="stop1204"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#d0741f" }}
            />
          </linearGradient>
          <clipPath id="clipPath1218" clipPathUnits="userSpaceOnUse">
            <path
              id="path1216"
              d="m 1992.29,1045.97 c -0.45,0.01 -0.91,0.01 -1.37,0.02 l 0.18,0.85 c 0.15,-0.01 0.31,-0.01 0.47,-0.02 l 0.36,-0.61 c 0.1,-0.08 0.23,-0.16 0.36,-0.24"
            />
          </clipPath>
          <linearGradient
            id="linearGradient1232"
            spreadMethod="pad"
            gradientTransform="matrix(0,-17.4115,-17.4115,0,2036.6,1054.92)"
            gradientUnits="userSpaceOnUse"
            y2={0}
            x2={1}
            y1={0}
            x1={0}
          >
            <stop
              id="stop1220"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#f6b44d" }}
            />
            <stop
              id="stop1222"
              offset="0.0336259"
              style={{ stopOpacity: 1, stopColor: "#f6b44d" }}
            />
            <stop
              id="stop1224"
              offset="0.457317"
              style={{ stopOpacity: 1, stopColor: "#f6b44d" }}
            />
            <stop
              id="stop1226"
              offset="0.682927"
              style={{ stopOpacity: 1, stopColor: "#d98427" }}
            />
            <stop
              id="stop1228"
              offset="0.97561"
              style={{ stopOpacity: 1, stopColor: "#d17d24" }}
            />
            <stop
              id="stop1230"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#d17d24" }}
            />
          </linearGradient>
          <clipPath id="clipPath1324" clipPathUnits="userSpaceOnUse">
            <path
              id="path1322"
              d="m 1603.95,1203.71 c -1.04,0 -2.04,0.05 -3.01,0.13 l -0.65,0.05 -1.83,0.18 -1.82,0.3 -1.8,0.39 -1.78,0.47 -1.76,0.56 -1.72,0.65 -0.19,0.26 c -1.13,0.49 -2.08,0.96 -2.83,1.36 l -1.69,0.96 -0.58,0.33 -0.57,0.37 -1.61,1.07 c -1.4,0.98 -3.4,2.5 -5.58,4.83 -2.17,2.32 -4.62,5.38 -6.56,9.39 -1.96,4.01 -3.5,8.92 -3.77,14.44 -0.13,2.75 0.05,5.63 0.58,8.57 0.53,2.93 1.52,5.87 2.85,8.73 2.67,5.76 7.08,11.04 12.79,14.88 5.69,3.82 12.64,6.2 19.83,6.44 0.5,0.02 1.01,0.04 1.52,0.04 6.69,0 13.47,-1.85 19.32,-5.34 1.55,-0.96 3.07,-2.01 4.49,-3.16 1.41,-1.17 2.76,-2.41 3.99,-3.78 2.45,-2.72 4.49,-5.78 6.05,-9.06 3.1,-6.56 4.16,-13.91 3.27,-20.77 -0.41,-3.45 -1.38,-6.75 -2.68,-9.81 l -1.06,-2.25 -0.57,-1.09 -0.61,-1.06 -1.29,-2.04 -1.43,-1.94 c -1.97,-2.48 -4.15,-4.69 -6.53,-6.49 -2.38,-1.81 -4.88,-3.27 -7.39,-4.41 -5.05,-2.25 -10.12,-3.11 -14.57,-3.19 -0.27,-0.01 -0.54,-0.01 -0.81,-0.01 m -1.05,9.02 -1.38,-1.37 1.38,-1.4 1.39,1.4 -1.39,1.37 m 15.93,2.18 -0.64,-0.16 -0.58,-1.86 1.22,-0.75 0.64,0.16 0.58,1.87 -1.22,0.74 m -30.75,0.94 -1.19,-0.68 0.48,-1.89 0.7,-0.2 1.19,0.67 -0.47,1.89 -0.71,0.21 m 43.19,10.76 -1.19,-0.67 0.47,-1.9 0.72,-0.2 1.18,0.67 -0.48,1.9 -0.7,0.2 m -54.89,1.67 -0.64,-0.16 -0.59,-1.85 1.23,-0.75 0.63,0.16 0.59,1.86 -1.22,0.74 m 26.5,43.76 -1.39,-1.38 v -23.67 c -0.95,-0.48 -1.61,-1.48 -1.64,-2.66 -0.02,-1.66 1.25,-3.01 2.85,-3.05 l 21.5,-0.38 c 0.01,0 0.03,0 0.04,0 1.58,0 2.88,1.31 2.91,2.96 0.03,1.65 -1.25,3.02 -2.84,3.05 l -20.05,0.35 v 23.4 l -1.38,1.38 m 31.49,-27.83 -1.38,-1.39 1.38,-1.38 1.38,1.38 -1.38,1.39 m -62.94,0 -1.38,-1.39 1.38,-1.38 1.39,1.38 -1.39,1.39 m 60.77,13.15 -0.64,-0.16 -0.59,-1.86 1.23,-0.74 0.64,0.15 0.59,1.86 -1.23,0.75 m -54.89,1.66 -1.18,-0.65 0.46,-1.91 0.72,-0.19 1.19,0.67 -0.47,1.89 -0.72,0.19 m 43.19,10.78 -1.19,-0.67 0.48,-1.9 0.71,-0.2 1.18,0.67 -0.47,1.9 -0.71,0.2 m -30.76,0.93 -0.63,-0.15 -0.59,-1.87 1.23,-0.74 0.63,0.15 0.59,1.87 -1.23,0.74 m 13.16,4.95 -1.38,-1.39 1.38,-1.38 1.39,1.38 -1.39,1.39 m 15.93,-62.91 -0.67,0.41 -0.06,0.58 0.37,0.44 0.36,0.08 0.67,-0.4 0.05,-0.58 -0.37,-0.44 -0.35,-0.09 m -30.76,0.94 -0.38,0.11 -0.35,0.46 0.09,0.58 0.65,0.36 0.38,-0.11 0.26,-1.04 -0.65,-0.36 m 43.2,10.77 -0.4,0.1 -0.25,1.04 0.65,0.36 0.39,-0.11 0.34,-0.46 -0.09,-0.57 -0.64,-0.36 m -54.89,1.66 -0.67,0.41 0.31,1.02 0.36,0.08 0.66,-0.4 -0.31,-1.02 -0.35,-0.09 m 55.82,29.09 -0.67,0.4 0.32,1.02 0.35,0.08 0.67,-0.4 -0.32,-1.02 -0.35,-0.08 m -54.89,1.66 -0.39,0.11 -0.34,0.46 0.08,0.58 0.65,0.37 0.39,-0.11 0.26,-1.04 -0.65,-0.37 m 43.19,10.76 -0.39,0.12 -0.26,1.03 0.65,0.37 0.39,-0.11 0.34,-0.46 -0.08,-0.58 -0.65,-0.37 m -30.75,0.94 -0.67,0.41 -0.05,0.58 0.37,0.45 0.34,0.08 0.68,-0.41 -0.32,-1.02 -0.35,-0.09"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1330"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1326"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#6d6556" }}
            />
            <stop
              id="stop1328"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1340" clipPathUnits="userSpaceOnUse">
            <path
              id="path1338"
              d="m 1624.24,1240.9 c -0.01,0 -0.03,0 -0.04,0 l -21.5,0.38 c -1.6,0.04 -2.87,1.39 -2.85,3.05 0.03,1.18 0.69,2.18 1.64,2.66 v 23.67 l 1.39,1.38 1.38,-1.38 v -23.4 l 20.05,-0.35 c 1.59,-0.03 2.87,-1.4 2.84,-3.05 -0.03,-1.65 -1.33,-2.96 -2.91,-2.96"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1346"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1342"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1344"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1356" clipPathUnits="userSpaceOnUse">
            <path
              id="path1354"
              d="m 1618.83,1212.14 -1.22,0.75 0.58,1.86 0.64,0.16 1.22,-0.74 -0.58,-1.87 -0.64,-0.16 m 0,2.14 -0.36,-0.08 -0.37,-0.44 0.06,-0.58 0.67,-0.41 0.35,0.09 0.37,0.44 -0.05,0.58 -0.67,0.4"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1362"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1358"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1360"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1372" clipPathUnits="userSpaceOnUse">
            <path
              id="path1370"
              d="m 1589.75,1267.97 -1.23,0.74 0.59,1.87 0.63,0.15 1.23,-0.74 -0.59,-1.87 -0.63,-0.15 m -0.01,2.14 -0.34,-0.08 -0.37,-0.45 0.05,-0.58 0.67,-0.41 0.35,0.09 0.32,1.02 -0.68,0.41"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1378"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1374"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1376"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1388" clipPathUnits="userSpaceOnUse">
            <path
              id="path1386"
              d="m 1576.38,1225.52 -1.23,0.75 0.59,1.85 0.64,0.16 1.22,-0.74 -0.59,-1.86 -0.63,-0.16 m 0,2.13 -0.36,-0.08 -0.31,-1.02 0.67,-0.41 0.35,0.09 0.31,1.02 -0.66,0.4"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1394"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1390"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1392"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1404" clipPathUnits="userSpaceOnUse">
            <path
              id="path1402"
              d="m 1632.2,1254.6 -1.23,0.74 0.59,1.86 0.64,0.16 1.23,-0.75 -0.59,-1.86 -0.64,-0.15 m 0,2.13 -0.35,-0.08 -0.32,-1.02 0.67,-0.4 0.35,0.08 0.32,1.02 -0.67,0.4"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1410"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1406"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1408"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1420" clipPathUnits="userSpaceOnUse">
            <path
              id="path1418"
              d="m 1588.07,1213.08 -0.7,0.2 -0.48,1.89 1.19,0.68 0.71,-0.21 0.47,-1.89 -1.19,-0.67 m 0.01,2.14 -0.65,-0.36 -0.09,-0.58 0.35,-0.46 0.38,-0.11 0.65,0.36 -0.26,1.04 -0.38,0.11"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1426"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1422"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1424"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1436" clipPathUnits="userSpaceOnUse">
            <path
              id="path1434"
              d="m 1620.5,1267.03 -0.71,0.2 -0.48,1.9 1.19,0.67 0.71,-0.2 0.47,-1.9 -1.18,-0.67 m 0,2.14 -0.65,-0.37 0.26,-1.03 0.39,-0.12 0.65,0.37 0.08,0.58 -0.34,0.46 -0.39,0.11"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1442"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1438"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1440"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1452" clipPathUnits="userSpaceOnUse">
            <path
              id="path1450"
              d="m 1577.31,1256.27 -0.72,0.19 -0.46,1.91 1.18,0.65 0.72,-0.19 0.47,-1.89 -1.19,-0.67 m 0,2.14 -0.65,-0.37 -0.08,-0.58 0.34,-0.46 0.39,-0.11 0.65,0.37 -0.26,1.04 -0.39,0.11"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1458"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1454"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1456"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1468" clipPathUnits="userSpaceOnUse">
            <path
              id="path1466"
              d="m 1631.27,1223.84 -0.72,0.2 -0.47,1.9 1.19,0.67 0.7,-0.2 0.48,-1.9 -1.18,-0.67 m 0,2.14 -0.65,-0.36 0.25,-1.04 0.4,-0.1 0.64,0.36 0.09,0.57 -0.34,0.46 -0.39,0.11"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1474"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1470"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1472"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1484" clipPathUnits="userSpaceOnUse">
            <path
              id="path1482"
              d="m 1634.37,1241.44 -1.38,1.38 1.38,1.39 1.38,-1.39 -1.38,-1.38"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1490"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1486"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1488"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1500" clipPathUnits="userSpaceOnUse">
            <path
              id="path1498"
              d="m 1571.43,1241.44 -1.38,1.38 1.38,1.39 1.39,-1.39 -1.39,-1.38"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1506"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1502"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1504"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1516" clipPathUnits="userSpaceOnUse">
            <path
              id="path1514"
              d="m 1602.9,1209.96 -1.38,1.4 1.38,1.37 1.39,-1.37 -1.39,-1.4"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1522"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1518"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1520"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath1532" clipPathUnits="userSpaceOnUse">
            <path
              id="path1530"
              d="m 1602.9,1272.91 -1.38,1.38 1.38,1.39 1.39,-1.39 -1.39,-1.38"
            />
          </clipPath>
          <radialGradient
            id="radialGradient1538"
            spreadMethod="pad"
            gradientTransform="matrix(45.9486,0,0,-45.9486,1603.43,1243.75)"
            gradientUnits="userSpaceOnUse"
            r={1}
            cy={0}
            cx={0}
            fy={0}
            fx={0}
          >
            <stop
              id="stop1534"
              offset={0}
              style={{ stopOpacity: 1, stopColor: "#141311" }}
            />
            <stop
              id="stop1536"
              offset={1}
              style={{ stopOpacity: 1, stopColor: "#100f0d" }}
            />
          </radialGradient>
          <clipPath id="clipPath3604" clipPathUnits="userSpaceOnUse">
            <path
              style={{ clipRule: "evenodd" }}
              id="path3602"
              d="m 2186.55,1044.67 v 62.1 h 15.93 v 6.03 h 15.93 7.92 v 1.98 h 6.93 v -5.22 h 9.99 v 3.24 h 6.84 v 3.6 h 6.93 v -3.6 h 6.93 v 3.6 h 9 v -9.63 h 15.75 v 6.03 h 15.93 8.01 v 1.98 h 6.84 v -69.66 c -3.42,-6.48 -6.84,0 -6.84,0 v -0.09 c -3.96,-6.3 -8.01,0 -8.01,0 -7.83,-6.3 -15.93,0 -15.93,0 v -0.36 c -2.61,-1.89 -5.22,-2.52 -7.65,-2.52 -4.68,0 -8.28,2.52 -8.28,2.52 v 0.18 c -4.32,-6.12 -8.82,0.27 -8.82,0.27 v -0.09 c -3.42,-6.3 -6.93,0 -6.93,0 v 0.09 c -3.42,-6.57 -6.93,0 -6.93,0 v -0.09 c -3.33,-6.3 -6.84,0 -6.84,0 v -0.18 c -4.95,-5.94 -9.99,0 -9.99,0 v 0.27 c -3.42,-6.48 -6.93,0 -6.93,0 v -0.09 c -3.87,-6.3 -7.92,0 -7.92,0 -7.83,-6.3 -15.93,0 -15.93,0 v -0.36 c -2.61,-1.92 -5.25,-2.56 -7.61,-2.56 -4.72,0 -8.32,2.56 -8.32,2.56 m -86.85,0 v 62.1 h 16.02 v 6.03 h 15.93 7.92 v 1.98 h 6.84 v -69.66 c -3.33,-6.48 -6.84,0 -6.84,0 v -0.09 c -3.96,-6.3 -7.92,0 -7.92,0 -7.92,-6.3 -15.93,0 -15.93,0 v -0.36 c -2.61,-1.89 -5.31,-2.52 -7.65,-2.52 -4.77,0 -8.37,2.52 -8.37,2.52 m -24.39,-0.81 c -0.27,0.18 -0.54,0.36 -0.81,0.72 0,0 0,0 0,0.09 -0.09,0 -0.09,0.09 -0.18,0.18 0,0.09 0,0.09 0,0.18 -0.09,0 -0.09,0.09 -0.09,0.18 -0.09,0.18 -0.18,0.45 -0.18,0.72 0,0 0,0 0,0.09 0,0 0,0 0,0.09 -12.78,-0.18 -27.36,0.09 -30.06,0.36 -3.6,0.36 2.79,0.09 15.12,0.09 4.77,0 10.17,0.09 14.94,0.18 v 2.16 c -2.79,-0.09 -5.85,-0.18 -9.27,-0.18 -11.7,0 -27.36,0.09 -36.18,0.72 -4.59,0.45 2.07,0.27 12.06,0.18 9,-0.09 20.79,-0.18 29.52,0 1.35,0.09 2.7,0.18 3.87,0.18 v 4.5 h -19.89 c -0.27,-1.17 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.54 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.54 c -0.27,-1.17 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.54 v -8.1 c 0,-1.08 -0.54,-1.98 -1.35,-2.34 -0.27,-0.09 -0.54,-0.18 -0.81,-0.18 -1.26,0 -2.16,1.08 -2.16,2.52 v 21.15 c 0,3.78 0,6.84 0,9.36 v 52.92 c 0,0.81 0.27,1.53 0.81,1.98 0,0.09 0,0.09 0,0.09 l 0.27,0.09 c 0.27,0.27 0.63,0.36 1.08,0.36 0.99,0 1.89,-0.81 2.07,-1.98 h 48.51 c 2.52,0.18 4.68,0.27 7.56,0.09 0,0 -1.53,0 -3.42,-0.09 h 6.21 c -0.81,0.09 -1.35,0.09 -1.35,0.09 0.9,0 1.8,-0.09 2.7,-0.09 h 13.95 c 0.27,1.17 1.08,1.98 2.16,1.98 0.36,0 0.72,-0.09 0.99,-0.27 l 0.27,-0.18 c 0.54,-0.45 0.9,-1.17 0.9,-2.07 v -79.65 l 1.44,-0.45 0.54,-0.27 c -0.63,0 -1.26,-0.09 -1.98,-0.09 v -2.43 c 1.44,0.09 2.7,0.09 3.87,0.09 l 0.09,-0.63 c -1.26,0 -2.61,-0.09 -3.96,-0.09 0,-1.35 -0.99,-2.43 -2.16,-2.43 -0.36,0 -0.63,0.09 -0.9,0.18 m -21.15,11.61 h 19.89 v 5.85 h -0.36 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -19.98 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.9 -2.43,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.25,0.9 -2.43,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.25,0.9 -2.43,1.98 h -0.54 c -0.18,-1.08 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.9 -2.43,1.98 h -0.54 v -5.85 h 0.54 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 1.26,0 2.25,-0.9 2.43,-1.98 h 0.54 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 0.45 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 0.45 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.54 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.43,-1.98 m 18.81,8.37 c 0,-0.09 0,-0.09 0,-0.09 l 0.09,-0.09 0.09,-0.09 0.09,-0.09 c 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.36 v 7.02 h -0.36 c -0.27,-1.08 -1.26,-1.89 -2.43,-1.89 -1.26,0 -2.25,0.81 -2.52,1.89 h -0.45 c -0.27,-1.08 -1.26,-1.89 -2.43,-1.89 -1.26,0 -2.25,0.81 -2.52,1.89 h -19.98 c -0.18,-1.17 -1.26,-2.07 -2.43,-2.07 -1.26,0 -2.34,0.9 -2.52,2.07 h -0.45 c -0.18,-1.17 -1.26,-2.07 -2.52,-2.07 -1.17,0 -2.25,0.9 -2.43,2.07 h -0.45 c -0.18,-1.17 -1.26,-2.07 -2.52,-2.07 -1.26,0 -2.25,0.9 -2.52,2.07 h -0.36 c -0.18,-1.17 -1.26,-2.07 -2.52,-2.07 -1.26,0 -2.25,0.9 -2.52,2.07 h -0.36 c -0.27,-1.17 -1.26,-2.07 -2.52,-2.07 -1.26,0 -2.34,0.9 -2.52,2.07 h -0.45 c -0.18,-1.17 -1.26,-2.07 -2.43,-2.07 -1.26,0 -2.34,0.9 -2.52,2.07 h -0.45 c -0.18,-1.17 -1.26,-2.07 -2.43,-2.07 -1.26,0 -2.34,0.9 -2.52,2.07 h -0.45 c -0.18,-1.17 -1.26,-2.07 -2.52,-2.07 -1.17,0 -2.25,0.9 -2.43,2.07 h -0.54 v -7.02 h 0.54 c 0.27,1.17 1.26,1.98 2.43,1.98 1.26,0 2.25,-0.81 2.52,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 1.17,0 2.16,-0.81 2.43,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.63,0 1.26,-0.27 1.71,-0.63 0,-0.09 0,-0.09 0,-0.09 l 0.09,-0.09 0.09,-0.09 0.09,-0.09 c 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.81,0 1.53,-0.36 1.98,-0.99 l 0.09,-0.09 c 0.09,-0.09 0.09,-0.18 0.18,-0.27 0.09,-0.18 0.18,-0.45 0.18,-0.63 h 0.54 c 0.27,1.17 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.81 2.52,-1.98 h 0.45 c 0.27,1.17 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.81 2.52,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.43,1.98 1.26,0 2.25,-0.81 2.52,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 1.17,0 2.16,-0.81 2.43,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 1.17,0 2.16,-0.81 2.43,-1.98 h 19.98 c 0.27,1.17 1.26,1.98 2.52,1.98 0.63,0 1.26,-0.27 1.71,-0.63 m -0.45,8.46 h 0.09 c 0.36,-0.18 0.54,-0.45 0.72,-0.81 0.18,-0.18 0.27,-0.45 0.36,-0.72 h 0.36 v 5.76 h -0.36 c -0.36,-1.08 -1.35,-1.89 -2.43,-1.89 -1.17,0 -2.16,0.81 -2.52,1.89 h -0.45 c -0.36,-1.08 -1.35,-1.89 -2.43,-1.89 -1.17,0 -2.16,0.81 -2.52,1.89 h -0.45 c -0.36,-1.08 -1.35,-1.89 -2.43,-1.89 -1.17,0 -2.16,0.81 -2.52,1.89 h -19.98 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.54 c -0.27,-1.17 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.54 v -5.76 h 0.54 c 0.36,1.08 1.35,1.8 2.43,1.8 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.54,-0.36 0.9,-0.81 1.17,-1.44 h 0.45 c 0.36,1.08 1.35,1.8 2.52,1.8 0.45,0 0.9,-0.09 1.26,-0.36 0.54,-0.36 0.9,-0.81 1.17,-1.44 h 0.45 c 0.36,1.08 1.35,1.8 2.52,1.8 0.45,0 0.9,-0.09 1.26,-0.36 0.18,-0.09 0.27,-0.18 0.45,-0.27 0,-0.09 0,-0.09 0,-0.09 l 0.09,-0.09 0.09,-0.09 0.09,-0.09 c 0.18,-0.27 0.36,-0.54 0.45,-0.81 h 0.45 c 0.36,1.08 1.35,1.8 2.52,1.8 0.81,0 1.53,-0.36 1.98,-0.99 l 0.09,-0.09 c 0.09,-0.09 0.09,-0.18 0.18,-0.27 0,-0.18 0.09,-0.27 0.18,-0.45 h 0.54 c 0.36,1.08 1.26,1.8 2.43,1.8 1.17,0 2.16,-0.72 2.52,-1.8 h 0.45 c 0.36,1.08 1.26,1.8 2.43,1.8 1.17,0 2.16,-0.72 2.52,-1.8 h 0.45 c 0.36,1.08 1.35,1.8 2.43,1.8 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.54,-0.36 0.9,-0.81 1.17,-1.44 h 0.45 c 0.36,1.08 1.35,1.8 2.52,1.8 0.45,0 0.9,-0.09 1.26,-0.36 0.54,-0.36 0.9,-0.81 1.17,-1.44 h 19.98 c 0.27,1.08 1.26,1.89 2.52,1.89 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.27,-0.18 0.45,-0.36 0.63,-0.63 0.18,-0.27 0.36,-0.54 0.45,-0.9 h 0.45 c 0.27,1.08 1.26,1.89 2.52,1.89 0.45,0 0.9,-0.09 1.26,-0.36 m 0,7.11 h 0.09 c 0.36,-0.18 0.54,-0.45 0.72,-0.81 0.18,-0.27 0.36,-0.54 0.45,-0.9 h 0.27 v 5.67 h -0.36 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -19.98 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.54 c -0.27,-1.17 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.54 v -5.67 h 0.54 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.18,-0.18 0.27,-0.18 0.27,-0.18 0.36,-0.36 0.54,-0.54 0.18,-0.27 0.27,-0.54 0.36,-0.9 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.18,-0.09 0.27,-0.18 0.27,-0.18 0.45,-0.45 0.63,-0.72 0.09,-0.18 0.27,-0.45 0.27,-0.72 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.63,0 1.26,-0.27 1.62,-0.63 0.36,-0.18 0.54,-0.54 0.72,-0.9 0,-0.18 0.09,-0.27 0.09,-0.45 h 0.54 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 0.45 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 0.45 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 19.89 c 0.27,1.17 1.35,2.07 2.61,2.07 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.27,-0.18 0.45,-0.36 0.63,-0.63 0.27,-0.27 0.45,-0.63 0.54,-1.08 h 0.27 c 0.27,1.17 1.35,2.07 2.61,2.07 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.27,-0.18 0.45,-0.36 0.63,-0.63 0.27,-0.27 0.45,-0.63 0.54,-1.08 h 0.27 c 0.27,1.17 1.35,2.07 2.61,2.07 0.45,0 0.9,-0.09 1.26,-0.36 m 0,6.75 c 0.09,-0.09 0.18,-0.18 0.36,-0.18 0.18,-0.18 0.36,-0.36 0.45,-0.54 0.18,-0.27 0.27,-0.63 0.36,-0.9 h 0.36 v 5.85 h -0.36 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -19.98 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.54 c -0.27,-1.17 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.54 v -5.85 h 0.54 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.27,-0.18 0.36,-0.27 0.09,-0.09 0.27,-0.18 0.36,-0.36 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.18,-0.18 0.36,-0.18 0.18,-0.18 0.36,-0.36 0.45,-0.54 0.18,-0.27 0.27,-0.63 0.36,-0.9 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.63,0 1.26,-0.27 1.71,-0.63 0.27,-0.18 0.45,-0.45 0.54,-0.81 0.09,-0.18 0.18,-0.36 0.18,-0.54 h 0.54 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 0.45 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 19.98 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.27,-0.18 0.36,-0.27 0.09,-0.09 0.27,-0.18 0.36,-0.36 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.27,-0.18 0.36,-0.27 0.09,-0.09 0.27,-0.18 0.36,-0.36 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 m 0,7.02 c 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.36 v 6.66 h -0.36 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.54 c -0.27,-1.17 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -19.98 c -0.27,-1.17 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.54 v -6.66 h 0.54 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 1.26,0 2.25,-0.9 2.43,-1.98 h 0.54 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 19.98 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 0.45 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 m 0,7.83 c 0.09,-0.09 0.18,-0.18 0.36,-0.18 0.18,-0.18 0.36,-0.36 0.45,-0.54 0.18,-0.27 0.27,-0.63 0.36,-0.9 h 0.36 v 5.85 h -0.36 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.9 -2.43,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.25,0.9 -2.43,1.98 h -0.54 c -0.18,-1.08 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -19.98 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.9 -2.43,1.98 h -0.54 v -5.85 h 0.54 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.27,-0.18 0.36,-0.27 0.09,-0.09 0.27,-0.18 0.36,-0.36 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.18,-0.18 0.36,-0.18 0.18,-0.18 0.36,-0.36 0.45,-0.54 0.18,-0.27 0.27,-0.63 0.36,-0.9 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.63,0 1.26,-0.27 1.71,-0.63 0.27,-0.18 0.45,-0.45 0.54,-0.81 0.09,-0.18 0.18,-0.36 0.18,-0.54 h 19.98 c 0.27,1.08 1.26,1.98 2.52,1.98 0.63,0 1.26,-0.27 1.71,-0.63 0.27,-0.18 0.45,-0.45 0.54,-0.81 0.09,-0.18 0.18,-0.36 0.18,-0.54 h 0.54 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 0.45 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.27,-0.18 0.36,-0.27 0.09,-0.09 0.27,-0.18 0.36,-0.36 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.09,-0.09 0.27,-0.18 0.36,-0.27 0.09,-0.09 0.27,-0.18 0.36,-0.36 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 m 0,7.02 c 0.18,-0.09 0.27,-0.18 0.45,-0.27 0,-0.09 0,-0.09 0,-0.09 l 0.09,-0.09 0.09,-0.09 0.09,-0.09 c 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.36 v 6.66 h -0.36 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.16,0.81 -2.43,1.98 h -0.54 c -0.27,-1.17 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -19.98 c -0.27,-1.17 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.81 -2.52,1.98 h -0.45 c -0.27,-1.17 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.81 -2.43,1.98 h -0.54 v -6.66 h 0.54 c 0.27,1.17 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.54,-0.36 0.99,-0.9 1.17,-1.62 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.54,-0.36 0.99,-0.9 1.17,-1.62 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.18,-0.09 0.27,-0.18 0.45,-0.27 0,-0.09 0,-0.09 0,-0.09 l 0.09,-0.09 0.09,-0.09 0.09,-0.09 c 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 19.98 c 0.27,1.17 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.18,-0.09 0.27,-0.18 0.45,-0.27 0,-0.09 0,-0.09 0,-0.09 l 0.09,-0.09 0.09,-0.09 0.09,-0.09 c 0.18,-0.27 0.36,-0.63 0.45,-0.99 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.81,0 1.53,-0.36 1.98,-0.99 l 0.09,-0.09 c 0.09,-0.09 0.09,-0.18 0.18,-0.27 0.09,-0.18 0.18,-0.45 0.18,-0.63 h 0.54 c 0.27,1.17 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.81 2.52,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.54,-0.36 0.99,-0.9 1.17,-1.62 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.54,-0.36 0.99,-0.9 1.17,-1.62 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.54,-0.36 0.99,-0.9 1.17,-1.62 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 m 0,7.83 c 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.36 v 5.85 h -0.36 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.9 -2.43,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.26,0 -2.25,0.9 -2.43,1.98 h -0.54 c -0.18,-1.08 -1.17,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -0.45 c -0.27,-1.08 -1.26,-1.98 -2.43,-1.98 -1.26,0 -2.25,0.9 -2.52,1.98 h -19.98 c -0.27,-1.08 -1.26,-1.98 -2.52,-1.98 -1.17,0 -2.16,0.9 -2.43,1.98 h -0.54 v -5.85 h 0.54 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 19.98 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 1.26,0 2.25,-0.9 2.43,-1.98 h 0.54 c 0.18,1.08 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.9 2.52,-1.98 h 0.45 c 0.27,1.08 1.26,1.98 2.43,1.98 0.45,0 0.9,-0.09 1.26,-0.36 h 0.09 c 0.63,-0.36 1.08,-0.99 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 0.63,-0.36 1.08,-0.9 1.17,-1.62 h 0.45 c 0.27,1.08 1.26,1.98 2.52,1.98 0.45,0 0.9,-0.09 1.26,-0.36 m 0.45,6.75 c 0,-0.09 0,-0.09 0,-0.09 l 0.09,-0.09 0.09,-0.09 c 0.27,-0.27 0.45,-0.72 0.54,-1.08 h 0.36 v 3.42 h -23.58 c -1.8,0 -3.51,0 -5.13,0 h -45.36 v -3.42 h 0.54 c 0.27,1.17 1.26,1.98 2.43,1.98 1.26,0 2.25,-0.81 2.52,-1.98 h 19.98 c 0.27,1.17 1.26,1.98 2.52,1.98 1.17,0 2.16,-0.81 2.43,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 1.17,0 2.16,-0.81 2.43,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.63,0 1.26,-0.27 1.71,-0.63 0,-0.09 0,-0.09 0,-0.09 l 0.09,-0.09 0.09,-0.09 c 0.27,-0.27 0.45,-0.72 0.54,-1.08 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.81,0 1.53,-0.36 1.98,-0.99 l 0.09,-0.09 c 0.18,-0.27 0.27,-0.54 0.36,-0.9 h 0.54 c 0.27,1.17 1.17,1.98 2.43,1.98 1.26,0 2.25,-0.81 2.52,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.43,1.98 1.26,0 2.25,-0.81 2.52,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 1.17,0 2.16,-0.81 2.43,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 1.17,0 2.16,-0.81 2.43,-1.98 h 0.45 c 0.27,1.17 1.26,1.98 2.52,1.98 0.63,0 1.26,-0.27 1.71,-0.63 m -22.68,-76.95 c -3.15,0 -7.02,0 -9.27,0.36 -3.78,0.45 -1.44,1.17 0.9,0.99 0,0 -2.88,-0.09 -0.54,-0.72 2.34,-0.54 14.94,-0.54 13.68,-0.63 -0.81,0 -2.61,0 -4.77,0 m 3.87,8.64 h 19.89 -19.89 m -5.4,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m 73.71,7.02 h 0.36 -0.36 m -24.93,0 h 19.98 -19.98 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m 73.71,15.21 h 0.36 -0.36 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -24.93,0 h 19.98 -19.98 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m 73.71,6.84 h 0.36 -0.36 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -24.93,0 h 19.98 -19.98 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m 73.71,7.02 h 0.36 -0.36 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -24.93,0 h 19.98 -19.98 m -5.49,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m 73.71,7.83 h 0.36 -0.36 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m -24.93,0 h 19.98 -19.98 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m 73.71,7.02 h 0.36 -0.36 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -24.93,0 h 19.98 -19.98 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m 73.71,7.83 h 0.36 -0.36 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -24.93,0 h 19.98 -19.98 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m 73.71,7.02 h 0.36 -0.36 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.49,0 h 0.54 -0.54 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -5.4,0 h 0.45 -0.45 m -24.93,0 h 19.98 -19.98 m -5.49,0 h 0.54 -0.54"
            />
          </clipPath>
        </defs>
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,227.98667)" id="g10">
          <g transform="scale(0.1)" id="g12">
            <path
              id="path14"
              style={{
                fill: "#cfc9be",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 977.66,730.797 h 1368.05 v 563.391 H 977.66 Z"
            />
            <path
              id="path16"
              style={{
                fill: "#9f948c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 977.66,730.801 h 1368.05 v 174.23 H 977.66 Z"
            />
            <path
              id="path18"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 977.66,730.801 h 1368.05 v 20.2734 H 977.66 Z"
            />
            <path
              id="path20"
              style={{
                fill: "#3c3c3d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 3323.36,1709.86 2345.71,1294.19 H 977.66 L 0,1709.86 h 3323.36"
            />
            <path
              id="path22"
              style={{
                fill: "#faf7f3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 3221.52,1709.64 2303.79,1319.45 H 1019.58 L 101.844,1709.64 H 3221.52"
            />
            <path
              id="path24"
              style={{
                fill: "#4e4848",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2345.71,730.797 3323.36,0 H 0 l 977.66,730.797 h 1368.05"
            />
            <path
              id="path26"
              style={{
                fill: "#615959",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2280.87,723.191 3165.84,34.6406 H 157.523 L 1042.5,723.191 h 1238.37"
            />
            <path
              id="path28"
              style={{
                fill: "#4e4848",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2203.7,709.359 2978.36,77.5508 H 344.996 L 1119.68,709.359 H 2203.7"
            />
            <path
              id="path30"
              style={{
                fill: "#e4e0d8",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2345.71,1294.19 V 730.797 L 3323.36,0 v 1709.86 l -977.65,-415.67"
            />
            <path
              id="path32"
              style={{
                fill: "#e4e0d8",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 977.66,1294.19 V 730.797 L 0,0 v 1709.86 l 977.66,-415.67"
            />
            <path
              id="path34"
              style={{
                fill: "#b0a69c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 977.66,906.375 V 730.797 L 0,0 v 660.07 l 977.66,246.305"
            />
            <path
              id="path36"
              style={{
                fill: "#b0a69c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2345.71,906.375 V 730.797 L 3323.38,0 v 660.07 l -977.67,246.305"
            />
            <path
              id="path38"
              style={{
                fill: "#2e2d2d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2345.71,751.074 V 730.797 L 3323.38,0 V 63.4219 L 2345.71,751.074"
            />
            <path
              id="path40"
              style={{
                fill: "#424143",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2345.71,751.074 v 3.711 L 3323.38,72.3203 V 63.4219 L 2345.71,751.074"
            />
            <path
              id="path42"
              style={{
                fill: "#2e2d2d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 977.66,751.074 V 730.797 L 0,0 V 63.4219 L 977.66,751.074"
            />
            <path
              id="path44"
              style={{
                fill: "#424143",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 977.66,751.074 v 3.711 L 0,72.3203 V 63.4219 L 977.66,751.074"
            />
            <path
              id="path46"
              style={{
                fill: "#151d32",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1245.97,830.598 h 693.992 v 349.184 H 1245.97 Z"
            />
            <path
              id="path48"
              style={{
                fill: "#66696e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1250.51,836.016 h 686.469 v 341.59 H 1250.51 Z"
            />
            <g id="g50">
              <g clipPath="url(#clipPath56)" id="g52">
                <path
                  id="path58"
                  style={{
                    fill: "#323335",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1253.19,838.785 h 680.59 v 334.668 h -680.59 z"
                />
              </g>
            </g>
            <path
              id="path60"
              style={{
                fill: "#151d32",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1929.09,856.91 v 313.87 H 1256.85 V 841.57 h 672.24 v 15.34"
            />
            <path
              id="path62"
              style={{
                fill: "#2d2b2d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1261.23,846.684 h 664.969 v 10.2266 H 1261.23 Z"
            />
            <path
              id="path64"
              style={{
                fill: "#1f1d1d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1261.23,846.684 h 664.969 v 5.60938 H 1261.23 Z"
            />
            <path
              id="path66"
              style={{
                fill: "#eff1f0",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1256.85,859.582 h 669.348 v 309.145 H 1256.85 Z"
            />
            <path
              id="path68"
              style={{
                fill: "#d3d6d4",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1926.2,859.582 h -0.07 v 107.543 c -0.31,-5.547 -2.82,-13.055 -3.15,-13.055 -0.04,0 -0.05,0.098 -0.02,0.305 l -0.63,-1.68 c -4.9,-12.136 -13.81,-22.16 -23.79,-31.57 -20.82,-19.641 -46.28,-36 -74.42,-46.965 -16.27,-6.328 -33.39,-10.906 -50.79,-14.578 h -424.41 c -9.82,4.652 -19.24,9.941 -28.21,15.844 -24.08,15.773 -40.1,35.387 -51.33,58.73 -4.87,10.153 -8.85,20.532 -12.39,31.004 v 130.23 c 9.87,17.65 23.2,33.82 40.4,47.22 14.36,11.15 31.15,20.15 49.49,26.12 h -89.89 669.21 V 859.582 m -333.25,291.538 c -164.53,0 -297.92,-61.12 -297.92,-136.52 0,-75.412 133.39,-136.534 297.92,-136.534 164.54,0 297.91,61.122 297.91,136.534 0,75.4 -133.37,136.52 -297.91,136.52 m 238.94,17.61 c 9.8,-3.62 19.23,-7.91 28.02,-12.98 23.5,-13.5 40.94,-32.48 52.25,-54.8 5.91,-11.66 10.5,-23.81 13.97,-36.25 v 104.03 h -94.24"
            />
            <path
              id="path70"
              style={{
                fill: "#2d2d2f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1255.59,1092.86 v 75.87 h 1.26 v -73.58 c -0.43,-0.76 -0.84,-1.52 -1.26,-2.29"
            />
            <path
              id="path72"
              style={{
                fill: "#d3d6d4",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1256.85,1095.15 v 73.58 h 0.14 v -73.34 c -0.05,-0.07 -0.1,-0.16 -0.14,-0.24"
            />
            <path
              id="path74"
              style={{
                fill: "#b8bcbb",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1256.99,1095.39 v 73.34 h 89.89 c -18.34,-5.97 -35.13,-14.97 -49.49,-26.12 -17.2,-13.4 -30.53,-29.57 -40.4,-47.22"
            />
            <path
              id="path76"
              style={{
                fill: "#b8bcbb",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1926.13,1064.7 c -3.47,12.44 -8.06,24.59 -13.97,36.25 -11.31,22.32 -28.75,41.3 -52.25,54.8 -8.79,5.07 -18.22,9.36 -28.02,12.98 h 94.24 V 1064.7"
            />
            <path
              id="path78"
              style={{
                fill: "#b8bcbb",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1926.13,859.582 h -152.8 c 17.4,3.672 34.52,8.25 50.79,14.578 28.14,10.965 53.6,27.324 74.42,46.965 9.98,9.41 18.89,19.434 23.79,31.57 l 0.63,1.68 c -0.03,-0.207 -0.02,-0.305 0.02,-0.305 0.33,0 2.84,7.508 3.15,13.055 V 859.582"
            />
            <path
              id="path80"
              style={{
                fill: "#2d2d2f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1256.85,859.582 h -1.26 v 109.75 c 0.42,-1.258 0.83,-2.516 1.26,-3.769 V 859.582"
            />
            <path
              id="path82"
              style={{
                fill: "#d3d6d4",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1256.99,859.582 h -0.14 v 105.981 c 0.04,-0.133 0.09,-0.27 0.14,-0.403 V 859.582"
            />
            <path
              id="path84"
              style={{
                fill: "#b8bcbb",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1348.92,859.582 h -91.93 V 965.16 c 3.54,-10.472 7.52,-20.851 12.39,-31.004 11.23,-23.343 27.25,-42.957 51.33,-58.73 8.97,-5.903 18.39,-11.192 28.21,-15.844"
            />
            <path
              id="path86"
              style={{
                fill: "#302f2f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1953.46,832.539 v -137.5 l 51.26,-52.66 v 137.496 l -51.26,52.664"
            />
            <path
              id="path88"
              style={{
                fill: "#1f1d1d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2004.72,771.598 -8.5,8.277 h 8.5 v -8.277"
            />
            <path
              id="path90"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2399.94,789.672 -72.34,47.609 h -383.65 l 47.24,-47.609 h 408.75"
            />
            <path
              id="path92"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1991.19,779.875 h 408.75 v 9.79688 h -408.75 z"
            />
            <path
              id="path94"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1943.95,827.48 v 9.801 l 47.24,-47.609 v -9.797 l -47.24,47.605"
            />
            <path
              id="path96"
              style={{
                fill: "#252322",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2004.72,642.379 h 380.672 V 779.875 H 2004.72 Z"
            />
            <path
              id="path98"
              style={{
                fill: "#1a1817",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2004.72,771.594 h 380.672 v 8.26953 H 2004.72 Z"
            />
            <path
              id="path100"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2399.94,789.672 v 0 c 0,0 -83.34,40.062 -259.82,40.062 -176.48,0 -148.93,-40.062 -148.93,-40.062 l -47.24,47.609 h 383.65 l 72.34,-47.609"
            />
            <path
              id="path102"
              style={{
                fill: "#b7b0a3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 685.359,832.734 V 1214.19 L 898.445,1156.6 V 886.418 l -5.82,-1.469 v 263.081 l -0.062,-0.08 0.062,0.08 -196.641,49.76 28.008,-37.82 -28.008,37.82 V 835.41 l -10.625,-2.676"
            />
            <path
              id="path104"
              style={{
                fill: "#8e8378",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 685.359,783.859 v 48.875 l 10.625,2.676 v -35.379 l 196.571,49.797 0.008,-0.008 0.062,0.028 v 35.101 l 5.82,1.469 V 841.441 L 685.359,783.859"
            />
            <path
              id="path106"
              style={{
                fill: "#96c8ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 875.711,870.211 723.992,837.957 v 322.013 l 151.719,-32.24 V 870.211"
            />
            <path
              id="path108"
              style={{
                fill: "#5795a7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 723.992,837.957 v 149.629 l 76.485,1.16 V 854.219 l -76.485,-16.262 m 71.762,144.578 -66.727,-1.601 V 846.141 l 66.727,13.562 v 122.832 m 12.891,-126.582 7.351,1.567 v 131.457 l 59.715,0.902 V 870.211 l -67.066,-14.258 m 63.668,128.422 -52.032,-1.242 V 864.68 l 52.032,10.566 v 109.129 m 3.398,23.785 -59.715,0.9 v 131.36 l 59.715,-12.69 v -119.57 m -55.43,125.45 v -118.56 l 52.032,-1.26 v 109.23 l -52.032,10.59 m -19.804,-124.31 -76.485,1.15 v 149.52 l 76.485,-16.25 V 1009.3 m -71.45,142.89 v -134.93 l 66.727,-1.62 v 122.97 l -66.727,13.58"
            />
            <path
              id="path110"
              style={{
                fill: "#4f5052",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 723.992,1159.97 151.719,-32.24 16.914,20.3 -196.641,49.76 28.008,-37.82"
            />
            <path
              id="path112"
              style={{
                fill: "#39606e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 875.711,1127.73 -59.715,12.69 v 0 l 59.715,-12.69"
            />
            <path
              id="path114"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 875.711,1127.73 v 0 l -59.715,12.69 v 0 l -15.519,3.3 -76.485,16.25 -28.008,37.82 196.641,-49.76 -0.062,-0.08 v 0.09 l -16.852,-20.31 m -168.035,62.51 19.515,-26.56 146.239,-31.93 12.121,14.54 -177.875,43.95"
            />
            <path
              id="path116"
              style={{
                fill: "#363536",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 723.992,837.957 -28.008,-37.926 196.641,49.817 -16.914,20.363 -151.719,-32.254"
            />
            <path
              id="path118"
              style={{
                fill: "#444446",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 723.992,1159.97 -28.008,37.82 V 800.031 l 28.008,37.926 v 322.013"
            />
            <path
              id="path120"
              style={{
                fill: "#444446",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 875.711,1127.73 V 870.211 l 16.914,-20.363 v 298.182 l -16.914,-20.3"
            />
            <path
              id="path122"
              style={{
                fill: "#4f5052",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 875.711,1008.16 -59.715,0.9 v 131.36 l -15.519,3.3 V 1009.3 l -76.485,1.15 v -22.864 l 76.485,1.16 V 854.211 l 15.519,3.309 v 131.457 l 59.715,0.902 v 18.281"
            />
            <path
              id="path124"
              style={{
                fill: "#5a534e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 892.563,849.82 -0.008,0.008 h 0.008 v -0.008"
            />
            <path
              id="path126"
              style={{
                fill: "#242322",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 875.711,1127.73 16.852,20.31 v -0.09 l -16.852,-20.22"
            />
            <path
              id="path128"
              style={{
                fill: "#2d2c2c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 892.563,849.922 -16.852,20.289 v 257.519 l 16.852,20.22 V 849.922 m -2.395,289.518 -11.891,-15.32 V 875.309 l 11.891,-15.407 v 279.538"
            />
            <path
              id="path130"
              style={{
                fill: "#2d2c2c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 695.984,800.031 v 397.759 l 28.008,-37.82 V 837.957 l -28.008,-37.926 m 4.168,384.539 V 815.219 l 19.754,27.605 v 314.136 l -19.754,27.61"
            />
            <path
              id="path132"
              style={{
                fill: "#252323",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 695.984,800.031 28.008,37.926 76.485,16.262 v -0.008 l 8.168,1.742 67.066,14.258 16.844,-20.383 -196.571,-49.797 m 177.446,66.11 -146.239,-31.969 -19.515,-26.594 177.875,44.004 -12.121,14.559"
            />
            <path
              id="path134"
              style={{
                fill: "#252323",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 892.563,849.82 v 0.102 l 0.062,-0.074 -0.062,-0.02"
            />
            <path
              id="path136"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 800.477,854.211 v 0.008 l 8.168,1.734 -8.168,-1.742"
            />
            <path
              id="path138"
              style={{
                fill: "#1c1a19",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 892.555,849.828 -16.844,20.383 16.852,-20.289 v -0.102 l -0.008,0.008"
            />
            <path
              id="path140"
              style={{
                fill: "#bce5e7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 733.949,1019.93 v 127.02 l 60.574,-11.98 -60.574,-115.04"
            />
            <path
              id="path142"
              style={{
                fill: "#bce5e7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 822.84,1017.45 v 111.91 l 47.348,-9.37 -47.348,-102.54"
            />
            <path
              id="path144"
              style={{
                fill: "#bce5e7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 733.949,850.551 v 126.883 l 60.574,1.757 -60.574,-128.64"
            />
            <path
              id="path146"
              style={{
                fill: "#bce5e7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 822.84,868.203 V 980 l 47.348,1.367 -47.348,-113.164"
            />
            <path
              id="path148"
              style={{
                fill: "#b7b0a3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 172.738,703.59 v 645.6 l 349.028,-94.34 V 791.52 l -9.528,-2.399 V 1240.8 l -0.109,-0.13 0.109,0.13 -0.109,0.03 v 0.01 l -0.004,-0.01 -321.98,81.49 45.875,-61.94 -45.875,61.94 V 707.969 l -17.407,-4.379"
            />
            <path
              id="path150"
              style={{
                fill: "#8e8378",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 172.738,644.301 v 59.289 l 17.407,4.379 V 670.82 l 322.093,81.563 v 36.738 l 9.528,2.399 V 738.629 L 172.738,644.301"
            />
            <path
              id="path152"
              style={{
                fill: "#96c8ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 484.535,785.75 236.02,732.926 v 527.454 l 248.515,-52.81 V 785.75"
            />
            <path
              id="path154"
              style={{
                fill: "#5795a7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 236.02,732.926 V 978.02 l 125.277,1.89 V 759.555 L 236.02,732.926 m 117.546,236.828 -109.3,-2.629 V 746.336 l 109.3,22.199 v 201.219 m 27.852,-205.922 5.301,1.125 v 215.34 l 97.816,1.48 V 785.75 L 381.418,763.832 m 97.547,208.938 -85.227,-2.043 V 776.688 L 478.965,794 v 178.77 m 5.57,38.95 -97.816,1.48 v 215.15 l -25.422,5.41 v -220.19 l -125.277,1.89 v 244.92 l 248.515,-52.81 V 1011.72 M 393.738,1217.2 V 1023 l 85.227,-2.07 v 178.93 l -85.227,17.34 m -149.472,30.42 v -221.01 l 109.3,-2.64 v 201.41 l -109.3,22.24"
            />
            <path
              id="path156"
              style={{
                fill: "#4f5052",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 236.02,1260.38 248.515,-52.81 27.703,33.23 -322.093,81.52 45.875,-61.94"
            />
            <path
              id="path158"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 484.535,1207.57 v 0 l -248.515,52.81 -45.875,61.94 321.98,-81.49 -27.59,-33.26 m -275.25,102.4 31.973,-43.52 239.535,-52.29 19.859,23.81 -291.367,72 m 302.844,-69.3 v 0.17 l 0.109,-0.04 -0.109,-0.13"
            />
            <path
              id="path160"
              style={{
                fill: "#363536",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 236.02,732.926 190.145,670.82 512.238,752.383 484.535,785.75 236.02,732.926"
            />
            <path
              id="path162"
              style={{
                fill: "#444446",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 236.02,1260.38 -45.875,61.94 v -651.5 l 45.875,62.106 v 527.454"
            />
            <path
              id="path164"
              style={{
                fill: "#444446",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 484.535,1207.57 V 785.75 l 27.703,-33.367 V 1240.8 l -27.703,-33.23"
            />
            <path
              id="path166"
              style={{
                fill: "#4f5052",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 484.535,1011.72 -97.816,1.48 v 215.15 l -25.422,5.41 v -220.19 l -125.277,1.89 v -37.44 l 125.277,1.89 V 759.555 l 25.422,5.402 v 215.34 l 97.816,1.48 v 29.943"
            />
            <path
              id="path168"
              style={{
                fill: "#75726c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 512.129,1240.83 h -0.004 l 0.004,0.01"
            />
            <path
              id="path170"
              style={{
                fill: "#242322",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 484.535,1207.57 27.59,33.26 h 0.004 v -0.16 l -27.594,-33.1"
            />
            <path
              id="path172"
              style={{
                fill: "#2d2c2c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 512.129,752.52 -27.594,33.23 v 421.82 l 27.594,33.1 V 752.52 m -3.91,474.24 -19.492,-25.11 V 794.109 l 19.492,-25.23 v 457.881"
            />
            <path
              id="path174"
              style={{
                fill: "#2d2c2c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 190.145,670.82 v 651.5 l 45.875,-61.94 V 732.926 L 190.145,670.82 m 6.828,629.84 V 695.668 l 32.351,45.23 v 514.542 l -32.351,45.22"
            />
            <path
              id="path176"
              style={{
                fill: "#252323",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 190.145,670.82 45.875,62.106 125.277,26.629 v 0 l 20.121,4.277 103.117,21.918 27.594,-33.375 v 0.145 l 0.109,-0.137 -322.093,-81.563 m 290.648,108.282 -239.535,-52.356 -31.973,-43.566 291.367,72.082 -19.859,23.84"
            />
            <path
              id="path178"
              style={{
                fill: "#1c1a19",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 512.129,752.375 -27.594,33.375 27.594,-33.23 v -0.145"
            />
            <path
              id="path180"
              style={{
                fill: "#bce5e7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 252.328,1031.01 v 208.04 l 99.219,-19.63 -99.219,-188.41"
            />
            <path
              id="path182"
              style={{
                fill: "#bce5e7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 397.938,1026.93 v 183.3 l 77.542,-15.34 -77.542,-167.96"
            />
            <path
              id="path184"
              style={{
                fill: "#bce5e7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 252.328,753.566 v 207.832 l 99.219,2.868 -99.219,-210.7"
            />
            <path
              id="path186"
              style={{
                fill: "#bce5e7",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 397.938,782.469 V 965.594 L 475.48,967.84 397.938,782.469"
            />
            <path
              id="path188"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1159.15,1313.74 -10.43,5.71 h 13.55 l -3.12,-5.71"
            />
            <path
              id="path190"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1162.27,1319.45 h -13.55 l -130.87,71.53 h 27.11 l 120.43,-65.83 -3.12,-5.7 m -148.62,84.53 h -19.576 l -118.992,65.05 h 19.586 l 118.982,-65.05 m -142.775,78.05 h -19.574 l -118.965,65.03 h 19.59 l 118.949,-65.03 m -135.219,78.03 h -27.101 l -118.973,65.04 h 27.102 l 118.972,-65.04"
            />
            <path
              id="path192"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 462.031,1709.64 H 448.48 l 0.122,0.22 h 13.027 l 0.402,-0.22"
            />
            <path
              id="path194"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 592.902,1638.1 h -27.101 l -120.438,65.84 3.117,5.7 h 13.551 l 130.871,-71.54"
            />
            <path
              id="path196"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1301.01,1314.28 -6.74,5.17 h 10.69 l -3.95,-5.17"
            />
            <path
              id="path198"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1304.96,1319.45 h -10.69 l -93.48,71.53 h 21.39 l 86.73,-66.37 -3.95,-5.16 m -99.76,84.53 h -18.16 l -85,65.05 h 18.16 l 85,-65.05 m -101.99,78.05 h -18.16 l -84.97,65.03 h 18.16 l 84.97,-65.03 m -101.96,78.03 h -21.387 l -84.984,65.04 h 21.391 l 84.98,-65.04"
            />
            <path
              id="path200"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 805.801,1709.64 h -10.696 l 0.168,0.22 h 10.239 l 0.289,-0.22"
            />
            <path
              id="path202"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 899.281,1638.1 h -21.386 l -86.739,66.38 3.949,5.16 h 10.696 l 93.48,-71.54"
            />
            <path
              id="path204"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1442.53,1315.43 -3.14,4.02 h 8.26 l -5.12,-4.02"
            />
            <path
              id="path206"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1447.65,1319.45 h -8.26 l -56.09,71.53 h 16.52 l 52.94,-67.53 -5.11,-4 m -63.2,84.53 h -11.34 l -50.99,65.05 h 11.33 l 51,-65.05 m -61.19,78.05 h -11.34 l -50.98,65.03 h 11.34 l 50.98,-65.03 m -55.99,78.03 h -16.52 l -50.99,65.04 h 16.52 l 50.99,-65.04"
            />
            <path
              id="path208"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1150,1709.64 h -8.26 l 0.28,0.22 h 7.8 l 0.18,-0.22"
            />
            <path
              id="path210"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1206.08,1638.1 h -16.51 l -52.95,67.53 5.12,4.01 h 8.26 l 56.08,-71.54"
            />
            <path
              id="path212"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1584.05,1317.8 -0.43,1.65 h 6.72 l -6.29,-1.65"
            />
            <path
              id="path214"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1590.34,1319.45 h -6.72 l -18.69,71.53 h 13.43 l 18.27,-69.89 -6.29,-1.64 m -15.38,84.53 h -11.97 l -17,65.05 h 11.97 l 17,-65.05 m -20.39,78.05 h -11.98 l -17,65.03 h 11.98 l 17,-65.03 m -20.4,78.03 h -13.43 l -17,65.04 h 13.44 l 16.99,-65.04"
            />
            <path
              id="path216"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1495.08,1709.64 h -6.72 l 0.84,0.22 h 5.82 l 0.06,-0.22"
            />
            <path
              id="path218"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1513.78,1638.1 h -13.44 l -18.27,69.9 6.29,1.64 h 6.72 l 18.7,-71.54"
            />
            <path
              id="path220"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1739.31,1317.8 -6.29,1.65 h 6.72 l -0.43,-1.65"
            />
            <path
              id="path222"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1739.74,1319.45 h -6.72 l -6.28,1.64 18.26,69.89 h 13.44 l -18.7,-71.53 m 17.6,84.53 h -8.94 l 17,65.05 h 8.94 l -17,-65.05 m 20.39,78.05 h -8.93 l 16.99,65.03 h 8.94 l -17,-65.03 m 24.9,78.03 h -13.44 l 17,65.04 h 13.43 l -16.99,-65.04"
            />
            <path
              id="path224"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1835,1709.64 h -6.72 l 0.06,0.22 h 5.82 l 0.84,-0.22"
            />
            <path
              id="path226"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1823.02,1638.1 h -13.44 l 18.7,71.54 h 6.72 l 6.29,-1.64 -18.27,-69.9"
            />
            <path
              id="path228"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1880.82,1315.43 -5.11,4.02 h 8.26 l -3.15,-4.02"
            />
            <path
              id="path230"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1883.97,1319.45 h -8.26 l -5.12,4 52.94,67.53 h 16.52 l -56.08,-71.53 m 66.28,84.53 h -14.38 l 51,65.05 h 14.37 l -50.99,-65.05 m 61.19,78.05 h -14.37 l 50.97,65.03 h 14.38 l -50.98,-65.03 m 61.18,78.03 h -16.52 l 50.99,65.04 h 16.52 l -50.99,-65.04"
            />
            <path
              id="path232"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2181.63,1709.64 h -8.26 l 0.17,0.22 h 7.81 l 0.28,-0.22"
            />
            <path
              id="path234"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2133.8,1638.1 h -16.52 l 56.09,71.54 h 8.26 l 5.11,-4.01 -52.94,-67.53"
            />
            <path
              id="path236"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2022.35,1314.28 -3.95,5.17 h 10.69 l -6.74,-5.17"
            />
            <path
              id="path238"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2029.09,1319.45 h -10.69 l -3.95,5.16 86.73,66.37 h 21.39 l -93.48,-71.53 m 104.2,84.53 h -15.13 l 85,65.05 h 15.13 l -85,-65.05 m 101.99,78.05 h -15.13 l 84.97,65.03 h 15.12 l -84.96,-65.03 m 108.22,78.03 h -21.39 l 84.99,65.04 h 21.39 l -84.99,-65.04"
            />
            <path
              id="path240"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2528.26,1709.64 h -10.7 l 0.29,0.22 h 10.24 l 0.17,-0.22"
            />
            <path
              id="path242"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2445.47,1638.1 h -21.39 l 93.48,71.54 h 10.7 l 3.95,-5.16 -86.74,-66.38"
            />
            <path
              id="path244"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2164.21,1313.74 -3.12,5.71 h 13.55 l -10.43,-5.71"
            />
            <path
              id="path246"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2174.64,1319.45 h -13.55 l -3.12,5.7 120.44,65.83 h 27.1 l -130.87,-71.53 m 154.65,84.53 h -22.61 l 118.98,65.05 h 22.62 l -118.99,-65.05 m 142.77,78.05 h -22.61 l 118.96,65.03 h 22.62 l -118.97,-65.03 m 142.75,78.03 h -27.1 l 118.97,65.04 h 27.11 l -118.98,-65.04"
            />
            <path
              id="path248"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2874.89,1709.64 h -13.55 l 0.4,0.22 h 13.03 l 0.12,-0.22"
            />
            <path
              id="path250"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2757.57,1638.1 h -27.11 l 130.88,71.54 h 13.55 l 3.12,-5.7 -120.44,-65.84"
            />
            <path
              id="path252"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 3037.97,1625.1 h -15.29 l 15.29,6.5 v -6.5 m -2737.286,0 h -15.286 v 6.5 l 15.286,-6.5"
            />
            <path
              id="path254"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 3022.68,1625.1 H 300.684 l -15.286,6.5 v 6.5 h 280.403 27.101 284.993 21.386 290.289 16.51 294.26 13.44 295.8 13.44 294.26 16.52 290.28 21.39 284.99 27.11 280.4 v -6.5 l -15.29,-6.5"
            />
            <path
              id="path256"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2854.42,1547.06 h -15.28 l 15.28,6.5 v -6.5 m -2370.193,0 h -15.286 v 6.5 l 15.286,-6.5"
            />
            <path
              id="path258"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2839.14,1547.06 h -270.73 l 5.29,2.89 h -249.68 l -3.78,-2.89 h -15.12 -242.7 -14.38 l 2.27,2.89 h -254.82 l -0.76,-2.89 h -8.94 -248.22 -11.98 l -0.75,2.89 h -254.83 l 2.27,-2.89 h -11.34 -242.7 -18.16 l -3.779,2.89 H 746.633 l 5.293,-2.89 h -19.59 -248.109 l -15.286,6.5 v 6.5 h 239.614 27.101 244.207 21.387 249.5 16.52 253.47 13.43 255.02 13.44 253.47 16.52 249.49 21.39 244.21 27.1 239.61 v -6.5 l -15.28,-6.5"
            />
            <path
              id="path260"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2670.89,1469.03 h -15.28 l 15.28,6.5 v -6.5 m -2003.132,0 h -15.266 v 6.49 l 15.266,-6.49"
            />
            <path
              id="path262"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2655.61,1469.03 h -229.95 l 5.29,2.88 h -208.89 l -3.77,-2.88 h -15.13 -201.92 -14.37 l 2.26,2.88 h -214.04 l -0.75,-2.88 h -8.94 -207.44 -11.97 l -0.75,2.88 h -214.05 l 2.26,-2.88 h -11.33 -201.92 -18.16 l -3.77,2.88 H 889.387 l 5.281,-2.88 H 875.082 667.758 l -15.266,6.49 v 6.51 h 198.809 19.574 l 5.281,-2.89 h 212.664 l -3.77,2.89 h 18.16 208.71 11.34 l 2.27,-2.89 h 217.82 l -0.76,2.89 h 11.98 214.23 8.93 l -0.75,-2.89 h 217.82 l 2.27,2.89 h 14.37 208.71 15.13 l -3.77,-2.89 h 212.66 l 5.28,2.89 h 22.61 198.83 v -6.5 l -15.28,-6.5"
            />
            <path
              id="path264"
              style={{
                fill: "#636262",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2487.33,1390.98 h -15.29 l 15.29,6.5 v -6.5 m -1636.006,0 h -15.289 v 6.5 l 15.289,-6.5"
            />
            <path
              id="path266"
              style={{
                fill: "#c4c0b9",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2472.04,1390.98 H 851.324 l -15.289,6.5 v 6.5 h 158.039 19.576 l 5.26,-2.87 h 171.89 l -3.76,2.87 h 18.16 167.91 11.34 l 2.26,-2.87 h 177.03 l -0.75,2.87 h 11.97 173.44 8.94 l -0.76,-2.87 h 177.04 l 2.25,2.87 h 14.38 167.91 15.13 l -3.76,-2.87 h 171.88 l 5.27,2.87 h 22.61 158.04 v -6.5 l -15.29,-6.5"
            />
            <path
              id="path268"
              style={{
                fill: "#3e3c3e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1895.49,221.148 -9.63,11.262 h -23.72 v 34.789 l 33.35,-46.051 m -523.55,4.75 29.36,40.563 V 232.41 h -23.8 l -5.56,-6.512 m 473.34,6.512 h -112.87 v 21.211 h 7.44 v 16.578 5.391 0.019 h -7.44 22.55 v 10.18 0 c 0,0 -0.33,0.43 -1.01,1.191 l -16.51,19.309 h 68.65 v -29.238 h 7.33 v 0 h 9.53 v 29.238 h 10.9 l 11.43,-15.789 v -58.09 m -127.48,0 h -5.14 v 21.211 h 5.14 V 232.41 m -17.78,0 h -136.66 v 21.211 h 136.66 V 232.41 m -149.31,0 h -2.49 v 21.211 h 2.49 V 232.41 m -17.1,0 h -115.43 v 57.36 l 11.95,16.519 h 10.63 v -29.238 h 7.32 v 0 h 9.53 v 29.238 h 68.33 l -16.5,-19.309 c -0.69,-0.761 -1.02,-1.191 -1.02,-1.191 v 0 h 25.19 -25.19 v -10.18 h 25.19 -10.07 v -21.988 h 10.07 V 232.41"
            />
            <path
              id="path270"
              style={{
                fill: "#3e3c3e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1857.22,489.078 h -4.08 l -18.35,21.461 h -11.3 v 25.133 l 33.73,-46.594 m -446.99,0 h -3.46 l 33.17,45.832 v -24.371 h -11.36 l -18.35,-21.461 m 399.22,21.461 h -93.93 v 20.672 h 6.19 v 13.801 4.476 0.012 h -6.19 18.77 v 8.488 0 c 0,0 -0.28,0.364 -0.86,1 l -17.91,20.942 v 4.461 h 61.32 v -33.692 h 6.1 v 0 h 7.93 v 30.031 l 18.58,-25.671 v -44.52 m -106.1,0 h -4.27 v 20.672 h 4.27 v -20.672 m -14.8,0 h -113.73 v 20.672 h 113.73 v -20.672 m -124.25,0 h -2.08 v 20.672 h 2.08 v -20.672 m -14.24,0 h -96.07 v 43.77 l 18.79,25.961 v -29.571 h 6.09 v 0 h 7.93 v 33.692 h 63.26 v -1.879 l -20.12,-23.524 c -0.57,-0.636 -0.85,-1 -0.85,-1 v 0 h 20.97 -20.97 V 549.5 h 20.97 -8.39 v -18.289 h 8.39 v -20.672"
            />
            <path
              id="path272"
              style={{
                fill: "#4c4a4c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 875.008,509.82 h -20.324 l 44.496,29.282 v -9.571 L 875.008,509.82 m 38.453,31.36 v 7.32 l 16.137,10.621 h 5.867 L 913.461,541.18"
            />
            <path
              id="path274"
              style={{
                fill: "#3e3c3e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1163.27,451.691 h -61.73 v 18.411 l 8.85,9.089 v 5.528 l 9.51,9.582 v 15.519 h -18.36 v 19.559 h 8.35 l 27.65,27.93 V 460.59 h 5.69 v 0 h 4.38 v 98.531 h 77.67 v -71.75 h -26.61 l -35.4,-35.68 m 103.58,35.68 h -27.28 v 71.75 h 53.71 v -9.891 h 8.06 v 0 h 6.21 v 9.891 h 30.49 l -71.19,-71.75 m -176.92,22.449 h -85.57 v 19.559 h 85.57 V 509.82 m -95.633,0 h -30.938 v 19.559 h 30.938 V 509.82 m -42.567,0 h -38.269 v 31.36 l 22.004,17.941 h 3.953 c -2.395,-1.57 -3.598,-2.512 -3.598,-2.512 v 0 h 15.91 -15.91 v -8.621 h 15.91 -3.121 v -18.609 h 3.121 V 509.82 m -52.55,0 h -24.172 l 24.172,19.711 V 509.82"
            />
            <path
              id="path276"
              style={{
                fill: "#4c4a4c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 534.871,232.41 H 518.574 L 603.027,288 534.871,232.41"
            />
            <path
              id="path278"
              style={{
                fill: "#3e3c3e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 917.305,146.289 h -48.293 v 27.492 l 19.672,20.207 v 6.934 l 5.601,5.648 v -34.25 h 6.707 v 0 h 5.172 v 117.321 h 91.563 v -95.75 h -33.2 l -47.222,-47.602 m 138.205,47.602 h -40.94 v 95.75 h 63.33 v -12.832 h 9.5 v 0 h 7.31 v 12.832 h 55.78 l -94.98,-95.75 M 894.285,232.41 h -42.426 v 21 h 9.832 l 32.594,32.918 V 232.41 m -56.117,0 H 737.289 v 21 h 100.879 v -21 m -112.746,0 h -36.473 v 21 h 36.473 v -21 m -50.18,0 h -45.113 v 57.231 h 32.387 c -4.008,-2.539 -6.028,-4.121 -6.028,-4.121 v 0 h 18.754 -18.754 v -10.161 h 18.754 -3.676 V 253.41 h 3.676 v -21 m -61.949,0 h -78.422 l 68.156,55.59 2.493,1.641 h 7.773 V 232.41"
            />
            <path
              id="path280"
              style={{
                fill: "#3e3c3e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2161.82,451.691 h -29.46 l -8.83,8.899 h 2.3 v 96.711 l 27.65,-27.922 v 11.332 7.277 h 8.34 -8.34 v -18.609 h 8.34 V 509.82 h -18.35 v -15.519 l 9.51,-9.582 v -5.528 l 8.84,-9.089 v -18.411 m -46.06,16.731 -18.8,18.949 h -58.88 v 71.75 h 77.68 v -90.699 m -91.96,23.969 -56.39,56.839 h 2.68 v 9.891 h 53.71 v -66.73 m 417.15,17.429 h -76.76 v 49.301 h 1.84 l 74.92,-49.301 m -91.04,0 h -38.27 v 19.559 h 3.12 v 11.332 7.277 h -3.12 15.92 v 8.621 0 c 0,0 -1.21,0.942 -3.6,2.512 h 25.95 V 509.82 m -49.89,0 h -30.95 v 19.559 h 30.95 V 509.82 m -41.01,0 h -85.55 v 19.559 h 85.55 V 509.82"
            />
            <path
              id="path282"
              style={{
                fill: "#3e3c3e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2394.35,146.289 h -16.02 l -47.23,47.602 h -65.46 v 95.75 h 91.56 V 172.32 h 5.18 v 0 h 6.7 v 34.258 l 5.61,-5.648 v -6.942 l 19.66,-20.199 v -27.5 m -145.55,47.602 h -8.68 l -94.98,95.75 h 23.53 v -12.832 h 7.3 v 0 h 9.51 v 12.832 h 63.32 v -95.75 m 528.25,38.519 h -126.97 v 57.231 h 40.03 l 86.94,-57.231 m -143.81,0 h -45.11 v 21 h 3.67 v 13.36 8.589 h -3.67 18.75 v 10.161 0 c 0,0 -2.02,1.582 -6.03,4.121 h 32.39 V 232.41 m -58.81,0 h -36.48 v 21 h 36.48 v -21 m -48.35,0 h -100.87 v 21 h 100.87 v -21 m -114.57,0 h -42.43 v 53.918 l 32.6,-32.918 v 13.36 8.589 h 9.83 -9.83 V 253.41 h 9.83 v -21"
            />
            <path
              id="path284"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1809.45,478.469 h 14.0391 V 674.328 H 1809.45 Z"
            />
            <path
              id="path286"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1818.49,510.539 h -8.89 V 649.93 h 8.89 c 0,-24.77 0,-95.418 0,-139.391"
            />
            <path
              id="path288"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1776.84,550.699 h 14.0313 V 669.211 H 1776.84 Z"
            />
            <path
              id="path290"
              style={{
                fill: "#11100e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1782.94,550.699 h -6.1 v 99.231 h 6.15 c -0.03,-0.489 -0.05,-1 -0.05,-1.532 0,-11.359 0,-77.339 0,-97.699"
            />
            <path
              id="path292"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1439.94,478.469 h 14.0469 V 674.328 H 1439.94 Z"
            />
            <path
              id="path294"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1448.97,510.539 h -8.88 V 649.93 h 8.88 c 0,-24.77 0,-95.418 0,-139.391"
            />
            <path
              id="path296"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1472.78,550.699 h 14.0195 V 669.211 H 1472.78 Z"
            />
            <path
              id="path298"
              style={{
                fill: "#11100e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1478.87,550.699 h -6.09 v 99.231 h 6.15 c -0.04,-0.489 -0.06,-1 -0.06,-1.532 0,-11.359 0,-77.339 0,-97.699"
            />
            <path
              id="path300"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1854.48,682.16 -53.75,62.879 h -338.09 l -53.75,-62.879 h 445.59"
            />
            <path
              id="path302"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1408.89,669.211 h 445.59 v 12.9492 h -445.59 z"
            />
            <path
              id="path304"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1428.11,649.93 h 407.16 v 19.2813 h -407.16 z"
            />
            <path
              id="path306"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1835.27,664.48 h -105.64 v 4.731 h 105.64 v -4.731 m -301.52,0 h -105.64 v 4.731 h 105.64 v -4.731"
            />
            <path
              id="path308"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1854.48,682.16 v 0 c 0,0 -34.89,32.043 -124.85,46.992 v 7.508 h -97.94 v 0 0 h -97.94 v -7.508 C 1443.79,714.203 1408.89,682.16 1408.89,682.16 v 0 l 53.75,62.879 h 338.09 l 53.75,-62.879"
            />
            <path
              id="path310"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1688.55,465.969 h 10.5313 v 72.0195 H 1688.55 Z"
            />
            <path
              id="path312"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1693.13,510.539 h -4.58 v 20.672 h 7.3 c -1.52,-1.09 -2.72,-2.891 -2.72,-5.871 0,-2.211 0,-7.801 0,-14.801"
            />
            <path
              id="path314"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1564.3,465.969 h 10.5195 v 72.0195 H 1564.3 Z"
            />
            <path
              id="path316"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1568.87,510.539 h -4.57 v 20.672 h 7.28 c -1.51,-1.09 -2.71,-2.891 -2.71,-5.871 0,-2.211 0,-7.801 0,-14.801"
            />
            <path
              id="path318"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1734.29,557.988 -35.21,41.172 H 1564.3 l -35.21,-41.172 h 205.2"
            />
            <path
              id="path320"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1529.09,549.5 h 205.199 v 8.48828 H 1529.09 Z"
            />
            <path
              id="path322"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1541.67,531.211 h 180.039 v 18.2891 H 1541.67 Z"
            />
            <path
              id="path324"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1721.71,545.012 h -6.19 v 4.476 h 6.19 v -4.476 m -18.36,0 h -141.13 v 4.476 h 141.13 v -4.476 m -153.29,0 h -8.39 v 4.476 h 8.39 v -4.476"
            />
            <path
              id="path326"
              style={{
                fill: "#773119",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1558.81,531.211 c 0,-1.891 -1.53,-3.422 -3.42,-3.422 -1.9,0 -3.43,1.531 -3.43,3.422 0,1.879 1.53,3.41 3.43,3.41 1.89,0 3.42,-1.531 3.42,-3.41"
            />
            <path
              id="path328"
              style={{
                fill: "#773119",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1712.91,531.211 c 0,-1.891 -1.53,-3.422 -3.41,-3.422 -1.9,0 -3.43,1.531 -3.43,3.422 0,1.879 1.53,3.41 3.43,3.41 1.88,0 3.41,-1.531 3.41,-3.41"
            />
            <path
              id="path330"
              style={{
                fill: "#3b3939",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1734.29,557.988 -0.86,1 c 0.58,-0.636 0.86,-1 0.86,-1"
            />
            <path
              id="path332"
              style={{
                fill: "#3b3939",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1529.09,557.988 c 0,0 0.28,0.364 0.85,1 l -0.85,-1"
            />
            <path
              id="path334"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1529.09,557.988 v 0 l 0.85,1 v 0 l -0.85,-1 m 0.85,1 20.12,23.524 v -7.973 c -11.58,-6.687 -17.96,-13.141 -20.12,-15.551 m 203.49,0 c -2.02,2.25 -7.72,8.032 -17.91,14.242 v 6.7 l 17.91,-20.942 m -30.08,20.684 c -16.3,7.476 -39.69,13.996 -71.66,13.996 -30.56,0 -53.29,-5.957 -69.47,-13.008 v 16.07 l 2.08,2.43 h 134.78 l 4.27,-5 v -14.488"
            />
            <path
              id="path336"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1533.75,656.418 h 195.879 v 80.2422 H 1533.75 Z"
            />
            <path
              id="path338"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1729.64,736.676 -3.77,2.199 h -188.36 l -3.77,-2.199 h 195.9"
            />
            <path
              id="path340"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1703.35,426.129 h 12.168 v 293.066 h -12.168 z"
            />
            <path
              id="path342"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1715.52,707.609 v 11.586 h 0.11 v -11.554 c -0.04,-0.012 -0.07,-0.02 -0.11,-0.032"
            />
            <path
              id="path344"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1711.17,510.539 h -7.69 v 208.656 h 12.04 v -11.586 c -2.48,-0.757 -4.35,-4.558 -4.35,-14.211 0,-16.808 0,-109.73 0,-182.859"
            />
            <path
              id="path346"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1550.06,426.129 h 12.1602 V 719.195 H 1550.06 Z"
            />
            <path
              id="path348"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1562.22,707.609 v 11.586 h 0.13 v -11.554 c -0.05,-0.012 -0.09,-0.02 -0.13,-0.032"
            />
            <path
              id="path350"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1557.88,510.539 h -7.69 v 208.656 h 12.03 v -11.586 c -2.48,-0.781 -4.34,-4.578 -4.34,-14.211 0,-16.808 0,-109.73 0,-182.859"
            />
            <path
              id="path352"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1558.81,670.922 c 0,-1.891 -1.53,-3.434 -3.42,-3.434 -1.9,0 -3.43,1.543 -3.43,3.434 0,1.879 1.53,3.418 3.43,3.418 1.89,0 3.42,-1.539 3.42,-3.418"
            />
            <path
              id="path354"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1712.91,670.922 c 0,-1.891 -1.53,-3.434 -3.41,-3.434 -1.9,0 -3.43,1.543 -3.43,3.434 0,1.879 1.53,3.418 3.43,3.418 1.88,0 3.41,-1.539 3.41,-3.418"
            />
            <path
              id="path356"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1558.81,703.18 c 0,-1.891 -1.53,-3.418 -3.42,-3.418 -1.9,0 -3.43,1.527 -3.43,3.418 0,1.879 1.53,3.41 3.43,3.41 1.89,0 3.42,-1.531 3.42,-3.41"
            />
            <path
              id="path358"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1712.91,703.18 c 0,-1.891 -1.53,-3.418 -3.41,-3.418 -1.9,0 -3.43,1.527 -3.43,3.418 0,1.879 1.53,3.41 3.43,3.41 1.88,0 3.41,-1.531 3.41,-3.41"
            />
            <path
              id="path360"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1845.28,190.262 h 16.8594 V 425.578 H 1845.28 Z"
            />
            <path
              id="path362"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1856.13,232.41 h -10.67 v 163.86 h 10.67 c 0,-29.09 0,-110.86 0,-163.86"
            />
            <path
              id="path364"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1806.09,277.051 h 16.8594 V 419.442 H 1806.09 Z"
            />
            <path
              id="path366"
              style={{
                fill: "#11100e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1813.42,277.051 h -7.33 V 396.27 h 7.39 c -0.04,-0.59 -0.06,-1.211 -0.06,-1.852 0,-13.648 0,-92.918 0,-117.367"
            />
            <path
              id="path368"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1401.3,190.262 h 16.8789 V 425.578 H 1401.3 Z"
            />
            <path
              id="path370"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1412.16,232.41 h -10.67 v 163.86 h 10.67 c 0,-29.09 0,-110.86 0,-163.86"
            />
            <path
              id="path372"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1440.76,277.051 h 16.8477 V 419.442 H 1440.76 Z"
            />
            <path
              id="path374"
              style={{
                fill: "#11100e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1448.08,277.051 h -7.32 V 396.27 h 7.39 c -0.05,-0.59 -0.07,-1.211 -0.07,-1.852 0,-13.648 0,-92.918 0,-117.367"
            />
            <path
              id="path376"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1899.38,434.988 -64.59,75.551 H 1428.58 L 1364,434.988 h 535.38"
            />
            <path
              id="path378"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1364,419.441 h 535.379 v 15.5469 H 1364 Z"
            />
            <path
              id="path380"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1387.09,396.27 h 489.211 v 23.1719 H 1387.09 Z"
            />
            <path
              id="path382"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1876.3,413.762 h -126.94 v 5.679 h 126.94 v -5.679 m -362.28,0 h -126.93 v 5.679 h 126.93 v -5.679"
            />
            <path
              id="path384"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1899.38,434.988 v 0 c 0,0 -41.93,38.5 -150.02,56.461 v 9.02 h -117.67 v 0 0 h -117.67 v -9.02 C 1405.92,473.488 1364,434.988 1364,434.988 v 0 l 64.58,75.551 h 406.21 l 64.59,-75.551"
            />
            <path
              id="path386"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1700.02,175.238 h 12.6406 v 86.5313 H 1700.02 Z"
            />
            <path
              id="path388"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1705.5,232.41 h -5.48 v 21.211 h 8.75 c -1.82,-1.312 -3.27,-3.473 -3.27,-7.051 0,-2.261 0,-7.468 0,-14.16"
            />
            <path
              id="path390"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1550.71,175.238 h 12.6484 v 86.5313 H 1550.71 Z"
            />
            <path
              id="path392"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1556.21,232.41 h -5.5 v 21.211 h 8.76 c -1.81,-1.312 -3.26,-3.473 -3.26,-7.051 0,-2.261 0,-7.468 0,-14.16"
            />
            <path
              id="path394"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1754.96,285.789 -42.3,49.481 h -161.95 l -42.29,-49.481 h 246.54"
            />
            <path
              id="path396"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1508.42,275.609 h 246.539 v 10.1797 H 1508.42 Z"
            />
            <path
              id="path398"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1523.54,253.621 h 216.313 v 21.9883 H 1523.54 Z"
            />
            <path
              id="path400"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1739.85,270.199 h -7.44 v 5.391 h 7.44 v -5.391 m -22.05,0 h -169.58 v 5.391 h 169.58 v -5.391 m -184.19,0 h -10.07 v 5.391 h 10.07 v -5.391"
            />
            <path
              id="path402"
              style={{
                fill: "#773119",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1544.12,253.621 c 0,-2.269 -1.83,-4.109 -4.1,-4.109 -2.28,0 -4.11,1.84 -4.11,4.109 0,2.258 1.83,4.098 4.11,4.098 2.27,0 4.1,-1.84 4.1,-4.098"
            />
            <path
              id="path404"
              style={{
                fill: "#773119",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1729.29,253.621 c 0,-2.269 -1.85,-4.109 -4.11,-4.109 -2.29,0 -4.13,1.84 -4.13,4.109 0,2.258 1.84,4.098 4.13,4.098 2.26,0 4.11,-1.84 4.11,-4.098"
            />
            <path
              id="path406"
              style={{
                fill: "#3b3939",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1754.96,285.789 -1.01,1.191 c 0.68,-0.761 1.01,-1.191 1.01,-1.191"
            />
            <path
              id="path408"
              style={{
                fill: "#3b3939",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1508.42,285.789 c 0,0 0.33,0.43 1.02,1.191 l -1.02,-1.191"
            />
            <path
              id="path410"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1508.42,285.789 v 0 l 1.02,1.191 v 0 l -1.02,-1.191 m 245.53,1.191 c -2.42,2.7 -9.27,9.661 -21.54,17.129 v 8.071 l 21.54,-25.2 m -244.51,0 24.17,28.282 v -9.594 c -13.93,-8.039 -21.58,-15.797 -24.17,-18.688 m 208.36,24.872 c -19.59,8.968 -47.7,16.816 -86.11,16.816 -36.72,0 -64.03,-7.168 -83.47,-15.637 v 19.328 l 2.49,2.911 h 161.95 l 5.14,-6 v -17.418"
            />
            <path
              id="path412"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1514.02,404.07 h 235.34 v 96.3984 h -235.34 z"
            />
            <path
              id="path414"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1749.37,500.488 -4.52,2.641 h -226.31 l -4.53,-2.641 h 235.36"
            />
            <path
              id="path416"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1717.8,127.379 h 14.6094 V 479.488 H 1717.8 Z"
            />
            <path
              id="path418"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1732.41,465.57 v 13.918 h 0.14 v -13.867 c -0.05,-0.019 -0.1,-0.031 -0.14,-0.051"
            />
            <path
              id="path420"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1727.19,232.41 h -9.25 v 247.078 h 14.47 V 465.57 c -2.99,-0.929 -5.22,-5.5 -5.22,-17.07 0,-19.922 0,-128.809 0,-216.09"
            />
            <path
              id="path422"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1533.61,127.379 h 14.6094 V 479.488 H 1533.61 Z"
            />
            <path
              id="path424"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1548.22,465.57 v 13.918 h 0.16 v -13.867 c -0.06,-0.019 -0.11,-0.031 -0.16,-0.051"
            />
            <path
              id="path426"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1543.01,232.41 h -9.24 v 247.078 h 14.45 V 465.57 c -2.97,-0.949 -5.21,-5.511 -5.21,-17.07 0,-19.922 0,-128.809 0,-216.09"
            />
            <path
              id="path428"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1544.12,421.48 c 0,-2.269 -1.83,-4.121 -4.1,-4.121 -2.28,0 -4.11,1.852 -4.11,4.121 0,2.27 1.83,4.098 4.11,4.098 2.27,0 4.1,-1.828 4.1,-4.098"
            />
            <path
              id="path430"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1729.29,421.48 c 0,-2.269 -1.85,-4.121 -4.11,-4.121 -2.29,0 -4.13,1.852 -4.13,4.121 0,2.27 1.84,4.098 4.13,4.098 2.26,0 4.11,-1.828 4.11,-4.098"
            />
            <path
              id="path432"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1544.12,460.25 c 0,-2.281 -1.83,-4.121 -4.1,-4.121 -2.28,0 -4.11,1.84 -4.11,4.121 0,2.25 1.83,4.102 4.11,4.102 2.27,0 4.1,-1.852 4.1,-4.102"
            />
            <path
              id="path434"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1729.29,460.25 c 0,-2.281 -1.85,-4.121 -4.11,-4.121 -2.29,0 -4.13,1.84 -4.13,4.121 0,2.25 1.84,4.102 4.13,4.102 2.26,0 4.11,-1.852 4.11,-4.102"
            />
            <path
              id="path436"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1898.99,0 h 21.1211 V 126.078 H 1898.99 Z"
            />
            <path
              id="path438"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1912.58,0 h -13.36 v 89.3984 h 13.36 c 0,-17.9101 0,-51.7382 0,-89.3984"
            />
            <path
              id="path440"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1849.96,0 h 21.0781 V 118.391 H 1849.96 Z"
            />
            <path
              id="path442"
              style={{
                fill: "#11100e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1859.12,0 h -9.16 v 89.3984 h 9.24 c -0.05,-0.7382 -0.08,-1.5078 -0.08,-2.3203 0,-10.2695 0,-50.207 0,-87.0781"
            />
            <path
              id="path444"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1343.36,0 h 21.1289 V 126.078 H 1343.36 Z"
            />
            <path
              id="path446"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1356.96,0 h -13.36 v 89.3984 h 13.36 c 0,-17.9101 0,-51.7382 0,-89.3984"
            />
            <path
              id="path448"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1392.75,0 h 21.0781 V 118.391 H 1392.75 Z"
            />
            <path
              id="path450"
              style={{
                fill: "#11100e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1401.91,0 h -9.16 v 89.3984 h 9.25 c -0.06,-0.7382 -0.09,-1.5078 -0.09,-2.3203 0,-10.2695 0,-50.207 0,-87.0781"
            />
            <path
              id="path452"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1966.7,137.852 -80.84,94.558 H 1377.5 l -80.82,-94.558 h 670.02"
            />
            <path
              id="path454"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1296.68,118.391 h 670.02 v 19.4609 h -670.02 z"
            />
            <path
              id="path456"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1325.57,89.3984 h 612.25 v 28.9922 h -612.25 z"
            />
            <path
              id="path458"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1937.82,111.281 h -158.86 v 7.11 h 158.86 v -7.11 m -453.39,0 h -158.86 v 7.11 h 158.86 v -7.11"
            />
            <path
              id="path460"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1966.7,137.852 v 0 c 0,0 -52.46,48.187 -187.74,70.66 v 11.297 H 1631.7 v 0 0 h -147.27 v -11.297 c -135.28,-22.473 -187.75,-70.66 -187.75,-70.66 v 0 l 80.82,94.558 h 508.36 l 80.84,-94.558"
            />
            <path
              id="path462"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1785.97,-48.8594 -52.94,61.9102 h -202.69 l -52.92,-61.9102 h 308.55"
            />
            <path
              id="path464"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1739.45,0 h -52.54 c -16.12,2.98047 -34.47,4.80859 -55.21,4.80859 -20.75,0 -39.09,-1.82812 -55.21,-4.80859 h -49.26 v 9.41016 l 3.11,3.64064 h 202.69 l 6.42,-7.51174 V 0"
            />
            <path
              id="path466"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1484.43,99.1484 h 294.531 v 120.66 H 1484.43 Z"
            />
            <path
              id="path468"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1778.97,219.84 -5.66,3.289 h -283.23 l -5.66,-3.289 h 294.55"
            />
            <path
              id="path470"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1739.45,0 h 18.2891 V 193.539 H 1739.45 Z"
            />
            <path
              id="path472"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1757.74,176.121 v 17.418 h 0.17 v -17.371 c -0.06,-0.008 -0.12,-0.027 -0.17,-0.047"
            />
            <path
              id="path474"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1751.21,0 h -11.57 v 193.539 h 18.1 v -17.418 c -3.73,-1.152 -6.53,-6.859 -6.53,-21.359 0,-16.434 0,-81.2307 0,-154.762"
            />
            <path
              id="path476"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1508.94,0 h 18.2891 V 193.539 H 1508.94 Z"
            />
            <path
              id="path478"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1527.23,176.121 v 17.418 h 0.19 v -17.371 c -0.07,-0.008 -0.13,-0.027 -0.19,-0.047"
            />
            <path
              id="path480"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1520.71,0 h -11.56 v 193.539 h 18.08 v -17.418 c -3.72,-1.172 -6.52,-6.883 -6.52,-21.359 0,-16.434 0,-81.2307 0,-154.762"
            />
            <path
              id="path482"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1522.1,120.949 c 0,-2.847 -2.29,-5.148 -5.13,-5.148 -2.86,0 -5.16,2.301 -5.16,5.148 0,2.832 2.3,5.129 5.16,5.129 2.84,0 5.13,-2.297 5.13,-5.129"
            />
            <path
              id="path484"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1753.84,120.949 c 0,-2.847 -2.32,-5.148 -5.14,-5.148 -2.87,0 -5.16,2.301 -5.16,5.148 0,2.832 2.29,5.129 5.16,5.129 2.82,0 5.14,-2.297 5.14,-5.129"
            />
            <path
              id="path486"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1522.1,169.461 c 0,-2.859 -2.29,-5.141 -5.13,-5.141 -2.86,0 -5.16,2.282 -5.16,5.141 0,2.82 2.3,5.129 5.16,5.129 2.84,0 5.13,-2.309 5.13,-5.129"
            />
            <path
              id="path488"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1753.84,169.461 c 0,-2.859 -2.32,-5.141 -5.14,-5.141 -2.87,0 -5.16,2.282 -5.16,5.141 0,2.82 2.29,5.129 5.16,5.129 2.82,0 5.14,-2.309 5.14,-5.129"
            />
            <path
              id="path490"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1955.83,549.23 h 14.2617 V 715.816 H 1955.83 Z"
            />
            <path
              id="path492"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1962.02,549.23 h -6.19 v 157.989 l 7,-7.188 c -0.5,-1.48 -0.81,-3.261 -0.81,-5.402 0,-11.551 0,-124.711 0,-145.399"
            />
            <path
              id="path494"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1942.52,740.504 v -19.617 l 68.88,-70.746 v 19.609 l -68.88,70.754"
            />
            <path
              id="path496"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2011.4,658.629 -11.43,11.121 h 11.43 v -11.121"
            />
            <path
              id="path498"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2349.91,475.762 h 14.2813 v 199.18 H 2349.91 Z"
            />
            <path
              id="path500"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2359.1,509.82 h -9.04 v 140.321 h 9.04 c 0,-24.922 0,-95.532 0,-140.321"
            />
            <path
              id="path502"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2279.77,549.23 h 14.2617 V 669.75 H 2279.77 Z"
            />
            <path
              id="path504"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2285.96,583.98 -6.19,4.079 v 62.082 h 6.25 c -0.04,-0.5 -0.06,-1.02 -0.06,-1.571 0,-7.468 0,-38.218 0,-64.59"
            />
            <path
              id="path506"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2023.8,475.762 h 14.2773 v 199.18 H 2023.8 Z"
            />
            <path
              id="path508"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2033.01,475.762 h -9.04 v 174.379 h 9.04 c 0,-33.45 0,-149.192 0,-174.379"
            />
            <path
              id="path510"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2395.71,682.922 -97.18,63.949 h -364.07 l 63.45,-63.949 h 397.8"
            />
            <path
              id="path512"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1997.91,669.75 h 397.801 v 13.1719 H 1997.91 Z"
            />
            <path
              id="path514"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1934.46,733.707 v 13.164 l 63.45,-63.949 V 669.75 l -63.45,63.957"
            />
            <path
              id="path516"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2011.4,650.141 h 360.07 v 19.6094 H 2011.4 Z"
            />
            <path
              id="path518"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2371.47,658.629 h -43.91 v 11.109 h 43.91 v -11.109 m -229.89,0 H 2011.4 v 11.109 h 130.18 v -11.109"
            />
            <path
              id="path520"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2395.71,682.922 v 0 c 0,0 -23.66,13 -68.15,26.219 v 18.629 l 68.15,-44.848 m -397.8,0 -63.45,63.949 h 364.07 l 27.54,-18.125 h -88.37 c -32.72,4.817 -70.16,8 -111.97,8 -171.98,0 -127.82,-53.824 -127.82,-53.824"
            />
            <path
              id="path522"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2259.01,460.59 h 10.0586 v 78.3711 H 2259.01 Z"
            />
            <path
              id="path524"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2263.39,509.82 h -4.38 v 19.559 h 4.73 c -0.22,-0.719 -0.35,-1.539 -0.35,-2.488 0,-2.172 0,-8.762 0,-17.071"
            />
            <path
              id="path526"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2115.76,460.59 h 10.0664 V 577.559 H 2115.76 Z"
            />
            <path
              id="path528"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2120.15,460.59 h -4.39 v 106.879 l 4.39,-4.438 c 0,-15.672 0,-91.441 0,-102.441"
            />
            <path
              id="path530"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2108.37,593.551 V 574.93 l 45.11,-45.551 v 18.609 l -45.11,45.563"
            />
            <path
              id="path532"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2153.48,540.711 -7.48,7.277 h 7.48 v -7.277"
            />
            <path
              id="path534"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2327.56,556.609 2263.9,598.5 h -163.88 l 41.56,-41.891 h 185.98"
            />
            <path
              id="path536"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2141.58,547.988 h 185.977 v 8.62109 H 2141.58 Z"
            />
            <path
              id="path538"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2100.02,589.871 v 8.629 l 41.56,-41.891 v -8.621 l -41.56,41.883"
            />
            <path
              id="path540"
              style={{
                fill: "#9a441d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2153.48,529.379 h 161.281 v 18.6094 H 2153.48 Z"
            />
            <path
              id="path542"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2153.48,529.379 h 161.281 v 18.6094 H 2153.48 Z"
            />
            <path
              id="path544"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2314.76,540.711 h -3.12 v 7.277 h 3.12 v -7.277 m -14.74,0 h -126.56 v 7.277 h 126.56 v -7.277 m -138.2,0 h -8.34 v 7.277 h 8.34 v -7.277"
            />
            <path
              id="path546"
              style={{
                fill: "#4b4544",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2323.96,559.121 h -0.22 l -4.05,2.668 c 1.69,-1.008 3.12,-1.91 4.27,-2.668"
            />
            <path
              id="path548"
              style={{
                fill: "#3b3939",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2327.56,556.609 -3.82,2.512 h 0.22 c 2.39,-1.57 3.6,-2.512 3.6,-2.512"
            />
            <path
              id="path550"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2327.56,556.609 -7.87,5.18 v 0 l 4.05,-2.668 3.82,-2.512 v 0"
            />
            <path
              id="path552"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2141.58,556.609 -41.56,41.891 h 61.8 v -9.219 c -42.87,-8.113 -20.24,-32.672 -20.24,-32.672 m 178.11,5.18 c -2.22,1.332 -4.9,2.84 -8.05,4.473 v 0.828 l 8.05,-5.301 m -19.67,9.992 c -21.99,9.547 -56.97,20.078 -104.32,20.078 -8.52,0 -15.89,-0.339 -22.24,-0.961 v 7.602 h 90.44 l 36.12,-23.77 v -2.949"
            />
            <path
              id="path554"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2135.85,730.883 V 656.09 l 5.73,-3.981 v 76.637 l -5.73,2.137"
            />
            <path
              id="path556"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2141.58,652.109 h 185.977 v 76.6367 H 2141.58 Z"
            />
            <path
              id="path558"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2327.56,728.758 -5.75,2.125 h -185.96 l 5.73,-2.125 h 185.98"
            />
            <path
              id="path560"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2300.02,422.531 h 11.6211 V 712.07 H 2300.02 Z"
            />
            <path
              id="path562"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2311.64,701.012 v 11.058 h 0.12 v -11.031 c -0.04,-0.008 -0.08,-0.019 -0.12,-0.027"
            />
            <path
              id="path564"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2307.5,509.82 h -7.36 v 202.25 h 11.5 v -11.058 c -2.37,-0.75 -4.14,-4.371 -4.14,-13.582 0,-15.758 0,-105.571 0,-177.61"
            />
            <path
              id="path566"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2161.82,422.531 h 11.6406 V 712.07 H 2161.82 Z"
            />
            <path
              id="path568"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2173.46,701.012 v 11.058 h 0.1 v -11.031 c -0.03,-0.008 -0.07,-0.019 -0.1,-0.027"
            />
            <path
              id="path570"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2168.67,422.531 h -6.72 v 47.438 l 6.72,-6.899 v -40.539 m 0.62,87.289 h -7.34 v 202.25 h 11.51 v -11.058 c -2.37,-0.742 -4.17,-4.364 -4.17,-13.582 0,-15.758 0,-105.571 0,-177.61"
            />
            <path
              id="path572"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2170.19,665.949 c 0,-1.801 -1.46,-3.258 -3.27,-3.258 -1.81,0 -3.27,1.457 -3.27,3.258 0,1.801 1.46,3.262 3.27,3.262 1.81,0 3.27,-1.461 3.27,-3.262"
            />
            <path
              id="path574"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2309.15,665.949 c 0,-1.801 -1.46,-3.258 -3.25,-3.258 -1.83,0 -3.28,1.457 -3.28,3.258 0,1.801 1.45,3.262 3.28,3.262 1.79,0 3.25,-1.461 3.25,-3.262"
            />
            <path
              id="path576"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2170.19,696.77 c 0,-1.809 -1.46,-3.27 -3.27,-3.27 -1.81,0 -3.27,1.461 -3.27,3.27 0,1.8 1.46,3.261 3.27,3.261 1.81,0 3.27,-1.461 3.27,-3.261"
            />
            <path
              id="path578"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2309.15,696.77 c 0,-1.809 -1.46,-3.27 -3.25,-3.27 -1.83,0 -3.28,1.461 -3.28,3.27 0,1.8 1.45,3.261 3.28,3.261 1.79,0 3.25,-1.461 3.25,-3.261"
            />
            <path
              id="path580"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2171.04,537.941 c 0,-1.82 -1.47,-3.269 -3.27,-3.269 -1.82,0 -3.28,1.449 -3.28,3.269 0,1.778 1.46,3.25 3.28,3.25 1.8,0 3.27,-1.472 3.27,-3.25"
            />
            <path
              id="path582"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2309.15,537.941 c 0,-1.82 -1.46,-3.269 -3.25,-3.269 -1.83,0 -3.28,1.449 -3.28,3.269 0,1.778 1.45,3.25 3.28,3.25 1.79,0 3.25,-1.472 3.25,-3.25"
            />
            <path
              id="path584"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2168.67,276.809 h 16.8086 V 473.2 H 2168.67 Z"
            />
            <path
              id="path586"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2175.97,276.809 h -7.3 V 463.07 l 8.26,-8.48 c -0.6,-1.738 -0.96,-3.828 -0.96,-6.36 0,-13.621 0,-147.011 0,-171.421"
            />
            <path
              id="path588"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2152.98,502.309 v -23.118 l 81.21,-83.402 v 23.109 l -81.21,83.411"
            />
            <path
              id="path590"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2234.19,405.789 -13.48,13.109 h 13.48 v -13.109"
            />
            <path
              id="path592"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2633.24,190.199 h 16.8438 V 425.031 H 2633.24 Z"
            />
            <path
              id="path594"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2644.08,232.41 h -10.66 v 163.379 h 10.66 c 0,-29.008 0,-110.488 0,-163.379"
            />
            <path
              id="path596"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2550.56,276.809 h 16.8008 v 142.09 H 2550.56 Z"
            />
            <path
              id="path598"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2557.86,317.789 -7.3,4.801 v 73.199 h 7.37 c -0.05,-0.59 -0.07,-1.211 -0.07,-1.859 0,-8.809 0,-45.051 0,-76.141"
            />
            <path
              id="path600"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2248.8,190.199 h 16.8398 V 425.031 H 2248.8 Z"
            />
            <path
              id="path602"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2259.64,190.199 h -10.65 v 205.59 h 10.65 c 0,-39.437 0,-175.891 0,-205.59"
            />
            <path
              id="path604"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2687.24,434.422 -114.58,75.398 h -429.19 l 74.81,-75.398 h 468.96"
            />
            <path
              id="path606"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2218.28,418.898 h 468.957 v 15.5234 H 2218.28 Z"
            />
            <path
              id="path608"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2143.47,494.301 v 15.519 l 74.81,-75.398 v -15.524 l -74.81,75.403"
            />
            <path
              id="path610"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2234.19,395.789 h 424.469 v 23.1094 H 2234.19 Z"
            />
            <path
              id="path612"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2658.66,405.789 h -51.78 v 13.102 h 51.78 v -13.102 m -271.02,0 h -153.45 v 13.102 h 153.45 v -13.102"
            />
            <path
              id="path614"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2687.24,434.422 v 0 c 0,0 -27.91,15.328 -80.36,30.906 v 21.973 l 80.36,-52.879 m -468.96,0 -74.81,75.398 h 429.19 l 32.46,-21.359 h -104.25 c -38.56,5.668 -82.67,9.41 -131.92,9.41 -202.73,0 -150.67,-63.449 -150.67,-63.449"
            />
            <path
              id="path616"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2526.08,172.32 h 11.8672 v 92.3984 H 2526.08 Z"
            />
            <path
              id="path618"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2531.25,232.41 h -5.17 v 21 h 5.58 c -0.26,-0.84 -0.41,-1.808 -0.41,-2.93 0,-2.371 0,-9.25 0,-18.07"
            />
            <path
              id="path620"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2357.2,172.32 h 11.8828 V 310.211 H 2357.2 Z"
            />
            <path
              id="path622"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2362.38,172.32 h -5.18 v 126 l 5.18,-5.218 c 0,-18.461 0,-107.801 0,-120.782"
            />
            <path
              id="path624"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2348.49,329.059 v -21.938 l 53.19,-53.711 v 21.949 l -53.19,53.7"
            />
            <path
              id="path626"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2401.68,266.77 -8.83,8.589 h 8.83 v -8.589"
            />
            <path
              id="path628"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2606.88,285.52 -75.04,49.39 h -193.19 l 48.99,-49.39 h 219.24"
            />
            <path
              id="path630"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2387.64,275.359 h 219.238 v 10.1602 H 2387.64 Z"
            />
            <path
              id="path632"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2338.65,324.738 v 10.172 l 48.99,-49.39 v -10.161 l -48.99,49.379"
            />
            <path
              id="path634"
              style={{
                fill: "#9a441d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2401.68,253.41 h 190.121 v 21.9492 H 2401.68 Z"
            />
            <path
              id="path636"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2401.68,253.41 h 190.121 v 21.9492 H 2401.68 Z"
            />
            <path
              id="path638"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591.8,266.77 h -3.67 v 8.589 h 3.67 v -8.589 m -17.37,0 h -149.22 v 8.589 h 149.22 v -8.589 m -162.92,0 h -9.83 v 8.589 h 9.83 v -8.589"
            />
            <path
              id="path640"
              style={{
                fill: "#4b4544",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2600.85,289.641 h -0.21 l -3.04,2 c 1.2,-0.719 2.28,-1.391 3.25,-2"
            />
            <path
              id="path642"
              style={{
                fill: "#3b3939",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2606.88,285.52 -6.24,4.121 h 0.21 c 4.01,-2.539 6.03,-4.121 6.03,-4.121"
            />
            <path
              id="path644"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2606.88,285.52 -9.28,6.121 v 0 l 3.04,-2 6.24,-4.121 v 0"
            />
            <path
              id="path646"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2387.64,285.52 -48.99,49.39 h 72.86 v -10.859 c -50.55,-9.582 -23.87,-38.531 -23.87,-38.531 m 209.96,6.121 c -2.61,1.55 -5.77,3.339 -9.47,5.25 v 0.968 l 9.47,-6.218 m -23.17,11.757 c -25.92,11.262 -67.17,23.68 -122.98,23.68 -10.05,0 -18.74,-0.398 -26.24,-1.129 v 8.961 h 106.63 l 42.59,-28.031 v -3.481"
            />
            <path
              id="path648"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2380.89,490.961 v -88.172 l 6.74,-4.687 v 90.359 l -6.74,2.5"
            />
            <path
              id="path650"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2387.64,398.102 h 219.238 v 90.3594 H 2387.64 Z"
            />
            <path
              id="path652"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2606.88,488.469 -6.75,2.492 h -219.24 l 6.74,-2.492 h 219.25"
            />
            <path
              id="path654"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2574.43,127.449 h 13.6992 v 341.34 H 2574.43 Z"
            />
            <path
              id="path656"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2588.13,455.75 v 13.039 h 0.13 v -13 c -0.04,-0.008 -0.08,-0.027 -0.13,-0.039"
            />
            <path
              id="path658"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2583.24,232.41 h -8.67 v 236.379 h 13.56 V 455.75 c -2.8,-0.871 -4.89,-5.129 -4.89,-16 0,-18.43 0,-122.762 0,-207.34"
            />
            <path
              id="path660"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2411.51,127.449 h 13.6992 v 341.34 H 2411.51 Z"
            />
            <path
              id="path662"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2425.21,455.75 v 13.039 h 0.13 v -13 c -0.04,-0.008 -0.08,-0.027 -0.13,-0.039"
            />
            <path
              id="path664"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2420.32,127.449 h -4.87 v 24.672 l 4.87,-5 c 0,-8.293 0,-14.98 0,-19.672 m 0,104.961 h -8.66 v 236.379 h 13.55 V 455.75 c -2.8,-0.871 -4.89,-5.141 -4.89,-16 0,-18.43 0,-122.762 0,-207.34"
            />
            <path
              id="path666"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2421.37,414.418 c 0,-2.117 -1.72,-3.859 -3.85,-3.859 -2.14,0 -3.86,1.742 -3.86,3.859 0,2.121 1.72,3.844 3.86,3.844 2.13,0 3.85,-1.723 3.85,-3.844"
            />
            <path
              id="path668"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.19,414.418 c 0,-2.117 -1.73,-3.859 -3.84,-3.859 -2.15,0 -3.87,1.742 -3.87,3.859 0,2.121 1.72,3.844 3.87,3.844 2.11,0 3.84,-1.723 3.84,-3.844"
            />
            <path
              id="path670"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2421.37,450.762 c 0,-2.153 -1.72,-3.852 -3.85,-3.852 -2.14,0 -3.86,1.699 -3.86,3.852 0,2.109 1.72,3.84 3.86,3.84 2.13,0 3.85,-1.731 3.85,-3.84"
            />
            <path
              id="path672"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.19,450.762 c 0,-2.153 -1.73,-3.852 -3.84,-3.852 -2.15,0 -3.87,1.699 -3.87,3.852 0,2.109 1.72,3.84 3.87,3.84 2.11,0 3.84,-1.731 3.84,-3.84"
            />
            <path
              id="path674"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2422.36,263.5 c 0,-2.141 -1.72,-3.852 -3.86,-3.852 -2.13,0 -3.85,1.711 -3.85,3.852 0,2.109 1.72,3.852 3.85,3.852 2.14,0 3.86,-1.743 3.86,-3.852"
            />
            <path
              id="path676"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.19,263.5 c 0,-2.141 -1.73,-3.852 -3.84,-3.852 -2.15,0 -3.87,1.711 -3.87,3.852 0,2.109 1.72,3.852 3.87,3.852 2.11,0 3.84,-1.743 3.84,-3.852"
            />
            <path
              id="path678"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2394.35,0 h 21.0977 V 186.488 H 2394.35 Z"
            />
            <path
              id="path680"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2403.52,0 h -9.17 v 173.789 l 10.36,-10.641 c -0.74,-2.179 -1.19,-4.808 -1.19,-7.968 0,-11.758 0,-94.6605 0,-155.18"
            />
            <path
              id="path682"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2374.69,223 V 193.988 L 2476.51,89.3984 V 118.391 L 2374.69,223"
            />
            <path
              id="path684"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2476.51,101.961 -16.89,16.43 h 16.89 v -16.43"
            />
            <path
              id="path686"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2976.99,0 h 21.1133 V 126.078 H 2976.99 Z"
            />
            <path
              id="path688"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2990.57,0 h -13.36 v 89.3984 h 13.36 c 0,-17.9101 0,-51.7382 0,-89.3984"
            />
            <path
              id="path690"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2873.31,0 h 21.0625 V 118.391 H 2873.31 Z"
            />
            <path
              id="path692"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2882.45,0 h -9.14 v 89.3984 h 9.22 c -0.05,-0.7382 -0.08,-1.5078 -0.08,-2.3203 0,-10.2695 0,-50.207 0,-87.0781"
            />
            <path
              id="path694"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2494.85,0 h 21.1172 V 126.078 H 2494.85 Z"
            />
            <path
              id="path696"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2508.45,0 h -13.35 v 89.3984 h 13.35 c 0,-17.9101 0,-51.7382 0,-89.3984"
            />
            <path
              id="path698"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 3044.71,137.852 -143.69,94.558 h -538.26 l 93.81,-94.558 h 588.14"
            />
            <path
              id="path700"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2456.57,118.391 h 588.141 v 19.4609 H 2456.57 Z"
            />
            <path
              id="path702"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2362.76,212.949 v 19.461 l 93.81,-94.558 v -19.461 l -93.81,94.558"
            />
            <path
              id="path704"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2476.51,89.3984 h 532.359 v 28.9922 H 2476.51 Z"
            />
            <path
              id="path706"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 3008.87,101.949 h -64.94 v 16.43 h 64.94 v -16.43 m -339.9,0 h -192.46 v 16.43 h 192.46 v -16.43"
            />
            <path
              id="path708"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 3044.71,137.852 v 0 c 0,0 -35,19.226 -100.78,38.777 v 27.543 l 100.78,-66.32 m -588.14,0 -93.81,94.558 h 538.26 l 40.7,-26.781 h -130.75 c -48.35,7.109 -103.66,11.801 -165.42,11.801 -254.26,0 -188.98,-79.578 -188.98,-79.578"
            />
            <path
              id="path710"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2619.88,5.73047 V -21.8008 l 66.7,-67.3398 v 27.5195 l -66.7,67.35157"
            />
            <path
              id="path712"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2943.93,-48.8711 -94.11,61.9219 h -242.28 l 61.43,-61.9219 h 274.96"
            />
            <path
              id="path714"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2607.54,0.300781 V 13.0508 l 61.43,-61.9219 v -12.75 l -61.43,61.921881"
            />
            <path
              id="path716"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2869.66,0 h -66.55 c -16.61,2.03906 -34.65,3.23828 -54.1,3.23828 -12.61,0 -23.51,-0.50781 -32.92,-1.41797 V 13.0508 h 133.73 L 2869.66,0 m -170.75,0 h -78.42 l -12.95,13.0508 h 91.37 V 0"
            />
            <path
              id="path718"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2660.5,208.762 V 98.1914 l 8.47,-5.8828 V 205.629 l -8.47,3.133"
            />
            <path
              id="path720"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2668.97,92.3086 h 274.961 v 113.32 H 2668.97 Z"
            />
            <path
              id="path722"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2943.93,205.629 -8.46,3.133 H 2660.5 l 8.47,-3.133 h 274.96"
            />
            <path
              id="path724"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2903.23,0 h 17.1797 V 180.961 H 2903.23 Z"
            />
            <path
              id="path726"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2920.41,164.602 v 16.359 h 0.16 v -16.313 c -0.05,-0.007 -0.11,-0.027 -0.16,-0.046"
            />
            <path
              id="path728"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2914.29,0 h -10.88 v 180.961 h 17 v -16.359 c -3.5,-1.09 -6.12,-6.454 -6.12,-20.063 0,-14.98 0,-75.1679 0,-144.539"
            />
            <path
              id="path730"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2698.91,0 h 17.1797 V 180.961 H 2698.91 Z"
            />
            <path
              id="path732"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2716.09,164.602 v 16.359 h 0.18 v -16.313 c -0.06,-0.019 -0.12,-0.027 -0.18,-0.046"
            />
            <path
              id="path734"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2709.97,0 h -10.87 v 180.961 h 16.99 v -16.359 c -3.49,-1.102 -6.12,-6.461 -6.12,-20.063 0,-14.98 0,-75.1679 0,-144.539"
            />
            <path
              id="path736"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2711.28,112.781 c 0,-2.672 -2.16,-4.84 -4.83,-4.84 -2.69,0 -4.84,2.168 -4.84,4.84 0,2.66 2.15,4.809 4.84,4.809 2.67,0 4.83,-2.149 4.83,-4.809"
            />
            <path
              id="path738"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2916.73,112.781 c 0,-2.672 -2.16,-4.84 -4.82,-4.84 -2.69,0 -4.84,2.168 -4.84,4.84 0,2.66 2.15,4.809 4.84,4.809 2.66,0 4.82,-2.149 4.82,-4.809"
            />
            <path
              id="path740"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2711.28,158.352 c 0,-2.692 -2.16,-4.84 -4.83,-4.84 -2.69,0 -4.84,2.148 -4.84,4.84 0,2.636 2.15,4.808 4.84,4.808 2.67,0 4.83,-2.172 4.83,-4.808"
            />
            <path
              id="path742"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2916.73,158.352 c 0,-2.692 -2.16,-4.84 -4.82,-4.84 -2.69,0 -4.84,2.148 -4.84,4.84 0,2.636 2.15,4.808 4.84,4.808 2.66,0 4.82,-2.172 4.82,-4.808"
            />
            <path
              id="path744"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1293.28,549.23 h 14.2695 V 715.816 H 1293.28 Z"
            />
            <path
              id="path746"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1307.55,549.23 h -6.21 c 0,20.688 0,133.848 0,145.399 0,2.141 -0.3,3.922 -0.81,5.391 l 7.02,7.21 v -158"
            />
            <path
              id="path748"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1320.85,740.504 v -19.617 l -68.88,-70.746 v 19.609 l 68.88,70.754"
            />
            <path
              id="path750"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1251.97,658.629 v 11.121 h 11.43 l -11.43,-11.121"
            />
            <path
              id="path752"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 899.18,475.762 h 14.2813 v 199.18 H 899.18 Z"
            />
            <path
              id="path754"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 913.305,509.82 h -9.039 c 0,44.789 0,115.399 0,140.321 h 9.039 V 509.82"
            />
            <path
              id="path756"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 969.344,549.23 h 14.2422 V 669.75 H 969.344 Z"
            />
            <path
              id="path758"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 977.406,583.98 c 0,26.372 0,57.122 0,64.59 0,0.551 -0.019,1.071 -0.058,1.571 h 6.238 v -62.09 l -6.18,-4.071"
            />
            <path
              id="path760"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1225.28,475.762 h 14.2891 v 199.18 H 1225.28 Z"
            />
            <path
              id="path762"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1239.4,475.762 h -9.04 c 0,25.187 0,140.929 0,174.379 h 9.04 V 475.762"
            />
            <path
              id="path764"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 867.652,682.922 97.192,63.949 h 364.066 l -63.45,-63.949 H 867.652"
            />
            <path
              id="path766"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 867.652,669.75 h 397.809 v 13.1719 H 867.652 Z"
            />
            <path
              id="path768"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1328.91,733.707 v 13.164 l -63.45,-63.949 V 669.75 l 63.45,63.957"
            />
            <path
              id="path770"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 891.887,650.141 h 360.082 v 19.6094 H 891.887 Z"
            />
            <path
              id="path772"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 1251.97,658.629 H 1121.8 v 11.109 h 130.17 v -11.109 m -316.15,0 h -43.933 v 11.109 h 43.933 v -11.109"
            />
            <path
              id="path774"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1265.46,682.922 c 0,0 44.16,53.824 -127.82,53.824 -41.81,0 -79.25,-3.183 -111.97,-8 h -88.369 l 27.543,18.125 h 364.066 l -63.45,-63.949"
            />
            <path
              id="path776"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 867.652,682.922 v 0 l 68.168,44.851 v -18.632 c -44.492,-13.219 -68.168,-26.219 -68.168,-26.219"
            />
            <path
              id="path778"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 994.297,460.59 h 10.0625 v 78.3711 H 994.297 Z"
            />
            <path
              id="path780"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1004.36,509.82 h -4.372 c 0,8.309 0,14.899 0,17.071 0,0.949 -0.129,1.769 -0.351,2.488 h 4.723 V 509.82"
            />
            <path
              id="path782"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1137.54,460.59 h 10.0703 V 577.559 H 1137.54 Z"
            />
            <path
              id="path784"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1147.61,460.59 h -4.38 c 0,11.012 0,86.828 0,102.461 l 4.38,4.418 V 460.59"
            />
            <path
              id="path786"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 1154.99,593.551 V 574.93 l -45.1,-45.551 v 18.609 l 45.1,45.563"
            />
            <path
              id="path788"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1109.89,540.711 v 7.277 h 7.48 l -7.48,-7.277"
            />
            <path
              id="path790"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 935.82,556.609 999.469,598.5 H 1163.35 L 1121.8,556.609 H 935.82"
            />
            <path
              id="path792"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 935.82,547.988 h 185.98 v 8.62109 H 935.82 Z"
            />
            <path
              id="path794"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1163.35,589.871 v 8.629 l -41.55,-41.891 v -8.621 l 41.55,41.883"
            />
            <path
              id="path796"
              style={{
                fill: "#9a441d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 948.609,529.379 h 161.281 v 18.6094 H 948.609 Z"
            />
            <path
              id="path798"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 948.609,529.379 h 161.281 v 18.6094 H 948.609 Z"
            />
            <path
              id="path800"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1109.89,540.711 h -8.35 v 7.277 h 8.35 v -7.277 m -19.96,0 H 963.359 v 7.277 h 126.571 v -7.277 m -138.2,0 h -3.121 v 7.277 h 3.121 v -7.277"
            />
            <path
              id="path802"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1121.8,556.609 c 0,0 22.62,24.559 -20.26,32.672 v 9.219 h 61.81 l -41.55,-41.891 m -158.441,15.172 v 2.949 l 36.11,23.77 h 90.461 v -7.602 c -6.37,0.622 -13.74,0.961 -22.27,0.961 -47.33,0 -82.312,-10.531 -104.301,-20.078"
            />
            <path
              id="path804"
              style={{
                fill: "#4b4544",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 939.633,559.121 h -0.215 c 1.148,0.758 2.57,1.66 4.266,2.668 l -4.051,-2.668"
            />
            <path
              id="path806"
              style={{
                fill: "#3b3939",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 935.82,556.609 c 0,0 1.203,0.942 3.598,2.512 h 0.215 l -3.813,-2.512"
            />
            <path
              id="path808"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 935.82,556.609 v 0 l 3.813,2.512 4.051,2.668 v 0 l -7.864,-5.18 m 7.864,5.18 8.046,5.289 v -0.816 c -3.144,-1.633 -5.828,-3.153 -8.046,-4.473"
            />
            <path
              id="path810"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 1127.53,730.883 V 656.09 l -5.73,-3.981 v 76.637 l 5.73,2.137"
            />
            <path
              id="path812"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 935.82,652.109 h 185.98 v 76.6367 H 935.82 Z"
            />
            <path
              id="path814"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 935.816,728.758 5.731,2.125 h 185.983 l -5.73,-2.125 H 935.816"
            />
            <path
              id="path816"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 951.73,422.531 h 11.6289 V 712.07 H 951.73 Z"
            />
            <path
              id="path818"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 951.73,701.012 c -0.039,0.008 -0.082,0.019 -0.121,0.027 v 11.031 h 0.121 v -11.058"
            />
            <path
              id="path820"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 963.242,509.82 h -7.363 c 0,72.039 0,161.852 0,177.61 0,9.199 -1.777,12.832 -4.149,13.582 v 11.058 h 11.512 V 509.82"
            />
            <path
              id="path822"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1089.93,422.531 h 11.6094 V 712.07 H 1089.93 Z"
            />
            <path
              id="path824"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1089.93,701.012 c -0.05,0.008 -0.09,0.019 -0.13,0.027 v 11.031 h 0.13 v -11.058"
            />
            <path
              id="path826"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1101.42,422.531 h -6.71 v 40.547 l 6.71,6.902 v -47.449 m 0,87.289 h -7.35 c 0,72.039 0,161.852 0,177.61 0,9.199 -1.78,12.82 -4.14,13.582 v 11.058 h 11.49 V 509.82"
            />
            <path
              id="path828"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1093.19,665.949 c 0,-1.801 1.45,-3.258 3.25,-3.258 1.83,0 3.29,1.457 3.29,3.258 0,1.801 -1.46,3.262 -3.29,3.262 -1.8,0 -3.25,-1.461 -3.25,-3.262"
            />
            <path
              id="path830"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 954.219,665.949 c 0,-1.801 1.465,-3.258 3.261,-3.258 1.825,0 3.282,1.457 3.282,3.258 0,1.801 -1.457,3.262 -3.282,3.262 -1.796,0 -3.261,-1.461 -3.261,-3.262"
            />
            <path
              id="path832"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1093.19,696.77 c 0,-1.809 1.45,-3.27 3.25,-3.27 1.83,0 3.29,1.461 3.29,3.27 0,1.8 -1.46,3.261 -3.29,3.261 -1.8,0 -3.25,-1.461 -3.25,-3.261"
            />
            <path
              id="path834"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 954.219,696.77 c 0,-1.809 1.465,-3.27 3.261,-3.27 1.825,0 3.282,1.461 3.282,3.27 0,1.8 -1.457,3.261 -3.282,3.261 -1.796,0 -3.261,-1.461 -3.261,-3.261"
            />
            <path
              id="path836"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1092.34,537.941 c 0,-1.82 1.47,-3.269 3.27,-3.269 1.81,0 3.27,1.449 3.27,3.269 0,1.778 -1.46,3.25 -3.27,3.25 -1.8,0 -3.27,-1.472 -3.27,-3.25"
            />
            <path
              id="path838"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 954.219,537.941 c 0,-1.82 1.465,-3.269 3.261,-3.269 1.825,0 3.282,1.449 3.282,3.269 0,1.778 -1.457,3.25 -3.282,3.25 -1.796,0 -3.261,-1.472 -3.261,-3.25"
            />
            <path
              id="path840"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1077.9,276.809 h 16.8125 V 473.2 H 1077.9 Z"
            />
            <path
              id="path842"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1094.71,276.809 h -7.31 c 0,24.41 0,157.8 0,171.421 0,2.532 -0.36,4.622 -0.95,6.36 l 8.26,8.488 V 422.531 276.809"
            />
            <path
              id="path844"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1110.39,502.309 v -23.118 l -81.19,-83.402 v 23.109 l 81.19,83.411"
            />
            <path
              id="path846"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1029.2,405.789 v 13.109 h 13.48 l -13.48,-13.109"
            />
            <path
              id="path848"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 613.293,190.199 h 16.8359 V 425.031 H 613.293 Z"
            />
            <path
              id="path850"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 629.949,232.41 h -10.652 c 0,52.891 0,134.371 0,163.379 h 10.652 V 232.41"
            />
            <path
              id="path852"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 696.004,276.809 h 16.7969 v 142.09 H 696.004 Z"
            />
            <path
              id="path854"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 705.512,317.789 c 0,31.09 0,67.332 0,76.141 0,0.648 -0.024,1.269 -0.071,1.859 h 7.36 V 322.59 l -7.289,-4.801"
            />
            <path
              id="path856"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 997.727,190.199 h 16.8438 V 425.031 H 997.727 Z"
            />
            <path
              id="path858"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1014.37,190.199 h -10.65 c 0,29.699 0,166.153 0,205.59 h 10.65 v -205.59"
            />
            <path
              id="path860"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 576.133,434.422 690.699,509.82 H 1119.9 l -74.81,-75.398 H 576.133"
            />
            <path
              id="path862"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 576.133,418.898 h 468.957 v 15.5234 H 576.133 Z"
            />
            <path
              id="path864"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1119.9,494.301 v 15.519 l -74.81,-75.398 v -15.524 l 74.81,75.403"
            />
            <path
              id="path866"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 604.699,395.789 h 424.5 v 23.1094 h -424.5 z"
            />
            <path
              id="path868"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 1029.2,405.789 H 875.727 v 13.102 H 1029.2 v -13.102 m -372.712,0 h -51.789 v 13.102 h 51.789 v -13.102"
            />
            <path
              id="path870"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1045.09,434.422 c 0,0 52.06,63.449 -150.684,63.449 -49.246,0 -93.355,-3.742 -131.906,-9.41 H 658.246 l 32.453,21.359 H 1119.9 l -74.81,-75.398"
            />
            <path
              id="path872"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 576.133,434.422 v 0 l 80.355,52.879 V 465.328 C 604.039,449.75 576.133,434.422 576.133,434.422"
            />
            <path
              id="path874"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 725.422,172.32 h 11.8672 v 92.3984 H 725.422 Z"
            />
            <path
              id="path876"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 737.289,232.41 h -5.16 c 0,8.82 0,15.699 0,18.07 0,1.122 -0.152,2.09 -0.418,2.93 h 5.578 v -21"
            />
            <path
              id="path878"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 894.285,172.32 h 11.8789 V 310.211 H 894.285 Z"
            />
            <path
              id="path880"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 906.164,172.32 h -5.172 c 0,12.981 0,102.34 0,120.789 l 5.172,5.219 V 172.32"
            />
            <path
              id="path882"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 914.871,329.059 v -21.938 l -53.18,-53.711 v 21.949 l 53.18,53.7"
            />
            <path
              id="path884"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 861.691,266.77 v 8.589 h 8.825 l -8.825,-8.589"
            />
            <path
              id="path886"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 656.488,285.52 75.039,49.39 H 924.723 L 875.727,285.52 H 656.488"
            />
            <path
              id="path888"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 656.488,275.359 h 219.238 v 10.1602 H 656.488 Z"
            />
            <path
              id="path890"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 924.723,324.738 v 10.172 l -48.996,-49.39 v -10.161 l 48.996,49.379"
            />
            <path
              id="path892"
              style={{
                fill: "#9a441d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 671.566,253.41 h 190.125 v 21.9492 H 671.566 Z"
            />
            <path
              id="path894"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 671.566,253.41 h 190.125 v 21.9492 H 671.566 Z"
            />
            <path
              id="path896"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 861.691,266.77 h -9.832 v 8.589 h 9.832 v -8.589 m -23.523,0 H 688.949 v 8.589 h 149.219 v -8.589 m -162.926,0 h -3.676 v 8.589 h 3.676 v -8.589"
            />
            <path
              id="path898"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 875.727,285.52 c 0,0 26.671,28.949 -23.868,38.531 v 10.859 h 72.864 l -48.996,-49.39 m -186.778,17.878 v 3.493 l 42.578,28.019 h 106.641 v -8.961 c -7.5,0.731 -16.195,1.129 -26.246,1.129 -55.813,0 -97.051,-12.418 -122.973,-23.68"
            />
            <path
              id="path900"
              style={{
                fill: "#4b4544",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 662.734,289.641 h -0.218 c 0.972,0.609 2.058,1.281 3.261,2 l -3.043,-2"
            />
            <path
              id="path902"
              style={{
                fill: "#3b3939",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 656.488,285.52 c 0,0 2.02,1.582 6.028,4.121 h 0.218 l -6.246,-4.121"
            />
            <path
              id="path904"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 656.488,285.52 v 0 l 6.246,4.121 3.043,2 v 0 l -9.289,-6.121 m 9.289,6.121 9.465,6.23 v -0.973 c -3.695,-1.918 -6.855,-3.699 -9.465,-5.257"
            />
            <path
              id="path906"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 882.488,490.961 v -88.172 l -6.761,-4.687 v 90.359 l 6.761,2.5"
            />
            <path
              id="path908"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 656.488,398.102 h 219.238 v 90.3594 H 656.488 Z"
            />
            <path
              id="path910"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 656.488,488.469 6.75,2.492 h 219.25 l -6.761,-2.492 H 656.488"
            />
            <path
              id="path912"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 675.242,127.449 h 13.707 v 341.34 h -13.707 z"
            />
            <path
              id="path914"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 675.242,455.75 c -0.043,0.012 -0.09,0.031 -0.133,0.039 v 13 h 0.133 V 455.75"
            />
            <path
              id="path916"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 688.801,232.41 h -8.664 c 0,84.578 0,188.91 0,207.34 0,10.859 -2.094,15.121 -4.895,16 v 13.039 h 13.559 V 232.41"
            />
            <path
              id="path918"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 838.168,127.449 h 13.6914 v 341.34 H 838.168 Z"
            />
            <path
              id="path920"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 838.168,455.738 c -0.051,0.024 -0.098,0.032 -0.148,0.051 v 13 h 0.148 v -13.051"
            />
            <path
              id="path922"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 847.934,127.449 h -4.887 c 0,4.692 0,11.391 0,19.66 l 4.887,5.02 v -24.68 m 3.777,104.961 h -8.664 c 0,84.578 0,188.91 0,207.34 0,10.84 -2.09,15.109 -4.879,15.988 v 13.051 h 13.543 V 232.41"
            />
            <path
              id="path924"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 842,414.418 c 0,-2.117 1.73,-3.859 3.848,-3.859 2.152,0 3.867,1.742 3.867,3.859 0,2.121 -1.715,3.844 -3.867,3.844 -2.118,0 -3.848,-1.723 -3.848,-3.844"
            />
            <path
              id="path926"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 678.176,414.418 c 0,-2.117 1.73,-3.859 3.844,-3.859 2.152,0 3.871,1.742 3.871,3.859 0,2.121 -1.719,3.844 -3.871,3.844 -2.114,0 -3.844,-1.723 -3.844,-3.844"
            />
            <path
              id="path928"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 842,450.762 c 0,-2.153 1.73,-3.852 3.848,-3.852 2.152,0 3.867,1.699 3.867,3.852 0,2.109 -1.715,3.84 -3.867,3.84 -2.118,0 -3.848,-1.731 -3.848,-3.84"
            />
            <path
              id="path930"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 678.176,450.762 c 0,-2.153 1.73,-3.852 3.844,-3.852 2.152,0 3.871,1.699 3.871,3.852 0,2.109 -1.719,3.84 -3.871,3.84 -2.114,0 -3.844,-1.731 -3.844,-3.84"
            />
            <path
              id="path932"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 841,263.5 c 0,-2.141 1.734,-3.852 3.855,-3.852 2.157,0 3.864,1.711 3.864,3.852 0,2.109 -1.707,3.852 -3.864,3.852 -2.121,0 -3.855,-1.743 -3.855,-3.852"
            />
            <path
              id="path934"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 678.176,263.5 c 0,-2.141 1.73,-3.852 3.844,-3.852 2.152,0 3.871,1.711 3.871,3.852 0,2.109 -1.719,3.852 -3.871,3.852 -2.114,0 -3.844,-1.743 -3.844,-3.852"
            />
            <path
              id="path936"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 847.934,0 h 21.0781 V 186.488 H 847.934 Z"
            />
            <path
              id="path938"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 869.012,0 h -9.16 c 0,60.5195 0,143.422 0,155.18 0,3.16 -0.446,5.789 -1.192,7.968 l 10.352,10.633 V 146.289 77.5508 34.6406 0"
            />
            <path
              id="path940"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 888.684,223 V 193.988 L 786.855,89.3984 V 118.391 L 888.684,223"
            />
            <path
              id="path942"
              style={{
                fill: "#272626",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 786.855,101.961 v 16.43 h 16.887 l -16.887,-16.43"
            />
            <path
              id="path944"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 265.266,0 h 21.1133 V 126.078 H 265.266 Z"
            />
            <path
              id="path946"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 286.156,0 h -13.363 c 0,37.6602 0,71.4883 0,89.3984 h 13.363 V 0"
            />
            <path
              id="path948"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 368.996,0 h 21.0703 V 118.391 H 368.996 Z"
            />
            <path
              id="path950"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 390.066,0 h -9.152 c 0,36.8711 0,76.8086 0,87.0781 0,0.8125 -0.027,1.5821 -0.082,2.3203 h 9.234 V 77.5508 34.6406 0"
            />
            <path
              id="path952"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 747.395,0 h 21.1289 V 126.078 H 747.395 Z"
            />
            <path
              id="path954"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 768.273,0 h -13.351 c 0,37.6602 0,71.4883 0,89.3984 h 13.351 V 0"
            />
            <path
              id="path956"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 218.664,137.852 362.348,232.41 H 900.613 L 806.805,137.852 H 218.664"
            />
            <path
              id="path958"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 218.664,118.391 h 588.141 v 19.4609 H 218.664 Z"
            />
            <path
              id="path960"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 900.613,212.949 v 19.461 l -93.808,-94.558 v -19.461 l 93.808,94.558"
            />
            <path
              id="path962"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 254.5,89.3984 h 532.355 v 28.9922 H 254.5 Z"
            />
            <path
              id="path964"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 786.855,101.949 H 594.398 v 16.43 h 192.457 v -16.43 m -467.414,0 H 254.5 v 16.43 h 64.941 v -16.43"
            />
            <path
              id="path966"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 806.805,137.852 c 0,0 65.285,79.578 -188.981,79.578 -61.761,0 -117.074,-4.692 -165.422,-11.801 H 321.648 l 40.7,26.781 h 538.265 l -93.808,-94.558"
            />
            <path
              id="path968"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 218.664,137.852 v 0 l 100.777,66.32 V 176.621 C 253.664,157.07 218.664,137.852 218.664,137.852"
            />
            <path
              id="path970"
              style={{
                fill: "#414042",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 643.488,5.73047 V -21.8008 l -66.699,-67.3398 v 27.5195 l 66.699,67.35157"
            />
            <path
              id="path972"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 319.441,-48.8711 94.102,61.9219 H 655.84 L 594.398,-48.8711 H 319.441"
            />
            <path
              id="path974"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 655.84,0.300781 V 13.0508 l -61.442,-61.9219 v -12.75 L 655.84,0.300781"
            />
            <path
              id="path976"
              style={{
                fill: "#ddd5ce",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 642.887,0 H 564.461 V 13.0508 H 655.84 L 642.887,0 M 460.27,0 h -66.563 l 19.836,13.0508 H 547.281 V 1.82031 C 537.879,2.73047 526.973,3.23828 514.367,3.23828 494.918,3.23828 476.879,2.03906 460.27,0"
            />
            <path
              id="path978"
              style={{
                fill: "#e3dad3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 602.867,208.762 V 98.1914 l -8.469,-5.8828 V 205.629 l 8.469,3.133"
            />
            <path
              id="path980"
              style={{
                fill: "#d2c6bd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 319.441,92.3086 h 274.957 v 113.32 H 319.441 Z"
            />
            <path
              id="path982"
              style={{
                fill: "#e7e1db",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 319.441,205.629 8.465,3.133 h 274.961 l -8.469,-3.133 H 319.441"
            />
            <path
              id="path984"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 342.961,0 h 17.1797 V 180.961 H 342.961 Z"
            />
            <path
              id="path986"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 342.961,164.602 c -0.055,0.019 -0.113,0.027 -0.172,0.046 v 16.313 h 0.172 v -16.359"
            />
            <path
              id="path988"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 359.969,0 H 349.09 c 0,69.3711 0,129.559 0,144.539 0,13.609 -2.617,18.961 -6.129,20.063 v 16.359 h 17.008 V 0"
            />
            <path
              id="path990"
              style={{
                fill: "#21201f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 547.281,0 h 17.1797 V 180.961 H 547.281 Z"
            />
            <path
              id="path992"
              style={{
                fill: "#4a4644",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 547.281,164.602 c -0.054,0.019 -0.109,0.027 -0.168,0.046 v 16.313 h 0.168 v -16.359"
            />
            <path
              id="path994"
              style={{
                fill: "#151412",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 564.27,0 h -10.864 c 0,69.3711 0,129.559 0,144.539 0,13.609 -2.625,18.961 -6.125,20.063 v 16.359 H 564.27 V 0"
            />
            <path
              id="path996"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 552.094,112.781 c 0,-2.672 2.168,-4.84 4.828,-4.84 2.695,0 4.848,2.168 4.848,4.84 0,2.66 -2.153,4.809 -4.848,4.809 -2.66,0 -4.828,-2.149 -4.828,-4.809"
            />
            <path
              id="path998"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 346.645,112.781 c 0,-2.672 2.168,-4.84 4.82,-4.84 2.687,0 4.844,2.168 4.844,4.84 0,2.66 -2.157,4.809 -4.844,4.809 -2.652,0 -4.82,-2.149 -4.82,-4.809"
            />
            <path
              id="path1000"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 552.094,158.352 c 0,-2.692 2.168,-4.84 4.828,-4.84 2.695,0 4.848,2.148 4.848,4.84 0,2.636 -2.153,4.808 -4.848,4.808 -2.66,0 -4.828,-2.172 -4.828,-4.808"
            />
            <path
              id="path1002"
              style={{
                fill: "#343434",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 346.645,158.352 c 0,-2.692 2.168,-4.84 4.82,-4.84 2.687,0 4.844,2.148 4.844,4.84 0,2.636 -2.157,4.808 -4.844,4.808 -2.652,0 -4.82,-2.172 -4.82,-4.808"
            />
            <g id="g1004">
              <g clipPath="url(#clipPath1010)" id="g1006">
                <path
                  id="path1022"
                  style={{
                    fill: "url(#linearGradient1020)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 2036.93,1039.06 c -29.52,0 -53.47,1.23 -53.47,2.73 0,0.53 3,1.03 8.2,1.46 0.76,-1.02 1.97,-1.68 3.34,-1.68 h 83.21 c 1.39,0 2.62,0.68 3.37,1.73 5.59,-0.44 8.84,-0.95 8.84,-1.51 0,-1.5 -23.95,-2.73 -53.49,-2.73"
                />
              </g>
            </g>
            <g id="g1024">
              <g clipPath="url(#clipPath1030)" id="g1026">
                <path
                  id="path1046"
                  style={{
                    fill: "url(#linearGradient1044)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 2082.33,1045.75 c 0,-2.28 -1.84,-4.13 -4.12,-4.13 H 1995 c -2.28,0 -4.13,1.85 -4.13,4.13 0,2.29 1.85,4.13 4.13,4.13 h 83.21 c 2.28,0 4.12,-1.84 4.12,-4.13"
                />
              </g>
            </g>
            <path
              id="path1048"
              style={{
                fill: "#d27921",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1995,1049.84 c -2.25,0 -4.09,-1.83 -4.09,-4.09 0,-2.25 1.84,-4.08 4.09,-4.08 h 83.21 c 2.25,0 4.07,1.83 4.07,4.08 0,2.26 -1.82,4.09 -4.07,4.09 H 1995 m 83.21,-8.27 H 1995 c -2.31,0 -4.18,1.88 -4.18,4.18 0,2.31 1.87,4.18 4.18,4.18 h 83.21 c 2.31,0 4.17,-1.87 4.17,-4.18 0,-2.3 -1.86,-4.18 -4.17,-4.18"
            />
            <g id="g1050">
              <g clipPath="url(#clipPath1056)" id="g1052">
                <path
                  id="path1072"
                  style={{
                    fill: "url(#linearGradient1070)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 2030.6,1049.31 h -12.38 c -4.21,0.14 -8.56,0.19 -12.57,0.19 -2,0 -3.9,-0.02 -5.67,-0.03 v 0.37 h 74.07 v -0.03 c -1.21,-0.05 -2.49,-0.11 -3.87,-0.19 -3.69,-0.08 -7.93,-0.1 -12.27,-0.1 -5.93,0 -12.05,0.05 -17.25,0.1 -5,0.04 -9.16,0.11 -11.5,0.11 -2.34,0 -2.85,-0.07 -0.56,-0.29 0.63,-0.05 1.3,-0.09 2,-0.13 m -37.52,0.05 v 0 l 1.72,0.47 c 0.07,0 0.13,0.01 0.2,0.01 h 0.66 v -0.43 c -0.95,-0.02 -1.81,-0.04 -2.58,-0.05"
                />
              </g>
            </g>
            <path
              id="path1074"
              style={{
                fill: "#ca5b1e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2080.27,1049.31 h -0.02 l -0.04,0.02 0.06,-0.02 m -87.19,0.05 v 0 0 0 m 1.72,0.47 0.2,0.05 h 0.66 v -0.04 H 1995 c -0.07,0 -0.13,-0.01 -0.2,-0.01 m 79.25,0.01 h -74.07 v 0.04 h 74.07 v -0.04"
            />
            <g id="g1076">
              <g clipPath="url(#clipPath1082)" id="g1078">
                <path
                  id="path1098"
                  style={{
                    fill: "url(#linearGradient1096)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 2080.9,1042.69 h -88.6 c -0.85,0.75 -1.39,1.85 -1.39,3.06 0,0.08 0,0.15 0.01,0.22 v 0.02 c 0.46,-0.01 0.92,-0.01 1.37,-0.02 0.92,-0.51 2.36,-0.71 3.53,-0.78 0.32,-0.91 1.06,-1.51 2,-1.51 0.28,0 0.56,0.07 0.81,0.18 v 0 c 0,0 0.01,0.01 0.01,0.01 0.51,0.24 0.92,0.7 1.15,1.29 h 74.44 c 0.02,-0.06 0.04,-0.11 0.06,-0.17 0.02,-0.04 0.04,-0.07 0.06,-0.11 0.04,-0.09 0.09,-0.17 0.14,-0.25 0.01,-0.02 0.03,-0.05 0.05,-0.07 0.21,-0.31 0.47,-0.55 0.77,-0.7 v 0.03 c 0.27,-0.14 0.57,-0.21 0.9,-0.21 0.86,0 1.62,0.59 1.96,1.46 0.37,-0.03 0.76,-0.07 1.16,-0.07 1.05,0 2.11,0.21 2.65,0.95 l 0.08,0.17 c 0.07,0.01 0.13,0.01 0.2,0.01 0.01,-0.15 0.02,-0.3 0.02,-0.45 0,-1.21 -0.53,-2.31 -1.38,-3.06 m -89.33,4.13 c -0.16,0.01 -0.32,0.01 -0.47,0.02 l 0.06,0.32 c 0.03,0.07 0.05,0.14 0.08,0.21 l 0.33,-0.55"
                />
              </g>
            </g>
            <path
              id="path1100"
              style={{
                fill: "#cd661d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1994.95,1041.62 c -0.01,0 -0.02,0.01 -0.03,0.01 0.01,0 0.02,-0.01 0.03,-0.01 m 83.31,0 c 0.01,0 0.02,0.01 0.03,0.01 -0.01,0 -0.02,-0.01 -0.03,-0.01 m -83.36,0.01 c -0.02,0 -0.03,0 -0.04,0 0.01,0 0.02,0 0.04,0 m 83.41,0 c 0.02,0 0.03,0 0.04,0 -0.01,0 -0.02,0 -0.04,0 m -83.46,0 c -0.02,0 -0.03,0 -0.05,0 0.02,0 0.03,0 0.05,0 m 83.51,0 c 0.02,0 0.03,0 0.05,0 -0.02,0 -0.03,0 -0.05,0 m -83.56,0 c -0.8,0.03 -1.54,0.3 -2.16,0.74 0.62,-0.43 1.36,-0.71 2.16,-0.74 m 83.61,0 c 0.85,0.04 1.63,0.34 2.28,0.82 -0.64,-0.48 -1.43,-0.78 -2.28,-0.82 m 2.56,1.06 h -0.07 c 0.85,0.75 1.38,1.85 1.38,3.06 0,0.15 -0.01,0.3 -0.02,0.45 0.01,0 0.02,0 0.03,0 l 0.04,-0.45 c 0,-1.21 -0.52,-2.31 -1.36,-3.06 m -88.67,0 h -0.06 c -0.84,0.75 -1.37,1.85 -1.37,3.06 l 0.05,0.22 c -0.01,-0.07 -0.01,-0.14 -0.01,-0.22 0,-1.21 0.54,-2.31 1.39,-3.06 m -1.14,4.47 0.05,0.24 c 0.01,0 0.01,0 0.01,0 l 0.02,-0.03 c -0.03,-0.07 -0.05,-0.14 -0.08,-0.21"
            />
            <path
              id="path1102"
              style={{
                fill: "#ca5b1e",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2078.21,1041.62 H 1995 c -0.02,0 -0.04,0 -0.05,0 0.01,0 0.03,0 0.05,0 h 83.21 c 0.02,0 0.04,0 0.05,0 -0.01,0 -0.03,0 -0.05,0 m 0.08,0.01 c 0.01,0 0.01,0 0.02,0 -0.01,0 -0.01,0 -0.02,0 m -83.37,0 c -0.01,0 -0.02,0 -0.02,0 0,0 0.01,0 0.02,0 m 83.43,0 h 0.01 -0.01 m -83.49,0 h -0.01 0.01 m 83.55,0 v 0 0 m -83.61,0 v 0 0 m -2.16,0.74 c -0.14,0.09 -0.28,0.2 -0.41,0.32 h 0.01 c 0.12,-0.12 0.26,-0.23 0.4,-0.32 m 88.05,0.08 c 0.09,0.07 0.19,0.16 0.28,0.24 h 0.01 c -0.1,-0.08 -0.19,-0.17 -0.29,-0.24"
            />
            <g id="g1104">
              <g clipPath="url(#clipPath1110)" id="g1106">
                <path
                  id="path1126"
                  style={{
                    fill: "url(#linearGradient1124)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="M 2078.21,1041.67 H 1995 c -1.03,0 -1.98,0.38 -2.7,1.02 h 88.6 c -0.72,-0.64 -1.66,-1.02 -2.69,-1.02"
                />
              </g>
            </g>
            <path
              id="path1128"
              style={{
                fill: "#c64d1f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2078.21,1041.62 H 1995 c -0.02,0 -0.04,0 -0.05,0 -0.01,0 -0.02,0.01 -0.03,0.01 -0.01,0 -0.02,0 -0.02,0 -0.02,0 -0.03,0 -0.04,0 h -0.01 c -0.02,0 -0.03,0 -0.05,0 v 0 c -0.8,0.03 -1.54,0.31 -2.16,0.74 -0.14,0.09 -0.28,0.2 -0.4,0.32 h 0.06 c 0.72,-0.64 1.67,-1.02 2.7,-1.02 h 83.21 c 1.03,0 1.97,0.38 2.69,1.02 h 0.07 c -0.09,-0.08 -0.19,-0.17 -0.28,-0.24 -0.65,-0.48 -1.43,-0.78 -2.28,-0.82 v 0 c -0.02,0 -0.03,0 -0.05,0 h -0.01 c -0.01,0 -0.02,0 -0.04,0 -0.01,0 -0.01,0 -0.02,0 -0.01,0 -0.02,-0.01 -0.03,-0.01 -0.01,0 -0.03,0 -0.05,0"
            />
            <g id="g1130">
              <g clipPath="url(#clipPath1136)" id="g1132">
                <path
                  id="path1152"
                  style={{
                    fill: "url(#linearGradient1150)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 2009.73,1047.13 c -3.21,0 -6.59,0 -9.75,0.04 v 0.51 c 1,-0.04 2.2,-0.06 3.51,-0.07 1.32,-0.02 2.82,-0.03 4.23,-0.03 4.1,0 7.39,0.08 2.76,0.38 -2.28,0.16 -4.55,0.2 -6.51,0.2 -1.59,0 -2.97,-0.02 -3.99,-0.06 v 0.41 c 1.59,0.04 3.28,0.06 5.02,0.06 2.62,0 5.33,-0.05 7.97,-0.2 10.76,-0.57 15.36,-1.24 9.46,-1.24 -0.21,0 -0.42,0 -0.65,0 -0.74,0.01 -1.61,0.01 -2.59,0.01 -1.29,0 -2.76,-0.01 -4.34,-0.01 -1.61,0 -3.34,0 -5.12,0 m -14.07,0.12 c -1.62,0.04 -3.11,0.09 -4.4,0.15 0.12,0.27 0.27,0.53 0.44,0.76 1.06,0.07 2.41,0.14 3.96,0.2 v -1.11"
                />
              </g>
            </g>
            <path
              id="path1154"
              style={{
                fill: "#dd9430",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1991.26,1047.4 c -0.01,0 -0.02,0 -0.04,0 l -0.01,0.02 v -0.02 c -0.01,0 -0.01,0 -0.02,0 l 0.35,0.62 0.1,0.14 c 0.02,0 0.04,0 0.06,0 -0.17,-0.23 -0.32,-0.49 -0.44,-0.76"
            />
            <path
              id="path1156"
              style={{
                fill: "#d98427",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1991.22,1047.4 c 0,0 0,0 -0.01,0 v 0.02 l 0.01,-0.02"
            />
            <path
              id="path1158"
              style={{
                fill: "#ddd5c4",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1990.83,1045.99 c -0.02,0 -0.04,0 -0.05,0 l 0.08,0.38 c -0.01,-0.12 -0.03,-0.25 -0.03,-0.38"
            />
            <g id="g1160">
              <g clipPath="url(#clipPath1166)" id="g1162">
                <path
                  id="path1182"
                  style={{
                    fill: "url(#linearGradient1180)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 2017.81,1045.75 c -4.74,0 -10.61,0.04 -17.85,0.12 0.01,0.11 0.02,0.22 0.02,0.33 v 0.41 c 4.59,-0.08 8.97,-0.11 12.96,-0.11 11.4,0 19.62,0.27 20.55,0.39 1.56,0.2 1.74,0.51 -13.01,1.65 -4.92,0.37 -10.07,0.5 -14.75,0.5 -2.02,0 -3.96,-0.02 -5.75,-0.06 v 0.33 h 18.24 c 2.59,-0.08 5.13,-0.2 7.5,-0.36 8.9,-0.62 18.63,-0.9 29.18,-0.9 6.11,0 12.49,0.09 19.15,0.27 v -0.69 c -4.65,-0.15 -10.36,-0.31 -15.9,-0.37 -1.46,-0.01 -2.82,-0.02 -4.08,-0.02 -3.41,0 -6.13,0.05 -8.32,0.09 -2.19,0.05 -3.85,0.09 -5.16,0.09 -1.24,0 -2.16,-0.04 -2.9,-0.16 -2.08,-0.33 7.17,-1.51 -19.88,-1.51 m -22.14,0.18 c -1.1,0.01 -2.23,0.02 -3.38,0.04 -0.13,0.08 -0.26,0.16 -0.36,0.24 l -0.36,0.61 c 1.37,-0.04 2.74,-0.08 4.09,-0.11 v -0.51 c 0,-0.09 0,-0.18 0.01,-0.27 m -4.75,0.06 v 0 c 0.02,0.29 0.06,0.58 0.14,0.85 0.01,0 0.02,0 0.04,0 l -0.18,-0.85 m 87.45,1.79 v 0.67 c 0.97,0.03 1.9,0.07 2.81,0.1 0.18,-0.2 0.35,-0.41 0.49,-0.64 -0.9,-0.03 -2.02,-0.08 -3.3,-0.13 m -86.17,0.94 c 0.24,0.23 0.51,0.43 0.8,0.59 h 2.66 v -0.45 c -1.32,-0.04 -2.48,-0.09 -3.46,-0.14"
                />
              </g>
            </g>
            <path
              id="path1184"
              style={{
                fill: "#dd9430",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1990.92,1045.99 c -0.03,0 -0.06,0 -0.09,0 0,0.13 0.02,0.26 0.03,0.38 l 0.11,0.47 c 0.03,0 0.06,0 0.09,0 -0.08,-0.27 -0.12,-0.56 -0.14,-0.85 m 90.75,1.92 c -0.14,0.23 -0.31,0.44 -0.49,0.64 0.02,0 0.03,0 0.05,0 l 0.48,-0.64 c -0.02,0 -0.03,0 -0.04,0 m -89.58,0.81 0.01,0.01 0.34,0.3 0.13,0.1 0.31,0.22 c 0.06,0 0.13,0.01 0.2,0.01 l -0.16,-0.05 h 0.08 c -0.29,-0.16 -0.56,-0.36 -0.8,-0.59 -0.04,0 -0.08,0 -0.11,0"
            />
            <g id="g1186">
              <g clipPath="url(#clipPath1192)" id="g1188">
                <path
                  id="path1208"
                  style={{
                    fill: "url(#linearGradient1206)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 2018.22,1049.31 h -18.24 v 0.16 c 1.77,0.01 3.67,0.03 5.67,0.03 4.01,0 8.36,-0.05 12.57,-0.19 m -22.56,0 H 1993 c 0.03,0.02 0.05,0.03 0.08,0.05 0.77,0.01 1.63,0.03 2.58,0.05 v -0.1"
                />
              </g>
            </g>
            <path
              id="path1210"
              style={{
                fill: "#d77920",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1993,1049.31 h -0.08 l 0.16,0.05 v 0 c -0.03,-0.02 -0.05,-0.03 -0.08,-0.05"
            />
            <g id="g1212">
              <g clipPath="url(#clipPath1218)" id="g1214">
                <path
                  id="path1234"
                  style={{
                    fill: "url(#linearGradient1232)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1992.29,1045.97 c -0.45,0.01 -0.91,0.01 -1.37,0.02 l 0.18,0.85 c 0.15,-0.01 0.31,-0.01 0.47,-0.02 l 0.36,-0.61 c 0.1,-0.08 0.23,-0.16 0.36,-0.24"
                />
              </g>
            </g>
            <path
              id="path1236"
              style={{
                fill: "#3c3c3d",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2339.28,1035.91 c 0,-2.91 -1.21,-5.25 -2.68,-5.25 h -372.92 c -1.48,0 -2.68,2.34 -2.68,5.25 v 3.15 c 0,2.9 1.2,5.26 2.68,5.26 h 372.92 c 1.47,0 2.68,-2.36 2.68,-5.26 v -3.15"
            />
            <path
              id="path1238"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1541.13,1482.03 h -212.69 l -50.98,65.03 h 246.67 l 17,-65.03"
            />
            <path
              id="path1240"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1328.44,1482.03 h -5.18 l -50.98,65.03 h 5.18 l 50.98,-65.03"
            />
            <path
              id="path1242"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1542.59,1482.03 h -1.46 l -17,65.03 h 1.46 l 17,-65.03"
            />
            <path
              id="path1244"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1525.59,1547.06 h -253.31 l -2.27,2.89 h 254.83 l 0.75,-2.89"
            />
            <path
              id="path1246"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1543.35,1479.14 h -217.82 l -2.27,2.89 h 219.33 l 0.76,-2.89"
            />
            <path
              id="path1248"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1994.92,1482.03 h -212.69 l 17,65.03 h 246.67 l -50.98,-65.03"
            />
            <path
              id="path1250"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1782.23,1482.03 h -4.5 l 17,65.03 h 4.5 l -17,-65.03"
            />
            <path
              id="path1252"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1997.07,1482.03 h -2.15 l 50.98,65.03 h 2.14 l -50.97,-65.03"
            />
            <path
              id="path1254"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2048.04,1547.06 h -253.31 l 0.76,2.89 h 254.82 l -2.27,-2.89"
            />
            <path
              id="path1256"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1994.8,1479.14 h -217.82 l 0.75,2.89 h 219.34 l -2.27,-2.89"
            />
            <path
              id="path1258"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 1081.82,1482.03 H 878.402 l -118.964,65.03 h 237.41 l 84.972,-65.03"
            />
            <path
              id="path1260"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 878.402,1482.03 h -7.527 l -118.949,65.03 h 7.512 l 118.964,-65.03"
            />
            <path
              id="path1262"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1085.05,1482.03 h -3.23 l -84.972,65.03 h 3.232 l 84.97,-65.03"
            />
            <path
              id="path1264"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 1000.08,1547.06 H 751.926 l -5.293,2.89 h 249.668 l 3.779,-2.89"
            />
            <path
              id="path1266"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 1088.82,1479.14 H 876.156 l -5.281,2.89 h 214.175 l 3.77,-2.89"
            />
            <path
              id="path1268"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1183.81,1403.98 h -162.63 l -118.996,65.05 h 196.626 l 85,-65.05"
            />
            <path
              id="path1270"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1021.18,1403.98 h -7.53 l -118.982,65.05 h 7.516 l 118.996,-65.05"
            />
            <path
              id="path1272"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1187.04,1403.98 h -3.23 l -85,65.05 h 3.23 l 85,-65.05"
            />
            <path
              id="path1274"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 1102.04,1469.03 H 894.668 l -5.281,2.88 h 208.883 l 3.77,-2.88"
            />
            <path
              id="path1276"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1190.8,1401.11 h -171.89 l -5.26,2.87 h 173.39 l 3.76,-2.87"
            />
            <path
              id="path1278"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1561.53,1403.98 h -171.9 l -50.99,65.05 h 205.89 l 17,-65.05"
            />
            <path
              id="path1280"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1389.63,1403.98 h -5.18 l -51,65.05 h 5.19 l 50.99,-65.05"
            />
            <path
              id="path1282"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1562.99,1403.98 h -1.46 l -17,65.05 h 1.46 l 17,-65.05"
            />
            <path
              id="path1284"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1545.99,1469.03 h -212.54 l -2.26,2.88 h 214.05 l 0.75,-2.88"
            />
            <path
              id="path1286"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1563.74,1401.11 h -177.03 l -2.26,2.87 h 178.54 l 0.75,-2.87"
            />
            <path
              id="path1288"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1933.73,1403.98 h -171.89 l 17,65.05 h 205.88 l -50.99,-65.05"
            />
            <path
              id="path1290"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1761.84,1403.98 h -4.5 l 17,65.05 h 4.5 l -17,-65.05"
            />
            <path
              id="path1292"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1935.87,1403.98 h -2.14 l 50.99,65.05 h 2.15 l -51,-65.05"
            />
            <path
              id="path1294"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1986.87,1469.03 h -212.53 l 0.75,2.88 h 214.04 l -2.26,-2.88"
            />
            <path
              id="path1296"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1933.62,1401.11 h -177.04 l 0.76,2.87 h 178.53 l -2.25,-2.87"
            />
            <path
              id="path1298"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2302.19,1403.98 h -162.63 l 84.99,65.05 h 196.63 l -118.99,-65.05"
            />
            <path
              id="path1300"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2139.56,1403.98 h -6.27 l 85,65.05 h 6.26 l -84.99,-65.05"
            />
            <path
              id="path1302"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2306.68,1403.98 h -4.49 l 118.99,65.05 h 4.48 l -118.98,-65.05"
            />
            <path
              id="path1304"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2425.66,1469.03 h -207.37 l 3.77,2.88 h 208.89 l -5.29,-2.88"
            />
            <path
              id="path1306"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2301.41,1401.11 h -171.88 l 3.76,2.87 h 173.39 l -5.27,-2.87"
            />
            <path
              id="path1308"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2444.96,1482.03 h -203.42 l 84.98,65.03 h 237.41 l -118.97,-65.03"
            />
            <path
              id="path1310"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2241.54,1482.03 h -6.26 l 84.96,65.03 h 6.28 l -84.98,-65.03"
            />
            <path
              id="path1312"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2449.45,1482.03 h -4.49 l 118.97,65.03 h 4.48 l -118.96,-65.03"
            />
            <path
              id="path1314"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2568.41,1547.06 h -248.17 l 3.78,2.89 h 249.68 l -5.29,-2.89"
            />
            <path
              id="path1316"
              style={{
                fill: "#fffefd",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2444.17,1479.14 h -212.66 l 3.77,2.89 h 214.17 l -5.28,-2.89"
            />
            <g id="g1318">
              <g clipPath="url(#clipPath1324)" id="g1320">
                <path
                  id="path1332"
                  style={{
                    fill: "url(#radialGradient1330)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1603.95,1203.71 c -1.04,0 -2.04,0.05 -3.01,0.13 l -0.65,0.05 -1.83,0.18 -1.82,0.3 -1.8,0.39 -1.78,0.47 -1.76,0.56 -1.72,0.65 -0.19,0.26 c -1.13,0.49 -2.08,0.96 -2.83,1.36 l -1.69,0.96 -0.58,0.33 -0.57,0.37 -1.61,1.07 c -1.4,0.98 -3.4,2.5 -5.58,4.83 -2.17,2.32 -4.62,5.38 -6.56,9.39 -1.96,4.01 -3.5,8.92 -3.77,14.44 -0.13,2.75 0.05,5.63 0.58,8.57 0.53,2.93 1.52,5.87 2.85,8.73 2.67,5.76 7.08,11.04 12.79,14.88 5.69,3.82 12.64,6.2 19.83,6.44 0.5,0.02 1.01,0.04 1.52,0.04 6.69,0 13.47,-1.85 19.32,-5.34 1.55,-0.96 3.07,-2.01 4.49,-3.16 1.41,-1.17 2.76,-2.41 3.99,-3.78 2.45,-2.72 4.49,-5.78 6.05,-9.06 3.1,-6.56 4.16,-13.91 3.27,-20.77 -0.41,-3.45 -1.38,-6.75 -2.68,-9.81 l -1.06,-2.25 -0.57,-1.09 -0.61,-1.06 -1.29,-2.04 -1.43,-1.94 c -1.97,-2.48 -4.15,-4.69 -6.53,-6.49 -2.38,-1.81 -4.88,-3.27 -7.39,-4.41 -5.05,-2.25 -10.12,-3.11 -14.57,-3.19 -0.27,-0.01 -0.54,-0.01 -0.81,-0.01 m -1.05,9.02 -1.38,-1.37 1.38,-1.4 1.39,1.4 -1.39,1.37 m 15.93,2.18 -0.64,-0.16 -0.58,-1.86 1.22,-0.75 0.64,0.16 0.58,1.87 -1.22,0.74 m -30.75,0.94 -1.19,-0.68 0.48,-1.89 0.7,-0.2 1.19,0.67 -0.47,1.89 -0.71,0.21 m 43.19,10.76 -1.19,-0.67 0.47,-1.9 0.72,-0.2 1.18,0.67 -0.48,1.9 -0.7,0.2 m -54.89,1.67 -0.64,-0.16 -0.59,-1.85 1.23,-0.75 0.63,0.16 0.59,1.86 -1.22,0.74 m 26.5,43.76 -1.39,-1.38 v -23.67 c -0.95,-0.48 -1.61,-1.48 -1.64,-2.66 -0.02,-1.66 1.25,-3.01 2.85,-3.05 l 21.5,-0.38 c 0.01,0 0.03,0 0.04,0 1.58,0 2.88,1.31 2.91,2.96 0.03,1.65 -1.25,3.02 -2.84,3.05 l -20.05,0.35 v 23.4 l -1.38,1.38 m 31.49,-27.83 -1.38,-1.39 1.38,-1.38 1.38,1.38 -1.38,1.39 m -62.94,0 -1.38,-1.39 1.38,-1.38 1.39,1.38 -1.39,1.39 m 60.77,13.15 -0.64,-0.16 -0.59,-1.86 1.23,-0.74 0.64,0.15 0.59,1.86 -1.23,0.75 m -54.89,1.66 -1.18,-0.65 0.46,-1.91 0.72,-0.19 1.19,0.67 -0.47,1.89 -0.72,0.19 m 43.19,10.78 -1.19,-0.67 0.48,-1.9 0.71,-0.2 1.18,0.67 -0.47,1.9 -0.71,0.2 m -30.76,0.93 -0.63,-0.15 -0.59,-1.87 1.23,-0.74 0.63,0.15 0.59,1.87 -1.23,0.74 m 13.16,4.95 -1.38,-1.39 1.38,-1.38 1.39,1.38 -1.39,1.39 m 15.93,-62.91 -0.67,0.41 -0.06,0.58 0.37,0.44 0.36,0.08 0.67,-0.4 0.05,-0.58 -0.37,-0.44 -0.35,-0.09 m -30.76,0.94 -0.38,0.11 -0.35,0.46 0.09,0.58 0.65,0.36 0.38,-0.11 0.26,-1.04 -0.65,-0.36 m 43.2,10.77 -0.4,0.1 -0.25,1.04 0.65,0.36 0.39,-0.11 0.34,-0.46 -0.09,-0.57 -0.64,-0.36 m -54.89,1.66 -0.67,0.41 0.31,1.02 0.36,0.08 0.66,-0.4 -0.31,-1.02 -0.35,-0.09 m 55.82,29.09 -0.67,0.4 0.32,1.02 0.35,0.08 0.67,-0.4 -0.32,-1.02 -0.35,-0.08 m -54.89,1.66 -0.39,0.11 -0.34,0.46 0.08,0.58 0.65,0.37 0.39,-0.11 0.26,-1.04 -0.65,-0.37 m 43.19,10.76 -0.39,0.12 -0.26,1.03 0.65,0.37 0.39,-0.11 0.34,-0.46 -0.08,-0.58 -0.65,-0.37 m -30.75,0.94 -0.67,0.41 -0.05,0.58 0.37,0.45 0.34,0.08 0.68,-0.41 -0.32,-1.02 -0.35,-0.09"
                />
              </g>
            </g>
            <g id="g1334">
              <g clipPath="url(#clipPath1340)" id="g1336">
                <path
                  id="path1348"
                  style={{
                    fill: "url(#radialGradient1346)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1624.24,1240.9 c -0.01,0 -0.03,0 -0.04,0 l -21.5,0.38 c -1.6,0.04 -2.87,1.39 -2.85,3.05 0.03,1.18 0.69,2.18 1.64,2.66 v 23.67 l 1.39,1.38 1.38,-1.38 v -23.4 l 20.05,-0.35 c 1.59,-0.03 2.87,-1.4 2.84,-3.05 -0.03,-1.65 -1.33,-2.96 -2.91,-2.96"
                />
              </g>
            </g>
            <g id="g1350">
              <g clipPath="url(#clipPath1356)" id="g1352">
                <path
                  id="path1364"
                  style={{
                    fill: "url(#radialGradient1362)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1618.83,1212.14 -1.22,0.75 0.58,1.86 0.64,0.16 1.22,-0.74 -0.58,-1.87 -0.64,-0.16 m 0,2.14 -0.36,-0.08 -0.37,-0.44 0.06,-0.58 0.67,-0.41 0.35,0.09 0.37,0.44 -0.05,0.58 -0.67,0.4"
                />
              </g>
            </g>
            <g id="g1366">
              <g clipPath="url(#clipPath1372)" id="g1368">
                <path
                  id="path1380"
                  style={{
                    fill: "url(#radialGradient1378)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1589.75,1267.97 -1.23,0.74 0.59,1.87 0.63,0.15 1.23,-0.74 -0.59,-1.87 -0.63,-0.15 m -0.01,2.14 -0.34,-0.08 -0.37,-0.45 0.05,-0.58 0.67,-0.41 0.35,0.09 0.32,1.02 -0.68,0.41"
                />
              </g>
            </g>
            <g id="g1382">
              <g clipPath="url(#clipPath1388)" id="g1384">
                <path
                  id="path1396"
                  style={{
                    fill: "url(#radialGradient1394)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1576.38,1225.52 -1.23,0.75 0.59,1.85 0.64,0.16 1.22,-0.74 -0.59,-1.86 -0.63,-0.16 m 0,2.13 -0.36,-0.08 -0.31,-1.02 0.67,-0.41 0.35,0.09 0.31,1.02 -0.66,0.4"
                />
              </g>
            </g>
            <g id="g1398">
              <g clipPath="url(#clipPath1404)" id="g1400">
                <path
                  id="path1412"
                  style={{
                    fill: "url(#radialGradient1410)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1632.2,1254.6 -1.23,0.74 0.59,1.86 0.64,0.16 1.23,-0.75 -0.59,-1.86 -0.64,-0.15 m 0,2.13 -0.35,-0.08 -0.32,-1.02 0.67,-0.4 0.35,0.08 0.32,1.02 -0.67,0.4"
                />
              </g>
            </g>
            <g id="g1414">
              <g clipPath="url(#clipPath1420)" id="g1416">
                <path
                  id="path1428"
                  style={{
                    fill: "url(#radialGradient1426)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1588.07,1213.08 -0.7,0.2 -0.48,1.89 1.19,0.68 0.71,-0.21 0.47,-1.89 -1.19,-0.67 m 0.01,2.14 -0.65,-0.36 -0.09,-0.58 0.35,-0.46 0.38,-0.11 0.65,0.36 -0.26,1.04 -0.38,0.11"
                />
              </g>
            </g>
            <g id="g1430">
              <g clipPath="url(#clipPath1436)" id="g1432">
                <path
                  id="path1444"
                  style={{
                    fill: "url(#radialGradient1442)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1620.5,1267.03 -0.71,0.2 -0.48,1.9 1.19,0.67 0.71,-0.2 0.47,-1.9 -1.18,-0.67 m 0,2.14 -0.65,-0.37 0.26,-1.03 0.39,-0.12 0.65,0.37 0.08,0.58 -0.34,0.46 -0.39,0.11"
                />
              </g>
            </g>
            <g id="g1446">
              <g clipPath="url(#clipPath1452)" id="g1448">
                <path
                  id="path1460"
                  style={{
                    fill: "url(#radialGradient1458)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1577.31,1256.27 -0.72,0.19 -0.46,1.91 1.18,0.65 0.72,-0.19 0.47,-1.89 -1.19,-0.67 m 0,2.14 -0.65,-0.37 -0.08,-0.58 0.34,-0.46 0.39,-0.11 0.65,0.37 -0.26,1.04 -0.39,0.11"
                />
              </g>
            </g>
            <g id="g1462">
              <g clipPath="url(#clipPath1468)" id="g1464">
                <path
                  id="path1476"
                  style={{
                    fill: "url(#radialGradient1474)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1631.27,1223.84 -0.72,0.2 -0.47,1.9 1.19,0.67 0.7,-0.2 0.48,-1.9 -1.18,-0.67 m 0,2.14 -0.65,-0.36 0.25,-1.04 0.4,-0.1 0.64,0.36 0.09,0.57 -0.34,0.46 -0.39,0.11"
                />
              </g>
            </g>
            <g id="g1478">
              <g clipPath="url(#clipPath1484)" id="g1480">
                <path
                  id="path1492"
                  style={{
                    fill: "url(#radialGradient1490)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1634.37,1241.44 -1.38,1.38 1.38,1.39 1.38,-1.39 -1.38,-1.38"
                />
              </g>
            </g>
            <g id="g1494">
              <g clipPath="url(#clipPath1500)" id="g1496">
                <path
                  id="path1508"
                  style={{
                    fill: "url(#radialGradient1506)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1571.43,1241.44 -1.38,1.38 1.38,1.39 1.39,-1.39 -1.39,-1.38"
                />
              </g>
            </g>
            <g id="g1510">
              <g clipPath="url(#clipPath1516)" id="g1512">
                <path
                  id="path1524"
                  style={{
                    fill: "url(#radialGradient1522)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1602.9,1209.96 -1.38,1.4 1.38,1.37 1.39,-1.37 -1.39,-1.4"
                />
              </g>
            </g>
            <g id="g1526">
              <g clipPath="url(#clipPath1532)" id="g1528">
                <path
                  id="path1540"
                  style={{
                    fill: "url(#radialGradient1538)",
                    fillOpacity: 1,
                    fillRule: "nonzero",
                    stroke: "none"
                  }}
                  d="m 1602.9,1272.91 -1.38,1.38 1.38,1.39 1.39,-1.39 -1.39,-1.38"
                />
              </g>
            </g>
            <path
              id="path1542"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1600.55,1244.33 c 0.03,1.67 1.34,2.98 2.95,2.96 l 21.5,-0.38 c 1.59,-0.03 2.87,-1.4 2.84,-3.05 -0.02,-1.66 -1.35,-2.98 -2.94,-2.96 l -21.51,0.38 c -1.6,0.04 -2.87,1.39 -2.84,3.05"
            />
            <path
              id="path1544"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1604.95,1244.21 -1.38,-1.39 -1.38,1.39 v 26.45 l 1.38,1.38 1.38,-1.38 v -26.45"
            />
            <path
              id="path1546"
              style={{
                fill: "#1a1816",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1605.67,1244.12 c 0,-1.14 -0.94,-2.08 -2.1,-2.08 -1.15,0 -2.08,0.94 -2.08,2.08 0,1.16 0.93,2.09 2.08,2.09 1.16,0 2.1,-0.93 2.1,-2.09"
            />
            <path
              id="path1548"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1619.52,1214.91 -0.64,-0.16 -0.59,-1.86 1.23,-0.75 0.64,0.16 0.59,1.87 z m 0,-0.63 v 0 l 0.67,-0.4 0.06,-0.58 -0.38,-0.44 -0.35,-0.09 -0.67,0.41 -0.05,0.58 0.37,0.44 0.35,0.08"
            />
            <path
              id="path1550"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1590.44,1270.73 -0.63,-0.15 -0.6,-1.87 1.23,-0.74 0.64,0.15 0.59,1.87 z m 0,-0.62 v 0 l 0.67,-0.41 -0.32,-1.02 -0.35,-0.09 -0.67,0.41 -0.05,0.58 0.37,0.45 0.35,0.08"
            />
            <path
              id="path1552"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1577.06,1228.28 -0.63,-0.16 -0.59,-1.85 1.23,-0.75 0.63,0.16 0.6,1.86 z m 0,-0.63 v 0 l 0.68,-0.4 -0.32,-1.02 -0.35,-0.09 -0.67,0.41 0.32,1.02 0.34,0.08"
            />
            <path
              id="path1554"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1632.89,1257.36 -0.64,-0.16 -0.58,-1.86 1.22,-0.74 0.64,0.15 0.58,1.86 z m 0,-0.63 v 0 l 0.68,-0.4 -0.33,-1.02 -0.35,-0.08 -0.67,0.4 0.33,1.02 0.34,0.08"
            />
            <path
              id="path1556"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1588.77,1215.85 -1.19,-0.68 0.48,-1.89 0.71,-0.2 1.18,0.67 -0.46,1.89 z m 0,-0.63 v 0 l 0.39,-0.11 0.26,-1.04 -0.65,-0.36 -0.39,0.11 -0.34,0.46 0.08,0.58 0.65,0.36"
            />
            <path
              id="path1558"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1621.19,1269.8 -1.18,-0.67 0.46,-1.9 0.72,-0.2 1.19,0.67 -0.48,1.9 z m 0,-0.63 v 0 l 0.4,-0.11 0.34,-0.46 -0.09,-0.58 -0.65,-0.37 -0.39,0.12 -0.25,1.03 0.64,0.37"
            />
            <path
              id="path1560"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1578.01,1259.02 -1.19,-0.65 0.47,-1.91 0.72,-0.19 1.18,0.67 -0.48,1.9 z m 0,-0.61 v 0 l 0.39,-0.11 0.26,-1.04 -0.65,-0.37 -0.39,0.11 -0.35,0.46 0.09,0.58 0.65,0.37"
            />
            <path
              id="path1562"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1631.96,1226.61 -1.19,-0.67 0.47,-1.9 0.72,-0.2 1.18,0.67 -0.48,1.9 z m 0,-0.63 v 0 l 0.39,-0.11 0.34,-0.46 -0.08,-0.57 -0.65,-0.37 -0.39,0.11 -0.26,1.04 0.65,0.36"
            />
            <path
              id="path1564"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1636.45,1242.82 -1.38,-1.38 -1.38,1.38 1.38,1.39 1.38,-1.39"
            />
            <path
              id="path1566"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1573.51,1242.82 -1.39,-1.38 -1.37,1.38 1.37,1.39 1.39,-1.39"
            />
            <path
              id="path1568"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1603.6,1209.96 -1.38,1.4 1.38,1.37 1.38,-1.37 -1.38,-1.4"
            />
            <path
              id="path1570"
              style={{
                fill: "#ffffff",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1603.6,1272.91 -1.38,1.38 1.38,1.39 1.38,-1.39 -1.38,-1.38"
            />
            <path
              id="path1572"
              style={{
                fill: "#1b1818",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1643.46,1246.34 c 0.18,-1.52 0.26,-3.04 0.26,-4.59 0,-5.37 -1.05,-10.57 -3.13,-15.48 -2,-4.73 -4.87,-8.99 -8.52,-12.64 -3.65,-3.65 -7.91,-6.52 -12.64,-8.52 -4.91,-2.07 -10.12,-3.13 -15.48,-3.13 -5.38,0 -10.59,1.06 -15.49,3.13 -4.74,2 -8.98,4.87 -12.64,8.52 -3.65,3.65 -6.52,7.91 -8.53,12.64 -2.07,4.91 -3.13,10.11 -3.13,15.48 0,1.55 0.1,3.07 0.27,4.59 h -0.39 -0.36 c -0.17,-1.51 -0.25,-3.04 -0.25,-4.59 0,-5.46 1.07,-10.77 3.18,-15.77 2.05,-4.82 4.97,-9.16 8.69,-12.87 3.71,-3.73 8.05,-6.65 12.87,-8.68 5,-2.13 10.3,-3.19 15.78,-3.19 5.46,0 10.77,1.06 15.76,3.19 4.83,2.03 9.17,4.95 12.89,8.68 3.72,3.71 6.64,8.05 8.68,12.87 2.11,5 3.18,10.31 3.18,15.77 0,1.55 -0.09,3.07 -0.25,4.59 h -0.75"
            />
            <path
              id="path1574"
              style={{
                fill: "#1a1816",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1605.5,1201.46 -1.47,-1.47 -1.47,1.47 1.47,1.46 1.47,-1.46"
            />
            <path
              id="path1576"
              style={{
                fill: "#1a1816",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1635.76,1215.38 -1.47,-1.47 -1.47,1.47 1.47,1.46 1.47,-1.46"
            />
            <path
              id="path1578"
              style={{
                fill: "#1a1816",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1575.21,1215.38 -1.47,-1.47 -1.47,1.47 1.47,1.46 1.47,-1.46"
            />
            <path
              id="path1580"
              style={{
                fill: "#1a1816",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1565.49,1246.36 -1.48,-1.48 -1.47,1.48 1.47,1.46 1.48,-1.46"
            />
            <path
              id="path1582"
              style={{
                fill: "#1a1816",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 1645.51,1246.36 -1.47,-1.48 -1.47,1.48 1.47,1.46 1.47,-1.46"
            />
            <path
              id="path1584"
              style={{
                fill: "#b7b0a3",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2974.97,747.844 2516.29,863.402 V 1272.1 l 458.68,129.29 V 747.844"
            />
            <path
              id="path1586"
              style={{
                fill: "#8e8378",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2974.97,677.879 -458.68,135.535 v 49.988 l 458.68,-115.558 v -69.965"
            />
            <path
              id="path1588"
              style={{
                fill: "#ebebca",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2961.44,698.801 -450.6,127.015 v 455.524 l 450.6,133.16 V 698.801"
            />
            <path
              id="path1590"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2868.02,1093.21 0.26,-0.08 0.17,-0.3 0.23,0.02 0.03,0.15 -0.18,0.43 -0.29,-0.05 -0.22,0.17 -0.16,0.33 h -0.15 l 0.11,-0.21 0.17,-0.21 0.03,-0.25"
            />
            <path
              id="path1592"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2850.47,1034.47 -0.05,0.55 -0.07,0.59 -0.29,0.75 0.06,0.72 0.15,0.44 -0.07,0.41 -0.12,-0.29 -0.16,-0.44 -0.22,0.29 -0.2,0.3 -0.35,0.63 -0.03,0.42 0.18,0.26 0.02,0.45 -0.07,0.36 v 0.68 l -0.13,0.29 -0.02,0.31 0.02,0.48 0.07,0.16 0.03,0.22 -0.03,0.29 -0.13,-0.19 -0.09,0.19 -0.04,0.34 -0.21,0.3 -0.1,0.48 -0.03,0.23 0.04,0.25 -0.11,0.4 -0.47,0.01 -0.13,0.1 -0.11,0.13 v 0.03 l -0.08,0.14 -0.1,0.19 -0.07,0.36 -0.07,0.41 -0.24,0.21 -0.34,0.13 -0.07,0.11 -0.16,0.13 -0.22,0.32 -0.21,0.34 v 0.25 l -0.03,0.16 -0.12,0.16 -0.06,0.11 -0.25,0.13 -0.16,0.07 0.02,0.13 -0.12,0.03 -0.21,0.04 -0.1,-0.05 -0.09,0.04 -0.09,0.04 -0.05,0.05 -0.2,0.12 -0.13,0.14 -0.18,0.13 -0.2,0.15 v 0.07 l 0.05,0.34 -0.13,0.33 -0.29,0.33 h -0.21 l -0.03,-0.2 -0.31,-0.23 -0.1,0.24 -0.14,0.19 0.02,0.1 -0.02,0.12 -0.04,0.2 0.06,0.13 -0.06,0.32 -0.08,0.19 0.02,0.11 -0.02,0.12 v 0.22 l 0.04,0.07 v 0.17 l 0.04,0.18 v 0.23 0.26 l -0.04,0.22 H 2843 l -0.03,0.12 -0.1,0.02 -0.28,0.52 -0.17,0.19 -0.15,0.2 0.13,-0.48 0.05,-0.6 -0.23,0.14 -0.22,0.13 -0.21,0.17 -0.25,0.13 -0.27,0.47 -0.38,0.35 -0.25,0.07 0.03,-0.32 0.13,-0.31 0.06,-0.4 0.12,-0.05 0.01,-0.18 0.05,-0.14 0.06,-0.19 h -0.06 l -0.01,0.13 -0.14,0.14 -0.12,0.1 -0.05,0.11 -0.1,0.03 -0.04,0.05 -0.12,-0.03 -0.1,-0.03 -0.06,-0.02 -0.04,-0.06 0.04,0.16 v 0.19 l -0.17,0.03 -0.09,0.04 -0.13,0.27 -0.08,0.23 -0.19,0.55 -0.04,0.28 -0.01,0.3 -0.02,0.28 -0.01,0.31 -0.11,0.27 -0.29,0.03 0.04,0.49 -0.09,0.16 h -0.21 l 0.04,0.16 -0.01,0.18 -0.02,0.25 -0.27,0.15 -0.2,0.21 -0.53,0.3 -0.13,0.27 -0.16,0.25 0.03,0.59 0.56,-0.28 -0.05,0.14 -0.04,0.07 -0.02,0.07 -0.07,0.1 -0.06,0.12 -0.15,0.21 -0.2,0.16 -0.32,0.25 -0.09,0.22 -0.18,0.05 -0.03,-0.14 -0.02,-0.13 h -0.19 l -0.12,0.11 -0.11,0.1 -0.07,0.24 -0.15,0.05 -0.13,0.02 -0.11,0.06 -0.06,0.1 -0.22,0.09 -0.34,0.13 -0.18,0.34 -0.16,-0.1 0.06,-0.25 -0.44,0.18 -0.04,0.25 -0.05,0.26 -0.23,0.45 -0.48,0.15 -0.54,0.05 -0.44,0.29 -0.37,0.25 -0.47,0.1 -0.34,0.31 -0.35,0.45 -0.08,0.49 0.06,0.55 -0.04,0.53 -0.37,0.32 0.06,-0.28 0.13,-0.2 v -0.32 l -0.03,0.19 h -0.05 l -0.2,0.28 -0.1,0.12 -0.14,0.1 v 0.2 l -0.09,0.19 0.2,0.39 0.14,0.64 -0.09,0.85 -0.26,0.78 -0.13,0.38 -0.02,0.42 -0.21,0.25 -0.07,-0.38 -0.04,0.22 -0.09,0.12 -0.04,0.16 -0.09,0.1 -0.07,0.14 -0.04,0.05 -0.04,0.05 -0.24,0.09 -0.23,0.39 -0.11,0.18 -0.07,0.22 v 0.27 l 0.1,0.1 0.03,0.13 -0.02,0.26 v 0.32 l -0.11,0.25 -0.17,0.08 v 0.21 l 0.03,0.21 -0.03,0.25 v 0.14 l -0.02,0.16 v 0.16 l -0.07,0.1 -0.15,0.21 0.01,0.12 0.14,0.12 v 0.12 l 0.04,0.14 -0.1,0.1 -0.08,0.1 v 0.19 l 0.04,0.12 0.13,0.09 0.01,0.3 -0.05,0.13 -0.1,0.07 -0.13,0.11 -0.1,0.06 -0.1,0.04 -0.11,0.03 -0.14,0.05 -0.1,0.11 -0.13,0.02 -0.15,0.28 -0.24,0.16 -0.29,0.16 -0.06,0.15 -0.07,0.25 -0.12,0.41 -0.22,0.23 -0.23,-0.31 -0.25,-0.03 -0.24,-0.07 -0.14,-0.32 -0.3,-0.27 -0.4,0.03 -0.21,0.27 -0.05,0.13 -0.09,0.05 -0.03,0.08 -0.07,0.25 v 0.17 l -0.02,0.14 -0.03,0.27 -0.17,0.14 -0.09,0.27 -0.06,0.06 -0.05,0.19 0.03,0.24 v 0.11 l 0.07,0.12 0.03,0.12 0.04,0.1 -0.02,0.3 -0.06,0.24 -0.09,0.24 v 0.36 l -0.02,0.17 v 0.22 0.09 l 0.02,0.09 -0.02,0.22 -0.06,0.08 -0.37,0.03 0.01,0.29 0.17,0.18 v 0.28 l -0.23,0.08 -0.16,0.05 -0.02,0.33 -0.11,0.12 -0.07,0.09 -0.31,0.13 v 0.23 l 0.01,0.21 0.11,0.21 0.16,0.29 -0.22,0.17 -0.39,-0.01 -0.09,0.08 -0.11,0.08 -0.01,0.18 v 0.18 0.36 l -0.03,0.33 0.01,0.37 -0.12,0.24 -0.11,0.66 -0.2,0.23 -0.24,0.23 -0.11,0.1 0.14,0.29 -0.5,0.05 -0.04,-0.3 -0.14,-0.27 -0.48,-0.2 0.02,-0.76 -0.17,-0.72 -0.15,-0.73 -0.16,-0.64 0.14,-0.31 h -0.11 l -0.19,0.29 -0.11,-0.1 -0.11,-0.25 -0.15,-0.24 -0.1,-0.31 -0.22,-0.65 0.06,-0.16 0.19,0.15 0.14,-0.17 0.21,-0.17 0.19,-0.7 -0.08,0.02 -0.08,0.3 -0.11,0.26 -0.08,-0.26 -0.12,-0.24 -0.1,-0.09 -0.1,-0.11 -0.14,-0.09 0.02,-0.16 -0.02,-0.25 0.04,-0.15 0.07,-0.21 0.08,-0.2 0.04,-0.2 -0.06,-0.12 -0.13,-0.14 -0.2,-0.15 -0.05,-0.34 -0.03,-0.31 -0.05,-0.34 0.03,-0.15 v -0.2 l 0.18,-0.24 0.11,-0.34 -0.05,-0.35 -0.14,-0.28 -0.02,-0.43 -0.01,-0.5 0.07,-0.39 0.14,-0.32 0.11,-0.34 -0.11,-0.35 -0.15,-0.5 -0.09,-0.26 -0.1,-0.27 -0.11,-0.3 -0.05,-0.25 -0.02,-0.32 v -0.34 l 0.01,-0.31 -0.01,-0.35 -0.13,-0.27 -0.06,-0.25 -0.05,-0.12 -0.08,-0.08 v -0.17 l -0.03,-0.17 -0.09,-0.16 -0.05,-0.18 -0.11,-0.18 -0.06,-0.08 -0.06,-0.06 -0.12,-0.18 -0.01,-0.1 -0.03,-0.11 -0.06,-0.1 h -0.11 l -0.08,-0.18 -0.02,-0.26 0.02,-0.2 -0.02,-0.24 -0.04,-0.24 -0.12,-0.24 -0.06,-0.05 -0.03,-0.08 -0.14,-0.11 -0.14,-0.13 -0.13,-0.05 -0.06,-0.07 -0.03,-0.09 -0.19,-0.07 -0.1,-0.11 -0.12,-0.1 -0.18,-0.06 -0.22,-0.06 -0.24,-0.07 -0.19,0.01 -0.24,-0.01 -0.19,0.14 -0.13,0.11 -0.15,0.04 -0.01,0.04 -0.06,0.06 -0.17,0.04 h -0.07 l -0.06,0.08 h -0.08 l -0.05,0.02 -0.08,0.05 h -0.07 l -0.06,0.03 -0.05,0.07 -0.07,0.06 -0.05,0.02 -0.05,0.03 -0.09,0.1 -0.15,0.11 h -0.26 l -0.19,0.16 -0.03,0.15 -0.1,0.13 -0.1,0.34 -0.02,0.2 -0.06,0.09 -0.1,0.05 -0.05,0.19 -0.18,0.13 h -0.25 -0.15 -0.14 l -0.1,0.04 -0.1,0.08 -0.19,0.13 -0.23,0.01 -0.23,-0.01 -0.1,0.08 h -0.09 l -0.23,0.02 -0.19,0.08 -0.05,0.07 -0.09,0.1 -0.13,0.15 -0.09,0.08 -0.07,0.1 -0.25,0.14 -0.05,0.14 -0.1,0.13 -0.1,0.15 -0.13,0.15 -0.1,0.1 -0.19,0.12 -0.19,0.01 -0.18,0.02 -0.14,0.15 -0.17,0.01 -0.1,0.14 -0.07,0.1 -0.06,0.12 -0.16,0.05 -0.13,0.07 -0.12,0.05 -0.12,0.13 -0.1,0.06 -0.15,-0.06 -0.14,-0.08 -0.34,-0.02 -0.14,0.02 -0.05,0.14 -0.08,0.21 -0.07,0.14 h -0.08 l -0.09,0.06 -0.12,-0.02 -0.08,0.11 -0.05,0.18 -0.1,0.02 -0.07,0.05 h -0.09 l -0.1,0.03 -0.04,0.14 0.01,0.16 -0.12,0.13 -0.11,0.1 -0.13,0.08 -0.12,0.09 -0.14,0.02 -0.08,0.13 h -0.06 l -0.08,0.05 -0.12,0.07 -0.03,0.16 -0.08,0.05 -0.05,0.03 -0.09,0.06 -0.2,0.1 -0.18,0.08 -0.09,0.05 h -0.12 l -0.04,0.07 -0.12,0.2 -0.18,0.25 -0.02,0.17 -0.05,0.23 0.19,0.17 0.12,0.23 0.09,0.15 0.04,0.15 0.02,0.14 0.14,0.1 0.12,0.2 0.13,0.09 0.04,0.2 0.13,0.11 0.21,0.11 0.06,0.29 -0.03,0.15 0.09,0.1 0.1,0.31 0.06,0.11 0.03,0.21 -0.19,0.11 -0.19,0.16 v 0.15 l -0.03,0.15 0.04,0.27 0.06,0.36 -0.03,0.16 0.02,0.19 0.14,0.03 0.11,0.06 0.07,0.02 h 0.06 l 0.11,0.03 0.04,0.18 -0.01,0.15 0.05,0.03 0.06,-0.14 0.04,-0.32 0.14,0.04 0.05,0.13 0.1,0.12 0.04,0.25 0.14,-0.14 0.04,-0.33 0.2,-0.15 0.11,0.31 0.11,0.03 0.03,0.14 -0.01,0.14 -0.08,0.09 -0.09,0.09 0.09,0.1 0.14,-0.19 0.18,0.13 -0.08,0.04 -0.1,0.07 -0.06,0.11 -0.08,0.06 -0.02,0.27 0.11,0.05 0.15,0.03 0.23,0.09 -0.01,0.07 0.14,0.1 0.11,0.07 v 0.1 l 0.19,0.48 0.27,0.38 -0.27,0.3 -0.23,0.04 -0.2,-0.43 -0.14,0.22 -0.15,0.36 -0.37,0.27 -0.25,-0.16 -0.23,-0.25 0.09,-0.11 0.29,-0.1 -0.18,-0.54 -0.21,-0.14 -0.29,-0.06 -0.19,-0.01 -0.04,0.21 -0.02,0.13 0.02,0.17 -0.09,0.1 -0.09,0.15 -0.12,0.08 -0.14,-0.02 -0.05,-0.17 -0.14,-0.11 -0.15,-0.03 -0.09,0.09 0.03,0.32 0.41,0.38 v 0.1 l 0.04,0.07 0.05,0.13 0.07,0.13 0.06,0.1 0.03,0.17 0.03,0.15 h -0.04 l -0.08,-0.11 -0.04,-0.02 -0.05,-0.06 -0.13,-0.25 -0.29,-0.12 -0.28,-0.12 -0.13,-0.24 -0.26,-0.15 -0.25,-0.14 -0.19,-0.28 -0.31,-0.11 -0.26,0.07 -0.13,0.25 -0.17,0.25 -0.19,0.11 -0.17,0.16 -0.15,-0.11 -0.14,-0.2 -0.27,0.05 -0.33,-0.05 -0.13,-0.06 -0.16,0.05 -0.29,-0.02 0.03,0.24 -0.08,0.15 -0.26,0.13 -0.33,-0.04 -0.14,0.22 0.25,0.06 -0.14,0.15 -0.23,-0.02 -0.11,-0.14 -0.2,-0.14 -0.2,0.04 -0.21,0.03 -0.19,0.06 -0.2,0.04 -0.08,0.08 -0.11,0.02 -0.15,0.03 -0.11,0.06 v 0.1 l -0.11,0.27 -0.08,0.11 -0.05,0.13 -0.21,0.2 -0.07,0.11 -0.07,-0.19 -0.18,-0.03 -0.02,-0.21 -0.11,-0.04 -0.1,-0.06 -0.09,0.16 -0.05,0.13 -0.06,0.12 -0.13,0.12 -0.13,0.03 -0.05,0.17 -0.06,0.14 -0.14,-0.08 -0.04,-0.14 -0.04,0.2 -0.05,0.16 -0.15,0.01 -0.06,-0.2 -0.15,0.28 -0.14,0.04 0.03,-0.18 0.11,-0.37 -0.06,-0.27 -0.15,0.29 -0.1,0.33 -0.24,0.08 -0.14,-0.24 -0.27,-0.1 0.22,-0.09 0.1,-0.08 0.09,-0.08 0.2,-0.18 0.17,-0.17 0.3,0.1 0.56,0.03 0.23,-0.18 -0.02,-0.33 0.16,-0.58 -0.01,-0.46 0.04,-0.23 0.07,-0.15 -0.24,0.02 -0.26,-0.04 -0.05,-0.13 -0.08,-0.1 -0.11,-0.1 -0.16,-0.04 -0.22,0.25 -0.21,-0.26 -0.17,-0.05 -0.19,0.02 -0.17,0.01 -0.25,-0.02 h -0.3 -0.16 -0.15 l -0.13,-0.01 -0.17,-0.02 -0.08,-0.01 -0.01,0.07 -0.12,0.09 -0.07,0.25 -0.12,0.22 -0.06,-0.21 -0.01,-0.19 -0.24,0.04 -0.26,0.09 0.01,-0.58 -0.35,0.04 -0.07,-0.26 0.21,-0.27 -0.08,-0.36 -0.12,0.19 -0.18,0.06 -0.01,0.2 -0.08,0.17 -0.34,-0.01 -0.04,-0.48 -0.02,-0.18 0.24,-0.08 -0.08,-0.14 -0.21,-0.01 -0.27,0.25 -0.15,-0.06 -0.13,-0.1 v -0.15 l 0.01,-0.28 -0.17,-0.19 -0.29,-0.1 -0.03,-0.41 0.15,-0.27 0.21,-0.26 -0.14,-0.27 -0.2,-0.24 -0.7,-0.12 v -0.27 -0.21 l -0.11,-0.06 v -0.19 l -0.04,-0.2 -0.06,-0.21 -0.08,-0.11 0.01,-0.17 -0.1,-0.11 -0.05,0.05 h -0.06 l -0.13,-0.07 -0.3,-0.32 -0.19,-0.43 0.12,-0.43 0.31,-0.24 0.28,-0.02 0.24,0.09 0.08,-0.08 -0.13,-0.11 -0.13,-0.03 -0.22,-0.05 0.17,-0.22 0.06,-0.24 0.1,-0.14 -0.22,0.1 -0.26,-0.01 -0.05,-0.25 0.1,-0.16 0.18,-0.31 v -0.22 l -0.08,0.08 -0.31,0.35 -0.35,0.31 -0.17,-0.53 -0.06,-0.43 -0.09,0.18 -0.05,0.12 -0.01,0.14 -0.05,0.25 -0.1,0.04 -0.27,0.33 h -0.15 l -0.12,0.01 -0.07,-0.03 -0.12,0.05 h -0.14 -0.14 l -0.07,0.01 -0.07,0.05 -0.14,-0.01 -0.13,0.02 -0.24,-0.07 0.04,-0.18 v -0.06 h -0.12 l -0.02,-0.13 h -0.14 l -0.11,-0.13 h -0.07 l -0.03,-0.13 -0.07,-0.34 0.05,-0.11 0.05,-0.14 0.03,-0.07 0.06,-0.07 0.09,-0.35 -0.04,-0.03 -0.05,0.17 -0.06,0.16 -0.11,0.12 -0.12,0.07 -0.03,-0.32 0.01,-0.19 0.03,-0.09 -0.1,-0.06 -0.09,-0.1 -0.06,-0.08 -0.09,-0.1 -0.2,-0.1 h -0.11 l -0.06,-0.14 v 0.16 l 0.11,0.11 0.15,0.06 0.12,0.09 0.12,0.08 0.02,0.17 0.02,0.18 v 0.19 l -0.02,0.13 v 0.36 l 0.12,0.2 v 0.09 l 0.03,0.09 -0.03,0.24 0.06,0.16 0.15,0.06 0.02,0.06 0.06,0.04 -0.06,0.14 -0.23,0.23 -0.12,0.07 -0.09,0.08 -0.15,0.04 -0.17,0.19 -0.05,0.09 -0.1,0.12 -0.08,0.18 -0.09,0.11 -0.14,0.22 -0.07,0.14 -0.07,0.09 -0.06,0.04 -0.03,0.06 -0.16,0.06 -0.14,0.26 -0.1,0.15 -0.18,0.04 -0.17,0.05 -0.15,-0.02 h -0.15 l -0.13,-0.1 -0.22,0.51 -0.21,0.04 -0.25,-0.03 -0.16,-0.21 0.16,-0.24 -0.06,-0.18 -0.15,-0.18 -0.13,-0.23 -0.18,-0.2 -0.11,0.14 -0.16,0.12 -0.21,0.25 -0.17,-0.39 -0.21,-0.24 -0.16,0.54 -0.43,-0.01 0.33,-0.16 0.03,-0.44 -0.16,-0.04 -0.01,-0.29 v -0.3 l -0.09,-0.16 -0.23,-0.17 -0.01,-0.23 -0.07,0.17 -0.09,0.06 v 0.27 l -0.29,0.07 -0.09,-0.15 -0.18,0.72 -0.01,-0.42 0.01,-0.47 -0.23,0.15 -0.07,-0.14 -0.07,-0.13 -0.11,0.07 -0.28,-0.09 -0.12,-0.12 -0.05,0.17 -0.14,0.4 0.03,-0.52 0.05,-0.5 h 0.03 l 0.25,-0.16 0.09,-0.09 -0.05,-0.12 0.19,-0.19 0.02,-0.13 0.02,-0.18 -0.33,0.1 -0.14,0.13 -0.13,-0.02 -0.24,0.18 -0.07,-0.31 h -0.18 l -0.2,-0.07 v -0.21 l 0.1,-0.14 0.04,-0.28 0.25,0.11 0.14,-0.1 -0.05,-0.33 h -0.1 l -0.07,0.09 -0.17,0.11 -0.05,-0.04 -0.02,0.1 -0.07,0.07 -0.03,0.1 -0.09,-0.01 -0.06,0.13 -0.14,0.03 -0.05,-0.22 -0.03,-0.2 -0.04,-0.06 -0.07,-0.08 -0.02,-0.26 -0.21,0.08 -0.37,-0.09 0.06,-0.32 -0.04,-0.41 0.04,-0.2 0.12,0.12 h 0.04 l 0.04,-0.22 -0.03,-0.17 0.19,0.04 0.09,0.39 0.2,0.2 0.08,-0.14 -0.15,-0.14 -0.09,-0.15 -0.03,-0.22 -0.04,-0.23 -0.01,-0.2 h -0.1 l -0.07,-0.11 -0.15,0.1 -0.06,0.19 -0.07,-0.16 0.01,-0.24 0.01,-0.25 0.32,-0.07 0.38,0.05 0.18,-0.11 0.14,-0.16 -0.37,0.04 -0.33,0.02 -0.3,0.01 -0.15,0.07 -0.05,-0.12 -0.14,-0.02 -0.21,0.15 -0.08,0.13 -0.19,0.09 -0.27,-0.1 v -0.07 l -0.04,-0.05 -0.11,-0.15 -0.04,0.14 -0.21,0.29 -0.17,0.32 -0.2,-0.1 -0.14,-0.12 0.04,-0.28 0.14,-0.07 -0.09,-0.36 -0.17,-0.01 0.12,-0.2 -0.18,-0.13 0.12,-0.12 0.26,-0.27 0.15,-0.12 0.09,-0.22 0.19,-0.02 h 0.08 0.06 l 0.06,-0.09 -0.23,-0.09 -0.08,-0.15 -0.01,-0.17 0.12,-0.24 0.04,-0.22 -0.15,0.11 -0.15,0.18 -0.07,0.09 -0.09,0.05 -0.07,0.08 -0.07,0.05 0.04,-0.39 v -0.39 l -0.03,-0.23 0.01,-0.17 -0.04,-0.18 0.02,-0.05 v -0.2 -0.34 l -0.07,0.32 -0.08,0.18 -0.07,0.21 -0.08,0.15 -0.07,0.08 -0.03,0.04 -0.11,0.16 -0.11,0.24 -0.13,0.23 -0.03,0.17 -0.04,0.16 -0.1,0.21 -0.14,0.14 v 0.14 l -0.07,0.11 v 0.13 l -0.1,0.07 -0.09,0.29 -0.12,0.05 v 0.18 l 0.04,0.15 0.09,0.15 -0.2,0.07 -0.08,-0.19 -0.16,-0.1 -0.12,-0.05 -0.05,-0.16 -0.01,-0.18 -0.04,-0.35 -0.27,-0.1 -0.21,-0.07 -0.18,-0.4 -0.2,-0.08 -0.08,-0.24 -0.15,-0.18 -0.15,-0.17 -0.07,-0.25 -0.07,-0.85 0.07,-0.2 0.07,-0.49 0.05,-0.42 0.15,0.11 0.17,-0.03 -0.01,-0.3 -0.04,-0.23 -0.35,-0.29 -0.2,-0.09 -0.07,-0.07 -0.09,-0.05 -0.09,-0.24 -0.2,-0.03 -0.33,-0.19 v -0.53 l -0.22,-0.07 -0.13,-0.23 -0.02,-0.17 -0.06,-0.17 -0.09,-0.38 -0.07,-0.12 -0.05,-0.15 -0.12,-0.12 -0.09,-0.18 -0.08,-0.15 -0.46,-0.45 -0.35,-0.3 -0.29,-0.17 -0.35,-0.21 -0.34,-0.25 -0.36,-0.15 -0.41,-0.16 -0.38,-0.05 -0.55,-0.05 -0.47,-0.24 -0.28,-0.07 -0.18,0.13 -0.23,0.03 -0.22,0.08 -0.22,0.05 -0.29,-0.22 -0.15,-0.17 -0.09,-0.24 -0.16,-0.15 -0.1,-0.14 -0.17,-0.08 -0.16,-0.1 -0.12,-0.08 -0.42,0.03 -0.22,-0.03 -0.23,0.02 -0.4,-0.15 -0.17,-0.13 -0.14,-0.19 -0.2,-0.13 -0.11,-0.2 -0.37,-0.17 -0.49,-0.08 h -0.23 l -0.18,0.15 -0.42,0.09 -0.21,-0.2 -0.28,-0.03 v 0.37 l 0.11,0.39 -0.38,-0.58 -0.31,-0.28 -0.38,-0.2 -0.4,-0.13 -0.23,-0.34 -0.38,-0.25 -0.23,-0.34 -0.26,-0.13 -0.21,-0.13 -0.21,-0.29 -0.07,-0.08 -0.15,-0.15 -0.26,-0.11 -0.19,-0.12 h -0.2 l -0.14,-0.13 -0.13,-0.1 -0.13,-0.03 -0.16,-0.05 -0.14,-0.1 -0.18,-0.13 -0.06,-0.06 -0.11,-0.1 -0.06,-0.24 -0.09,-0.15 -0.16,-0.13 -0.08,-0.23 -0.05,-0.21 -0.1,-0.24 -0.05,-0.25 -0.13,-0.41 -0.21,0.19 -0.09,-0.17 -0.16,-0.05 -0.05,0.69 0.03,0.75 -0.11,0.49 -0.26,-0.39 -0.21,-0.84 -0.31,-0.6 0.24,-1.25 -0.06,-0.72 -0.09,-0.76 v -0.15 l -0.09,-0.08 -0.24,-0.21 -0.21,-0.54 -0.17,-0.59 -0.1,-0.58 0.09,-0.58 0.28,-0.47 0.31,-1.07 0.33,-0.47 0.18,-0.44 0.13,-0.44 0.16,-0.16 0.24,-0.41 0.27,-0.27 -0.08,-0.25 -0.03,-0.26 -0.02,-0.31 0.05,-0.31 -0.13,-0.32 -0.28,-0.21 -0.21,0.37 -0.14,0.41 -0.02,0.45 -0.06,0.12 -0.06,-0.16 -0.11,-0.4 -0.22,0.17 0.04,0.47 -0.06,0.43 -0.12,0.16 -0.15,0.21 -0.21,0.3 -0.13,-0.19 0.09,-0.47 0.19,-0.41 0.14,-0.49 0.25,-0.31 0.33,-0.25 -0.04,-0.54 -0.34,-0.25 -0.25,0.28 -0.13,0.35 -0.06,0.2 -0.02,-0.43 -0.04,0.33 v 0.39 l -0.16,0.23 -0.09,-0.35 0.03,-0.42 -0.14,0.92 -0.1,0.07 v -0.47 l -0.06,0.23 -0.08,0.24 -0.06,0.17 -0.12,0.17 -0.06,0.18 -0.01,0.11 -0.04,0.12 -0.01,0.13 -0.05,0.1 -0.08,0.17 -0.04,0.16 -0.02,0.15 -0.15,0.17 v -0.55 l 0.17,-0.35 0.06,-0.26 0.11,-0.27 0.25,-0.42 0.04,-0.28 0.12,-0.15 0.16,-0.47 0.37,-0.37 0.26,-0.37 0.19,-0.17 0.1,-0.21 0.24,-0.47 0.23,-0.46 0.11,-0.28 0.14,-0.35 0.02,-0.2 0.03,-0.16 0.11,-0.31 0.01,-0.36 0.01,-0.33 0.01,-0.35 0.15,-0.29 0.19,-0.3 0.25,-0.24 0.18,-0.3 0.2,-0.35 0.09,-0.42 0.04,-0.37 0.24,-0.36 0.12,-0.14 0.13,-0.08 0.14,-0.43 0.1,-0.38 0.02,-0.24 -0.02,-0.25 0.01,-0.6 0.02,-0.67 0.08,-0.49 0.1,-0.53 0.3,-1.05 0.3,-0.47 0.11,-0.54 0.27,-0.53 0.13,-0.16 0.25,-0.65 0.14,-0.22 0.06,-0.52 0.02,-0.54 -0.07,-0.51 -0.02,-0.3 -0.1,-0.33 -0.16,-0.12 v -0.6 l 0.04,-0.24 0.09,-0.54 -0.01,-0.28 0.01,-0.29 -0.24,-0.5 -0.1,-0.17 -0.22,-0.23 -0.34,-0.02 -0.31,0.09 -0.22,0.19 -0.08,-0.34 0.02,-0.39 v -0.34 -0.37 l 0.09,-0.4 0.17,-0.3 0.17,0.02 v 0.03 l 0.05,0.03 0.13,0.04 0.15,-0.03 0.29,-0.06 0.01,-0.07 0.15,-0.13 0.13,-0.05 0.28,-0.3 0.1,-0.02 0.09,-0.22 0.05,0.02 0.15,-0.26 0.16,-0.16 0.17,-0.22 0.25,-0.08 h 0.15 l 0.12,-0.06 0.06,-0.11 0.42,-0.26 0.45,-0.04 v -0.02 l 0.07,-0.01 0.02,-0.02 0.22,0.06 0.29,-0.05 0.35,0.01 0.68,-0.02 0.69,-0.13 0.37,-0.01 0.32,0.13 0.16,0.09 0.17,-0.05 0.35,0.26 0.28,0.42 0.3,0.13 0.36,0.14 0.09,0.14 0.11,0.15 0.33,0.12 0.72,-0.03 0.15,0.07 0.12,0.16 0.21,0.18 0.17,0.34 0.24,0.26 0.13,0.12 0.16,0.08 0.07,0.14 0.22,0.05 0.73,0.04 0.8,0.09 0.44,0.03 0.44,0.06 h 0.43 0.47 l 0.37,0.07 0.31,-0.16 0.26,-0.05 0.25,0.17 h 0.28 l 0.06,-0.11 0.16,-0.06 0.1,-0.16 0.25,-0.14 0.28,0.19 0.25,-0.05 h 0.26 l 0.62,0.09 0.62,-0.12 0.24,-0.17 0.28,0.25 0.43,-0.07 0.39,0.26 0.2,0.37 0.37,0.24 0.14,0.47 0.2,0.52 0.09,0.23 0.12,0.25 0.45,0.25 0.75,0.11 0.67,0.41 0.44,0.2 0.5,0.25 0.46,0.16 0.8,0.66 0.54,0.1 0.58,-0.09 0.7,-0.04 h 0.94 l 0.3,0.02 0.56,0.11 1.28,0.39 0.65,0.22 0.61,0.29 0.64,0.27 0.2,0.18 0.38,0.11 0.74,0.09 0.32,0.04 0.79,0.05 0.46,0.03 0.6,-0.02 0.64,-0.02 h 0.71 l 0.56,0.28 0.65,-0.12 0.42,-0.11 0.28,-0.32 0.33,-0.23 0.28,-0.18 0.39,-0.25 0.22,-0.2 0.26,-0.13 0.58,0.19 v -0.02 l 0.18,0.05 0.12,-0.02 0.27,-0.05 0.19,-0.02 0.06,-0.13 0.23,-0.04 0.37,-0.36 0.15,-0.15 0.2,-0.03 0.47,0.08 0.19,0.09 0.32,0.06 0.24,-0.29 0.25,-0.21 0.12,-0.13 0.11,-0.19 -0.11,-0.06 -0.02,-0.11 0.02,-0.28 0.25,0.2 0.31,0.02 0.22,-0.06 0.1,-0.07 0.07,-0.45 -0.2,-0.27 -0.19,-0.07 V 1023 l 0.17,-0.29 0.05,-0.08 0.04,-0.13 0.03,-0.13 0.1,-0.05 0.13,-0.16 0.56,-0.09 0.27,-0.06 0.14,-0.26 0.21,-0.28 0.06,-0.35 v -0.37 l 0.47,-0.37 0.29,-0.39 0.24,-0.41 0.13,-0.6 0.19,-0.51 v -0.21 l 0.06,-0.13 -0.01,-0.28 -0.08,0.07 h -0.06 l -0.03,0.08 -0.09,0.04 -0.09,0.12 -0.08,0.14 -0.2,-0.13 -0.13,-0.16 0.36,-0.1 h 0.09 l 0.07,-0.08 0.1,-0.13 0.27,-0.25 0.13,-0.09 0.1,-0.14 0.14,-0.2 0.13,-0.11 0.02,-0.05 0.09,0.21 0.23,-0.06 h 0.09 l 0.11,-0.06 0.18,-0.22 0.14,0.18 -0.04,0.14 v 0.19 l -0.26,0.03 -0.16,0.03 0.04,0.1 0.01,0.11 0.04,0.1 0.04,0.16 0.06,0.18 0.19,0.12 0.09,0.05 0.14,-0.03 0.05,0.19 0.07,0.24 0.11,0.03 0.1,0.09 0.15,0.2 0.05,0.26 0.15,0.14 0.13,0.21 0.22,0.07 0.17,0.18 0.14,0.17 0.26,0.15 0.23,0.12 0.25,0.15 0.11,0.04 0.17,0.03 0.32,0.03 0.22,0.34 0.25,0.39 0.1,0.36 0.03,0.22 0.12,0.15 0.05,0.17 0.14,0.06 0.2,0.35 0.27,-0.01 0.19,0.26 -0.05,0.39 -0.22,0.29 h 0.16 l 0.09,0.24 0.07,-0.23 0.07,-0.17 0.16,-0.42 0.07,-0.23 0.04,-0.25 0.14,-0.15 0.04,-0.28 h -0.19 l -0.12,-0.08 -0.18,-0.09 v -0.3 l 0.13,-0.25 -0.02,-0.1 0.05,-0.05 v -0.07 l 0.11,-0.09 -0.01,-0.16 -0.08,-0.07 h -0.07 l -0.03,-0.06 -0.08,-0.13 -0.25,-0.24 -0.26,-0.27 -0.13,-0.29 -0.13,-0.38 -0.11,-0.35 0.01,-0.44 -0.01,-0.82 -0.03,-0.41 -0.11,-0.43 -0.16,0.03 -0.24,0.04 -0.41,0.01 -0.35,-0.14 -0.12,-0.48 -0.13,-0.14 -0.04,-0.27 0.17,-0.07 0.19,0.07 0.16,0.09 h 0.21 l 0.07,0.05 0.08,0.07 0.07,0.08 0.09,-0.03 0.21,0.1 0.13,0.06 0.22,0.02 0.11,0.04 0.18,-0.14 0.23,-0.03 0.15,0.29 0.07,0.35 0.13,0.37 0.07,0.34 0.04,0.38 0.07,0.34 0.2,0.23 0.04,0.21 0.03,0.2 0.19,0.26 0.04,-0.12 0.08,-0.13 0.13,-0.22 0.01,-0.12 0.05,-0.05 0.05,-0.1 -0.01,-0.12 0.08,-0.12 0.1,-0.14 0.09,-0.12 0.06,-0.17 0.11,-0.14 0.07,-0.13 0.11,-0.12 0.04,-0.18 -0.12,-0.51 0.03,-0.28 v -0.31 l 0.05,-0.29 -0.11,-0.2 -0.33,-0.31 -0.39,-0.3 -0.17,-0.19 0.24,-0.05 0.18,-0.05 0.21,0.03 0.14,0.02 0.39,0.02 0.15,0.07 0.12,0.11 0.15,0.1 h 0.17 l 0.04,-0.03 h 0.09 l 0.12,-0.08 0.15,-0.05 0.23,-0.14 0.22,-0.16 0.44,-0.45 0.64,-0.82 0.27,-0.37 0.22,-0.49 0.18,-0.53 0.14,-0.55 -0.36,-0.42 -0.12,-0.16 0.12,-0.21 0.07,-0.12 0.02,-0.14 -0.02,-0.12 0.05,-0.22 0.11,-0.1 0.09,-0.11 0.06,-0.08 0.16,-0.29 0.07,-0.03 0.09,-0.03 0.1,-0.05 0.13,-0.08 0.11,-0.12 0.28,-0.47 0.32,-0.58 0.45,-0.33 0.64,-0.12 0.63,-0.19 0.2,-0.02 v -0.03 l 0.04,-0.06 0.06,-0.02 0.12,-0.09 0.06,-0.07 0.05,-0.03 0.07,-0.18 0.12,-0.15 0.17,-0.16 0.21,-0.05 0.17,-0.03 0.07,0.2 0.07,0.14 0.41,0.08 h 0.21 l 0.22,-0.08 -0.01,-0.1 0.12,-0.13 0.19,-0.06 0.1,-0.07 0.09,-0.03 h 0.1 l 0.07,0.08 0.22,0.1 0.19,-0.08 0.22,-0.04 0.18,-0.09 0.05,-0.11 0.09,-0.03 0.12,-0.04 0.09,-0.22 0.22,-0.07 0.19,-0.11 0.25,-0.08 0.42,-0.17 0.17,-0.14 0.16,-0.15 0.3,-0.02 0.26,-0.04 0.24,-0.16 0.12,0.09 0.18,0.1 0.16,0.13 0.16,0.02 0.31,0.25 0.12,0.2 0.14,0.1 0.15,0.16 0.2,0.04 0.22,0.11 0.15,0.14 0.34,0.13 0.46,0.05 0.14,0.14 0.06,0.24 -0.77,0.1 0.13,0.13 0.2,0.13 0.38,0.29 0.48,0.11 h 0.58 l 0.02,-0.84 -0.28,-0.42 -0.41,-0.29 0.14,-0.36 0.35,0.09 0.27,0.27 0.12,0.03 0.12,0.13 0.06,0.14 0.04,0.17 0.45,-0.06 0.18,-0.13 0.05,-0.3 -0.18,-0.09 -0.1,-0.22 0.17,-0.22 0.14,-0.24 0.49,-0.1 0.01,0.08 0.17,0.04 0.05,-0.15 v -0.18 l 0.05,-0.14 0.24,-0.31 h 0.15 l -0.02,0.21 h 0.22 l 0.08,-0.05 h 0.06 l 0.13,-0.16 0.14,-0.15 0.11,-0.13 0.09,-0.39 0.28,-0.12 0.09,0.33 0.02,0.39 -0.05,0.21 -0.06,-0.07 -0.14,-0.11 -0.11,0.01 -0.07,0.09 -0.07,0.06 -0.07,0.1 -0.06,0.09 -0.05,0.05 -0.04,0.16 -0.04,0.1 0.3,-0.01 0.22,-0.06 0.24,0.04 0.29,-0.01 0.27,0.02 0.23,0.05 0.42,0.17 0.2,0.16 0.18,0.18 0.12,0.03 0.04,0.14 0.15,0.06 0.13,0.07 0.1,0.1 0.07,0.02 0.04,0.07 0.13,0.1 v 0.12 l 0.09,0.02 0.15,0.05 v 0.04 l 0.1,0.05 0.04,0.09 0.02,0.27 0.14,0.09 0.05,0.11 0.1,0.01 0.12,0.18 0.32,0.06 0.31,0.01 0.29,0.06 0.3,-0.01 0.24,0.07 0.28,0.01 h 0.3 l 0.28,-0.04 0.68,0.02 0.31,-0.04 0.32,0.01 0.31,-0.08 0.31,0.03 0.58,0.14 0.45,0.43 0.24,0.16 0.29,0.02 0.06,0.37 v 0.24 l 0.05,0.49 -0.15,0.17 v 0.14 l -0.05,0.15 0.09,0.25 0.02,0.22 0.1,0.34 0.11,0.25 0.13,0.58 0.04,0.27 0.09,0.22 0.03,0.28 v 0.3 l -0.03,0.17 0.03,0.18 0.06,0.26 0.12,0.08 v 0.16 l 0.14,0.23 0.14,0.15 0.16,0.19 0.11,0.34 0.13,0.37 0.08,0.1 0.08,0.13 0.05,0.13 0.16,0.13 0.19,0.23 0.02,0.14 0.04,0.14 v 0.2 l 0.03,0.14 v 0.17 l 0.17,0.08 0.08,0.6 0.02,0.35 0.17,0.29 0.22,0.2 0.17,0.27 0.26,0.22 0.17,0.2 0.13,0.16 0.1,0.09 -0.03,0.19 0.01,0.19 0.09,0.33 -0.11,0.3 0.36,0.33 0.06,0.2 0.05,0.17 v 0.14 l 0.05,0.11 0.09,0.12 0.06,0.15 0.14,0.05 0.1,0.09 0.13,0.2 0.24,0.16 0.08,0.23 0.07,0.06 0.1,0.08 0.1,0.1 0.01,0.05 0.04,0.07 0.24,0.08 0.2,0.09 0.14,-0.01 0.1,-0.01 0.19,0.05 v -0.06 l -0.16,-0.12 -0.2,0.02 -0.33,0.26 0.28,0.09 0.3,0.07 0.33,0.37 0.33,0.17 0.26,0.25 -0.1,0.32 -0.21,0.27 0.21,0.07 0.1,0.24 0.13,0.18 v 0.1 l 0.14,0.07 0.04,0.12 0.09,0.18 0.08,0.11 0.08,0.14 0.01,0.07 0.08,0.01 0.08,0.13 0.07,0.31 0.18,0.32 0.13,0.33 0.07,0.33 0.11,0.4 0.08,0.4 -0.03,0.32 -0.05,0.78 0.03,0.42 0.15,0.39 0.21,0.29 0.09,0.35 v 0.24 l 0.07,0.16 0.24,0.75 0.07,0.42 v 0.27 l 0.01,0.26 -0.03,0.18 0.03,0.19 0.14,0.35 0.1,0.2 0.04,0.23 0.15,0.34 0.22,0.32 0.02,0.51 -0.04,0.22"
            />
            <path
              id="path1594"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2757.29,1057.23 -0.18,-0.31 -0.06,-0.34 h 0.29 l 0.12,0.39 -0.17,0.26"
            />
            <path
              id="path1596"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2760.05,1057.88 -0.15,-0.14 0.12,-0.07 z"
            />
            <path
              id="path1598"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2759.9,1057.71 v 0.03 -0.03"
            />
            <path
              id="path1600"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2759.7,1057.37 v 0 l 0.15,0.09 -0.13,0.1 -0.02,-0.19"
            />
            <path
              id="path1602"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2759.99,1057.34 v 0 l -0.01,0.02 z"
            />
            <path
              id="path1604"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2760.08,1057.34 0.02,0.15 -0.11,0.02 -0.03,-0.13 0.03,-0.04 h 0.09"
            />
            <path
              id="path1606"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2794.65,1083.53 0.02,0.18 -0.13,0.24 -0.14,0.26 -0.24,0.01 -0.22,0.12 -0.05,-0.14 -0.12,0.03 -0.15,-0.12 -0.07,-0.12 -0.06,-0.07 v -0.31 l -0.06,0.16 -0.09,0.17 -0.28,-0.06 -0.33,-0.12 0.06,-0.17 -0.12,-0.05 -0.26,0.39 -0.22,0.28 -0.26,-0.13 0.07,-0.47 0.18,-0.47 -0.06,-0.1 -0.05,0.17 -0.07,0.25 -0.26,0.4 -0.27,-0.23 V 1083 l -0.3,-0.23 0.43,-0.31 0.33,0.04 0.33,-0.02 0.29,0.13 h 0.21 l 0.62,-0.47 0.03,0.17 0.08,0.05 0.02,0.11 0.11,0.08 0.1,0.03 0.1,0.01 0.14,0.2 0.11,0.01 0.09,0.05 v 0.1 l 0.11,0.12 0.13,0.1 0.14,0.09 v 0.21 l 0.11,0.06"
            />
            <path
              id="path1608"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2797.08,1084.85 -0.04,-0.15 -0.02,-0.13 0.12,-0.3 0.11,-0.23 0.02,0.54 -0.06,0.46 -0.13,-0.19"
            />
            <path
              id="path1610"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2797.18,1085.05 0.03,-0.01 h 0.02 z"
            />
            <path
              id="path1612"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2807.27,1085.18 -0.15,-0.46 -0.13,-0.2 -0.18,-0.22 -0.13,-0.19 -0.14,-0.19 -0.17,-0.13 -0.14,-0.19 -0.22,-0.15 -0.13,-0.15 0.48,0.21 0.41,0.43 0.37,0.43 0.13,0.26 0.12,0.24 0.03,0.31 h -0.15"
            />
            <path
              id="path1614"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2807.85,1075.93 -0.38,0.34 -0.06,0.48 0.42,0.53 -0.41,0.06 -0.09,0.29 -0.14,0.33 -0.26,-0.58 -0.21,0.03 -0.12,-0.37 v 0.05 l -0.02,-0.43 -0.02,-0.44 0.66,-0.2 0.63,-0.09"
            />
            <path
              id="path1616"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2806.19,1077.14 0.01,0.31 -0.03,0.2 -0.15,-0.03 -0.01,-0.17 0.01,-0.29 0.17,-0.02"
            />
            <path
              id="path1618"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2805.88,1078.3 0.04,-0.23 0.1,0.15 -0.07,0.26 -0.08,-0.16 -0.03,-0.02 h 0.04"
            />
            <path
              id="path1620"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2807.92,1071.82 0.07,-0.14 0.09,-0.11 0.08,0.28 -0.07,0.32 -0.17,-0.15 -0.07,-0.11 0.07,-0.09"
            />
            <path
              id="path1622"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2814.73,1069.81 -0.2,0.21 -0.37,-0.07 -0.29,-0.13 -0.3,-0.12 -0.14,-0.09 -0.07,-0.06 v -0.36 l 0.17,-0.15 0.38,0.14 0.23,0.31 0.29,0.17 0.3,0.15"
            />
            <path
              id="path1624"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2814.15,1068.26 -0.01,-0.06 -0.04,-0.06 -0.03,-0.01 -0.07,-0.04 -0.03,-0.07 0.03,-0.09 0.16,-0.03 0.14,0.17 -0.01,0.19 h -0.14"
            />
            <path
              id="path1626"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2806.83,1072.38 -0.03,-0.29 0.21,-0.02 v 0.31 h -0.18"
            />
            <path
              id="path1628"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2807.17,1071.89 -0.01,-0.12 0.06,-0.1 0.13,-0.12 0.12,0.1 0.04,0.26 -0.18,0.05 -0.16,-0.07"
            />
            <path
              id="path1630"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2838.24,1059.16 v 0.06 l 0.1,-0.21 0.09,0.16 -0.09,0.15 -0.1,-0.16"
            />
            <path
              id="path1632"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2838.11,1059.67 -0.03,-0.12 0.11,-0.03 0.02,0.12 -0.1,0.03"
            />
            <path
              id="path1634"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2849.05,1044.04 -0.05,-0.27 -0.07,-0.47 0.04,-0.2 0.03,-0.24 0.09,-0.17 0.01,0.11 0.02,0.16 0.03,0.33 0.35,0.98 0.31,0.7 -0.16,0.76 -0.27,0.19 v -0.26 l 0.11,-0.36 -0.24,-0.56 -0.2,-0.7"
            />
            <path
              id="path1636"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2849.97,1038.39 0.14,-0.09 0.01,0.19 v 0.22 l -0.15,0.31 -0.12,-0.31 0.08,-0.3 0.04,-0.02"
            />
            <path
              id="path1638"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2835.63,1001 0.17,-0.32 0.27,-0.38 0.42,0.18 0.04,0.28 -0.09,0.42 -0.31,0.32 -0.35,0.45 -0.26,0.07 -0.19,-0.21 0.01,-0.26 0.08,-0.23 0.21,-0.32"
            />
            <path
              id="path1640"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2836.71,1000.13 -0.56,0.04 -0.37,-0.174 0.17,-0.211 h 0.3 l 0.28,-0.047 0.32,-0.015 0.11,0.218 -0.25,0.189"
            />
            <path
              id="path1642"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2836.17,999.348 0.17,-0.035 0.04,0.207 -0.11,0.16 -0.11,-0.176 0.01,0.023 v -0.179"
            />
            <path
              id="path1644"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2836.66,995.133 -0.04,0.25 -0.06,0.199 -0.05,0.188 0.05,0.234 -0.08,0.531 0.01,0.496 0.02,0.477 -0.02,0.398 -0.01,0.414 -0.41,0.266 -0.29,0.254 -0.17,-0.039 -0.12,-0.176 h -0.19 l -0.18,0.027 -0.35,0.067 -0.2,-0.305 -0.29,-0.117 -0.14,0.09 -0.16,0.051 -0.33,-0.118 -0.16,0.035 -0.18,0.012 -0.35,-0.125 -0.49,-0.07 -0.49,-0.266 -0.27,-0.008 -0.2,-0.054 -0.28,0.094 -0.24,0.031 -0.19,0.156 -0.2,0.074 -0.39,0.254 -0.44,0.231 -0.49,0.121 -0.41,0.277 -0.56,0.035 -0.34,0.196 0.24,0.062 -0.16,0.168 -0.11,-0.051 -0.12,-0.019 -0.17,-0.121 -0.16,0.168 -0.25,0.043 0.03,-0.211 0.02,-0.145 -0.05,-0.426 0.05,-0.504 v -0.398 l 0.14,-0.223 0.19,-0.476 0.09,-0.539 0.39,-0.262 0.21,-0.402 0.34,-0.383 0.22,-0.438 0.2,-0.398 0.3,-0.403 -0.34,0.27 -0.33,0.156 -0.05,-0.484 0.22,-0.43 0.2,-0.359 0.14,-0.453 0.56,-0.582 0.32,-0.45 0.14,-0.207 0.09,0.157 0.03,0.05 0.3,-0.296 0.06,-0.586 0.71,-0.11 0.43,-0.074 0.4,-0.137 0.71,-0.027 0.19,0.32 0.18,0.352 0.04,0.488 0.21,-0.281 0.27,-0.012 v 0.266 l 0.01,0.179 0.04,0.313 0.15,0.051 0.18,0.039 0.23,0.144 0.08,0.305 0.2,-0.078 0.17,-0.445 -0.1,-0.274 0.22,-0.16 0.15,-0.176 0.25,0.024 0.24,0.117 0.01,0.371 0.1,0.312 -0.29,0.149 0.12,0.348 -0.03,0.378 0.09,0.18 0.13,0.309 0.04,0.418 0.12,0.351 0.2,0.254 0.28,-0.137 0.07,-0.371 0.07,-0.355 0.11,0.512 -0.03,0.449"
            />
            <path
              id="path1646"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2833.81,991.387 v -0.168 l -0.01,0.105 0.06,-0.273 0.04,-0.219 0.22,0.18 -0.12,0.367 -0.19,0.008"
            />
            <path
              id="path1648"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2835.95,993.535 -0.11,-0.258 0.01,0.024 v 0.027 l 0.14,-0.238 0.16,0.394 -0.2,0.051"
            />
            <path
              id="path1650"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2825.5,1002.77 -0.39,-0.47 0.02,-0.23 0.05,-0.2 0.02,-0.33 0.08,-0.31 0.27,-0.06 0.35,0.74 -0.22,0.78 -0.18,0.08"
            />
            <path
              id="path1652"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2810.16,1014.37 -0.17,0.04 -0.44,0.18 -0.29,0.31 h -0.25 l -0.24,0.04 -0.39,-0.22 h -0.45 l -0.47,-0.13 -0.52,-0.14 -0.02,-0.4 0.71,-0.41 0.49,0.01 0.42,0.12 0.4,-0.1 0.39,-0.06 0.24,0.4 0.46,0.04 0.46,-0.07 0.27,0.25 -0.38,0.25 -0.22,-0.11"
            />
            <path
              id="path1654"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2827.55,999.996 -0.07,0.274 -0.19,-0.21 v -0.224 l 0.09,-0.133 0.17,0.293"
            />
            <path
              id="path1656"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2827.72,1000.15 v 0.01 -0.01"
            />
            <path
              id="path1658"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2827.9,1000.04 0.17,0.18 -0.18,0.14 -0.17,-0.2 0.18,-0.12"
            />
            <path
              id="path1660"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2806.01,1016.75 -0.23,0.16 -0.03,-0.23 0.27,-0.22 -0.01,0.29"
            />
            <path
              id="path1662"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2801.75,1020.61 -0.04,-0.22 0.16,-0.06 0.07,0.27 -0.19,0.01"
            />
            <path
              id="path1664"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2799.68,1024.69 -0.21,-0.26 0.24,-0.06 z"
            />
            <path
              id="path1666"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2778.31,1071.96 -0.04,0.33 -0.14,0.25 -0.19,-0.25 0.15,-0.14 0.22,-0.19"
            />
            <path
              id="path1668"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2821.07,1086.89 -0.24,0.1 -0.11,-0.44 0.35,0.1 v 0.24"
            />
            <path
              id="path1670"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2821.31,1088.39 -0.29,-0.01 -0.06,-0.4 0.36,0.06 -0.01,0.35"
            />
            <path
              id="path1672"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2832.12,1063.64 0.14,-0.28 0.18,0.19 z"
            />
            <path
              id="path1674"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2833.14,1062.04 0.2,-0.03 -0.06,0.37 z"
            />
            <path
              id="path1676"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2832.67,1062.42 0.21,0.07 -0.21,-0.07"
            />
            <path
              id="path1678"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2828.52,1005.83 0.39,-0.1 -0.39,0.1"
            />
            <path
              id="path1680"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2829.18,1006.16 -0.11,0.24 -0.24,-0.29 z"
            />
            <path
              id="path1682"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2752.04,1045.23 0.15,-0.33 0.1,0.74 -0.08,0.41 -0.17,-0.82"
            />
            <path
              id="path1684"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2753.89,1043 -0.13,0.32 0.13,-0.32"
            />
            <path
              id="path1686"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2799.13,1083.15 0.26,0.2 -0.26,-0.2"
            />
            <path
              id="path1688"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2799.06,1083.57 0.45,0.17 -0.45,-0.17"
            />
            <path
              id="path1690"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2805.6,1077.77 0.12,-0.34 -0.12,0.34"
            />
            <path
              id="path1692"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2908.29,994.383 -0.14,-0.098 -0.44,-0.07 0.1,0.055 -0.18,-0.079 -0.24,-0.031 0.31,0.113 0.24,0.11 0.18,0.156 0.15,0.215 -0.38,0.101 -0.31,-0.183 -0.12,-0.149 -0.17,-0.14 -0.13,-0.168 -0.18,-0.094 0.23,0.442 -0.3,0.195 0.05,0.172 -0.05,0.011 v 0.071 l 0.07,0.047 -0.44,-0.278 -0.45,-0.062 -0.32,-0.297 -0.21,-0.149 -0.24,-0.074 -0.12,-0.179 -0.21,0.113 -0.09,0.215 -0.19,0.172 -0.1,0.164 0.07,0.257 0.03,0.536 -0.2,0.398 -0.2,-0.184 -0.17,-0.269 -0.14,0.336 -0.1,0.09 -0.03,0.16 -0.06,0.398 -0.63,0.078 -0.53,-0.41 -0.55,-0.414 -0.13,-0.746 0.07,-0.937 -0.4,-0.211 -0.24,-0.328 -0.32,-0.34 -0.3,-0.196 -0.75,-0.218 -0.05,-0.481 -0.19,-0.387 -0.13,-0.461 -0.2,-0.378 -0.46,-0.676 -0.24,-0.27 -0.28,-0.207 -0.35,-0.277 -0.33,-0.192 -0.46,-0.144 -0.33,-0.203 -0.36,-0.106 -0.29,-0.211 -0.11,-0.148 -0.22,-0.047 -0.31,-0.32 -0.23,-0.086 -0.36,-0.18 -0.37,-0.234 -0.52,-0.196 -1.14,-0.546 -1.06,-0.489 -0.27,0.035 -0.35,-0.023 -0.3,-0.016 -0.14,-0.222 -0.18,-0.172 -0.24,-0.195 -0.13,-0.247 -0.22,-0.156 -0.03,-0.187 -0.42,-0.125 -0.05,-0.293 -0.11,-0.156 h 0.04 l -0.07,-0.024 -0.44,-0.066 -0.14,-0.153 -0.19,-0.132 -0.16,-0.118 -0.26,-0.054 -0.17,-0.121 -0.17,-0.106 -0.35,-0.34 -0.34,-0.219 -0.14,-0.117 -0.16,-0.172 -0.28,-0.304 -0.13,-0.227 -0.15,-0.203 -0.11,-0.223 -0.2,-0.097 -0.15,-0.235 -0.21,-0.242 -0.08,-0.414 0.06,-0.445 0.36,-0.153 0.02,-0.132 0.07,-0.078 0.01,-0.125 0.07,-0.122 0.49,-0.152 0.61,-0.035 0.28,-0.039 0.32,0.004 0.25,-0.102 0.18,0.199 0.24,0.024 0.23,-0.125 0.3,-0.059 0.1,-0.109 0.13,-0.027 0.22,-0.434 0.47,0.184 0.4,-0.067 0.21,-0.191 0.1,-0.297 0.1,-0.371 0.82,-0.02 0.37,0.086 0.17,-0.066 0.22,0.078 v -0.285 l 0.74,-0.067 0.66,0.016 0.64,0.129 0.57,0.242 0.31,0.453 0.63,0.238 0.41,0.489 0.48,0.355 0.79,0.09 v 0.609 l 0.19,0.372 0.16,0.058 0.13,0.211 0.21,0.395 0.02,0.253 0.08,0.211 0.09,0.204 0.16,0.164 0.31,0.285 0.24,0.933 0.03,0.305 0.12,0.195 0.09,0.547 0.44,0.336 1.16,0.496 0.66,0.27 1.27,0.332 1.35,-0.297 0.28,0.602 -1,0.656 0.4,1.164 1.19,0.5 0.6,1.101 0.76,0.782 0.17,0.222 0.22,0.133 0.11,0.238 v 0.164 l 0.15,0.122 0.28,0.152 0.27,0.109 0.14,0.262 0.24,0.125 0.17,0.254 -0.39,0.039 -0.08,0.258 -0.26,0.496 0.24,0.43 0.29,0.082 0.2,0.257 0.28,0.5 -0.32,-0.171 -0.13,-0.18"
            />
            <path
              id="path1694"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2907.18,995.281 0.18,0.496 -0.29,-0.074 -0.15,-0.445 0.26,0.023"
            />
            <path
              id="path1696"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890.43,977.371 -0.32,0.106 0.35,0.058 -0.14,0.285 -0.19,0.301 -0.28,0.172 -0.43,-0.035 0.04,-0.414 -0.04,-0.352 -0.32,-0.246 -0.2,-0.344 -0.26,-0.226 0.25,-0.129 0.65,0.269 0.61,0.129 0.56,0.121 -0.28,0.305"
            />
            <path
              id="path1698"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2920.66,1005.09 -0.56,0.24 -0.66,0.11 -0.52,-0.31 -0.51,-0.35 -0.39,-0.53 -0.54,-0.3 -1.37,0.3 -0.2,0.07 -0.08,0.01 -0.12,0.03 -0.18,0.15 -0.24,0.09 -0.18,0.09 -0.17,0.13 -0.28,0.07 -0.39,0.25 -0.24,0.04 -0.17,0.12 -0.09,0.13 -0.3,0.16 -0.35,0.84 -0.12,0.41 -0.09,0.48 v 0.21 l -0.04,0.19 -0.46,0.03 0.22,0.25 0.24,0.18 -0.28,0.01 -0.28,-0.05 -0.21,0.41 -0.33,0.39 -0.26,0.02 -0.02,-0.21 0.31,-0.25 -0.03,-0.23 0.13,-0.2 -0.2,-0.3 0.22,-0.39 0.06,-0.24 0.06,-0.27 -0.3,-0.16 -0.34,0.24 -0.1,0.51 -0.25,0.09 -0.29,0.05 -0.18,0.1 -0.25,0.06 -0.18,0.34 -0.41,0.1 -0.04,0.23 -0.04,0.25 0.04,0.45 0.23,0.3 -0.2,0.34 -0.31,0.35 -0.25,0.34 -0.28,0.22 0.09,0.33 0.27,0.07 -0.03,0.31 -0.08,0.1 -0.06,0.16 -0.02,0.32 -0.13,0.27 -0.28,0.12 -0.1,0.27 -0.18,0.25 -0.12,-0.01 -0.1,-0.07 -0.13,0.02 -0.13,0.04 -0.12,0.18 -0.01,0.26 -0.23,0.01 -0.17,0.09 -0.09,0.21 -0.19,0.09 -0.2,0.15 -0.46,0.13 -0.12,0.12 -0.14,-0.12 0.06,-0.19 h -0.03 -0.1 -0.08 l -0.02,0.05 -0.12,0.01 -0.1,0.03 v 0.21 l 0.16,0.08 -0.16,0.26 -0.14,-0.13 -0.15,-0.08 -0.08,-0.12 -0.13,0.09 -0.07,0.18 -0.08,0.17 -0.26,0.26 -0.24,0.25 0.06,0.37 -0.07,0.2 -0.17,0.06 h -0.2 l -0.05,-0.19 -0.05,0.06 h -0.08 l -0.15,0.15 h -0.15 -0.13 l 0.08,-0.2 0.04,-0.16 0.24,-0.27 0.11,-0.06 0.09,-0.08 0.11,-0.14 0.06,-0.19 0.16,-0.1 0.14,-0.14 0.11,-0.13 0.15,-0.16 0.06,-0.17 0.07,-0.11 0.04,-0.2 v -0.16 l -0.14,-0.05 -0.05,-0.2 0.17,-0.27 0.22,-0.28 0.27,-0.34 0.18,-0.22 0.18,-0.26 0.17,-0.25 0.49,-0.53 0.57,-0.68 0.21,-0.28 0.19,-0.37 0.47,-0.33 -0.35,0.69 -0.09,0.12 0.2,-0.05 0.09,-0.04 0.1,-0.11 0.15,-0.16 0.19,-0.09 v -0.19 l 0.06,-0.2 0.14,-0.02 0.13,-0.07 0.1,0.23 0.04,-0.35 -0.01,-0.39 -0.03,-0.17 -0.19,0.25 -0.13,0.3 -0.27,0.11 0.06,-0.44 0.34,-0.44 0.13,-0.17 0.16,-0.32 0.04,-0.42 0.24,-0.14 0.2,-0.37 0.14,-0.32 0.18,-0.32 0.07,-0.34 0.09,-0.17 0.03,-0.24 0.13,-0.3 -0.07,-0.42 -0.09,-0.59 -0.18,-0.57 -0.12,-0.63 -0.1,-0.69 -0.17,-0.63 -0.41,-0.39 -0.61,-0.08 -0.51,-0.19 -0.55,-0.19 -0.32,-0.8 0.22,-0.24 0.55,-0.328 0.37,-0.043 0.32,-0.097 0.24,-0.235 0.25,-0.199 0.15,-0.121 0.12,-0.164 0.49,-0.125 0.59,-0.133 0.55,-0.398 0.4,-0.567 0.06,-0.797 -0.11,-0.777 -0.16,-0.133 -0.07,-0.129 -0.15,-0.027 -0.1,-0.219 -0.18,-0.203 -0.29,-0.352 -0.25,-0.351 -0.37,-0.285 -0.06,-0.352 0.4,-0.082 0.2,-0.07 0.21,-0.137 0.29,0.09 0.26,0.082 0.29,-0.105 0.14,-0.598 0.36,-0.074 0.24,0.172 0.28,0.097 0.33,0.11 0.65,0.519 0.62,0.719 0.49,0.683 0.55,0.696 0.34,0.293 0.32,0.258 0.14,0.472 0.26,0.238 0.19,0.325 0.22,0.394 0.22,0.348 0.13,0.476 -0.1,0.301 -0.44,0.242 0.28,0.645 0.17,0.161 0.09,0.25 0.19,0.13 0.51,0.1 0.25,0.11 0.29,0.01 0.59,-0.02 0.59,-0.08 0.01,-0.28 -0.06,-0.264 0.2,-0.098 0.07,0.282 0.12,0.32 -0.18,0.14 v 0.25 l 0.05,0.51 0.27,0.36 0.49,0.13 0.39,0.27 0.17,0.47 v 0.28 l -0.05,0.28 0.05,0.26 -0.03,0.31 0.17,0.53 0.42,0.42 -0.38,0.38"
            />
            <path
              id="path1700"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2911.7,1010.22 -0.21,-0.02 -0.01,-0.43 0.32,-0.28 0.3,-0.12 -0.06,0.3 -0.17,0.24 -0.17,0.31"
            />
            <path
              id="path1702"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2911.11,1007.79 -0.06,0.26 -0.23,0.15 -0.06,-0.24 0.35,-0.17"
            />
            <path
              id="path1704"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2910.58,1010.04 -0.02,-0.21 0.24,0.08 z"
            />
            <path
              id="path1706"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2886.01,1053.53 0.1,-0.17 0.19,-0.03 0.16,-0.02 0.17,-0.2 0.14,-0.27 0.11,0.11 -0.11,0.34 h 0.17 l 0.08,-0.09 0.14,-0.06 h 0.23 l -0.01,0.11 v 0.11 l -0.08,0.19 -0.02,0.11 -0.07,0.03 -0.07,0.14 -0.02,0.15 -0.07,0.08 -0.05,0.1 -0.13,0.05 -0.1,0.03 -0.16,-0.03 -0.21,0.18 -0.1,0.01 -0.07,0.1 -0.11,0.12 -0.06,0.1 -0.22,0.1 -0.15,0.19 -0.07,0.11 -0.14,0.08 -0.17,0.16 h -0.16 l -0.09,0.03 -0.08,0.11 -0.06,0.11 -0.12,0.02 -0.1,0.05 -0.13,0.19 -0.13,-0.19 -0.18,0.29 -0.36,-0.04 v 0.28 l -0.17,0.1 -0.18,0.1 h -0.14 l -0.11,-0.03 v 0.41 l -0.4,-0.01 0.03,0.13 -0.04,0.11 -0.13,0.32 -0.11,0.15 -0.2,0.01 v 0.02 l -0.05,0.24 -0.12,0.17 h -0.14 l -0.13,0.07 -0.15,0.06 -0.12,0.1 -0.33,0.16 -0.13,0.13 -0.18,0.18 -0.14,0.13 -0.09,0.04 -0.05,0.12 -0.17,0.11 -0.19,0.08 -0.14,0.25 -0.12,0.05 -0.09,0.1 -0.15,0.01 -0.11,0.06 -0.09,-0.26 -0.33,0.31 -0.35,0.3 -0.37,0.31 0.19,-0.34 0.14,-0.2 -0.14,-0.1 0.2,-0.17 0.14,-0.03 0.09,-0.1 0.04,-0.25 -0.04,-0.26 0.16,-0.09 0.16,-0.11 0.11,-0.16 0.09,-0.19 0.14,-0.15 0.04,-0.06 0.01,-0.13 0.09,-0.05 0.04,-0.08 0.08,-0.16 0.14,-0.07 0.14,-0.03 0.29,-0.12 -0.04,-0.16 0.07,-0.13 0.19,-0.02 0.06,-0.05 h 0.09 l 0.09,-0.38 0.06,-0.03 0.1,-0.07 0.12,-0.13 -0.08,-0.06 0.11,-0.06 0.14,-0.02 0.07,-0.06 0.2,-0.09 0.07,-0.08 0.04,-0.12 0.18,-0.08 0.08,-0.17 0.13,-0.09 0.1,-0.03 0.19,-0.1 0.21,-0.09 0.06,-0.05 0.03,-0.11 0.17,-0.07 0.2,-0.05 0.22,-0.07 0.05,-0.09 0.14,-0.01 0.32,-0.28 0.1,-0.03 0.09,-0.08 h 0.11 0.15 v -0.07 l 0.08,0.02 0.09,-0.05 0.08,-0.17 0.02,-0.2 0.2,-0.26 0.22,-0.04 0.08,-0.09 0.1,0.02 0.13,-0.06 h 0.1 l 0.08,-0.06 0.19,-0.04"
            />
            <path
              id="path1708"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2877.66,1061.6 0.05,-0.19 0.24,-0.38 -0.06,0.33 -0.23,0.24"
            />
            <path
              id="path1710"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2887.59,1057.57 -0.04,-0.35 0.34,-0.1 0.32,-0.24 0.25,0.01 -0.02,0.42 -0.3,0.3 -0.07,0.33 -0.04,0.38 -0.4,-0.05 h -0.17 l -0.14,-0.14 0.14,-0.17 0.23,0.04 0.1,-0.04 0.04,-0.16 -0.14,-0.07 -0.1,-0.16"
            />
            <path
              id="path1712"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2889.76,1055.71 0.1,-0.18 0.18,-0.11 0.28,-0.12 0.21,0.34 -0.12,0.31 -0.28,0.06 -0.13,0.24 -0.24,-0.07 -0.09,-0.13 0.09,-0.34"
            />
            <path
              id="path1714"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2886.01,1059.17 0.15,-0.24 -0.04,-0.18 -0.04,-0.18 -0.07,-0.14 -0.13,-0.15 0.13,-0.14 0.17,0.19 0.08,0.2 -0.01,0.24 0.03,0.34 -0.27,0.06"
            />
            <path
              id="path1716"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2893.77,1064.31 -0.2,0.22 -0.29,0.22 -0.29,-0.24 0.05,-0.49 0.58,-0.35 0.32,-0.05 0.03,0.39 -0.19,0.07 -0.16,0.04 0.15,0.19"
            />
            <path
              id="path1718"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2894.17,1061.56 0.26,0.4 -0.39,0.3 -0.27,0.25 -0.02,-0.58 0.42,-0.37"
            />
            <path
              id="path1720"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2895.16,1059.91 0.18,-0.14 0.28,0.24 -0.39,0.13 -0.07,-0.23"
            />
            <path
              id="path1722"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2888.83,1052.27 -0.19,0.32 -0.17,-0.12 0.05,-0.18 0.31,-0.02"
            />
            <path
              id="path1724"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2891.32,1068.07 -0.46,-0.15 -0.07,-0.25 0.07,-0.16 0.62,-0.26 0.2,0.42 -0.36,0.4"
            />
            <path
              id="path1726"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2889.27,1071.16 0.38,0.11 -0.28,0.48 -0.45,0.4 -0.21,0.15 -0.2,0.19 -0.23,0.37 -0.34,0.25 -0.07,-0.17 -0.03,-0.33 v -0.02 l -0.05,-0.2 0.14,-0.1 0.21,0.05 0.19,-0.02 0.1,-0.47 0.04,-0.44 0.04,-0.16 0.03,-0.28 0.38,0.09 0.35,0.1"
            />
            <path
              id="path1728"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2886.56,1074.11 0.1,-0.23 0.21,-0.13 0.11,0.2 h 0.27 l 0.21,0.05 0.09,-0.24 0.34,0.04 -0.02,0.71 -0.18,0.66 -0.27,0.66 -0.17,-0.24 -0.33,-0.43 -0.24,0.54 -0.25,0.66 -0.38,0.29 -0.04,-0.52 0.07,-0.22 0.12,-0.22 0.06,-0.28 0.04,-0.23 0.06,-0.32 -0.03,-0.28 0.23,-0.47"
            />
            <path
              id="path1730"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890,1074.73 0.05,0.25 -0.2,-0.05 -0.34,-0.25 -0.23,-0.27 0.43,-0.04 0.29,0.36"
            />
            <path
              id="path1732"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890.59,1075.73 -0.1,0.26 v -0.53 l 0.07,-0.41 0.1,-0.39 0.04,0.59 -0.11,0.48"
            />
            <path
              id="path1734"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890.56,1074.33 -0.01,-0.57 0.14,-0.73 0.21,-0.19 -0.08,0.63 -0.08,0.74 -0.18,0.12"
            />
            <path
              id="path1736"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890.9,1071.65 0.02,0.36 -0.22,0.39 -0.27,-0.12 -0.34,-0.12 -0.11,-0.17 0.3,-0.31 0.62,-0.03"
            />
            <path
              id="path1738"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890.74,1070.27 0.29,0.12 0.13,0.16 -0.2,0.15 -0.17,0.26 -0.2,-0.09 -0.04,-0.3 0.19,-0.3"
            />
            <path
              id="path1740"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2891.44,1070.45 -0.15,-0.09 0.03,-0.13 0.21,0.01 -0.09,0.21"
            />
            <path
              id="path1742"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2888.41,1079.49 0.08,-0.35 0.31,0.06 0.06,0.48 -0.45,-0.19"
            />
            <path
              id="path1744"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2891.73,1069.95 h 0.16 l -0.07,0.16 -0.14,-0.05 0.05,-0.11"
            />
            <path
              id="path1746"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2891.41,1069.45 -0.09,0.17 -0.13,-0.07 0.04,-0.1 h 0.18"
            />
            <path
              id="path1748"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890.75,1071.36 0.04,-0.11 h 0.13 l -0.06,0.18 -0.11,-0.07"
            />
            <path
              id="path1750"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2888.55,1078.1 0.2,-0.26 0.35,0.16 -0.3,0.38 -0.25,-0.28"
            />
            <path
              id="path1752"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2921.21,1067.28 v 0.22 l -0.03,0.17 -0.06,0.06 v 0.09 l -0.03,0.16 -0.05,0.2 -0.16,0.03 -0.04,0.19 h -0.09 l -0.08,0.02 v 0.06 l -0.12,0.06 -0.05,0.07 -0.28,0.21 -0.15,0.26 -0.29,-0.08 -0.32,-0.14 -0.26,-0.01 -0.28,-0.03 -0.26,-0.03 -0.3,-0.09 -0.1,-0.09 -0.12,-0.07 -0.11,-0.09 -0.06,-0.13 -0.12,-0.07 -0.11,-0.12 -0.06,-0.33 -0.18,-0.12 -0.06,-0.13 -0.16,-0.08 v -0.15 l -0.03,-0.2 0.09,-0.11 0.08,-0.11 0.67,-0.36 0.54,-0.22 0.52,-0.07 0.54,-0.02 0.41,0.2 0.43,0.26 0.62,-0.04 0.23,0.44 -0.15,0.02 -0.02,0.17"
            />
            <path
              id="path1754"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2924.1,1071.65 0.07,0.08 0.09,0.06 0.05,0.02 0.02,0.04 0.06,-0.04 0.06,0.04 0.02,0.1 0.09,0.07 h 0.09 l 0.02,0.1 0.06,0.1 0.11,0.09 v 0.03 h 0.04 l 0.08,0.22 0.13,0.15 -0.34,0.12 -0.26,-0.02 -0.13,-0.01 h -0.06 l -0.01,-0.08 -0.12,-0.03 -0.07,-0.1 -0.12,-0.02 h -0.13 l -0.2,-0.13 -0.11,-0.14 -0.1,-0.14 h -0.1 l -0.11,-0.03 -0.12,0.03 -0.08,-0.03 -0.22,0.02 -0.19,-0.08 -0.08,-0.15 -0.09,0.02 h -0.11 l -0.17,-0.09 -0.04,-0.11 -0.06,-0.11 -0.14,0.05 -0.05,-0.11 -0.08,-0.12 -0.11,-0.03 -0.04,-0.08 h -0.22 l -0.05,-0.04 -0.03,0.04 -0.12,0.02 -0.12,0.02 -0.17,-0.18 v -0.11 l -0.09,-0.08 0.06,-0.12 0.05,-0.02 0.33,0.01 0.06,-0.24 0.06,-0.05 0.04,-0.11 h -0.02 l 0.1,-0.18 0.19,0.04 0.08,0.09 0.03,0.09 0.06,0.08 0.04,0.11 0.04,0.03 0.07,0.07 0.17,-0.07 0.12,-0.13 0.18,0.06 0.06,0.26 0.21,0.03 0.14,0.17 0.13,0.07 0.12,0.02 0.14,0.03 0.07,-0.08 0.08,-0.05 0.11,-0.07 0.11,-0.04 0.11,-0.03 0.03,0.26 0.03,0.14 0.04,-0.02 0.04,0.05 0.07,0.05 0.04,0.13 0.06,0.06"
            />
            <path
              id="path1756"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2925.16,1071.26 v 0.2 l 0.04,0.17 0.04,0.14 -0.04,0.2 -0.14,-0.01 -0.1,-0.14 -0.11,-0.05 -0.1,-0.07 -0.17,-0.19 -0.11,-0.1 -0.11,-0.11 -0.09,-0.08 -0.13,-0.12 -0.1,-0.11 h 0.13 l 0.14,0.08 0.15,0.09 h 0.21 l 0.2,-0.02 0.18,-0.07 0.12,-0.03 -0.01,0.22"
            />
            <path
              id="path1758"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2925.32,1070.7 -0.08,-0.15 -0.08,-0.13 0.1,-0.08 0.14,-0.03 0.03,0.53 -0.11,-0.14"
            />
            <path
              id="path1760"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2921.76,1068.45 -0.11,-0.28 0.06,-0.19 0.2,0.15 -0.15,0.32"
            />
            <path
              id="path1762"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2923.38,1067.28 h -0.21 l 0.12,-0.29 0.21,-0.22 -0.01,0.31 -0.11,0.2"
            />
            <path
              id="path1764"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2923.6,1069.55 -0.1,-0.2 0.13,-0.33 0.11,0.33 -0.14,0.2"
            />
            <path
              id="path1766"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2919.96,1063.56 0.4,0.18 0.47,0.12 -0.28,0.28 -0.4,-0.12 -0.33,-0.14 -0.28,-0.22 -0.24,-0.19 0.26,-0.08 0.4,0.17"
            />
            <path
              id="path1768"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2886.16,1081.25 -0.08,0.32 -0.1,0.2 -0.03,-0.18 0.06,-0.29 0.15,-0.15 0.07,-0.21 0.08,-0.3 0.18,-0.08 -0.09,0.18 -0.04,0.18 -0.08,0.23 -0.12,0.1"
            />
            <path
              id="path1770"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2888.41,1080.37 -0.13,0.15 -0.1,-0.15 0.1,-0.14 0.13,0.14"
            />
            <path
              id="path1772"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2887.08,1085.85 0.13,0.28 -0.41,0.1 -0.12,-0.24 0.4,-0.14"
            />
            <path
              id="path1774"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2885.94,1087.08 0.09,0.25 -0.23,0.07 -0.1,-0.15 0.24,-0.17"
            />
            <path
              id="path1776"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2884.42,1088.98 -0.45,0.01 -0.35,-0.39 0.11,-0.23 0.35,0.16 0.38,0.07 0.34,0.26 -0.38,0.12"
            />
            <path
              id="path1778"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2874.17,1088.18 v 0.01 l -0.09,0.05 v 0.11 l -0.02,0.06 -0.02,0.18 h -0.07 l -0.05,0.07 -0.02,0.06 -0.06,0.07 -0.09,0.1 -0.03,0.1 -0.07,0.03 -0.05,0.04 v 0.09 l -0.14,0.11 h -0.13 l -0.11,0.05 -0.15,-0.06 -0.07,0.05 -0.23,-0.03 -0.14,-0.01 -0.16,0.17 -0.18,0.12 -0.17,0.03 -0.07,0.12 -0.18,0.12 -0.16,0.13 h -0.41 l -0.02,-0.17 0.02,-0.22 h -0.02 l 0.24,-0.07 0.11,0.03 0.1,-0.06 0.09,-0.07 0.03,-0.15 0.02,-0.12 v -0.17 l 0.24,-0.11 0.04,-0.11 0.05,-0.07 0.02,-0.03 0.14,-0.01 0.04,-0.14 0.27,-0.11 0.07,-0.12 h 0.14 l 0.15,-0.07 0.19,-0.02 0.17,-0.04 0.21,-0.04 0.21,0.01 h 0.21 l 0.23,-0.01 v 0.08 l -0.08,0.02"
            />
            <path
              id="path1780"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2869.7,1091.35 -0.13,0.19 -0.03,0.13 -0.11,0.07 -0.01,0.08 -0.18,0.05 -0.15,0.08 -0.11,0.12 -0.12,0.13 -0.4,0.05 -0.18,-0.01 -0.2,-0.02 -0.45,-0.09 -0.18,0.01 -0.02,0.13 -0.11,0.04 v 0.15 l -0.22,0.1 -0.19,0.17 -0.07,-0.26 -0.05,0.01 v 0.01 l -0.13,-0.09 0.03,-0.08 -0.02,-0.06 0.06,-0.08 v -0.11 -0.14 l -0.04,-0.1 0.02,-0.14 0.09,-0.02 0.06,-0.17 0.09,-0.18 0.13,-0.1 0.14,-0.13 0.37,-0.05 0.2,-0.03 h 0.21 l 0.16,-0.01 0.23,0.02 -0.03,-0.01 0.15,-0.05 0.06,0.04 0.07,0.02 0.3,-0.19 0.45,-0.07 0.49,0.02 0.07,0.44 -0.25,0.13"
            />
            <path
              id="path1782"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2871.52,1091.77 0.11,-0.2 0.13,-0.12 0.01,-0.05 0.18,-0.03 0.13,-0.07 0.04,0.3 v 0.19 l -0.12,0.1 -0.2,0.24 -0.06,0.13 -0.07,0.11 -0.1,0.01 -0.23,0.09 -0.06,0.14 -0.05,0.11 v 0.32 l -0.16,0.2 -0.05,0.14 -0.08,0.08 -0.06,0.13 -0.03,0.13 -0.22,0.16 h -0.06 l -0.04,0.05 -0.13,0.05 -0.1,0.13 0.03,0.15 -0.03,0.05 -0.01,0.1 -0.09,0.14 0.18,-0.02 0.06,-0.02 0.04,0.03 h 0.05 l -0.02,0.15 -0.08,0.15 -0.18,0.09 -0.07,0.17 -0.12,0.11 -0.06,0.18 -0.27,0.12 h -0.22 l -0.1,-0.01 -0.07,-0.03 0.12,-0.2 0.15,-0.2 0.08,-0.08 0.07,-0.11 0.1,-0.09 -0.06,-0.11 -0.17,0.03 -0.02,-0.18 h 0.02 l 0.03,-0.23 0.05,-0.18 0.09,-0.19 0.06,-0.21 0.02,-0.22 0.12,-0.11 0.06,-0.18 0.14,-0.15 0.31,-0.27 0.08,-0.18 0.22,-0.01 0.15,-0.07 0.04,-0.17 0.19,-0.14 0.04,-0.22 0.1,-0.19 0.19,-0.04"
            />
            <path
              id="path1784"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2869.26,1085.22 -0.45,0.26 -0.34,0.18 -0.78,0.33 0.06,-0.33 0.71,-0.28 0.21,-0.2 0.51,-0.26 0.36,0.1 -0.28,0.2"
            />
            <path
              id="path1786"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2859.87,1098.2 0.31,-0.06 0.3,-0.09 0.37,-0.2 0.4,-0.04 0.46,0.04 0.39,0.06 -0.34,0.12 -0.32,0.07 -0.47,0.15 -0.37,0.11 -0.35,0.25 -0.35,0.29 -0.05,0.38 -0.48,0.13 -0.49,0.38 -0.32,0.34 -0.51,0.08 0.03,-0.37 0.39,-0.37 0.34,-0.21 0.24,-0.4 0.52,-0.43 0.3,-0.23"
            />
            <path
              id="path1788"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2866.79,1094.75 0.24,-0.07 -0.08,0.18 -0.11,0.19 0.09,0.25 0.2,-0.36 0.3,-0.19 -0.08,0.23 -0.06,0.27 -0.06,0.23 -0.28,0.22 -0.49,0.43 -0.3,0.19 -0.5,0.14 -0.77,0.43 -0.22,0.36 -0.32,0.22 -0.6,0.2 -0.49,0.18 -0.42,0.25 0.09,-0.24 0.33,-0.29 0.23,-0.17 0.4,-0.26 0.57,-0.47 0.67,-0.58 0.64,-0.35 0.41,-0.26 0.36,-0.11 v -0.32 l 0.25,-0.3"
            />
            <path
              id="path1790"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2858.75,1097.06 -0.13,0.26 -0.24,-0.06 -0.08,-0.31 0.17,-0.22 0.15,-0.1 0.03,-0.33 0.15,-0.12 0.05,0.31 0.14,0.34 -0.07,0.23 h -0.17"
            />
            <path
              id="path1792"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2858.28,1096.24 0.05,-0.35 0.12,-0.32 0.11,-0.1 v 0.4 l -0.28,0.37"
            />
            <path
              id="path1794"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2862.65,1094.48 -0.26,0.24 -0.28,-0.21 -0.05,0.28 -0.14,0.26 -0.09,0.37 -0.47,0.13 -0.04,0.36 -0.16,0.33 -0.47,-0.01 -0.23,-0.44 -0.31,-0.22 -0.1,0.42 v 0.47 l -0.37,0.16 -0.2,-0.3 0.05,-0.48 0.26,0.05 0.04,-0.31 0.13,-0.32 0.3,-0.13 0.32,0.13 0.24,0.08 0.24,-0.04 0.15,-0.3 0.08,-0.17 0.35,-0.29 0.34,-0.15 -0.02,-0.29 0.36,-0.2 0.22,0.2 0.11,0.38"
            />
            <path
              id="path1796"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2860.71,1094.8 -0.41,-0.1 -0.2,-0.25 0.28,-0.2 0.2,0.23 0.13,0.32"
            />
            <path
              id="path1798"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2861.05,1094.09 -0.37,-0.07 0.44,-0.07 0.17,-0.02 -0.24,0.16"
            />
            <path
              id="path1800"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2856.81,1100.21 -0.05,0.12 -0.05,0.13 -0.19,0.2 -0.09,0.27 -0.11,0.09 -0.13,0.05 -0.04,0.13 -0.11,0.09 -0.14,0.08 -0.3,0.06 -0.07,0.03 h -0.09 l -0.05,0.24 -0.11,0.17 -0.01,0.11 -0.14,0.05 -0.15,0.14 -0.1,0.13 -0.14,0.11 -0.21,0.36 -0.11,0.2 -0.03,0.25 -0.23,0.04 h -0.22 l -0.24,0.08 -0.15,0.17 -0.11,0.42 -0.07,0.48 -0.17,0.4 -0.23,-0.24 -0.05,-0.16 0.02,-0.25 0.09,-0.36 0.2,-0.42 0.32,-0.3 -0.1,-0.35 -0.04,-0.39 0.06,-0.25 0.13,-0.32 0.25,-0.12 0.25,-0.14 0.08,-0.31 0.6,-0.15 0.01,-0.19 0.01,-0.18 -0.05,-0.16 0.03,-0.2 0.02,-0.16 0.07,-0.16 0.11,-0.1 0.13,-0.06 0.05,-0.11 0.06,-0.11 0.18,-0.04 h 0.02 l 0.11,-0.19 0.23,-0.04 0.46,-0.04 0.02,0.12 0.1,0.04 0.03,0.1 0.06,0.05 0.2,0.01 0.15,-0.04 0.03,0.11 -0.01,0.16 0.01,0.35"
            />
            <path
              id="path1802"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2856.46,1098.92 -0.37,0.13 -0.02,-0.46 0.49,0.01 -0.1,0.32"
            />
            <path
              id="path1804"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2856.96,1099.38 0.1,-0.33 0.18,0.34 z"
            />
            <path
              id="path1806"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2855.65,1097.95 -0.05,-0.22 0.3,0.02 z"
            />
            <path
              id="path1808"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2865.41,1093.39 -0.21,-0.13 0.4,-0.23 z"
            />
            <path
              id="path1810"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2862.86,1094.45 -0.08,0.32 -0.02,-0.29 v -0.28 l -0.11,-0.18 0.13,-0.25 0.15,0.18 -0.07,0.5"
            />
            <path
              id="path1812"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2848.93,1092.14 -0.19,0.3 -0.29,0.08 -0.16,0.15 h -0.39 l -0.37,-0.07 0.15,-0.14 0.24,-0.2 0.24,-0.12 -0.14,-0.26 0.48,-0.04 0.43,0.3"
            />
            <path
              id="path1814"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2843.91,1094.27 -0.25,-0.11 -0.24,-0.18 0.04,-0.2 0.29,-0.04 0.09,-0.28 -0.18,-0.1 0.07,-0.23 0.11,-0.24 0.15,0.06 0.08,0.4 -0.03,0.32 -0.04,0.28 -0.09,0.32"
            />
            <path
              id="path1816"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2841.85,1090.87 0.07,0.43 -0.18,0.4 -0.45,0.01 -0.05,-0.38 0.22,-0.26 0.39,-0.2"
            />
            <path
              id="path1818"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2843.14,1091.2 -0.31,-0.1 -0.18,0.13 -0.23,0.23 -0.3,-0.07 0.1,-0.32 0.09,-0.22 v -0.22 l 0.31,-0.11 0.38,0.03 0.4,-0.01 -0.03,0.27 -0.23,0.39"
            />
            <path
              id="path1820"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2844.13,1089.16 0.19,0.38 -0.1,0.25 -0.23,-0.23 -0.23,-0.1 -0.19,0.22 -0.19,0.37 -0.34,0.09 0.14,-0.25 0.24,-0.26 0.06,-0.28 0.19,-0.21 0.46,0.02"
            />
            <path
              id="path1822"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2840.77,1087.8 0.16,-0.08 0.23,-0.08 0.43,-0.16 0.5,0.05 0.48,0.24 0.45,-0.18 0.49,0.04 0.3,-0.04 -0.35,0.26 -0.19,0.09 -0.21,-0.1 -0.23,0.11 -0.08,0.1 -0.11,0.05 -0.32,0.03 -0.16,0.13 -0.34,0.04 0.22,0.25 0.36,-0.06 0.34,-0.01 0.25,0.11 0.13,0.08 0.11,0.08 -0.19,0.05 -0.2,-0.08 -0.13,-0.03 -0.09,-0.06 -0.17,0.16 -0.18,0.05 -0.15,0.02 h -0.22 l -0.08,0.07 h -0.08 l -0.43,0.19 -0.47,0.11 -0.33,0.39 -0.27,0.34 0.48,0.22 0.43,0.19 -0.4,0.04 -0.49,0.11 -0.62,0.03 -0.25,0.13 -0.28,0.05 -0.27,0.68 0.32,0.63 -0.26,0.24 -0.35,-0.13 -0.34,-0.06 -0.32,-0.24 -0.27,0.03 -0.19,0.09 h -0.22 l -0.05,0.28 -0.07,0.32 -0.07,0.31 -0.1,0.26 -0.24,0.15 -0.24,0.1 -0.12,0.28 v 0.36 l 0.02,0.15 -0.07,0.13 -0.04,0.31 -0.15,0.31 -0.33,0.01 -0.12,0.16 v 0.1 l -0.08,0.02 -0.2,0.03 -0.11,-0.01 -0.1,0.02 -0.16,0.02 -0.07,0.14 v 0.2 l -0.15,0.12 -0.1,0.15 -0.04,0.11 -0.11,0.07 -0.05,0.27 -0.11,0.03 -0.07,0.02 -0.2,0.03 -0.22,-0.04 -0.15,0.05 -0.15,0.28 -0.07,0.14 -0.01,0.15 -0.04,0.13 v 0.19 l -0.14,0.2 v 0.17 l -0.1,0.1 -0.06,0.12 -0.1,0.13 -0.04,0.31 0.03,0.15 -0.05,0.22 0.13,0.03 0.12,-0.02 0.23,0.09 h 0.1 0.11 l 0.09,-0.07 0.1,0.01 0.28,0.01 0.09,0.05 0.12,0.01 0.11,-0.03 0.05,-0.01 0.04,0.05 0.11,0.03 0.06,0.01 0.02,0.02 0.5,-0.03 0.14,0.27 0.01,0.37 -0.09,0.42 -0.25,0.23 -0.24,0.35 -0.2,0.28 -0.15,0.07 -0.13,0.07 -0.47,0.14 -0.15,-0.04 -0.11,-0.06 -0.29,-0.04 -0.16,0.02 -0.12,0.1 -0.05,0.07 -0.09,0.06 -0.07,0.04 -0.08,-0.02 -0.13,0.07 -0.1,0.03 v 0.11 l -0.11,0.14 -0.08,0.02 -0.11,-0.03 -0.07,0.08 -0.06,0.01 -0.01,0.07 -0.08,0.03 -0.07,0.09 -0.13,0.07 -0.08,0.03 -0.09,0.01 -0.06,0.05 -0.07,0.03 -0.19,-0.04 -0.18,-0.01 -0.15,0.1 -0.14,0.02 -0.09,0.09 -0.09,0.04 -0.1,-0.05 -0.11,0.07 -0.13,-0.02 -0.18,0.04 h -0.19 l 0.04,0.21 v 0.08 l 0.05,0.1 -0.05,0.21 0.1,0.17 0.04,0.2 0.01,0.16 v 0.42 l -0.04,0.25 -0.1,0.1 -0.11,0.12 -0.09,0.09 -0.1,0.12 -0.14,0.05 -0.06,0.24 -0.12,0.14 h -0.07 v 0.03 l -0.09,0.15 -0.14,0.06 -0.09,0.11 -0.28,0.07 -0.1,-0.01 -0.06,-0.03 -0.07,0.03 -0.08,-0.03 -0.15,0.04 h -0.07 l -0.02,0.1 -0.13,0.12 -0.05,0.11 -0.07,0.06 v 0.09 l -0.24,0.14 -0.08,0.12 -0.05,0.11 -0.26,0.11 -0.1,0.09 -0.15,0.01 -0.05,0.02 -0.07,-0.02 0.01,0.13 -0.01,0.13 v 0.13 l -0.04,0.13 -0.12,0.07 -0.16,-0.02 -0.28,-0.01 h -0.14 l -0.14,0.01 -0.29,-0.01 -0.14,0.01 -0.14,-0.04 -0.15,0.16 -0.1,0.1 -0.09,0.1 -0.09,0.05 -0.06,0.1 -0.2,0.06 -0.11,0.06 -0.16,0.02 -0.1,0.14 -0.07,0.1 -0.08,0.13 -0.14,0.06 -0.16,0.03 -0.37,0.08 -0.15,0.02 -0.22,0.03 -0.18,0.01 -0.32,-0.03 -0.27,-0.01 -0.12,-0.01 -0.31,0.16 h -0.19 l -0.11,0.17 -0.17,0.07 -0.1,0.02 -0.07,0.07 -0.16,0.1 -0.2,0.02 -0.1,0.04 -0.07,0.07 -0.18,0.07 -0.18,0.02 -0.11,0.06 -0.05,0.01 -0.06,0.05 -0.04,-0.03 -0.06,0.02 -0.13,0.08 -0.13,0.07 -0.1,0.07 -0.08,0.1 -0.12,0.03 -0.13,0.03 -0.05,0.02 -0.06,0.02 -0.14,-0.03 -0.12,0.1 -0.1,0.05 -0.11,0.12 -0.1,0.04 -0.29,0.15 -0.23,0.04 h -0.1 -0.11 -0.07 l -0.09,0.04 -0.09,-0.01 -0.2,-0.06 h -0.18 l -0.12,0.33 -0.15,0.07 -0.17,0.04 -0.15,0.02 -0.14,0.07 -0.17,-0.01 -0.15,0.01 -0.08,-0.16 -0.07,0.03 -0.04,0.05 -0.06,0.01 -0.1,0.11 -0.08,0.07 -0.08,0.05 -0.26,-0.04 -0.29,-0.1 -0.24,-0.01 -0.25,0.03 -0.18,0.15 -0.22,0.08 -0.26,0.07 -0.16,0.16 -0.11,0.09 -0.08,0.08 -0.14,0.02 -0.14,0.05 -0.13,0.1 -0.09,0.03 -0.06,0.02 -0.15,0.09 -0.05,0.02 -0.07,0.01 -0.31,0.11 -0.25,0.13 -0.11,0.13 -0.08,0.04 -0.05,0.03 -0.05,0.07 -0.09,0.01 -0.19,0.02 -0.06,0.05 h -0.08 l -0.33,0.05 -0.1,0.04 -0.23,0.12 -0.27,0.1 -0.23,0.17 -0.22,0.22 -0.27,0.04 -0.35,-0.1 -0.1,-0.1 -0.13,-0.05 -0.22,-0.12 -0.14,-0.11 -0.26,-0.17 -0.23,-0.2 -0.28,-0.09 -0.15,-0.24 0.19,-0.2 0.1,-0.53 h -0.29 -0.15 l -0.16,-0.03 -0.1,-0.26 -0.16,-0.02 -0.17,-0.03 -0.1,-0.08 -0.11,-0.07 -0.26,0.02 -0.12,0.03 -0.17,0.04 -0.3,-0.05 -0.09,-0.39 -0.05,-0.19 -0.05,-0.2 -0.06,-0.21 -0.04,-0.19 -0.16,-0.05 -0.2,-0.04 -0.21,-0.34 -0.1,-0.09 -0.03,-0.07 -0.06,-0.27 -0.07,-0.25 -0.03,-0.08 -0.09,0.02 -0.09,-0.01 -0.1,-0.05 -0.09,-0.04 v -0.15 l -0.04,-0.1 -0.16,-0.06 -0.1,-0.16 -0.01,-0.13 -0.04,-0.08 -0.02,-0.08 -0.03,-0.06 -0.15,-0.05 -0.13,-0.06 -0.17,-0.04 -0.08,0.03 -0.15,0.06 h -0.22 l -0.32,-0.02 -0.26,0.11 -0.08,0.08 -0.15,0.05 -0.01,0.73 -0.06,0.31 -0.13,-0.16 -0.19,-0.28 -0.02,0.09 -0.05,0.09 v 0.22 l -0.02,0.08 -0.05,0.1 0.01,0.13 -0.01,0.09 v 0.22 l 0.04,0.2 -0.11,0.27 -0.05,0.37 -0.11,0.1 -0.02,-0.34 -0.13,-0.24 -0.02,-0.1 -0.03,-0.16 -0.01,-0.2 0.04,-0.39 -0.07,0.02 -0.04,0.08 -0.06,0.11 -0.04,0.16 -0.09,0.13 -0.03,0.13 -0.08,0.12 -0.05,0.08 v 0.07 l -0.08,0.1 -0.04,0.04 -0.05,0.08 -0.06,0.07 -0.04,0.05 -0.04,0.4 -0.05,0.13 -0.03,0.16 0.03,0.4 0.07,0.15 0.06,0.16 0.03,0.2 -0.03,0.21 -0.04,-0.12 -0.06,-0.16 -0.16,-0.27 0.02,0.26 0.03,0.27 0.02,0.24 0.08,0.26 0.08,0.22 0.14,0.48 -0.22,0.32 -0.1,0.11 -0.09,0.26 -0.19,0.17 0.06,0.24 0.28,0.02 0.02,-0.02 -0.03,0.25 -0.1,0.06 -0.08,0.07 -0.32,0.23 -0.18,-0.05 -0.21,0.05 -0.44,-0.12 -0.14,-0.15 -0.18,-0.06 -0.14,0.14 -0.17,0.11 -0.18,0.19 -0.22,0.09 -0.07,0.12 -0.1,0.02 -0.12,0.07 -0.1,0.05 -0.12,0.05 -0.12,-0.02 -0.14,0.07 -0.12,0.02 -0.06,0.1 -0.07,0.04 -0.23,0.08 -0.28,0.04 -0.32,0.01 -0.33,-0.13 -0.3,-0.14 -0.25,-0.29 -0.24,-0.24 -0.12,-0.18 -0.09,-0.15 -0.32,-0.12 -0.25,-0.09 -0.33,-0.02 -0.28,-0.08 -0.16,-0.07 -0.11,-0.08 -0.02,-0.23 0.02,-0.1 -0.02,-0.08 -0.06,-0.22 -0.04,-0.19 v -0.14 l -0.04,-0.08 -0.07,-0.02 -0.04,-0.07 -0.03,-0.01 -0.02,-0.02 -0.07,-0.09 v 0.14 0.07 l -0.04,0.05 0.02,0.09 0.02,0.14 0.06,0.26 -0.24,0.19 -0.34,0.02 -0.27,-0.13 -0.15,-0.07 -0.03,-0.12 0.08,-0.37 0.25,-0.41 0.19,-0.12 0.15,-0.23 0.52,-0.14 0.23,-0.07 0.14,0.26 0.12,0.03 0.05,-0.13 0.03,-0.14 0.08,-0.05 0.1,0.15 0.11,0.01 0.11,-0.02 0.06,-0.13 0.07,0.02 0.04,-0.02 0.09,-0.03 0.07,-0.02 0.07,-0.09 0.03,-0.03 0.06,0.01 0.07,-0.07 0.15,-0.05 0.08,-0.17 0.21,0.04 -0.08,-0.18 -0.06,-0.11 0.02,-0.1 v -0.13 -0.14 l 0.11,-0.13 0.02,-0.1 0.07,-0.07 0.1,-0.14 0.14,-0.18 0.21,-0.09 0.17,-0.18 0.34,0.03 0.04,0.13 0.22,0.09 0.18,-0.17 0.07,-0.12 0.1,-0.04 0.17,0.16 0.16,0.11 0.13,-0.1 0.14,-0.15 0.19,0.02 0.21,0.14 0.44,0.17 0.28,0.03 0.6,-0.03 0.48,-0.14 -0.3,-0.53 -0.33,-0.09 -0.34,0.13 -0.84,-0.1 -0.1,-0.07 -0.29,-0.4 -0.26,-0.39 -0.41,-0.09 -0.16,0.14 -0.2,0.14 -0.27,0.09 -0.75,-0.25 0.09,-0.57 0.75,-0.17 0.57,-0.63 -0.07,-0.08 0.11,-0.27 0.13,0.11 0.17,0.06 0.03,-0.23 -0.03,-0.1 0.03,-0.07 v -0.06 l 0.2,-0.28 -0.24,-0.23 -0.1,-0.21 0.17,-0.42 0.33,-0.62 0.4,0.09 0.33,-0.1 0.26,-0.31 0.37,-0.11 -0.27,0.26 -0.13,0.15 -0.15,0.13 0.15,0.25 0.18,0.33 -0.01,0.56 0.12,0.04 0.12,0.16 0.15,0.06 0.01,0.15 -0.02,0.13 -0.08,0.24 0.31,0.02 v -0.28 l 0.02,-0.32 0.18,-0.2 0.05,0.18 0.05,0.17 0.16,-0.23 0.09,-0.29 0.1,-0.32 0.3,0.12 0.23,0.19 0.05,-0.25 0.1,-0.45 0.22,0.03 0.08,0.23 0.12,0.16 0.19,-0.06 v -0.23 l 0.17,-0.16 0.23,0.39 0.08,-0.19 -0.02,-0.34 0.08,-0.27 0.3,-0.14 0.56,-0.28 0.31,-0.12 0.32,-0.13 0.74,0.03 0.38,-0.06 0.42,0.05 0.26,-0.22 0.25,-0.19 0.27,-0.09 0.3,-0.06 0.56,-0.2 0.22,-0.18 0.15,-0.05 0.12,-0.11 0.36,-0.11 0.34,-0.05 0.14,-0.03 0.2,0.01 0.3,-0.08 0.12,-0.26 0.26,-0.07 0.16,-0.01 0.08,-0.12 0.21,-0.14 0.17,-0.21 0.2,-0.15 0.15,-0.04 0.12,-0.1 0.24,-0.15 0.04,-0.35 0.06,-0.37 0.29,-0.13 0.13,-0.34 0.06,-0.18 0.13,-0.08 0.1,-0.41 0.04,-0.39 0.12,-0.29 0.56,-0.67 -0.02,-0.14 -0.03,-0.26 -0.09,-0.04 v -0.13 l 0.12,-0.13 -0.14,-0.08 -0.11,-0.15 0.11,-0.18 0.28,-0.24 0.38,-0.12 0.34,-0.17 -0.57,-0.05 -0.19,-0.09 0.11,-0.12 0.46,-0.17 0.09,-0.3 -0.17,-0.13 -0.17,0.17 -0.73,0.12 -0.56,-0.19 -0.48,-0.4 -0.36,-0.46 -0.27,-0.61 -0.23,-0.56 -0.27,-0.52 0.05,-0.24 0.48,0.04 0.6,-0.02 0.55,-0.05 0.44,0.14 0.46,0.04 0.46,-0.04 0.25,0.41 0.15,0.24 0.21,0.15 0.3,0.09 0.26,-0.15 0.31,0.04 0.18,0.16 0.29,0.07 0.33,0.02 0.36,-0.06 0.2,-0.21 0.05,-0.15 0.12,-0.12 0.11,-0.11 0.19,-0.13 0.15,-0.13 0.1,-0.14 0.16,-0.14 0.14,-0.11 0.05,-0.09 0.06,-0.1 0.18,-0.07 0.07,-0.27 v 0.01 l 0.1,-0.12 0.1,-0.16 0.1,-0.12 0.1,-0.12 0.15,-0.05 0.08,-0.19 0.14,-0.11 0.06,-0.1 0.1,-0.05 0.14,-0.05 0.11,-0.14 0.28,-0.15 0.56,0.24 0.59,-0.15 0.63,0.03 0.28,-0.02 0.28,0.13 0.3,0.1 0.21,-0.13 0.52,-0.18 0.24,-0.21 0.27,0.06 0.23,0.21 0.29,0.14 0.48,0.41 h 0.18 l 0.1,-0.12 0.09,-0.2 0.14,0.12 -0.1,0.14 -0.15,0.12 0.14,0.03 h 0.41 l 0.1,0.12 -0.1,0.18 -0.02,0.24 0.01,0.13 -0.01,0.15 0.16,-0.01 -0.1,0.26 -0.25,0.07 -0.38,0.48 -0.28,0.03 -0.27,0.08 -0.47,0.27 -0.66,-0.13 0.19,0.17 0.13,0.09 0.17,0.05 0.23,0.01 0.14,-0.1 0.21,-0.04 0.18,-0.08 0.24,0.05 0.25,0.08 0.54,0.19 0.48,0.02 0.36,0.09 -0.06,0.46 0.5,0.18 -0.02,0.24 -0.08,0.3 -0.19,0.22 -0.01,0.25 -0.13,0.17 0.26,-0.24 0.12,-0.29 0.24,-0.18 -0.04,0.17 -0.16,0.33 0.2,-0.06 0.1,-0.17 0.07,-0.07 h 0.15 l 0.19,-0.03 h 0.24 v 0.11 l -0.08,0.19 0.08,0.2 0.02,-0.11 0.04,-0.09 0.13,-0.16 0.18,-0.07 0.08,-0.04 0.03,-0.09 0.02,0.42 -0.14,0.44 0.14,-0.29 0.14,-0.28 0.03,0.25 -0.06,0.38 0.12,-0.17 0.02,-0.16 0.11,-0.07 0.14,-0.03 -0.02,0.22 0.21,-0.04 0.23,-0.08 0.06,-0.23 0.15,-0.12 0.49,-0.06 0.27,0.01 0.24,0.01 0.2,-0.16 0.14,-0.26 0.28,-0.01 0.36,0.03 0.18,-0.02 0.13,-0.17 0.15,-0.08 0.15,-0.02 0.19,-0.02 0.18,-0.06 0.06,-0.15 0.13,-0.22 0.19,-0.07 0.14,-0.18 0.02,-0.22 v -0.23 l 0.17,-0.19 0.01,-0.09 0.09,-0.07 0.25,-0.24 0.14,-0.09 v -0.16 l 0.01,-0.12 v -0.19 l 0.08,-0.16 0.05,-0.16 0.01,-0.03 0.12,-0.11 0.25,-0.09 0.48,-0.12 0.02,-0.16 -0.02,-0.26 0.26,-0.19 -0.04,-0.14 0.04,-0.13 0.17,-0.21 0.29,0.02 v -0.03 l 0.28,-0.17 0.2,-0.3 0.23,-0.27 0.11,-0.41 0.1,-0.17 0.2,-0.04 0.37,-0.27 0.32,-0.06 0.14,-0.13 0.17,0.06 0.4,-0.02 0.35,-0.12 0.21,0.04 0.18,-0.07 0.19,0.02 0.1,0.06 0.09,-0.01 0.2,-0.01 0.12,-0.15 0.18,-0.01 0.17,-0.02 h 0.15 l 0.18,0.06 0.16,-0.04 0.19,0.03 0.17,-0.05 0.07,-0.15 0.22,0.03 h 0.04 0.04 l 0.09,-0.02 0.06,-0.05 0.07,-0.06 0.14,-0.05 0.15,0.02 0.35,0.01 0.16,0.01 0.16,0.05 0.09,-0.05 0.03,-0.08 0.12,-0.12 0.07,-0.08 0.16,-0.02 0.19,-0.1 -0.35,-0.14"
            />
            <path
              id="path1824"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2824.3,1093.03 -0.25,0.18 -0.25,0.19 -0.3,0.03 -0.15,-0.02 -0.01,-0.03 0.31,-0.18 0.13,-0.05 0.09,-0.1 0.13,-0.11 0.1,-0.02 0.01,-0.06 0.17,-0.06 0.14,-0.09 0.19,-0.24 -0.07,0.36 -0.24,0.2"
            />
            <path
              id="path1826"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2824.9,1093.18 0.16,-0.03 -0.35,0.46 -0.43,-0.03 -0.24,0.11 -0.21,-0.05 0.18,-0.14 0.29,-0.24 0.24,-0.13 0.11,-0.09 -0.04,0.21 -0.1,0.15 0.25,-0.04 0.14,-0.18"
            />
            <path
              id="path1828"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2838.48,1102.61 -0.12,-0.02 -0.29,-0.1 -0.09,-0.12 -0.15,0.02 -0.37,0.13 -0.3,-0.08 -0.37,0.12 -0.1,-0.4 0.32,-0.46 0.66,-0.22 1.09,-0.63 0.68,0.06 0.6,-0.47 0.68,0.05 h 0.79 l 0.81,0.21 0.33,0.21 0.34,0.1 0.47,0.28 0.27,0.05 0.1,0.3 0.39,0.06 0.19,0.26 0.25,0.26 0.27,0.17 -0.22,0.39 0.65,0.1 0.68,-0.03 0.26,0.23 0.28,0.2 -0.24,0.62 -0.3,0.5 0.54,0.03 0.53,0.36 0.16,0.71 -0.12,0.49 0.08,0.18 -0.02,0.24 -0.21,-0.02 -0.18,-0.04 -0.19,0.22 -0.14,0.2 -0.16,-0.22 -0.15,-0.17 h -0.14 l -0.17,0.13 -0.3,0.08 -0.23,0.1 -0.13,0.02 -0.13,0.06 0.12,-0.72 0.19,-0.57 0.05,-0.62 -0.34,-0.23 -1.01,-0.45 -0.31,-0.53 -0.22,-0.58 -0.42,-0.19 -0.57,-0.11 -0.12,0.3 -0.32,-0.15 -0.26,-0.16 -0.28,-0.21 v 0.06 l -0.17,0.01 -0.3,0.45 -0.3,0.13 0.03,-0.52 -0.45,-0.05 -0.49,-0.02 -0.31,-0.11 -0.06,-0.1 -0.13,0.01 -0.27,0.05 -0.3,-0.02 -0.25,0.1 -0.11,0.07"
            />
            <path
              id="path1830"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2842.71,1111.13 -0.26,0.13 h -0.24 l -0.04,0.25 -0.15,0.17 -0.18,0.07 -0.23,0.12 -0.51,-0.06 -0.4,-0.1 0.18,0.01 0.07,-0.02 0.07,0.03 -0.22,-0.12 0.4,-0.18 0.25,-0.28 0.42,-0.06 0.21,-0.06 0.25,0.04 0.21,-0.07 0.24,-0.02 0.34,-0.15 0.45,-0.07 0.43,-0.2 0.14,-0.16 0.22,-0.05 0.32,-0.35 0.23,-0.1 0.26,-0.01 0.27,-0.38 0.13,-0.18 0.29,0.05 0.43,-0.33 h 0.32 l 0.19,-0.02 h -0.04 l -0.13,0.18 -0.14,0.2 -0.31,0.26 -0.48,0.1 -0.13,0.14 -0.1,0.09 -0.11,0.12 -0.19,0.05 -0.16,0.14 -0.4,0.23 -0.2,0.11 -0.21,0.04 -0.21,0.12 -0.16,0.16 -0.22,0.16 -0.21,0.13 -0.43,0.22 0.09,-0.29 0.06,-0.25 -0.19,0.11 -0.22,0.08"
            />
            <path
              id="path1832"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2841.07,1111.73 v 0"
            />
            <path
              id="path1834"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2846.96,1108.61 -0.05,0.09 -0.04,0.05 z"
            />
            <path
              id="path1836"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2849.1,1106.8 -0.4,0.59 -0.25,0.18 -0.1,0.14 -0.14,0.06 -0.12,0.07 -0.19,0.05 -0.27,0.23 -0.09,0.36 -0.2,-0.03 -0.07,0.2 -0.16,0.09 -0.1,0.16 -0.14,-0.12 0.04,-0.08 0.28,-0.29 0.15,-0.32 0.24,-0.27 0.33,-0.6 0.05,-0.18 0.09,-0.11 0.01,-0.45 0.07,-0.76 0.22,-0.29 0.19,-0.35 0.08,0.01 v 0.12 l 0.04,0.09 v 0.29 l 0.17,-0.05 0.18,0.21 0.01,0.18 -0.02,0.02 -0.07,0.23 0.17,0.14 v 0.48"
            />
            <path
              id="path1838"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2835.2,1102.18 0.06,-0.22 0.17,-0.26 0.47,-0.19 0.02,0.65 -0.54,0.31 -0.18,-0.29"
            />
            <path
              id="path1840"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2833.37,1103.18 -0.11,-0.16 v -0.22 l 0.11,-0.14 0.21,-0.07 0.07,0.41 -0.28,0.18"
            />
            <path
              id="path1842"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2830.31,1104.76 v -0.33 l 0.38,0.14 -0.09,0.54 -0.29,-0.35"
            />
            <path
              id="path1844"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2831.89,1112.01 0.09,-0.21 0.16,0.09 0.23,0.06 0.3,-0.01 0.31,0.02 0.28,-0.01 0.25,0.09 0.3,0.03 0.12,0.27 0.15,0.04 h 0.14 l 0.09,0.28 -0.22,-0.09 -0.23,0.06 -0.9,0.04 -0.45,-0.04 -0.44,-0.08 0.02,-0.42 -0.01,0.01 -0.19,-0.13"
            />
            <path
              id="path1846"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2835.14,1111.98 -0.02,-0.37 0.01,0.02 0.3,-0.05 0.04,0.38 -0.33,0.02"
            />
            <path
              id="path1848"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2839.97,1114.99 -0.32,-0.44 0.04,0.04 0.1,-0.17 0.25,0.06 0.31,-0.03 -0.16,0.28 -0.22,0.26"
            />
            <path
              id="path1850"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2843.46,1110.39 -0.23,0.08 -0.19,-0.07 -0.14,-0.19 0.05,-0.01 0.13,0.03 0.19,0.03 0.18,-0.03 h 0.21 l -0.2,0.16"
            />
            <path
              id="path1852"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2846.34,1110.36 0.12,0.17 -0.12,0.13 -0.06,0.17 -0.03,0.43 v 0.24 l -0.03,0.18 -0.14,-0.13 v -0.14 -0.03 l -0.04,-0.11 v -0.17 -0.24 l 0.14,-0.23 0.04,-0.09 0.12,-0.18"
            />
            <path
              id="path1854"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2848.02,1110.37 -0.21,0.06 -0.15,-0.16 v -0.2 l 0.07,-0.19 0.24,-0.14 0.07,0.31 -0.02,0.32"
            />
            <path
              id="path1856"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2847.5,1106.89 -0.1,0.2 -0.08,-0.13 -0.02,-0.16 0.2,0.09"
            />
            <path
              id="path1858"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2850.51,1085.31 -0.75,0.33 -0.33,0.42 -0.37,0.28 -0.49,-0.13 -0.75,0.1 0.72,-0.16 0.61,-0.04 0.19,-0.3 0.63,-0.7 0.93,-0.16 -0.39,0.36"
            />
            <path
              id="path1860"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2851.97,1085.97 -0.5,-0.26 0.34,-0.1 0.53,0.07 -0.37,0.29"
            />
            <path
              id="path1862"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2848.29,1087.8 -0.47,0.06 -0.21,-0.09 0.21,-0.13 0.59,-0.09 -0.12,0.25"
            />
            <path
              id="path1864"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2802.14,1097.11 0.31,0.29 0.18,0.42 0.15,0.38 0.07,0.44 -0.31,-0.1 -0.11,-0.19 -0.15,-0.15 -0.16,0.04 0.05,0.15 0.31,0.2 0.03,0.48 -0.13,0.38 0.07,0.02 0.06,0.08 v 0.61 l -0.39,1.06 -0.38,-0.61 -0.12,-0.05 -0.08,-0.16 -0.11,-0.2 -0.05,0.21 0.07,0.13 -0.04,0.13 -0.08,0.09 -0.05,0.1 v -0.29 l -0.2,-0.6 0.05,-0.16 0.11,0.13 0.28,-0.01 -0.17,-0.25 v -0.33 l -0.46,-0.16 0.02,-0.35 -0.04,-0.38 v -0.35 l -0.04,-0.38 0.11,-0.68 0.08,-0.22 0.26,0.06 0.33,0.29 0.08,0.11 0.12,0.09 0.01,0.1 0.05,0.11 -0.05,0.12 v 0.12 l 0.42,-0.13 -0.05,-0.29 -0.05,-0.3"
            />
            <path
              id="path1866"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2801.25,1100.89 0.03,-0.03 h 0.03 z"
            />
            <path
              id="path1868"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2798.41,1100.93 -0.09,-0.38 -0.01,-0.18 -0.12,-0.14 -0.08,-0.12 -0.04,-0.15 0.1,-0.06 0.1,0.22 0.17,0.07 0.07,0.35 0.06,0.37 0.13,0.32 -0.22,0.02 h 0.02 l -0.04,-0.18 -0.05,-0.14"
            />
            <path
              id="path1870"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2797.95,1099.26 0.12,0.3 -0.13,0.18 v -0.1 l -0.03,0.06 0.03,-0.24 0.01,-0.2"
            />
            <path
              id="path1872"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2797.64,1100.46 -0.06,-0.23 -0.29,-0.07 0.02,-0.11 0.1,-0.24 0.06,-0.41 0.21,0.02 0.05,0.47 v 0.45 l -0.09,0.12"
            />
            <path
              id="path1874"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2795.83,1096.32 -0.19,-0.02 -0.01,0.03 -0.05,-0.34 -0.11,-0.01 h -0.08 l -0.05,0.01 -0.21,-0.11 -0.15,-0.01 -0.15,0.02 -0.15,-0.28 -0.13,-0.06 -0.07,-0.13 -0.04,-0.13 -0.09,-0.08 -0.07,0.02 -0.01,-0.23 -0.12,-0.06 -0.14,-0.1 -0.05,-0.11 -0.04,-0.02 -0.04,-0.09 -0.06,-0.17 -0.01,-0.27 -0.24,0.16 -0.11,-0.08 -0.12,-0.05 -0.04,-0.02 0.04,-0.1 h 0.11 l 0.23,0.05 0.04,-0.15 0.03,-0.15 -0.18,-0.17 0.1,-0.14 -0.03,-0.14 0.13,-0.03 0.15,-0.02 0.11,0.04 0.08,-0.06 0.14,0.17 0.02,0.26 0.08,0.09 0.15,0.06 0.1,0.27 0.13,0.03 0.09,0.11 0.13,0.04 -0.02,0.15 -0.05,0.38 v -0.04 l 0.09,0.34 v 0.14 l -0.04,0.08 0.01,0.17 0.14,-0.02 0.13,0.2 0.24,0.04 0.1,-0.13 0.09,-0.08 0.15,0.02 v 0.15 l -0.06,0.08 -0.05,0.24 0.08,0.09 0.07,0.16"
            />
            <path
              id="path1876"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2779.54,1088.7 0.34,0.29 0.15,0.17 0.16,0.07 0.17,0.18 0.23,0.02 h 0.22 l 0.21,0.09 0.19,0.11 0.2,0.01 0.4,0.24 0.1,0.17 0.25,0.03 0.23,0.05 0.24,0.05 0.2,0.31 0.06,0.15 0.15,-0.02 0.11,0.18 0.48,0.05 0.08,0.07 0.12,0.03 0.08,0.09 0.12,0.07 0.14,0.19 0.11,0.21 0.13,0.04 0.08,0.11 0.22,0.05 -0.34,0.14 -0.18,0.01 -0.25,0.05 h -0.23 l -0.05,-0.1 -0.1,-0.06 -0.17,-0.14 -0.09,0.05 -0.11,-0.03 -0.19,-0.09 -0.22,-0.02 -0.04,0.09 -0.11,0.02 -0.24,-0.01 -0.1,-0.05 -0.02,-0.14 -0.12,-0.06 -0.11,-0.07 -0.2,-0.03 -0.11,0.05 -0.11,0.06 -0.08,-0.03 -0.07,0.02 -0.12,0.02 -0.07,0.02 -0.22,-0.03 -0.18,-0.08 -0.26,-0.05 -0.21,-0.14 h -0.26 l -0.23,-0.07 -0.28,-0.03 -0.17,-0.1 -0.04,-0.27 -0.06,-0.27 -0.2,-0.17 -0.13,-0.25 -0.26,-0.06 -0.22,-0.13 -0.12,-0.21 -0.19,-0.2 -0.19,-0.13 -0.21,0.12 -0.24,-0.09 -0.25,0.09 -0.14,-0.08 v -0.12 l -0.21,-0.12 -0.23,-0.13 -0.14,-0.25 -0.2,-0.16 -0.16,-0.2 -0.15,-0.19 -0.09,-0.61 -0.1,-0.25 -0.04,-0.31 0.34,-0.01 -0.19,-0.2 -0.3,-0.07 -0.29,-0.03 -0.07,-0.23 -0.17,-0.08 0.01,-0.18 0.17,0.02 0.11,0.07 0.08,0.1 0.05,0.05 h 0.06 l 0.13,-0.27 0.36,-0.02 0.36,0.02 0.11,0.16 0.14,0.03 0.28,0.36 0.26,0.06 0.32,-0.07 0.26,0.09 0.13,0.27 0.2,0.17 0.22,0.23 0.24,0.28 0.16,0.21 0.25,0.21 0.05,0.34 0.07,0.04 0.3,0.23"
            />
            <path
              id="path1878"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2775.41,1085.71 -0.1,0.02 -0.08,-0.05 -0.07,-0.02 -0.08,-0.17 -0.13,-0.14 -0.12,-0.08 -0.1,-0.16 -0.28,-0.14 -0.28,-0.13 -0.08,-0.18 v -0.2 l 0.02,0.02 0.02,-0.11 0.1,-0.05 0.05,-0.22 0.02,0.22 0.08,0.03 0.05,0.12 0.13,0.11 0.18,-0.02 0.06,0.13 0.09,-0.03 0.09,0.02 0.14,0.05 0.01,0.23 0.26,0.05 0.12,0.15 v 0.29 l -0.1,0.26"
            />
            <path
              id="path1880"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2765.62,1087.43 0.29,-0.04 0.22,-0.04 0.25,0.03 0.14,0.01 0.11,-0.02 0.24,-0.02 0.11,-0.25 0.19,-0.17 0.22,-0.01 0.23,-0.08 0.08,-0.23 0.31,-0.35 0.11,-0.1 0.07,-0.01 0.04,-0.06 0.11,-0.07 h 0.15 l 0.12,-0.09 0.15,-0.02 0.01,0.13 0.11,0.03 0.11,-0.02 0.1,0.02 0.21,0.04 0.16,0.23 0.09,0.3 -0.03,0.29 -0.28,0.07 -0.11,0.34 -0.19,0.22 -0.08,0.04 -0.07,0.15 -0.13,-0.01 h -0.15 l -0.26,0.14 -0.11,0.28 -0.37,0.09 -0.17,0.3 -0.25,-0.12 -0.3,-0.1 -0.37,0.04 -0.39,-0.05 h -0.4 l -0.37,-0.1 -0.16,-0.33 0.03,-0.34 0.23,-0.12"
            />
            <path
              id="path1882"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2629.34,1070.35 -0.08,0.75 -0.29,2.51 -0.49,1.33 -0.14,0.21 -0.16,0.06 0.04,0.17 -0.02,0.15 -0.04,0.15 -0.05,0.15 0.04,0.1 H 2628 l -0.03,0.26 -0.08,0.01 -0.18,0.14 0.18,0.35 -0.14,0.2 -0.15,-0.2 -0.11,-0.54 -0.22,-0.16 -0.11,-0.35 -0.12,0.09 -0.24,0.09 0.19,-0.29 0.07,-0.4 0.1,-0.21 -0.06,-0.55 -0.16,-0.52 -0.06,-0.28 -0.08,-0.24 -0.26,-0.02 -0.16,0.14 -0.03,0.25 v -0.35 l 0.13,-0.21 h -0.31 l -0.08,-0.34 -0.19,-0.31 -0.27,0.57 -0.31,-0.49 0.25,-0.47 v -0.06 l -0.11,-0.13 0.17,-0.33 -0.1,-0.51 -0.03,0.4 0.05,0.15 -0.07,0.15 -0.07,-0.26 -0.03,-0.19 -0.25,-0.1 -0.05,-0.42 0.05,-0.42 -0.24,-0.44 -0.39,-0.56 0.1,0.42 0.09,0.5 -0.25,-0.22 -0.04,-0.28 -0.15,-0.34 -0.28,-0.29 0.09,-0.33 0.13,-0.32 -0.19,-0.17 -0.08,0.01 h -0.07 l -0.14,-0.02 0.1,0.17 0.11,0.17 -0.11,0.15 -0.04,0.21 -0.16,-0.13 -0.15,-0.17 -0.14,-0.2 -0.2,-0.15 -0.13,-0.14 -0.17,-0.14 -0.08,-0.52 0.03,0.02 0.02,-0.1 0.05,-0.05 0.04,-0.16 0.13,-0.04 0.05,-0.13 -0.31,0.04 -0.2,0.16 -0.1,0.28 -0.14,0.07 -0.18,-0.19 -0.34,0.06 -0.22,-0.17 -0.07,-0.47 -0.26,0.29 -0.13,-0.19 -0.18,-0.19 -0.17,0.4 -0.26,-0.45 -0.37,-0.22 -0.5,0.03 -0.18,-0.31 0.05,-0.77 -0.34,-0.84 -0.38,-0.9 -0.01,-0.8 0.11,-0.89 0.06,-0.92 0.22,-0.82 0.14,-0.88 0.29,-0.75 -0.07,-0.66 h 0.09 0.03 l 0.01,-0.18 -0.37,-0.68 -0.05,-0.25 -0.09,-0.2 -0.1,-0.18 -0.13,-0.17 v -0.32 l -0.19,-0.13 -0.17,-1.04 -0.68,-0.34 0.01,-0.33 0.05,-0.29 -0.2,-0.41 -0.14,-0.38 -0.09,-0.52 0.06,-0.32 -0.06,-0.39 0.12,-0.53 0.06,-0.49 0.31,-0.44 0.14,-0.15 0.03,-0.27 0.01,-0.21 -0.08,-0.21 0.27,-0.14 -0.02,-0.31 -0.12,-0.41 0.01,-0.49 0.02,-0.9 0.23,-0.56 0.2,-0.66 0.29,-0.5 0.42,-0.43 0.52,-0.17 0.43,-0.36 0.77,-0.32 0.38,0.11 0.28,0.25 0.3,0.25 0.32,0.27 0.3,0.08 0.33,-0.1 0.3,0.01 0.29,0.2 0.31,0.26 0.14,0.2 0.09,0.3 0.07,0.26 0.09,0.28 0.09,0.51 0.09,0.22 0.09,0.25 0.11,0.28 0.04,0.23 0.06,0.24 0.09,0.64 0.19,0.74 0.24,1.56 0.33,1.4 0.47,1.49 0.11,0.76 0.03,0.27 0.03,0.28 0.07,0.15 0.03,0.24 0.08,0.31 0.19,0.65 0.32,1.29 0.13,0.56 0.13,0.6 0.2,0.73 0.06,0.33 0.13,0.34 0.14,0.54 0.08,0.27 0.26,1.24 -0.09,1.02 0.12,0.81 0.19,0.35 0.34,0.07 -0.18,0.3 0.13,0.3 0.04,0.15 0.05,0.36 -0.02,0.33 -0.02,0.3 -0.26,0.12 0.04,0.36 -0.02,0.43 -0.01,0.79 0.22,0.01 0.09,0.15 0.15,0.1 -0.04,-0.53 0.08,-0.12 -0.02,-0.14 0.14,-0.18 0.35,-0.38 0.37,1.03 -0.13,0.95 -0.28,0.92"
            />
            <path
              id="path1884"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2628.82,1065.31 -0.19,-0.8 0.19,0.46 0.2,0.65 -0.2,-0.31"
            />
            <path
              id="path1886"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2626.09,1073.54 -0.07,0.26 -0.12,-0.07 -0.09,-0.18 0.09,-0.16 0.19,0.15"
            />
            <path
              id="path1888"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2617.65,1076.84 0.25,-0.17 -0.11,0.32 -0.06,0.68 -0.11,0.31 -0.08,-0.37 -0.01,-0.56 0.12,-0.21"
            />
            <path
              id="path1890"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2618.55,1075.6 -0.16,0.26 -0.25,0.03 0.09,-0.21 0.32,-0.08"
            />
            <path
              id="path1892"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2619.45,1075.91 0.2,-0.2 -0.01,0.34 -0.07,0.28 -0.23,-0.17 -0.06,-0.17 0.17,-0.08"
            />
            <path
              id="path1894"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2620.63,1074.23 0.14,0.24 0.06,0.24 -0.07,0.15 -0.23,0.15 0.07,-0.25 0.02,-0.22 0.01,-0.31"
            />
            <path
              id="path1896"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2738.96,1254.68 0.03,0.02 h 0.05 l 0.08,0.01 0.09,0.01 0.14,0.1 0.2,0.06 0.32,0.27 0.3,0.3 0.17,0.08 0.1,0.21 -0.19,-0.02 -0.16,-0.17 -0.16,-0.15 -0.08,-0.1 -0.09,-0.03 -0.16,-0.16 -0.21,-0.06 -0.08,-0.04 -0.11,-0.03 -0.19,-0.08 -0.26,-0.12 0.21,-0.1"
            />
            <path
              id="path1898"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2742.18,1256.59 -0.01,0.02 -0.02,-0.01 z"
            />
            <path
              id="path1900"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2742.96,1257.73 v -0.02 l -0.1,-0.12 -0.09,-0.07 -0.18,-0.2 -0.08,-0.16 -0.04,-0.12 -0.09,-0.1 -0.09,-0.14 -0.12,-0.19 0.27,0.14 0.27,0.27 0.25,0.17 0.2,0.19 0.03,0.38 h -0.13 l -0.1,-0.03"
            />
            <path
              id="path1902"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2740.41,1254.02 -0.27,-0.07 -0.31,-0.06 -0.66,-0.6 -0.43,-0.6 -0.03,-0.14 -0.09,-0.13 0.04,0.03 0.02,-0.13 0.26,0.09 0.07,0.14 0.11,-0.23 0.05,0.01 0.02,0.26 0.08,-0.06 0.08,-0.04 0.11,0.1 0.14,-0.05 h 0.1 l 0.09,0.01 -0.11,0.18 0.17,0.21 -0.02,-0.06 -0.04,-0.09 -0.04,-0.13 0.26,0.05 0.23,0.07 0.02,0.16 0.1,0.09 0.19,0.18 0.04,0.35 0.27,-0.05 0.13,0.45 -0.58,0.06"
            />
            <path
              id="path1904"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2742.31,1256.04 -0.24,-0.25 -0.16,-0.19 -0.15,-0.14 -0.11,-0.15 0.18,0.07 0.17,-0.02 -0.07,-0.23 -0.32,-0.11 0.06,-0.01 0.31,0.1 0.29,0.14 v 0.31 l 0.08,0.21 0.08,0.21 -0.12,0.06"
            />
            <path
              id="path1906"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2580.94,1189.23 -0.11,0.05 -0.09,-0.07 v -0.23 l 0.1,0.11 0.1,-0.14 0.14,-0.13 0.21,-0.09 0.04,0.29 -0.09,0.15 -0.11,0.17 -0.05,0.28 -0.05,-0.19 -0.09,-0.2"
            />
            <path
              id="path1908"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2581.15,1188.32 0.02,-0.18 0.26,-0.25 -0.05,0.25 -0.23,0.18"
            />
            <path
              id="path1910"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2580,1192.27 0.07,0.17 -0.18,0.03 -0.18,-0.1 -0.05,-0.16 0.13,-0.11 0.11,-0.28 0.32,-0.3 -0.03,0.14 -0.16,0.32 -0.03,0.29"
            />
            <path
              id="path1912"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.71,1193.78 0.12,0.07 -0.23,0.09 -0.25,0.27 -0.03,-0.19 0.12,-0.19 0.27,-0.05"
            />
            <path
              id="path1914"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2586.81,1194.46 0.13,0.01 -0.3,0.33 -0.24,0.19 -0.05,-0.24 0.19,-0.04 0.27,-0.25"
            />
            <path
              id="path1916"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.39,1195.96 -0.21,-0.3 0.12,-0.13 0.26,0.26 -0.17,0.17"
            />
            <path
              id="path1918"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2588.68,1195.5 0.18,-0.15 0.12,0.24 z"
            />
            <path
              id="path1920"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2589.3,1195.05 -0.32,-0.32 0.16,-0.03 0.31,0.17 -0.15,0.18"
            />
            <path
              id="path1922"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2588.48,1194.27 -0.2,0.04 -0.26,-0.18 0.14,-0.25 0.14,0.14 0.07,-0.04 0.09,-0.22 0.12,0.53 -0.1,-0.02"
            />
            <path
              id="path1924"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2590.28,1192.4 0.1,0.37 -0.29,0.4 -0.35,-0.1 -0.37,-0.23 -0.07,-0.21 0.09,-0.06 0.21,-0.09 0.17,0.33 h 0.23 l -0.08,-0.21 -0.2,-0.18 0.24,-0.09 0.32,0.07"
            />
            <path
              id="path1926"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2589.32,1190.53 0.23,-0.23 0.18,0.53 -0.09,0.45 -0.33,-0.04 -0.04,-0.15 0.14,-0.06 0.08,-0.22 -0.17,-0.28"
            />
            <path
              id="path1928"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591.91,1196.34 h 0.16 l 0.12,0.12 z"
            />
            <path
              id="path1930"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2592.19,1196.1 0.13,-0.1 0.3,0.09 -0.14,0.14 -0.29,-0.13"
            />
            <path
              id="path1932"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.67,1189.51 -0.17,0.11 -0.04,-0.21 0.19,-0.11 0.22,-0.28 -0.02,0.25 -0.18,0.24"
            />
            <path
              id="path1934"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.99,1188.89 0.09,-0.13 0.22,0.04 -0.18,0.12 -0.13,-0.03"
            />
            <path
              id="path1936"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2588.53,1187.54 0.12,-0.16 0.21,0.35 -0.09,0.25 -0.19,-0.18 -0.05,-0.26"
            />
            <path
              id="path1938"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2589.66,1188.88 0.23,0.19 0.15,0.23 -0.21,-0.11 -0.29,-0.15 -0.07,-0.16 h 0.19"
            />
            <path
              id="path1940"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2586.97,1188.84 -0.11,-0.13 -0.03,-0.26 0.11,0.15 0.03,0.24"
            />
            <path
              id="path1942"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.87,1188.52 -0.14,-0.24 0.14,0.04 z"
            />
            <path
              id="path1944"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2588.32,1187.77 -0.16,-0.09 -0.08,-0.23 0.22,0.04 0.02,0.28"
            />
            <path
              id="path1946"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2588.53,1186.73 -0.11,0.29 -0.1,-0.11 z"
            />
            <path
              id="path1948"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.01,1188.36 -0.04,-0.39 0.1,0.19 z"
            />
            <path
              id="path1950"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.07,1187.56 0.11,0.07 -0.06,0.13 z"
            />
            <path
              id="path1952"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.44,1187.28 0.06,-0.12 -0.04,0.26 z"
            />
            <path
              id="path1954"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2586.91,1186.55 0.16,-0.07 0.23,0.08 -0.05,0.24 -0.34,-0.25"
            />
            <path
              id="path1956"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2589.14,1187.03 0.16,0.11 0.19,0.22 -0.05,0.11 -0.35,-0.27 0.05,-0.17"
            />
            <path
              id="path1958"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.69,1186.55 0.08,-0.11 0.06,0.16 z"
            />
            <path
              id="path1960"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2588.11,1186.64 0.1,0.17 -0.1,-0.17"
            />
            <path
              id="path1962"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591.38,1187.7 -0.34,-0.25 -0.05,-0.29 0.21,0.23 0.29,0.21 -0.11,0.1"
            />
            <path
              id="path1964"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591.06,1188 -0.11,-0.19 0.15,0.04 z"
            />
            <path
              id="path1966"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2592.25,1186.17 0.03,-0.45 0.02,-0.21 0.33,0.47 0.32,0.53 0.06,0.41 -0.38,-0.28 -0.38,-0.47"
            />
            <path
              id="path1968"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591.69,1186.8 -0.12,-0.07 0.13,-0.1 z"
            />
            <path
              id="path1970"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2592.45,1187.14 v 0.13 l -0.13,-0.07 z"
            />
            <path
              id="path1972"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2587.1,1191.8 0.02,-0.28 0.2,-0.13 -0.06,0.25 -0.16,0.16"
            />
            <path
              id="path1974"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591.41,1185.4 -0.14,-0.5 -0.02,-0.23 0.06,-0.25 0.07,0.33 v 0.33 l 0.03,0.32"
            />
            <path
              id="path1976"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2586.57,1183.9 -0.31,-0.15 -0.35,-0.04 -0.23,-0.26 0.14,-0.3 0.48,0.01 h 0.66 l 0.45,-0.11 0.26,-0.29 0.48,0.2 0.81,0.12 0.45,0.07 0.49,0.24 -0.19,0.21 -0.44,-0.21 -0.23,0.09 -0.25,0.15 h -0.5 l -0.44,0.1 -0.74,-0.24 -0.38,0.1 -0.16,0.31"
            />
            <path
              id="path1978"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2584.76,1184.94 0.15,0.19 -0.04,0.17 -0.17,0.16 -0.02,-0.3 0.08,-0.22"
            />
            <path
              id="path1980"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.56,1191.93 0.2,-0.04 0.25,-0.03 0.24,0.2 0.1,0.28 0.15,0.13 0.09,0.25 -0.21,-0.23 -0.14,-0.22 -0.25,-0.31 -0.32,0.17 -0.13,-0.05 -0.15,-0.31 0.17,0.16"
            />
            <path
              id="path1982"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2575.34,1199.53 -0.14,0.13 -0.31,-0.03 -0.26,-0.12 0.3,-0.12 0.41,0.14"
            />
            <path
              id="path1984"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2574.14,1198.71 0.25,0.05 -0.04,0.09 z"
            />
            <path
              id="path1986"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2575.28,1198.27 0.25,0.05 -0.25,-0.05"
            />
            <path
              id="path1988"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2576.12,1198.55 0.33,-0.16 0.38,0.03 -0.34,0.08 -0.37,0.05"
            />
            <path
              id="path1990"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2571.61,1201.95 0.11,0.07 v 0.4 l -0.1,0.37 -0.12,0.24 0.09,-0.44 -0.09,-0.05 0.09,-0.38 0.02,-0.21"
            />
            <path
              id="path1992"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.12,1203.06 -0.21,0.27 -0.09,-0.25 -0.08,-0.07 0.2,-0.24 0.29,-0.07 -0.11,0.36"
            />
            <path
              id="path1994"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.19,1202.21 0.14,-0.1 -0.08,0.21 -0.16,0.19 -0.05,-0.27 0.15,-0.03"
            />
            <path
              id="path1996"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.61,1201.27 0.27,0.03 -0.15,0.25 -0.21,0.27 -0.2,0.04 0.13,-0.26 0.22,-0.14 -0.06,-0.19"
            />
            <path
              id="path1998"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.29,1201.02 0.36,-0.41 0.28,-0.42 -0.15,0.43 -0.39,0.47 -0.32,0.16 0.22,-0.23"
            />
            <path
              id="path2000"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2575.2,1199.1 0.48,0.13 -0.56,-0.02 -0.39,0.08 0.47,-0.19"
            />
            <path
              id="path2002"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2563.95,1196.17 -0.26,-0.02 -0.24,-0.22 -0.25,-0.2 -0.1,-0.19 -0.12,-0.11 -0.03,-0.13 0.11,-0.14 -0.11,-0.21 0.02,-0.2 0.18,0.08 0.15,0.01 -0.04,-0.14 -0.12,-0.16 -0.12,-0.1 0.07,-0.07 0.16,0.09 0.2,0.2 -0.05,-0.16 0.01,-0.09 -0.1,-0.16 -0.1,-0.15 -0.11,-0.1 0.24,0.02 0.15,0.18 0.14,0.11 -0.08,-0.13 -0.12,-0.16 -0.02,-0.14 h 0.08 l 0.09,0.06 0.05,-0.02 -0.16,-0.16 -0.15,-0.03 v -0.14 l 0.14,0.03 0.14,0.09 -0.02,-0.1 0.01,-0.1 0.25,0.18 0.2,0.27 0.09,0.47 0.1,0.38 0.14,0.49 -0.06,0.59 -0.04,0.45 -0.03,0.55 -0.16,-0.19 -0.04,-0.22 0.03,-0.24 -0.12,-0.07"
            />
            <path
              id="path2004"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2563.75,1193.45 0.21,0.1 0.12,0.36 -0.17,-0.21 -0.16,-0.25"
            />
            <path
              id="path2006"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2562.4,1191.84 -0.01,-0.39 0.09,-0.2 0.19,-0.27 0.08,-0.32 0.01,-0.53 0.02,-0.34 0.02,-0.38 -0.05,-0.47 -0.03,-0.31 -0.01,-0.31 -0.04,-0.4 0.05,-0.29 0.04,0.29 0.16,-0.05 0.43,-0.2 0.28,0.53 0.12,0.19 0.17,0.15 0.25,-0.13 0.24,0.13 0.1,0.66 0.07,1.11 -0.1,0.41 0.15,0.43 0.09,0.33 -0.07,0.41 -0.17,0.36 -0.11,0.24 -0.07,0.32 -0.37,0.06 -0.48,-0.53 -0.35,-0.29 -0.42,-0.25 -0.28,0.04"
            />
            <path
              id="path2008"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2565.65,1196.91 -0.13,-0.19 -0.34,-0.13 0.11,-0.03 0.26,0.01 0.13,0.09 -0.03,0.25"
            />
            <path
              id="path2010"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2554.86,1188.54 -0.56,-0.44 -0.29,-0.34 -0.17,-0.19 0.11,-0.05 0.1,-0.11 0.14,0.14 0.21,-0.11 0.12,-0.21 0.27,-0.07 0.2,0.04 0.3,0.54 0.17,0.36 -0.22,0.08 -0.17,-0.02 -0.08,0.08 -0.01,0.11 0.01,0.1 v 0.09 h -0.13"
            />
            <path
              id="path2012"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2556.06,1188.76 0.37,-0.1 h 0.3 l -0.22,0.39 -0.27,0.02 -0.3,-0.15 0.12,-0.16"
            />
            <path
              id="path2014"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2552.64,1186.36 -0.25,-0.13 -0.09,-0.21 -0.1,-0.2 0.13,-0.05 0.1,0.01 0.15,0.15 0.18,0.26 -0.12,0.17"
            />
            <path
              id="path2016"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2552.49,1185.56 -0.08,-0.22 0.12,0.04 h 0.14 l 0.01,0.14 -0.19,0.04"
            />
            <path
              id="path2018"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2566.06,1223.33 0.12,0.26 0.12,0.26 0.09,0.2 0.05,0.24 -0.06,-0.06 -0.16,-0.26 -0.12,-0.24 -0.08,-0.24 0.04,-0.16"
            />
            <path
              id="path2020"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2565.86,1223.93 0.12,-0.01 0.13,0.2 0.14,0.27 v 0.34 l -0.07,0.15 -0.08,0.21 -0.09,0.1 -0.08,-0.24 -0.13,-0.04 -0.07,0.06 v 0.14 l -0.16,0.06 -0.39,-0.13 -0.22,-0.16 -0.17,0.01 -0.03,-0.18 0.06,-0.19 0.1,-0.16 0.23,-0.13 0.19,-0.19 0.37,-0.03 0.15,-0.08"
            />
            <path
              id="path2022"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2568.04,1225.98 0.09,0.09 h 0.05 l 0.01,-0.12 -0.09,-0.1 -0.1,-0.05 z m -0.41,0.32 h -0.27 l -0.17,-0.23 -0.1,-0.12 -0.15,-0.16 -0.34,-0.16 0.07,-0.17 0.12,-0.13 0.04,-0.2 -0.04,-0.2 v -0.1 l 0.1,-0.14 0.3,-0.09 0.41,0.12 0.09,-0.25 0.22,-0.12 0.35,0.11 -0.01,0.25 -0.15,0.08 0.19,0.12 0.33,0.1 0.08,0.28 -0.24,0.07 -0.06,0.14 0.09,0.19 0.15,0.15 0.24,0.07 0.1,0.22 -0.08,0.27 -0.05,0.22 v 0.24 l -0.35,0.06 -0.36,-0.14 -0.09,-0.24 0.05,-0.21 -0.06,0.06 -0.1,-0.07 -0.05,-0.19 -0.06,-0.11 -0.12,-0.15 -0.08,0.2 v 0.23"
            />
            <path
              id="path2024"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2567.54,1223.53 0.22,-0.01 0.19,-0.11 0.05,0.27 0.19,0.25 0.27,0.32 0.28,0.13 0.1,0.11 -0.23,0.01 -0.22,-0.11 -0.2,-0.1 -0.19,-0.08 -0.29,-0.02 -0.07,-0.17 -0.17,-0.1 -0.26,-0.08 -0.27,0.18 -0.34,-0.17 0.04,-0.08 -0.12,-0.25 0.19,-0.04 0.4,-0.06 0.43,0.11"
            />
            <path
              id="path2026"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.7,1223.49 0.09,-0.06 0.05,-0.1 -0.05,-0.14 0.2,-0.15 0.15,0.1 0.17,0.21 h 0.24 l 0.06,0.16 -0.19,0.1 0.13,0.2 -0.13,0.12 -0.13,-0.12 -0.15,-0.12 -0.05,0.18 -0.01,0.18 -0.18,-0.09 -0.06,-0.18 -0.09,-0.09 -0.05,-0.2"
            />
            <path
              id="path2028"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.19,1225.38 0.24,-0.09 0.34,0.11 -0.05,0.28 -0.22,0.05 -0.21,0.07 -0.06,0.01 -0.11,-0.05 -0.03,-0.13 v -0.09 l 0.1,-0.16"
            />
            <path
              id="path2030"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2574.68,1228.74 0.11,-0.25 0.29,0.72 0.12,0.5 0.21,0.51 0.27,0.71 v 0.37 l -0.13,-0.25 -0.16,-0.44 -0.27,-0.48 -0.17,-0.27 -0.24,-0.51 -0.04,-0.44 0.01,-0.17"
            />
            <path
              id="path2032"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2578.4,1232.63 0.16,0.1 0.24,0.26 0.08,0.19 0.2,0.15 0.13,0.15 -0.19,-0.09 -0.22,-0.07 -0.14,-0.11 -0.22,-0.09 -0.12,-0.08 h -0.15 l -0.27,-0.23 -0.29,-0.4 -0.34,-0.35 v -0.2 l 0.07,-0.49 0.13,-0.39 -0.07,-0.32 0.26,0.15 0.13,0.41 0.28,0.2 0.14,0.18 -0.02,0.09 0.23,0.22 0.04,0.15 -0.14,0.02 0.08,0.55"
            />
            <path
              id="path2034"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2584.43,1235.98 -0.05,-0.13 h -0.11 l -0.08,0.03 h -0.14 l -0.1,-0.12 h -0.1 l -0.16,-0.27 -0.11,0.1 -0.12,-0.2 -0.17,0.11 -0.16,-0.07 0.07,-0.2 -0.01,-0.1 -0.16,-0.18 0.14,-0.03 0.16,-0.06 -0.04,0.04 0.2,-0.14 -0.09,-0.24 -0.12,-0.25 0.18,0.01 0.17,0.38 0.15,0.33 0.27,0.06 0.25,0.08 0.48,0.43 0.33,0.2 0.17,0.12 -0.1,0.02 -0.15,0.03 -0.27,0.15 -0.33,-0.1"
            />
            <path
              id="path2036"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2584.77,1236.79 -0.24,0.06 -0.15,0.17 -0.11,-0.01 -0.09,-0.08 -0.1,-0.06 -0.08,-0.1 -0.06,-0.11 -0.08,-0.06 -0.11,-0.02 -0.1,-0.04 -0.19,-0.06 -0.17,-0.09 v 0.06 l 0.24,-0.07 0.35,0.08 0.07,-0.1 -0.01,-0.15 h 0.01 l 0.3,-0.06 0.15,0.14 v 0.1 l 0.07,0.06 0.2,0.06 0.11,0.07 0.13,0.06 -0.14,0.15"
            />
            <path
              id="path2038"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.07,1236.03 0.17,-0.05 0.19,0.06 -0.02,0.17 -0.22,0.11 -0.14,-0.13 -0.09,-0.08 0.11,-0.08"
            />
            <path
              id="path2040"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.11,1236.95 0.27,0.08 -0.09,0.07 -0.28,-0.11 0.1,-0.04"
            />
            <path
              id="path2042"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2579.76,1238.72 -0.2,-0.05 -0.16,-0.02 0.02,-0.28 0.05,-0.06 0.09,0.1 0.07,0.06 0.08,0.04 0.04,-0.08 0.06,-0.06 0.18,0.04 0.11,-0.04 0.16,-0.08 0.17,-0.08 0.1,0.15 -0.09,0.1 -0.13,0.04 v 0.13 l 0.18,0.02 0.13,0.12 -0.07,0.24 h -0.12 -0.15 l -0.18,-0.03 -0.07,0.11 -0.16,-0.05 0.01,-0.08 0.09,-0.02 -0.21,-0.22"
            />
            <path
              id="path2044"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2605.15,1255.72 -0.21,-0.06 -0.27,-0.16 0.1,-0.12 0.21,0.01 0.13,-0.12 0.12,-0.04 0.06,0.21 0.1,0.04 0.14,0.09 -0.22,0.01 -0.07,0.06 -0.09,0.08"
            />
            <path
              id="path2046"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2605.87,1255.86 -0.48,-0.02 0.14,-0.08 z"
            />
            <path
              id="path2048"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2616.18,1262 0.26,-0.01 -0.02,0.17 -0.39,-0.17 0.15,0.01"
            />
            <path
              id="path2050"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2629.24,1270.72 0.02,-0.12 0.21,0.43 -0.32,0.21 -0.91,0.14 -1.24,-0.18 -0.98,-0.88 -0.05,-0.89 0.31,-0.08 h 0.63 l 1.38,0.61 0.48,0.54 0.2,0.18 0.29,0.2 -0.02,-0.16"
            />
            <path
              id="path2052"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2688.43,1290.11 -0.17,-0.04 -0.15,-0.12 0.18,-0.16 0.2,0.23 0.15,0.17 -0.21,-0.08"
            />
            <path
              id="path2054"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2689.33,1289.23 -0.11,0.12 -0.15,0.08 -0.23,0.12 -0.22,0.02 -0.13,-0.17 -0.04,-0.14 0.24,-0.11 0.15,-0.17 0.32,-0.06 0.19,-0.08 0.13,0.21 -0.15,0.18"
            />
            <path
              id="path2056"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2689.54,1289.35 0.07,0.35 0.09,0.28 -0.21,0.1 -0.14,-0.01 -0.15,0.23 -0.1,-0.13 -0.11,-0.26 -0.15,-0.15 0.28,-0.21 0.18,-0.07 0.1,-0.16 0.14,0.03"
            />
            <path
              id="path2058"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2689.7,1290.41 -0.11,-0.01 0.13,-0.2 0.17,-0.12 0.06,0.27 -0.25,0.06"
            />
            <path
              id="path2060"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2690.01,1289.64 -0.13,0.13 -0.15,-0.24 -0.03,-0.2 -0.07,-0.21 0.06,-0.16 0.22,0.14 0.12,0.17 -0.08,0.19 0.06,0.18"
            />
            <path
              id="path2062"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2690.11,1290.06 -0.05,-0.21 0.09,-0.06 0.19,0.07 -0.07,0.2 h -0.16"
            />
            <path
              id="path2064"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2690.26,1289.7 -0.13,-0.17 0.12,0.03 z"
            />
            <path
              id="path2066"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2690.36,1289.14 0.19,0.01 0.15,0.38 -0.16,0.1 -0.18,-0.14 -0.13,-0.19 0.13,-0.02 v -0.14"
            />
            <path
              id="path2068"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2688.49,1289.67 0.17,0.06 0.16,0.2 0.12,0.15 -0.12,-0.01 -0.2,-0.16 -0.13,-0.24"
            />
            <path
              id="path2070"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2689.43,1288.48 -0.16,-0.27 h 0.14 l 0.18,0.02 v 0.13 l -0.16,0.12"
            />
            <path
              id="path2072"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2689.55,1287.88 0.27,-0.02 0.26,-0.13 0.03,0.24 -0.22,0.07 -0.24,-0.06 -0.17,0.04 0.07,-0.14"
            />
            <path
              id="path2074"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2690.34,1287.79 -0.14,0.15 0.07,-0.22 z"
            />
            <path
              id="path2076"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2690.91,1287.64 -0.02,0.16 -0.44,-0.03 0.09,-0.18 0.37,0.05"
            />
            <path
              id="path2078"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2689.43,1290.45 -0.1,-0.06 0.03,-0.1 z"
            />
            <path
              id="path2080"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2680.98,1292.9 0.2,0.03 0.25,-0.03 h 0.41 l 0.81,0.21 -0.05,0.52 -0.61,0.21 -0.62,-0.5 -0.39,-0.44"
            />
            <path
              id="path2082"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2678.48,1290.95 1.01,0.35 0.41,0.33 0.31,0.12 0.19,0.18 -0.5,0.03 -0.75,-0.06 -0.73,-0.52 -0.3,-0.25 -0.49,-0.4 0.85,0.22"
            />
            <path
              id="path2084"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2675.38,1293.07 0.36,0.11 0.22,0.16 -0.22,0.07 -0.55,-0.22 -0.13,-0.19 0.32,0.07"
            />
            <path
              id="path2086"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2672.49,1291.07 0.39,-0.02 0.45,0.02 0.06,0.29 v 0.32 l -0.7,-0.16 -0.33,-0.33 0.13,-0.12"
            />
            <path
              id="path2088"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2670.04,1289.61 0.09,0.13 -0.16,0.08 z"
            />
            <path
              id="path2090"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2684.29,1295.41 0.12,0.17 -0.27,-0.14 z"
            />
            <path
              id="path2092"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2688.46,1298.16 -0.08,-0.08 0.26,-0.05 0.56,0.2 -0.36,0.02 -0.38,-0.09"
            />
            <path
              id="path2094"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2689.49,1298.31 0.56,0.1 0.6,0.2 h -0.37 l -0.79,-0.3"
            />
            <path
              id="path2096"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2691.69,1298.59 0.4,0.15 -0.84,-0.15 z"
            />
            <path
              id="path2098"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2694.41,1300.58 0.25,0.16 h -0.37 l -0.43,-0.09 -0.15,-0.21 0.02,-0.02 0.34,0.01 0.34,0.15"
            />
            <path
              id="path2100"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2692.54,1299.96 0.41,0.13 0.07,0.15 0.12,0.12 0.02,0.12 -0.14,-0.05 -0.2,-0.2 -0.52,-0.31 0.24,0.04"
            />
            <path
              id="path2102"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2694.52,1299.92 -0.45,-0.18 0.34,-0.1 0.3,0.16 0.12,0.09 -0.31,0.03"
            />
            <path
              id="path2104"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2695.16,1300.82 0.22,0.15 0.26,0.05 -0.09,0.07 -0.42,-0.09 -0.24,-0.28 0.27,0.1"
            />
            <path
              id="path2106"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2693.98,1301.15 0.39,0.03 0.31,0.16 -0.04,0.18 -0.1,0.13 -0.08,-0.11 -0.05,-0.12 -0.25,-0.09 -0.46,-0.22 0.28,0.04"
            />
            <path
              id="path2108"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2696.46,1302.15 0.04,-0.13 0.41,0.14 -0.06,0.16 -0.28,0.12 v -0.11 l 0.08,-0.15 -0.29,0.03 -0.41,-0.12 0.21,-0.02 0.3,0.08"
            />
            <path
              id="path2110"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2695.14,1301.67 -0.06,0.12 -0.09,-0.19 z"
            />
            <path
              id="path2112"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2695.64,1301.81 -0.25,-0.06 0.25,0.06"
            />
            <path
              id="path2114"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2697.61,1302.54 -0.07,0.14 -0.27,-0.05 -0.31,-0.1 0.65,0.01"
            />
            <path
              id="path2116"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2716.08,1312.82 0.24,0.18 0.31,0.29 -0.25,0.06 -0.48,-0.28 -0.56,-0.17 -0.84,-0.43 0.33,0.09 0.38,0.09 0.31,0.08 -0.26,-0.3 0.69,0.09 0.37,0.15 -0.31,-0.02 -0.28,-0.1 -0.02,0.07 0.37,0.2"
            />
            <path
              id="path2118"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2701.82,1309.51 0.24,0.11 0.48,0.01 0.09,0.37 -0.6,-0.14 -0.21,-0.35"
            />
            <path
              id="path2120"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2723.32,1317.86 -0.35,-0.54 0.6,0.09 1.49,0.57 c 0.81,0.45 1.62,0.81 2.59,1.12 0.97,0.31 2.23,0.65 2.67,0.72 l 1.9,0.64 1.66,0.64 1.21,0.71 0.07,0.54 -0.48,0.25 -0.8,-0.24 -0.31,-0.06 -0.44,-0.08 -0.15,0.05 0.3,0.22 -0.3,0.08 -0.4,-0.1 -0.23,0.03 -0.19,0.09 -0.56,-0.1 -0.59,-0.19 -0.53,-0.24 -0.48,-0.33 -0.31,-0.32 -0.31,-0.27 -0.25,-0.07 0.2,0.29 0.34,0.27 0.06,0.26 0.21,0.33 0.24,0.26 0.4,0.22 -0.26,0.01 -0.61,0.02 -0.86,-0.09 -0.21,-0.49 v -0.14 l -0.51,0.06 -0.51,0.03 -0.26,-0.24 0.11,-0.15 -0.65,-0.15 -0.14,-0.2 0.29,0.03 -0.39,-0.15 -0.27,-0.24 0.32,0.01 0.19,-0.06 -0.37,-0.05 -0.35,-0.19 -0.27,-0.29 0.27,-0.19 h 0.32 l -0.42,-0.14 -0.66,-0.14 -0.62,-0.55 -0.42,-0.68 -0.42,-0.47 -0.56,-0.39"
            />
            <path
              id="path2122"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2737.47,1321.75 0.47,0.29 0.42,0.14 -0.32,0.1 -0.45,-0.27 -0.33,-0.2 -0.28,-0.14 0.49,0.08"
            />
            <path
              id="path2124"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2738.28,1321.7 0.81,0.19 0.61,0.14 0.53,0.12 -0.22,0.23 -0.83,-0.29 -0.9,-0.39"
            />
            <path
              id="path2126"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2739.87,1320.05 -0.32,-0.13 0.09,-0.15 0.28,0.07 0.34,0.13 -0.05,0.13 -0.34,-0.05"
            />
            <path
              id="path2128"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2737.84,1319.73 0.33,0.07 0.32,0.17 -0.24,0.02 -0.41,-0.26"
            />
            <path
              id="path2130"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2752.63,1320.79 0.38,0.07 -0.12,0.09 -0.28,0.07 -0.25,-0.29 0.27,0.06"
            />
            <path
              id="path2132"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2748.99,1314.11 h 0.94 l 1.08,0.16 0.79,0.32 0.68,0.38 0.47,0.65 -0.61,0.09 -1.75,-0.41 -0.84,-0.12 0.03,-0.29 -0.18,-0.26 -0.81,-0.18 -0.2,-0.29 0.4,-0.05"
            />
            <path
              id="path2134"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2747.68,1313.88 0.25,0.08 -0.15,0.09 z"
            />
            <path
              id="path2136"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2766.98,1315.46 0.22,0.02 0.6,0.22 0.56,0.1 0.34,0.22 -0.21,0.05 -0.28,0.02 -0.36,-0.04 -0.39,-0.08 -0.38,-0.17 -0.17,-0.18 -0.18,-0.08 0.1,0.1 0.12,0.26 -0.17,-0.2 -0.3,-0.2 -0.25,-0.02 -0.2,-0.06 0.63,0.03 0.32,0.01"
            />
            <path
              id="path2138"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.66,1316.83 h 0.19 l 0.35,0.13 0.22,0.05 0.14,0.21 -0.13,0.1 -0.2,-0.14 -0.19,0.02 -0.27,-0.1 -0.16,-0.17 -0.29,-0.14 0.34,0.04"
            />
            <path
              id="path2140"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2774.22,1317.34 0.06,0.14 -0.58,-0.12 0.23,0.02 0.29,-0.04"
            />
            <path
              id="path2142"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2773.84,1317.14 0.01,0.1 -0.26,-0.19 z"
            />
            <path
              id="path2144"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2808.35,1321.59 0.38,0.05 0.51,0.17 h 0.56 l 0.35,0.06 0.4,0.41 -0.59,-0.08 -0.89,-0.16 -0.75,-0.21 -0.28,-0.08 0.31,-0.16"
            />
            <path
              id="path2146"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2811.85,1323.47 -0.02,0.18 -0.48,-0.27 z"
            />
            <path
              id="path2148"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2811.75,1322.98 0.53,0.09 0.36,0.28 z"
            />
            <path
              id="path2150"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2804.81,1328.21 0.65,-0.04 0.67,-0.19 -0.35,0.3 -0.81,0.11 -0.46,0.09 -0.21,-0.13 v -0.02 l 0.51,-0.12"
            />
            <path
              id="path2152"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2804.35,1331.54 0.77,0.02 0.73,0.76 0.21,0.62 -0.71,-0.09 -0.41,0.44 -0.06,-0.27 -0.3,-0.11 -0.23,0.03 0.14,-0.63 -0.14,-0.77"
            />
            <path
              id="path2154"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2869.24,1334.73 0.62,0.25 -0.4,0.38 -0.25,-0.24 0.03,-0.39"
            />
            <path
              id="path2156"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2872.5,1335.34 -0.46,0.18 0.46,-0.18"
            />
            <path
              id="path2158"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2872.82,1332.07 -0.01,0.19 -0.31,-0.1 z"
            />
            <path
              id="path2160"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890.75,1337.7 -1.14,-0.72 0.71,0.01 0.47,-0.31 c 0.21,-0.17 1.04,0.19 2.03,0.25 0.99,0.02 1.06,0.34 0.99,0.6 l 0.48,0.51 -0.77,0.03 -1.46,-0.07 -1.31,-0.3"
            />
            <path
              id="path2162"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2878.95,1300.55 1.19,0.57 0.81,0.22 -0.17,0.7 -0.32,0.3 -0.7,-0.53 -1.14,-0.55 -0.55,-0.87 -0.33,-0.41 -0.5,-0.71 0.53,0.35 1.18,0.93"
            />
            <path
              id="path2164"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2885.95,1290.21 -0.39,0.21 -0.34,0.45 -0.21,0.44 -0.72,-0.01 -0.37,-0.33 0.46,-0.03 0.35,-0.28 0.53,-0.53 0.69,-0.31 0.41,-0.21 -0.06,0.43 -0.35,0.17"
            />
            <path
              id="path2166"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2889.6,1290.32 -0.96,0.14 1.7,-0.56 z"
            />
            <path
              id="path2168"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2905.4,1288.18 h -0.42 l -0.37,-0.16 -0.38,0.04 -0.55,-0.08 -0.62,-0.35 0.41,0.1 0.24,-0.07 0.16,-0.09 0.23,-0.13 0.42,0.15 0.38,0.1 0.5,0.22 0.39,0.27 h -0.39"
            />
            <path
              id="path2170"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2906.88,1287.17 -0.63,-0.33 -0.46,-0.22 0.91,0.06 0.18,0.49"
            />
            <path
              id="path2172"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2917.77,1287.68 -0.54,-0.61 0.54,0.46 0.39,0.33 0.23,0.47 -0.32,-0.15 -0.3,-0.5"
            />
            <path
              id="path2174"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2922.32,1287.13 1.27,-0.29 -1.05,0.33 -1.13,-0.05 0.91,0.01"
            />
            <path
              id="path2176"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2924.39,1288.63 0.21,0.35 -0.7,-0.31 z"
            />
            <path
              id="path2178"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2921.15,1288.12 -0.38,-0.08 0.38,0.08"
            />
            <path
              id="path2180"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2919.98,1288.22 -0.35,-0.16 0.35,0.16"
            />
            <path
              id="path2182"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2913.41,1287.92 -0.42,-0.09 0.42,0.09"
            />
            <path
              id="path2184"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.8,1201.71 v 0.27 l -0.48,0.14 -0.21,0.14 -0.19,0.15 -0.54,-0.13 0.19,-0.07 0.21,-0.2 0.33,-0.1 0.2,-0.09 0.28,-0.06 0.21,-0.05"
            />
            <path
              id="path2186"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.64,1201.32 0.27,-0.06 -0.11,0.19 -0.29,0.05 -0.13,-0.04 0.26,-0.14"
            />
            <path
              id="path2188"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.87,1197.18 0.18,0.21 0.08,0.24 -0.13,0.19 -0.17,0.12 -0.33,0.13 -0.24,-0.02 -0.2,-0.22 -0.15,-0.08 0.08,-0.12 0.26,0.2 0.29,-0.17 0.28,-0.04 0.17,-0.16 -0.12,-0.28"
            />
            <path
              id="path2190"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.43,1198.45 0.16,-0.08 0.02,-0.15 0.14,0.02 0.32,0.11 -0.03,0.16 -0.27,-0.08 -0.34,0.02"
            />
            <path
              id="path2192"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2773.16,1198.91 -0.05,0.17 -0.29,-0.19 z"
            />
            <path
              id="path2194"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.77,1188.04 -0.19,-0.37 0.25,0.06 0.1,0.34 -0.16,-0.03"
            />
            <path
              id="path2196"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.32,1187.32 0.17,0.14 -0.03,0.14 z"
            />
            <path
              id="path2198"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2766.98,1184.81 0.02,-0.2 v -0.22 l 0.15,-0.09 0.17,0.45 -0.34,0.06"
            />
            <path
              id="path2200"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.06,1184.09 -0.33,0.04 -0.32,0.19 -0.19,0.24 -0.24,-0.21 -0.16,-0.34 -0.44,-0.11 -0.24,-0.19 -0.52,-1.05 -0.41,-0.62 -0.64,-1.38 -0.57,-1.17 -0.07,-1 -0.04,-0.7 0.32,-0.83 0.74,-0.82 0.3,-0.47 0.27,-0.64 0.18,0.53 0.01,0.67 0.22,0.66 0.57,0.8 0.51,1.45 0.32,1.41 0.18,0.99 0.37,0.82 -0.06,0.84 0.17,0.35 0.15,0.26 -0.08,0.28"
            />
            <path
              id="path2202"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2763.89,1181.14 0.28,0.14 -0.11,0.13 -0.35,-0.23 0.18,-0.04"
            />
            <path
              id="path2204"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2760.96,1178.14 -0.26,-0.18 0.14,0.02 0.3,0.1 -0.18,0.06"
            />
            <path
              id="path2206"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2751.07,1172.18 -0.11,-0.19 0.16,0.03 z"
            />
            <path
              id="path2208"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2751.5,1172.26 0.15,0.11 -0.15,0.08 -0.13,-0.24 0.13,0.05"
            />
            <path
              id="path2210"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2742.59,1162.61 0.31,-0.31 0.53,-0.16 0.66,-0.05 0.23,-0.23 0.36,0.4 0.29,0.21 0.31,-0.04 0.21,0.26 0.09,0.31 0.17,0.22 0.52,0.19 0.12,0.19 0.05,0.39 0.1,0.54 0.15,0.54 0.17,0.3 0.24,0.38 0.15,0.18 0.25,0.25 0.02,0.33 -0.11,0.33 -0.17,0.29 -0.28,0.1 -0.23,0.09 -0.11,-0.19 0.03,-0.3 -0.15,0.14 -0.19,0.1 -0.31,-0.01 -0.23,0.01 -0.23,-0.23 -0.25,-0.07 -0.15,0.05 -0.19,-0.13 -0.23,0.05 -0.11,0.01 -0.2,-0.09 -0.02,-0.07 -0.06,-0.25 -0.09,-0.03 -0.33,0.05 -0.18,-0.06 -0.01,-0.2 0.16,-0.19 -0.26,-0.14 -0.27,-0.25 -0.26,-0.17 -0.62,-0.58 -0.08,-0.57 -0.02,-0.79 0.22,-0.8"
            />
            <path
              id="path2212"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2732.12,1139.71 -0.06,-0.19 0.2,-0.36 0.14,-0.36 0.05,0.34 0.09,0.47 -0.2,0.27 -0.22,-0.17"
            />
            <path
              id="path2214"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2728.72,1144.13 -0.07,-0.29 0.15,-0.23 0.18,0.06 -0.1,0.27 -0.16,0.19"
            />
            <path
              id="path2216"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2729.19,1143.05 0.08,-0.3 0.11,0.08 z"
            />
            <path
              id="path2218"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2730.87,1140.42 -0.15,0.22 -0.05,-0.15 0.09,-0.12 0.11,0.05"
            />
            <path
              id="path2220"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2730.9,1139.99 -0.06,0.14 0.06,-0.14"
            />
            <path
              id="path2222"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2723.98,1137.45 -0.15,-0.08 0.03,-0.15 0.11,-0.06 0.01,0.29"
            />
            <path
              id="path2224"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2723.79,1136.8 -0.05,-0.28 0.23,-0.06 -0.06,0.24 -0.12,0.1"
            />
            <path
              id="path2226"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2723.05,1128.92 0.08,-0.19 0.05,0.18 -0.01,0.34 -0.12,-0.33"
            />
            <path
              id="path2228"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2723.18,1128.34 0.22,-0.26 0.17,0.13 0.1,0.2 -0.14,0.18 -0.25,-0.07 -0.1,-0.18"
            />
            <path
              id="path2230"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2732.63,1119.6 0.07,-0.21 0.12,0.13 -0.03,0.27 -0.16,-0.19"
            />
            <path
              id="path2232"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2736.07,1119.94 0.19,0.26 -0.09,0.17 -0.25,0.07 0.05,-0.31 0.1,-0.19"
            />
            <path
              id="path2234"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2736.61,1120.47 -0.08,0.17 -0.03,-0.24 z"
            />
            <path
              id="path2236"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2736.94,1120.68 -0.1,0.1 0.04,-0.26 z"
            />
            <path
              id="path2238"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2737.29,1121.3 -0.08,0.19 -0.2,-0.22 0.13,-0.14 -0.05,-0.41 0.15,-0.08 0.11,0.18 -0.09,0.23 0.03,0.25"
            />
            <path
              id="path2240"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2737.04,1119.85 0.05,-0.06 -0.05,0.06"
            />
            <path
              id="path2242"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2740.38,1120.64 0.12,-0.05 -0.12,0.05"
            />
            <path
              id="path2244"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2741.18,1122.7 -0.07,-0.26 0.07,-0.15 0.32,0.19 0.2,0.31 0.1,0.43 -0.27,0.27 -0.58,-0.08 0.01,-0.32 0.22,-0.17 0.16,-0.08 -0.16,-0.14"
            />
            <path
              id="path2246"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2742.56,1120.48 0.19,-0.12 0.16,0.4 -0.18,0.15 v -0.24 l -0.17,-0.19"
            />
            <path
              id="path2248"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2743.25,1119.36 0.05,0.21 -0.26,-0.14 z"
            />
            <path
              id="path2250"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2742.9,1114.76 0.02,-0.37 0.12,-0.72 0.38,-0.43 0.01,-0.78 -0.11,-0.71 0.25,-0.6 0.26,0.02 0.35,-0.02 0.14,-0.15 -0.17,-0.04 -0.51,-0.21 0.33,-0.34 0.12,0.07 0.38,-0.12 -0.32,-0.23 -0.06,-0.46 0.11,-0.29 0.41,0.3 0.28,0.31 0.24,-0.33 0.27,-0.32 0.03,-0.63 -0.12,-0.46 -0.22,-0.23 0.14,-0.3 0.26,-0.28 0.03,-0.47 0.12,-0.37 0.04,-0.45 0.13,-0.45 -0.02,-0.49 0.04,-0.35 0.33,0.18 0.13,0.09 0.15,0.12 0.21,-0.23 0.12,-0.32 0.3,0.1 0.29,-0.1 0.33,0.16 0.33,0.23 0.35,0.12 0.27,-0.27 0.32,0.2 0.13,0.28 0.08,-0.18 0.06,-0.23 0.07,-0.38 0.02,-0.63 -0.02,-0.24 v -0.28 l 0.37,0.17 0.19,0.29 0.27,0.29 0.23,0.07 0.1,-0.02 0.09,-0.09 0.04,-0.1 0.05,-0.04 0.25,-0.1 0.33,0.16 0.23,0.24 0.28,0.22 0.15,0.08 0.01,0.17 -0.09,0.12 0.04,0.07 -0.02,0.1 0.18,0.08 0.17,-0.08 0.33,-0.32 0.25,-0.39 0.28,0.46 0.3,-0.29 -0.14,-0.52 0.28,-0.07 h 0.16 l 0.14,0.06 0.61,0.3 0.58,-0.19 0.44,-0.44 0.09,-0.77 0.04,-0.56 0.3,-0.08 0.13,0.1 0.17,0.1 0.25,0.19 0.26,0.11 0.28,0.24 0.32,0.16 0.17,0.04 0.15,0.11 0.31,0.21 0.16,0.1 0.16,0.16 0.17,0.06 0.22,0.07 0.06,0.28 0.13,0.25 0.03,0.36 0.1,0.06 0.08,0.09 0.2,0.15 -0.22,0.34 -0.09,0.43 0.11,-0.1 0.14,-0.25 0.23,0.01 0.09,0.3 v 0.41 l -0.01,0.45 0.12,0.2 0.28,-0.2 -0.06,0.73 0.07,0.45 -0.33,0.07 -0.08,0.03 -0.1,0.01 0.15,0.14 0.2,0.13 -0.04,0.12 -0.03,0.2 v 0.15 0.19 l -0.26,-0.04 -0.19,-0.01 -0.18,-0.01 0.2,0.15 0.06,0.07 0.14,0.07 0.1,0.13 0.12,0.03 0.25,0.34 -0.02,0.13 v 0.11 l 0.27,0.08 0.19,0.07 0.01,0.19 0.02,0.19 0.02,0.28 0.13,-0.21 0.11,-0.25 0.19,0.15 0.18,0.24 0.14,0.2 0.07,0.22 0.24,0.36 0.45,0.18 0.21,0.15 0.2,0.16 -0.22,0.23 0.13,0.26 0.03,0.33 -0.18,0.18 -0.22,0.21 v 0.34 l 0.12,0.28 0.06,0.32 0.22,1.13 0.15,0.36 0.14,0.4 0.18,0.27 0.34,0.03 0.17,0.25 0.38,-0.07 0.11,0.02 0.1,-0.25 0.19,-0.21 0.22,0.01 0.22,0.17 0.21,0.13 0.23,0.02 0.19,0.01 0.26,0.33 0.07,0.31 -0.31,0.07 -0.21,0.22 -0.14,0.28 -0.24,0.25 -0.21,0.17 -0.22,0.15 -0.26,0.14 -0.45,0.42 -0.22,0.25 h -0.32 l 0.02,0.31 v 0.16 l -0.1,0.09 0.16,0.03 0.05,0.18 0.04,0.15 0.1,0.19 0.18,0.11 0.08,0.36 -0.26,0.23 -0.24,0.34 -0.15,0.08 v 0.15 l -0.03,0.08 -0.08,0.15 -0.09,0.23 -0.16,0.41 -0.08,0.17 -0.08,0.14 H 2762 l -0.15,0.05 -0.15,0.12 -0.2,0.02 0.68,0.27 0.18,-0.03 -0.12,0.31 -0.42,0.05 -0.18,0.1 0.45,0.11 0.06,0.09 -0.65,0.09 -0.1,0.03 -0.18,0.15 0.18,0.08 0.12,-0.04 h 0.08 l 0.1,-0.03 0.1,0.01 0.17,-0.08 0.18,0.13 0.17,0.05 0.17,0.01 0.18,0.05 0.03,0.34 -0.08,0.16 -0.19,0.01 -0.11,0.13 -0.14,0.09 -0.12,0.09 -0.09,0.19 -0.13,0.09 -0.18,0.14 0.3,0.02 0.1,-0.05 0.13,0.02 0.03,-0.04 0.02,0.16 -0.02,0.15 0.29,-0.15 0.2,-0.28 0.19,0.09 -0.15,0.29 0.03,0.01 -0.08,0.02 -0.06,0.05 -0.15,0.06 -0.23,0.08 0.02,0.18 -0.06,0.13 0.41,-0.17 0.04,-0.04 0.03,-0.03 0.11,-0.01 0.27,-0.17 0.29,0.13 0.28,0.22 0.21,-0.02 0.14,0.06 0.38,0.08 0.33,0.21 0.16,0.05 -0.09,0.1 -0.41,0.11 -0.04,0.15 0.09,0.1 -0.32,0.23 -0.13,-0.02 0.01,-0.2 -0.23,0.09 -0.03,0.09 -0.07,0.04 -0.13,0.17 -0.11,0.13 0.16,0.32 0.15,0.11 0.16,0.01 0.1,0.04 0.11,0.1 0.13,-0.24 0.26,0.07 0.36,0.07 0.26,0.24 0.33,0.12 0.2,0.06 h 0.18 l 0.19,0.33 -0.03,0.24 -0.03,0.21 -0.15,0.14 -0.18,0.06 -0.03,-0.23 -0.67,0.24 -0.53,0.51 -0.56,0.37 -0.33,0.02 -0.06,-0.35 -0.57,-0.02 0.09,0.07 0.14,0.08 0.12,0.06 h 0.13 l -0.13,0.5 -0.1,0.14 -0.16,-0.13 -0.15,-0.16 -0.21,-0.06 -0.27,-0.11 h -0.06 l 0.2,0.33 -0.14,0.11 -0.08,0.21 0.19,0.33 0.06,0.5 -0.37,0.18 -0.15,0.17 -0.22,0.06 0.17,0.28 -0.19,0.02 -0.14,-0.33 -0.14,0.38 -0.05,0.08 -0.02,0.12 -0.12,0.39 -0.33,-0.05 -0.11,-0.49 -0.23,-0.42 -0.18,0.09 0.09,0.57 -0.24,0.37 -0.16,-0.36 -0.13,-0.51 -0.46,-0.78 -0.23,-0.31 -0.27,-0.32 -0.23,-0.44 -0.38,-0.95 -0.21,-0.45 -0.36,-0.12 -0.34,-0.07 -0.3,-0.4 0.55,-0.49 -0.15,-0.32 -0.15,-0.15 -0.25,-0.41 -0.18,0.02 -0.15,0.1 -0.3,-0.27 -0.23,0.03 0.03,0.47 -0.2,-0.11 -0.06,-0.07 -0.08,-0.08 -0.11,-0.11 -0.26,-0.24 -0.41,-0.41 -0.83,-0.37 -0.37,-0.21 -0.01,-0.61 -0.26,-0.47 -0.27,-0.41 -0.43,-0.46 -0.61,-1.08 -0.34,-0.45 -0.37,-0.45 -0.46,-0.25 -1.16,-0.4 -0.57,-0.18 -0.5,-0.07 -0.47,-0.32 -0.28,-0.53 -0.14,0.57 -0.06,-0.46 v -0.47 l -0.17,-0.16 -0.06,-0.5 -0.06,-1.02 -0.18,-0.47 -0.15,-0.39 -0.25,-0.09 -0.38,0.08 -0.42,0.16 -0.17,0.4 -0.02,-0.14 v -0.12 h -0.16 l -0.03,0.07 -0.01,0.11 -0.04,0.16 -0.03,-0.01 -0.02,-0.31 -0.08,0.02 -0.09,-0.04 v 0.03 l -0.36,0.04 -0.36,-0.09 0.02,-0.03 -0.31,0.37 -0.19,0.11 -0.11,0.27 -0.03,0.25 -0.08,-0.05 -0.19,-0.15 -0.22,-0.08 -0.14,-0.19 -0.05,-0.26 -0.07,-0.23 -0.06,-0.18 -0.13,-0.05 -0.19,-0.21 -0.16,-0.45 -0.11,-0.37 -0.07,-0.53 -0.07,-0.5 -0.01,-0.35"
            />
            <path
              id="path2252"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2645.44,1216.61 -0.16,0.14 -0.03,0.29 -0.37,-0.07 -0.07,-0.18 -0.03,-0.62 0.1,-0.6 -0.2,-0.51 -0.14,-0.47 -0.03,-0.3 0.23,0.02 0.33,0.33 0.06,0.41 -0.04,0.29 v 0.17 l 0.17,-0.27 0.15,0.38 0.06,0.46 0.11,0.28 -0.14,0.25"
            />
            <path
              id="path2254"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2646.65,1218 -0.51,-0.43 0.17,-0.29 0.51,0.29 0.12,0.39 -0.29,0.04"
            />
            <path
              id="path2256"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2612.96,1136.51 0.03,-0.22 0.13,-0.24 0.25,-0.03 0.09,0.28 -0.1,0.26 -0.09,0.23 -0.15,0.16 -0.15,0.11 -0.1,-0.07 0.02,-0.22 0.07,-0.26"
            />
            <path
              id="path2258"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.05,1186.8 -0.23,-0.22 -0.12,-0.47 0.16,-0.31 0.23,-0.14 0.39,0.02 0.29,-0.07 0.29,-0.27 0.37,-0.17 0.53,-0.21 0.66,-0.28 0.42,-0.35 0.35,-0.04 0.29,-0.04 0.04,0.43 0.21,0.23 0.06,0.28 -0.13,0.25 -0.05,0.2 -0.06,0.47 0.11,0.48 0.18,0.38 0.19,0.41 0.19,0.38 -0.03,0.19 -0.21,-0.13 -0.14,-0.11 -0.21,-0.11 -0.3,-0.1 -0.46,-0.23 -0.72,-0.31 -0.39,-0.04 -0.28,-0.15 -0.36,0.21 -0.14,0.15 -0.27,0.07 -0.24,-0.27 -0.28,-0.2 -0.26,0.22 -0.08,-0.15"
            />
            <path
              id="path2260"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2600.41,1185.15 -0.29,0.12 -0.21,-0.22 -0.16,-0.25 -0.25,0.04 0.04,-0.15 0.11,-0.44 0.51,-0.25 0.38,-0.08 0.16,-0.06 0.22,0.29 0.49,0.21 0.27,0.36 0.32,0.16 0.18,0.07 0.2,0.18 -0.21,0.18 -0.05,0.31 0.3,0.29 0.34,0.41 0.35,0.31 0.11,0.17 -0.23,-0.13 -0.43,-0.33 -0.31,-0.26 -0.45,-0.21 -0.52,-0.2 -0.61,0.02 -0.13,0.03 -0.03,-0.32 -0.1,-0.25"
            />
            <path
              id="path2262"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2625.97,1175.52 0.11,-0.16 0.11,0.22 z"
            />
            <path
              id="path2264"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2629.97,1168.26 -0.2,0.06 -0.05,-0.24 0.07,-0.25 0.03,-0.19 0.15,-0.28 0.04,0.35 -0.04,0.55"
            />
            <path
              id="path2266"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2635.92,1169.98 -0.28,-0.01 0.22,-0.16 z"
            />
            <path
              id="path2268"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2639.41,1170.82 0.38,0.55 -0.07,0.15 -0.45,-0.29 -0.23,0.05 -0.12,0.07 0.03,-0.23 -0.05,-0.12 -0.08,0.21 -0.08,-0.3 -0.18,-0.23 -0.27,-0.14 -0.2,-0.29 0.37,0.11 0.4,0.31 0.31,0.16 v -0.17 l 0.24,0.16"
            />
            <path
              id="path2270"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2640.19,1169.92 -0.01,0.13 -0.18,-0.12 -0.1,-0.2 0.15,-0.2 0.14,-0.03 -0.04,0.26 0.04,0.16"
            />
            <path
              id="path2272"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2636.64,1136.32 -0.37,0.14 h -0.41 l -0.25,-0.09 -0.23,0.09 -0.26,0.04 -0.23,-0.09 -0.06,-0.17 -0.11,-0.28 0.22,-0.17 0.51,-0.2 0.61,0.18 0.43,0.28 0.15,0.27"
            />
            <path
              id="path2274"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2632.51,1135.11 0.23,-0.17 0.34,0.09 -0.25,0.07 -0.32,0.01"
            />
            <path
              id="path2276"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2634.17,1135.04 0.23,0.06 -0.23,-0.06"
            />
            <path
              id="path2278"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2631,1130.77 0.1,-0.23 0.24,0.09 -0.14,0.15 -0.2,-0.01"
            />
            <path
              id="path2280"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2612.03,1141.13 0.15,-0.11 0.26,0.03 0.3,0.02 -0.17,0.32 -0.1,-0.09 -0.08,-0.11 -0.07,0.24 -0.09,0.25 -0.13,-0.13 -0.07,-0.03 0.11,-0.25 -0.11,-0.14"
            />
            <path
              id="path2282"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2616.74,1137.79 -0.07,0.17 -0.09,-0.2 0.08,-0.17 0.08,0.2"
            />
            <path
              id="path2284"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2616.5,1136.9 0.16,0.08 0.08,0.24 -0.13,-0.03 -0.11,-0.29"
            />
            <path
              id="path2286"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2616.72,1140.7 -0.12,0.13 -0.05,0.09 -0.09,-0.22 0.09,-0.11 0.17,-0.05 v 0.16"
            />
            <path
              id="path2288"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2616.42,1141.17 -0.13,-0.29 0.06,-0.17 0.11,0.2 -0.04,0.26"
            />
            <path
              id="path2290"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2612.44,1142.8 -0.16,-0.48 -0.25,-0.26 0.18,-0.17 0.23,0.1 v 0.52 0.29"
            />
            <path
              id="path2292"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2615.32,1144.63 -0.21,-0.2 h -0.35 l 0.23,-0.07 0.14,-0.09 0.15,-0.24 0.24,-0.01 0.25,-0.23 -0.08,0.38 -0.14,0.14 -0.18,-0.11 -0.05,0.43"
            />
            <path
              id="path2294"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2635.22,1164.13 0.23,-0.05 0.16,0.12 0.17,0.01 -0.1,0.2 -0.46,-0.28"
            />
            <path
              id="path2296"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2644.36,1156.69 -0.18,-0.58 -0.11,-0.23 -0.09,-0.34 0.32,0.23 0.13,0.45 0.11,0.36 v 0.29 l -0.18,-0.18"
            />
            <path
              id="path2298"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2704.88,1169.1 -0.24,0.12 -0.08,-0.36 0.15,-0.78 -0.12,-0.37 v -0.37 l 0.16,0.12 0.25,0.41 0.08,0.67 -0.2,0.56"
            />
            <path
              id="path2300"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2705.61,1169.2 -0.28,0.09 -0.12,0.18 -0.28,-0.08 0.14,-0.27 0.3,-0.33 0.3,0.15 -0.06,0.26"
            />
            <path
              id="path2302"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2705.25,1168.28 -0.04,-0.51 0.14,0.27 z"
            />
            <path
              id="path2304"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2705.42,1168.7 0.04,-0.55 v -0.44 l 0.1,0.16 0.11,0.39 -0.25,0.44"
            />
            <path
              id="path2306"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2705.85,1169.05 0.07,-0.25 -0.07,0.25"
            />
            <path
              id="path2308"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2706.12,1169.16 0.02,-0.41 0.24,-0.38 0.05,0.43 -0.31,0.36"
            />
            <path
              id="path2310"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2705.91,1169.37 -0.24,-0.03 0.24,-0.13 z"
            />
            <path
              id="path2312"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2704.23,1167.37 -0.09,-0.36 0.14,0.16 z"
            />
            <path
              id="path2314"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2704.62,1171.25 0.09,0.2 0.07,0.24 -0.09,-0.11 -0.18,-0.2 0.11,-0.13"
            />
            <path
              id="path2316"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2710.86,1159.35 0.06,0.37 -0.08,0.19 -0.28,-0.01 -0.09,-0.17 0.16,-0.32 0.23,-0.06"
            />
            <path
              id="path2318"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2720.6,1142.36 -0.11,-0.32 0.28,-0.33 0.07,0.38 -0.24,0.27"
            />
            <path
              id="path2320"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2720.88,1140.4 -0.13,-0.03 -0.11,-0.14 0.2,-0.07 0.04,0.24"
            />
            <path
              id="path2322"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2720.73,1139.92 0.02,-0.22 -0.02,0.22"
            />
            <path
              id="path2324"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2720.17,1141.48 0.12,0.16 0.05,0.62 -0.1,0.54 v -0.66 l -0.07,-0.35 v -0.31"
            />
            <path
              id="path2326"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2719.9,1143.9 -0.19,-0.1 0.04,-0.19 0.09,-0.11 0.11,-0.17 0.04,0.38 -0.09,0.19"
            />
            <path
              id="path2328"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2720.32,1145.45 v 0.4 l -0.08,0.18 v -0.35 l 0.08,-0.23"
            />
            <path
              id="path2330"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2719.99,1140.19 -0.14,-0.23 -0.14,-0.18 0.19,0.04 h 0.24 l 0.07,-0.36 0.07,-0.2 0.02,0.4 -0.09,0.45 -0.22,0.08"
            />
            <path
              id="path2332"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2720.05,1137.59 -0.04,-0.35 0.13,0.21 0.16,0.26 -0.09,0.35 -0.07,-0.11 0.07,-0.18 -0.16,-0.18"
            />
            <path
              id="path2334"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2720.19,1141.14 0.05,-0.35 -0.05,0.35"
            />
            <path
              id="path2336"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2719.8,1136.9 0.05,0.19 -0.14,-0.08 z"
            />
            <path
              id="path2338"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2719.8,1142.32 v -0.35 0.35"
            />
            <path
              id="path2340"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2546.19,1203.05 -0.3,0.1 -0.1,-0.15 0.14,-0.06 0.26,0.11"
            />
            <path
              id="path2342"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2548.52,1201.16 h -0.33 l 0.15,-0.12 0.23,-0.06 -0.05,0.18"
            />
            <path
              id="path2344"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2547.24,1207.4 0.22,-0.02 0.09,0.16 z"
            />
            <path
              id="path2346"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2562.91,1223.45 0.06,0.28 -0.17,-0.2 z"
            />
            <path
              id="path2348"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2562.71,1223.21 0.05,0.14 -0.13,-0.06 z"
            />
            <path
              id="path2350"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2562.58,1222.86 0.13,-0.11 -0.04,-0.16 -0.12,-0.05 -0.01,-0.26 0.09,0.24 0.14,0.07 0.11,-0.13 v -0.18 l 0.08,-0.1 0.18,0.08 -0.09,0.13 0.01,0.13 0.03,0.11 h -0.11 l -0.04,0.07 -0.03,0.07 -0.06,0.01 -0.02,0.09 -0.03,0.15 h -0.13 l -0.16,0.1 -0.01,-0.16 0.08,-0.1"
            />
            <path
              id="path2352"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2563.44,1222.23 -0.03,0.15 -0.11,-0.16 z"
            />
            <path
              id="path2354"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2566.67,1223.04 -0.12,-0.09 0.12,-0.12 0.12,-0.13 0.19,0.13 -0.13,0.18 -0.18,0.03"
            />
            <path
              id="path2356"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2565.67,1223.61 -0.24,0.08 -0.04,-0.08 0.16,-0.09 h 0.18 l -0.06,0.09"
            />
            <path
              id="path2358"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2566.03,1225.8 -0.12,0.04 -0.01,-0.2 z"
            />
            <path
              id="path2360"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2566.69,1229.32 -0.33,-0.32 0.25,-0.01 0.22,0.19 -0.14,0.14"
            />
            <path
              id="path2362"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2577.74,1238.5 0.18,-0.05 -0.04,0.1 -0.13,0.2 -0.05,0.07 v -0.12 l 0.04,-0.2"
            />
            <path
              id="path2364"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2583.37,1239.41 -0.17,-0.08 -0.15,-0.01 -0.2,-0.17 0.13,-0.04 0.16,0.02 0.13,0.04 0.14,0.08 -0.04,0.16"
            />
            <path
              id="path2366"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2581.98,1245.87 0.2,-0.03 0.2,0.15 -0.06,0.12 -0.15,-0.13 -0.13,0.01 -0.15,-0.04 0.09,-0.08"
            />
            <path
              id="path2368"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2593.77,1241.79 -0.11,0.12 -0.21,0.19 -0.11,-0.11 -0.04,-0.13 0.17,-0.03 0.3,-0.04"
            />
            <path
              id="path2370"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.84,1253.89 0.2,0.12 0.04,0.2 -0.09,-0.01 -0.19,-0.25 -0.15,-0.04 -0.25,-0.28 -0.09,-0.37 0.2,0.28 0.2,0.24 0.13,0.11"
            />
            <path
              id="path2372"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2570.31,1254.32 h 0.2 l 0.11,-0.1 0.29,0.27 0.23,0.04 -0.03,0.13 -0.15,0.09 -0.1,0.07 -0.19,-0.29 -0.15,0.09 -0.14,-0.09 -0.07,-0.21"
            />
            <path
              id="path2374"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2571.42,1254.64 0.21,0.04 0.36,0.29 0.22,0.3 -0.2,-0.06 -0.21,-0.2 -0.18,-0.15 -0.2,-0.22"
            />
            <path
              id="path2376"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.73,1255.48 -0.18,-0.07 -0.23,-0.18 -0.13,-0.25 0.2,0.17 0.34,0.33"
            />
            <path
              id="path2378"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2573.38,1255.69 -0.18,-0.19 0.14,-0.11 0.3,0.13 0.17,0.24 -0.1,0.2 0.01,0.17 0.15,0.16 0.19,0.26 -0.18,-0.07 -0.16,-0.06 0.16,0.22 0.07,0.21 h -0.18 l -0.2,-0.1 -0.05,-0.23 -0.22,-0.08 0.1,-0.05 0.18,-0.04 -0.27,-0.13 0.09,-0.09 0.07,-0.09 -0.27,-0.03 -0.25,-0.18 0.01,-0.16 -0.06,-0.13 -0.28,-0.39 0.26,0.21 0.35,0.3 0.22,0.2 -0.07,-0.17"
            />
            <path
              id="path2380"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.19,1255.6 -0.18,-0.07 0.2,-0.04 0.31,0.15 h -0.23 l -0.1,-0.04"
            />
            <path
              id="path2382"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2571.72,1255.79 0.02,-0.15 h 0.1 l 0.09,0.08 0.05,0.07 0.12,0.12 0.11,-0.02 0.11,0.08 0.02,0.03 0.13,0.05 0.09,0.08 0.07,0.06 0.03,-0.01 0.05,0.01 0.04,-0.12 -0.12,-0.07 -0.1,-0.09 -0.1,-0.04 -0.1,-0.11 0.21,0.01 0.23,0.16 0.19,0.07 0.13,0.07 0.01,0.14 -0.11,0.07 0.1,0.12 -0.08,0.07 -0.08,0.06 -0.11,0.12 -0.05,0.1 -0.14,-0.12 0.08,-0.08 0.04,-0.15 -0.14,-0.05 -0.11,0.07 -0.05,0.12 -0.12,-0.08 -0.01,-0.16 0.07,-0.02 0.08,-0.07 -0.14,-0.06 -0.11,-0.02 -0.09,-0.02 -0.09,0.05 -0.08,-0.19 -0.12,0.12 -0.05,-0.05 v -0.13 l -0.07,-0.12"
            />
            <path
              id="path2384"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2573.34,1256.7 0.18,0.22 0.29,0.13 0.16,0.26 0.17,0.18 0.19,0.27 h -0.11 l -0.24,-0.1 -0.15,-0.17 -0.12,-0.23 h -0.13 l -0.11,-0.17 -0.13,-0.08 -0.05,-0.05 -0.09,-0.33 0.14,0.07"
            />
            <path
              id="path2386"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2574.95,1257.29 -0.07,-0.1 -0.15,-0.01 -0.23,-0.04 0.17,-0.09 0.28,0.02 v 0.22"
            />
            <path
              id="path2388"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2574.82,1256.43 0.07,0.11 -0.01,0.21 -0.11,0.08 -0.18,-0.02 -0.14,0.01 -0.19,-0.14 0.14,-0.07 0.05,-0.03 -0.11,-0.07 -0.16,-0.05 v -0.1 l -0.03,-0.09 -0.11,0.03 -0.15,-0.14 -0.08,-0.08 0.1,-0.18 0.01,-0.16 0.09,-0.03 0.08,0.31 0.16,0.08 0.18,0.08 0.16,0.1 0.17,-0.02 0.06,0.17"
            />
            <path
              id="path2390"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2574.5,1256.13 -0.11,-0.08 -0.09,-0.07 v -0.16 l 0.09,0.07 0.11,0.04 0.13,0.05 0.08,0.17 -0.21,-0.02"
            />
            <path
              id="path2392"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2575.58,1257.06 -0.24,-0.28 0.17,0.09 0.2,0.1 0.12,0.02 -0.13,0.05 -0.12,0.02"
            />
            <path
              id="path2394"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2575.96,1257.06 0.13,0.12 0.1,0.08 -0.02,0.1 h -0.14 l -0.11,-0.06 -0.16,-0.04 0.07,-0.14 0.13,-0.06"
            />
            <path
              id="path2396"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2577.11,1258.64 0.09,0.11 -0.09,0.02 -0.08,-0.04 -0.03,0.07 0.11,0.14 h -0.07 l -0.08,-0.04 -0.1,-0.13 -0.03,0.11 0.03,0.09 0.08,0.05 -0.1,0.01 -0.07,-0.08 -0.1,-0.01 -0.02,0.17 -0.05,-0.15 -0.03,-0.29 -0.14,-0.01 -0.08,0.09 -0.18,-0.01 0.02,-0.08 0.06,-0.13 -0.08,-0.16 -0.11,0.04 -0.22,-0.02 -0.21,-0.09 -0.19,-0.12 h 0.15 l 0.1,0.04 0.12,-0.05 -0.08,-0.15 -0.13,-0.02 -0.05,-0.04 -0.12,-0.07 0.07,-0.06 0.13,0.08 h 0.09 v -0.09 l -0.08,-0.06 -0.17,-0.06 -0.19,-0.14 0.16,0.03 0.2,0.03 0.2,0.05 0.22,0.22 0.19,0.15 0.13,0.03 0.23,-0.02 0.25,0.11 0.07,0.15 v 0.18 l 0.1,0.1 0.08,0.05"
            />
            <path
              id="path2398"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2577.36,1259.11 0.38,0.11 0.24,0.15 0.21,0.03 0.07,0.11 -0.23,0.05 -0.29,-0.03 -0.25,-0.1 0.08,-0.06 0.03,-0.12 -0.22,-0.07 -0.21,-0.07 h 0.19"
            />
            <path
              id="path2400"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2578.41,1259.72 0.24,0.21 -0.14,0.09 -0.25,-0.01 -0.2,-0.01 0.16,-0.05 -0.02,-0.11 0.02,-0.15 0.19,0.03"
            />
            <path
              id="path2402"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2579.05,1260.13 0.25,0.25 0.16,0.28 -0.15,-0.04 -0.17,-0.08 -0.09,0.1 -0.24,-0.06 -0.04,-0.14 -0.12,-0.03 -0.17,-0.07 -0.24,-0.22 0.3,0.01 0.24,-0.07 0.27,0.07"
            />
            <path
              id="path2404"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2579.68,1260.39 0.13,0.12 0.11,0.25 -0.11,-0.08 -0.13,-0.12 -0.21,-0.15 -0.07,-0.11 0.28,0.09"
            />
            <path
              id="path2406"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2580.1,1260.94 v 0.14 l -0.11,0.08 -0.09,-0.09 -0.11,-0.09 -0.08,-0.09 0.19,-0.02 0.2,0.07"
            />
            <path
              id="path2408"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2581.33,1261.61 -0.23,-0.04 -0.14,-0.15 -0.15,-0.1 -0.02,-0.16 h 0.15 l 0.19,0.02 0.2,0.09 0.04,0.18 -0.04,0.16"
            />
            <path
              id="path2410"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2581.41,1260.98 0.16,0.09 -0.08,0.09 -0.14,-0.08 0.06,-0.1"
            />
            <path
              id="path2412"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2582.28,1261.95 -0.24,-0.17 0.13,-0.06 0.19,0.13 -0.08,0.1"
            />
            <path
              id="path2414"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2581.18,1260.7 -0.05,0.14 -0.13,-0.1 z"
            />
            <path
              id="path2416"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2731.28,1114.42 -0.13,0.12 -0.06,0.26 -0.17,0.15 0.06,-0.3 0.07,-0.11 -0.09,-0.33 0.05,-0.37 0.22,-0.26 0.05,0.47 v 0.37"
            />
            <path
              id="path2418"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2731.62,1113.55 0.09,0.25 0.06,0.26 0.13,0.15 0.29,-0.15 -0.1,0.3 -0.31,0.02 -0.16,-0.19 -0.02,-0.36 0.02,-0.28"
            />
            <path
              id="path2420"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2732.63,1115.21 -0.19,-0.04 -0.25,-0.13 -0.2,-0.25 -0.18,-0.13 0.15,-0.09 0.25,-0.1 0.13,0.19 0.14,-0.17 0.15,-0.36 0.36,-0.41 -0.13,0.6 -0.24,0.34 v 0.22 l 0.01,0.33"
            />
            <path
              id="path2422"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2733.66,1115.23 -0.48,0.11 -0.25,-0.23 -0.17,-0.25 0.22,-0.13 0.28,0.05 0.08,-0.39 0.35,-0.3 0.08,0.51 -0.11,0.63"
            />
            <path
              id="path2424"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2734.81,1096.66 h 0.38 l -0.1,0.11 -0.21,0.24 0.04,0.13 0.04,0.16 0.13,0.29 0.11,-0.07 0.23,-0.36 0.24,-0.23 0.17,-0.26 0.24,-0.18 0.13,0.15 v 0.66 l 0.02,0.45 0.02,0.47 0.11,0.99 v 0.7 l -0.04,0.6 -0.05,0.83 0.21,0.67 -0.16,0.35 0.14,0.96 0.33,0.39 v 0.42 l -0.16,0.22 -0.42,0.06 -0.04,0.45 v 0.27 l -0.24,-0.02 -0.14,0.24 v 0.36 l -0.16,0.2 -0.23,-0.02 -0.29,-0.02 -0.35,0.09 -0.29,-0.01 -0.21,0.1 -0.1,-0.05 h 0.04 -0.04 l -0.19,-0.19 -0.05,-0.33 -0.04,0.51 0.11,0.16 0.11,0.14 0.16,0.33 -0.25,0.24 -0.32,0.13 -0.24,0.04 -0.12,0.3 0.05,0.38 -0.18,0.34 0.05,0.43 -0.1,0.33 -0.1,0.52 -0.75,-0.09 -0.35,0.05 -0.65,0.45 -0.25,0.26 -0.01,0.4 0.16,0.28 0.22,0.23 0.21,0.14 0.24,0.1 -0.18,0.15 -0.39,0.03 -0.15,0.03 0.13,0.35 0.29,0.25 h 0.24 l 0.09,0.26 -0.07,0.29 -0.26,0.41 -0.14,0.28 -0.26,0.15 -0.16,0.13 -0.14,0.08 -0.11,0.2 -0.19,-0.03 -0.09,-0.2 0.09,-0.27 -0.09,-0.26 -0.53,-0.39 -0.36,-0.2 0.17,0.26 0.44,0.31 0.21,0.25 -0.13,0.27 -0.15,0.23 -0.46,0.15 -0.58,-0.06 -0.44,0.51 -0.19,0.3 v 0.29 l -0.04,0.25 -0.05,0.31 -0.57,0.47 -0.24,0.24 -0.33,-0.1 -0.24,0.04 -0.28,0.17 -0.04,0.37 v 0.26 l -0.41,0.51 -0.21,0.26 -0.19,0.01 -0.35,-0.03 -0.07,-0.25 0.15,-0.24 -0.15,-0.12 -0.44,0.22 -0.35,0.64 -0.21,0.37 -0.1,0.36 -0.18,0.1 -0.02,-0.28 -0.16,0.2 -0.09,-0.02 -0.1,0.23 0.03,0.31 -0.01,0.09 -0.45,0.53 -0.21,0.15 -0.18,-0.01 -0.17,0.2 -0.07,0.16 -0.94,0.65 -0.5,0.17 -0.14,0.27 -0.15,0.23 -0.16,0.11 -0.07,0.11 -0.17,0.1 -0.22,0.04 -0.17,0.18 v 0.16 l -0.07,0.18 0.14,0.3 -0.38,0.26 -0.31,0.12 -0.07,0.21 0.07,0.22 -0.01,0.11 -0.04,0.21 -0.13,0.23 -0.17,0.1 -0.2,0.24 -0.23,0.36 -0.35,0.03 -0.34,-0.23 -0.21,0.04 -0.72,0.18 -0.51,-0.19 -0.55,0.02 -0.3,0.09 -0.43,0.38 -0.31,0.3 -0.39,0.1 -0.32,0.09 -0.28,-0.07 -0.14,-0.24 -0.07,-0.17 0.07,-0.49 0.24,-0.4 0.06,-0.4 0.15,-0.51 0.41,-0.48 0.84,-0.95 0.64,-0.75 0.7,-0.35 0.41,-0.24 0.3,-0.32 0.34,-0.61 0.4,-0.6 0.27,-0.31 0.21,-0.44 0.14,-1 0.49,-0.18 0.74,-0.46 0.54,-0.38 0.41,-0.39 0.18,-0.72 0.18,-1.05 0.26,-0.83 0.18,-0.59 0.05,-0.44 0.15,-0.39 0.31,0.05 0.32,-0.27 0.55,-0.66 0.35,-0.78 0.44,-0.64 0.36,-0.41 0.07,-0.55 0.12,-0.53 0.33,-0.29 0.27,-0.81 0.31,-0.77 0.11,-0.93 0.59,-0.73 0.42,-0.66 0.95,-1.22 0.84,-0.78 0.1,-0.69 0.77,-0.6 0.48,-0.61 0.56,-0.37 0.37,-0.38 0.3,-0.3 0.39,-0.1 0.2,-0.1 0.19,-0.13 0.2,-0.41 0.29,-0.51 0.45,-0.43 0.28,-0.42 0.29,-0.3 0.31,-0.34 0.05,0.19 -0.11,0.34 -0.12,0.26 -0.07,0.38 0.28,0.04 0.26,-0.27 0.29,-0.11 0.2,-0.13 0.26,-0.3"
            />
            <path
              id="path2426"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2726.85,1116.35 0.32,-0.22 0.3,0.16 0.18,0.4 -0.02,0.36 -0.16,0.27 -0.26,-0.07 -0.22,-0.04 -0.16,-0.09 -0.01,-0.24 v -0.27 l 0.03,-0.26"
            />
            <path
              id="path2428"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2729.13,1115.72 -0.24,0.28 -0.37,-0.04 -0.41,-0.01 0.09,-0.17 0.22,-0.11 0.12,-0.28 0.03,-0.28 v -0.27 l 0.07,-0.32 0.16,-0.13 0.25,-0.39 0.29,-0.05 0.35,0.07 0.39,-0.12 0.18,-0.17 -0.02,0.4 0.08,-0.05 0.06,-0.24 0.12,-0.01 0.03,0.38 -0.12,0.35 -0.28,0.34 -0.42,0.08 -0.18,-0.3 -0.17,-0.04 -0.15,0.2 -0.12,0.23 0.04,0.65"
            />
            <path
              id="path2430"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2735.11,1107.25 -0.1,-0.17 -0.31,-0.26 0.15,-0.09 0.27,-0.15 0.4,0.01 0.19,0.1 0.26,-0.1 0.18,-0.19 0.07,-0.33 0.16,-0.23 0.06,-0.36 -0.04,-0.43 0.28,-0.25 0.25,-0.16 0.37,-0.09 0.22,-0.15 0.41,-0.3 0.32,0.24 0.35,0.11 -0.25,0.21 -0.18,-0.08 -0.27,-0.01 v 0.22 l 0.22,0.45 0.11,0.32 -0.71,0.17 -0.42,0.36 -0.13,0.5 -0.09,0.54 -0.01,0.29 -0.12,0.31 -0.16,0.34 -0.48,0.17 -0.09,-0.24 0.08,-0.35 -0.09,-0.14 -0.17,0.36 -0.13,0.26 -0.28,-0.07 -0.21,-0.16 -0.03,-0.24 0.05,-0.24 -0.13,-0.17"
            />
            <path
              id="path2432"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2740.02,1104.34 0.07,-0.15 -0.04,-0.21 0.06,-0.11 0.11,0.06 0.08,0.01 0.17,0.08 0.1,0.17 0.24,-0.15 0.15,-0.18 0.16,0.01 0.06,0.17 0.16,0.07 0.04,0.23 0.09,0.21 0.03,0.25 0.06,0.27 -0.06,0.31 -0.19,0.1 -0.24,0.12 -0.21,0.08 -0.31,0.03 -0.41,-0.09 -0.01,-0.17 -0.04,-0.27 -0.07,-0.32 0.02,-0.21 -0.02,-0.31"
            />
            <path
              id="path2434"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2759.21,1104.86 -0.24,-0.09 -0.17,-0.21 -0.12,-0.64 -0.08,-0.23 0.13,-0.38 0.04,-0.49 0.24,-0.02 0.2,0.38 0.09,0.41 0.1,0.32 0.13,0.3 -0.17,0.2 -0.12,0.09 -0.03,0.36"
            />
            <path
              id="path2436"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2765.47,1106.97 -0.34,-0.14 -0.29,-0.27 0.22,-0.3 0.01,-0.22 -0.08,-0.34 -0.08,-0.2 0.08,-0.36 0.14,-0.69 0.25,0.01 0.28,0.01 0.34,0.19 0.32,0.04 0.19,-0.14 -0.04,-0.29 -0.01,-0.33 0.06,-0.27 0.2,-0.46 v -1.06 l -0.18,-0.87 -0.06,-0.73 -0.19,-0.52 v -0.82 l 0.05,-0.26 0.14,-0.09 0.2,-0.16 0.19,-0.11 0.36,-0.07 0.16,0.24 0.14,0.24 0.48,0.02 0.37,0.11 0.17,-0.21 0.15,0.04 -0.13,0.51 -0.19,0.46 -0.08,0.77 0.21,0.33 0.06,0.48 -0.08,0.44 -0.01,0.32 -0.02,0.34 v 0.57 l 0.02,0.54 0.13,0.26 -0.04,0.47 -0.04,0.86 -0.19,0.34 -0.14,0.22 -0.13,0.26 0.46,0.32 0.74,0.74 0.14,0.01 0.32,-0.11 0.4,-0.05 0.08,-0.13 -0.24,-0.11 v -0.2 l 0.19,-0.17 v -0.16 l -0.06,-0.25 -0.04,-0.26 -0.09,-0.44 -0.09,-0.05 -0.12,-0.2 0.03,-0.33 0.07,-0.17 0.19,-0.17 0.11,-0.01 0.05,-0.18 0.04,-0.17 0.11,-0.15 0.21,-0.1 0.09,-0.14 0.16,-0.22 0.43,-0.04 0.12,-0.15 -0.04,-0.27 -0.13,-0.17 -0.05,-0.5 -0.13,-0.57 0.33,-0.56 0.21,-0.06 h 0.33 l 0.43,-0.04 0.13,0.25 -0.19,0.22 0.13,0.38 0.31,0.26 0.4,0.12 0.25,0.04 0.2,0.14 0.17,-0.15 0.09,-0.23 0.17,0.06 0.04,0.18 -0.11,0.1 -0.13,0.18 0.13,0.01 0.18,-0.15 0.21,-0.02 0.05,0.23 0.03,0.34 -0.19,0.4 -0.15,0.08 0.07,-0.2 -0.02,-0.11 -0.24,-0.01 -0.09,0.12 v 0.19 l -0.08,0.09 -0.12,0.04 0.16,0.1 -0.08,0.1 -0.21,0.06 -0.18,0.29 -0.38,0.27 -0.1,0.31 0.23,-0.03 0.05,0.15 -0.18,0.2 0.07,0.12 0.22,-0.11 0.14,-0.04 -0.2,0.2 -0.17,0.16 0.04,0.19 0.21,0.02 0.1,0.24 -0.17,0.1 -0.18,0.14 -0.08,0.22 0.38,-0.13 0.19,-0.01 -0.43,0.27 -0.19,0.15 -0.26,0.15 -0.32,0.2 0.05,0.34 -0.21,0.23 -0.17,0.44 -0.51,0.51 -0.3,0.24 -0.27,0.32 -0.16,0.39 0.31,0.04 0.2,-0.23 0.31,-0.09 0.21,0.29 0.14,0.31 0.34,0.15 0.23,0.18 0.64,0.32 0.54,0.77 0.32,0.67 0.16,0.33 0.3,0.12 0.29,0.19 0.21,0.06 0.18,-0.23 0.11,-0.37 0.24,0.01 0.09,0.38 0.04,0.56 -0.46,0.29 -0.72,-0.17 -0.25,-0.13 0.23,-0.08 0.04,-0.18 -0.33,-0.15 -0.36,-0.03 h -0.38 l -0.51,-0.02 -0.23,-0.4 -0.33,-0.12 -0.44,-0.05 -0.5,0.18 -0.26,-0.32 -0.24,-0.14 -0.25,-0.33 -0.25,-0.64 -0.22,-0.18 -0.53,0.04 -0.25,-0.02 -0.21,0.19 -0.12,0.48 -0.43,0.57 -0.56,0.41 -0.24,0.88 -0.06,0.9 0.15,0.55 0.48,0.97 0.49,0.37 0.53,0.06 0.43,-0.12 0.65,0.12 0.26,-0.01 0.43,0.09 0.18,0.16 0.39,-0.14 0.47,-0.05 1.01,0.11 1.57,0.1 0.26,-0.24 0.44,-0.25 0.83,0.1 0.62,0.27 0.82,0.12 0.37,0.43 0.07,0.38 0.32,0.37 0.25,0.39 0.28,0.19 0.21,0.27 0.13,0.64 0.18,0.31 0.2,0.18 -0.22,0.26 -0.21,0.39 -0.36,-0.32 -0.12,-0.44 -0.36,-0.26 -0.27,-0.23 -0.23,-0.38 -0.38,-0.46 -0.28,-0.24 -0.58,-0.39 -0.75,0.08 -0.87,0.11 -0.46,-0.07 -0.32,-0.16 -0.65,0.22 -0.91,0.06 -0.79,0.1 -0.76,0.13 -0.43,0.38 -0.37,0.05 -0.44,0.07 -0.26,-0.04 -0.1,-0.33 -0.31,-0.69 -0.22,-0.2 -0.28,-0.34 -0.3,0.19 -0.01,0.27 -0.2,0.03 -0.04,-0.29 -0.04,-0.24 -0.2,-0.1 -0.24,-0.03 -0.01,-0.18 0.03,-0.17 -0.02,-0.2 -0.03,-0.15 -0.3,-0.05 -0.03,-0.17 -0.02,-0.19 0.05,-0.13 -0.03,-0.2 -0.15,0.07 -0.05,-0.13 0.13,-0.12 0.1,-0.29 -0.03,-0.34 -0.22,-0.01 -0.18,0.29 -0.23,-0.16 0.13,-0.31 0.35,-0.2 -0.12,-0.29 -0.03,-0.26 0.02,-0.3 0.1,-0.21 0.15,-0.99 -0.08,0.29 -0.07,0.31 -0.17,0.16 -0.09,-0.29 -0.18,-0.1 -0.14,-0.21 -0.12,-0.45 -0.31,-0.35 -0.07,-0.45 -0.06,-0.56 0.1,-0.8 v -0.33 l -0.22,-0.18 -0.19,-0.47 -0.06,-0.94 -0.19,-0.33"
            />
            <path
              id="path2438"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2774.31,1099.7 0.33,0.05 0.25,0.11 0.11,0.34 -0.21,0.18 -0.23,0.11 -0.19,-0.16 0.06,0.29 v 0.29 l 0.04,0.24 0.14,0.26 0.13,0.09 0.2,-0.14 0.06,0.24 -0.02,0.38 -0.15,0.32 -0.22,0.21 -0.33,-0.24 -0.09,-0.52 v -0.43 l -0.11,-0.37 v -0.31 l -0.03,-0.2 -0.14,-0.28 -0.07,-0.05 -0.16,0.19 -0.04,0.16 v 0.16 l 0.08,0.14 0.12,0.08 0.09,0.21 0.02,0.14 v 0.13 l -0.02,0.19 -0.12,0.41 -0.35,-0.27 -0.42,-0.31 -0.05,-0.31 0.13,-0.23 -0.02,-0.26 -0.17,-0.18 -0.06,-0.4 0.02,-0.31 0.33,0.01 0.16,0.27 0.14,-0.02 0.04,-0.27 0.18,0.09 -0.04,-0.18 -0.12,-0.23 0.03,-0.34 0.24,0.04 0.14,0.32 0.03,-0.27 0.16,0.04 0.11,0.23 0.02,0.36"
            />
            <path
              id="path2440"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2768.75,1096.86 0.02,-0.56 0.14,1.39 -0.1,0.67 -0.12,0.16 -0.03,-0.23 v 0.14 l 0.03,-0.53 0.03,-0.5 -0.01,-0.24 0.04,-0.3"
            />
            <path
              id="path2442"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.21,1099.43 0.15,0.45 -0.48,0.64 -0.01,-0.61 0.09,-0.17 -0.05,0.05 0.3,-0.36"
            />
            <path
              id="path2444"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2775.04,1103.57 -0.31,0.04 -0.27,-0.19 0.02,-0.17 0.19,-0.21 h 0.22 l 0.18,0.24 -0.03,0.29"
            />
            <path
              id="path2446"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2752.07,1090.82 0.31,0.04 0.28,-0.04 0.28,-0.27 0.25,-0.13 0.2,-0.09 0.65,-0.28 0.86,-0.23 0.39,-0.11 -0.07,0.19 -0.38,0.87 0.13,0.49 -0.08,0.58 0.11,0.16 0.08,0.18 -0.28,-0.09 -0.22,0.05 -0.25,-0.01 -0.24,-0.06 -0.19,-0.06 0.05,0.27 -0.07,0.24 -0.32,-0.32 -0.21,0.04 -0.26,-0.01 -0.3,-0.22 -0.21,0.01 -0.18,-0.06 -0.28,0.16 -0.35,0.1 -0.3,0.43 -0.11,0.21 0.02,0.27 0.09,0.3 -0.14,0.18 -0.17,0.16 -0.04,0.18 -0.06,0.13 0.27,-0.34 0.26,0.01 0.28,-0.04 0.07,-0.09 0.15,0.04 0.31,0.05 0.26,-0.02 0.32,0.02 0.24,0.16 0.2,0.18 0.28,-0.05 0.29,0.1 v 0.06 l 0.16,-0.04 0.16,0.01 v 0.07 l -0.44,0.14 0.32,0.06 0.14,0.17 -0.46,0.18 -0.48,-0.07 h -0.53 l -0.52,-0.05 -0.5,0.05 -0.39,-0.26 -0.44,-0.21 0.01,0.16 v 0.14 l -0.24,0.02 -0.23,0.02 -0.2,0.09 -0.27,-0.11 -0.28,-0.14 -0.07,0.29 -0.41,0.11 -0.21,-0.04 -0.2,0.14 -0.22,0.24 -0.12,0.06 -0.15,-0.09 -0.04,-0.17 h -0.33 l -0.34,0.1 -0.16,0.6 -0.57,0.01 -0.51,-1.2 -0.53,-0.31 -0.16,0.26 -0.38,-0.1 -0.56,-0.03 -0.26,0.1 -0.14,-0.01 -0.12,0.06 -0.55,-0.05 -0.32,0.01 -0.2,0.02 -0.16,0.02 -0.2,-0.11 -0.16,0.14 -0.21,-0.03 -0.38,0.26 -0.14,0.61 -0.23,0.33 -0.24,0.32 -0.26,-0.2 -0.29,0.03 -0.64,0.13 -0.25,-0.03 -0.34,0.21 -0.23,0.37 -0.38,0.05 -0.31,0.14 -0.08,-0.53 -0.11,-0.06 -0.13,0.05 -0.26,-0.02 -0.09,0.23 -0.01,0.02 -0.17,-0.02 -0.16,-0.04 -0.34,-0.04 -0.45,0.08 -0.16,-0.04 -0.12,0.33 -0.14,-0.08 -0.13,-0.29 -0.16,-0.23 -0.05,-0.35 -0.05,-0.32 -0.01,-0.39 -0.11,-0.19 -0.17,0.24 -0.11,-0.46 -0.18,-0.16 -0.09,-0.29 -0.25,0.43 -0.18,-0.05 -0.11,-0.39 0.22,-0.04 0.5,-0.09 0.37,0.04 0.39,0.16 0.32,-0.1 0.33,-0.15 0.3,-0.16 h 0.41 l -0.21,-0.48 0.16,-0.56 0.95,-0.11 0.8,-0.17 0.72,-0.12 0.53,-0.49 0.49,-0.04 0.55,-0.15 0.21,0.44 0.56,-0.13 0.23,-0.05 0.28,0.1 0.27,0.03 0.28,0.07 0.65,-0.13 0.57,-0.1 0.51,-0.23 0.55,-0.28 0.44,-0.25 0.3,-0.06 0.22,-0.21 0.38,-0.06 0.35,0.02 0.31,0.42 -0.04,-0.27 -0.12,-0.09 -0.02,-0.14 0.41,-0.02 0.19,0.05 0.2,0.08 0.06,-0.16 0.18,0.01 0.2,-0.15 0.22,0.26 0.32,-0.01 0.31,-0.06 0.4,0.04 0.24,-0.18 0.33,-0.02 0.64,-0.03 0.3,0.22 0.3,0.11"
            />
            <path
              id="path2448"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2734.92,1094.78 -0.26,-0.31 0.17,-0.08 z"
            />
            <path
              id="path2450"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2757.98,1090.86 -0.24,0.1 -0.4,0.32 -0.43,0.21 -0.61,-0.42 -0.47,0.07 -0.39,0.07 -0.29,0.05 0.05,-0.26 0.2,-0.06 0.41,-0.12 0.45,-0.41 0.6,-0.42 0.52,0.35 0.36,0.27 0.24,0.25"
            />
            <path
              id="path2452"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2760.13,1091.05 -0.68,0.17 -0.53,-0.4 -0.26,-0.28 0.22,-0.34 -0.15,-0.38 -0.29,-0.06 -0.29,-0.1 0.34,-0.17 0.43,-0.06 0.47,-0.08 0.33,0.09 0.18,0.28 0.01,0.2 0.13,0.32 0.1,0.3 -0.01,0.51"
            />
            <path
              id="path2454"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2757.74,1089.85 -0.37,-0.05 0.17,-0.18 z"
            />
            <path
              id="path2456"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2764.89,1090.14 0.43,-0.05 0.49,0.07 -0.1,0.15 -0.38,0.02 0.1,0.22 -0.04,0.47 -0.26,0.26 -0.23,0.02 -0.18,-0.14 -0.14,-0.06 -0.21,0.23 -0.24,0.04 -0.19,-0.22 -0.12,-0.29 -0.25,0.2 -0.14,0.4 -0.48,0.21 -0.46,-0.22 0.27,-0.38 0.45,-0.18 0.2,-0.16 0.14,-0.13 0.2,-0.21 -0.32,-0.18 -0.22,-0.13 -0.31,-0.17 -0.34,-0.01 -0.28,0.39 0.07,0.15 -0.07,0.29 -0.13,0.18 0.05,0.28 0.02,0.37 -0.27,-0.01 -0.03,-0.4 0.08,-0.37 -0.15,-0.22 -0.19,0.17 h -0.46 l -0.31,-0.19 -0.26,-0.21 -0.29,-0.29 0.13,-0.26 -0.15,-0.26 -0.11,-0.29 0.19,-0.05 0.23,-0.22 0.28,-0.06 0.29,0.08 0.29,0.12 0.45,0.09 0.34,0.18 0.33,0.16 0.43,0.07 0.33,0.08 0.24,0.18 0.27,0.26 0.1,-0.13 0.26,-0.31 0.28,0.16 0.48,-0.02 0.07,0.1 -0.35,0.12 0.17,0.1"
            />
            <path
              id="path2458"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.6,1090.45 0.87,0.17 0.56,0.21 -0.05,0.36 0.05,0.11 0.23,0.11 0.11,0.18 0.32,-0.15 0.35,0.07 0.23,0.08 -0.13,0.24 -0.31,-0.02 -0.25,-0.16 -0.06,0.32 -0.22,0.24 -0.32,-0.14 0.19,-0.08 0.21,-0.19 -0.25,-0.11 -0.2,-0.2 -0.36,-0.21 -0.22,-0.35 -0.5,-0.27 -0.46,0.25 -0.18,0.11 -0.19,0.02 -0.26,-0.06 -0.38,0.01 -0.32,-0.33 -0.25,0.09 -0.11,0.04 -0.1,0.25 -0.22,0.09 -0.32,0.06 -0.33,0.11 -0.4,0.05 -0.22,0.15 -0.19,-0.05 -0.15,0.07 -0.2,-0.01 -0.34,-0.07 -0.22,-0.28 -0.17,0.02 -0.16,-0.18 -0.2,-0.07 -0.1,-0.25 -0.13,-0.14 -0.17,-0.04 -0.14,-0.11 -0.13,-0.18 0.05,-0.21 0.16,0.25 0.19,-0.02 0.33,-0.21 0.37,0.02 0.28,-0.09 0.42,0.16 0.38,-0.03 0.3,-0.2 0.21,0.13 0.18,-0.11 0.34,-0.17 0.41,0.18 0.27,-0.11 0.18,0.41 0.41,-0.1 0.26,-0.1 0.29,0.01 0.37,0.19 0.39,0.24"
            />
            <path
              id="path2460"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2775.98,1091.44 0.2,0.15 0.13,0.18 0.24,0.14 -0.06,0.09 -0.09,0.12 -0.14,-0.08 -0.1,-0.17 -0.27,-0.22 -0.22,-0.1 -0.22,-0.07 -0.22,-0.15 -0.16,-0.24 0.11,0.02 0.11,-0.07 h 0.22 l 0.18,0.05 0.16,-0.04 -0.05,0.16 0.18,0.23"
            />
            <path
              id="path2462"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2774.37,1091.13 -0.11,-0.24 0.17,0.15 0.34,0.16 0.17,0.12 -0.33,0.01 -0.18,-0.03 -0.06,-0.17"
            />
            <path
              id="path2464"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.09,1091.07 0.21,0.34 0.13,0.3 0.25,0.08 -0.07,0.14 -0.13,0.18 -0.2,-0.18 -0.12,-0.16 -0.06,-0.2 -0.07,0.18 -0.1,0.08 -0.21,-0.23 0.12,-0.1 0.15,-0.17 0.1,-0.26"
            />
            <path
              id="path2466"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.72,1091.55 0.11,-0.11 0.27,0.06 0.32,0.12 0.55,0.08 0.48,0.09 0.02,0.36 -0.66,0.06 -0.55,-0.07 -0.24,-0.22 -0.21,-0.17 -0.09,-0.2"
            />
            <path
              id="path2468"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.94,1092.07 0.21,0.09 0.01,0.18 -0.22,-0.04 -0.13,-0.24 0.13,0.01"
            />
            <path
              id="path2470"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2780.39,1092.16 0.1,-0.19 0.13,0.23 0.1,0.12 -0.33,-0.16"
            />
            <path
              id="path2472"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2781.2,1093.38 -0.11,-0.27 -0.11,-0.29 0.27,0.08 0.2,0.25 0.23,0.08 -0.01,0.4 -0.25,0.11 -0.22,-0.36"
            />
            <path
              id="path2474"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2782.45,1093.08 0.18,-0.09 0.15,0.27 0.27,0.24 0.28,0.12 0.21,0.05 -0.21,0.18 -0.23,0.06 -0.17,0.19 -0.35,-0.22 -0.31,-0.17 -0.36,-0.02 -0.13,-0.29 v -0.26 l 0.28,-0.05 0.39,-0.01"
            />
            <path
              id="path2476"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2785.46,1092.28 0.2,0.17 0.38,-0.05 0.23,-0.14 0.15,0.04 0.22,-0.1 0.19,0.18 -0.17,0.11 -0.11,0.04 -0.13,0.14 -0.38,-0.06 -0.29,0.03 -0.22,-0.15 -0.21,-0.09 0.14,-0.12"
            />
            <path
              id="path2478"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2788.2,1092.52 0.19,-0.07 0.29,0.04 -0.22,0.16 -0.26,-0.13"
            />
            <path
              id="path2480"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2789.95,1093.56 -0.09,-0.11 0.18,-0.1 0.19,-0.22 0.24,0.01 0.19,0.38 -0.22,0.2 -0.29,0.06 -0.2,-0.22"
            />
            <path
              id="path2482"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2792.91,1092.56 -0.04,-0.26 0.31,0.25 0.38,0.16 0.27,0.29 -0.2,0.05 -0.15,0.19 -0.14,-0.26 -0.13,-0.19 -0.3,-0.23"
            />
            <path
              id="path2484"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2783.64,1106.44 -0.1,0.16 -0.23,0.15 -0.16,-0.16 -0.15,-0.04 -0.36,0.01 -0.16,-0.26 -0.05,0.23 -0.22,-0.02 -0.56,-0.1 -0.06,-0.51 0.22,-0.3 0.1,-0.28 0.21,0.23 0.02,-0.26 v -0.28 l 0.22,-0.04 0.07,0.41 0.29,0.16 -0.11,-0.18 v -0.54 l 0.24,-0.11 0.4,-0.04 0.49,0.12 0.52,0.32 0.18,0.33 0.02,0.26 -0.15,0.23 -0.23,0.1 -0.02,0.08 -0.07,0.3 -0.35,0.03"
            />
            <path
              id="path2486"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.96,1106.23 0.35,-0.41 0.64,-0.19 0.48,-0.4 0.54,-0.31 v 0.31 l 0.06,0.37 -0.03,0.3 -0.21,0.37 -0.25,0.44 -0.52,0.57 -0.59,0.07 -0.72,0.04 -0.64,0.39 -0.65,-0.14 -0.33,-0.3 -0.28,-0.09 -0.08,0.46 -0.21,-0.15 h -0.55 l -0.51,-0.05 -0.52,0.02 -0.39,-0.23 -0.11,-0.25 -0.16,-0.16 -0.29,-0.3 -0.02,-0.32 0.1,-0.39 -0.07,-0.38 0.13,0.33 0.27,0.34 0.02,0.42 0.24,0.3 -0.02,-0.19 0.13,-0.16 0.17,-0.2 0.28,-0.36 0.44,-0.12 0.19,0.28 0.19,0.16 0.25,0.29 0.17,-0.09 0.52,-0.35 0.72,-0.12 0.25,-0.05 -0.35,0.54 0.18,-0.02 0.92,-0.06 0.26,-0.21"
            />
            <path
              id="path2488"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2786.19,1104.84 0.21,0.27 0.26,0.14 0.18,0.16 0.19,0.14 -0.23,0.07 -0.26,-0.23 -0.35,-0.12 -0.16,-0.36 0.16,-0.07"
            />
            <path
              id="path2490"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2787.01,1105.24 -0.24,-0.04 -0.17,-0.26 0.25,0.07 0.16,0.23"
            />
            <path
              id="path2492"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2788,1105.66 h -0.37 l -0.43,-0.2 0.26,-0.02 0.36,0.02 0.18,0.2"
            />
            <path
              id="path2494"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2785.33,1106.23 -0.33,-0.17 0.21,-0.04 z"
            />
            <path
              id="path2496"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2785.46,1106.41 0.25,0.02 0.04,0.19 z"
            />
            <path
              id="path2498"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2786.21,1107.03 -0.07,0.25 -0.28,-0.14 v -0.18 l 0.35,0.07"
            />
            <path
              id="path2500"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.5,1110.53 -0.2,-0.11 0.26,-0.21 0.61,-0.19 0.5,0.05 0.24,0.16 -0.03,0.14 0.05,0.13 0.04,0.32 -0.24,0.2 -0.62,-0.14 -0.61,-0.35"
            />
            <path
              id="path2502"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.78,1111.13 0.29,-0.61 0.48,0.14 0.59,-0.01 0.56,0.07 -0.4,0.47 -0.55,0.37 -0.49,-0.02 -0.36,-0.2 -0.12,-0.21"
            />
            <path
              id="path2504"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2785.1,1111.93 0.36,-0.01 -0.13,0.19 -0.39,-0.15 0.16,-0.03"
            />
            <path
              id="path2506"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.95,1119.11 -0.08,-0.25 -0.07,-0.49 0.2,-0.04 0.04,-0.24 0.03,-0.23 0.26,-0.09 -0.07,-0.24 -0.1,-0.46 0.25,-0.62 0.17,-0.09 -0.02,-0.38 -0.05,-0.53 -0.03,-0.66 0.34,-0.3 0.29,-0.51 0.5,-0.65 0.26,-0.24 0.44,-0.15 -0.24,0.31 -0.52,0.65 -0.41,0.78 -0.14,0.64 0.07,0.42 -0.08,0.48 0.04,0.55 0.25,0.09 0.21,-0.02 0.23,-0.13 0.6,-0.06 0.33,-0.2 0.55,-0.07 -0.16,0.14 -0.22,0.11 -0.02,0.51 -0.37,0.06 -0.42,0.21 -0.32,0.22 0.15,0.27 0.23,0.2 0.36,0.14 0.3,0.22 0.16,0.4 0.08,0.46 v 0.66 h -0.34 l -0.41,-0.22 -0.47,-0.29 -0.09,-0.4 0.09,-0.29 -0.18,-0.12 -0.36,-0.12 -0.14,-0.67 -0.39,-0.19 -0.26,0.34 -0.06,0.31 0.28,0.1 0.18,0.16 0.26,0.35 0.22,0.47 -0.03,0.64 -0.27,0.47 -0.1,0.33 0.43,0.62 -0.17,0.17 -0.32,-0.36 -0.36,-0.47 -0.31,-0.53 -0.07,-0.21 0.03,-0.29 -0.18,-0.67"
            />
            <path
              id="path2508"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2787.07,1122.55 -0.2,-0.34 -0.13,-0.44 0.11,-0.19 v -0.36 l 0.39,0.07 0.37,0.19 0.12,0.35 0.07,0.27 0.07,0.33 -0.07,0.29 -0.11,0.17 -0.32,-0.07 -0.3,-0.27"
            />
            <path
              id="path2510"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.64,1117.48 0.06,-0.14 0.05,-0.2 0.2,0.06 -0.15,0.31 0.04,0.16 -0.14,0.17 -0.13,0.02 -0.05,-0.23 0.12,-0.15"
            />
            <path
              id="path2512"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.89,1116.44 h -0.19 l 0.01,-0.21 0.18,0.04 v 0.17"
            />
            <path
              id="path2514"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.95,1115.28 0.05,0.29 -0.15,0.19 -0.07,-0.24 0.17,-0.24"
            />
            <path
              id="path2516"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.26,1114.64 -0.09,-0.35 0.09,-0.46 0.16,-0.02 0.22,0.05 0.04,-0.2 0.17,-0.15 0.1,0.07 -0.01,-0.23 0.01,-0.17 0.26,0.05 h 0.2 l 0.07,-0.17 0.23,-0.14 0.28,0.27 -0.1,0.27 -0.31,-0.02 -0.13,0.13 -0.15,0.11 0.11,0.23 0.12,0.16 -0.14,0.18 -0.15,0.2 -0.17,0.02 -0.07,-0.28 -0.15,0.06 -0.07,0.24 -0.08,-0.11 -0.08,-0.22 -0.1,0.21 -0.07,0.21 -0.19,0.06"
            />
            <path
              id="path2518"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.68,1113.14 -0.11,0.25 -0.13,0.2 -0.11,-0.19 -0.05,-0.17 0.12,-0.21 0.28,0.12"
            />
            <path
              id="path2520"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2789.95,1115.17 -0.43,0.51 -0.18,0.06 0.41,-0.47 0.2,-0.1"
            />
            <path
              id="path2522"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.6,1114.64 -0.01,-0.23 0.19,0.13 z"
            />
            <path
              id="path2524"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2791.67,1115.58 -0.1,-0.23 0.03,-0.24 0.25,-0.04 h 0.4 l 0.03,-0.21 v -0.3 l -0.18,-0.03 0.13,-0.12 0.2,-0.07 0.18,0.01 0.18,0.24 0.43,0.16 0.31,0.15 0.36,-0.01 0.27,0.2 v 0.35 l -0.2,0.17 -0.39,0.24 h -0.41 l -0.5,0.03 -0.45,-0.18 -0.24,-0.1 -0.3,-0.02"
            />
            <path
              id="path2526"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2792.79,1113.63 -0.4,-0.05 h -0.32 l -0.05,-0.3 0.32,-0.01 0.33,0.07 0.33,0.12 0.14,0.14 -0.35,0.03"
            />
            <path
              id="path2528"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.76,1112.24 0.14,0.24 -0.31,0.02 -0.33,-0.08 0.5,-0.18"
            />
            <path
              id="path2530"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2789.3,1112.38 0.27,-0.11 0.06,0.09 z"
            />
            <path
              id="path2532"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.66,1111.33 0.09,0.19 -0.13,0.1 -0.12,-0.21 0.16,-0.08"
            />
            <path
              id="path2534"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.37,1115.04 0.15,-0.02 v 0.14 z"
            />
            <path
              id="path2536"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.21,1114.89 -0.2,-0.19 -0.11,-0.17 h 0.11 l 0.2,0.21 v 0.15"
            />
            <path
              id="path2538"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2801.51,1110.48 0.1,-0.25 -0.07,0.61 z"
            />
            <path
              id="path2540"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2802.6,1113.59 0.43,-0.18 -0.07,0.36 -0.24,0.05 -0.12,-0.23"
            />
            <path
              id="path2542"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2806.19,1113.7 -0.31,0.19 -0.16,0.3 -0.35,0.23 -0.17,0.29 -0.33,-0.05 -0.22,0.09 -0.35,-0.06 -0.27,-0.07 0.21,-0.23 0.29,-0.22 0.19,-0.13 0.14,0.23 0.13,-0.21 0.04,-0.58 0.25,-0.25 0.33,0.12 0.35,-0.03 0.32,0.12 -0.09,0.26"
            />
            <path
              id="path2544"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2803.92,1112.27 -0.33,0.09 h -0.39 l 0.32,-0.12 0.4,0.03"
            />
            <path
              id="path2546"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2805.12,1112.03 -1.02,-0.07 0.43,-0.19 0.78,-0.12 0.59,-0.24 0.36,-0.16 0.33,0.17 0.59,0.04 0.43,0.19 0.18,0.15 -0.78,0.03 -0.69,0.04 -0.31,0.14 -0.89,0.02"
            />
            <path
              id="path2548"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2779.34,1110.26 -0.67,0.13 -0.84,-0.08 -0.15,-0.28 0.02,-0.29 0.05,-0.19 0.34,-0.19 0.58,0.31 0.3,-0.01 0.31,0.06 0.35,0.13 0.5,0.01 0.31,-0.12 0.91,0.13 0.86,0.1 0.27,0.17 -0.81,0.01 -0.8,-0.06 -0.48,-0.04 -0.39,0.12 -0.33,0.13 -0.33,-0.04"
            />
            <path
              id="path2550"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2781.74,1108.22 -0.25,0.88 -0.02,0.54 -0.26,-0.12 0.04,-0.38 0.18,-0.44 0.31,-0.48"
            />
            <path
              id="path2552"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2774.28,1110.26 0.23,0.24 0.18,0.45 0.11,0.18 0.15,-0.29 -0.05,-0.39 -0.1,-0.22 h 0.23 l 0.1,0.22 0.08,0.31 0.19,-0.12 0.23,-0.05 0.04,-0.22 0.22,-0.35 0.05,0.28 -0.09,0.27 -0.04,0.19 -0.06,0.18 0.1,0.33 -0.24,0.11 -0.22,-0.02 -0.18,-0.19 -0.11,-0.15 -0.06,0.3 -0.19,0.16 -0.29,-0.14 -0.34,-0.17 -0.14,-0.42 0.18,-0.12 0.02,-0.37"
            />
            <path
              id="path2554"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.51,1113.05 0.21,0.16 0.3,-0.02 0.23,0.25 0.31,0.1 -0.04,0.17 -0.61,-0.13 -0.19,-0.17 -0.29,-0.43 0.08,0.07"
            />
            <path
              id="path2556"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2773.07,1113.69 0.06,0.17 -0.24,0.17 -0.33,-0.02 0.19,-0.13 0.32,-0.19"
            />
            <path
              id="path2558"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2780.37,1124.76 0.07,-0.12 0.11,-0.09 0.11,0.18 -0.03,0.23 -0.09,0.14 -0.05,0.13 -0.06,0.16 -0.1,0.13 -0.23,-0.08 0.02,-0.14 0.12,-0.07 0.1,-0.12 0.02,-0.15 0.01,-0.2"
            />
            <path
              id="path2560"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2783.23,1126.8 -0.1,-0.11 -0.06,-0.02 -0.03,-0.18 0.07,-0.2 0.02,-0.17 0.06,-0.05 0.11,-0.16 0.05,-0.13 0.11,-0.04 0.1,0.19 -0.07,0.08 -0.09,0.05 -0.09,0.07 -0.04,0.22 0.08,0.17 0.1,0.03 0.01,0.12 0.03,0.03 -0.04,0.14 0.01,0.09 0.06,0.02 0.08,0.08 v 0.08 l 0.09,0.18 0.02,0.12 -0.03,0.12 -0.03,0.06 -0.05,0.25 -0.15,0.18 -0.23,-0.04 -0.03,-0.19 -0.04,-0.16 0.02,-0.21 0.08,-0.12 0.1,-0.14 -0.02,-0.16 -0.1,-0.2"
            />
            <path
              id="path2562"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.42,1092.81 -0.23,-0.14 0.23,0.14"
            />
            <path
              id="path2564"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2784.85,1094.11 0.19,0.26 -0.24,0.12 -0.14,-0.19 0.02,-0.37 0.17,0.18"
            />
            <path
              id="path2566"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2787.46,1095.45 0.15,-0.11 0.27,0.06 -0.1,0.28 -0.32,-0.23"
            />
            <path
              id="path2568"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2793.27,1094.83 -0.32,-0.3 0.3,0.06 0.28,0.15 0.26,0.16 -0.09,0.21 -0.34,-0.12 -0.09,-0.16"
            />
            <path
              id="path2570"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2793.94,1095.19 0.22,0.13 -0.22,-0.13"
            />
            <path
              id="path2572"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2794.42,1095.85 0.12,0.14 -0.12,-0.14"
            />
            <path
              id="path2574"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2794.64,1096.5 0.1,0.3 0.19,0.38 -0.23,-0.05 -0.09,-0.34 -0.11,-0.45 0.14,0.16"
            />
            <path
              id="path2576"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.56,1092.49 0.34,0.39 -0.31,-0.11 z"
            />
            <path
              id="path2578"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2791.13,1093.77 0.11,0.29 -0.28,0.12 z"
            />
            <path
              id="path2580"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.42,1094.44 -0.27,-0.05 0.27,0.05"
            />
            <path
              id="path2582"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2796.52,1100.39 -0.2,-0.45 -0.12,-0.26 0.37,0.39 0.09,0.5 -0.14,-0.18"
            />
            <path
              id="path2584"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2793.83,1104.64 0.15,-0.24 0.37,-0.19 -0.19,0.22 -0.33,0.21"
            />
            <path
              id="path2586"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2794.3,1104.86 0.05,-0.33 -0.05,0.33"
            />
            <path
              id="path2588"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.79,1085.41 -0.28,-0.23 0.26,0.01 0.37,0.18 -0.06,0.33 -0.29,-0.29"
            />
            <path
              id="path2590"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2769.48,1094.29 0.25,-0.04 0.41,-0.13 0.17,0.06 -0.31,0.19 -0.52,-0.08"
            />
            <path
              id="path2592"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2769.3,1094.91 -0.19,0.26 -0.18,-0.33 0.32,-0.16 0.05,0.23"
            />
            <path
              id="path2594"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2775.75,1100.17 0.19,-0.24 0.02,0.26 z"
            />
            <path
              id="path2596"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2773.13,1101.69 -0.08,0.29 -0.15,-0.41 z"
            />
            <path
              id="path2598"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2770.74,1103.22 0.24,-0.24 -0.14,0.23 z"
            />
            <path
              id="path2600"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2774.67,1109.61 0.13,-0.09 -0.06,0.26 z"
            />
            <path
              id="path2602"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2775.51,1110.41 -0.22,-0.3 -0.19,-0.34 0.27,0.15 0.14,0.49"
            />
            <path
              id="path2604"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.64,1108.91 -0.06,0.4 -0.21,0.25 0.03,-0.35 0.24,-0.3"
            />
            <path
              id="path2606"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2787.07,1112.34 0.15,-0.1 -0.02,0.27 -0.02,0.17 -0.22,0.12 0.08,-0.25 0.03,-0.21"
            />
            <path
              id="path2608"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.41,1114.25 -0.19,-0.23 0.19,-0.04 z"
            />
            <path
              id="path2610"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2779.42,1120.29 -0.13,-0.18 0.13,-0.09 0.05,-0.2 0.16,-0.07 v 0.13 l -0.14,0.28 -0.07,0.13"
            />
            <path
              id="path2612"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2780.03,1122.86 0.02,-0.27 0.14,-0.02 0.05,0.2 -0.02,0.25 -0.19,-0.16"
            />
            <path
              id="path2614"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2780.1,1121.68 -0.03,-0.3 0.15,0.14 z"
            />
            <path
              id="path2616"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2686.34,1130.01 -0.13,0.62 -0.2,0.07 -0.05,0.31 -0.25,0.49 -0.1,0.13 -0.15,0.21 -0.07,0.32 -0.08,0.2 -0.48,0.68 -0.46,0.51 -0.23,0.23 -0.12,0.15 -0.52,-0.15 0.06,-0.24 0.26,-0.18 0.06,-0.2 0.09,-0.21 -0.09,-0.15 -0.13,-0.07 0.13,-0.11 v -0.17 l -0.06,-0.39 -0.15,-0.3 -0.15,-0.17 -0.01,-0.4 -0.05,-0.53 -0.12,-0.33 -0.01,-0.42 -0.04,-0.27 -0.01,-0.3 -0.15,0.03 -0.02,0.45 -0.06,-0.05 0.08,-0.62 0.11,-0.65 0.04,-0.87 0.1,-0.68 0.03,-0.84 0.19,-0.84 0.37,-0.95 0.89,-0.12 0.72,0.38 0.74,0.54 0.48,0.54 c 0.17,0.27 0.38,0.35 0.41,1.43 l -0.34,1.82 -0.53,1.1"
            />
            <path
              id="path2618"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2683.51,1133.45 -0.1,0.15 -0.08,0.09 v -0.26 l 0.24,-0.11 -0.06,0.13"
            />
            <path
              id="path2620"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2683.17,1133.51 0.02,-0.27 0.22,-0.06 -0.17,0.11 -0.07,0.22"
            />
            <path
              id="path2622"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2683.13,1133.1 -0.09,0.17 -0.08,-0.06 0.12,-0.21 0.05,0.1"
            />
            <path
              id="path2624"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2683.36,1132 -0.28,0.06 0.11,-0.16 0.24,-0.17 0.03,0.06 -0.1,0.21"
            />
            <path
              id="path2626"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2709.42,1145.2 0.01,0.19 0.19,-0.11 -0.04,0.25 -0.04,0.27 -0.11,0.15 -0.14,-0.23 -0.11,-0.13 -0.09,-0.36 -0.1,-0.38 v -0.23 -0.21 -0.26 l -0.07,-0.23 -0.04,0.28 -0.01,0.11 -0.12,0.17 -0.05,-0.4 0.17,-0.26 0.01,-0.18 -0.03,-0.29 -0.05,-0.35 -0.07,-0.64 -0.06,-0.45 -0.19,-0.39 0.05,-0.29 v -0.17 l 0.03,-0.1 0.1,-0.19 0.04,-0.23 -0.03,-0.18 -0.05,-0.25 0.16,-0.06 -0.03,0.12 0.12,0.31 0.05,0.29 -0.04,0.36 0.15,0.35 -0.04,0.16 -0.07,0.13 0.09,0.19 0.07,0.14 0.08,0.2 0.02,0.27 0.07,0.21 0.08,0.07 -0.05,0.17 0.07,0.29 v 0.42 l -0.1,0.36 -0.15,0.09 0.09,0.21 0.09,0.14 0.09,-0.06 0.12,0.15 0.04,0.34 -0.11,0.24"
            />
            <path
              id="path2628"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2708.3,1138.79 -0.17,-0.22 0.02,-0.41 0.18,-0.33 0.13,0.37 0.06,0.36 -0.07,0.32 -0.15,-0.09"
            />
            <path
              id="path2630"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2708.99,1134.64 -0.16,-0.19 0.09,-0.18 0.18,0.26 -0.11,0.11"
            />
            <path
              id="path2632"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2709.66,1132.42 -0.12,-0.19 0.17,-0.34 0.16,0.09 -0.12,0.15 -0.09,0.29"
            />
            <path
              id="path2634"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2710.3,1131.32 -0.15,0.19 -0.08,-0.15 0.23,-0.29 v 0.25"
            />
            <path
              id="path2636"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2710.39,1132.02 -0.06,-0.28 0.27,-0.22 -0.08,0.31 -0.13,0.19"
            />
            <path
              id="path2638"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2711.23,1129.38 -0.25,0.11 -0.23,-0.17 0.07,-0.34 0.19,-0.34 0.16,-0.3 0.06,0.54 v 0.5"
            />
            <path
              id="path2640"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2710.89,1129.76 0.03,0.31 -0.23,-0.25 z"
            />
            <path
              id="path2642"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2713.71,1125.88 -0.16,-0.04 0.07,-0.27 0.17,0.14 -0.08,0.17"
            />
            <path
              id="path2644"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2714.1,1126.02 0.17,0.25 -0.21,0.01 -0.17,0.02 0.21,-0.28"
            />
            <path
              id="path2646"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2716.32,1117.68 -0.25,0.19 -0.17,0.27 -0.21,0.13 -0.25,0.18 -0.19,0.12 -0.27,-0.27 -0.07,-0.3 0.34,-0.25 0.44,-0.04 0.36,-0.35 0.2,-0.15 0.21,-0.08 0.06,0.37 -0.2,0.18"
            />
            <path
              id="path2648"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2716.83,1116.79 0.02,-0.37 0.12,0.1 z"
            />
            <path
              id="path2650"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2717.74,1116.55 0.15,-0.12 v 0.23 z"
            />
            <path
              id="path2652"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2718.22,1116.61 0.14,0.16 -0.23,0.23 -0.35,-0.02 0.26,-0.15 0.18,-0.22"
            />
            <path
              id="path2654"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2719.13,1114.27 -0.48,0.72 h -0.41 l -0.33,-0.05 -0.29,-0.05 0.34,-0.2 0.17,-0.27 0.25,-0.48 0.16,-0.28 0.28,-0.19 0.13,-0.41 0.25,-0.39 0.23,0.39 0.09,0.67 -0.39,0.54"
            />
            <path
              id="path2656"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2721.06,1111.54 0.45,0.11 -0.19,0.16 -0.55,-0.17 0.29,-0.1"
            />
            <path
              id="path2658"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2720.66,1111.02 -0.11,0.27 -0.33,-0.12 0.03,-0.19 0.22,-0.07 0.09,-0.34 -0.09,-0.34 v -0.19 l 0.05,-0.33 0.16,0.39 0.09,0.27 0.09,0.34 -0.2,0.31"
            />
            <path
              id="path2660"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2722.2,1107.42 -0.2,0.52 -0.18,0.32 -0.16,0.31 -0.04,0.4 -0.26,-0.08 -0.35,-0.09 v -0.36 l -0.08,-0.46 0.36,-0.56 0.27,-0.46 0.35,-0.28 0.3,-0.03 0.16,0.5 -0.17,0.27"
            />
            <path
              id="path2662"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2723.25,1105.78 -0.18,0.27 -0.2,0.2 0.01,-0.35 0.17,-0.4 0.31,-0.28 0.13,0.17 -0.24,0.39"
            />
            <path
              id="path2664"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2724.4,1104.27 -0.14,0.31 -0.45,0.32 v -0.35 l 0.05,-0.36 0.16,-0.17 0.27,-0.14 0.05,-0.34 0.19,-0.36 0.19,-0.4 -0.03,0.38 0.13,0.32 -0.18,0.4 -0.24,0.39"
            />
            <path
              id="path2666"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2728.79,1097.64 -0.62,0.07 0.14,-0.21 0.45,-0.34 0.03,0.48"
            />
            <path
              id="path2668"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2733.33,1111.05 -0.35,-0.1 -0.32,0.27 0.14,-0.36 0.18,-0.49 0.45,0.09 -0.1,0.59"
            />
            <path
              id="path2670"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2733.82,1111.54 0.46,-0.18 -0.12,0.21 -0.24,0.27 -0.31,0.11 -0.18,0.39 -0.73,0.2 0.28,-0.12 0.3,-0.28 0.02,-0.45 0.15,-0.24 0.37,0.09"
            />
            <path
              id="path2672"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2733.43,1112.71 -0.41,0.54 0.21,-0.54 0.62,-0.51 -0.42,0.51"
            />
            <path
              id="path2674"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2739.8,1104.7 -0.16,0.35 -0.16,-0.32 z"
            />
            <path
              id="path2676"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2742.72,1108.22 0.3,0.22 -0.09,0.32 z"
            />
            <path
              id="path2678"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2743.3,1109.5 0.12,-0.35 0.04,0.15 0.2,0.17 -0.12,0.23 -0.24,-0.2"
            />
            <path
              id="path2680"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2756.9,1128.16 -0.18,0.02 -0.03,-0.28 z"
            />
            <path
              id="path2682"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2762.19,1124.99 0.3,0.05 -0.25,0.21 z"
            />
            <path
              id="path2684"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2762.52,1123.69 0.19,-0.23 -0.19,0.23"
            />
            <path
              id="path2686"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2760.97,1133.73 0.05,-0.25 0.26,0.12 0.17,0.27 -0.23,0.11 -0.25,-0.25"
            />
            <path
              id="path2688"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2760.55,1133.41 0.14,0.2 0.16,0.27 -0.2,0.01 -0.11,-0.17 0.01,-0.31"
            />
            <path
              id="path2690"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2760.69,1135.7 0.02,-0.29 0.2,-0.09 0.05,0.38 -0.12,0.35 -0.1,-0.16 -0.05,-0.19"
            />
            <path
              id="path2692"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2761.59,1136.66 -0.14,-0.01 -0.01,-0.33 0.16,0.02 -0.01,0.32"
            />
            <path
              id="path2694"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2762.28,1138.48 -0.28,-0.27 -0.11,-0.26 -0.13,-0.19 -0.17,-0.23 -0.09,-0.11 -0.1,-0.26 -0.08,-0.45 0.18,0.24 0.2,0.21 0.3,0.02 0.11,0.33 0.24,0.17 0.38,0.24 0.32,0.36 0.21,0.17 0.13,0.34 0.13,0.31 0.23,0.11 0.42,0.16 0.2,0.38 0.16,0.32 0.17,0.26 0.19,0.4 0.02,0.36 0.16,0.3 0.22,0.15 0.42,0.09 0.18,0.06 0.12,0.4 0.07,0.29 0.3,0.26 0.39,0.13 0.17,0.24 0.05,0.29 -0.04,0.19 -0.07,0.1 -0.05,0.1 -0.02,0.31 -0.11,0.05 -0.09,0.18 0.01,0.26 0.2,0.1 -0.12,0.09 -0.02,0.09 0.15,0.09 -0.1,0.07 -0.03,0.2 v 0.17 l -0.09,0.21 -0.09,0.06 -0.04,-0.21 -0.1,-0.27 v -0.44 l -0.11,-0.11 -0.16,-0.05 0.11,-0.18 0.1,-0.16 0.12,-0.15 v -0.21 l -0.17,0.16 -0.11,0.09 -0.13,0.19 -0.02,-0.21 0.1,-0.21 0.12,-0.24 -0.03,-0.25 -0.11,-0.26 -0.12,-0.22 -0.18,-0.11 -0.23,0.04 -0.15,-0.04 0.02,-0.14 0.04,-0.25 -0.15,-0.08 -0.13,-0.15 -0.2,-0.08 -0.09,-0.24 -0.12,-0.2 -0.13,-0.18 -0.17,-0.32 -0.28,-0.46 -0.24,-0.25 -0.17,-0.23 -0.3,-0.45 -0.26,-0.34 -0.18,-0.03 -0.32,-0.26 -0.1,-0.23 -0.23,-0.13 -0.12,-0.23"
            />
            <path
              id="path2696"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.25,1142.98 0.2,0.13 0.19,0.25 -0.02,0.22 -0.21,0.03 -0.18,-0.09 -0.1,-0.16 -0.02,-0.18 0.14,-0.2"
            />
            <path
              id="path2698"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.89,1146.79 -0.07,0.16 -0.12,0.16 -0.13,0.17 -0.2,0.06 -0.02,-0.18 0.04,-0.17 0.06,-0.2 0.05,-0.15 0.14,-0.19 0.25,0.34"
            />
            <path
              id="path2700"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.38,1148.22 -0.03,-0.32 0.06,-0.18 0.13,-0.11 0.1,-0.2 0.13,-0.03 0.18,-0.04 0.12,-0.11 0.12,-0.18 0.09,0.3 0.18,0.19 -0.1,0.25 -0.2,0.12 -0.16,-0.12 -0.17,0.21 -0.25,0.15 -0.2,0.07"
            />
            <path
              id="path2702"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.16,1150.89 -0.18,0.1 -0.09,0.15 -0.21,0.2 -0.16,0.17 -0.25,0.05 -0.25,-0.03 -0.13,0.14 -0.1,0.06 -0.08,-0.01 -0.37,-0.08 h -0.45 l -0.26,0.04 -0.17,-0.01 -0.12,-0.23 0.04,-0.12 0.11,-0.05 0.14,0.12 0.16,-0.12 v -0.29 l 0.15,-0.15 0.22,-0.05 0.14,-0.3 0.1,-0.3 0.08,-0.49 0.17,-0.13 0.08,-0.22 v -0.27 l 0.2,-0.33 0.13,-0.08 0.04,-0.2 -0.1,-0.22 0.14,-0.2 0.07,0.18 0.01,0.15 0.18,-0.03 0.1,0.03 0.2,0.15 0.16,0.16 0.06,0.2 0.06,0.19 0.17,0.16 0.03,0.13 0.07,0.26 -0.15,0.26 v 0.35 l -0.02,0.35 0.07,0.09 0.01,0.22"
            />
            <path
              id="path2704"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.17,1147.57 -0.16,-0.09 -0.02,-0.16 -0.07,-0.19 0.51,-0.16 -0.04,-0.47 -0.04,-0.43 -0.03,-0.85 -0.06,-0.36 -0.13,-0.34 0.05,-0.33 v -0.42 l -0.12,-0.19 0.11,-0.13 0.22,0.32 0.33,0.32 0.45,0.16 0.44,0.17 0.03,0.15 0.15,0.06 0.12,0.03 0.08,0.11 -0.06,-0.01 0.05,0.21 v 0.24 l 0.15,0.06 0.16,-0.02 0.09,0.11 0.15,0.07 0.16,0.31 0.1,-0.19 0.1,0.06 0.02,0.23 0.09,0.05 -0.05,0.06 0.08,0.14 -0.18,-0.01 -0.02,-0.25 -0.04,0.15 v 0.24 l 0.15,0.09 v 0.24 l 0.1,0.02 0.1,-0.06 -0.06,0.2 -0.17,0.15 -0.11,0.05 -0.03,-0.14 -0.32,-0.08 -0.12,0.09 -0.1,0.07 -0.3,0.04 -0.21,-0.29 -0.21,0.12 -0.26,0.28 -0.28,0.3 -0.45,0.08 -0.35,0.19"
            />
            <path
              id="path2706"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2773.13,1141.64 0.22,-0.3 0.22,-0.35 0.45,-0.23 0.24,-0.17 0.12,-0.36 0.12,-0.37 0.29,0.02 0.37,0.32 0.08,0.63 -0.26,0.28 -0.15,0.42 0.02,0.44 0.18,0.6 0.19,0.47 0.11,0.62 0.22,0.26 0.16,0.47 0.13,0.42 -0.23,0.34 -0.28,0.05 -0.25,0.1 -0.28,-0.15 -0.19,-0.11 -0.14,-0.33 -0.1,-0.43 -0.18,-0.27 v -0.34 l 0.03,-0.27 v -0.36 l 0.04,-0.31 -0.23,-0.12 -0.12,-0.2 -0.25,-0.04 -0.33,-0.03 -0.08,-0.16 -0.12,-0.54"
            />
            <path
              id="path2708"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.72,1145.75 -0.14,-0.75 -0.3,-0.61 -0.19,-0.59 -0.29,-0.62 -0.29,-0.54 -0.09,-0.37 -0.04,-0.35 -0.07,-0.41 -0.02,-0.29 0.11,-0.19 0.21,0.38 0.14,0.52 0.23,0.49 0.12,0.56 0.29,0.38 0.27,0.23 0.18,-0.17 0.09,0.31 -0.03,1.13 0.07,0.59 -0.02,0.38 0.06,0.49 -0.29,-0.57"
            />
            <path
              id="path2710"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.57,1142.42 -0.17,-0.36 0.12,-0.14 -0.08,-0.28 -0.11,-0.11 0.16,-0.07 0.12,0.09 0.19,0.06 0.19,-0.03 0.2,0.06 0.17,0.03 0.34,0.12 0.2,0.23 0.23,0.06 0.11,0.17 -0.05,0.36 v 0.26 l -0.03,0.22 -0.24,0.01 -0.27,0.16 -0.44,-0.26 -0.2,-0.31 -0.44,-0.27"
            />
            <path
              id="path2712"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776,1140.54 -0.17,-0.11 -0.17,-0.09 0.09,-0.09 0.28,-0.08 0.06,0.14 -0.09,0.23"
            />
            <path
              id="path2714"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.83,1149.95 -0.27,-0.02 -0.02,-0.18 0.11,-0.27 0.05,-0.27 0.09,-0.26 0.26,-0.32 0.37,-0.1 0.11,-0.23 0.28,-0.26 0.18,-0.23 0.25,0.03 v -0.13 l -0.07,-0.15 -0.03,-0.28 -0.1,-0.08 -0.23,-0.1 0.09,-0.14 0.11,-0.09 -0.2,-0.12 -0.18,-0.2 -0.16,-0.04 -0.2,-0.03 -0.14,0.2 -0.11,0.04 -0.1,-0.08 -0.06,0.25 -0.18,0.18 -0.12,-0.09 0.07,-0.33 0.14,-0.33 0.04,-0.37 0.02,-0.32 0.18,-0.38 0.12,0.41 0.37,-0.14 0.21,-0.4 0.01,-0.5 -0.05,-0.26 0.04,-0.42 v -0.33 l 0.05,-0.3 0.21,-0.1 0.27,-0.25 -0.01,0.38 -0.04,0.61 0.1,0.14 0.05,-0.32 0.15,-0.3 0.04,0.19 0.09,0.08 0.23,0.03 -0.07,0.29 -0.14,0.17 -0.02,0.26 -0.2,0.44 -0.19,0.16 0.05,0.25 v 0.4 l -0.04,0.45 v 0.27 l 0.29,0.09 0.11,-0.19 0.05,-0.25 0.17,0.04 0.19,-0.06 0.38,0.03 0.23,0.05 0.17,0.17 -0.21,0.07 -0.14,0.14 0.21,0.16 -0.07,0.11 -0.19,0.22 -0.07,0.23 -0.05,0.34 -0.02,0.25 v 0.28 l -0.01,0.38 0.06,0.22 -0.08,0.16 0.08,0.17 -0.03,0.21 -0.28,0.06 -0.08,0.27 -0.12,0.27 -0.16,0.2 -0.3,0.12 -0.31,-0.13 -0.39,-0.15 -0.48,-0.01 -0.36,0.04"
            />
            <path
              id="path2716"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2779.74,1142.88 0.16,-0.15 -0.05,0.26 -0.13,0.24 -0.19,0.06 v -0.15 l 0.21,-0.26"
            />
            <path
              id="path2718"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2780.79,1144.2 -0.13,0.09 -0.09,-0.21 -0.08,-0.33 -0.1,-0.32 0.12,-0.21 0.12,-0.24 0.04,-0.3 0.16,-0.15 0.03,0.35 -0.07,0.4 v 0.4 0.52"
            />
            <path
              id="path2720"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2781.58,1142.64 0.16,-0.21 0.17,0.2 -0.1,0.24 -0.07,0.17 -0.01,0.17 -0.14,-0.03 -0.1,-0.23 -0.07,-0.17 0.16,-0.14"
            />
            <path
              id="path2722"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2781.35,1142.11 0.07,-0.22 0.07,0.24 -0.13,0.19 -0.01,-0.21"
            />
            <path
              id="path2724"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2780.96,1141.87 -0.19,0.09 -0.14,0.2 -0.14,0.21 -0.3,-0.03 -0.04,-0.2 v -0.27 l 0.07,-0.22 0.09,-0.37 0.12,-0.29 0.05,-0.4 0.03,-0.38 -0.15,-0.23 -0.26,0.05 -0.2,0.09 -0.21,0.25 -0.02,-0.3 0.02,-0.34 -0.1,-0.28 -0.22,0.21 -0.21,0.26 -0.33,0.17 -0.02,-0.44 0.02,-0.36 -0.11,-0.34 -0.1,-0.29 -0.41,0.11 -0.51,0.07 -0.14,-0.37 -0.09,-0.3 0.01,-0.34 -0.17,-0.14 -0.41,-0.03 -0.41,-0.44 -0.31,-0.11 v 0.09 l 0.31,0.24 0.09,0.51 -0.09,0.45 -0.21,0.36 -0.48,0.05 -0.23,0.09 -0.06,-0.17 -0.13,-0.12 -0.55,-0.18 -0.22,-0.28 -0.14,-0.33 0.07,-0.23 -0.07,-0.25 -0.44,-0.04 -0.42,-0.14 -0.3,-0.17 -0.38,-0.14 -0.21,-0.31 -0.11,-0.39 0.09,-0.44 -0.08,-0.15 -0.13,-0.16 -0.1,-0.28 0.04,-0.24 -0.12,-0.17 -0.17,-0.19 -0.06,-0.42 0.14,-0.24 0.38,-0.12 0.07,0.28 0.13,0.34 0.03,0.27 0.14,0.28 0.02,0.2 0.24,0.32 0.05,0.23 0.07,0.3 0.14,0.22 0.46,0.24 0.18,-0.22 -0.04,-0.52 0.04,-0.55 0.3,0.07 -0.01,0.09 -0.14,0.03 0.02,0.28 0.13,-0.09 0.15,-0.08 v 0.3 l 0.09,0.27 0.13,0.27 0.11,-0.1 0.09,-0.14 -0.09,-0.24 -0.02,-0.23 0.15,0.14 0.19,-0.12 0.32,-0.33 -0.06,0.4 0.16,0.46 -0.2,0.23 0.53,0.3 0.63,-0.32 0.42,-0.27 0.33,-0.5 -0.04,-0.55 -0.42,-0.55 0.05,-0.68 0.15,-0.24 -0.04,-0.39 -0.03,-0.38 0.25,-0.3 0.44,-0.32 0.24,-0.16 0.14,-0.05 0.22,-0.14 0.44,-0.22 0.67,-0.11 0.06,0.25 0.13,0.22 0.17,0.16 0.11,-0.39 -0.12,-0.27 -0.02,-0.3 0.16,-0.35 0.3,-0.08 0.09,0.33 0.32,0.49 0.25,0.97 -0.16,0.39 -0.17,0.4 -0.33,0.21 -0.12,0.51 0.12,0.24 0.12,0.24 0.1,0.22 0.19,0.14 0.23,0.05 0.04,-0.26 -0.11,-0.14 0.18,-0.09 0.12,0.21 0.02,0.35 -0.15,0.2 -0.19,0.04 0.04,0.21 0.21,0.29 0.19,-0.03 0.05,-0.3 0.06,-0.34 0.17,-0.15 v -0.34 l 0.19,-0.13 0.09,-0.2 0.01,-0.32 0.03,-0.51 0.2,-0.52 0.03,0.28 0.02,0.31 0.05,0.34 0.04,0.35 -0.22,0.26 0.19,0.12 0.1,-0.14 0.18,-0.18 0.01,0.23 -0.07,0.1 -0.05,0.08 0.1,0.1 0.19,0.07 0.07,0.23 0.1,0.2 v 0.08 l 0.16,0.17 0.01,0.24 -0.07,0.16 0.15,0.26 v 0.18 l -0.03,0.22 -0.05,0.28 -0.27,0.15 -0.19,0.18 -0.05,0.28 0.17,0.12 0.03,0.24 0.02,0.35 -0.12,0.19 -0.17,-0.12 0.04,0.16 0.03,0.2 0.07,0.27 -0.05,0.26 -0.19,0.06 -0.26,-0.14 -0.17,0.13 0.07,0.23 0.16,0.16 0.24,0.16 0.06,0.22 -0.1,0.42 -0.23,0.29 -0.05,0.21 0.02,0.25 -0.05,0.15 -0.28,-0.21 -0.16,0.17 -0.14,0.29 -0.15,0.28 -0.24,0.12"
            />
            <path
              id="path2726"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.88,1132.81 0.11,-0.24 0.37,-0.27 0.3,0.34 0.21,0.28 -0.02,0.13 -0.31,0.04 -0.22,0.17 -0.24,-0.33 -0.29,0.02 0.09,-0.14"
            />
            <path
              id="path2728"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2770.88,1131.32 -0.3,-0.23 -0.24,0.07 -0.32,0.09 -0.32,-0.18 -0.02,-0.32 0.26,-0.02 0.19,0.05 0.13,0.07 0.19,0.02 -0.07,-0.22 -0.12,-0.25 0.26,0.18 0.18,0.21 0.26,0.21 0.21,0.18 -0.29,0.14"
            />
            <path
              id="path2730"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.02,1128.2 0.22,0.02 0.36,0.17 0.2,0.16 0.15,0.06 0.19,-0.2 0.22,0.26 0.12,0.21 -0.24,0.12 -0.17,0.1 -0.37,-0.33 -0.32,-0.22 -0.36,-0.35"
            />
            <path
              id="path2732"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.13,1127.8 0.04,-0.39 0.13,0.02 -0.03,0.36 -0.14,0.01"
            />
            <path
              id="path2734"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2766.22,1127.04 0.24,-0.02 0.15,0.33 -0.13,0.29 h -0.25 l 0.15,-0.11 0.1,-0.19 -0.26,-0.3"
            />
            <path
              id="path2736"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2769.29,1129.53 0.12,0.07 0.19,0.04 0.05,0.22 -0.36,-0.33"
            />
            <path
              id="path2738"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2769.7,1130.32 -0.15,-0.11 -0.07,-0.08 0.19,0.04 0.03,0.15"
            />
            <path
              id="path2740"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2778.6,1140.32 v 0.37 l -0.21,0.08 -0.01,-0.24 0.22,-0.21"
            />
            <path
              id="path2742"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.72,1144.45 0.39,0.14 -0.23,0.03 -0.22,0.06 -0.13,-0.27 0.19,0.04"
            />
            <path
              id="path2744"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2773.84,1143.94 0.05,0.45 -0.19,-0.05 -0.21,-0.23 -0.09,-0.37 0.13,-0.15 0.31,0.35"
            />
            <path
              id="path2746"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2775.66,1149.48 -0.32,0.15 -0.24,0.06 0.02,-0.32 v -0.25 l -0.09,-0.26 0.13,-0.23 -0.18,-0.21 -0.08,-0.34 -0.02,-0.47 0.19,0.36 0.3,0.44 0.19,0.27 0.4,-0.16 0.26,-0.37 0.38,-0.23 0.33,-0.35 0.08,0.28 -0.21,0.74 -0.22,0.24 -0.34,0.01 -0.17,0.31 -0.41,0.33"
            />
            <path
              id="path2748"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.72,1147.28 0.2,-0.2 0.23,-0.11 0.2,0.19 -0.19,0.3 -0.2,0.09 -0.3,-0.07 0.06,-0.2"
            />
            <path
              id="path2750"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.4,1149.07 -0.05,0.48 -0.18,0.34 -0.21,0.03 0.3,-0.54 0.14,-0.31"
            />
            <path
              id="path2752"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2773.3,1149.02 0.17,-0.09 0.27,-0.17 0.07,0.4 -0.25,0.21 -0.31,-0.14 0.05,-0.21"
            />
            <path
              id="path2754"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2775.24,1150.54 -0.3,0.18 -0.33,0.41 -0.23,0.04 0.07,-0.3 0.26,-0.21 0.36,-0.2 0.22,-0.23 0.16,-0.16 -0.21,0.47"
            />
            <path
              id="path2756"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.22,1148.56 -0.04,-0.27 0.07,-0.27 0.09,0.43 0.05,0.38 0.15,0.51 -0.02,0.37 -0.25,-0.16 0.04,-0.3 -0.17,-0.34 0.08,-0.35"
            />
            <path
              id="path2758"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.08,1152.13 -0.26,-0.42 0.09,-0.33 0.25,-0.24 0.16,0.07 0.18,0.29 -0.02,0.47 -0.4,0.16"
            />
            <path
              id="path2760"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.6,1150.84 0.12,0.11 h 0.12 l 0.15,-0.02 -0.09,-0.21 -0.15,-0.05 h -0.23 z m -9.12,8.66 -0.18,-0.21 -0.15,-0.33 0.05,-0.39 v -0.22 l 0.15,-0.05 0.06,-0.25 v -0.26 -0.19 l 0.08,-0.17 v -0.22 l 0.06,-0.17 -0.06,-0.27 0.16,-0.29 0.05,-0.18 0.01,-0.25 0.04,-0.27 0.03,-0.32 0.07,-0.21 0.12,-0.16 0.1,-0.04 0.05,0.22 0.11,0.07 0.02,-0.25 0.03,-0.21 0.15,-0.09 0.08,-0.2 0.08,-0.33 0.22,-0.03 0.15,0.06 0.04,0.35 -0.06,0.25 -0.04,0.13 v 0.17 l 0.06,0.17 0.28,-0.24 0.36,0.06 0.28,-0.27 -0.11,-0.52 -0.25,-0.26 -0.27,-0.3 -0.2,-0.51 0.01,-0.5 0.05,-0.4 0.13,0.19 0.13,0.26 0.3,-0.03 0.1,-0.11 -0.06,-0.37 -0.09,-0.3 0.13,0.21 0.16,0.21 0.15,-0.3 0.16,-0.05 0.25,0.07 h 0.23 l 0.18,0.2 0.09,0.34 0.34,0.21 0.37,0.21 0.12,-0.11 0.26,-0.09 0.12,-0.07 0.13,-0.09 0.23,-0.08 0.08,-0.24 0.13,-0.18 0.19,-0.02 0.17,-0.1 0.12,-0.2 0.15,-0.19 0.04,-0.22 v -0.18 l 0.1,-0.1 0.29,0.02 0.03,0.32 v 0.28 l -0.08,0.12 -0.1,0.15 -0.07,0.09 -0.08,0.07 -0.13,0.23 v 0.19 l 0.04,0.18 -0.04,0.13 -0.1,0.15 0.38,0.01 0.15,-0.21 0.2,-0.12 0.17,-0.18 0.06,-0.25 0.32,-0.24 0.27,-0.03 0.17,-0.17 0.13,-0.23 0.11,-0.2 0.05,-0.18 -0.05,-0.2 0.11,-0.26 0.24,0.06 0.07,-0.16 0.2,-0.09 0.14,-0.13 0.19,-0.05 0.19,0.02 0.09,-0.06 0.05,-0.28 0.09,-0.18 0.15,-0.14 0.14,-0.22 0.21,0.05 0.03,0.26 0.07,0.13 v 0.25 0.25 l 0.01,0.27 0.08,0.11 -0.08,0.31 -0.15,-0.18 -0.08,-0.11 -0.13,0.12 -0.1,0.15 -0.19,0.01 -0.13,-0.18 -0.09,0.12 -0.02,0.26 0.04,0.11 0.23,-0.01 h 0.16 l 0.21,-0.01 0.14,-0.08 0.25,-0.03 -0.12,0.14 -0.21,0.1 -0.12,0.1 -0.19,0.04 -0.12,0.16 -0.19,0.04 v -0.15 l 0.03,-0.15 -0.11,0.1 -0.09,0.29 -0.17,0.12 -0.16,0.13 -0.1,0.25 0.09,0.21 0.19,0.02 0.22,0.02 0.11,-0.01 0.16,0.08 0.17,0.03 0.01,0.14 -0.29,0.05 -0.31,0.26 -0.32,0.08 -0.24,0.02 -0.37,0.3 -0.11,-0.35 0.09,-0.13 0.03,-0.26 -0.11,-0.22 h -0.25 l -0.17,0.12 0.09,0.33 -0.09,0.22 -0.16,0.36 -0.25,0.32 -0.32,0.14 h -0.39 l -0.31,-0.05 -0.17,-0.18 -0.07,-0.26 -0.14,-0.14 -0.05,0.16 -0.17,-0.06 0.02,-0.18 0.17,-0.14 0.02,-0.15 -0.14,-0.04 -0.39,0.39 -0.18,0.11 -0.16,0.09 0.07,-0.2 0.27,-0.2 0.22,-0.16 0.12,-0.28 -0.31,0.06 -0.22,0.13 -0.21,0.18 -0.18,0.08 -0.1,0.24 -0.12,0.35 -0.09,0.27 -0.09,0.35 0.01,0.34 0.16,0.07 -0.12,0.23 -0.12,0.21 -0.06,0.24 -0.07,0.22 -0.12,0.29 -0.08,0.11 -0.19,0.23 0.03,0.34 0.16,0.13 0.19,0.34 0.14,0.27 0.04,0.24 -0.13,0.12 -0.15,0.16 0.13,0.26 0.35,0.36 0.21,0.22 0.3,0.08 0.33,0.28 0.13,0.17 -0.02,-0.3 -0.16,-0.37 0.22,0.33 0.19,0.38 0.02,0.42 0.13,0.33 0.22,0.54 0.11,0.48 0.02,0.41 -0.05,0.33 -0.08,0.32 -0.27,0.21 -0.18,0.39 -0.05,0.39 -0.02,0.37 v 0.24 l 0.04,0.27 -0.01,0.23 0.05,0.16 0.19,0.22 0.1,0.15 0.06,0.22 -0.14,0.27 -0.12,0.2 -0.16,0.1 -0.07,-0.15 -0.04,-0.28 -0.09,-0.17 -0.16,-0.17 -0.53,-0.06 -0.31,0.15 -0.25,0.09 -0.2,0.13 -0.26,0.13 -0.25,0.13 -0.24,0.13 -0.27,-0.16 -0.24,-0.1 -0.13,0.2 -0.09,-0.05 -0.07,-0.18 -0.17,-0.08 -0.22,-0.02 -0.02,-0.19 0.05,-0.2 -0.03,-0.21 -0.09,-0.26 -0.11,-0.29 -0.07,-0.43 -0.09,-0.27 -0.05,-0.32 -0.04,-0.27 -0.06,-0.28 0.12,-0.25 0.03,-0.25 0.03,-0.34 0.01,-0.4 -0.07,-0.47 -0.12,-0.25 -0.08,-0.28 v -0.35 l -0.05,-0.35 0.08,-0.56 0.07,-0.17 0.08,-0.26 -0.16,-0.21 -0.15,-0.13 -0.25,-0.03 -0.16,0.18 -0.06,0.18 -0.19,0.14 -0.02,0.24 -0.14,0.24"
            />
            <path
              id="path2762"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.48,1155.62 0.12,-0.06 0.17,-0.13 0.06,0.16 -0.13,0.13 -0.2,0.08 -0.18,0.13 -0.06,0.23 -0.2,0.06 -0.26,-0.12 0.07,-0.22 0.05,-0.15 0.14,-0.18 v -0.22 l 0.07,-0.29 0.18,0.22 v 0.17 0.21 l 0.17,-0.02"
            />
            <path
              id="path2764"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2773.07,1155.5 -0.1,-0.1 0.25,-0.13 0.01,0.21 -0.16,0.02"
            />
            <path
              id="path2766"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.97,1152.27 0.27,-0.13 -0.15,0.31 -0.22,0.12 -0.25,0.11 0.15,-0.21 0.2,-0.2"
            />
            <path
              id="path2768"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.64,1150.48 -0.17,-0.07 0.08,-0.21 z"
            />
            <path
              id="path2770"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.94,1149.48 -0.11,0.11 0.02,-0.31 z"
            />
            <path
              id="path2772"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.92,1167.05 v -0.39 l 0.12,0.17 0.18,0.27 -0.16,0.14 -0.14,-0.19"
            />
            <path
              id="path2774"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.26,1168.75 -0.27,-0.06 0.1,-0.14 z"
            />
            <path
              id="path2776"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.1,1168.16 -0.31,-0.08 0.07,-0.17 0.22,-0.05 0.02,0.3"
            />
            <path
              id="path2778"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2770.66,1166.77 -0.12,-0.16 h 0.22 l 0.22,0.15 -0.32,0.01"
            />
            <path
              id="path2780"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2770.36,1167.48 0.08,-0.32 0.03,0.31 z"
            />
            <path
              id="path2782"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2778.78,1147.22 0.19,0.1 -0.09,0.08 -0.1,0.17 -0.15,0.11 v -0.34 l 0.15,-0.12"
            />
            <path
              id="path2784"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.97,1149.45 -0.15,-0.03 0.08,-0.22 0.07,0.12 v 0.13"
            />
            <path
              id="path2786"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.3,1149.52 -0.09,0.15 -0.02,-0.22 0.15,-0.09 -0.04,0.16"
            />
            <path
              id="path2788"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.22,1148.42 0.17,0.07 -0.09,0.14 z"
            />
            <path
              id="path2790"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.53,1148.18 0.03,-0.15 0.12,0.03 0.02,0.13 -0.17,-0.01"
            />
            <path
              id="path2792"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.66,1147.89 -0.08,-0.21 0.17,0.07 z"
            />
            <path
              id="path2794"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.33,1146.21 -0.17,0.01 v -0.26 l 0.1,-0.17 0.15,0.12 -0.08,0.11 v 0.19"
            />
            <path
              id="path2796"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.99,1152.84 0.1,-0.09 0.12,-0.12 0.18,0.01 0.2,0.05 0.11,0.27 0.13,0.29 -0.02,0.22 -0.18,0.16 -0.07,0.25 -0.14,0.23 -0.23,-0.3 0.03,-0.35 -0.06,-0.21 -0.07,-0.17 -0.1,-0.24"
            />
            <path
              id="path2798"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2772.35,1171.38 -0.17,-0.11 -0.1,-0.21 -0.11,-0.13 -0.13,-0.32 0.18,0.03 0.04,0.21 0.15,0.12 0.06,0.18 0.08,0.23"
            />
            <path
              id="path2800"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.97,1172.08 -0.05,0.24 -0.1,-0.22 -0.1,-0.26 0.16,-0.01 0.09,0.25"
            />
            <path
              id="path2802"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2769.02,1131.95 -0.14,0.01 -0.06,-0.21 -0.07,-0.16 0.13,-0.01 0.08,0.17 0.06,0.2"
            />
            <path
              id="path2804"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2769.24,1131.76 -0.08,0.12 -0.05,-0.21 z"
            />
            <path
              id="path2806"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2769.67,1131.37 0.12,-0.04 0.12,0.11 -0.12,0.11 -0.12,-0.18"
            />
            <path
              id="path2808"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.47,1131.09 0.09,0.14 -0.13,0.07 z"
            />
            <path
              id="path2810"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2769.14,1128.82 -0.12,0.05 -0.12,-0.11 z"
            />
            <path
              id="path2812"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.85,1130.63 0.15,0.14 -0.15,0.11 -0.07,-0.14 0.07,-0.11"
            />
            <path
              id="path2814"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.52,1128.04 0.08,-0.12 0.15,0.08 -0.09,0.14 -0.14,-0.1"
            />
            <path
              id="path2816"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2768.18,1128.32 -0.17,-0.12 0.04,-0.15 0.16,0.09 0.15,0.17 0.02,0.16 -0.2,-0.15"
            />
            <path
              id="path2818"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2771.76,1131.26 0.16,-0.11 0.14,0.15 -0.19,0.05 0.09,0.13 -0.14,0.09 -0.06,-0.31"
            />
            <path
              id="path2820"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2780.94,1145.21 -0.11,0.13 -0.06,-0.21 0.34,-0.16 v 0.16 l -0.17,0.08"
            />
            <path
              id="path2822"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2767.13,1145.86 -0.11,-0.16 0.23,-0.05 0.16,0.24 -0.11,0.09 -0.17,-0.12"
            />
            <path
              id="path2824"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2770.11,1144.36 -0.09,0.21 -0.16,-0.16 0.1,-0.13 0.15,0.08"
            />
            <path
              id="path2826"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2761.45,1133.13 0.15,-0.01 v 0.2 l -0.15,-0.01 v -0.18"
            />
            <path
              id="path2828"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2764.1,1133.47 v -0.2 h 0.25 l -0.02,0.22 -0.23,-0.02"
            />
            <path
              id="path2830"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2770.92,1118.2 0.09,-0.24 0.06,0.22 z"
            />
            <path
              id="path2832"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2778.63,1119.63 -0.05,0.25 -0.12,-0.33 z"
            />
            <path
              id="path2834"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2802.51,1138.12 -0.45,-0.22 -0.2,0.01 -0.13,-0.69 -0.21,-0.59 0.3,0.08 0.42,0.31 0.48,-0.07 -0.1,0.54 0.18,0.39 -0.29,0.24"
            />
            <path
              id="path2836"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2809.71,1140.48 0.28,0.76 -0.25,0.4 -0.53,-0.39 -0.31,-0.46 0.22,-0.24 0.59,-0.07"
            />
            <path
              id="path2838"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2811.1,1143.8 0.46,0.33 -0.33,0.29 -0.41,-0.74 0.28,0.12"
            />
            <path
              id="path2840"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2814.84,1145.12 0.54,0.38 0.27,0.45 -0.56,0.1 -0.47,0.15 -0.08,-0.46 0.3,-0.62"
            />
            <path
              id="path2842"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2827.29,1156.57 0.47,0.41 0.39,0.63 -0.43,0.1 -0.64,-0.84 0.21,-0.3"
            />
            <path
              id="path2844"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2828.91,1159.52 -0.32,0.08 -0.15,-0.27 z"
            />
            <path
              id="path2846"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2829.79,1161.64 0.09,-0.38 0.29,0.56 0.38,0.61 -0.38,0.07 v 0.34 l -0.43,-0.48 0.05,-0.72"
            />
            <path
              id="path2848"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2829.77,1165.84 0.13,0.58 -0.13,-0.58"
            />
            <path
              id="path2850"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2830.33,1170.72 v 0.5 l -0.56,-0.13 0.3,-0.21 0.26,-0.16"
            />
            <path
              id="path2852"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2842.13,1144.63 -0.23,0.37 -0.26,0.25 -0.44,-0.28 -0.32,-0.23 -0.34,-0.1 -0.28,-0.4 -0.05,-0.42 0.34,-0.11 0.3,0.52 0.36,0.18 0.43,-0.03 0.44,-0.19 0.32,-0.1 -0.27,0.54"
            />
            <path
              id="path2854"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2844.61,1144.64 -0.15,-0.61 h 0.28 l 0.19,0.43 -0.32,0.18"
            />
            <path
              id="path2856"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2845.72,1144.5 0.03,-0.44 0.38,-0.11 0.16,0.54 -0.57,0.01"
            />
            <path
              id="path2858"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2846.68,1144.94 0.08,-0.51 0.38,0.17 0.47,0.1 -0.21,0.6 -0.72,-0.36"
            />
            <path
              id="path2860"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2844.99,1141.26 v -0.53 l 0.35,-0.03 0.09,0.48 -0.44,0.08"
            />
            <path
              id="path2862"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2846.63,1141.39 -0.43,0.42 -0.3,-0.77 0.39,0.03 0.34,0.32"
            />
            <path
              id="path2864"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2839.3,1138.73 0.11,-0.42 0.24,0.42 z"
            />
            <path
              id="path2866"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2839.02,1139.31 -0.28,-0.02 0.19,-0.33 z"
            />
            <path
              id="path2868"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2850.7,1136.04 -0.19,-0.3 0.37,-0.41 0.38,0.5 -0.56,0.21"
            />
            <path
              id="path2870"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2854.71,1142.06 0.36,0.01 0.39,-0.03 0.47,0.16 -0.13,0.51 -0.44,0.08 -0.41,-0.09 -0.24,-0.64"
            />
            <path
              id="path2872"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2863.16,1140.87 v 0.41 l -0.55,-0.13 0.04,-0.32 0.51,0.04"
            />
            <path
              id="path2874"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2870.53,1150.06 0.13,0.46 -0.43,0.19 -0.27,-0.49 0.57,-0.16"
            />
            <path
              id="path2876"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2874.06,1156.67 -0.41,-0.6 -0.07,-0.5 0.5,-0.43 0.66,0.5 -0.03,0.72 -0.65,0.31"
            />
            <path
              id="path2878"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2883.2,1157.58 -0.72,-0.67 0.02,-0.55 0.7,-0.14 0.5,0.8 -0.5,0.56"
            />
            <path
              id="path2880"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2887.25,1156.93 -0.69,-0.22 -0.42,-0.5 -0.58,-0.51 0.42,-0.24 0.82,0.53 0.76,0.1 0.35,0.64 -0.66,0.2"
            />
            <path
              id="path2882"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2888.64,1156.56 0.3,-0.06 0.27,0.56 -0.52,0.04 -0.05,-0.54"
            />
            <path
              id="path2884"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2892.9,1167.38 -0.08,-0.45 0.55,-0.22 0.09,0.74 -0.56,-0.07"
            />
            <path
              id="path2886"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2897.26,1151.73 -0.57,0.18 -0.71,0.32 -0.54,-0.55 0.37,-0.25 0.67,-0.05 0.78,0.35"
            />
            <path
              id="path2888"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2886.89,1150.33 0.32,-0.2 0.66,-0.3 0.51,-0.16 0.54,0.69 0.25,-0.67 -0.03,-0.36 0.07,-0.47 0.5,-0.5 0.22,0.83 -0.22,0.94 -0.61,0.76 -0.89,-0.23 -1.32,-0.33"
            />
            <path
              id="path2890"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2891.16,1146.99 -0.54,0.31 -0.49,-0.29 0.21,-0.46 0.61,-0.42 0.19,-0.63 0.22,0.66 -0.2,0.83"
            />
            <path
              id="path2892"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2891.9,1144.53 0.58,-0.17 0.72,0.59 -0.15,0.54 -0.68,-0.18 -0.47,-0.78"
            />
            <path
              id="path2894"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2901.41,1144.9 -0.51,0.21 -0.56,-0.51 -0.61,0.23 -0.51,-0.01 v -0.41 l 1.12,-0.1 0.51,-0.29 0.86,0.18 -0.3,0.7"
            />
            <path
              id="path2896"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2901.04,1141.22 0.43,0.03 h 0.68 l 0.36,0.38 -0.52,0.58 -0.77,-0.28 -0.18,-0.71"
            />
            <path
              id="path2898"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2899.67,1147.96 -0.5,0.2 -0.09,-0.31 z"
            />
            <path
              id="path2900"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2899.2,1149.93 -0.72,0.24 0.08,-0.72 0.9,-0.73 0.37,0.63 -0.63,0.58"
            />
            <path
              id="path2902"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2896.3,1150.8 -0.44,-0.07 0.19,-0.46 0.6,0.08 -0.35,0.45"
            />
            <path
              id="path2904"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2893.1,1153.14 0.17,-0.48 0.58,-0.28 0.59,-0.33 -0.47,0.84 -0.87,0.25"
            />
            <path
              id="path2906"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2896.39,1153.8 -0.19,0.51 -0.43,-0.07 0.04,-0.44 h 0.58"
            />
            <path
              id="path2908"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2895.15,1157.04 -0.37,-0.31 0.39,-0.23 0.58,0.46 -0.03,0.36 -0.57,-0.28"
            />
            <path
              id="path2910"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2896.14,1160.44 -0.09,-0.84 0.31,0.22 0.29,0.41 -0.51,0.21"
            />
            <path
              id="path2912"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2884.89,1152.71 -0.41,0.19 -0.17,-0.52 0.45,-0.29 0.13,0.62"
            />
            <path
              id="path2914"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2885.67,1148.95 -0.56,-0.17 0.45,-0.29 z"
            />
            <path
              id="path2916"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2883.55,1149.69 -0.27,-0.59 0.45,-0.42 0.33,0.12 -0.14,0.61 -0.37,0.28"
            />
            <path
              id="path2918"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2894.61,1141.28 0.25,-0.44 0.55,-0.36 v 0.56 l -0.48,0.59 -0.32,-0.35"
            />
            <path
              id="path2920"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2894.5,1139.91 0.43,0.03 -0.23,0.49 z"
            />
            <path
              id="path2922"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2875.79,1137.34 0.03,-0.43 h 0.69 l -0.2,0.58 -0.52,-0.15"
            />
            <path
              id="path2924"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2904.86,1132.67 -0.78,-0.13 0.11,-0.53 z"
            />
            <path
              id="path2926"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2904.66,1126.87 0.2,0.56 0.19,1.12 -0.69,0.51 -0.05,-0.61 -0.08,-0.74 0.43,-0.84"
            />
            <path
              id="path2928"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2906.04,1129.23 -0.49,0.33 -0.05,-0.89 z"
            />
            <path
              id="path2930"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2904.9,1125.01 0.56,0.9 -0.6,0.33 -0.56,-0.6 0.6,-0.63"
            />
            <path
              id="path2932"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2906.09,1123.46 0.42,-0.44 -0.42,0.44"
            />
            <path
              id="path2934"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2907.7,1123.77 -0.29,0.65 -0.45,-0.44 z"
            />
            <path
              id="path2936"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2909.06,1120.42 0.5,0.67 -0.79,0.31 -0.53,-0.6 0.82,-0.38"
            />
            <path
              id="path2938"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2910.68,1118.8 -0.88,0.26 0.38,-0.7 0.85,-0.29 -0.35,0.73"
            />
            <path
              id="path2940"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2912.46,1116.97 0.1,0.69 -0.66,-0.21 z"
            />
            <path
              id="path2942"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2776.42,1182.26 0.33,0.06 -0.17,0.38 -0.41,-0.16 -0.17,-0.26 0.42,-0.02"
            />
            <path
              id="path2944"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2777.49,1182.73 0.16,0.46 -0.02,0.44 -0.35,-0.56 -0.18,-0.42 0.39,0.08"
            />
            <path
              id="path2946"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2778.63,1183.7 -0.19,-0.29 0.19,0.29"
            />
            <path
              id="path2948"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2780.39,1184.3 -0.44,0.23 -0.31,-0.07 -0.05,-0.23 0.44,-0.23 0.36,0.3"
            />
            <path
              id="path2950"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2785.36,1188.38 0.2,0.11 0.22,0.17 v 0.32 l 0.03,0.24 0.2,0.33 0.39,0.4 0.33,0.36 0.31,0.39 -0.17,0.23 -0.27,-0.39 -0.26,-0.23 -0.3,0.15 -0.08,-0.33 0.12,-0.19 -0.39,-0.39 -0.14,-0.36 -0.07,-0.31 -0.12,-0.5"
            />
            <path
              id="path2952"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2787.48,1192.23 0.18,0.01 0.2,0.23 -0.23,0.05 -0.15,-0.29"
            />
            <path
              id="path2954"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2788.71,1193.54 -0.12,0.34 -0.22,0.23 0.06,-0.81 0.28,0.24"
            />
            <path
              id="path2956"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.14,1195.93 -0.33,-0.25 -0.33,-0.21 -0.42,-0.39 -0.12,-0.37 0.2,-0.15 0.24,0.18 0.26,0.39 0.28,0.35 0.22,0.45"
            />
            <path
              id="path2958"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.9,1195.66 -0.13,-0.3 0.29,0.15 0.07,0.35 -0.23,-0.2"
            />
            <path
              id="path2960"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2792.55,1201.36 -0.1,0.36 -0.22,0.03 -0.28,-0.3 v -0.26 l 0.28,-0.08 0.32,0.25"
            />
            <path
              id="path2962"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2793.36,1201.98 0.1,0.4 0.1,0.33 0.01,0.27 -0.21,-0.28 -0.14,-0.26 -0.19,-0.44 0.18,-0.34 0.15,0.32"
            />
            <path
              id="path2964"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2792.43,1207.66 -0.04,-0.25 -0.16,-0.27 -0.09,-0.28 -0.17,-0.27 -0.17,-0.23 -0.2,0.02 -0.08,0.1 -0.1,0.17 -0.11,0.03 0.08,0.23 0.13,0.12 0.13,0.16 0.21,-0.01 0.14,0.15 0.06,0.21 0.13,0.14 0.2,0.16 0.13,0.05 z m 0.32,-2.2 0.2,-0.14 -0.12,-0.23 -0.16,0.05 -0.12,0.05 -0.01,0.14 z m -2.73,4.45 -0.18,0.03 -0.06,-0.24 -0.14,-0.2 -0.03,-0.23 -0.04,-0.13 0.09,-0.04 0.12,0.2 0.09,0.21 h 0.13 l 0.02,-0.18 0.05,-0.16 0.12,0.02 0.1,-0.17 0.13,-0.18 h 0.21 l 0.2,0.03 0.12,-0.04 -0.03,-0.24 -0.11,-0.21 -0.18,-0.14 -0.09,0.19 -0.02,0.2 -0.13,0.05 -0.05,0.08 -0.14,-0.04 0.05,-0.24 0.02,-0.18 0.12,-0.07 0.17,-0.05 0.07,-0.12 0.03,-0.17 -0.03,-0.16 -0.11,-0.16 0.11,0.09 0.13,0.17 0.14,0.24 0.12,0.05 0.15,0.05 0.12,0.12 0.14,0.05 0.11,-0.07 -0.07,-0.26 -0.13,-0.16 0.17,-0.06 0.16,0.15 0.13,0.1 0.11,0.21 -0.03,0.15 -0.11,0.1 h -0.17 l -0.09,0.03 0.03,0.1 -0.02,0.21 -0.1,0.14 -0.04,0.15 0.12,0.12 0.07,0.14 0.14,0.05 0.02,-0.09 0.13,-0.04 0.18,-0.12 0.03,-0.31 0.07,-0.2 0.2,-0.03 0.07,-0.12 0.08,-0.16 -0.01,-0.21 -0.2,-0.18 -0.21,-0.17 -0.21,-0.26 -0.14,-0.12 -0.2,-0.07 -0.17,0.17 -0.19,-0.15 -0.07,-0.27 -0.07,-0.18 0.04,-0.22 0.1,-0.13 0.15,-0.12 0.14,-0.23 0.09,-0.26 -0.07,-0.31 0.03,-0.33 0.13,-0.1 0.16,-0.18 v -0.31 l -0.07,-0.28 -0.18,-0.23 0.03,-0.22 0.23,-0.08 0.2,0.06 0.23,-0.07 0.18,-0.08 0.15,0.14 -0.13,0.16 -0.11,0.17 -0.07,0.15 -0.02,0.22 0.06,0.11 0.21,0.08 0.17,-0.11 0.1,-0.16 0.18,-0.25 -0.08,-0.41 -0.1,-0.19 -0.1,-0.2 0.24,0.09 0.23,0.11 0.22,0.23 0.1,0.14 0.16,0.19 -0.07,0.14 -0.05,0.17 0.19,0.06 0.25,0.05 0.17,-0.1 0.16,0.24 0.02,0.26 0.08,0.24 0.17,0.17 -0.04,0.34 v 0.25 l 0.05,0.39 0.09,0.24 0.09,0.37 0.07,0.24 0.06,0.23 0.11,0.13 0.04,0.17 0.08,0.15 0.07,0.21 0.07,0.2 0.11,0.03 0.11,0.15 0.09,0.12 0.12,0.13 0.08,0.16 v 0.22 l -0.18,-0.04 -0.11,0.08 0.05,0.14 0.1,0.09 0.13,0.01 -0.12,0.11 -0.12,0.04 -0.15,0.1 0.15,0.13 0.06,0.16 -0.16,0.05 -0.32,-0.02 -0.18,-0.03 -0.15,-0.02 -0.19,0.1 0.13,0.18 0.15,0.11 0.15,0.02 0.18,0.14 0.01,0.26 -0.01,0.22 -0.14,0.17 -0.32,-0.07 -0.16,-0.19 -0.17,-0.16 -0.14,0.06 h -0.34 l -0.14,0.1 -0.25,0.13 -0.04,0.18 -0.08,0.14 0.03,0.24 v 0.2 l 0.08,0.17 0.19,0.04 0.18,-0.18 0.17,-0.06 0.22,0.15 0.12,0.08 0.17,0.02 h 0.14 l 0.21,0.11 0.27,0.06 0.29,-0.03 0.1,-0.08 0.2,-0.08 0.13,-0.13 0.17,-0.12 0.13,-0.12 h 0.15 l 0.13,0.22 0.19,0.09 v 0.19 l -0.1,0.11 -0.19,0.14 -0.04,0.24 -0.02,0.16 0.08,0.2 0.12,0.25 0.09,0.11 0.16,0.17 0.2,-0.09 0.13,-0.09 -0.03,-0.23 0.2,-0.05 0.28,0.11 0.2,0.19 0.22,0.12 0.5,0.15 0.27,0.24 0.29,0.04 h 0.16 l 0.15,0.21 0.25,0.04 0.35,0.17 0.23,-0.05 0.31,0.04 0.24,0.21 0.45,0.32 0.19,0.23 0.2,0.17 0.21,0.08 0.39,0.14 0.48,-0.08 0.3,-0.16 0.04,-0.25 -0.19,-0.29 -0.21,-0.23 -0.11,-0.18 -0.14,-0.22 0.17,-0.19 0.26,0.02 0.16,0.19 -0.03,0.21 0.03,0.2 0.13,0.23 0.08,0.18 0.14,0.23 0.23,0.13 0.21,0.18 0.19,0.11 0.24,-0.1 -0.02,-0.4 -0.22,-0.34 -0.24,-0.33 -0.24,-0.11 -0.01,-0.15 0.15,-0.16 -0.11,-0.28 0.07,-0.18 -0.15,-0.16 -0.1,-0.2 0.2,0.03 0.14,-0.04 0.03,-0.22 0.24,-0.14 0.14,-0.18 0.03,-0.23 0.19,-0.09 0.36,-0.11 0.28,-0.04 0.3,0.15 0.19,0.17 0.15,0.33 0.13,0.24 0.26,0.45 0.24,0.24 0.07,0.26 0.06,0.3 0.2,0.14 0.22,0.16 0.2,0.17 0.2,0.07 0.23,0.04 0.24,0.02 0.16,0.08 v 0.26 0.22 l -0.13,0.1 h -0.28 l -0.09,0.17 h -0.25 l -0.08,0.15 0.01,0.26 0.14,0.16 0.14,0.26 0.05,0.27 v 0.16 l 0.24,0.14 0.24,-0.04 -0.02,-0.43 0.02,-0.29 0.09,-0.21 0.09,0.18 -0.01,0.26 0.11,0.06 0.07,-0.2 0.28,-0.05 0.21,0.14 0.13,0.04 0.14,-0.05 v -0.11 l -0.18,-0.14 -0.16,-0.14 -0.24,-0.11 -0.11,-0.12 0.16,-0.02 0.26,0.06 0.2,0.16 0.27,0.09 0.65,0.11 0.44,0.09 0.34,0.05 0.21,-0.02 0.15,-0.05 0.11,-0.12 0.07,0.14 0.01,0.22 0.07,0.14 0.17,0.12 0.09,0.17 0.03,0.18 0.21,0.09 0.15,0.21 0.06,0.23 0.17,0.18 0.14,0.12 0.25,-0.02 0.18,-0.02 0.11,-0.1 0.05,-0.12 -0.1,-0.1 -0.15,-0.05 -0.05,-0.26 -0.04,-0.18 0.04,-0.23 -0.03,-0.12 0.05,-0.13 0.05,-0.21 0.2,0.03 0.13,0.18 0.14,0.13 0.11,0.14 0.08,0.12 0.1,0.22 0.12,0.16 v 0.18 l -0.1,0.14 -0.05,0.14 v 0.12 l 0.1,0.2 0.07,0.14 0.05,0.13 0.16,0.17 0.15,0.1 0.19,0.02 0.31,0.05 0.17,0.03 0.11,-0.17 0.02,-0.2 v -0.18 l 0.12,0.17 0.09,0.13 v 0.17 l -0.11,0.16 0.04,0.19 0.11,0.18 0.12,0.13 0.08,0.29 0.23,0.18 0.18,0.02 0.18,0.03 0.09,-0.09 0.1,-0.08 -0.15,-0.17 -0.15,-0.18 v -0.03 l -0.08,-0.06 -0.14,-0.18 -0.05,-0.1 -0.09,-0.21 0.02,-0.07 0.04,-0.07 -0.06,-0.09 -0.05,-0.14 0.04,-0.11 0.02,-0.14 v -0.13 l 0.05,-0.13 -0.07,-0.04 -0.1,0.05 -0.04,-0.08 v -0.04 l 0.14,-0.04 0.15,-0.06 0.08,0.07 0.09,0.1 0.05,0.1 0.02,0.1 0.23,0.17 0.24,0.18 0.24,0.12 0.25,0.23 0.05,0.5 0.04,0.29 0.11,0.22 0.18,0.2 0.17,0.2 0.23,0.11 0.22,0.06 0.2,0.06 -0.03,0.17 -0.21,0.18 -0.22,0.3 -0.07,0.17 -0.12,0.16 -0.07,0.47 0.11,0.51 0.11,0.44 0.13,0.36 0.12,0.4 0.13,0.23 0.25,0.23 0.19,0.25 0.11,0.98 0.01,0.74 -0.2,0.67 -0.06,0.34 0.04,0.43 0.14,0.41 0.14,0.26 0.4,0.25 0.34,0.05 0.18,-0.06 0.16,-0.22 0.18,0.13 -0.05,0.22 -0.06,0.19 -0.01,0.19 -0.04,0.16 0.05,0.15 -0.04,0.13 0.03,0.22 0.07,0.12 0.11,0.24 0.08,0.08 0.08,0.21 0.1,0.04 0.1,0.1 0.2,0.06 0.08,0.14 0.14,0.13 v 0.22 0.22 0.19 0.17 l 0.26,0.05 0.13,0.07 0.01,0.2 v 0.21 l -0.14,0.3 v 0.15 l -0.02,0.31 -0.05,0.25 -0.05,0.25 -0.25,0.23 -0.03,0.24 -0.07,0.23 -0.13,0.23 -0.21,0.28 -0.29,0.21 -0.28,0.14 -0.13,0.65 -0.01,0.57 0.01,0.51 0.06,0.32 0.07,0.28 -0.16,-0.15 -0.18,-0.12 -0.3,0.16 -0.21,0.14 -0.24,0.05 -0.31,-0.09 -0.1,-0.27 -0.13,-0.17 -0.02,-0.2 v -0.28 l 0.19,-0.02 0.22,0.19 0.22,0.04 0.15,0.11 0.24,0.09 0.18,-0.1 -0.03,-0.53 -0.1,-0.21 -0.15,-0.29 -0.24,-0.02 -0.19,0.12 -0.14,0.13 -0.23,-0.16 -0.02,-0.25 -0.1,-0.12 -0.22,-0.01 -0.07,0.25 -0.04,0.14 v 0.21 l 0.02,0.14 -0.13,0.31 -0.21,-0.02 -0.14,-0.2 -0.12,0.12 -0.12,0.06 -0.14,0.1 -0.02,-0.22 -0.03,-0.36 v -0.24 l -0.04,-0.31 -0.05,-0.2 -0.16,-0.2 -0.25,-0.06 -0.18,-0.03 -0.13,-0.18 -0.05,-0.17 -0.13,-0.15 0.06,-0.16 v -0.25 l 0.07,-0.13 0.1,-0.17 v -0.39 l -0.03,-0.26 -0.11,-0.23 -0.16,-0.26 -0.15,-0.05 -0.21,-0.1 0.09,-0.12 0.24,0.04 0.23,0.04 0.21,-0.14 v -0.33 l 0.03,-0.53 -0.12,-0.51 -0.2,-0.33 -0.1,-0.39 -0.12,-0.52 -0.14,-0.33 -0.08,-0.29 -0.34,-0.38 -0.15,-0.3 -0.14,-0.24 -0.12,-0.32 -0.06,-0.47 -0.32,-0.54 -0.32,-0.29 -0.49,-0.26 -0.44,-0.54 -0.25,-0.56 -0.36,-0.44 -0.41,-0.4 -0.23,-0.34 -0.41,-0.18 -0.44,-0.2 -0.32,-0.27 -0.37,-0.18 -0.3,-0.11 -0.3,-0.32 -0.17,-0.31 -0.43,-0.18 -0.3,0.11 -0.04,0.34 0.04,0.34 -0.17,0.06 -0.26,0.01 -0.04,0.18 0.09,0.19 0.1,0.06 0.2,-0.04 0.11,0.24 0.26,0.08 0.14,0.16 0.01,0.23 0.13,0.16 0.03,0.16 -0.14,-0.03 -0.31,-0.13 -0.2,-0.16 -0.14,-0.1 -0.1,-0.04 -0.19,-0.05 -0.22,-0.1 -0.12,-0.2 v -0.25 l 0.01,-0.28 -0.01,-0.27 0.07,-0.21 -0.05,-0.48 -0.38,-0.65 -0.45,-0.61 -0.48,-0.47 -0.23,-0.26 -0.16,-0.27 -0.14,-0.38 0.1,-0.29 0.14,-0.17 0.01,-0.25 -0.13,-0.1 -0.12,-0.06 -0.16,-0.16 -0.22,-0.13 -0.19,-0.13 -0.43,-0.23 -0.29,0.08 h -0.25 l -0.28,0.03 -0.02,0.25 -0.06,0.21 -0.28,-0.11 -0.45,-0.23 -0.47,-0.13 -0.37,-0.02 -0.31,-0.1 -0.31,-0.17 -0.5,-0.26 -0.84,-0.19 -0.73,-0.14 -0.37,-0.13 -0.19,0.25 -0.4,-0.09 -0.29,-0.15 -0.37,-0.18 -0.14,-0.15 -0.19,-0.18 -0.15,-0.36 -0.39,-0.28 -0.22,-0.23 -0.15,-0.16 -0.42,-0.42 -0.23,-0.22 -0.16,-0.25 -0.2,-0.23 -0.19,-0.19 -0.18,-0.08 -0.3,-0.07 -0.09,-0.23 -0.11,-0.14 -0.16,-0.27 -0.32,-0.21 -0.23,-0.03 -0.22,-0.03 -0.24,-0.01 -0.19,-0.14 -0.09,-0.29 0.06,-0.16 -0.06,-0.3 v -0.11 -0.23 l 0.06,-0.25 -0.18,0.02 h -0.27 l -0.18,-0.07 -0.33,-0.15 -0.1,-0.24 -0.1,-0.31 -0.04,-0.24 -0.13,-0.11 h -0.24 l -0.13,0.08 -0.16,-0.1 -0.05,-0.21 -0.2,-0.11 -0.14,-0.07 -0.28,0.16 -0.08,-0.11 -0.04,-0.28 -0.21,-0.21 h -0.19 l -0.14,-0.06 -0.03,0.11 v 0.1 0.09"
            />
            <path
              id="path2966"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2796.42,1210.94 -0.19,-0.15 -0.21,-0.21 -0.07,-0.07 0.17,0.03 0.27,0.26 0.35,0.1 0.08,-0.09 0.11,-0.18 -0.19,-0.1 0.06,-0.07 0.24,0.08 0.11,-0.11 0.06,-0.24 -0.06,-0.16 -0.16,-0.15 0.06,-0.22 0.14,-0.09 0.23,-0.01 0.06,-0.25 -0.1,-0.19 0.23,-0.02 0.14,0.03 0.19,0.1 h 0.16 l 0.06,0.3 0.05,0.17 0.13,0.24 0.12,0.1 0.15,0.15 0.11,0.18 0.07,0.13 0.06,0.21 0.02,0.19 0.08,0.19 0.18,0.13 0.14,0.15 h 0.14 l 0.19,0.07 0.11,0.23 0.04,0.15 0.26,0.04 0.09,-0.13 0.22,-0.05 0.17,-0.05 0.08,-0.07 0.15,-0.13 0.12,-0.15 0.15,-0.12 h 0.19 l 0.07,0.36 0.06,0.27 0.1,0.12 0.13,0.26 0.19,0.12 0.16,0.13 0.12,0.17 0.16,0.08 0.04,0.09 0.03,0.21 -0.03,0.37 -0.04,0.2 v 0.18 l 0.04,0.12 -0.22,0.06 -0.19,-0.06 -0.15,0.09 -0.13,-0.05 -0.21,0.08 -0.11,-0.05 -0.07,0.14 -0.02,0.1 -0.2,-0.07 -0.1,0.04 -0.16,0.03 -0.16,-0.19 -0.2,-0.17 -0.16,-0.12 -0.17,-0.15 -0.21,0.06 0.08,-0.15 -0.11,-0.23 -0.05,-0.29 -0.41,-0.1 -0.31,-0.17 -0.23,-0.07 -0.31,-0.11 -0.09,0.09 -0.01,0.2 -0.15,0.03 -0.16,-0.05 h -0.16 l -0.05,-0.2 -0.11,-0.11 -0.04,-0.16 v -0.12 l 0.14,-0.08 0.1,-0.08 -0.17,-0.09 -0.21,-0.08 -0.03,-0.07 -0.18,-0.1 -0.08,-0.06 -0.16,-0.12 -0.1,-0.06 -0.07,-0.2 -0.22,-0.15 -0.24,-0.11"
            />
            <path
              id="path2968"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2801.31,1214.49 0.16,0.07 0.1,0.22 -0.19,0.02 -0.2,-0.16 -0.07,-0.16 0.2,0.01"
            />
            <path
              id="path2970"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2797.04,1212.77 0.06,0.15 -0.12,0.12 -0.08,0.13 -0.1,-0.02 v -0.19 l 0.05,-0.18 0.19,-0.01"
            />
            <path
              id="path2972"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2798.46,1218.55 0.04,0.21 -0.31,-0.22 z"
            />
            <path
              id="path2974"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2798.67,1218.98 0.26,0.07 0.2,0.09 -0.04,0.25 -0.28,0.02 -0.14,-0.43"
            />
            <path
              id="path2976"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2789.21,1211.53 0.13,0.33 0.1,0.26 0.13,0.27 0.06,0.41 0.15,0.34 -0.07,0.24 -0.23,-0.28 -0.16,-0.19 -0.09,-0.65 -0.14,-0.29 -0.03,-0.31 0.15,-0.13"
            />
            <path
              id="path2978"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.44,1210.74 0.04,0.35 -0.29,-0.06 v -0.39 l 0.25,0.1"
            />
            <path
              id="path2980"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2788.87,1208.55 -0.24,-0.35 -0.26,-0.32 -0.27,-0.15 -0.3,-0.47 0.36,0.03 0.3,0.31 0.22,0.3 0.26,0.22 0.24,0.4 -0.31,0.03"
            />
            <path
              id="path2982"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2783.37,1209.2 -0.67,-0.27 -0.24,-0.14 -0.3,-0.2 -0.17,-0.29 0.28,-0.06 0.58,0.09 0.3,0.08 0.37,0.26 0.2,0.44 -0.35,0.09"
            />
            <path
              id="path2984"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2811.79,1227 -0.19,0.1 -0.25,-0.4 -0.26,-0.3 -0.15,-0.3 0.27,0.1 0.07,-0.16 -0.22,-0.3 0.23,-0.06 0.3,0.26 0.22,0.36 0.13,0.26 -0.28,-0.04 v 0.13 l 0.13,0.35"
            />
            <path
              id="path2986"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2814.93,1239.36 0.09,-0.35 0.3,-0.17 0.21,-0.1 0.15,-0.19 0.2,-0.19 -0.13,-0.44 -0.13,-0.28 -0.12,-0.6 0.27,-0.34 0.17,0.19 0.2,0.19 0.3,0.16 0.17,0.37 0.23,0.22 0.22,0.29 0.24,-0.03 0.39,0.01 0.28,0.01 0.3,0.23 -0.05,0.23 -0.33,0.06 -0.29,0.17 -0.28,0.1 -0.21,-0.02 -0.38,0.04 -0.12,0.17 -0.43,0.15 0.02,0.27 0.11,0.48 0.25,0.25 0.32,0.06 0.33,0.02 0.23,-0.21 0.25,-0.19 0.3,-0.17 0.37,0.32 0.38,0.35 1.15,0.58 0.56,-0.34 0.47,-0.02 0.49,-0.32 0.52,-0.07 0.38,-0.07 0.29,-0.09 0.54,-0.18 0.31,-0.04 0.36,0.05 v 0.53 l 0.13,0.43 0.8,1.16 0.96,0.92 0.65,0.34 0.42,-0.16 0.47,-0.06 0.38,0.13 -0.14,0.16 0.12,0.2 0.41,0.09 0.02,-0.28 0.37,0.25 0.14,0.23 -0.02,0.18 0.5,0.15 0.38,0.13 0.2,0.25 0.34,0.27 0.41,0.16 -0.33,-0.01 -0.48,-0.27 -0.53,-0.2 -0.18,0.18 -0.09,0.43 -0.22,0.23 -0.28,0.35 0.07,0.46 0.39,0.58 0.21,0.42 0.05,0.33 -0.26,-0.27 -0.41,-0.41 -0.45,-0.48 -0.57,-0.35 -0.94,0.04 -0.23,0.28 h -0.51 l -1.48,0.19 -0.79,0.45 -0.98,0.68 -0.44,0.59 -0.75,0.57 -0.44,0.34 -0.31,0.23 -0.3,-0.09 -0.18,-0.21 -0.26,0.06 -0.23,-0.07 0.08,-0.38 -0.15,-0.26 0.2,-0.47 0.24,-0.48 0.14,-0.58 -0.12,-0.59 -0.15,-0.3 -0.08,-0.43 -0.03,-0.77 -0.15,-0.42 -0.36,-0.16 -0.26,-0.31 0.09,-0.2 -0.02,-0.39 0.12,-0.17 -0.1,-0.57 -0.4,-0.43 -0.44,0.14 -0.31,-0.02 -0.51,0.04 -0.29,0.16 h -0.4 l -0.28,-0.38 0.26,-0.23 0.29,-0.19 -0.11,-0.28 -0.53,-0.58 -0.3,-0.17 -0.31,-0.23 -0.34,-0.11 -0.15,-0.27 0.02,-0.44 -0.15,-0.22"
            />
            <path
              id="path2988"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2814.12,1238.43 0.08,0.37 -0.24,-0.19 z"
            />
            <path
              id="path2990"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2818.66,1248 -0.05,0.37 -0.24,-0.37 z"
            />
            <path
              id="path2992"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2818.07,1248.84 -0.03,-0.54 0.03,0.54"
            />
            <path
              id="path2994"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2819.67,1268.31 -0.08,-0.46 0.33,-0.26 -0.03,-0.2 -0.3,0.05 0.28,-0.19 0.27,-0.17 0.46,-0.39 0.26,-0.42 0.1,-0.3 -0.01,-0.78 -0.29,-0.51 -0.09,-0.56 0.29,-0.45 v -0.49 -0.9 l 0.02,-0.44 0.02,-0.46 -0.13,-0.54 -0.05,-0.29 -0.07,-0.47 -0.1,-0.69 -0.36,-0.33 -0.06,-0.45 0.47,-0.56 0.23,-0.58 0.03,-1 -0.3,-0.66 -0.09,-0.99 0.18,-0.8 -0.14,-0.51 -0.43,-0.87 0.09,-0.82 0.18,-0.68 0.3,-0.36 0.35,0.51 0.17,0.59 0.24,0.62 0.13,0.31 0.48,0.41 0.32,0.19 0.11,-0.33 0.32,-0.04 0.69,0.14 0.34,-0.15 0.1,-0.4 0.17,-0.51 0.03,-0.35 0.06,0.36 0.16,0.36 v 0.35 l -0.08,0.88 -0.19,0.14 -0.6,0.02 -0.43,0.74 -0.59,0.81 -0.59,0.73 v 1 l 0.26,0.89 0.31,0.7 0.51,0.99 0.07,0.62 c 0.15,0.27 0.3,0.46 1.22,0.82 l 1.48,0.11 0.41,-0.36 0.5,-0.23 0.37,-0.31 0.25,-0.43 0.05,0.4 -0.19,0.25 -0.53,0.3 -0.36,0.57 -0.28,0.79 -0.32,0.83 -0.48,0.85 -0.3,0.56 -0.16,1.09 -0.45,1.19 -0.25,0.19 0.26,0.16 -0.16,0.32 -0.18,0.09 -0.32,-0.08 0.06,0.3 0.15,0.37 -0.3,0.2 -0.14,0.77 0.14,0.82 0.34,0.9 -0.14,1.53 -0.21,0.32 0.01,-0.5 0.14,-0.39 -0.05,-0.4 -0.21,0.29 -0.12,0.25 -0.08,0.67 0.05,0.4 -0.19,0.23 -0.05,0.41 -0.16,0.09 -0.15,0.5 0.29,0.43 -0.08,0.31 -0.36,0.23 -0.33,0.3 -0.02,-0.21 -0.34,-0.27 -0.42,0.01 -0.31,-0.03 0.31,-0.11 0.14,-0.16 0.28,-0.25 0.46,-0.21 -0.04,-0.36 -0.2,-0.32 0.2,0.17 0.21,0.08 -0.04,-0.48 -0.21,-0.07 -0.24,0.04 -0.2,-0.19 0.16,-0.16 0.09,-0.15 -0.29,-0.32 -0.44,-0.18 -0.19,0.2 0.34,0.42 0.1,0.18 -0.31,-0.23 -0.37,-0.25 -0.32,-0.2 -0.47,-0.23 v -0.57 l 0.21,-0.39 -0.08,-0.53 -0.17,-0.93 -0.33,-0.57 -0.06,-0.68 0.06,-0.24"
            />
            <path
              id="path2996"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2831.98,1248.41 -0.47,-0.13 -0.28,0.2 -0.33,-0.25 -0.19,-0.23 -0.25,-0.33 -0.14,-0.27 -0.42,-0.49 -0.38,-0.36 -0.26,-0.26 -0.04,-0.45 0.22,-0.07 0.08,0.04 0.07,0.4 0.24,0.23 0.29,0.24 0.3,0.41 0.25,0.29 0.28,0.25 0.37,0.15 0.23,0.15 0.49,0.27 -0.06,0.21"
            />
            <path
              id="path2998"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2833.34,1249.12 -0.3,-0.17 -0.16,-0.38 0.23,0.04 0.28,0.3 0.47,0.22 0.19,0.3 0.49,0.41 0.22,0.2 0.21,0.4 0.19,0.2 0.39,-0.06 0.37,0.32 0.43,0.4 0.59,0.32 0.32,0.27 0.45,0.13 0.32,0.16 -0.05,0.26 0.17,0.33 -0.22,0.02 -0.38,-0.18 -0.57,-0.67 -0.37,-0.23 -0.57,-0.23 -0.26,0.08 -0.02,0.43 -0.24,-0.11 -0.09,-0.38 0.01,-0.16 -0.26,-0.16 -0.11,-0.16 -0.26,-0.18 -0.2,-0.07 -0.42,-0.66 -0.33,-0.26 -0.24,-0.17 0.05,-0.29 -0.33,-0.27"
            />
            <path
              id="path3000"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2841.39,1254.91 h -0.28 l -0.21,-0.29 -0.15,-0.08 -0.2,-0.27 -0.24,-0.25 -0.25,-0.11 -0.22,-0.35 -0.19,-0.15 -0.06,-0.33 0.25,0.1 0.47,0.39 0.48,0.48 0.65,0.43 0.35,0.44 0.42,0.5 -0.19,0.01 -0.38,-0.12 -0.18,-0.21 -0.07,-0.19"
            />
            <path
              id="path3002"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2845.79,1258.06 -0.22,-0.31 0.25,0.11 z"
            />
            <path
              id="path3004"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2847.54,1260.03 -0.12,-0.4 0.31,0.25 z"
            />
            <path
              id="path3006"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2846.82,1259.12 -0.38,-0.48 -0.44,-0.36 0.33,0.08 0.66,0.72 -0.17,0.04"
            />
            <path
              id="path3008"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2849.57,1262.39 -0.12,0.24 -0.13,-0.31 z"
            />
            <path
              id="path3010"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2851.67,1264.74 -0.13,0.21 -0.07,-0.31 z"
            />
            <path
              id="path3012"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2852.18,1265.29 -0.22,0.06 -0.03,-0.28 z"
            />
            <path
              id="path3014"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2853.05,1266.17 -0.18,0.22 -0.03,-0.3 z"
            />
            <path
              id="path3016"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2853.94,1267.71 -0.15,0.11 -0.33,-0.48 -0.14,-0.64 0.36,0.12 0.01,0.3 0.1,0.26 0.15,0.33"
            />
            <path
              id="path3018"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2857.25,1271.68 -0.08,0.18 -0.44,-0.26 -0.28,-0.42 -0.22,-0.46 -0.16,-0.22 -0.3,-0.13 -0.22,-0.04 -0.41,-0.48 -0.14,-0.18 -0.07,-0.35 0.26,0.08 0.2,-0.02 0.26,0.44 0.44,0.13 0.64,0.32 0.41,0.56 v 0.17 l 0.14,0.07 0.09,0.23 -0.04,0.21 -0.08,0.17"
            />
            <path
              id="path3020"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2855.04,1270.02 -0.09,0.14 -0.21,-0.28 z"
            />
            <path
              id="path3022"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2856.04,1271.87 -0.07,0.21 -0.41,-0.11 v -0.23 l 0.48,0.13"
            />
            <path
              id="path3024"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2858.36,1272.25 -0.2,0.2 -0.45,-0.31 -0.12,-0.47 0.37,0.1 0.4,0.48"
            />
            <path
              id="path3026"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2852.97,1268.31 -0.27,-0.31 0.27,0.31"
            />
            <path
              id="path3028"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2832.3,1246.71 -0.36,-0.17 0.13,-0.24 0.34,0.15 0.23,0.12 0.24,0.24 -0.18,0.14 -0.4,-0.24"
            />
            <path
              id="path3030"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2542.13,1224.38 0.08,-0.16 v -0.13 l 0.19,0.07 0.1,0.15 -0.04,-0.19 0.06,-0.11 -0.1,-0.24 -0.11,-0.22 -0.07,-0.16 -0.08,-0.16 -0.1,-0.17 0.07,-0.02 0.03,-0.2 -0.19,-0.09 -0.24,-0.09 -0.08,-0.17 0.21,0.08 0.11,-0.03 v -0.12 l 0.1,-0.04 0.09,0.01 0.09,-0.05 0.18,-0.01 0.26,0.3 0.23,0.24 0.11,0.15 h 0.12 l -0.19,-0.27 -0.21,-0.32 -0.12,-0.32 -0.13,-0.19 0.08,-0.19 v -0.23 l -0.15,-0.27 -0.04,-0.25 0.07,-0.21 0.04,-0.06 -0.11,-0.44 -0.03,-0.26 -0.12,-0.35 0.15,0.05 0.17,0.12 v 0.25 l 0.07,0.25 0.06,0.28 0.04,0.09 0.11,0.17 -0.06,0.11 -0.07,0.28 0.08,0.05 0.16,0.17 0.17,0.25 0.11,0.19 0.17,0.06 -0.08,-0.12 -0.1,-0.16 -0.07,-0.03 -0.15,-0.22 -0.11,-0.15 0.03,-0.27 0.16,0.03 0.12,-0.1 0.07,-0.08 -0.04,0.07 -0.03,0.31 0.12,-0.15 0.09,0.12 -0.01,0.17 0.06,0.15 v 0.22 l 0.08,-0.22 0.15,-0.13 -0.1,-0.19 v -0.31 l 0.05,-0.28 0.2,-0.12 -0.07,-0.25 -0.21,-0.37 -0.15,-0.24 -0.14,-0.3 -0.02,-0.19 -0.13,-0.07 0.08,-0.22 0.17,-0.31 0.14,-0.16 -0.04,0.24 v 0.28 l 0.24,0.01 0.25,-0.17 0.22,-0.14 0.04,0.2 -0.09,0.33 0.17,-0.06 0.18,0.04 0.19,-0.14 0.22,0.12 0.15,0.27 0.22,0.04 0.13,0.27 0.18,-0.04 0.25,0.02 0.2,-0.09 -0.23,-0.13 -0.15,-0.22 -0.19,-0.22 -0.18,-0.29 -0.04,-0.24 0.28,-0.08 0.06,-0.2 0.18,-0.09 0.21,-0.16 0.23,0.04 0.29,0.15 0.09,-0.17 -0.23,-0.27 -0.07,-0.23 -0.19,-0.43 -0.11,-0.27 v -0.26 l 0.07,-0.22 -0.05,-0.14 v -0.2 l -0.19,0.1 -0.21,0.07 -0.14,-0.09 -0.06,-0.16 -0.07,0.01 -0.11,-0.02 -0.08,0.02 -0.09,-0.33 -0.06,-0.01 -0.13,0.2 -0.14,-0.09 -0.3,0.06 -0.11,0.19 -0.27,0.02 -0.05,-0.34 0.19,-0.17 0.16,-0.1 -0.16,-0.23 -0.24,-0.31 -0.15,-0.11 -0.17,-0.22 0.3,0.16 0.29,0.23 0.21,0.22 0.15,-0.18 0.09,-0.26 0.01,-0.14 -0.01,-0.3 0.01,-0.29 -0.1,-0.24 -0.26,-0.29 -0.37,-0.3 -0.22,-0.1 -0.34,-0.23 -0.17,-0.09 -0.29,-0.26 0.12,0.01 0.22,0.06 -0.08,-0.18 -0.15,-0.17 0.19,0.06 0.22,0.08 -0.12,-0.14 0.06,-0.15 0.35,0.13 0.28,0.23 h 0.22 l 0.15,-0.07 v -0.08 l 0.14,-0.21 0.29,0.2 0.28,-0.01 0.12,-0.23 0.23,-0.12 0.32,0.03 0.3,0.18 0.33,0.31 0.27,0.24 0.28,0.25 -0.13,-0.23 -0.32,-0.34 -0.25,-0.23 -0.09,-0.33 -0.16,-0.19 -0.44,-0.14 -0.4,0.02 -0.38,-0.04 -0.31,-0.27 -0.18,-0.3 -0.25,-0.11 -0.14,-0.55 -0.29,-0.36 -0.3,-0.28 -0.17,-0.34 -0.19,-0.24 -0.24,-0.16 -0.2,-0.08 -0.18,-0.34 0.15,0.02 0.27,0.19 0.24,0.03 -0.01,-0.35 0.16,0.07 0.11,0.16 -0.02,0.17 0.06,0.16 0.22,0.17 0.19,0.16 0.23,0.14 0.23,0.11 0.19,0.05 0.26,-0.01 0.21,-0.03 0.22,-0.08 0.3,0.1 0.11,0.26 0.09,0.39 0.37,0.36 0.31,0.1 0.37,0.08 0.32,-0.1 0.41,0.1 0.32,0.08 0.28,0.2 0.24,0.13 0.32,0.14 0.19,0.1 -0.25,-0.27 0.07,-0.17 0.3,0.07 0.27,0.29 0.37,0.19 0.3,0.02 0.26,0.08 0.48,0.2 0.32,-0.04 0.34,0.12 0.41,0.28 0.3,0.2 0.41,0.34 0.24,0.46 -0.02,0.18 -0.63,-0.16 -0.24,0.1 -0.06,0.28 0.34,0.38 0.12,0.28 0.3,0.21 0.31,0.49 0.19,0.41 0.18,0.56 -0.19,0.68 -0.76,0.15 -0.84,-0.18 -0.52,-0.23 0.27,0.53 -0.1,0.54 -0.44,0.34 -0.54,0.16 0.32,0.02 0.46,0.08 -0.24,0.22 -0.19,0.31 0.02,0.25 -0.05,0.23 -0.23,0.17 -0.75,0.52 -0.59,0.27 -0.17,0.32 -0.15,0.41 -0.07,0.35 -0.06,0.36 -0.21,0.28 -0.31,0.26 -0.36,0.26 h -0.28 l -0.21,0.04 h -0.37 l -0.26,-0.21 -0.21,0.04 -0.23,0.1 0.23,0.17 0.15,0.29 0.47,0.12 0.31,0.17 -0.36,-0.01 -0.3,-0.02 -0.2,0.11 0.14,0.22 0.7,0.42 0.24,0.43 0.26,0.47 0.18,0.56 0.25,0.42 0.14,0.38 -0.57,0.16 -0.69,-0.11 -0.42,-0.13 -0.34,-0.07 -0.44,-0.09 -0.35,-0.13 -0.3,-0.23 -0.28,-0.23 0.04,0.09 0.24,0.49 0.27,0.31 -0.27,-0.18 -0.34,0.07 0.23,0.18 0.21,0.25 0.41,0.35 0.33,0.42 0.38,0.29 -0.03,0.21 0.06,0.26 -0.35,-0.01 -0.23,-0.1 -0.47,-0.24 -0.22,-0.01 -0.11,-0.01 -0.08,-0.11 -0.19,0.04 -0.22,-0.21 -0.07,0.06 -0.11,0.06 -0.21,-0.23 -0.05,0.21 -0.13,-0.2 v 0.15 l -0.15,0.11 -0.1,-0.05 -0.07,-0.13 -0.08,-0.26 0.01,-0.12 h -0.07 l 0.01,-0.21 0.06,-0.1 H 2543 l -0.16,-0.08 -0.02,-0.13 0.1,-0.2 h -0.15 l 0.02,-0.17 0.2,-0.07 0.29,-0.3 -0.19,0.13 -0.2,0.06 -0.16,-0.13 -0.06,-0.08 -0.09,0.02 -0.12,0.05 0.06,-0.2 0.13,-0.21 -0.04,0.01 -0.2,0.19 -0.11,0.06 -0.09,-0.13 0.13,-0.18 v -0.09 l -0.13,-0.06 0.09,-0.1 0.12,-0.05 0.08,-0.13 -0.11,0.01 -0.18,0.07 -0.09,-0.04 0.01,-0.11"
            />
            <path
              id="path3032"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2535.99,1211.54 0.33,0.08 0.26,0.11 -0.07,-0.16 -0.26,-0.21 -0.2,-0.18 -0.23,-0.19 0.12,-0.17 h 0.14 l 0.16,-0.02 0.33,0.21 0.23,0.12 0.23,0.09 -0.35,-0.27 -0.41,-0.4 0.13,-0.01 0.25,0.12 0.29,0.2 0.24,0.09 -0.19,-0.21 -0.28,-0.35 0.12,-0.05 0.26,0.16 h 0.12 l 0.02,-0.17 0.18,0.1 0.21,0.18 0.23,0.07 0.15,0.14 0.1,-0.01 0.09,0.14 0.2,-0.04 0.09,0.15 0.21,0.13 0.02,0.23 0.11,0.07 0.19,-0.06 0.15,0.17 0.16,0.13 0.03,0.12 0.17,0.05 0.19,0.15 0.24,0.31 0.33,0.06 0.22,0.08 0.11,0.19 0.1,-0.06 0.16,0.1 0.13,-0.07 h 0.3 l 0.24,0.14 -0.12,0.13 -0.12,0.12 0.1,0.15 0.19,0.2 0.02,0.17 0.04,0.29 0.16,0.26 0.09,0.36 0.02,0.29 -0.09,0.19 -0.06,0.31 0.02,0.25 -0.04,0.23 -0.1,0.21 -0.08,0.23 -0.03,0.15 -0.14,0.2 0.11,0.19 0.24,0.1 0.19,0.11 0.18,0.33 0.13,0.11 0.18,0.12 0.18,0.36 -0.05,0.31 -0.14,0.15 -0.17,-0.05 0.01,0.16 -0.02,0.12 -0.12,0.13 -0.06,0.18 -0.12,0.03 -0.01,0.18 -0.12,0.03 -0.01,0.25 -0.25,-0.06 h -0.25 l -0.21,-0.14 -0.25,-0.05 -0.21,-0.15 -0.15,-0.18 -0.25,-0.09 0.13,0.24 0.24,0.18 -0.16,0.15 h -0.28 l -0.11,0.02 -0.07,-0.15 -0.16,-0.16 0.05,-0.08 -0.12,-0.27 -0.06,0.04 0.03,0.15 -0.07,0.13 -0.11,-0.03 -0.16,-0.14 -0.16,-0.19 -0.13,0.1 -0.23,-0.1 -0.19,-0.09 -0.09,-0.2 -0.07,-0.2 0.18,-0.06 -0.23,-0.1 0.11,-0.13 -0.19,-0.1 -0.26,-0.13 0.11,-0.11 0.31,0.07 0.38,0.07 -0.03,-0.2 -0.17,-0.3 -0.24,-0.07 -0.13,-0.13 -0.16,-0.08 0.23,-0.04 0.04,-0.16 -0.18,-0.05 -0.35,-0.06 -0.26,-0.05 -0.23,-0.08 -0.18,0.11 -0.23,-0.08 -0.23,-0.02 -0.15,0.02 -0.14,-0.18 -0.19,-0.05 -0.13,-0.28 0.09,0.07 0.12,0.21 0.1,-0.14 v -0.25 -0.15 l -0.17,0.01 -0.12,-0.01 -0.14,-0.11 h 0.18 l 0.16,-0.12 0.2,0.06 0.28,0.11 0.17,-0.01 -0.15,-0.33 -0.24,-0.1 -0.1,-0.17 -0.19,-0.28 -0.23,-0.13 0.13,0.03 0.09,-0.25 0.21,0.03 v -0.16 l 0.17,-0.02 h 0.19 l 0.3,0.02 0.33,0.09 0.23,0.04 -0.08,-0.23 -0.28,-0.14 -0.18,-0.18 -0.12,-0.16 0.07,-0.1 v -0.12 l -0.13,-0.26 -0.16,-0.18 -0.15,-0.23 -0.26,-0.16 0.45,0.23 0.25,0.08 0.46,0.26 0.18,0.18 0.12,-0.15 -0.01,-0.07 -0.26,-0.17 -0.35,-0.15 -0.39,-0.12 -0.19,-0.19 -0.2,-0.16 -0.19,-0.1 0.17,-0.05 0.02,-0.1 0.09,-0.15 -0.19,-0.05 -0.25,-0.06 -0.19,0.04 -0.14,-0.16 -0.18,-0.2 0.28,0.06"
            />
            <path
              id="path3034"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.3,1226.15 -0.14,-0.12 -0.32,-0.18 -0.09,-0.26 -0.06,-0.09 -0.11,0.12 -0.17,-0.09 -0.02,-0.21 0.2,-0.05 -0.15,-0.13 -0.03,-0.11 0.16,-0.02 0.04,-0.08 -0.17,-0.18 -0.03,-0.11 0.13,-0.14 0.1,0.1 0.17,0.23 -0.04,0.08 0.04,0.1 0.14,-0.06 v 0.12 l 0.15,-0.02 0.13,0.16 0.16,0.2 v 0.33 l 0.23,0.33 0.03,0.33 -0.16,-0.08 -0.19,-0.17"
            />
            <path
              id="path3036"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2539.97,1224.08 0.05,-0.28 -0.05,-0.42 0.03,-0.32 0.08,-0.15 0.06,0.29 0.05,0.22 0.04,0.4 0.18,0.3 -0.02,0.17 -0.09,-0.02 v 0.16 l -0.11,-0.12 -0.29,-0.04 0.07,-0.19"
            />
            <path
              id="path3038"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2539.72,1222.76 0.1,-0.1 0.08,0.17 z"
            />
            <path
              id="path3040"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.43,1224.22 -0.17,0.16 -0.26,0.01 0.06,-0.27 -0.05,-0.11 -0.12,0.06 -0.06,-0.02 0.05,-0.23 0.29,0.09 0.13,0.01 0.12,-0.14 -0.07,-0.06 -0.05,-0.09 0.12,-0.14 0.39,0.15 0.16,0.07 0.05,-0.1 -0.12,-0.23 0.1,-0.04 0.12,0.25 0.19,0.11 0.06,0.22 -0.25,-0.06 -0.23,-0.01 -0.12,0.12 -0.14,0.12 -0.2,0.13"
            />
            <path
              id="path3042"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.68,1224.2 -0.03,0.28 -0.26,0.07 0.11,-0.24 0.18,-0.11"
            />
            <path
              id="path3044"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.32,1223.19 0.16,-0.11 0.06,0.15 z"
            />
            <path
              id="path3046"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.79,1222.96 -0.04,0.13 -0.13,-0.15 z"
            />
            <path
              id="path3048"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2542.16,1221.77 0.19,0.23 -0.14,0.18 H 2542 l -0.22,-0.18 0.05,-0.11 0.2,0.06 -0.14,-0.13 -0.17,-0.05 -0.42,-0.23 0.32,0.06 0.3,0.07 0.24,0.1"
            />
            <path
              id="path3050"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.81,1222.39 -0.3,-0.11 0.12,-0.16 0.17,0.1 0.01,0.17"
            />
            <path
              id="path3052"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.63,1220.17 0.2,0.24 -0.02,0.25 -0.02,0.26 -0.24,-0.11 -0.19,-0.17 -0.15,-0.34 0.15,0.03 0.13,0.08 -0.01,-0.27 0.15,0.03"
            />
            <path
              id="path3054"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.94,1220.64 0.12,0.25 0.25,0.43 0.08,0.31 -0.23,-0.32 -0.22,-0.24 -0.09,-0.2 0.09,-0.23"
            />
            <path
              id="path3056"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2543.03,1220.68 -0.16,-0.1 -0.05,-0.23 0.05,-0.12 0.13,-0.14 0.2,0.1 -0.05,0.25 -0.06,0.12 -0.06,0.12"
            />
            <path
              id="path3058"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2543.93,1217.48 0.24,0.25 0.03,0.32 -0.27,-0.19 -0.18,-0.6 0.18,0.22"
            />
            <path
              id="path3060"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2545.74,1227.94 0.09,0.21 -0.19,0.03 -0.07,-0.16 0.17,-0.08"
            />
            <path
              id="path3062"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2545.79,1228.35 0.19,-0.07 0.2,0.06 0.08,-0.12 -0.1,-0.29 0.13,0.18 0.11,0.21 0.07,0.14 h -0.18 l -0.24,0.01 -0.05,0.1 0.09,0.23 -0.02,0.13 -0.11,-0.14 -0.07,-0.08 -0.25,-0.3 0.15,-0.06"
            />
            <path
              id="path3064"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2546.34,1228.67 0.13,0.03 -0.03,0.17 z"
            />
            <path
              id="path3066"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2546.64,1228.73 0.16,0.13 -0.05,0.1 v 0.15 l 0.18,0.12 0.02,0.1 -0.27,-0.13 -0.12,-0.19 0.08,-0.28"
            />
            <path
              id="path3068"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2548.18,1231.6 0.19,-0.05 0.14,0.05 0.02,-0.4 -0.07,-0.27 0.16,0.29 0.2,0.32 -0.01,0.16 -0.04,0.12 0.12,0.26 -0.22,0.09 -0.02,0.13 -0.11,-0.08 -0.01,0.33 -0.16,-0.13 -0.22,-0.14 0.12,-0.12 0.12,-0.21 -0.15,-0.13 -0.2,-0.12 0.14,-0.1"
            />
            <path
              id="path3070"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2548.9,1232.36 0.03,0.19 -0.02,0.06 0.05,0.27 -0.14,-0.18 -0.1,-0.09 0.08,-0.27 0.1,0.02"
            />
            <path
              id="path3072"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2549.26,1233.03 -0.12,0.06 v -0.29 z"
            />
            <path
              id="path3074"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2540.75,1222.02 -0.2,-0.11 -0.04,-0.15 0.22,0.1 0.18,0.2 -0.16,-0.04"
            />
            <path
              id="path3076"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.07,1222.27 -0.03,-0.11 0.19,0.11 0.07,0.14 -0.23,-0.14"
            />
            <path
              id="path3078"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.4,1220.94 0.25,0.19 0.07,0.19 -0.21,-0.19 -0.11,-0.19"
            />
            <path
              id="path3080"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2541.89,1224.07 0.03,0.26 0.05,0.2 -0.1,-0.33 0.02,-0.13"
            />
            <path
              id="path3082"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2546.31,1229.12 -0.02,0.12 -0.11,-0.19 z"
            />
            <path
              id="path3084"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2558.09,1232.73 v 0.12 l -0.14,0.04 -0.16,-0.03 0.04,-0.13 0.18,0.09 0.08,-0.09"
            />
            <path
              id="path3086"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2558.34,1233.18 -0.16,0.06 -0.01,-0.2 0.05,-0.17 0.12,0.05 0.08,0.15 -0.08,0.11"
            />
            <path
              id="path3088"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2558.52,1233.18 0.1,0.19 0.13,0.2 -0.11,-0.02 -0.25,-0.17 0.13,-0.2"
            />
            <path
              id="path3090"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2557.95,1232.65 0.06,-0.2 0.04,0.16 z"
            />
            <path
              id="path3092"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2557.58,1234.13 0.15,-0.12 0.17,0.2 0.15,0.14 0.13,0.18 0.12,0.25 -0.23,0.1 -0.22,0.02 0.11,-0.1 0.05,-0.09 -0.14,0.04 -0.22,0.19 0.03,-0.14 0.11,-0.24 -0.15,0.17 -0.11,0.29 0.05,-0.27 0.13,-0.24 0.05,-0.19 -0.19,0.03 -0.1,0.17 0.11,-0.31 v -0.08"
            />
            <path
              id="path3094"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2557.83,1237.26 0.05,0.13 -0.26,-0.05 -0.14,-0.13 0.35,0.05"
            />
            <path
              id="path3096"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2558.75,1238.36 -0.06,0.14 -0.15,-0.15 z"
            />
            <path
              id="path3098"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2559.09,1238.73 -0.14,0.09 v -0.19 z"
            />
            <path
              id="path3100"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2562,1241.57 0.26,0.06 0.07,0.22 -0.5,-0.22 0.17,-0.06"
            />
            <path
              id="path3102"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2562.67,1242.03 0.31,0.11 0.34,0.07 0.4,0.17 -0.14,0.08 -0.27,-0.02 -0.22,-0.05 -0.18,-0.18 -0.24,-0.18"
            />
            <path
              id="path3104"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2563.32,1242.7 -0.07,0.11 -0.16,-0.14 -0.28,-0.14 0.29,0.06 0.22,0.11"
            />
            <path
              id="path3106"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2566.67,1246.3 -0.39,-0.33 0.23,0.16 0.18,-0.02 0.14,-0.04 0.04,0.2 -0.2,0.03"
            />
            <path
              id="path3108"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2567.91,1248.21 -0.15,-0.25 0.23,0.16 z"
            />
            <path
              id="path3110"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2568.89,1248.98 0.11,0.18 -0.29,-0.26 z"
            />
            <path
              id="path3112"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569,1249.61 -0.23,-0.24 -0.31,-0.3 0.39,0.23 0.15,0.31"
            />
            <path
              id="path3114"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.48,1249.55 -0.35,-0.18 0.33,0.08 z"
            />
            <path
              id="path3116"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.61,1249.86 -0.43,-0.1 0.53,0.06 z"
            />
            <path
              id="path3118"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.39,1253.27 0.26,0.21 -0.2,-0.05 -0.41,-0.25 0.35,0.09"
            />
            <path
              id="path3120"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2583.96,1262.17 0.14,-0.16 0.28,0.13 0.26,0.19 v 0.06 l -0.39,-0.11 -0.26,0.06 -0.21,-0.11 0.18,-0.06"
            />
            <path
              id="path3122"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2584.53,1262.61 -0.21,0.03 -0.46,-0.12 0.25,0.01 0.29,-0.03 0.31,0.05 -0.18,0.06"
            />
            <path
              id="path3124"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.51,1263.04 0.17,0.18 0.05,0.12 -0.18,-0.04 -0.09,0.05 -0.18,-0.1 -0.09,-0.12 -0.08,0.07 -0.05,-0.09 h -0.16 l -0.1,-0.06 -0.11,-0.21 0.11,0.01 0.25,0.11 -0.15,-0.33 0.21,0.05 0.13,0.14 0.02,0.07 0.25,0.15"
            />
            <path
              id="path3126"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2586.05,1263.83 -0.21,-0.16 0.04,-0.2 0.22,0.02 0.22,0.12 0.12,0.17 -0.14,0.1 -0.25,-0.05"
            />
            <path
              id="path3128"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2584.3,1263.33 -0.28,-0.15 -0.24,-0.11 -0.22,-0.25 0.19,0.03 0.17,0.07 0.17,0.1 0.34,0.12 0.16,-0.03 0.18,0.24 0.22,0.19 0.25,0.24 0.2,0.17 -0.29,-0.17 -0.33,-0.34 -0.11,-0.01 -0.25,0.15 -0.19,0.06 0.03,-0.15 v -0.16"
            />
            <path
              id="path3130"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2586.78,1264.34 0.14,-0.1 0.25,0.11 -0.29,-0.02 -0.1,0.01"
            />
            <path
              id="path3132"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2589.21,1265.31 0.09,0.19 -0.14,0.16 -0.18,0.03 -0.12,-0.05 0.19,-0.08 -0.12,-0.17 -0.2,0.04 -0.24,-0.09 0.02,-0.07 0.27,0.03 -0.13,-0.1 -0.19,-0.16 0.14,-0.08 0.21,0.17 0.3,0.1 0.1,0.08"
            />
            <path
              id="path3134"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2599.36,1264.8 0.35,0.05 0.2,-0.03 0.25,0.01 0.17,0.1 0.09,-0.02 0.13,0.09 0.06,0.18 -0.16,-0.13 -0.12,0.06 -0.22,-0.01 -0.1,0.13 -0.23,0.07 -0.15,-0.04 -0.07,0.01 0.02,0.07 -0.19,-0.07 -0.21,-0.13 0.18,-0.16 0.08,-0.13 -0.08,-0.05"
            />
            <path
              id="path3136"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2644.93,1275.17 h -0.41 l -0.27,0.02 -0.33,-0.22 0.43,0.08 0.51,-0.04 0.25,-0.1 0.05,-0.13 0.33,-0.17 -0.27,0.31 -0.29,0.25"
            />
            <path
              id="path3138"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2646.01,1276.41 0.51,0.14 0.37,0.15 0.56,0.26 -0.26,0.2 -0.75,0.21 -0.52,0.28 -0.48,0.06 -0.45,0.15 -0.49,-0.1 -0.45,-0.3 -0.21,-0.14 -0.17,-0.24 0.29,-0.22 0.58,-0.31 0.48,0.19 0.62,0.06 0.3,-0.22 0.07,-0.17"
            />
            <path
              id="path3140"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2631.68,1278.45 -0.15,-0.39 0.01,-0.45 0.21,-0.29 0.3,-0.07 0.34,0.01 0.33,0.15 0.17,0.23 0.1,-0.09 0.13,0.17 0.05,0.01 0.18,0.37 0.08,-0.17 0.19,-0.05 0.17,-0.31 0.36,0.19 0.34,0.1 0.42,0.24 h 0.15 l -0.17,-0.21 -0.09,-0.18 0.17,-0.25 0.2,-0.1 0.24,-0.04 h 0.26 l 0.11,0.09 0.24,0.16 0.07,-0.23 -0.26,-0.24 -0.25,-0.09 -0.22,0.02 0.01,-0.25 0.05,-0.13 0.16,-0.18 0.38,-0.06 0.27,0.05 0.32,0.14 0.25,0.11 h 0.25 l 0.25,-0.11 0.37,-0.05 0.32,0.05 0.06,0.28 0.28,0.12 0.24,0.1 0.63,-0.03 0.33,-0.04 0.26,0.23 0.2,0.1 0.39,0.16 0.12,-0.11 0.32,0.07 0.57,0.02 0.37,0.1 0.33,0.21 -0.33,0.15 h -0.51 l -0.65,0.2 -0.47,0.14 -0.43,0.18 -0.61,0.48 -0.44,0.36 -0.14,0.34 -0.14,0.11 -0.37,-0.05 0.19,0.29 0.15,0.34 0.21,0.19 -0.19,0.07 -0.07,0.14 v 0.13 l 0.14,0.1 -0.61,0.01 0.42,0.11 0.33,0.09 -0.43,0.15 -0.37,0.02 0.59,0.07 0.38,0.17 0.01,0.18 0.19,0.05 0.16,0.1 -0.11,0.02 -0.3,-0.02 h -0.23 l 0.29,0.12 0.58,0.15 0.27,0.19 0.08,0.2 -0.45,-0.06 -0.39,-0.11 0.06,0.13 0.55,0.16 0.45,0.14 -0.01,0.11 -0.48,-0.13 -0.36,-0.07 0.18,0.11 0.57,0.2 0.33,0.13 0.17,0.12 -0.6,0.06 -0.38,-0.05 -0.14,-0.17 -0.04,0.15 -0.11,0.07 -0.13,0.02 0.3,0.11 0.11,0.12 0.12,0.07 h 0.07 l 0.09,-0.24 0.35,0.02 0.38,0.08 0.3,0.06 0.09,0.15 0.02,0.23 0.2,-0.04 0.18,0.04 0.21,0.19 0.12,0.16 -0.14,0.12 -0.25,0.02 -0.14,0.07 -0.19,0.03 -0.37,0.11 0.25,0.07 0.28,-0.11 0.31,-0.02 0.43,-0.03 0.19,0.11 0.17,0.21 v 0.2 l -0.32,0.08 -0.37,-0.03 h -0.36 l 0.26,0.07 0.47,0.12 0.41,0.1 0.23,-0.11 0.3,0.12 -0.1,0.22 -0.05,0.11 -0.4,0.19 -0.03,0.11 -0.02,0.14 -0.02,0.16 0.28,-0.18 0.5,-0.12 0.45,0.19 0.18,0.24 0.42,0.34 0.28,0.15 -0.07,0.3 -0.21,0.11 -0.32,-0.01 -0.22,0.03 0.23,0.08 0.59,0.02 0.47,-0.03 0.27,0.18 0.1,0.2 0.06,0.2 -0.11,0.18 -0.17,0.16 0.27,-0.04 0.3,-0.08 0.4,-0.1 0.41,0.08 0.11,0.2 -0.23,0.02 h -0.23 l -0.15,0.04 -0.1,0.12 0.13,0.01 0.28,-0.09 0.19,0.18 0.28,-0.12 0.39,0.2 0.18,0.04 -0.03,0.13 -0.13,0.11 0.26,0.08 0.37,0.12 0.25,0.13 h -0.37 l -0.55,-0.16 h -0.24 l 0.1,0.12 0.48,0.12 0.27,0.21 0.24,0.14 0.31,0.07 0.26,0.31 0.49,0.25 0.3,0.35 0.16,-0.07 0.17,-0.07 0.26,0.36 0.24,0.12 0.28,0.23 0.6,0.22 0.69,0.31 0.51,0.29 0.65,0.23 0.44,0.28 0.39,0.16 0.61,0.19 0.59,0.23 0.47,0.25 0.61,0.22 0.94,0.46 0.7,0.26 0.62,0.37 0.77,0.27 0.89,0.36 0.63,0.33 0.68,0.37 0.54,0.21 0.44,0.33 0.43,0.36 0.36,0.27 -0.13,0.09 0.08,0.16 0.24,0.19 -0.11,0.13 -0.27,0.06 -0.06,0.1 -0.22,0.05 -0.25,0.02 -0.52,-0.07 -0.59,-0.09 -0.83,-0.24 -0.8,-0.35 -0.45,-0.2 -0.31,-0.22 -0.48,-0.28 -0.32,-0.18 -0.44,-0.16 -0.01,-0.18 0.31,-0.17 -0.25,-0.2 -0.38,-0.07 h -0.44 l -0.23,-0.22 -0.22,-0.13 -0.22,-0.22 -0.52,-0.04 -0.26,-0.24 -0.3,-0.13 -0.3,-0.1 -0.28,-0.16 -0.52,-0.18 -0.6,-0.16 -0.37,-0.18 -0.38,-0.18 -0.49,-0.24 -0.24,0.1 -0.26,-0.29 -0.42,0.07 -0.56,-0.07 -0.65,-0.15 -0.38,-0.03 -0.41,-0.15 -0.3,-0.12 -0.22,-0.19 -0.17,-0.13 0.23,0.02 h 0.27 l -0.17,-0.2 -0.55,-0.19 -0.13,-0.12 -0.37,-0.12 v 0.11 l 0.26,0.18 -0.08,0.04 -0.25,-0.06 -0.26,-0.07 0.18,0.14 -0.11,0.03 -0.29,-0.1 -0.23,-0.11 -0.32,-0.14 0.21,0.03 0.3,0.09 0.16,0.03 -0.24,-0.15 0.12,-0.04 0.27,0.04 0.02,-0.05 -0.2,-0.11 -0.37,-0.13 -0.19,-0.13 -0.4,-0.23 -0.27,0.08 -0.29,-0.08 -0.11,-0.18 -0.21,-0.08 -0.14,-0.09 -0.28,-0.13 -0.26,-0.07 -0.14,-0.18 -0.18,-0.15 -0.4,-0.15 -0.24,-0.12 -0.33,-0.15 -0.09,-0.12 0.27,0.09 0.17,0.02 -0.15,-0.15 -0.25,-0.12 -0.2,-0.05 -0.23,-0.11 -0.19,-0.11 -0.2,-0.12 0.14,-0.01 0.1,-0.12 h 0.19 l 0.24,-0.03 -0.19,-0.17 -0.38,-0.01 -0.53,-0.11 -0.3,-0.04 -0.31,-0.11 -0.32,-0.15 0.08,-0.07 0.24,0.02 -0.14,-0.19 -0.23,-0.07 -0.2,-0.14 -0.17,-0.23 -0.19,-0.1 -0.11,0.09 -0.19,0.05 -0.24,-0.06 -0.22,-0.02 h -0.18 l -0.27,-0.23 0.09,-0.06 0.27,0.06 -0.16,-0.21 0.27,0.06 0.22,0.03 0.22,0.1 0.22,0.02 0.14,-0.04 0.3,0.02 -0.17,-0.13 -0.35,-0.09 -0.36,-0.16 -0.21,-0.12 -0.21,-0.14 -0.18,-0.09 0.39,0.1 0.31,0.1 0.25,0.05 0.2,0.04 h 0.1 l 0.19,-0.14 0.3,0.11 0.21,-0.01 0.35,0.03 -0.43,-0.14 -0.28,-0.07 -0.38,-0.11 -0.34,-0.03 -0.41,-0.12 -0.29,-0.16 -0.21,-0.05 -0.26,-0.08 -0.19,-0.22 0.25,0.06 0.29,-0.04 0.22,0.05 0.21,-0.05 -0.32,-0.13 -0.31,-0.15 -0.26,-0.04 -0.26,-0.09 -0.26,-0.1 0.12,-0.07 h 0.27 l 0.24,0.05 0.25,-0.05 -0.2,-0.08 -0.37,-0.1 -0.23,-0.08 -0.29,-0.06 -0.22,-0.1 0.27,-0.04 0.28,0.09 0.29,-0.01 0.26,0.02 0.26,-0.06 -0.11,-0.07 -0.56,-0.04 -0.38,-0.06 -0.29,-0.03 -0.23,-0.12 -0.2,-0.14 -0.12,-0.04 -0.25,-0.2 0.1,-0.01 0.25,0.05 0.15,-0.13 -0.18,-0.04 -0.49,-0.21 -0.24,-0.05 -0.31,-0.19 -0.31,-0.22 -0.19,-0.21 -0.22,-0.06 -0.04,-0.12 0.26,-0.02 0.4,0.05 0.28,0.03 0.31,0.27 0.3,0.08 0.3,0.09 0.35,0.11 0.33,0.15 0.32,-0.02 -0.24,-0.14 -0.36,-0.14 -0.27,-0.14 -0.29,-0.05 -0.24,-0.15 -0.21,-0.16 -0.25,-0.14 -0.09,-0.09 0.04,-0.19 -0.27,-0.13 -0.1,-0.15 0.32,0.05 0.18,0.17 0.21,0.16 0.2,0.12 -0.18,-0.23 -0.22,-0.22 -0.22,-0.17 -0.31,-0.1 -0.66,-0.17 -0.35,-0.26 -0.31,-0.07 -0.2,-0.22 0.01,-0.11 0.18,-0.1 -0.3,-0.1 -0.16,-0.14 0.23,0.05 0.43,0.06 -0.13,-0.14 -0.55,-0.16 -0.53,-0.16 -0.37,-0.27 -0.19,-0.22 0.31,-0.02 0.35,0.06 0.3,0.08 0.43,0.18 -0.1,-0.17 -0.54,-0.19 -0.19,-0.12 0.28,0.06 0.45,0.18 -0.15,-0.16 -0.43,-0.26 -0.12,-0.23 -0.14,-0.26 -0.13,-0.28 -0.09,-0.23 -0.17,-0.13 -0.08,-0.06 -0.19,-0.21 -0.36,0.07 -0.36,-0.07 -0.23,-0.09 -0.33,-0.18"
            />
            <path
              id="path3142"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2634.44,1276.99 0.12,0.15 -0.3,-0.01 -0.23,-0.05 -0.15,0.1 -0.15,0.06 -0.2,-0.06 -0.1,0.05 -0.18,-0.07 -0.36,-0.25 0.23,-0.04 0.32,0.06 0.21,0.05 0.23,-0.24 0.13,-0.07 0.05,0.16 0.11,-0.21 0.11,-0.12 0.03,0.28 0.13,0.21"
            />
            <path
              id="path3144"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2664.71,1289.17 0.11,0.12 -0.02,0.17 0.18,-0.12 0.36,0.05 0.49,0.29 0.41,0.21 0.51,0.18 0.42,0.13 0.42,0.2 0.15,0.01 -0.18,0.2 h -0.17 l -0.28,0.02 -0.01,0.11 -0.2,0.1 h -0.52 l -0.75,-0.2 -0.38,-0.24 -0.32,-0.13 -0.22,-0.06 0.03,-0.28 -0.06,-0.23 -0.1,-0.12 -0.01,-0.37 0.14,-0.04"
            />
            <path
              id="path3146"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2686.97,1300.45 -0.19,0.18 0.13,0.12 0.22,-0.01 0.19,0.06 0.23,-0.24 0.07,0.32 0.09,-0.07 0.01,-0.33 -0.13,-0.06 0.17,-0.08 0.02,0.67 0.18,0.04 0.24,0.13 -0.16,0.12 -0.21,0.04 0.13,0.2 0.02,0.11 -0.43,-0.2 -0.06,-0.2 -0.09,-0.18 -0.23,-0.06 -0.16,0.03 0.27,0.27 -0.48,-0.42 -0.13,-0.25 0.3,-0.19"
            />
            <path
              id="path3148"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2687.28,1302.3 0.31,0.15 h 0.32 l 0.23,-0.02 -0.05,0.16 -0.38,-0.03 -0.28,-0.02 h -0.21 l -0.22,-0.24 h 0.28"
            />
            <path
              id="path3150"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2688.21,1302.74 0.28,0.08 0.65,0.14 0.4,-0.05 0.44,0.2 -0.27,0.03 -0.38,-0.1 -0.3,0.09 -0.36,-0.09 -0.46,-0.3"
            />
            <path
              id="path3152"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2719.14,1321.86 -0.21,0.03 -0.57,-0.18 -0.45,-0.12 -0.36,-0.17 -0.9,-0.23 -0.47,-0.19 -0.74,-0.21 -0.78,-0.23 -0.37,-0.2 -0.33,-0.2 -0.21,0.13 -0.3,-0.04 -0.06,-0.17 -0.29,-0.08 -0.1,-0.07 -0.22,-0.22 -0.32,-0.11 -0.25,-0.14 0.03,-0.16 0.32,0.05 0.3,0.03 -0.12,-0.15 -0.49,-0.13 -0.38,-0.21 -0.32,-0.09 -0.32,-0.15 -0.36,-0.29 -0.34,-0.2 -0.25,-0.21 -0.15,-0.16 -0.26,-0.21 0.36,0.13 0.22,0.25 0.24,0.2 0.32,0.15 0.32,0.17 -0.23,-0.35 0.24,0.05 v -0.13 l 0.1,-0.12 0.29,0.23 0.37,0.15 0.27,-0.04 v -0.26 l 0.07,-0.05 -0.13,-0.21 0.34,-0.04 0.28,-0.02 0.32,-0.19 0.79,0.19 0.48,0.26 0.45,-0.01 0.86,0.06 0.59,0.2 0.67,0.18 0.55,0.04 0.41,-0.1 0.61,0.04 0.99,0.21 1.12,0.26 1.85,0.59 0.86,0.38 0.41,0.24 -0.11,0.15 -0.32,0.11 -0.66,0.08 -0.32,0.12 -0.14,0.11 0.49,-0.01 0.37,-0.06 0.39,0.23 0.09,0.47 0.02,0.35 0.06,0.28 0.12,0.23 0.1,0.1 -0.01,0.25 -0.93,0.08 -0.61,-0.02 -0.42,-0.04 -0.58,-0.21 -0.23,0.02 -0.27,-0.1 -0.21,-0.12 0.21,-0.04 -0.04,-0.18 -0.27,-0.09 -0.4,-0.18 -0.31,-0.13 -0.26,0.15 -0.02,0.1 0.24,0.19 -0.41,0.04 -0.32,-0.06"
            />
            <path
              id="path3154"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2709.42,1319.61 0.78,0.18 -0.21,-0.14 -0.37,-0.06 -0.72,-0.1 z m -3.05,-0.82 0.18,0.03 0.45,0.06 0.48,0.17 0.42,0.04 0.37,0.03 0.31,0.05 -0.1,-0.14 -0.43,-0.1 -0.34,-0.17 0.32,0.04 0.63,0.2 0.47,0.04 0.59,0.06 0.8,0.14 0.65,0.11 0.56,0.2 0.29,0.13 0.41,0.26 0.36,0.21 0.47,0.15 0.96,0.32 0.76,0.31 1.25,0.37 1.05,0.29 0.61,0.17 0.39,0.19 0.27,0.2 -0.31,0.05 -0.07,0.1 -0.12,0.19 -0.01,0.14 0.24,0.29 0.23,0.09 h 0.26 l 0.45,0.19 0.19,0.08 0.24,0.09 0.1,0.13 -0.38,0.12 -0.92,-0.16 -0.36,0.05 h -0.29 l -0.41,-0.08 -0.25,0.05 -0.16,0.04 -0.1,0.13 -0.63,-0.04 -0.3,0.05 -0.35,-0.01 -0.2,0.05 h -0.49 l -1.07,-0.36 0.12,-0.04 0.24,-0.02 -0.51,-0.19 -0.09,-0.06 -0.53,-0.23 -0.68,-0.24 -0.48,-0.35 -0.72,-0.2 -0.33,-0.18 -0.44,-0.17 -0.37,-0.17 -0.27,-0.1 -0.06,-0.1 -0.04,-0.04 -0.35,-0.23 -0.24,-0.09 -0.1,-0.21 -0.22,-0.16 -0.19,-0.07 0.39,0.06 0.33,0.16 0.38,0.13 0.39,0.13 -0.2,-0.21 -0.48,-0.24 -0.2,-0.26 -0.06,-0.22 -0.82,-0.31 -0.39,-0.11 -0.32,-0.19 -0.26,-0.08 0.46,0.1 0.29,0.08 0.41,0.01 0.38,0.17 -0.55,-0.29 -0.66,-0.12 -0.38,-0.12 -0.32,-0.1 -0.28,-0.06 -0.32,-0.23"
            />
            <path
              id="path3156"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2706.04,1317.84 v 0"
            />
            <path
              id="path3158"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2709.95,1318.37 0.25,0.15 0.1,0.08 0.35,0.11 0.26,0.21 0.24,0.22 -0.48,-0.08 -0.39,-0.08 h -0.41 l -0.79,-0.16 -0.58,-0.19 -0.88,-0.1 -0.31,-0.05 -0.9,-0.26 -0.95,-0.28 0.54,0.11 0.04,-0.21 0.1,0.03 0.02,-0.12 -0.2,-0.08 -0.1,-0.08 0.26,-0.02 0.39,0.02 0.53,0.18 0.68,0.14 0.28,0.03 0.09,-0.12 -0.35,-0.09 -0.16,-0.07 0.29,-0.02 0.93,0.23 0.91,0.37 0.24,0.13"
            />
            <path
              id="path3160"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2706.52,1317.39 -0.26,-0.09 -0.37,-0.1 0.33,-0.06 0.56,0.15 0.43,0.07 -0.03,0.19 -0.66,-0.16"
            />
            <path
              id="path3162"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2707.6,1316.83 0.5,0.11 0.05,0.09 z"
            />
            <path
              id="path3164"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2708.87,1317.15 0.66,0.18 -0.66,-0.18"
            />
            <path
              id="path3166"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2704.36,1320.25 1.24,0.31 0.68,0.25 0.44,0.2 -0.7,-0.02 -1.16,-0.27 -0.67,-0.18 -0.65,-0.41 0.82,0.12"
            />
            <path
              id="path3168"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2711.44,1310.52 0.27,0.06 0.06,0.05 z"
            />
            <path
              id="path3170"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2713.75,1311.29 -0.21,-0.05 -0.2,-0.08 0.3,0.06 0.32,0.06 0.27,0.1 -0.22,-0.02 -0.13,0.14 -0.06,-0.11 -0.07,-0.1"
            />
            <path
              id="path3172"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2714.83,1311.56 -0.35,-0.1 h 0.21 l 0.29,0.09 0.24,0.07 -0.19,0.01 -0.2,-0.07"
            />
            <path
              id="path3174"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2716.01,1311.93 -0.22,-0.14 -0.17,-0.04 -0.24,-0.13 0.19,0.04 0.27,0.08 0.23,0.03 0.12,0.06 -0.18,0.1"
            />
            <path
              id="path3176"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2808.28,1274.55 0.23,0.22 -0.42,-0.21 -0.27,-0.1 -0.31,-0.27 -0.32,-0.37 0.18,0.08 0.27,0.23 0.17,0.06 0.24,-0.14 0.11,0.25 0.12,0.25"
            />
            <path
              id="path3178"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2810.66,1274.82 0.18,0.08 0.1,0.12 -0.29,0.03 -0.21,0.07 h -0.29 l -0.19,-0.16 -0.25,0.06 -0.18,-0.04 -0.27,-0.13 -0.11,-0.21 -0.2,-0.16 -0.21,-0.29 -0.01,-0.47 0.15,0.32 0.15,0.12 0.29,-0.06 0.15,-0.23 0.1,-0.21 0.14,-0.23 0.1,0.18 0.25,0.28 0.18,0.22 0.24,0.05 v 0.3 l 0.01,0.2 0.17,0.16"
            />
            <path
              id="path3180"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2809.46,1272.88 0.11,0.12 -0.09,0.25 -0.06,-0.28 0.04,-0.09"
            />
            <path
              id="path3182"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2811.23,1275.11 0.36,0.13 -0.36,-0.13"
            />
            <path
              id="path3184"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2538.01,1252.23 0.75,0.5 0.46,0.25 -0.19,0.2 -0.46,-0.33 -0.61,-0.4 -0.29,-0.44 0.34,0.22"
            />
            <path
              id="path3186"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2540.05,1233.72 0.34,0.13 0.16,0.06 0.2,-0.21 0.12,-0.01 -0.18,0.29 0.15,0.07 h 0.17 l -0.01,0.22 0.18,-0.02 0.17,0.2 0.15,0.08 0.05,0.32 -0.05,-0.14 -0.2,-0.07 -0.14,0.12 -0.07,-0.23 -0.12,0.13 v -0.19 l -0.14,0.13 v -0.15 l -0.2,-0.04 -0.19,-0.04 -0.21,-0.05 -0.04,-0.17 -0.11,0.14 -0.13,-0.02 -0.08,-0.27 0.18,-0.28"
            />
            <path
              id="path3188"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2540.95,1233.32 0.01,0.22 -0.16,0.03 h -0.17 l 0.1,-0.14 0.22,-0.11"
            />
            <path
              id="path3190"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2540.55,1232.98 0.08,-0.17 0.18,-0.22 0.14,-0.07 -0.04,0.25 -0.14,0.16 -0.22,0.05"
            />
            <path
              id="path3192"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2539.75,1233.82 -0.13,-0.02 0.13,0.02"
            />
            <path
              id="path3194"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2620.57,1295.81 0.54,0.12 0.44,0.09 0.36,0.16 0.42,0.14 -0.12,-0.28 0.48,0.14 0.29,0.2 0.28,0.17 0.48,0.18 0.37,0.18 0.36,0.05 -0.15,0.06 0.15,0.16 0.27,0.1 0.19,0.26 0.47,0.03 0.19,-0.05 0.29,-0.04 0.47,0.13 0.41,0.07 -0.07,0.12 -0.17,0.14 -0.26,0.06 -0.66,-0.19 -0.46,-0.04 -0.92,-0.3 -0.9,-0.49 -0.98,-0.37 -0.88,-0.34 -0.81,-0.28 -0.08,-0.18"
            />
            <path
              id="path3196"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2626.14,1297.33 -0.53,-0.15 -0.57,-0.23 -0.39,-0.22 0.46,0.13 0.48,0.15 0.38,0.05 -0.04,-0.06 -0.33,-0.15 -0.47,-0.15 -0.23,-0.09 0.23,-0.02 0.38,0.12 0.16,-0.01 -1.05,-0.36 h -0.32 l -0.33,-0.02 -0.29,-0.15 -0.32,-0.18 0.21,-0.01 0.32,-0.16 0.41,0.16 0.35,0.27 0.41,0.11 0.49,0.1 0.2,-0.04 -0.29,-0.16 -0.23,-0.15 -0.24,-0.22 0.49,0.14 0.28,0.24 0.32,0.05 h 0.23 l -0.05,0.15 0.24,0.15 0.34,-0.01 0.5,0.14 -0.26,0.01 0.02,0.09 v 0.13 l -0.36,-0.16 -0.28,0.01 0.13,0.1 0.29,0.14 0.3,0.17 0.53,0.08 0.76,0.23 0.01,0.18 0.05,0.12 0.44,0.17 0.88,0.31 0.87,0.26 0.4,0.29 0.48,0.22 0.28,0.26 -0.34,-0.05 -0.3,0.02 -0.47,-0.17 -0.44,-0.14 -0.71,-0.25 0.13,0.14 0.45,0.19 0.45,0.21 -0.12,0.12 -0.45,-0.12 -0.73,-0.3 -0.28,-0.03 0.47,0.21 -0.22,-0.01 -0.43,-0.18 -0.42,-0.2 -0.4,-0.29 -0.5,-0.18 -0.3,-0.19 0.26,0.05 0.29,-0.01 0.53,0.17 -0.11,-0.12 -0.49,-0.28 -0.2,-0.31 -0.47,-0.09 -0.29,-0.14 -0.65,-0.08"
            />
            <path
              id="path3198"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2628.05,1296.66 0.37,0.09 -0.31,0.01 -0.3,-0.16 0.24,0.06"
            />
            <path
              id="path3200"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2629.57,1297.47 -0.44,-0.14 -0.41,-0.1 -0.52,-0.24 0.22,-0.01 0.38,-0.04 0.33,0.15 0.36,0.23 0.08,0.15"
            />
            <path
              id="path3202"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2630.96,1297.47 -0.38,0.02 -0.3,-0.2 -0.27,-0.24 -0.32,-0.17 0.45,0.12 0.54,0.12 0.56,0.13 -0.18,0.05 -0.1,0.17"
            />
            <path
              id="path3204"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2633.37,1298.67 -0.4,-0.18 0.76,0.06 0.83,0.25 0.42,0.05 0.29,0.17 0.33,0.14 -0.14,0.07 -0.34,0.02 -0.31,-0.02 -0.2,0.08 -0.4,-0.23 -0.34,-0.08 0.04,-0.08 -0.26,-0.13 -0.28,-0.12"
            />
            <path
              id="path3206"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2633.32,1298.78 -0.07,0.04 -0.36,-0.14 z"
            />
            <path
              id="path3208"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2634.6,1299.8 -0.05,-0.19 0.24,-0.06 0.25,0.23 -0.11,0.08 -0.22,0.1 -0.36,-0.14 0.25,-0.02"
            />
            <path
              id="path3210"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2629.71,1299.46 0.26,0.13 0.24,0.17 0.38,0.17 -0.11,0.1 -0.57,-0.14 -0.23,-0.18 0.03,-0.25"
            />
            <path
              id="path3212"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2636.09,1299.41 0.19,-0.14 0.31,0.26 -0.21,0.05 -0.29,-0.17"
            />
            <path
              id="path3214"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2635.72,1299.39 0.24,0.09 -0.12,0.01 z"
            />
            <path
              id="path3216"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2636.01,1299.82 0.43,0.06 0.26,0.17 -0.15,0.05 -0.29,-0.01 v 0.12 l -0.41,-0.08 -0.13,-0.18 -0.07,-0.23 0.36,0.1"
            />
            <path
              id="path3218"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2637.26,1300.2 0.31,0.07 0.2,0.15 -0.25,-0.03 -0.42,-0.07 -0.08,-0.19 -0.24,-0.23 0.24,0.07 0.3,0.08 -0.06,0.15"
            />
            <path
              id="path3220"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2638.19,1299.95 0.38,0.19 -0.18,0.01 -0.34,-0.13 -0.27,-0.18 0.41,0.11"
            />
            <path
              id="path3222"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2638.09,1300.16 0.1,0.18 -0.23,-0.11 -0.25,-0.16 0.38,0.09"
            />
            <path
              id="path3224"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2641.44,1300.93 -0.23,0.02 -0.63,-0.2 -0.48,-0.11 -0.36,-0.05 -0.33,-0.2 0.2,-0.12 0.01,-0.14 -0.29,-0.13 -0.33,-0.26 0.59,0.19 1.01,0.21 0.69,0.22 0.06,0.21 0.02,0.23 0.07,0.13"
            />
            <path
              id="path3226"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2643.59,1301.49 0.43,0.19 0.63,0.21 0.49,0.21 -0.46,-0.02 -0.62,-0.11 -0.92,-0.15 -0.93,-0.27 -0.89,-0.25 0.21,-0.11 0.13,-0.23 0.1,-0.21 0.44,-0.01 0.65,0.14 0.29,0.17 0.54,0.2 -0.22,0.01 -0.36,0.04 0.49,0.19"
            />
            <path
              id="path3228"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2635.97,1300.63 0.56,0.18 0.68,0.12 0.54,0.09 0.8,0.26 0.48,0.13 -0.17,0.02 -0.86,-0.09 -0.53,-0.19 -0.58,-0.1 -0.62,-0.2 -0.3,-0.22"
            />
            <path
              id="path3230"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2637.25,1301.48 0.87,0.11 0.52,0.01 0.5,0.03 0.39,0.07 0.54,0.09 0.51,0.14 0.02,-0.09 -0.41,-0.04 -0.52,-0.15 -0.42,-0.2 -0.25,-0.16 -0.2,-0.22 0.62,0.08 0.63,0.15 0.63,0.26 0.44,0.13 0.25,0.21 0.83,0.22 0.4,0.23 -0.1,0.06 0.16,0.09 0.22,-0.04 0.92,0.23 0.68,0.22 0.23,0.22 -0.32,0.03 -0.89,-0.27 -0.34,-0.09 -0.24,-0.19 -0.12,0.09 0.27,0.13 0.2,0.08 0.06,0.09 -0.08,0.08 0.3,-0.02 0.65,0.3 0.15,0.21 -0.05,0.13 -0.35,-0.09 -0.38,0.05 -0.41,-0.23 -0.25,-0.21 -0.22,-0.11 0.19,-0.07 -0.06,-0.08 -0.39,-0.06 h -0.28 l -0.86,-0.15 -0.42,-0.07 -0.94,-0.19 -0.33,-0.1 0.31,-0.01 0.97,0.11 h 0.85 l -0.49,-0.26 -0.44,0.11 -0.71,-0.12 -0.97,-0.16 -0.93,-0.23 -0.39,-0.02 -0.58,-0.08 -0.28,-0.21 -0.21,-0.16 0.52,0.12"
            />
            <path
              id="path3232"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2639.87,1300.69 -0.26,-0.01 -0.62,-0.19 0.34,0.06 0.54,0.14"
            />
            <path
              id="path3234"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2645.34,1301.32 0.85,0.23 -0.1,0.1 -0.83,-0.21 -0.78,-0.29 0.86,0.17"
            />
            <path
              id="path3236"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2647.95,1304 -0.78,-0.26 -0.74,-0.13 -0.55,-0.26 -0.24,-0.26 -0.23,-0.29 -0.05,-0.31 0.28,0.05 0.45,-0.05 0.78,0.36 0.68,0.11 1.2,0.25 0.56,0.33 0.39,0.3 0.57,0.37 0.21,0.29 -0.2,0.2 -0.66,-0.12 -0.62,-0.24 -1.05,-0.34"
            />
            <path
              id="path3238"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2646.71,1304.12 -0.12,-0.14 0.3,0.04 0.9,0.17 1.1,0.42 0.39,0.23 -0.09,0.23 -1.11,-0.36 -0.87,-0.35 -0.5,-0.24"
            />
            <path
              id="path3240"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2644.68,1304.04 0.34,-0.02 0.82,0.27 0.23,0.18 -0.48,-0.13 -0.49,-0.1 -0.42,-0.2"
            />
            <path
              id="path3242"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2643.88,1304.16 0.32,-0.01 0.41,0.09 0.7,0.25 -0.15,0.11 -0.38,-0.03 -0.55,-0.11 -0.35,-0.3"
            />
            <path
              id="path3244"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2646.78,1304.78 0.74,0.29 -0.58,-0.12 -0.74,-0.26 0.58,0.09"
            />
            <path
              id="path3246"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2638.62,1302.47 0.43,0.01 0.91,0.25 0.19,-0.08 0.65,0.28 0.55,0.25 0.54,0.19 0.02,-0.07 -0.66,-0.29 -0.06,-0.14 0.66,0.19 0.81,0.22 0.01,0.17 0.31,0.12 -0.07,0.06 -0.65,-0.18 -0.11,0.04 0.61,0.18 -0.28,0.06 -0.75,-0.17 -0.74,-0.11 -0.9,-0.17 0.02,-0.19 -0.06,-0.14 -0.87,-0.16 -0.5,-0.11 -0.17,-0.13 0.11,-0.08"
            />
            <path
              id="path3248"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2641.32,1303.73 0.92,0.16 0.74,0.11 0.86,0.3 -0.22,0.13 -0.6,-0.16 -0.69,-0.03 -0.69,-0.22 -0.58,-0.13 -0.18,-0.15 0.44,-0.01"
            />
            <path
              id="path3250"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2644.28,1304.93 -0.5,-0.11 -0.33,-0.19 0.53,0.09 0.3,0.21"
            />
            <path
              id="path3252"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2643.29,1304.92 1.06,0.34 0.96,0.36 -0.22,0.1 -0.32,-0.06 -0.96,-0.31 -0.74,-0.21 -0.27,-0.2 0.49,-0.02"
            />
            <path
              id="path3254"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2642.82,1301.97 0.03,0.17 -0.64,-0.25 -0.58,-0.19 0.52,0.03 0.67,0.24"
            />
            <path
              id="path3256"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2644.41,1302.46 -0.05,0.09 -0.52,-0.25 z"
            />
            <path
              id="path3258"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2652.79,1305.68 -0.71,-0.27 -0.41,-0.25 -0.41,-0.19 -0.34,-0.17 0.4,-0.02 0.68,-0.02 1.24,0.42 1.1,0.34 1.02,0.44 0.63,0.38 0.08,0.2 0.01,0.16 0.05,0.21 -0.17,0.04 -0.37,0.04 -0.86,-0.19 -0.59,-0.29 -0.33,-0.49 -1.02,-0.34"
            />
            <path
              id="path3260"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2650.06,1306.35 0.49,0.07 0.09,0.13 -0.41,-0.04 -0.46,-0.17 0.29,0.01"
            />
            <path
              id="path3262"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2650.76,1306.81 0.48,0.04 0.86,0.15 1.05,0.34 0.18,0.29 -0.91,-0.25 -1.03,-0.25 -0.92,-0.32 h 0.29"
            />
            <path
              id="path3264"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2646.71,1302.05 0.18,0.13 -0.3,-0.07 -0.15,-0.14 0.27,0.08"
            />
            <path
              id="path3266"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2566.03,1276.62 0.68,-0.3 0.66,0.03 0.51,-0.31 0.35,0.09 -0.46,0.33 -0.55,0.15 -0.54,0.29 -0.3,0.18 -0.64,-0.13 0.29,-0.33"
            />
            <path
              id="path3268"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2571.1,1275.16 0.13,0.03 -0.13,-0.03"
            />
            <path
              id="path3270"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2566.07,1278.54 0.31,-0.01 0.08,-0.27 0.25,-0.13 0.18,-0.2 0.41,0.09 0.2,0.12 -0.07,0.21 -0.13,-0.04 0.18,0.1 0.15,-0.04 0.15,-0.04 0.09,0.13 0.2,0.1 0.06,-0.08 -0.15,-0.16 -0.22,-0.21 -0.11,-0.18 0.31,-0.02 0.14,-0.08 0.46,0.13 0.03,-0.15 -0.52,-0.1 -0.54,-0.06 -0.41,-0.13 0.22,-0.09 0.35,0.07 0.36,0.03 -0.32,-0.14 -0.17,-0.24 0.24,-0.04 0.34,-0.06 0.42,0.08 0.18,-0.1 0.63,0.17 0.11,-0.02 -0.44,-0.13 -0.34,-0.14 0.05,-0.08 0.14,-0.06 0.3,0.04 0.2,-0.1 0.32,-0.09 0.73,0.15 0.44,0.26 0.42,0.15 0.09,0.12 0.07,0.17 0.5,0.18 -0.05,0.11 -0.22,-0.09 v 0.14 l 0.2,0.1 -0.07,0.13 -0.02,0.18 0.21,0.15 0.21,0.08 0.11,-0.16 0.3,0.03 0.23,0.27 0.13,0.23 0.23,0.05 0.07,-0.17 -0.05,-0.22 -0.29,-0.21 0.07,-0.17 0.32,0.02 0.6,0.21 0.24,0.16 0.34,0.19 0.21,0.37 h 0.33 l 0.23,0.04 -0.15,-0.15 -0.17,-0.14 -0.21,-0.21 -0.13,-0.18 0.21,0.07 0.09,-0.05 0.31,0.03 -0.27,-0.14 -0.34,-0.09 -0.38,-0.13 -0.57,-0.19 -0.09,-0.19 -0.23,-0.11 -0.41,-0.16 -0.32,-0.21 -0.11,-0.17 -0.48,-0.11 -0.58,-0.16 v -0.13 l 0.06,-0.13 -0.25,0.1 -0.32,0.01 -0.27,-0.14 -0.22,-0.07 0.05,-0.19 0.06,-0.2 0.2,-0.08 v -0.16 l 0.46,0.19 0.62,0.17 0.38,0.09 0.58,0.22 0.57,0.2 0.36,0.05 0.44,0.15 0.55,0.24 0.47,0.18 0.09,-0.09 -0.32,-0.12 -0.64,-0.21 -0.62,-0.28 -0.67,-0.22 -0.48,-0.23 -0.35,-0.14 0.12,-0.07 0.3,0.01 0.35,0.14 0.31,0.03 0.29,0.06 h 0.25 l 0.23,-0.01 -0.19,-0.02 -0.38,-0.05 -0.35,-0.13 -0.46,-0.1 -0.39,-0.13 -0.17,-0.2 -0.14,0.12 -0.2,0.05 -0.44,-0.15 -0.29,-0.11 -0.09,-0.06 0.31,-0.02 0.24,-0.08 -0.28,-0.1 0.15,-0.08 0.24,-0.13 0.44,-0.03 0.51,0.06 0.26,-0.15 0.35,-0.02 0.49,0.13 0.14,0.12 0.05,0.08 0.2,0.06 0.16,-0.03 0.21,-0.01 0.24,0.08 0.19,0.02 -0.24,-0.2 -0.07,-0.12 -0.17,0.02 -0.23,-0.02 -0.21,-0.06 -0.18,-0.15 -0.22,-0.06 -0.15,-0.09 h 0.2 l 0.28,-0.03 0.35,-0.08 h 0.3 l 0.15,-0.2 h 0.25 l 0.33,0.07 0.3,0.16 0.17,0.21 -0.01,0.17 -0.21,-0.05 -0.03,0.14 0.21,0.11 0.13,0.12 0.17,0.19 -0.17,0.14 -0.11,0.04 0.19,0.08 0.2,0.16 0.15,0.25 0.12,0.29 0.12,0.19 0.19,0.22 0.3,0.14 0.38,0.12 0.22,0.19 0.08,0.23 0.03,0.14 -0.02,0.26 -0.03,0.17 0.11,0.14 v 0.17 l 0.31,0.15 0.35,0.05 0.26,0.25 -0.11,0.11 0.16,0.11 -0.08,0.09 -0.07,0.1 0.15,0.09 -0.04,0.11 -0.06,0.12 0.23,0.13 0.39,0.11 0.33,0.13 0.04,0.13 0.02,0.12 0.99,0.37 0.43,0.18 0.54,0.19 0.37,0.08 0.06,-0.08 -0.15,-0.16 -0.24,-0.15 -0.34,-0.13 -0.37,-0.15 -0.26,-0.09 -0.18,-0.1 0.18,0.01 0.39,0.09 0.2,-0.22 0.17,-0.02 0.2,-0.13 0.53,0.17 0.53,0.18 0.47,0.15 0.38,0.16 v 0.23 l -0.15,0.13 -0.22,0.16 -0.17,0.01 -0.19,-0.01 -0.31,-0.13 -0.19,0.01 -0.07,0.13 0.16,0.18 0.11,0.17 -0.23,-0.02 -0.46,-0.04 -0.56,-0.07 -0.32,-0.01 -0.23,0.01 0.02,0.09 0.29,0.13 0.28,0.11 -0.15,0.04 -0.25,-0.01 -0.4,-0.14 -0.17,-0.05 0.07,-0.1 0.04,-0.11 -0.28,-0.05 -0.14,0.1 -0.35,0.11 -0.35,-0.04 -0.37,-0.13 -0.29,-0.07 -0.16,0.11 -0.36,-0.1 v 0.14 l 0.23,0.18 0.09,0.17 -0.12,0.08 -0.1,0.12 -0.22,0.04 h -0.39 l -0.25,-0.06 -0.16,-0.14 -0.07,-0.24 -0.19,-0.13 -0.17,-0.14 -0.01,0.18 0.01,0.17 -0.03,0.11 0.17,0.14 0.18,0.12 0.04,0.19 -0.41,0.05 -0.23,0.02 -0.44,0.02 -0.34,-0.04 -0.24,-0.1 -0.07,-0.13 -0.16,-0.1 -0.18,0.12 -0.17,0.09 h -0.45 l -0.28,-0.12 -0.14,-0.21 0.08,-0.13 -0.01,-0.06 -0.28,-0.1 -0.29,-0.13 0.07,-0.24 0.13,-0.13 0.13,-0.17 0.06,-0.24 0.23,-0.29 0.16,-0.16 0.18,-0.2 0.17,-0.09 0.19,-0.09 -0.07,-0.15 -0.27,-0.03 -0.24,0.08 -0.2,0.19 -0.14,0.07 -0.11,0.03 -0.15,-0.07 -0.12,-0.13 -0.01,0.19 0.01,0.14 -0.14,0.03 -0.15,0.05 -0.11,0.1 -0.09,0.15 -0.19,0.07 -0.11,0.16 -0.22,0.03 -0.21,0.16 h -0.25 l -0.26,-0.03 -0.3,-0.26 -0.17,-0.18 -0.14,-0.13 -0.2,-0.13 -0.14,-0.12 0.14,-0.06 0.11,-0.08 0.11,-0.11 -0.06,-0.2 -0.21,-0.12 h -0.18 l 0.11,0.24 -0.25,0.01 -0.27,0.09 -0.18,-0.16 -0.19,0.02 -0.04,0.08 0.14,0.14 -0.37,-0.03 -0.59,-0.27 -0.37,-0.11 -0.06,0.09 0.24,0.09 0.33,0.2 0.24,0.16 0.58,0.24 0.53,0.15 0.26,0.14 0.07,0.17 -0.4,-0.06 -0.75,-0.29 -0.45,-0.2 -0.61,-0.11 -0.33,-0.04 0.02,-0.18 v -0.13 l -0.24,-0.14 -0.28,0.2 -0.52,-0.1 -0.49,-0.2 0.04,-0.11 0.04,-0.15 -0.27,-0.05 -0.25,0.15 -0.35,-0.05 0.14,-0.18 0.16,-0.1 -0.05,-0.13 -0.29,-0.13"
            />
            <path
              id="path3272"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2577.34,1282.81 0.41,0.09 0.49,0.16 0.27,0.07 -0.16,-0.2 -0.29,-0.2 -0.45,-0.11 -0.23,-0.15 0.13,-0.05 0.32,-0.01 0.39,-0.02 0.75,0.15 0.86,0.22 0.93,0.35 0.95,0.34 0.72,0.22 0.13,-0.23 -0.65,-0.23 -0.56,-0.17 -0.39,-0.13 0.28,-0.06 0.38,0.09 0.35,0.07 0.04,-0.09 -0.53,-0.15 -0.57,-0.09 -0.64,-0.09 -0.46,-0.13 -0.21,-0.1 0.26,-0.04 0.41,-0.02 0.6,0.09 0.51,0.05 1.24,0.26 1.25,0.41 0.53,0.06 0.29,-0.12 1.73,0.43 0.48,0.29 0.48,0.18 0.35,0.14 0.69,0.16 0.69,0.42 0.1,0.23 -0.17,0.12 0.29,0.16 0.76,0.34 0.39,0.3 0.28,0.17 0.33,0.15 0.16,0.16 -0.18,0.04 0.02,0.1 0.19,0.07 0.08,0.16 -0.24,-0.09 -0.27,0.11 -1.74,-0.39 -1.28,-0.23 -0.18,0.19 -0.15,-0.2 -0.36,-0.04 -0.07,0.09 -0.32,0.1 -0.11,-0.2 -0.05,-0.13 -0.15,-0.07 -0.12,-0.04 -0.31,-0.14 -0.07,-0.23 -0.42,-0.03 -0.14,0.15 -0.31,0.08 0.05,0.13 0.03,0.14 -0.41,-0.14 -0.23,0.03 0.02,-0.1 -0.02,-0.18 -0.11,-0.09 -0.07,-0.1 -0.12,0.09 -0.41,-0.06 0.22,-0.09 -0.06,-0.25 -0.04,-0.27 -0.05,-0.18 -0.34,-0.13 -0.27,0.16 -0.39,-0.02 0.07,0.06 -0.03,0.18 -0.24,-0.15 -0.16,0.03 -0.27,-0.19 -0.34,-0.06 -0.43,-0.17 -0.19,0.15 -0.3,-0.04 -0.22,0.12 -0.44,-0.04 -0.13,0.14 -0.14,0.03 -0.08,-0.18 -0.26,-0.01 -0.15,-0.06 -0.1,-0.1 -0.16,-0.04 0.3,-0.02 0.31,-0.04 -0.14,-0.17 -0.12,-0.14 -0.34,-0.04 -0.29,0.09 -0.29,-0.12 0.15,-0.12 0.15,-0.08 0.27,-0.03 -0.06,-0.08 -0.44,-0.12 -0.54,-0.01 -0.6,-0.18 -0.49,-0.11 -0.37,-0.16 0.23,-0.02 0.31,-0.05"
            />
            <path
              id="path3274"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2577.47,1283.37 0.56,0.13 -0.15,0.05 -0.37,-0.06 -0.34,-0.14 0.3,0.02"
            />
            <path
              id="path3276"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2580.22,1281.77 0.14,0.27 -0.41,-0.04 -0.4,-0.11 0.21,-0.06 0.41,0.12 0.07,-0.07 -0.02,-0.11"
            />
            <path
              id="path3278"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2586.67,1280.32 -0.56,-0.19 -0.51,0.03 -0.32,0.06 -0.21,0.18 0.04,0.18 -0.15,0.05 -0.61,-0.06 -0.64,-0.29 -1.05,-0.26 -0.72,-0.27 -0.32,-0.14 -0.19,-0.1 0.19,-0.09 0.38,-0.02 0.36,0.02 0.22,-0.05 -0.26,-0.28 -0.18,-0.21 -0.16,-0.25 -0.14,-0.22 -0.3,-0.21 0.22,-0.07 0.41,0.2 0.78,0.22 0.65,0.27 0.68,0.26 0.16,-0.2 -0.07,-0.25 -0.18,-0.22 0.06,-0.06 0.39,0.21 0.41,0.23 0.39,0.24 0.4,0.29 0.42,0.25 0.39,0.22 0.02,0.14 -0.02,0.15 0.04,0.13 -0.02,0.11"
            />
            <path
              id="path3280"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2578.65,1270.27 0.35,0.16 -0.03,0.29 -0.52,-0.14 -0.13,-0.17 0.33,-0.14"
            />
            <path
              id="path3282"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2590.21,1283.51 -0.05,-0.23 0.29,-0.03 0.53,0.17 -0.38,-0.01 -0.39,0.1"
            />
            <path
              id="path3284"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2592.56,1284.21 0.47,0.09 0.5,0.24 0.83,0.21 0.56,0.15 -0.35,-0.06 -0.93,-0.1 -0.59,-0.31 -0.49,-0.22"
            />
            <path
              id="path3286"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2592.63,1286.89 0.01,0.42 -0.43,-0.1 z"
            />
            <path
              id="path3288"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2598.71,1288.65 0.94,0.37 0.95,0.35 0.73,0.26 -0.26,0.19 -0.28,-0.15 -0.91,-0.25 -0.54,-0.13 -0.49,-0.23 -0.58,-0.42 0.44,0.01"
            />
            <path
              id="path3290"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2596.31,1285.52 -0.31,-0.12 0.31,0.12"
            />
            <path
              id="path3292"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2581.38,1285.23 -0.1,0.25 -0.15,-0.02 0.17,-0.14 -0.31,-0.14 0.39,0.05"
            />
            <path
              id="path3294"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2582.24,1285.51 -0.45,-0.17 0.45,0.17"
            />
            <path
              id="path3296"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2866.12,1347.66 -0.91,-0.05 0.91,0.05"
            />
            <path
              id="path3298"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2868.81,1349.06 -1.1,-0.57 1.1,0.57"
            />
            <path
              id="path3300"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2890.47,1351.24 1.63,0.33 -1.3,-0.14 -2.03,-0.63 1.7,0.44"
            />
            <path
              id="path3302"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2850.39,1343.04 h 1.11 l 1.33,0.09 1.31,0.39 1.46,-0.36 2.05,0.53 1.79,0.55 1.29,0.5 1.48,0.63 -0.5,0.38 -0.86,0.53 -0.86,-0.33 -0.94,-0.13 -0.99,-0.21 -1.53,-0.51 -1.46,0.36 -0.63,-0.37 -1.25,-0.36 -1.47,-0.2 -1.17,-0.35 -1.19,-1.16 1.03,0.02"
            />
            <path
              id="path3304"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2894.91,1351.29 c 0.13,-0.39 2.3,-0.61 3.22,0 l -0.77,-0.07 -2.17,0.21 -1.25,0.3 0.97,-0.44"
            />
            <path
              id="path3306"
              style={{
                fill: "#68ab30",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2797.61,1243.61 -0.23,-0.73 -0.48,-0.32 -0.48,0.34 v 0.54 l 0.03,0.52 0.48,0.51 0.49,-0.03 0.33,-0.14 z m -46.21,22.3 -0.22,-0.16 -0.22,-0.09 -0.17,-0.1 -0.33,-0.16 -0.15,0.04 -0.34,-0.07 -0.42,-0.14 -0.18,-0.37 -0.07,-0.22 -0.18,-0.08 -0.16,-0.13 -0.15,-0.1 -0.41,-0.19 -0.14,-0.1 -0.27,0.01 -0.11,-0.04 -0.07,0.18 -0.13,-0.03 -0.19,-0.11 -0.13,-0.25 -0.07,0.23 -0.18,-0.01 -0.23,-0.07 -0.15,-0.07 h -0.19 l -0.2,-0.08 -0.38,-0.13 -0.18,-0.32 -0.15,-0.13 -0.14,-0.08 -0.14,-0.03 -0.07,-0.11 -0.1,-0.08 -0.11,-0.09 0.09,-0.14 0.19,-0.07 0.14,-0.16 0.17,-0.08 -0.32,0.08 -0.25,0.09 -0.07,-0.26 -0.13,-0.35 0.22,-0.09 -0.16,-0.15 0.16,-0.04 0.08,-0.12 -0.08,-0.06 -0.14,-0.06 0.02,-0.15 0.02,-0.13 -0.1,-0.07 -0.14,-0.1 -0.05,-0.12 -0.08,-0.38 -0.03,-0.15 -0.14,-0.09 -0.08,-0.17 -0.1,-0.18 0.23,0.03 0.1,0.1 0.15,0.03 -0.26,-0.25 0.08,-0.15 0.3,0.12 0.29,0.17 -0.09,-0.13 -0.12,-0.05 -0.06,-0.09 -0.18,-0.14 -0.26,-0.21 -0.06,-0.08 -0.11,-0.05 -0.11,-0.07 v -0.06 l 0.19,0.04 0.3,0.08 -0.09,-0.07 -0.08,-0.14 -0.14,-0.12 -0.08,-0.14 -0.11,-0.12 -0.05,-0.13 -0.1,-0.11 -0.03,-0.08 -0.06,-0.05 -0.02,-0.07 -0.2,-0.1 -0.02,-0.11 -0.03,-0.13 0.08,-0.1 -0.11,-0.14 -0.07,-0.08 0.07,-0.09 -0.03,-0.09 0.01,-0.09 -0.03,-0.21 v 0.06 l -0.11,-0.13 -0.13,-0.13 0.22,0.06 0.18,-0.01 0.16,0.17 0.18,0.08 0.18,0.12 0.16,0.08 0.57,0.71 -0.05,0.06 0.06,0.11 0.15,0.15 0.07,0.11 0.07,0.09 0.13,0.19 v -0.01 -0.07 l 0.06,0.13 0.04,0.14 0.05,0.11 0.08,0.05 0.02,0.12 v 0.1 0.21 l 0.11,0.17 0.15,0.1 0.18,0.11 0.19,0.09 0.04,0.22 0.08,0.14 0.29,0.23 0.1,0.12 0.18,0.3 0.21,0.2 0.15,0.08 0.04,0.12 0.1,0.13 0.02,0.14 0.22,0.26 0.07,-0.19 0.08,-0.07 0.16,-0.04 0.19,0.05 -0.09,-0.12 -0.02,-0.15 0.08,-0.05 0.15,-0.12 -0.34,-0.05 -0.33,-0.28 -0.33,-0.25 -0.17,-0.27 -0.11,-0.31 -0.01,-0.26 -0.21,0.06 h -0.23 l -0.09,-0.28 0.28,-0.07 -0.07,-0.08 -0.12,-0.13 -0.24,-0.16 -0.04,-0.12 -0.11,-0.11 -0.23,-0.12 0.17,-0.3 -0.22,-0.31 -0.28,-0.23 -0.28,-0.34 -0.27,-0.22 -0.24,-0.25 -0.14,-0.13 -0.14,-0.06 -0.07,-0.06 -0.07,-0.02 -0.15,-0.18 -0.23,-0.01 -0.27,-0.14 -0.1,-0.2 -0.15,-0.1 -0.3,-0.13 -0.23,-0.13 -0.2,-0.02 -0.2,0.01 -0.02,-0.25 v -0.24 l -0.11,-0.13 -0.05,-0.09 -0.11,-0.05 -0.07,-0.13 -0.19,-0.12 -0.33,-0.14 v -0.2 l -0.13,-0.23 -0.1,-0.16 -0.13,-0.12 -0.22,-0.31 -0.2,-0.21 -0.04,-0.16 -0.09,-0.07 -0.04,-0.07 -0.16,-0.2 -0.17,-0.19 -0.07,-0.26 -0.33,-0.07 -0.13,-0.05 -0.1,-0.16 -0.05,0.06 -0.06,-0.02 h -0.12 l -0.16,-0.06 -0.09,-0.13 -0.14,-0.07 -0.07,-0.1 -0.07,-0.04 -0.15,-0.07 -0.15,-0.09 -0.13,-0.14 -0.25,-0.07 -0.26,-0.08 -0.27,0.04 -0.1,-0.07 -0.07,0.04 -0.12,-0.03 -0.3,-0.27 -0.09,-0.07 -0.11,-0.05 -0.06,-0.1 -0.1,-0.1 -0.09,-0.07 -0.07,-0.08 -0.12,-0.09 -0.04,-0.11 -0.23,-0.07 -0.13,-0.1 -0.15,-0.08 -0.1,0.01 -0.11,-0.05 -0.12,-0.02 -0.1,-0.17 h -0.12 l -0.14,-0.03 -0.13,-0.04 -0.09,-0.02 -0.14,-0.1 v -0.14 l -0.17,0.06 -0.14,-0.09 -0.17,-0.05 -0.02,-0.1 -0.13,-0.05 -0.07,-0.09 -0.06,-0.14 -0.1,0.13 -0.18,-0.08 -0.16,-0.06 -0.12,-0.26 -0.04,0.21 -0.12,-0.11 -0.08,0.03 -0.06,0.03 -0.15,-0.04 -0.05,-0.06 -0.1,-0.01 0.05,0.22 -0.13,-0.02 -0.06,-0.01 -0.06,0.04 -0.11,-0.08 -0.14,-0.12 0.02,0.14 -0.08,0.05 -0.08,0.03 -0.23,-0.04 -0.02,0.06 -0.05,0.04 h -0.03 -0.12 v 0.05 l -0.13,-0.01 -0.1,0.03 -0.1,-0.02 -0.13,-0.06 -0.08,0.18 -0.15,0.05 -0.05,-0.02 -0.07,-0.01 0.45,0.14 0.23,0.05 0.23,0.09 0.44,0.15 0.46,0.1 0.38,0.08 0.34,0.21 0.37,0.16 0.43,0.14 0.35,0.24 0.32,0.36 0.32,0.2 0.29,0.38 0.21,0.32 0.28,0.35 0.14,0.16 0.23,0.25 0.28,0.05 0.28,0.18 0.11,0.11 0.19,0.07 0.11,0.14 0.16,0.1 -0.16,0.14 -0.21,0.01 0.08,0.03 0.09,0.14 0.2,-0.19 0.22,0.22 0.17,0.29 0.16,0.25 -0.21,-0.14 -0.25,-0.08 0.16,0.22 0.2,0.22 0.12,0.15 0.17,0.16 0.25,0.18 0.27,0.12 0.18,0.19 0.18,0.16 0.26,0.2 0.13,0.14 0.09,0.28 0.07,0.32 0.25,0.16 0.22,0.16 0.44,0.14 0.35,0.4 0.2,0.58 0.15,0.25 0.14,0.28 0.16,0.16 0.13,0.23 0.09,0.22 0.18,0.15 0.28,0.58 0.11,0.39 0.07,0.19 0.1,0.19 0.23,0.26 0.27,0.21 0.09,0.46 -0.16,0.01 -0.14,-0.01 -0.04,0.07 -0.08,-0.05 -0.11,0.08 0.12,0.09 0.15,0.11 0.1,0.12 0.07,0.13 0.22,0.32 0.02,0.19 0.11,0.02 0.03,-0.04 0.19,0.08 0.15,0.23 0.18,0.18 0.13,0.13 0.06,0.08 0.17,0.11 0.23,0.13 0.2,0.06 0.21,0.16 0.12,0.08 0.06,0.09 0.18,0.2 0.26,0.11 0.19,0.1 0.18,0.1 0.29,0.18 -0.42,-0.38 -0.28,-0.31 0.19,0.03 0.18,0.05 0.12,0.06 0.11,0.03 0.09,-0.09 0.18,0.09 0.23,0.07 0.1,0.21 0.05,0.01 0.11,0.02 0.28,0.16 0.25,0.08 0.14,0.07 0.09,0.09 0.24,0.18 0.22,0.12 0.14,0.09 0.14,0.03 0.17,0.18 0.24,0.09 0.13,0.07 0.07,0.07 0.05,0.06 0.18,0.1 0.2,0.02 0.23,0.04 0.23,-0.08 0.16,-0.03 0.14,0.07 0.13,0.06 0.24,0.08 0.19,-0.05 h 0.21 l 0.21,0.05 z m -48.35,-45.82 -1,-0.13 -1.01,0.18 -0.47,0.26 1.44,0.62 0.91,-0.21 z m -1.16,-48.2 -0.16,0.06 -0.2,0.05 -0.1,0.08 0.41,0.01 z m -9.97,59.56 -0.38,0.2 -0.29,0.19 -0.27,0.16 -0.27,0.2 0.16,0.5 0.44,-0.32 0.55,-0.36 z m -4.29,-5.13 -0.21,-0.25 -0.24,-0.11 -0.31,0.29 -0.09,0.57 -0.32,0.38 -0.27,0.16 -0.45,-0.02 -0.51,0.04 -0.06,0.22 0.27,-0.07 0.39,0.01 0.45,0.01 0.62,-0.19 0.23,-0.02 0.35,-0.04 0.23,-0.48 z m -3.93,17.22 -0.24,-0.36 -0.18,-0.42 -0.19,0.1 0.04,0.47 0.06,0.19 0.31,0.32 z m -2.07,-17.02 -0.98,-0.39 -1.26,-0.06 -1.3,-0.08 -0.02,0.1 -0.64,-0.23 h -0.72 l -1.31,-0.3 -0.65,-0.33 -0.69,-0.4 -0.47,-0.47 -0.58,-0.24 -0.27,-0.67 -0.36,-0.5 0.46,-0.54 -0.5,-0.44 -0.58,0.35 -0.26,0.53 0.53,-0.04 v 0.71 l 0.35,0.37 0.32,0.54 0.46,0.35 0.31,0.49 0.42,0.18 0.45,0.03 0.52,0.22 0.48,0.2 0.21,0.13 0.2,0.08 0.05,0.19 0.14,0.1 0.3,-0.06 0.31,-0.07 0.31,-0.01 0.26,-0.09 0.28,-0.03 0.26,0.06 0.31,0.1 0.25,-0.1 0.33,0.07 0.28,0.03 0.29,-0.06 0.3,0.08 0.32,0.08 0.61,-0.08 0.28,-0.05 0.17,0.25 0.48,0.35 0.72,0.36 0.4,-0.07 z m -2.84,20.68 0.5,0.34 0.48,0.03 0.25,-0.23 -0.22,-0.4 -0.37,-0.06 -0.42,-0.24 -0.16,-0.06 -0.25,0.16 z m -14.12,-14.04 -0.38,-0.12 -0.28,-0.07 -0.43,-0.3 -0.44,-0.43 -0.38,-0.04 -0.09,0.41 0.18,0.31 0.23,0.22 0.49,0.06 0.3,0.21 0.48,0.2 z m -15.33,-13.22 -0.15,-0.12 -0.19,-0.12 -0.17,-0.01 -0.1,-0.22 -0.18,-0.25 -0.05,-0.33 -0.12,-0.19 -0.15,-0.26 -0.02,-0.34 0.1,-0.2 0.15,-0.23 0.17,-0.01 0.18,-0.13 0.16,-0.21 0.13,-0.12 0.09,-0.12 0.08,-0.29 -0.04,-0.14 -0.04,-0.09 -0.02,-0.08 -0.1,-0.1 -0.07,-0.08 -0.11,-0.08 -0.06,-0.08 -0.12,-0.03 -0.1,-0.03 -0.1,-0.04 -0.02,-0.15 0.03,-0.26 -0.03,-0.15 -0.09,-0.01 -0.19,0.01 -0.12,-0.04 -0.03,-0.16 -0.07,-0.14 -0.07,-0.18 -0.15,-0.12 -0.15,-0.21 -0.02,-0.27 -0.06,-0.26 -0.09,-0.03 -0.1,-0.04 -0.1,-0.02 h -0.04 l -0.05,-0.03 -0.09,-0.33 -0.25,-0.04 -0.23,-0.15 -0.22,0.07 -0.23,-0.04 -0.2,-0.09 -0.07,0.12 -0.1,0.12 -0.19,-0.01 -0.19,-0.04 -0.15,0.03 -0.15,0.12 -0.16,0.06 -0.23,-0.03 -0.17,0.06 -0.23,-0.01 -0.08,0.02 -0.1,0.02 -0.1,0.03 -0.02,0.07 -0.05,0.02 -0.17,0.07 -0.1,0.01 h -0.05 l -0.13,-0.02 0.07,0.27 0.03,0.51 -0.13,0.39 0.03,0.25 0.23,0.29 0.11,0.36 0.14,0.35 0.09,0.41 0.02,0.47 0.23,0.32 0.4,0.18 0.34,0.18 0.05,-0.18 0.02,-0.37 0.26,0.05 0.19,0.38 0.11,0.27 0.19,0.3 -0.03,0.43 -0.01,0.08 h 0.08 l 0.15,-0.12 v 0.32 l 0.24,0.14 0.05,-0.3 -0.19,-0.26 -0.01,-0.22 0.16,0.01 0.48,0.24 0.28,0.09 0.74,0.18 0.56,0.26 0.08,0.13 0.05,0.18 -0.45,0.22 h -0.32 l -0.1,0.01 -0.08,0.05 -0.23,-0.06 -0.11,-0.02 -0.08,-0.13 -0.1,-0.02 -0.11,0.03 -0.04,0.23 0.12,0.16 0.06,0.38 0.17,0.22 0.08,-0.27 0.13,-0.03 0.1,-0.05 0.07,-0.08 0.17,-0.05 0.11,0.09 0.15,0.11 0.07,0.35 0.23,-0.09 0.04,-0.35 0.12,-0.17 0.3,0.05 0.21,-0.08 0.2,0.14 0.05,0.16 0.11,0.03 0.02,-0.25 z m -5.91,-13.94 -0.22,0.14 -0.2,0.01 0.31,0.03 0.14,0.16 0.17,0.03 z m -0.76,1.77 -0.24,-0.28 -0.33,-0.15 -0.17,0.17 -0.13,0.02 -0.21,-0.19 -0.13,0.24 -0.16,0.08 -0.09,-0.21 0.02,0.59 0.18,0.5 0.16,0.24 0.09,0.01 0.19,0.24 0.33,-0.1 0.03,-0.38 0.16,-0.09 -0.06,-0.25 0.19,-0.1 z m -1.41,-3.73 -0.45,0.58 -0.36,0.51 -0.27,0.43 0.08,0.23 0.32,-0.25 0.29,-0.64 0.29,-0.47 z m -1.13,13.52 0.1,0.1 0.16,-0.46 -0.16,0.09 -0.13,0.04 z m -0.39,0.6 -0.11,-0.37 0.11,-0.25 0.17,-0.14 -0.32,0.16 -0.09,0.51 0.22,0.59 0.35,0.24 0.44,0.2 0.09,0.2 0.22,-0.14 -0.2,-0.15 -0.51,-0.28 -0.37,-0.31 z m -0.11,-13.03 -0.22,0.06 0.12,0.14 z m -0.4,0.78 -0.29,-0.04 0.38,0.34 0.25,-0.13 0.03,-0.4 h -0.19 z m -5.13,2.91 -0.18,-0.07 -0.2,0.21 -0.11,0.16 0.4,0.02 z m 2.12,0.23 0.24,0.68 0.43,0.53 0.3,-0.07 0.27,-0.1 -0.46,-0.24 -0.28,-0.36 -0.25,-0.7 -0.35,-0.16 z m -0.35,1.24 0.05,0.11 0.04,0.21 0.21,-0.21 0.18,-0.17 -0.38,-0.06 -0.21,-0.01 z m -0.41,-2.52 -0.12,-0.11 0.04,0.32 0.15,-0.02 z m 0.04,3.21 0.28,0.02 z m 2.16,-7.44 0.11,-0.04 0.07,-0.24 0.21,-0.26 -0.33,0.14 -0.22,0.18 0.17,0.09 z m -14.4,13.4 -0.14,0.02 0.1,0.18 0.14,0.12 0.09,-0.18 -0.01,-0.31 -0.24,-0.14 0.06,0.2 z m 14.93,-15.19 -0.56,-0.32 -0.5,-0.46 -0.71,-0.24 0.22,-0.19 -0.31,-0.08 -0.1,-0.13 -0.06,-0.08 -0.05,-0.1 -0.13,-0.06 -0.08,-0.15 -0.14,-0.03 -0.16,-0.06 0.21,-0.12 -0.05,-0.32 -0.17,-0.68 0.06,-0.32 0.01,-0.39 0.27,-0.06 -0.14,-0.07 -0.04,-0.18 -0.2,-0.18 0.58,0.07 -0.12,-0.13 -0.17,-0.09 v -0.06 l 0.24,-0.06 -0.18,-0.06 -0.11,-0.15 -0.02,-0.28 0.02,-0.2 0.04,-0.21 0.01,-0.26 v -0.28 l -0.03,-0.23 0.02,-0.24 0.25,-0.22 0.28,-0.08 -0.28,-0.34 -1.1,-0.48 -0.46,-0.16 -0.13,-0.02 -0.23,-0.09 -0.3,-0.12 -0.27,-0.16 -0.32,-0.05 -0.31,-0.04 h -0.34 l -0.3,-0.1 -0.3,0.12 -0.31,-0.04 -0.57,-0.09 -0.57,0.22 -0.81,0.52 -0.43,0.19 -0.5,0.04 -0.49,0.21 -0.45,-0.19 -0.34,0.38 -0.33,0.74 -0.19,0.73 -0.14,0.8 0.01,0.41 -0.11,0.42 -0.28,0.82 0.09,0.82 -0.12,0.04 0.12,0.33 0.06,0.11 h -0.02 v 0.17 l 0.11,0.17 -0.17,0.32 -0.35,-0.03 -0.44,-0.09 -0.23,-0.06 -0.02,-0.3 v -0.12 -0.1 l -0.17,0.16 -0.15,-0.02 -0.12,0.03 -0.14,-0.04 -0.11,0.06 -0.26,0.13 0.44,0.35 0.09,0.39 0.1,0.5 0.17,0.23 0.15,-0.16 0.51,-0.45 0.4,0.09 0.34,0.02 0.2,-0.3 0.11,-0.29 0.49,-0.03 0.22,0.13 0.12,0.32 0.5,0.69 0.73,0.45 -0.45,0.21 h -0.55 l -0.35,0.49 -0.2,0.29 -0.1,0.13 -0.09,0.13 h -0.02 l -0.25,0.5 -0.08,0.32 -0.17,0.28 -0.15,0.26 -0.17,0.25 -0.24,0.11 -0.21,0.04 -0.1,0.25 -0.14,0.15 -0.18,0.1 -0.11,0.19 -0.11,0.16 -0.02,0.14 -0.05,0.13 -0.3,0.38 -0.11,0.26 -0.09,0.12 -0.12,0.12 -0.26,0.3 -0.46,0.23 -0.38,0.32 -0.39,0.44 -0.04,0.46 0.06,0.24 0.07,0.14 v 0.24 l -0.28,-0.06 -0.05,-0.36 -0.02,0.02 -0.09,-0.12 -0.05,-0.04 -0.03,-0.1 -0.12,-0.02 v 0.26 l -0.11,0.06 -0.08,0.07 -0.11,0.07 -0.16,0.1 -0.18,0.05 v 0.36 l -0.06,0.33 -0.25,0.42 0.05,0.23 0.24,0.12 -0.03,0.26 -0.26,-0.04 0.11,0.06 0.07,0.06 -0.14,0.08 -0.02,0.08 -0.05,0.08 -0.15,0.04 -0.18,0.05 0.2,0.11 0.11,0.02 0.02,0.12 0.21,0.08 0.12,0.09 -0.16,0.19 -0.39,0.02 -0.38,0.06 -0.02,0.07 0.21,0.08 -0.41,0.16 0.23,0.32 0.19,-0.14 0.08,0.07 0.01,0.12 0.05,0.02 0.09,0.11 -0.18,0.03 -0.15,0.1 0.18,0.1 -0.12,0.01 -0.04,0.12 -0.02,0.09 -0.05,0.04 -0.08,0.04 -0.05,0.03 -0.06,0.05 -0.28,0.02 0.13,0.18 0.19,0.19 -0.21,0.12 -0.15,0.06 -0.16,0.01 0.03,0.17 0.13,0.12 -0.16,0.13 0.14,0.11 0.49,0.03 0.24,0.05 -0.18,0.01 -0.11,0.02 h -0.1 l -0.11,-0.02 -0.11,0.02 -0.18,0.03 -0.05,0.02 -0.05,-0.02 -0.11,0.02 0.05,0.22 0.06,0.11 0.03,0.11 0.25,0.09 h 0.23 l 0.18,0.03 0.05,0.18 v 0.1 l 0.03,0.16 -0.17,0.07 -0.01,0.22 0.34,-0.14 -0.04,-0.34 0.13,-0.15 0.13,0.21 0.06,0.17 0.05,-0.1 0.07,-0.32 0.13,-0.01 0.16,0.39 -0.26,0.05 0.34,0.13 0.16,-0.07 0.02,-0.2 0.12,-0.17 0.29,0.12 0.05,0.16 0.1,0.17 0.49,0.28 0.16,0.09 0.09,0.2 0.12,0.33 0.06,0.31 -0.16,0.16 -0.33,0.03 -0.22,0.16 0.03,0.1 -0.16,-0.07 -0.14,-0.11 -0.11,-0.16 -0.2,0.01 0.04,0.2 0.18,0.07 -0.16,0.06 -0.02,0.13 0.23,0.19 -0.17,0.33 -0.24,0.12 -0.15,0.13 0.01,0.18 -0.05,0.15 -0.04,0.2 -0.04,0.17 -0.13,-0.22 -0.13,0.28 h -0.25 l -0.26,-0.08 -0.33,-0.11 0.29,0.32 -0.09,0.09 -0.34,-0.13 -0.19,-0.01 h -0.18 l -0.35,0.04 -0.43,0.04 -0.32,0.13 0.23,0.47 0.09,0.07 v -0.1 l -0.05,-0.05 -0.04,-0.08 -0.07,-0.09 1.28,0.28 1.27,-0.34 0.47,-0.6 0.37,-0.27 0.53,0.09 0.55,0.1 0.55,0.1 0.08,0.47 -0.18,0.26 -0.23,0.32 -0.38,-0.03 -0.17,0.15 0.17,0.17 0.12,0.18 -0.05,0.08 -0.06,0.03 -0.1,0.11 0.3,-0.09 0.29,0.01 0.2,-0.23 0.28,-0.16 0.37,-0.06 0.42,0.04 0.34,0.07 0.16,0.43 0.26,-0.06 0.18,-0.31 0.07,-0.01 -0.04,0.74 0.25,0.19 0.39,0.08 0.16,0.04 0.15,0.07 0.16,-0.21 -0.01,-0.14 0.14,-0.13 v -0.03 l 0.15,0.17 0.13,0.16 -0.18,0.02 -0.08,0.19 0.11,0.06 0.07,0.07 0.17,-0.02 0.02,-0.46 -0.05,-0.21 -0.09,-0.22 -0.14,-0.1 v 0.03 l -0.51,-0.22 -0.16,-0.2 0.16,-0.04 0.6,0.12 0.41,0.29 -0.05,0.16 0.21,0.17 -0.05,0.58 -0.06,0.54 -0.31,-0.02 -0.22,0.19 0.16,0.11 0.16,-0.03 0.06,0.02 0.07,-0.03 h 0.08 l 0.06,-0.03 0.17,0.06 0.16,0.06 0.05,-0.02 0.08,0.03 0.15,0.04 0.36,0.07 0.06,-0.16 h 0.15 l 0.16,-0.01 v -0.18 l 0.51,0.24 -0.05,0.83 -0.21,0.26 0.12,-0.03 0.14,-0.01 0.23,0.05 -0.03,-0.22 -0.05,-0.17 0.3,0.02 0.2,-0.04 0.14,-0.02 0.13,-0.08 0.1,-0.1 0.02,-0.21 0.16,-0.09 0.16,-0.05 0.56,0.27 0.25,0.24 0.09,-0.37 -0.49,-0.69 -0.33,-0.02 -0.58,-0.18 -0.32,-0.03 -0.18,-0.08 0.27,-0.14 0.32,0.02 0.22,-0.01 v -0.52 l 0.09,-0.09 0.12,0.04 0.13,0.12 0.04,-0.17 -0.12,-0.07 -0.14,-0.13 0.29,0.06 0.09,0.31 0.09,-0.17 -0.09,-0.19 0.25,0.13 -0.05,0.19 0.07,0.14 v -0.02 l 0.03,0.09 -0.12,0.09 -0.25,0.14 0.26,0.1 0.25,-0.11 0.23,0.14 0.14,0.11 -0.28,0.06 -0.03,0.1 0.09,0.12 0.14,0.07 0.13,0.52 0.17,0.11 -0.02,-0.17 -0.15,-0.28 0.24,-0.02 0.07,-0.1 v -0.22 l -0.23,-0.17 0.18,-0.13 0.57,0.01 0.22,0.09 0.12,-0.09 0.03,-0.06 0.02,-0.16 -0.15,-0.1 0.14,-0.02 0.25,0.18 0.21,-0.04 0.12,-0.24 0.2,-0.05 0.27,0.05 0.24,-0.04 0.03,0.2 -0.08,0.12 -0.33,0.09 0.1,-0.01 0.13,0.02 0.12,0.03 0.12,0.01 v -0.64 l 0.22,-0.35 0.16,-0.44 0.3,-0.33 0.25,-0.28 0.15,-0.25 0.02,-0.08 0.03,-0.1 0.06,-0.12 -0.01,-0.17 0.18,-0.03 0.05,-0.23 0.16,-0.51 0.42,-0.04 0.22,-0.12 0.11,-0.22 h -0.12 l -0.13,-0.04 -0.13,-0.04 -0.06,0.03 -0.07,-0.01 0.07,-0.17 0.05,-0.06 0.05,-0.06 0.02,-0.09 0.07,-0.06 0.1,-0.08 0.17,-0.01 0.36,0.02 0.21,-0.02 0.07,-0.11 -0.25,-0.12 -0.46,-0.07 v -0.06 l 0.04,-0.04 0.1,-0.04 0.06,-0.13 h -0.12 l -0.12,0.02 -0.18,-0.18 0.1,-0.18 0.17,-0.16 0.18,0.01 0.19,0.02 0.06,-0.09 0.04,-0.11 -0.04,-0.2 -0.32,-0.12 -0.04,-0.17 0.14,-0.25 0.09,-0.15 -0.21,-0.04 -0.29,-0.05 -0.39,-0.49 -0.55,-0.3 -0.18,-0.03 -0.05,-0.06 h -0.07 l -0.05,-0.04 -0.09,-0.06 -0.01,-0.11 -0.14,-0.02 -0.09,-0.17 -0.12,0.07 -0.07,0.07 -0.24,-0.11 -0.28,-0.06 -0.2,-0.2 -0.03,-0.37 -0.11,-0.13 -0.05,-0.1 -0.07,-0.08 -0.03,-0.25 -0.1,-0.07 -0.04,-0.13 -0.09,-0.26 -0.15,-0.05 -0.06,-0.15 -0.13,-0.1 -0.01,-0.18 -0.3,-0.04 -0.11,0.04 -0.07,0.14 -0.15,0.07 -0.09,0.17 -0.04,0.12 -0.23,-0.01 -0.14,-0.03 -0.06,0.11 -0.12,-0.02 -0.13,-0.03 -0.13,0.01 -0.16,-0.13 -0.06,0.06 -0.09,0.02 h -0.28 l -0.09,0.11 0.23,0.2 0.05,0.31 -0.33,-0.32 -0.28,-0.4 -0.34,-0.09 -0.3,-0.07 -0.2,-0.08 -0.33,0.12 -0.26,0.24 -0.2,-0.08 -0.19,-0.02 -0.47,-0.11 0.05,-0.65 0.27,-0.02 h 0.27 l 0.41,-0.24 0.09,-0.31 0.14,-0.21 0.08,-0.27 0.1,-0.3 0.31,-0.04 0.26,-0.27 h 0.09 l -0.17,0.36 -0.33,0.02 -0.19,0.2 0.23,0.24 0.09,0.17 0.02,0.1 0.36,-0.17 0.05,0.17 0.03,-0.24 -0.14,-0.21 -0.09,-0.11 0.11,0.02 0.19,0.38 0.09,0.17 0.1,-0.11 0.15,-0.43 -0.03,-0.33 0.14,-0.06 0.07,-0.16 0.04,-0.29 -0.05,-0.27 h -0.16 l -0.19,0.15 -0.16,0.17 0.08,-0.22 0.06,-0.21 0.1,-0.25 0.07,-0.08 0.03,-0.14 0.1,-0.19 0.19,-0.03 0.34,0.07 0.33,-0.03 0.3,0.03 0.26,-0.03 0.11,-0.12 -0.11,-0.67 -0.16,-0.35 -0.16,-0.34 -0.13,-0.29 0.09,-0.27 0.01,-0.28 -0.03,-0.2 0.08,-0.09 0.26,-0.41 0.08,-0.11 -0.01,0.21 0.06,0.41 0.08,0.11 0.07,0.14 0.13,0.16 0.13,0.27 0.12,0.15 0.1,0.15 0.12,0.04 0.13,0.07 0.18,0.02 0.33,0.05 h 0.14 l 0.14,0.08 0.18,0.01 0.16,-0.01 0.04,-0.28 0.02,-0.16 v -0.16 l 0.17,-0.08 0.01,-0.51 0.22,-0.28 0.63,-0.33 0.28,-0.12 0.17,-0.2 0.08,-0.28 0.02,-0.1 0.09,-0.05 0.09,-0.21 -0.15,0.09 -0.16,-0.14 -0.25,-0.4 -0.41,-0.13 -0.46,-0.14 -0.24,-0.02 -0.18,-0.15 -0.09,-0.04 h -0.11 l -0.19,-0.12 -0.19,-0.06 -0.17,-0.1 -0.2,-0.15 0.05,0.13 0.05,0.09 0.11,0.3 -0.56,-0.12 -0.25,-0.13 -0.04,-0.07 0.11,-0.01 h 0.14 l -0.4,-0.63 -0.03,-0.64 0.52,-0.14 0.66,0.22 0.54,-0.13 0.37,-0.07 0.16,-0.15 0.15,-0.2 0.13,-0.46 0.41,-0.22 0.64,0.41 0.57,0.41 0.53,0.32 0.33,0.7 z m -12.86,-21.8 -0.05,-0.54 -0.1,-0.36 -0.42,-0.06 -0.09,0.59 0.06,0.35 0.06,0.44 0.24,0.27 0.37,-0.03 z m -0.71,-1.72 -0.45,-0.1 -0.44,0.04 -0.46,0.07 -0.15,0.27 0.36,0.18 0.1,0.39 0.15,0.45 0.31,0.33 0.3,-0.28 0.07,-0.4 0.11,-0.61 z m -2.71,15.31 -0.28,-0.34 -0.34,0.08 -0.2,0.5 -0.03,0.53 -0.2,0.28 -0.13,0.21 0.13,0.33 -0.05,0.27 0.1,0.24 0.28,-0.06 0.2,-0.31 -0.08,-0.21 -0.15,-0.34 0.1,-0.23 0.33,0.1 0.23,-0.38 0.16,-0.35 z m -0.95,22.28 -0.15,-0.01 0.05,0.15 0.14,0.07 z m -0.03,0.58 0.04,-0.22 -0.16,0.07 -0.38,-0.12 -0.2,-0.03 0.3,0.19 z m -0.15,0.33 -0.05,-0.2 -0.04,0.27 z m 0.41,0.23 -0.14,-0.07 -0.12,0.21 0.12,0.01 z m 1.33,1.14 -0.04,-0.15 -0.07,-0.25 -0.2,0.03 v 0.15 l -0.05,0.14 0.18,0.12 z m -0.45,-0.72 0.1,0.12 0.16,-0.05 0.08,-0.13 -0.16,-0.03 z m 0.1,-0.33 0.16,-0.09 h 0.28 l -0.01,-0.31 -0.12,-0.06 -0.15,0.18 -0.17,0.12 z m -0.38,1.85 0.29,0.22 0.07,-0.14 -0.09,-0.25 -0.11,-0.24 -0.17,-0.1 -0.14,-0.22 -0.02,0.22 0.16,0.18 -0.25,0.06 -0.19,-0.09 0.02,-0.2 -0.1,-0.2 -0.17,-0.03 -0.07,0.19 -0.05,0.11 0.1,0.18 -0.11,0.11 -0.34,-0.07 0.03,0.18 0.31,0.07 0.15,0.21 0.16,-0.29 0.22,0.06 0.18,0.19 0.11,0.01 z m -1.43,-3.37 h -0.1 l -0.12,0.14 0.07,0.15 0.19,-0.05 z m 3.44,4.28 -0.12,-0.23 -0.2,0.11 0.05,0.25 z m -0.63,2.31 0.28,-0.02 v -0.29 l -0.43,0.03 z m 2.47,0.55 0.16,-0.14 0.1,0.07 -0.02,0.2 0.16,-0.1 0.21,-0.24 0.11,-0.24 -0.27,0.05 -0.23,-0.07 -0.23,0.29 z m 0.74,0.33 0.26,-0.04 -0.03,-0.37 -0.28,0.27 z m 0.46,-0.13 v 0.27 l 0.09,0.16 0.05,-0.19 -0.01,-0.15 0.08,-0.12 -0.08,-0.17 z m 1.21,0.43 0.21,-0.14 0.18,-0.12 -0.25,-0.06 -0.27,-0.02 z m 0.9,0.63 -0.25,-0.11 -0.14,0.22 0.39,0.05 0.31,-0.07 0.01,-0.27 -0.12,-0.43 -0.15,-0.06 -0.19,0.13 -0.09,0.12 -0.24,0.2 0.28,-0.03 0.19,0.14 z m 0.9,0.71 0.14,-0.23 0.07,-0.34 v -0.32 h -0.18 l -0.05,0.42 -0.08,0.24 z m 1.87,0.27 0.16,-0.05 0.02,-0.23 0.06,-0.13 0.23,0.18 0.15,0.23 0.17,-0.03 -0.02,-0.28 0.02,-0.22 -0.02,-0.33 -0.12,-0.48 -0.21,-0.13 -0.04,0.36 -0.12,0.27 -0.21,0.13 -0.2,0.18 -0.16,0.35 -0.09,0.58 z m 1.07,-0.09 0.13,0.13 0.2,-0.13 -0.01,-0.35 -0.22,-0.22 -0.11,0.13 -0.06,0.19 z m -14.33,-43.15 -0.33,0.06 -0.11,0.37 0.03,0.34 0.24,-0.24 0.22,-0.38 z m -0.6,2.72 -0.33,0.04 -0.14,0.32 -0.07,0.41 v 0.25 l 0.18,-0.14 0.26,-0.39 z m -0.59,10.74 -0.24,0.15 -0.09,0.24 -0.17,-0.01 -0.2,-0.1 -0.15,0.13 0.1,0.37 0.51,0.1 0.31,0.17 0.12,-0.52 -0.02,-0.26 z m -2.38,7.58 -0.43,-0.69 -0.77,-0.64 -0.58,-0.4 -0.67,-0.43 -0.41,-0.01 -0.38,0.02 -0.35,0.17 -0.36,-0.12 -0.48,-0.15 -0.55,-0.3 -1.07,-0.13 -0.37,0.22 -0.23,-0.09 -0.29,-0.07 -0.66,0.1 -0.13,0.26 -0.52,0.16 -0.31,-0.35 -0.36,0.14 -0.2,0.22 -0.05,0.49 -0.46,-0.02 -0.63,-0.14 -0.55,0.46 -0.09,0.41 -0.32,-0.27 -0.84,-0.23 -1.56,-0.23 -0.89,-0.39 -1.04,-0.73 -0.88,-0.69 -0.3,-0.24 -0.24,-0.55 -0.86,-0.17 -0.9,-0.05 -1.34,-0.09 -0.99,0.11 -0.9,0.46 -0.26,0.81 -0.31,0.54 -0.25,0.49 -0.13,0.23 0.2,0.25 0.28,0.14 0.04,0.74 0.21,0.72 0.59,0.25 0.26,0.49 0.08,0.81 -0.07,0.81 0.23,0.3 0.45,0.74 0.37,0.38 0.56,0.19 0.1,0.66 0.1,0.25 0.06,0.28 -0.12,0.22 -0.13,0.35 0.08,0.56 0.12,-0.37 0.24,0.02 0.65,0.75 0.63,0.96 0.18,0.65 0.43,0.21 0.53,0.1 0.58,0.09 0.24,0.25 0.06,0.31 0.07,-0.3 0.16,-0.22 0.32,-0.02 -0.05,-0.19 h -0.04 l 0.02,-0.02 h -0.31 l -0.55,-0.02 -0.06,-0.13 0.4,-0.02 0.19,-0.13 -0.25,-0.14 -0.14,-0.18 0.38,0.09 0.16,-0.13 0.32,-0.17 0.54,0.11 0.24,-0.04 0.25,-0.05 0.06,0.13 0.26,0.18 0.38,-0.18 0.24,0.22 0.16,-0.15 0.1,-0.15 -0.04,-0.17 -0.22,-0.14 -0.35,-0.21 -0.53,-0.34 -0.38,-0.35 -0.45,-0.39 0.13,-0.21 0.3,0.18 0.27,0.05 0.23,0.04 -0.03,-0.15 0.17,-0.21 0.49,-0.03 0.19,-0.15 0.06,-0.22 -0.05,-0.28 -0.03,-0.29 -0.13,-0.33 0.02,-0.26 0.28,-0.09 0.23,-0.07 0.35,0.07 0.27,0.31 0.27,0.2 0.12,0.26 0.08,0.14 0.1,0.15 0.21,0.16 0.21,0.07 0.23,0.02 0.22,-0.07 0.19,0.23 0.11,0.15 0.15,0.1 0.09,0.23 0.09,0.17 0.2,0.03 0.25,-0.02 0.15,-0.14 0.25,0.1 0.24,0.09 0.49,0.18 -0.02,0.38 0.1,0.16 0.25,0.23 -0.15,0.05 h -0.33 l -0.38,-0.12 -0.21,-0.19 -0.19,0.1 -0.18,-0.2 -0.4,-0.27 -0.79,0.83 -0.3,0.78 -0.02,0.3 0.41,0.28 0.09,0.51 0.24,-0.07 0.14,-0.2 0.45,0.56 0.64,0.41 0.45,0.09 0.41,0.36 0.66,0.21 0.66,0.34 0.38,0.5 1.33,0.32 0.86,0.42 0.36,0.2 0.15,-0.18 0.09,-0.26 -0.11,-0.2 -0.58,-0.34 -0.46,-0.25 -0.31,-0.21 0.29,-0.05 -0.14,-0.25 -0.45,0.05 -0.58,-0.25 -0.02,-0.35 0.23,-0.19 0.39,-0.12 -0.02,-0.41 -0.1,-0.27 -0.14,-0.11 -0.29,-0.32 -0.38,-0.53 -0.1,-0.63 -0.55,-0.31 -0.58,0.1 -0.13,-0.22 0.26,-0.07 -0.42,-0.2 0.25,-0.32 0.75,-0.46 0.74,-0.22 0.61,-0.21 0.75,-0.33 0.58,-0.29 1,-0.86 0.61,-0.63 0.53,-0.19 0.17,-0.25 0.79,-0.13 0.42,-0.3 0.44,-0.19 0.38,-0.89 0.27,-0.72 z m -9.91,-24.69 -0.11,-0.28 v -0.31 l 0.03,-0.17 -0.05,-0.17 v -0.16 l -0.02,-0.27 -0.02,-0.32 -0.04,-0.12 0.02,-0.15 -0.07,-0.18 -0.07,-0.19 -0.09,-0.31 -0.13,-0.22 -0.21,-0.13 -0.02,0.39 -0.03,0.27 0.05,0.25 0.08,0.16 0.13,0.19 0.05,0.37 0.02,0.54 0.06,0.34 0.01,0.29 v 0.14 l -0.06,0.25 0.06,0.13 -0.01,0.25 0.06,0.18 0.06,0.21 -0.01,0.19 -0.05,0.24 v 0.2 l -0.05,0.09 -0.07,0.16 0.15,-0.12 0.01,-0.04 0.09,0.01 0.02,0.23 -0.06,0.25 -0.04,0.29 0.12,0.13 0.17,0.07 0.02,-0.39 -0.06,-0.64 v -0.62 -0.21 -0.29 l 0.02,-0.19 0.14,-0.18 z m -5.17,-2.75 -0.16,-0.1 -0.13,0.04 0.11,0.04 0.12,0.14 z m -0.2,-71.97 0.14,0.18 0.19,0.05 0.19,0.19 0.34,-0.07 0.32,0.02 0.16,0.23 0.18,0.03 0.22,0.03 0.05,0.16 0.11,0.23 0.08,-0.04 0.03,-0.23 0.14,0.05 0.17,0.15 0.29,-0.14 0.18,-0.25 0.12,-0.33 0.15,-0.32 0.3,-0.34 0.15,0.12 -0.01,-0.23 -0.17,-0.03 -0.15,-0.14 -0.15,-0.09 -0.15,-0.13 0.04,-0.23 -0.08,-0.19 0.07,-0.17 0.08,-0.16 -0.04,-0.34 -0.13,-0.14 -0.18,-0.18 -0.02,-0.23 -0.04,-0.21 v -0.25 l -0.19,-0.09 -0.12,-0.18 0.02,-0.38 -0.23,-0.12 -0.18,-0.15 -0.02,-0.18 0.14,-0.1 -0.12,-0.14 -0.1,-0.21 0.02,-0.19 0.18,-0.04 0.19,0.11 0.16,0.04 0.18,-0.05 -0.14,-0.1 -0.15,-0.12 -0.27,-0.35 -0.21,-0.09 -0.22,0.15 -0.25,-0.06 -0.24,-0.24 -0.13,0.1 -0.26,-0.06 -0.18,0.03 -0.14,0.08 -0.16,0.2 -0.16,0.13 -0.1,-0.15 v -0.18 l -0.15,-0.06 -0.1,-0.15 -0.06,-0.25 -0.05,-0.34 -0.1,0.19 -0.1,0.12 -0.02,0.39 -0.03,0.34 0.06,0.41 -0.09,0.21 -0.08,0.14 0.09,0.29 0.04,0.29 0.08,0.38 0.12,0.28 0.14,0.35 -0.05,0.42 -0.11,0.28 -0.18,0.34 0.1,0.3 0.06,0.21 0.15,0.17 0.15,0.36 -0.07,0.29 -0.08,0.06 0.11,0.18 0.05,0.23 0.09,0.02 z m 3.71,-24.32 0.02,-0.81 0.52,-0.97 -0.05,-1.13 -0.35,-0.52 -0.02,-0.53 0.18,-0.67 -0.03,-0.28 -0.03,-0.55 v -0.38 l 0.03,-0.51 0.02,-0.59 -0.37,0.24 -0.21,0.83 -0.17,0.95 -0.28,1.27 0.21,0.81 0.11,0.97 c -0.12,0.3 -0.07,0.3 -0.09,1.22 -0.02,0.92 -0.06,1.27 -0.18,1.43 l -0.18,0.44 -0.03,0.42 0.3,0.4 0.31,-0.14 0.16,-0.83 z m -3.93,96 0.05,-0.1 -0.1,-0.15 z m 6.14,-61.5 0.14,0.33 0.13,0.31 0.16,-0.24 -0.06,-0.45 0.05,-0.58 -0.05,-0.34 0.02,-0.4 0.03,-0.24 0.18,-0.39 0.17,-0.43 0.31,-0.32 0.19,-0.3 -0.15,-0.29 0.06,-0.28 -0.06,-0.22 -0.25,0.06 -0.05,0.34 -0.11,0.19 -0.09,0.4 -0.18,0.34 -0.07,0.46 -0.27,0.14 0.03,0.51 -0.15,0.43 0.02,0.45 v 0.39 z m 1.9,18.58 0.09,0.17 0.19,0.05 0.25,0.2 0.1,0.16 0.28,-0.32 -0.12,-0.55 -0.13,-0.39 -0.17,-0.35 -0.15,0.25 -0.19,0.2 -0.15,0.14 z m 4.71,7.1 0.22,-0.23 0.3,-0.12 0.18,-0.05 0.05,-0.28 0.15,-0.34 0.13,-0.14 0.15,-0.47 0.14,-0.39 0.16,-0.27 0.22,-0.32 0.06,-0.32 -0.18,-0.11 v -0.41 l 0.01,-0.51 -0.11,0.1 -0.08,0.2 -0.17,-0.01 -0.25,0.11 -0.43,0.6 -0.17,0.79 -0.11,0.88 -0.13,0.47 -0.05,0.2 -0.07,0.18 -0.06,0.25 z m 1.95,-3.9 0.07,-0.13 0.02,-0.34 -0.06,-0.38 -0.1,0.14 -0.13,0.2 -0.01,0.29 0.04,0.19 z m 0.09,0.41 0.17,-0.03 0.06,-0.18 -0.1,-0.1 -0.12,0.12 z m -16.47,-52.19 -0.27,0.02 -0.41,0.15 -0.02,0.27 0.12,0.4 -0.32,0.4 -0.38,0.62 -0.25,0.8 -0.45,0.93 -0.34,0.38 -0.2,0.82 -0.15,0.94 0.09,0.69 -0.22,0.92 -0.34,0.83 0.07,0.59 0.22,0.96 -0.15,-0.02 -0.07,0.15 0.04,0.68 -0.14,-0.3 -0.16,-0.23 0.11,0.59 0.1,0.43 0.12,0.03 0.09,-0.45 0.14,-0.51 0.21,-0.19 0.04,-0.5 0.04,-0.44 0.22,-0.49 0.21,-0.38 0.1,-0.15 -0.17,-0.14 0.07,-0.19 -0.18,-0.1 0.06,-0.35 0.22,-0.43 0.1,-0.3 -0.23,-0.33 -0.15,-0.22 0.11,-0.48 0.34,-0.26 0.36,-0.42 0.39,-1.06 0.11,-0.39 0.12,-0.6 0.18,-0.63 0.48,-1.43 z m -3.42,-0.68 -0.47,-0.8 -0.15,-0.3 -0.3,0.14 0.1,0.52 0.44,0.49 0.37,0.25 z m -0.14,-18.05 -0.51,-0.01 -0.26,-0.36 -0.11,0.14 h -0.31 l 0.37,0.62 0.28,0.01 0.4,-0.04 z m -0.76,107.53 -0.05,0.14 0.14,0.07 z m -0.58,-0.46 -0.06,-0.09 -0.03,-0.14 -0.17,-0.09 -0.08,-0.18 0.04,-0.21 -0.21,0.07 h -0.29 l -0.16,-0.09 0.1,-0.14 0.23,-0.09 0.16,-0.14 0.14,-0.15 -0.12,-0.24 -0.11,-0.18 0.09,-0.08 0.19,0.13 0.14,0.03 -0.06,-0.2 -0.25,-0.1 -0.22,-0.06 -0.29,-0.1 -0.35,-0.1 -0.41,-0.18 -0.26,0.06 -0.35,0.08 -0.29,0.07 h -0.21 l 0.21,0.16 0.09,0.13 0.1,0.08 0.12,0.28 v 0.11 l -0.11,0.08 -0.03,0.14 -0.06,0.1 -0.07,0.07 0.15,0.14 -0.02,0.13 0.07,0.13 0.15,0.13 0.06,0.12 0.12,0.16 0.19,0.01 0.07,0.26 0.12,0.18 0.12,0.21 0.24,0.11 0.1,0.07 0.16,0.13 0.12,0.16 0.15,0.02 0.1,0.08 0.43,0.15 0.33,0.05 0.35,0.07 h 0.37 l 0.3,-0.06 0.27,-0.04 0.11,-0.17 h -0.31 l -0.21,0.01 -0.26,-0.14 -0.17,0.03 -0.23,-0.17 -0.21,-0.08 0.15,-0.24 0.13,-0.14 -0.04,-0.1 -0.16,-0.08 z m -0.81,-2.45 0.03,0.15 0.1,-0.05 z m -0.23,0.18 -0.18,-0.05 0.1,0.1 z m -0.2,-0.3 -0.13,-0.2 -0.25,-0.13 h -0.28 l 0.04,0.1 0.28,0.12 0.18,0.15 z m -0.93,0.04 -0.14,-0.15 0.08,0.29 h 0.22 z m -0.41,-0.57 0.22,0.08 z m -0.06,0.42 -0.04,0.07 -0.11,0.12 0.16,0.04 z m 6.24,1.59 0.08,0.13 0.09,0.13 0.05,-0.11 -0.06,-0.08 -0.02,-0.24 -0.11,-0.03 z m 0.23,0.73 0.18,0.12 0.18,0.2 0.15,-0.09 0.23,-0.03 -0.15,-0.18 -0.24,-0.16 -0.27,-0.02 -0.25,0.06 z m -7.1,-1.69 -0.24,-0.19 -0.33,0.03 -0.26,0.09 h -0.28 l 0.41,0.14 0.3,0.12 0.21,0.23 0.22,-0.21 z m -1.69,0.6 v 0.2 l 0.07,-0.03 z m -0.23,0.43 -0.01,0.15 z m -5.3,-0.43 0.05,-0.12 -0.08,-0.15 -0.03,-0.13 -0.16,-0.03 -0.16,0.05 -0.27,-0.1 -0.08,0.19 -0.14,0.11 -0.13,0.1 0.04,0.35 0.05,0.29 0.13,0.16 0.06,0.23 0.07,0.03 0.05,0.24 0.12,-0.04 0.13,-0.05 0.07,-0.22 -0.06,-0.28 -0.21,-0.02 0.12,-0.03 -0.13,-0.06 -0.07,-0.28 0.24,-0.06 0.22,0.05 0.09,-0.1 0.22,0.14 z m -0.65,1.47 0.17,0.01 -0.03,-0.11 z m -1.18,-0.02 -0.14,-0.18 -0.22,-0.12 -0.19,-0.23 -0.02,0.08 0.24,0.34 0.15,0.19 0.12,0.08 z m -0.07,-3.56 -0.2,0.02 -0.01,0.18 -0.05,0.15 v 0.19 l 0.19,-0.12 0.11,-0.16 z m -0.3,1.38 -0.22,-0.11 -0.19,-0.08 -0.08,0.19 -0.16,0.16 -0.04,0.19 0.28,0.1 0.06,-0.08 0.26,-0.07 z m -0.46,1.21 0.1,-0.02 -0.16,-0.1 -0.11,0.12 z m -0.82,-0.82 -0.13,0.19 -0.04,0.24 0.16,-0.06 0.12,0.05 -0.12,-0.12 v -0.16 l 0.17,-0.02 0.12,-0.04 z m -5.98,-38.82 -0.19,-0.33 -0.14,-0.22 -0.37,-0.18 -0.2,-0.35 -0.23,-0.22 -0.19,-0.24 -0.2,0.12 -0.06,0.35 0.04,0.23 -0.05,0.2 -0.03,0.18 -0.14,0.12 -0.14,0.11 -0.05,0.16 -0.23,0.01 -0.24,0.46 -0.01,0.42 -0.11,0.25 -0.09,0.19 0.06,0.26 0.2,0.06 0.13,-0.12 0.28,-0.49 0.36,-0.41 0.36,-0.36 0.54,0.07 0.39,0.07 0.17,-0.1 z m -10.55,45.56 -0.19,-0.19 -0.32,0.05 -0.13,0.04 -0.27,-0.01 -0.21,0.01 0.19,0.11 0.21,0.04 0.15,0.13 0.26,0.07 h 0.24 z m -1.49,-0.11 -0.1,-0.12 -0.08,0.07 0.16,0.12 z m -0.26,0.09 -0.09,-0.23 -0.18,-0.12 -0.11,0.12 -0.13,-0.16 -0.04,-0.26 -0.12,-0.12 -0.05,0.23 -0.1,0.08 -0.07,-0.23 -0.15,-0.02 -0.16,-0.02 -0.11,-0.13 -0.09,0.06 -0.14,0.1 -0.02,0.33 0.09,0.16 0.06,0.21 -0.02,0.15 -0.02,0.13 0.07,0.27 0.07,0.38 0.21,0.1 0.16,-0.25 0.15,-0.17 0.2,-0.02 0.36,0.04 0.09,-0.15 0.16,-0.26 z m -0.04,-0.71 -0.03,0.21 0.09,-0.06 z m -0.13,-0.01 v 0.22 z m 365.03,155.38 0.01,0.6 0.09,1.67 -0.06,0.85 v 0.89 l 0.04,1.14 -0.03,1.03 v 0.88 0.46 l -0.04,0.43 v 1.02 l 0.04,0.98 -0.01,1.11 v 0.64 l 0.03,0.3 -0.02,0.11 -0.04,0.02 -0.31,0.04 -0.35,-0.06 -0.68,0.09 -0.39,0.02 -0.32,-0.05 -0.43,-0.11 -0.35,-0.08 -0.43,-0.04 -0.39,-0.17 -0.33,0.04 -0.22,0.02 -0.44,-0.06 -0.37,0.15 -0.38,-0.06 -0.3,-0.09 -0.19,0.03 -0.35,-0.09 -0.57,-0.03 -0.67,-0.15 -0.52,-0.23 -0.14,0.14 h -0.19 l -0.26,-0.03 -0.32,0.03 -0.05,0.38 -0.05,0.08 -0.44,0.1 -0.62,-0.33 -0.6,-0.03 -0.61,0.02 -0.7,-0.14 -1.35,-0.23 -1.41,-0.4 -1.14,-0.29 -0.63,-0.1 -0.99,-0.28 -0.73,-0.25 -0.3,-0.15 -0.27,0.09 -0.24,0.07 -0.25,0.12 -0.78,-0.4 -0.32,-0.16 -0.32,-0.29 -0.76,0.14 -0.39,-0.1 -0.57,-0.1 -0.64,-0.08 -0.67,-0.11 -0.62,-0.04 -0.37,-0.11 -0.31,0.01 -0.35,-0.06 -0.59,-0.06 -0.35,-0.06 -0.3,-0.08 -0.5,0.06 -0.67,-0.21 -0.28,-0.01 -0.28,-0.15 0.37,-0.1 0.23,-0.19 -0.14,-0.47 0.15,-0.31 -0.9,-0.31 -0.07,-0.44 0.86,0.36 0.64,-0.34 0.28,-0.79 0.38,-0.25 -0.57,-0.47 -0.67,-0.34 -0.63,-0.43 -0.67,-0.24 -0.98,-0.3 -0.88,-0.12 -0.24,0.73 h -0.36 l -0.5,-0.07 -1.06,0.06 -1.48,0.11 -0.22,0.65 -0.3,-0.02 0.02,0.31 -0.16,0.1 -0.72,-0.1 -0.69,-0.42 -0.75,-0.5 -0.48,-0.29 -0.74,-0.25 -0.79,-0.24 -0.44,-0.07 -2.14,-0.33 -0.98,-0.2 -1.26,-0.35 -1.05,-0.2 -0.47,0.13 -0.45,0.11 -0.46,-0.18 -0.26,-0.16 -0.65,-0.19 -0.5,-0.1 -0.42,-0.1 -0.28,-0.07 -0.49,-0.18 -0.51,-0.12 -0.36,-0.09 -0.8,-0.2 -0.81,-0.46 -0.31,-0.26 -0.41,-0.15 -0.41,-0.26 -0.21,-0.19 -0.15,-0.2 -0.43,-0.2 -0.24,0.01 0.03,0.23 0.37,0.14 0.31,0.13 0.09,0.32 -0.45,0.05 -0.48,-0.43 -0.58,-0.32 0.11,-0.27 0.13,-0.23 -0.28,-0.25 -0.22,0.02 -0.07,0.37 -0.03,0.3 0.06,0.44 -0.11,0.09 -0.2,-0.02 -0.54,-0.05 -1.19,-0.18 -0.65,-0.08 -0.71,0.23 0.12,0.34 0.31,0.41 0.45,0.74 -0.33,0.48 -0.31,0.15 -1.85,0.45 -2.01,-0.18 -1,-0.1 -1.04,-0.21 -0.24,-0.04 -0.28,-0.07 -0.45,-0.01 -1.01,-0.23 -0.62,-0.15 -0.67,-0.19 -1.94,-0.52 -0.89,-0.24 -0.45,-0.15 -0.4,-0.15 -0.24,-0.09 -0.25,-0.04 -0.16,-0.06 -0.65,-0.17 -0.41,-0.14 -0.98,-0.43 -0.36,-0.13 -0.31,-0.1 -0.41,-0.16 -0.48,-0.14 -0.42,-0.15 -0.4,-0.19 -0.5,-0.1 -1.51,-0.29 -0.48,-0.02 -0.33,0.16 -0.28,0.13 -0.33,0.12 -0.3,0.21 -0.28,0.07 -0.32,0.04 h -0.22 l -0.25,-0.01 -0.35,-0.04 -0.35,-0.11 -0.4,-0.07 -0.36,-0.04 -0.3,-0.06 -0.17,0.22 -0.37,0.03 -0.48,-0.12 -0.29,-0.05 -0.71,0.04 -0.89,-0.1 -1.08,-0.25 -0.29,0.04 0.05,0.22 0.7,0.58 0.92,0.06 0.44,-0.02 0.27,0.12 -0.18,0.46 -0.88,0.15 -0.46,-0.03 -0.11,0.05 -0.15,-0.04 h -0.31 -0.29 l -0.35,-0.06 -0.17,0.04 -0.3,-0.02 -0.92,-0.13 -0.42,-0.06 -0.42,-0.1 -0.41,-0.1 -0.46,-0.1 -0.6,-0.16 -0.68,-0.16 -0.51,-0.15 -0.47,-0.03 -0.62,-0.02 -0.72,-0.05 -0.41,-0.02 -0.48,-0.07 -0.44,-0.02 -0.27,-0.03 -1.26,-0.22 -1.55,-0.21 -2.26,-0.46 -0.83,-0.16 -0.44,-0.12 -0.43,-0.1 -0.24,-0.02 -0.74,-0.13 -0.36,-0.08 -0.16,-0.04 -0.14,-0.07 -0.16,-0.04 -0.37,-0.05 -0.45,-0.12 -0.69,-0.08 -0.17,-0.01 -0.21,0.03 h -0.37 l -0.52,-0.09 -0.49,-0.09 -0.17,0.04 -0.24,-0.04 -0.2,-0.05 -0.22,-0.1 0.09,-0.13 0.07,-0.08 0.11,-0.09 0.11,-0.03 0.14,-0.05 h 0.14 l 0.23,-0.02 0.21,-0.16 -0.68,-0.45 -0.95,-0.31 -1.21,-0.28 -1.19,-0.42 -0.79,-0.59 -0.1,-0.2 0.1,-0.12 0.34,0.02 0.5,0.13 1.12,0.37 0.46,0.08 -0.15,-0.17 -0.37,-0.28 -0.22,-0.14 -0.36,-0.28 -0.01,-0.33 0.2,-0.07 -0.14,-0.16 0.03,-0.26 0.11,-0.18 0.18,-0.05 0.21,-0.11 0.03,-0.22 -0.24,-0.09 -0.23,-0.14 h -0.19 l -0.24,0.03 -0.26,-0.04 -0.17,-0.16 -0.19,-0.19 -0.25,-0.14 -0.26,0.01 -0.05,0.08 -0.01,0.09 -0.26,0.32 -0.51,-0.02 -0.54,-0.28 -0.37,-0.22 -0.58,0.05 -0.37,-0.36 -0.16,-0.23 -0.17,-0.21 0.28,-0.27 0.2,-0.05 -0.15,-0.11 -0.52,-0.08 -0.43,0.01 -0.33,-0.08 -0.11,0.02 -0.08,0.06 -0.11,0.05 -0.05,0.02 -0.05,0.04 -0.16,-0.01 -0.18,-0.02 -0.27,-0.1 h -0.19 l -0.08,0.08 -0.25,0.04 -0.12,0.08 -0.14,0.01 -0.27,-0.01 -0.23,-0.08 -0.2,-0.05 h -0.21 l -0.24,0.02 -0.23,-0.04 h -0.3 l -0.23,-0.03 -0.23,-0.06 -0.31,-0.11 -0.32,-0.05 -0.33,-0.09 -0.29,-0.12 -0.19,-0.04 -0.14,-0.13 -0.34,-0.17 -0.32,-0.09 -0.22,-0.13 -0.16,-0.14 -0.16,-0.07 -0.14,-0.12 -0.23,-0.14 -0.16,-0.07 -0.2,-0.1 -0.18,-0.1 h -0.19 l -0.13,0.01 -0.21,-0.15 -0.27,-0.04 -0.58,-0.11 -0.33,-0.04 -1.04,0.12 -0.53,0.14 -0.19,0.09 -0.23,0.04 -0.3,0.06 -0.18,0.05 0.27,0.36 0.66,0.28 0.52,-0.21 -0.3,0.32 -0.46,-0.05 -0.96,-0.39 -0.42,-0.38 -0.47,-0.52 -0.69,-1.31 -0.38,-0.49 -0.16,-0.48 -0.16,-0.29 -0.59,-0.55 -0.81,-0.41 -0.59,0.27 -0.45,-0.02 -0.21,-0.08 -0.25,0.02 -0.26,-0.02 -0.21,0.1 -0.19,0.18 -0.61,-0.06 -0.33,0.02 -0.19,0.19 -0.29,0.1 -0.29,-0.07 -0.15,0.17 -0.29,0.47 -0.93,-0.02 -0.13,0.19 0.5,0.22 0.48,0.1 0.53,0.17 0.18,0.03 -0.06,0.01 -0.45,0.09 -0.13,0.19 -0.18,0.11 -0.41,0.06 0.26,-0.2 0.16,-0.25 -0.3,-0.16 -0.37,-0.13 -0.25,-0.1 -0.22,-0.06 -0.05,0.16 -0.12,0.09 -0.34,0.16 -0.06,0.13 0.13,0.03 0.42,-0.04 0.28,0.09 0.19,0.13 0.39,0.36 0.3,0.08 0.27,0.11 0.3,0.13 0.23,0.23 -0.45,-0.09 0.19,0.16 0.27,0.18 h -0.23 l -0.11,-0.01 -0.11,-0.03 0.12,0.09 0.17,0.09 -0.02,0.14 -0.24,0.19 -0.82,-0.12 -0.53,0.16 0.37,0.19 0.53,0.11 0.41,0.11 0.32,0.28 -0.1,0.31 -0.32,-0.24 -0.34,-0.11 h -0.02 l 0.12,0.04 0.35,0.33 -0.17,0.21 -0.38,-0.07 0.1,0.1 0.49,0.07 0.43,0.16 -0.15,0.07 -0.24,-0.01 h -0.2 l -0.14,0.14 -0.12,-0.02 -0.12,0.03 -0.23,-0.08 -0.24,-0.12 -0.2,0.02 -0.05,0.12 -0.04,0.12 -0.41,0.05 -0.08,0.02 -0.13,-0.03 -0.11,-0.03 -0.15,-0.04 -0.11,-0.03 -0.08,0.04 0.24,0.1 -0.1,0.11 -0.23,-0.02 -0.26,-0.06 -0.5,-0.17 -0.09,-0.02 -0.03,0.04 0.22,0.15 -0.35,0.03 -0.28,0.14 -0.38,-0.12 -0.49,-0.26 -0.17,-0.01 -0.25,0.09 -0.57,-0.13 -0.32,-0.52 -0.15,0.15 -0.19,-0.27 -0.16,0.07 h -0.17 l -0.2,-0.14 h -0.1 l -0.11,-0.06 v 0.16 l -0.29,0.06 -0.42,-0.03 -0.17,-0.13 -0.22,-0.14 -0.38,-0.23 -0.32,0.12 -0.3,0.02 -0.43,-0.06 -0.38,-0.12 -0.16,0.17 h -0.14 l -0.18,0.02 -0.28,0.01 -0.18,0.01 -0.15,-0.09 -0.14,0.07 -0.15,0.02 h -0.18 l -0.3,-0.01 0.35,0.23 0.21,0.14 0.14,0.11 -0.62,-0.13 -0.36,-0.12 0.14,-0.16 v -0.13 l -0.24,-0.14 -0.2,-0.19 -0.18,-0.15 -0.17,-0.19 -0.26,-0.01 -0.21,-0.09 -0.2,-0.1 -0.04,0.17 -0.28,-0.14 -0.25,-0.09 -0.04,-0.15 -0.2,-0.25 0.02,-0.17 -0.07,-0.14 0.19,-0.22 0.3,-0.03 0.01,-0.25 0.2,-0.09 -0.16,-0.11 -0.39,-0.14 -0.02,-0.28 -0.22,-0.1 -0.13,-0.21 -0.33,-0.04 -0.11,0.03 h -0.28 l -0.23,0.02 -0.39,-0.18 -0.49,-0.12 -0.57,-0.14 -0.56,-0.15 -0.59,-0.16 -0.32,-0.03 -0.39,-0.12 -0.35,-0.12 -0.3,-0.17 -0.31,-0.07 -0.55,-0.17 h -0.57 l -0.41,-0.06 -0.36,0.03 -0.27,-0.16 -0.55,-0.14 -0.55,-0.05 -0.79,-0.07 h -0.78 l -0.52,-0.08 -0.43,-0.14 -0.14,0.29 -0.01,0.33 0.68,0.22 0.19,-0.22 0.17,0.14 -0.18,0.06 v 0.07 l 0.24,0.09 0.19,0.14 -0.26,-0.03 -0.2,0.06 -0.21,-0.03 -0.22,0.05 -0.5,-0.13 -0.26,-0.06 h -0.33 l -0.3,-0.12 -0.39,-0.15 -0.43,-0.11 -0.37,-0.01 -0.86,-0.14 -0.39,-0.08 -0.39,-0.05 -0.61,-0.09 -0.21,0.01 -0.91,-0.2 -0.95,-0.19 -0.56,-0.23 -1.08,-0.53 -1.58,-0.4 -0.55,-0.32 -0.62,-0.24 0.15,-0.29 0.58,0.11 0.38,-0.03 -0.52,-0.19 -0.45,-0.23 -0.49,0.11 -0.47,0.15 0.48,0.42 0.1,0.28 -0.45,0.22 -0.39,0.26 -0.54,0.11 0.17,-0.28 0.19,-0.24 -0.37,-0.16 -0.38,-0.16 -0.45,-0.16 -0.41,-0.1 -0.35,-0.08 -0.43,-0.11 -0.4,-0.05 -0.39,-0.08 -0.59,0.19 -0.01,0.36 0.35,0.12 0.32,0.12 -0.05,0.08 -0.48,-0.14 -0.23,-0.08 -0.23,-0.15 -0.2,-0.22 -0.2,-0.23 -0.21,0.12 -0.28,0.02 -0.3,-0.04 -0.3,-0.08 -0.18,-0.03 -0.14,-0.04 -0.35,-0.09 -0.17,-0.03 -0.19,-0.06 -0.12,-0.15 -0.05,-0.09 -0.07,-0.08 -0.09,-0.15 -0.11,-0.08 -0.06,-0.03 -0.09,0.01 -0.08,-0.01 -0.12,-0.06 -0.1,-0.02 -0.07,-0.24 0.15,-0.15 0.52,0.08 0.29,0.13 0.32,0.05 0.28,0.08 0.25,0.13 0.39,0.22 0.38,0.18 0.22,0.05 0.16,-0.12 -0.34,-0.25 -0.13,-0.05 -0.14,-0.1 -0.16,-0.05 -0.11,-0.05 -0.14,-0.03 -0.13,-0.09 -0.13,-0.08 -0.2,-0.1 -0.16,-0.06 -0.12,-0.13 -0.07,-0.13 -0.31,-0.17 -0.15,-0.07 -0.17,-0.07 -0.16,-0.05 -0.17,-0.05 -0.18,-0.06 -0.16,-0.07 -0.17,-0.05 -0.19,-0.07 -0.2,-0.06 -0.17,-0.06 -0.2,-0.12 -0.18,-0.09 -0.23,-0.07 -0.25,-0.1 -0.27,-0.1 -0.14,-0.03 -0.46,-0.17 -0.29,-0.1 0.02,-0.14 0.36,0.07 0.07,-0.28 -0.26,-0.16 -0.45,0.28 -0.35,-0.19 -0.16,-0.14 -0.13,-0.1 -0.34,-0.11 -0.31,-0.05 -0.38,-0.1 -0.46,-0.08 -0.45,-0.18 -0.41,-0.08 -0.41,-0.06 -0.39,-0.09 -0.23,-0.22 -0.02,-0.31 0.01,-0.07 -0.3,-0.13 -0.14,-0.06 -0.07,-0.11 -0.06,-0.09 -0.21,-0.2 -0.14,-0.1 -0.57,-0.27 -0.25,-0.04 -0.18,-0.02 0.13,0.2 0.53,0.4 0.48,0.46 0.3,0.42 0.37,0.39 0.57,0.29 0.62,0.21 0.17,0.05 0.15,0.13 0.3,0.26 0.13,0.2 -0.13,0.09 -1.2,-0.21 -0.68,-0.08 0.16,0.12 0.17,-0.04 0.89,0.23 0.96,0.25 0.5,0.1 0.6,0.16 0.6,0.16 0.41,0.22 0.54,0.29 0.06,0.16 0.04,0.06 0.07,0.05 0.22,-0.05 0.25,0.26 0.24,0.28 0.28,0.22 0.29,0.23 0.26,0.2 0.69,0.12 0.32,0.22 0.31,0.17 0.3,0.25 0.05,0.24 -0.34,-0.07 -0.24,-0.07 0.53,0.24 0.26,0.14 0.31,0.09 0.49,0.34 0.06,0.18 0.16,0.07 0.32,0.05 0.27,0.11 0.3,0.16 0.28,0.13 0.31,0.22 0.27,0.22 0.38,0.14 0.39,0.08 0.16,0.03 0.71,0.43 0.15,0.17 0.19,0.22 0.51,0.24 0.59,0.18 0.22,0.11 0.35,0.29 0.24,0.12 0.22,0.13 0.43,0.31 0.26,0.16 0.6,0.77 v 0.15 l -0.03,0.11 -0.23,-0.01 -0.61,-0.07 0.36,0.41 0.2,-0.04 -0.18,-0.19 -0.05,-0.14 0.3,0.12 0.26,0.24 0.15,0.25 0.32,0.61 -0.57,-0.03 -0.2,-0.1 -0.13,0.16 -0.3,0.5 h -0.15 l -0.11,0.07 h -0.19 l -0.17,-0.08 -0.23,-0.06 -0.02,-0.06 0.31,-0.02 0.08,-0.11 -0.28,-0.19 -0.24,-0.24 -0.26,0.12 -0.22,0.14 -0.12,0.01 0.07,0.08 0.19,0.27 -0.23,0.12 0.14,0.13 0.11,0.22 -0.07,0.16 -0.32,0.14 -0.86,-0.2 -0.44,-0.11 0.19,-0.21 0.53,0.08 0.2,-0.09 0.27,-0.06 -0.36,-0.07 -0.44,-0.19 -0.51,-0.55 0.12,0.36 0.44,0.41 h -0.29 l -0.54,0.04 -0.38,0.12 h -0.25 l -0.61,-0.04 -0.81,-0.19 -1.21,-0.27 -0.87,-0.35 -1.2,-0.22 -1.82,-0.56 -1.25,-0.3 v -0.34 l -0.37,-0.33 -1.79,-0.51 -1.15,-0.25 0.36,0.17 0.39,0.47 0.51,0.33 0.61,0.38 0.32,0.26 -0.32,0.03 -0.85,-0.05 -1.67,-0.42 -1.21,-0.51 0.04,0.18 0.14,0.19 -1.84,-0.52 -1.18,-0.28 0.64,0.36 1.55,0.5 0.85,0.55 0.72,0.33 0.5,0.26 -0.65,-0.09 -0.53,0.18 -0.86,-0.23 -0.99,-0.12 -0.72,-0.05 -0.86,-0.09 -1.11,-0.51 -0.97,-0.38 -1.15,-0.64 -0.86,-0.55 -0.98,-0.59 -0.76,-0.57 -0.29,-0.46 -0.57,-0.42 0.21,-0.11 0.43,0.05 0.07,-0.18 -0.32,-0.25 -0.37,-0.4 -1.38,-0.47 -1.96,-0.6 -0.94,-0.09 0.12,-0.18 0.59,-0.05 0.64,-0.09 0.41,-0.07 -0.2,-0.15 -0.61,-0.19 -0.27,0.05 -0.21,0.02 -0.74,-0.16 -0.68,-0.21 -0.72,-0.29 -0.31,-0.18 0.08,-0.07 -0.37,-0.11 -0.56,-0.23 h 0.29 l 0.13,-0.1 -0.7,-0.11 -0.3,-0.39 -0.1,0.24 -0.1,0.25 -0.52,-0.23 -0.38,-0.21 0.24,0.03 0.33,0.09 -0.19,-0.19 -0.27,-0.18 -0.66,-0.3 0.18,0.24 0.03,0.12 -0.31,0.01 -0.55,-0.31 -0.47,-0.21 -0.5,-0.31 0.19,0.31 0.47,0.29 0.27,0.24 -0.29,0.03 -0.06,0.07 0.6,0.15 0.34,0.1 0.41,0.15 0.43,0.26 0.39,0.23 -0.19,0.07 -0.42,-0.07 0.16,-0.04 0.15,-0.07 -0.41,-0.18 -0.19,0.02 -0.26,-0.07 0.04,-0.07 -0.23,-0.15 -0.04,0.15 0.04,0.11 -0.31,-0.11 -0.26,-0.17 h -0.29 l -0.24,-0.05 -0.41,-0.14 -0.56,-0.17 0.17,-0.06 0.53,0.1 -0.25,-0.21 -0.66,-0.23 -0.72,-0.2 -0.59,-0.15 -0.46,-0.15 -0.57,-0.13 -0.59,-0.25 -0.47,-0.22 -0.42,-0.08 -0.3,-0.06 -0.36,-0.26 -0.25,0.03 -0.16,-0.23 0.15,-0.1 0.13,0.18 0.49,0.17 0.1,-0.09 0.27,-0.03 h 0.24 l -0.86,-0.41 -1.36,-0.45 -0.97,-0.35 -0.62,-0.24 -0.54,-0.34 -0.74,-0.22 -0.72,-0.16 -0.85,-0.31 -0.51,-0.24 -0.55,-0.3 -0.49,-0.23 -0.52,-0.08 -0.46,-0.31 -0.6,-0.34 -0.36,-0.2 -0.39,-0.32 -0.88,-0.4 -1.16,-0.34 -0.84,-0.26 0.8,0.11 0.55,0.09 0.29,0.01 -0.37,-0.23 h -0.41 l -0.32,-0.12 0.32,-0.03 -0.09,-0.12 -0.25,-0.17 -0.24,-0.26 -0.17,-0.21 -0.31,-0.11 -0.05,-0.17 -0.16,-0.17 -0.18,0.17 -0.36,-0.03 -0.29,-0.07 -0.05,0.08 0.24,0.14 -0.37,-0.12 -0.16,-0.12 -0.17,-0.12 -0.14,-0.04 -0.12,-0.02 -0.15,-0.16 0.2,-0.01 0.61,0.11 0.36,0.02 0.32,-0.02 0.28,-0.04 -0.12,-0.14 -0.37,-0.17 -0.41,-0.13 -0.29,-0.08 0.25,-0.04 0.17,-0.08 h -0.28 l -0.43,-0.07 -0.14,-0.3 0.66,0.12 0.7,0.15 0.34,-0.1 -0.03,-0.16 0.4,-0.02 0.37,-0.11 0.06,-0.17 -0.21,-0.19 -0.49,-0.15 -1.06,-0.29 -0.92,-0.37 -0.46,-0.18 -0.43,-0.31 -0.41,-0.14 -0.75,-0.19 -0.36,-0.1 -0.41,-0.03 -0.78,-0.37 -0.46,-0.15 -0.34,-0.08 -0.32,-0.13 -0.21,-0.02 -0.64,-0.18 -0.36,-0.15 -0.5,-0.1 -0.27,-0.01 -0.75,-0.21 -0.79,-0.24 -0.46,-0.18 -0.69,-0.28 -0.85,-0.17 -0.12,-0.12 0.19,-0.1 0.13,-0.1 -0.22,-0.14 -0.24,-0.33 0.26,-0.06 0.09,-0.02 -0.23,-0.1 -0.25,-0.15 0.02,-0.1 0.31,0.02 0.18,0.04 -0.09,-0.14 0.21,0.04 0.31,-0.44 -0.2,-0.26 -0.2,-0.2 0.34,-0.19 -0.12,-0.36 0.24,-0.05 0.34,0.06 0.57,0.01 0.94,0.17 0.8,0.1 0.26,-0.21 -0.17,-0.23 -0.05,-0.18 0.39,0.13 0.15,-0.08 0.18,-0.14 0.65,0.05 0.7,0.03 0.35,-0.14 0.12,-0.45 -0.46,-0.72 -0.19,-0.56 0.19,-0.18 0.27,-0.21 0.43,-0.7 -0.07,-0.58 -0.62,-0.33 -0.56,-0.16 -0.11,-0.05 0.26,-0.2 0.15,-0.26 h 0.19 l 0.17,0.02 0.48,-0.15 0.42,-0.19 0.2,0.05 0.11,-0.1 0.1,-0.09 0.35,0.04 0.3,0.04 0.05,-0.08 0.13,-0.04 0.11,-0.04 -0.05,-0.12 -0.09,-0.08 -0.24,-0.09 -0.43,0.02 -0.21,0.22 -0.35,-0.05 -0.4,-0.1 -0.33,-0.01 -0.26,0.17 -0.27,0.12 -0.43,0.02 -0.14,0.04 0.05,0.22 -0.06,0.01 -0.07,0.03 -0.19,0.08 -0.26,-0.06 -0.31,-0.04 0.09,0.1 0.02,0.1 -0.36,0.07 -0.11,0.17 0.28,-0.11 0.35,-0.07 0.41,0.3 0.06,0.23 h -0.4 l -0.25,0.18 -0.36,0.08 -0.21,-0.41 -0.13,-0.16 -0.03,0.26 -0.1,0.09 0.2,0.28 0.14,0.17 0.17,0.15 -0.13,0.31 -0.22,0.29 0.22,0.34 -0.09,0.35 0.51,0.3 0.69,0.33 0.18,0.16 -0.03,0.29 0.44,0.23 0.16,0.13 0.08,0.18 -0.38,-0.07 -0.39,-0.06 -0.39,-0.07 -0.39,-0.16 -0.28,-0.15 -0.35,-0.08 -0.46,-0.1 -0.47,-0.18 -0.45,-0.1 -0.29,0.18 -0.33,0.15 -0.44,0.11 -0.34,0.09 -0.38,0.02 -0.73,0.1 -0.5,-0.08 -0.23,0.07 -0.18,0.1 -0.27,0.02 -0.27,0.02 -0.16,-0.03 -1.62,-0.44 -1.36,-0.64 -0.64,-0.41 -0.28,-0.25 0.55,0.15 0.98,0.2 0.09,-0.45 -1.14,-0.44 -0.91,0.18 -0.92,-0.09 -1.07,-0.61 0.3,-0.32 0.2,-0.34 0.66,-0.08 h 0.8 l 0.85,-0.08 0.79,0.29 v -0.16 l 0.37,0.03 0.24,-0.15 0.21,-0.24 0.15,-0.23 -0.49,-0.22 -0.82,0.34 -2.4,-0.52 -1.58,-0.17 -0.21,-0.02 -0.26,-0.03 -0.38,0.16 0.02,0.12 0.13,0.11 0.2,0.05 0.04,0.11 0.09,0.12 -0.09,0.13 0.03,0.21 -0.27,0.03 -0.11,0.12 0.01,0.35 0.37,0.43 0.03,0.29 0.23,0.22 0.17,0.25 -0.24,0.07 0.02,0.11 -0.04,0.13 -0.11,0.11 0.13,0.21 -0.14,0.11 -0.26,0.14 0.1,0.17 -0.29,0.03 -0.36,-0.02 -0.26,-0.05 -0.13,-0.07 0.03,-0.17 0.17,-0.22 0.31,-0.71 -0.31,-0.6 -0.57,-0.38 -0.63,-0.39 -0.36,-0.21 -0.62,-0.25 -0.38,-0.13 -0.12,-0.13 0.01,-0.19 -0.06,-0.22 -0.26,-0.24 -0.4,-0.26 -0.23,-0.3 0.19,-0.13 0.45,0.04 0.42,-0.2 0.32,-0.37 0.13,-0.05 h 0.16 l 0.04,-0.17 0.09,-0.12 0.12,-0.09 0.4,-0.16 0.04,-0.56 -0.41,-0.5 -0.46,-0.4 -0.1,-0.16 0.01,-0.18 -0.13,-0.51 -0.26,-0.38 0.33,-0.34 0.22,-0.11 0.05,-0.37 -0.19,-0.33 0.05,-0.2 0.7,0.06 0.35,0.2 0.37,0.05 0.62,0.04 0.59,0.26 0.33,0.22 0.52,0.28 0.77,0.18 0.32,0.02 0.25,-0.08 0.36,0.03 0.37,0.05 0.26,-0.14 0.16,-0.08 h 0.37 0.39 l 0.36,0.03 0.29,0.07 0.09,-0.18 0.01,-0.34 0.45,-0.53 0.16,-0.18 -0.01,-0.28 -0.21,-0.11 -0.3,-0.12 -0.29,-0.14 -0.24,-0.25 -0.05,-0.23 0.01,-0.33 0.76,-0.29 1.37,0.25 0.39,0.01 0.4,-0.13 -0.22,-0.08 -0.16,-0.02 -0.06,-0.09 0.03,-0.14 -0.17,0.03 -0.11,0.06 -0.15,-0.01 -0.24,-0.02 -0.17,-0.06 -0.22,-0.07 -0.21,-0.05 -0.16,-0.02 -0.1,-0.03 -0.31,-0.21 0.07,-0.14 0.06,-0.11 -0.18,0.18 -0.14,0.21 -0.05,-0.17 -0.05,-0.17 -0.15,-0.29 0.08,0.4 0.11,0.33 h -0.49 l -0.69,-0.02 -0.06,0.24 0.29,0.27 0.01,0.26 0.03,0.36 0.12,0.35 -0.36,-0.01 0.15,0.23 0.1,0.16 -0.04,0.08 0.15,0.15 -0.17,0.11 -0.34,-0.04 -0.2,0.14 -0.31,0.07 -0.24,0.11 0.01,0.13 -0.01,0.14 -0.2,0.16 -0.38,-0.03 -0.37,-0.06 -0.34,-0.16 -0.58,-0.22 -0.58,-0.27 -0.35,-0.16 -0.69,-0.31 -0.49,-0.27 -0.08,-0.56 -0.22,-0.4 0.16,-0.16 0.48,-0.23 0.2,-0.76 -0.3,-0.61 -0.43,-0.37 -0.41,-0.28 -0.38,-0.38 -0.13,-0.44 -0.08,-0.44 -0.33,-0.19 -0.33,-0.2 -0.26,-0.31 -0.37,-0.23 -0.38,-0.26 -0.43,-0.27 -0.39,-0.15 -0.36,-0.37 0.03,-0.21 -0.15,-0.27 -0.32,-0.26 -0.34,-0.15 -0.35,-0.11 -0.19,0.16 h -0.21 l -0.7,-0.07 -1.01,-0.22 -0.31,-0.08 -0.61,-0.14 -0.35,0.09 0.35,0.39 -0.17,0.08 0.12,0.18 -0.07,0.09 -0.15,0.12 0.11,0.07 0.37,-0.15 0.43,0.05 -0.36,-0.19 0.19,-0.09 0.91,0.13 0.14,0.08 -0.02,0.13 0.24,-0.04 0.11,0.15 0.49,0.23 0.33,0.19 -0.13,0.14 -0.07,0.19 -0.2,0.28 0.2,-0.06 0.18,-0.03 0.19,0.15 0.15,-0.12 0.26,0.39 0.23,0.11 -0.01,0.2 0.44,0.12 -0.08,0.27 -0.06,0.18 0.25,0.06 0.25,0.05 0.05,0.4 0.22,0.19 0.03,0.19 0.15,0.07 0.43,0.11 v 0.2 l 0.1,0.05 0.1,0.02 0.14,0.04 0.04,0.12 0.02,0.16 0.16,0.1 -0.06,0.35 -0.08,0.02 -0.06,0.11 -0.16,0.15 0.16,0.1 0.03,0.23 0.21,0.16 0.2,0.2 0.21,0.22 0.19,0.13 -0.06,0.33 -0.54,0.11 -0.6,0.11 -0.61,0.29 -0.11,0.59 0.2,0.36 -0.15,0.13 0.08,0.15 0.16,0.16 -0.15,0.13 -0.13,0.09 0.29,0.41 -0.31,0.55 -0.03,0.21 0.1,0.23 -0.25,0.08 0.05,0.18 0.36,0.25 0.24,0.53 -0.12,0.17 0.1,0.21 0.06,0.27 0.02,0.24 -0.23,0.12 -0.15,0.12 0.04,0.28 -0.24,0.03 h -0.39 l -0.41,0.2 -0.29,0.18 -0.03,0.21 0.36,0.26 0.31,0.23 0.11,0.37 0.2,0.19 0.18,0.14 0.02,0.28 0.08,0.24 0.29,0.25 -0.01,0.21 0.16,0.15 -0.08,0.2 0.03,0.27 -0.15,0.19 0.09,0.3 -0.17,0.12 -0.29,0.04 -0.34,-0.08 h -0.17 l -0.25,-0.05 -0.24,0.01 -0.21,-0.04 -0.27,-0.02 -0.27,-0.04 -1.21,-0.29 -0.4,-0.06 -0.42,-0.12 -0.73,-0.23 -0.33,-0.1 -0.26,-0.04 -0.23,-0.05 -0.22,-0.09 0.15,0.16 0.29,0.09 -0.63,-0.09 -0.58,-0.64 -0.43,-0.62 -0.29,-0.94 -0.21,-0.49 -0.13,-0.49 -0.24,-0.34 -0.64,-0.63 -0.4,-0.31 -0.72,-0.42 -0.62,-0.28 -0.98,-1.07 -0.07,-0.24 0.15,0.11 0.22,0.23 0.2,0.18 0.06,0.03 -0.12,-0.2 -0.24,-0.37 0.77,0.17 0.44,-0.31 -0.25,-0.44 0.24,-0.02 -0.06,-0.22 -0.2,-0.19 -0.06,-0.28 0.16,-0.07 0.13,-0.09 0.1,-0.17 0.04,-0.15 -0.45,-0.2 -0.45,-0.09 -0.17,-0.78 0.3,-0.37 0.02,0.38 0.42,0.13 0.6,0.05 0.58,-0.19 0.41,0.13 0.17,-0.05 -0.14,-0.3 -0.08,-0.24 0.24,-0.12 0.51,-0.32 h 0.72 l 0.35,-0.07 -0.25,-0.59 -0.25,-0.33 -0.24,-0.3 -0.15,-0.42 -0.55,-0.38 -0.24,0.41 -0.64,0.02 -0.55,0.31 -0.64,0.06 0.26,0.18 0.13,0.11 -0.15,-0.01 -0.2,-0.01 -0.29,-0.04 -0.11,-0.02 -0.13,0.03 -0.24,-0.04 -0.48,-0.12 -0.99,0.2 -0.35,0.07 -0.3,0.05 -0.46,0.02 -0.48,-0.04 -0.29,0.02 -0.2,0.1 -0.27,0.05 -0.24,0.07 -0.6,0.07 -0.34,0.03 -0.95,-0.19 -0.46,0.04 h -0.54 l -0.64,-0.07 -0.77,-0.23 -1.8,-0.23 -0.5,-0.1 -0.28,-0.34 -0.44,-0.26 -0.37,-0.22 0.16,-0.41 0.6,-0.51 0.39,-0.09 0.11,-0.41 -0.14,-0.05 -0.25,-0.22 -0.43,-0.48 -0.43,-0.02 -0.35,-0.17 -0.38,-0.45 0.08,-0.33 -1.04,-0.28 -0.34,-0.03 0.08,0.28 -0.13,0.13 0.13,0.05 -0.04,0.16 0.59,0.23 -0.03,0.23 -0.83,0.09 0.4,0.25 -0.37,-0.04 -0.82,-0.36 -0.37,-0.17 -0.41,-0.21 -0.24,-0.28 -0.27,0.02 -0.55,-0.49 -0.16,-0.29 -0.33,-0.09 -0.47,-0.14 -0.51,0.05 -0.72,-0.17 -0.66,-0.09 -0.63,-0.36 -0.62,-0.3 -0.49,-0.54 -0.27,-0.46 -0.62,0.15 -0.66,-0.82 0.11,0.25 0.14,0.26 0.23,0.26 0.15,0.21 -0.33,-0.14 -0.24,-0.26 -0.37,-0.11 -0.48,-0.05 -0.32,-0.12 -0.22,-0.1 0.13,0.28 0.55,0.26 0.15,-0.01 0.2,-0.05 0.3,0.13 -0.21,0.41 -0.29,0.22 0.25,0.35 -0.36,0.2 0.18,0.05 0.2,0.09 0.6,0.27 0.41,0.07 0.24,0.08 0.17,0.04 -0.27,0.07 -0.39,-0.05 -0.36,-0.11 -0.35,-0.13 -0.39,-0.22 -0.47,-0.23 -0.86,-0.49 -0.31,-0.21 -0.7,-0.39 0.02,-0.13 0.3,0.07 0.32,-0.21 -0.22,-0.22 -0.25,-0.16 -0.5,-0.01 0.32,0.29 -0.3,0.01 -0.06,0.14 -0.39,-0.23 -0.71,-0.42 -0.36,-0.14 -0.4,-0.2 -0.71,-0.25 -0.4,-0.26 -0.19,-0.19 -0.2,-0.15 -0.08,-0.08 -0.12,-0.08 -0.25,-0.14 -0.21,-0.17 -0.31,-0.15 -0.2,-0.18 -0.28,-0.23 -0.53,-0.34 -0.25,-0.06 -0.24,0.03 0.26,-0.21 h 0.09 l 0.08,-0.01 0.08,-0.22 -0.6,0.04 -0.31,-0.12 -0.34,-0.06 -0.31,-0.19 -0.29,-0.06 -0.2,-0.16 0.1,-0.23 -0.15,-0.29 -0.14,-0.33 0.04,-0.25 -0.02,-0.24 -0.12,-0.27 -0.24,-0.1 h -0.29 l -0.31,-0.16 -0.69,-0.31 -0.67,-0.15 -0.32,-0.17 -0.34,0.02 -0.41,0.15 -0.26,0.31 -0.18,0.19 h -0.72 l -0.31,0.13 0.54,0.65 0.23,0.32 0.67,0.34 1.14,0.4 0.5,0.11 -0.2,0.4 -0.24,0.31 -0.82,0.34 c -0.18,0.1 -0.14,0.26 -1.11,0.05 -0.96,-0.22 -2.19,-0.52 -2.48,-0.48 l -0.94,-0.03 0.74,-0.23 0.86,-0.33 -0.01,-0.44 -0.09,-0.32 -0.02,-0.31 -0.1,-0.4 -0.34,-0.55 -0.17,-0.72 0.56,0.14 0.5,-0.4 0.09,-0.29 -0.19,-0.25 0.15,-0.2 -0.2,-0.31 -0.28,-0.5 -0.11,-0.47 0.09,-0.25 -0.14,-0.08 -0.38,0.3 -0.63,-0.3 -0.22,-0.09 0.26,0.21 0.28,0.22 -0.41,0.14 h -0.65 l -0.76,-0.07 -0.75,-0.03 -0.57,-0.73 -0.88,-0.76 -0.84,-0.29 -0.52,-0.56 -0.58,-0.43 -0.57,-0.52 0.16,-0.48 0.39,-0.29 0.33,-0.16 0.22,-0.25 0.06,-0.5 0.11,-0.31 -0.14,0.15 -0.11,0.32 -0.36,-0.04 -0.39,-0.16 0.12,-0.15 0.16,-0.07 -0.16,-0.02 -0.24,-0.01 -0.15,-0.23 -0.39,-0.13 -0.6,0.15 -0.59,0.01 -0.34,0.06 -0.24,-0.01 0.01,-0.13 -0.14,-0.1 -0.22,-0.15 -0.16,-0.13 -0.06,0.12 -0.14,0.01 0.14,0.14 0.39,0.11 0.09,0.13 -0.48,-0.07 -0.29,0.04 -0.27,0.14 -0.38,0.09 -0.62,0.05 -0.45,-0.09 -0.04,-0.3 -0.08,-0.17 -0.24,-0.18 -0.19,0.02 -0.09,-0.17 0.14,-0.18 0.19,-0.11 0.46,-0.33 0.78,-0.19 0.43,0.32 0.25,-0.02 0.11,-0.1 0.11,-0.22 0.04,-0.29 0.02,-0.44 -0.57,-0.26 -0.05,-0.24 -0.41,-0.13 -0.47,0.16 -0.81,-0.16 -0.51,0.01 -0.07,0.26 -0.34,0.21 -0.17,0.16 0.09,0.18 -0.18,0.08 -0.2,-0.17 -0.2,-0.03 -0.23,-0.15 -0.25,-0.04 -0.16,0.06 h -0.31 l -0.28,0.12 0.07,0.23 -0.09,0.23 v 0.25 0.23 l -0.19,0.13 0.08,0.23 -0.2,0.19 -0.21,0.12 -0.23,0.26 0.07,0.16 0.4,0.25 0.02,0.54 0.15,0.06 0.31,0.13 -0.31,0.04 0.08,0.16 -0.12,0.01 -0.11,0.04 -0.05,0.18 -0.1,0.09 -0.31,0.08 -0.14,0.07 -0.19,-0.01 -0.15,0.05 -0.22,0.01 h -0.22 -0.21 l -0.23,0.14 0.04,0.13 -0.09,0.09 h -0.19 l -0.16,-0.02 -0.2,0.01 -0.2,0.03 -0.4,-0.06 0.51,0.25 0.38,-0.03 -0.29,0.17 -0.62,0.03 -0.22,0.11 -0.22,0.1 0.07,0.15 0.01,0.15 h -0.34 l -0.34,-0.01 -0.4,-0.01 -0.36,-0.18 -0.01,0.14 -0.05,0.06 -0.01,0.07 h -0.13 -0.14 l 0.33,0.06 0.1,-0.1 0.15,-0.03 0.39,0.12 0.18,0.06 0.19,0.03 0.26,0.05 0.26,0.07 0.31,-0.03 0.03,-0.19 0.14,-0.09 0.42,-0.14 0.44,-0.16 0.15,0.04 v 0.13 l 0.03,0.1 0.15,0.04 0.28,-0.21 0.61,0.13 0.25,-0.05 0.16,-0.21 0.68,0.26 0.26,-0.05 0.45,-0.15 0.42,-0.08 0.32,0.03 0.93,0.15 0.8,0.11 0.77,0.01 1.68,0.12 0.23,0.05 0.36,0.09 0.35,0.1 0.38,0.15 0.89,0.41 0.17,0.1 0.18,0.08 0.23,0.15 0.09,0.06 0.08,0.06 0.17,0.11 0.12,0.06 0.34,0.33 0.41,0.37 0.21,0.23 0.46,0.56 0.27,0.56 -0.35,0.49 -0.19,0.71 -0.34,0.25 -0.34,0.03 -0.17,-0.24 -0.21,0.12 0.06,0.21 -0.11,0.04 -0.14,-0.06 -0.14,0.04 -0.2,0.04 -0.18,-0.01 -0.15,0.24 -0.08,0.06 V 1264 l -0.31,-0.04 -0.69,0.18 -0.29,0.07 -0.11,-0.01 -0.09,0.04 -0.18,-0.01 -0.16,0.04 -0.16,-0.03 0.34,-0.1 0.03,-0.09 -0.17,-0.03 -0.36,0.03 -0.29,0.11 -0.55,0.31 -0.24,0.06 -0.22,0.04 -0.3,0.02 -0.29,0.14 -0.28,0.1 -0.63,0.05 -0.33,0.09 h -0.3 l -0.12,-0.02 -0.13,0.03 -0.2,0.04 -0.3,-0.02 h -0.21 l -0.05,-0.16 -0.04,-0.13 -0.08,0.24 -0.23,0.02 -0.27,0.01 -0.26,-0.1 -0.08,-0.25 -0.15,0.12 -0.12,0.11 -0.12,-0.16 -0.12,0.03 -0.35,-0.01 -0.25,-0.04 -0.23,-0.05 -0.23,0.03 -0.28,-0.07 -0.27,-0.05 -0.24,-0.09 -0.23,-0.16 -0.21,-0.29 -0.36,-0.21 -0.31,-0.08 0.65,0.38 -0.23,0.11 -0.15,0.14 0.26,0.17 0.21,0.2 -0.29,-0.1 -0.28,-0.05 -0.13,-0.15 -0.18,-0.08 -0.25,-0.22 0.06,0.13 0.09,0.12 0.15,0.23 -0.33,-0.28 -0.11,0.24 -0.29,-0.12 -0.26,-0.05 -0.26,-0.24 0.35,0.45 v 0.06 l -0.2,-0.07 -0.2,-0.03 -0.18,-0.08 -0.21,-0.09 0.11,0.17 -0.18,0.02 0.33,0.26 -0.31,0.07 -0.13,0.08 -0.2,-0.14 0.22,-0.15 -0.24,-0.1 -0.11,0.01 -0.08,-0.13 -0.09,-0.1 -0.07,0.08 -0.09,-0.1 -0.11,-0.08 -0.14,-0.17 0.21,0.45 h -0.09 l -0.07,-0.05 -0.07,-0.01 -0.06,0.04 -0.35,-0.06 -0.28,0.02 -0.17,-0.1 -0.13,0.02 -0.26,-0.08 -0.02,-0.26 -0.19,-0.06 0.12,0.23 -0.11,0.17 -0.2,0.07 -0.04,-0.25 -0.1,-0.07 -0.02,-0.21 -0.17,0.14 -0.05,0.05 -0.15,-0.08 -0.19,-0.05 -0.13,-0.03 -0.07,-0.08 -0.06,-0.05 -0.1,-0.16 -0.14,-0.08 -0.11,-0.02 -0.14,-0.11 0.28,0.32 0.32,0.29 0.06,0.23 -0.25,-0.04 -0.34,-0.31 0.18,0.35 0.12,0.16 -0.41,-0.09 -0.3,0.04 h -0.24 -0.05 l -0.04,-0.02 h -0.11 l -0.26,-0.06 -0.15,-0.05 -0.1,-0.03 0.79,0.43 0.74,0.06 0.94,0.24 0.32,0.23 0.19,0.21 0.45,0.45 -0.02,-0.02 -0.08,0.06 v 0.05 l -0.08,0.03 0.04,0.04 -0.33,-0.02 -0.31,-0.14 -0.23,0.07 0.38,0.24 -0.12,0.01 -0.12,-0.03 -0.31,0.03 -0.15,-0.22 -0.28,-0.13 0.07,0.15 0.12,0.14 -0.21,0.01 -0.32,-0.11 -0.24,-0.2 -0.08,0.25 -0.12,0.23 -0.31,-0.04 -0.3,-0.12 -0.28,-0.28 0.22,-0.08 -0.29,-0.13 -0.08,-0.18 -0.1,-0.16 0.1,-0.04 0.13,0.06 -0.08,-0.15 -0.03,-0.21 -0.13,0.14 -0.15,-0.18 -0.15,-0.02 0.13,0.23 -0.2,-0.14 -0.09,-0.06 -0.09,-0.08 -0.16,-0.03 -0.05,0.12 -0.19,-0.13 0.14,0.24 0.49,0.32 0.14,0.19 -0.14,-0.02 -0.45,-0.28 -0.54,-0.12 0.6,0.34 v 0.14 l -0.34,-0.04 0.35,0.2 0.22,0.09 0.12,-0.05 0.33,0.25 0.13,0.11 0.06,0.15 -0.36,-0.11 -0.26,-0.01 h -0.16 l -0.18,-0.02 -0.18,-0.03 -0.16,0.09 -0.18,-0.07 -0.02,-0.19 -0.18,-0.08 -0.4,-0.02 0.15,-0.04 0.07,-0.08 -0.16,-0.02 -0.15,-0.02 0.09,-0.09 h 0.15 l 0.14,0.03 0.1,0.14 0.06,-0.05 0.06,0.01 0.1,-0.08 -0.03,-0.09 0.06,-0.01 0.16,0.01 -0.32,-0.09 -0.31,-0.09 0.1,-0.15 -0.1,-0.12 -0.15,0.04 -0.16,-0.04 0.21,-0.06 -0.1,-0.04 h -0.09 l 0.14,-0.03 0.1,-0.01 0.13,-0.05 0.15,0.04 -0.25,-0.1 h -0.09 l -0.05,0.02 -0.14,-0.06 -0.18,-0.04 0.17,-0.16 0.14,-0.11 -0.28,-0.02 -0.22,0.02 -0.25,-0.16 -0.2,-0.2 -0.24,-0.16 0.09,0.26 v 0.13 l 0.15,0.2 0.05,0.2 -0.12,0.04 -0.13,-0.04 -0.16,-0.05 -0.16,-0.03 0.37,0.19 0.16,0.04 0.06,0.16 0.05,0.05 -0.05,0.33 -0.24,-0.12 -0.16,-0.11 -0.35,-0.39 -0.3,-0.39 0.12,0.03 -0.24,-0.22 -0.28,-0.22 -0.13,-0.17 -0.12,-0.13 0.19,-0.08 v -0.06 l -0.42,-0.25 -0.33,-0.45 -0.28,-0.1 -0.21,0.26 0.35,0.37 h -0.19 l 0.06,0.17 0.2,0.09 0.13,0.17 -0.14,-0.02 -0.12,-0.03 -0.08,0.05 h -0.09 l 0.13,0.12 0.14,0.06 0.16,0.08 0.34,0.29 0.16,0.25 0.17,0.08 0.29,0.28 -0.35,-0.08 -0.33,-0.19 -0.16,-0.16 -0.19,-0.07 -0.1,0.23 -0.24,-0.11 -0.19,-0.12 -0.09,0.15 -0.1,0.03 -0.28,0.06 0.18,-0.25 -0.18,-0.04 0.15,-0.09 0.04,-0.02 0.01,-0.06 0.05,-0.06 -0.15,-0.04 -0.14,-0.02 0.19,-0.13 0.1,-0.17 -0.15,-0.04 -0.09,0.07 -0.1,0.01 -0.08,0.03 -0.25,-0.07 -0.23,-0.27 0.18,-0.03 0.19,-0.16 -0.14,-0.07 -0.13,-0.01 -0.11,0.06 -0.15,-0.04 -0.01,0.03 -0.3,-0.13 -0.22,-0.21 -0.15,-0.07 -0.12,-0.12 -0.04,-0.07 0.11,-0.09 -0.33,-0.07 -0.14,-0.07 -0.12,-0.13 0.31,-0.13 -0.32,-0.18 0.13,-0.07 -0.28,-0.15 -0.14,-0.03 0.05,0.05 -0.38,-0.04 0.22,0.25 -0.25,-0.1 -0.22,-0.19 -0.23,-0.09 -0.39,-0.14 0.14,0.15 0.18,0.2 -0.23,-0.05 -0.22,-0.06 0.14,0.25 h -0.07 l 0.06,0.12 -0.25,-0.21 -0.08,0.08 -0.13,-0.02 -0.21,-0.08 0.14,-0.15 -0.14,-0.14 -0.04,0.12 -0.19,-0.02 -0.05,0.06 -0.1,-0.02 0.08,-0.11 v -0.16 l 0.09,0.02 0.11,0.05 0.1,-0.06 0.17,0.12 0.25,0.03 v -0.3 l -0.05,-0.13 h -0.18 l 0.07,-0.1 0.14,-0.13 0.19,-0.14 -0.19,-0.06 -0.16,-0.03 -0.24,0.22 -0.28,0.03 -0.14,0.07 -0.12,0.09 -0.18,-0.02 -0.19,-0.1 0.2,-0.09 0.1,-0.13 0.1,-0.11 -0.29,0.11 -0.17,-0.23 -0.14,-0.11 0.05,-0.32 -0.3,0.39 -0.21,0.03 -0.1,-0.32 -0.26,0.12 -0.06,-0.17 -0.08,-0.21 0.12,-0.05 0.09,-0.08 0.23,0.06 0.22,-0.03 0.15,-0.22 h -0.11 l -0.11,0.04 -0.23,0.08 -0.21,-0.12 -0.07,0.1 -0.08,0.11 -0.17,-0.23 0.03,-0.14 -0.12,-0.15 0.21,-0.07 0.05,-0.11 -0.28,0.04 h -0.25 l -0.27,-0.22 0.05,0.18 0.43,0.61 0.02,0.33 0.18,0.39 -0.21,0.12 -0.04,-0.16 -0.02,-0.1 -0.12,-0.02 -0.19,-0.15 -0.15,-0.23 -0.18,-0.13 0.14,-0.05 0.01,-0.03 0.08,-0.03 0.11,0.01 0.13,0.02 -0.25,-0.11 -0.24,-0.02 -0.09,-0.33 -0.09,-0.1 -0.03,-0.19 -0.1,-0.05 -0.01,0.11 0.09,0.37 0.05,0.15 -0.03,0.18 -0.02,0.25 -0.44,-0.16 -0.42,-0.25 v -0.25 l 0.23,0.03 0.05,-0.24 v -0.08 l 0.04,-0.01 0.02,-0.1 -0.11,0.1 -0.04,0.16 -0.2,-0.02 -0.1,-0.12 0.08,-0.11 0.26,-0.01 0.08,-0.08 0.08,0.02 0.03,-0.02 0.05,0.05 0.03,-0.05 0.03,-0.07 0.09,-0.1 -0.09,-0.1 -0.1,0.06 -0.15,-0.1 -0.07,0.06 0.1,0.18 -0.28,-0.03 -0.23,0.12 -0.23,0.16 -0.3,-0.02 -0.11,-0.25 0.32,-0.08 0.32,0.06 0.06,-0.15 -0.14,-0.01 -0.19,-0.05 -0.21,-0.1 -0.09,-0.04 -0.05,-0.1 -0.09,-0.02 -0.03,0.12 -0.08,0.14 -0.11,0.06 -0.03,0.1 h -0.07 v 0.01 l -0.15,-0.08 -0.02,-0.17 -0.13,-0.12 -0.1,-0.17 0.14,-0.09 0.06,-0.12 0.04,0.01 0.05,-0.04 -0.6,-0.18 -0.41,-0.46 0.34,0.02 0.13,-0.13 -0.13,0.01 -0.16,-0.07 h -0.18 l 0.1,-0.11 h 0.08 l 0.08,-0.01 -0.16,-0.07 -0.16,0.06 -0.13,-0.09 -0.12,-0.09 0.11,-0.02 0.08,0.02 0.08,-0.09 0.11,0.01 0.11,-0.02 -0.42,-0.01 -0.23,0.01 -0.14,-0.12 0.09,-0.07 0.11,-0.08 h -0.08 l -0.07,0.01 h -0.08 l -0.07,0.07 h -0.11 l -0.1,-0.05 -0.25,-0.13 -0.25,-0.12 v -0.2 l -0.19,-0.12 0.13,-0.05 0.18,0.01 0.4,0.14 0.22,0.17 0.25,-0.06 0.12,0.04 0.11,0.15 0.06,0.02 0.06,0.06 0.1,-0.02 0.09,-0.09 0.15,-0.01 h 0.15 l 0.16,-0.01 -0.23,-0.1 -0.04,-0.01 -0.04,0.04 -0.05,0.01 -0.03,0.04 -0.09,-0.01 -0.11,0.01 -0.15,-0.1 0.03,-0.08 -0.1,-0.05 -0.09,0.03 -0.1,-0.16 0.07,-0.06 0.05,0.02 0.05,-0.05 0.04,-0.05 0.04,-0.06 0.04,-0.09 -0.13,0.03 -0.16,0.07 -0.12,0.24 -0.23,-0.07 0.05,-0.14 -0.02,-0.18 -0.18,0.25 -0.24,0.02 -0.27,-0.04 -0.26,-0.1 -0.35,-0.19 0.09,-0.05 0.16,0.01 h 0.17 l 0.13,0.02 0.11,-0.06 0.08,-0.1 h 0.1 l 0.07,-0.1 -0.09,-0.01 -0.05,0.02 -0.03,0.04 -0.08,0.03 -0.08,0.08 -0.21,0.01 h -0.08 l -0.09,0.02 0.19,-0.13 0.08,-0.02 -0.08,-0.08 -0.1,-0.07 -0.09,-0.06 -0.04,-0.25 0.13,0.17 0.16,0.1 0.18,0.01 0.17,0.01 -0.21,-0.12 -0.17,0.03 -0.23,-0.38 -0.15,-0.1 -0.03,0.12 -0.05,0.11 -0.12,0.12 -0.07,0.24 -0.16,0.02 -0.27,-0.35 -0.11,0.02 -0.08,0.03 -0.29,-0.13 -0.14,-0.11 -0.08,-0.09 -0.1,-0.05 -0.13,-0.13 0.29,0.14 0.24,0.13 0.23,0.05 0.21,-0.01 0.25,-0.12 -0.06,-0.18 -0.14,0.05 -0.14,0.07 -0.15,-0.12 -0.17,-0.06 -0.17,-0.03 -0.12,-0.13 -0.16,-0.18 h -0.14 l -0.2,-0.07 -0.2,-0.06 h 0.21 l 0.18,0.04 0.15,-0.01 0.18,0.15 0.15,0.12 0.11,-0.06 h 0.27 l 0.14,-0.01 0.08,-0.17 -0.08,-0.02 -0.07,0.05 -0.13,0.04 -0.28,-0.06 0.22,0.02 0.07,-0.05 0.05,-0.08 -0.26,0.04 h -0.17 l -0.16,-0.08 -0.12,-0.19 0.14,0.06 0.07,-0.02 0.18,-0.01 -0.26,-0.09 -0.04,-0.08 0.23,0.02 0.16,-0.08 0.06,-0.15 0.09,-0.18 -0.19,0.16 -0.14,0.11 -0.24,-0.06 -0.19,-0.17 -0.01,0.08 -0.01,0.06 -0.12,-0.05 -0.04,-0.08 -0.08,-0.03 -0.13,-0.15 -0.09,-0.11 0.03,0.13 -0.14,-0.01 -0.04,-0.03 h -0.09 l -0.07,-0.13 -0.13,-0.14 0.31,0.01 0.18,0.06 0.22,0.06 0.31,0.14 0.13,0.11 h 0.08 v -0.16 h 0.12 l -0.01,-0.22 -0.25,-0.03 -0.15,0.04 -0.09,0.02 -0.13,-0.08 v -0.16 l 0.1,-0.3 -0.13,0.05 -0.07,0.15 -0.09,0.04 v 0.14 l -0.12,-0.01 -0.03,-0.15 -0.13,0.09 -0.09,-0.06 -0.12,0.01 -0.07,-0.02 -0.21,-0.11 -0.03,-0.09 -0.05,-0.15 -0.07,-0.08 -0.01,-0.1 -0.18,-0.1 -0.11,-0.05 -0.12,-0.03 -0.07,-0.07 h -0.11 l -0.09,-0.03 -0.12,-0.06 -0.17,-0.14 0.07,-0.02 0.06,0.01 0.08,-0.03 0.06,-0.01 h 0.17 l 0.12,-0.01 -0.06,-0.03 -0.09,-0.07 -0.2,-0.03 -0.19,-0.05 -0.05,-0.08 -0.05,-0.07 0.26,0.1 0.24,0.01 -0.16,-0.13 -0.21,-0.07 -0.17,-0.1 -0.18,-0.06 -0.04,-0.07 -0.09,-0.05 -0.07,-0.06 -0.09,-0.03 0.14,-0.02 h 0.06 l 0.09,0.05 0.09,0.05 0.11,0.05 0.07,-0.05 0.08,-0.02 0.05,-0.06 -0.25,-0.02 -0.12,-0.03 -0.08,-0.06 -0.03,-0.12 -0.07,-0.08 -0.2,0.12 -0.08,-0.01 -0.02,0.03 -0.1,-0.04 0.16,-0.09 0.05,-0.24 0.38,0.12 0.33,-0.13 0.37,0.15 0.39,0.17 -0.11,-0.14 -0.16,-0.1 -0.23,-0.2 -0.12,-0.05 -0.14,-0.11 -0.1,-0.07 v -0.2 l -0.09,0.23 -0.18,0.17 -0.47,-0.35 -0.24,-0.36 0.24,-0.05 0.08,0.04 0.09,0.04 -0.04,-0.14 -0.03,-0.13 -0.16,0.04 h -0.1 l -0.11,0.07 -0.14,-0.03 -0.22,-0.15 0.03,-0.07 -0.02,-0.14 0.04,-0.06 h -0.11 l -0.08,0.03 0.08,-0.17 0.07,-0.17 -0.17,0.12 -0.18,-0.1 -0.11,-0.17 0.05,-0.08 0.02,-0.12 h 0.08 l 0.15,0.15 0.05,-0.15 0.09,-0.12 -0.09,-0.02 -0.22,0.03 -0.22,0.15 0.01,-0.2 -0.1,-0.15 -0.18,-0.29 0.11,0.06 0.09,0.15 h 0.11 l 0.05,-0.05 0.07,0.01 0.02,-0.37 0.08,-0.11 -0.17,-0.1 -0.14,0.03 -0.04,0.16 -0.19,-0.2 -0.18,-0.16 -0.09,0.16 -0.15,-0.12 -0.11,-0.11 0.09,-0.12 -0.07,-0.06 -0.08,-0.1 -0.1,-0.08 h -0.1 l -0.18,-0.09 -0.18,-0.14 0.14,0.07 h 0.11 l 0.12,0.05 0.16,0.05 0.11,0.01 0.17,0.19 0.26,0.04 -0.31,-0.21 -0.06,-0.23 -0.55,-0.35 0.12,-0.1 0.31,0.02 -0.15,-0.06 -0.06,-0.21 -0.09,-0.11 -0.09,-0.09 -0.09,0.02 -0.15,-0.23 -0.14,-0.16 0.04,0.17 0.06,0.13 -0.19,-0.05 -0.1,0.14 v 0.04 l -0.2,0.15 0.02,-0.27 0.08,-0.19 -0.1,0.07 -0.11,0.06 -0.2,0.04 0.04,-0.17 0.01,-0.11 0.07,-0.13 -0.14,0.12 h -0.14 v -0.14 l -0.13,0.02 -0.09,-0.05 0.07,-0.13 -0.17,-0.07 -0.16,-0.06 0.07,-0.06 0.04,-0.08 -0.12,-0.02 -0.17,-0.02 0.01,-0.17 0.06,-0.08 -0.11,-0.1 -0.15,-0.04 -0.13,-0.07 0.12,-0.03 0.08,-0.07 h 0.2 l -0.15,-0.06 -0.45,-0.22 -0.21,-0.24 0.13,-0.01 0.22,0.06 0.19,0.04 -0.05,-0.1 -0.19,-0.13 -0.11,-0.18 0.18,0.01 0.12,0.06 0.06,0.03 0.06,0.05 h 0.1 l -0.32,-0.27 0.26,0.06 0.62,0.42 0.33,0.25 0.05,0.02 0.04,0.04 0.06,0.02 0.03,0.07 0.11,0.08 0.05,0.09 0.04,0.03 -0.2,-0.04 -0.18,-0.11 -0.09,-0.02 -0.09,-0.03 -0.07,-0.02 -0.09,-0.04 0.23,0.2 0.16,0.11 0.13,0.03 0.13,0.11 0.14,0.13 0.11,0.1 0.04,0.16 0.13,0.08 0.15,0.04 0.11,-0.01 -0.13,-0.08 0.05,-0.08 0.13,-0.09 -0.2,-0.12 -0.17,-0.09 -0.19,-0.14 h 0.22 l 0.21,0.03 0.17,-0.02 0.17,-0.07 h -0.07 l -0.07,-0.02 -0.13,-0.06 -0.27,-0.13 -0.06,-0.02 -0.09,-0.06 -0.12,-0.07 -0.18,-0.13 -0.11,-0.09 -0.2,-0.06 -0.1,-0.12 0.19,-0.04 0.01,-0.14 -0.17,-0.06 -0.13,-0.14 -0.3,-0.18 -0.1,-0.11 -0.14,0.04 -0.15,-0.02 -0.13,-0.14 h -0.14 l -0.17,-0.08 0.01,0.19 -0.1,0.08 -0.12,0.24 -0.26,-0.12 -0.11,-0.12 -0.11,0.01 -0.34,-0.17 0.11,-0.03 0.03,-0.09 0.1,-0.03 0.14,0.03 -0.19,-0.16 -0.23,-0.1 0.02,0.15 -0.05,0.06 -0.08,0.03 -0.12,-0.08 -0.09,0.02 -0.09,-0.03 -0.23,-0.08 v -0.09 l 0.12,-0.05 -0.11,-0.03 -0.05,-0.02 -0.04,0.01 -0.06,0.03 -0.05,0.05 -0.14,-0.07 0.06,-0.1 0.07,0.03 v -0.21 l 0.12,-0.02 0.34,0.03 -0.21,-0.07 -0.13,-0.02 -0.09,-0.05 -0.12,0.13 -0.05,0.1 -0.09,-0.04 -0.12,-0.05 -0.11,-0.07 0.11,-0.09 0.1,-0.03 h 0.07 0.07 l 0.12,-0.04 h -0.08 -0.04 l -0.06,-0.03 -0.05,0.04 -0.01,-0.03 -0.08,-0.02 -0.08,0.06 -0.07,0.04 -0.08,0.05 0.12,-0.43 0.39,0.05 0.19,0.01 -0.18,-0.05 -0.09,-0.06 -0.02,-0.03 -0.06,-0.02 0.06,-0.05 0.07,0.01 0.07,-0.03 0.06,-0.06 0.08,-0.04 0.03,-0.08 -0.15,0.05 -0.16,0.03 0.02,-0.13 -0.33,0.13 -0.21,0.41 -0.13,0.08 0.09,-0.52 0.33,-0.3 -0.23,0.05 -0.09,0.09 -0.03,0.16 -0.11,0.08 -0.07,0.05 -0.11,0.26 -0.2,-0.11 0.02,-0.13 0.09,0.05 0.05,-0.22 -0.21,-0.05 -0.03,0.17 -0.13,0.13 -0.08,-0.1 0.06,-0.06 0.05,-0.09 -0.14,-0.16 -0.1,-0.03 -0.09,-0.02 -0.07,0.12 -0.08,0.02 -0.19,-0.05 v -0.09 l 0.07,-0.1 -0.1,0.01 -0.1,-0.01 -0.03,0.03 -0.06,-0.03 -0.09,-0.07 0.1,-0.01 0.1,-0.03 0.08,-0.02 0.12,0.01 -0.05,-0.1 -0.13,-0.01 -0.21,-0.14 h 0.44 l 0.2,0.11 0.21,0.09 -0.2,-0.25 0.14,0.04 0.04,0.04 0.07,0.02 0.13,0.04 h 0.13 l -0.2,-0.09 -0.17,-0.13 0.38,-0.09 -0.27,-0.1 -0.09,-0.09 -0.12,0.07 -0.23,0.09 h -0.24 l -0.23,0.01 -0.25,-0.08 -0.2,-0.09 -0.26,-0.09 -0.25,-0.1 -0.29,-0.18 0.59,0.07 0.59,0.04 0.13,-0.32 0.36,0.06 0.25,-0.17 -0.4,0.04 -0.36,0.07 -0.12,0.16 -0.19,0.03 -0.28,-0.05 -0.14,-0.05 -0.08,-0.05 -0.08,-0.03 0.14,-0.11 0.13,-0.11 0.09,-0.19 0.09,-0.19 -0.24,0.3 -0.25,0.17 -0.31,-0.46 0.38,-0.25 -0.12,-0.01 -0.09,-0.01 -0.17,0.01 -0.16,-0.02 -0.14,-0.26 0.1,0.25 -0.04,0.27 -0.13,-0.16 -0.17,-0.07 0.02,-0.17 -0.16,0.17 -0.2,-0.01 0.05,-0.11 0.22,-0.11 -0.13,0.01 -0.05,-0.09 -0.3,0.18 -0.24,0.04 0.32,-0.36 -0.34,-0.14 -0.07,-0.04 h 0.09 l 0.83,0.15 0.41,0.08 0.33,-0.23 -0.3,-0.03 -0.29,0.03 -0.33,-0.03 -0.31,-0.04 -0.14,-0.16 -0.04,-0.12 -0.03,-0.13 -0.15,-0.02 h -0.18 l -0.07,-0.14 0.16,-0.05 h 0.2 l 0.13,0.05 0.16,0.09 h 0.17 l -0.08,-0.05 -0.18,-0.09 0.13,0.02 0.09,-0.06 -0.25,-0.03 -0.13,-0.08 -0.1,-0.05 0.39,-0.08 -0.22,-0.07 -0.24,-0.1 -0.23,-0.15 0.14,-0.02 h 0.12 l 0.25,0.04 v -0.03 l -0.11,-0.03 -0.11,-0.02 -0.14,-0.04 -0.11,-0.08 0.34,-0.08 0.04,-0.03 0.09,-0.04 0.1,-0.11 0.26,0.07 0.14,0.11 0.16,0.05 0.15,0.02 0.14,0.05 0.13,0.11 0.13,-0.05 0.25,-0.09 -0.26,-0.08 -0.25,-0.01 -0.24,-0.12 -0.25,-0.07 -0.24,-0.17 -0.21,-0.01 -0.26,-0.04 -0.11,-0.13 0.21,-0.06 -0.23,-0.14 0.14,-0.03 0.17,-0.02 0.09,0.02 0.11,0.02 0.08,0.05 0.1,0.03 -0.09,-0.06 -0.08,-0.04 -0.06,-0.06 -0.03,-0.04 -0.09,-0.06 -0.02,-0.02 0.16,-0.08 0.13,-0.07 0.34,0.15 0.09,-0.02 -0.08,-0.13 -0.3,-0.22 -0.12,-0.19 -0.14,-0.19 -0.09,-0.07 -0.06,-0.03 -0.11,-0.2 -0.11,-0.17 0.24,0.01 0.13,0.04 0.11,-0.06 0.27,0.25 0.13,0.23 0.18,0.08 -0.14,-0.17 -0.04,-0.13 -0.12,-0.26 h 0.05 l 0.07,0.01 0.12,0.02 0.12,-0.19 0.13,0.22 0.07,0.18 0.15,0.09 0.12,0.15 0.11,0.15 0.17,0.11 0.19,0.06 0.15,0.09 -0.12,-0.12 -0.09,-0.1 -0.1,-0.07 -0.08,-0.05 -0.1,-0.08 -0.07,-0.09 -0.04,-0.11 -0.05,-0.07 -0.06,-0.14 0.16,0.04 0.07,0.05 0.08,-0.06 -0.16,-0.05 -0.14,-0.06 -0.11,-0.13 -0.07,-0.22 -0.14,-0.06 -0.14,-0.08 0.09,-0.26 0.21,0.17 -0.1,-0.16 v -0.02 l 0.18,-0.06 -0.55,-0.24 -0.51,-0.35 -0.15,-0.42 -0.02,-0.37 0.37,0.17 0.31,0.28 0.27,0.09 -0.01,0.11 -0.02,0.07 -0.05,0.16 0.18,-0.12 0.1,0.02 0.13,0.03 -0.06,-0.07 -0.08,-0.04 -0.09,-0.09 -0.05,-0.09 0.27,-0.06 0.05,0.01 0.05,-0.02 0.09,-0.05 -0.18,-0.21 -0.16,-0.19 -0.1,-0.09 0.06,-0.07 0.12,-0.06 0.04,-0.08 0.07,-0.21 0.02,-0.11 -0.33,0.04 -0.11,0.05 -0.11,0.04 -0.2,-0.08 v -0.48 l 0.1,-0.19 0.28,-0.17 0.28,-0.17 0.28,-0.05 0.26,-0.09 h 0.28 l 0.17,-0.18 0.34,-0.07 0.37,-0.02 0.1,0.05 0.08,0.03 0.06,0.04 h 0.13 l 0.1,0.02 0.1,0.04 0.12,0.03 0.14,-0.02 0.11,0.08 0.12,0.03 0.15,0.15 0.05,0.18 0.08,0.03 0.08,0.07 0.07,0.04 0.04,0.09 0.06,0.05 0.09,0.07 0.06,0.01 0.07,0.06 0.07,0.06 0.08,0.09 0.09,0.16 0.14,0.18 0.06,0.08 0.1,0.02 0.1,0.08 0.09,0.02 0.04,0.13 0.09,0.12 0.04,0.14 0.08,0.05 0.1,0.09 h 0.09 l 0.11,0.13 0.07,0.13 v 0.02 l 0.11,0.1 0.08,0.02 0.09,0.06 0.1,0.1 0.09,0.04 0.06,0.13 0.15,0.12 0.32,-0.15 0.36,0.36 0.27,0.49 v 0.29 l -0.2,0.08 -0.12,0.3 0.11,-0.17 0.12,0.08 -0.18,0.22 v 0.22 l 0.02,0.01 0.18,-0.16 0.07,-0.12 0.03,-0.11 -0.03,-0.09 0.16,-0.01 h 0.06 l 0.07,0.05 v -0.19 l 0.04,-0.2 0.05,-0.07 0.04,-0.1 0.07,-0.18 0.23,-0.12 0.22,0.16 0.3,0.07 -0.08,-0.13 -0.15,-0.3 h 0.02 l 0.03,-0.13 0.03,-0.08 -0.03,-0.36 0.05,-0.09 0.05,-0.12 0.02,-0.15 0.02,-0.12 -0.01,-0.14 0.13,-0.04 0.01,-0.02 0.06,-0.18 0.08,-0.09 0.11,0.04 0.14,0.02 -0.09,-0.1 -0.11,-0.04 -0.05,-0.1 0.13,-0.19 0.13,-0.21 0.22,0.19 0.11,0.31 0.03,-0.21 -0.03,-0.08 -0.02,-0.11 -0.08,-0.13 -0.09,-0.14 0.04,-0.14 0.06,-0.11 0.02,-0.17 0.1,-0.03 0.07,-0.11 0.06,-0.11 0.02,-0.18 -0.01,-0.16 0.08,-0.08 0.2,-0.15 0.04,-0.1 v -0.11 l 0.07,-0.05 0.07,-0.11 0.06,-0.06 0.01,-0.06 0.04,-0.01 0.08,-0.25 0.08,0.02 0.07,-0.15 0.09,-0.03 0.09,-0.09 0.08,-0.07 0.2,-0.07 0.2,0.02 -0.11,-0.55 -0.19,0.06 -0.19,-0.07 0.22,-0.16 0.05,-0.06 0.06,-0.06 0.02,-0.19 -0.14,-0.02 h -0.06 l -0.04,0.08 -0.05,0.02 -0.02,0.06 -0.15,-0.06 0.33,-0.6 0.27,-0.24 0.2,-0.24 -0.18,-0.53 -0.07,-0.21 0.19,-0.08 1.2,0.39 0.64,0.17 0.01,0.53 0.09,0.63 0.58,0.33 0.13,0.05 -0.1,0.05 -0.02,0.14 0.12,0.03 h 0.1 l 0.05,0.03 0.26,0.02 0.15,0.04 0.12,0.05 0.24,0.1 h 0.28 l 0.25,-0.06 0.45,0.54 0.18,0.55 v -0.02 l 0.17,0.36 0.1,0.05 0.08,0.12 0.03,0.18 0.05,0.16 0.06,0.34 0.08,0.14 -0.06,0.15 -0.04,0.29 0.07,0.05 0.03,0.16 0.08,0.1 0.02,0.06 0.03,0.09 0.08,0.07 0.03,0.05 v 0.07 l -0.22,0.04 0.04,0.24 0.21,0.16 -0.13,0.15 -0.13,0.05 -0.02,0.18 0.22,0.1 0.12,0.23 0.14,0.25 -0.14,0.34 0.01,0.11 0.03,0.22 0.06,0.01 0.09,0.04 0.11,0.16 -0.44,0.24 -0.24,-0.08 -0.24,-0.11 -0.32,-0.08 0.33,0.24 0.34,0.13 h 0.32 l 0.34,-0.04 0.14,0.12 -0.03,0.18 0.3,0.09 0.22,0.14 0.16,0.12 0.18,0.24 0.03,0.33 0.06,-0.02 0.05,0.05 0.1,-0.23 0.07,-0.22 0.12,0.02 0.05,0.01 h 0.12 l 0.05,0.19 0.1,0.17 0.03,0.11 0.05,0.12 0.08,0.07 0.03,0.1 0.11,0.07 v 0.17 0.22 l -0.06,0.14 0.15,0.23 0.31,0.2 0.23,0.36 0.22,0.13 0.23,0.05 0.09,0.13 -0.17,0.1 0.12,0.06 0.05,0.05 -0.13,0.09 -0.11,0.17 -0.1,0.15 -0.04,0.23 -0.08,0.18 -0.34,-0.35 -0.37,0.21 0.38,-0.06 0.04,0.08 -0.18,0.09 -0.34,0.07 -0.31,0.14 -0.11,0.2 -0.21,0.05 -0.11,-0.17 -0.17,-0.12 -0.04,0.17 -0.06,0.12 -0.1,0.02 -0.15,-0.02 -0.2,-0.02 -0.02,0.14 -0.01,0.15 -0.06,0.16 -0.13,0.1 0.03,0.16 v 0.15 l 0.01,0.12 -0.01,0.13 -0.03,0.09 0.09,0.17 -0.09,0.08 h -0.06 l 0.02,0.1 0.05,0.05 -0.01,0.08 -0.07,0.15 -0.03,-0.01 0.04,0.21 0.09,0.04 0.03,0.1 -0.08,0.05 -0.02,0.05 -0.03,0.04 0.13,0.07 0.07,0.01 0.07,-0.02 0.13,-0.04 0.15,0.08 -0.1,0.02 -0.12,0.09 0.01,0.19 -0.04,0.19 0.19,0.19 0.11,0.31 0.05,0.14 0.09,0.09 -0.15,0.11 -0.04,0.14 0.05,0.03 -0.05,0.16 -0.1,0.06 0.14,0.06 0.09,-0.07 0.08,-0.03 0.17,0.09 0.11,0.08 0.02,0.08 0.12,0.06 0.07,0.16 0.1,0.03 0.03,0.09 0.11,0.02 0.06,0.14 0.05,0.12 v 0.15 l 0.24,0.09 0.2,0.16 0.08,0.1 v 0.16 l 0.11,0.13 0.04,0.23 0.09,0.14 0.04,0.07 0.04,0.1 0.24,0.12 0.14,-0.04 0.18,-0.03 0.07,0.23 0.1,0.07 0.12,0.01 0.01,0.16 0.02,0.13 0.11,0.01 0.08,0.01 0.05,0.23 0.05,0.1 0.12,-0.04 0.07,-0.13 0.13,-0.01 0.14,0.04 0.03,0.21 0.11,0.1 0.11,0.04 0.06,0.12 0.05,0.14 0.17,-0.03 0.26,0.1 0.14,0.05 0.08,0.16 0.1,0.11 0.09,0.08 0.14,0.03 0.1,0.14 0.11,0.05 0.1,0.18 0.09,0.2 0.1,0.12 0.02,0.19 0.15,0.16 0.11,0.04 0.11,0.12 0.21,0.17 0.16,0.2 v 0.27 l -0.1,0.21 -0.22,-0.02 -0.18,0.4 0.3,0.45 0.34,0.57 -0.17,0.15 -0.26,0.02 0.24,0.2 0.08,0.02 0.07,0.07 0.13,0.04 0.28,0.12 0.15,-0.02 0.11,0.09 v 0.09 l -0.15,0.08 0.41,0.07 0.16,0.1 0.11,0.24 0.07,0.28 0.03,0.26 0.16,0.06 0.17,-0.09 0.21,-0.01 -0.04,0.1 -0.01,0.13 0.12,-0.06 0.14,-0.07 h 0.14 l 0.09,-0.08 0.18,-0.01 h 0.13 l 0.02,0.24 0.24,0.11 0.13,0.03 0.12,0.01 0.31,0.13 0.13,-0.01 0.15,0.04 0.17,0.07 0.2,-0.01 0.66,0.07 0.54,-0.18 0.53,-0.08 0.14,-0.27 -0.05,-0.28 -0.02,-0.21 0.01,-0.18 0.18,-0.14 0.2,-0.15 -0.09,-0.11 -0.28,0.03 -0.25,-0.1 0.26,-0.1 0.04,-0.13 -0.23,0.06 -0.25,-0.04 -0.29,-0.16 -0.28,-0.06 -0.2,-0.24 -0.09,-0.37 -0.26,-0.24 -0.36,-0.39 -0.15,-0.15 -0.2,-0.21 -0.27,-0.34 -0.28,-0.27 -0.22,-0.11 0.01,-0.24 -0.18,-0.13 -0.15,-0.09 -0.15,-0.1 -0.11,-0.17 -0.09,0.09 -0.09,0.09 -0.18,-0.14 -0.3,-0.37 -0.11,-0.25 -0.08,-0.24 -0.15,0.1 -0.05,-0.21 -0.15,-0.1 0.09,-0.12 0.09,-0.12 -0.15,-0.12 -0.5,-0.13 -0.46,-0.11 -0.16,-0.61 -0.33,-0.46 -0.25,-0.36 0.07,-0.64 0.29,-0.3 -0.07,-0.54 -0.04,-0.17 0.14,-0.01 0.11,-0.02 0.05,-0.15 0.03,-0.12 0.03,-0.1 0.05,-0.04 0.04,-0.07 0.16,-0.27 -0.24,-0.48 -0.06,-0.28 -0.01,-0.33 -0.21,-0.15 0.02,-0.2 -0.18,-0.21 0.09,-0.07 0.09,-0.08 0.15,-0.32 -0.08,-0.01 -0.05,-0.04 0.07,-0.05 0.06,-0.06 0.05,0.02 h 0.02 l 0.23,0.02 0.11,0.02 0.05,0.06 0.12,0.05 -0.06,-0.17 -0.09,-0.16 0.18,-0.21 0.19,-0.21 0.05,0.26 -0.15,0.11 -0.06,0.21 0.15,-0.03 0.14,-0.1 0.14,-0.2 -0.08,-0.16 0.22,-0.26 0.22,0.15 0.13,0.37 0.1,-0.1 -0.14,-0.45 -0.1,-0.23 0.19,0.07 0.24,0.05 0.2,0.06 0.06,0.32 -0.06,0.3 0.12,0.06 0.11,0.05 0.11,0.02 0.09,0.03 -0.1,-0.11 -0.21,-0.29 0.24,-0.24 -0.09,-0.22 -0.17,-0.15 0.17,0.01 0.2,0.21 0.07,0.16 0.02,-0.33 -0.06,-0.08 -0.09,-0.03 -0.1,-0.09 0.19,0.04 0.17,0.11 0.05,0.12 0.07,0.06 0.07,0.05 0.11,-0.05 0.18,0.08 0.32,0.1 0.09,0.05 0.07,0.11 0.07,-0.06 0.16,0.15 0.1,0.02 0.12,0.02 0.12,0.08 0.09,0.13 0.16,0.01 v -0.23 l 0.07,-0.12 0.17,0.25 0.15,0.22 0.21,0.18 0.19,0.15 0.18,0.08 0.67,0.29 0.16,0.03 0.14,0.15 0.23,-0.06 0.21,0.17 0.3,0.19 0.25,0.14 0.32,0.11 0.14,0.06 0.21,0.04 0.17,0.07 0.2,0.06 0.32,0.17 h 0.14 l 0.15,0.04 0.22,0.03 0.38,0.1 0.12,0.12 0.06,0.08 0.11,-0.02 0.11,-0.04 0.69,0.36 0.26,0.19 0.28,0.15 0.05,0.04 -0.01,-0.06 -0.04,-0.15 0.04,-0.44 -0.13,0.13 -0.03,0.27 -0.06,-0.13 0.05,-0.18 -0.22,0.08 0.17,-0.26 0.29,-0.17 h 0.14 l 0.18,-0.06 0.54,-0.03 0.32,0.05 0.32,0.07 0.32,0.07 0.09,-0.27 0.19,-0.1 0.23,0.03 0.14,-0.09 -0.15,-0.2 -0.25,-0.04 -0.25,-0.02 -0.25,0.04 h -0.25 l -0.26,0.03 -0.25,-0.04 -0.29,-0.17 -0.07,-0.15 -0.02,-0.17 -0.07,-0.07 -0.17,-0.07 h -0.23 l -0.16,0.1 -0.23,-0.03 -0.06,-0.31 -0.14,-0.25 -0.21,0.05 -0.16,0.2 -0.2,-0.26 0.16,-0.2 -0.1,-0.33 -0.05,-0.01 -0.03,-0.08 -0.09,-0.06 -0.14,-0.04 -0.3,-0.05 h -0.2 l -0.24,-0.06 -0.26,-0.06 -0.19,-0.04 -0.13,-0.03 -0.12,-0.01 -0.04,0.08 -0.08,0.04 -0.21,0.02 h -0.23 l -0.24,-0.02 -0.28,-0.02 h -0.27 -0.1 l -0.13,-0.04 -0.11,-0.03 -0.1,-0.08 -0.09,0.1 -0.12,-0.13 -0.09,-0.06 -0.11,-0.05 -0.06,-0.11 -0.15,-0.13 h -0.1 l -0.17,-0.04 -0.17,0.02 -0.13,-0.04 h -0.12 l -0.13,0.06 -0.12,-0.06 -0.07,-0.15 -0.29,-0.12 -0.14,-0.02 h -0.16 l -0.06,-0.06 -0.07,-0.11 -0.13,-0.16 -0.08,-0.04 -0.09,0.04 -0.06,-0.03 h -0.08 l 0.05,-0.03 0.05,-0.01 0.05,-0.11 -0.1,-0.03 -0.06,-0.05 -0.08,-0.05 -0.11,-0.04 -0.18,-0.02 -0.08,-0.06 -0.07,-0.09 -0.2,-0.05 -0.08,-0.25 -0.04,-0.24 0.17,-0.02 0.23,-0.01 -0.27,-0.06 -0.15,-0.12 0.08,-0.18 0.22,0.01 0.17,-0.1 -0.23,-0.08 -0.14,-0.17 0.31,-0.34 0.06,-0.29 0.11,-0.02 0.05,-0.01 0.06,0.01 0.05,-0.01 0.06,0.01 h 0.11 l 0.19,-0.1 0.19,0.21 0.05,0.13 0.12,0.07 0.25,-0.03 v -0.16 l -0.15,-0.18 0.03,-0.38 -0.18,-0.35 -0.01,-0.25 v -0.23 -0.27 l 0.06,-0.23 0.03,-0.62 -0.07,-0.06 -0.08,-0.06 -0.07,-0.09 -0.04,-0.02 -0.06,-0.03 -0.15,-0.17 -0.17,-0.15 -0.09,-0.06 -0.44,-0.25 -0.17,0.01 -0.11,0.12 -0.35,0.02 -0.16,0.39 -0.05,0.21 -0.24,0.16 -0.28,0.1 -0.29,0.18 -0.2,0.29 -0.14,-0.1 -0.26,-0.24 -0.26,-0.16 -0.42,-0.09 -0.28,-0.38 -0.29,-0.45 -0.02,-0.45 0.01,-0.3 -0.22,-0.19 -0.21,-0.17 -0.11,-0.54 -0.07,-0.7 0.08,-0.61 0.06,-0.65 0.24,-0.5 0.04,-0.64 -0.11,-0.64 -0.36,-0.2 -0.54,0.03 -0.48,-0.03 -0.47,-0.16 0.09,-0.41 0.56,-0.02 v -0.07 l -0.25,-0.16 -0.2,-0.11 -0.14,-0.2 -0.11,-0.08 -0.21,-0.18 -0.4,-0.31 -0.39,-0.29 -0.23,0.09 -0.23,-0.01 -0.42,0.09 -0.35,0.24 -0.27,0.45 0.24,0.04 0.18,-0.09 0.17,-0.12 0.19,-0.09 -0.03,0.18 -0.7,0.24 -0.84,-0.14 -0.84,-0.41 -0.75,-0.44 -0.58,-0.44 -0.43,-0.51 -0.53,-0.22 -0.61,-0.25 -1.01,-0.55 -0.93,-0.29 -0.59,0.34 -0.1,-0.09 -0.16,-0.14 -0.12,-0.14 -0.08,0.14 -0.07,0.05 -0.05,0.07 -0.13,0.08 -0.16,0.05 -0.22,0.32 -0.29,-0.25 -0.19,0.02 -0.17,-0.1 -0.37,-0.26 -0.17,-0.12 -0.13,-0.24 -0.23,0.01 -0.3,-0.03 -0.41,-0.51 -0.44,-0.04 -0.17,-0.07 -0.17,-0.03 -0.19,0.12 0.16,0.22 0.24,0.15 0.02,0.37 -0.28,-0.04 -0.36,-0.2 -0.13,0.14 -0.22,0.04 -0.18,0.04 -0.22,-0.04 -0.19,-0.02 -0.27,-0.04 0.25,0.29 -0.09,0.41 -0.15,-0.05 -0.11,0.07 -0.3,0.15 0.6,0.13 0.08,0.04 -0.26,0.18 -0.31,-0.03 -0.17,0.01 -0.09,-0.02 -0.07,-0.1 0.15,0.29 0.04,0.16 0.12,0.1 -0.03,0.35 v 0.15 l -0.05,0.14 0.21,0.08 0.06,0.27 -0.15,0.07 0.27,0.01 0.29,0.2 -0.18,0.19 0.22,0.09 0.21,0.08 0.01,0.03 0.06,0.16 -0.02,0.14 v 0.17 l 0.02,0.07 -0.01,0.1 0.38,0.35 v -0.13 l -0.2,-0.2 v -0.06 l 0.27,0.05 0.25,0.18 0.21,0.36 0.08,0.36 -0.18,-0.01 -0.22,-0.02 -0.41,0.22 -0.13,0.41 0.13,0.52 0.23,0.35 0.06,0.57 -0.04,0.44 0.11,0.2 -0.11,-0.08 -0.58,-0.43 -0.45,-0.21 -0.34,-0.76 -0.5,-0.32 -0.79,-0.21 -0.6,-0.47 -0.09,-0.39 0.21,-0.24 0.23,-0.22 -0.31,0.05 -0.18,0.04 -0.1,0.12 -0.09,-0.64 0.02,-0.63 0.07,-0.63 -0.04,-0.53 0.27,-0.21 -0.1,0.11 -0.04,0.21 0.21,-0.18 0.23,-0.02 0.26,-0.46 -0.04,-0.59 0.04,-0.51 0.07,-0.08 0.11,-0.07 0.08,-0.14 0.05,-0.08 0.05,-0.07 0.09,-0.09 -0.22,-0.17 -0.31,-0.13 -0.1,-0.24 0.24,0.03 0.33,0.07 -0.08,-0.09 -0.1,-0.06 -0.12,-0.2 0.14,-0.05 h 0.12 l 0.06,-0.01 0.05,-0.03 0.06,-0.01 0.01,-0.01 -0.17,-0.1 -0.2,-0.08 0.1,-0.18 0.24,0.01 0.24,0.04 0.2,-0.01 -0.34,-0.12 -0.31,-0.14 -0.37,0.04 -0.21,-0.31 0.03,-0.45 -0.2,0.01 -0.18,-0.01 -0.02,-0.17 0.02,-0.23 -0.08,0.02 -0.08,0.03 -0.08,0.24 -0.1,0.18 -0.07,0.08 -0.05,0.01 -0.07,0.03 -0.1,-0.04 -0.21,-0.09 -0.43,-0.11 -0.37,-0.23 -0.22,-0.48 0.03,-0.36 -0.24,-0.26 -0.19,0.23 0.29,0.15 -0.14,0.15 -0.2,0.06 -0.34,-0.19 -0.38,-0.12 -0.24,-0.05 -0.59,-0.14 -0.38,-0.65 0.17,-0.49 0.58,0.14 -0.11,-0.11 -0.09,-0.16 0.11,0.01 h 0.12 l 0.01,-0.15 0.04,-0.12 -0.38,-0.17 0.04,-0.08 0.02,-0.09 0.05,-0.13 v -0.16 l -0.11,0.06 -0.1,-0.05 -0.14,-0.24 -0.05,-0.08 -0.04,-0.15 -0.14,0.01 -0.07,0.1 -0.07,0.19 -0.14,0.19 -0.08,0.28 -0.15,0.07 -0.16,-0.06 -0.14,0.25 -0.06,0.22 0.08,0.39 0.11,0.34 0.13,0.32 -0.09,-0.11 -0.09,-0.12 -0.1,-0.2 -0.08,-0.1 -0.12,-0.3 v -0.36 l -0.05,-0.29 -0.07,-0.28 -0.14,-0.62 -0.19,-0.16 -0.11,-0.21 -0.09,-0.23 -0.05,-0.17 -0.12,-0.08 -0.06,-0.15 0.07,-0.1 h 0.12 l 0.17,-0.13 -0.13,0.01 -0.05,0.02 -0.06,0.02 -0.05,0.03 -0.07,0.01 -0.07,-0.02 -0.05,-0.04 0.05,-0.07 0.04,-0.07 0.13,-0.02 0.27,-0.12 -0.15,-0.05 -0.15,0.01 -0.12,0.06 -0.15,0.02 0.17,-0.21 0.25,-0.12 -0.03,-0.12 -0.26,0.03 -0.3,0.07 -0.23,-0.01 -0.15,-0.05 -0.13,-0.2 0.15,-0.05 0.23,-0.01 0.16,-0.04 0.18,0.14 0.09,-0.01 0.11,-0.01 0.09,-0.03 0.06,-0.07 -0.12,-0.02 h -0.07 l -0.09,0.02 -0.16,-0.14 -0.18,-0.01 -0.22,0.03 -0.22,-0.06 -0.44,-0.24 -0.23,-0.12 -0.25,-0.24 -0.34,-0.29 -0.35,-0.24 -0.23,-0.1 -0.53,-0.12 -0.33,-0.33 -0.06,-0.7 0.08,-0.76 -0.2,-0.02 -0.04,-0.2 -0.11,-0.1 -0.12,-0.14 -0.13,-0.11 -0.28,-0.23 -0.11,-0.08 -0.12,0.04 -0.1,-0.07 -0.29,-0.14 -0.31,-0.26 -0.39,-0.67 h 0.43 l -0.11,-0.13 -0.16,-0.06 -0.21,-0.06 -0.09,-0.12 -0.2,-0.12 -0.27,0.01 -0.26,0.03 -0.32,-0.06 -0.26,0.02 -0.27,-0.14 -0.18,0.16 -0.09,0.26 -0.04,0.31 -0.28,-0.11 -0.29,-0.04 -0.24,0.01 -0.03,-0.14 0.13,-0.3 0.1,-0.29 0.13,-0.2 0.16,-0.67 0.06,-0.41 0.17,-0.21 h -0.22 l -0.19,-0.12 -0.1,-0.04 -0.11,-0.05 -0.11,0.15 -0.2,-0.08 -0.15,-0.17 -0.34,0.11 -0.13,-0.1 -0.11,-0.1 -0.25,-0.18 -0.24,0.33 -0.32,0.22 -0.39,-0.11 -0.2,-0.11 v -0.3 h -0.12 l -0.09,0.03 -0.1,0.01 -0.12,-0.02 0.03,-0.11 -0.11,-0.01 -0.39,0.01 -0.28,-0.12 -0.28,-0.16 -0.24,-0.25 -0.08,-0.48 0.12,0.08 0.08,0.03 0.11,0.07 0.1,0.02 0.11,-0.02 0.13,0.02 0.1,-0.04 0.05,-0.11 -0.12,0.03 -0.13,-0.03 -0.23,-0.18 0.26,0.04 0.17,-0.12 -0.37,-0.18 -0.25,-0.17 0.15,-0.05 0.12,0.02 0.12,-0.03 0.13,-0.09 0.07,-0.2 0.12,-0.09 0.15,0.24 0.15,-0.01 0.13,0.07 0.08,-0.14 0.17,0.06 0.12,-0.08 0.16,0.05 0.09,-0.13 0.12,-0.01 0.16,-0.04 0.07,-0.01 0.03,-0.06 0.08,-0.04 0.1,-0.01 0.16,0.12 0.1,-0.01 0.06,0.05 h 0.21 l -0.14,-0.24 -0.03,-0.07 0.41,0.19 0.12,-0.2 -0.11,-0.22 0.14,-0.1 0.2,-0.02 0.19,0.18 0.25,0.05 -0.04,-0.12 -0.08,-0.01 -0.1,-0.03 -0.09,-0.11 0.12,-0.16 0.14,-0.14 -0.15,-0.48 0.06,-0.14 0.2,-0.1 0.25,-0.46 0.4,-0.13 0.4,-0.1 0.11,-0.06 -0.04,-0.16 0.12,-0.49 -0.03,-0.29 -0.13,-0.07 -0.02,0.12 -0.03,0.1 -0.11,0.15 -0.17,0.05 0.07,-0.22 0.15,-0.19 0.06,-0.32 0.16,-0.09 0.38,-0.19 0.13,-0.18 0.08,-0.28 0.05,-0.32 0.13,-0.23 -0.28,0.39 -0.31,0.5 -0.25,-0.07 v -0.37 l -0.01,-0.46 -0.06,-0.47 -0.03,-0.22 v -0.18 l 0.14,0.21 0.11,-0.25 -0.25,-0.12 -0.06,-0.43 -0.02,-0.5 -0.07,-0.44 -0.1,-0.57 -0.09,-0.49 -0.27,-0.34 -0.67,-0.29 -0.34,-0.09 -0.3,0.09 -0.33,0.04 -0.28,-0.17 -0.32,-0.01 -0.27,-0.05 -0.08,0.02 -0.04,0.15 -0.15,0.06 -0.15,-0.13 -0.13,-0.12 v 0.11 l -0.12,0.03 -0.14,-0.1 -0.12,-0.1 -0.19,-0.1 -0.3,-0.09 -0.15,-0.02 -0.41,0.07 -0.32,0.02 h -0.13 l -0.17,0.02 -0.34,0.03 -0.16,-0.03 -0.21,0.03 -0.12,0.14 -0.19,-0.17 -0.19,-0.11 -0.21,-0.06 -0.43,-0.07 -0.5,-0.09 h -0.26 l -0.21,-0.03 -0.06,0.07 -0.06,0.08 -0.34,0.14 -0.6,-0.18 -0.23,-0.29 -0.26,-0.21 -0.16,-0.39 -0.18,-0.21 -0.33,0.05 -0.23,-0.25 -0.21,-0.2 -0.09,-0.26 -0.01,-0.2 0.16,-0.15 0.1,-0.12 0.11,0.01 0.08,0.01 -0.08,-0.17 -0.08,-0.3 h 0.11 l 0.21,0.17 0.08,-0.11 0.05,-0.1 -0.07,-0.13 -0.05,-0.17 0.11,0.08 0.12,0.12 -0.12,-0.22 -0.17,-0.21 0.04,-0.11 0.17,0.17 -0.1,-0.26 -0.05,-0.14 -0.07,-0.1 -0.03,-0.31 0.03,-0.33 0.04,-0.14 0.12,0.02 -0.04,-0.14 v -0.15 -0.29 l 0.1,-0.26 0.03,-0.27 0.03,-0.59 -0.06,-0.61 -0.12,-0.55 -0.11,-0.44 0.01,-0.23 -0.09,-0.27 -0.07,-0.31 -0.19,-0.69 -0.24,-0.52 -0.16,-0.66 -0.03,-0.45 0.02,-0.27 0.12,0.06 0.21,0.28 0.3,0.16 -0.08,-0.23 -0.17,-0.25 -0.07,-0.51 0.36,0.17 0.1,0.14 0.06,-0.18 0.03,-0.23 v -0.23 l -0.04,-0.59 0.03,-0.66 v -0.49 l -0.09,-0.48 -0.13,-0.52 0.78,0.44 0.44,-0.09 0.34,-0.03 0.39,0.29 0.45,0.28 0.78,-0.19 0.38,-0.45 0.2,-0.7 0.19,-0.35 0.85,-0.37 0.37,0.55 0.47,0.43 0.41,0.3 0.39,0.36 1.1,0.16 0.21,0.04 0.26,0.11 0.35,0.06 0.31,-0.11 0.35,0.29 0.35,0.08 0.3,-0.06 0.24,0.5 0.16,0.5 0.29,0.61 0.62,0.44 0.2,0.07 0.28,0.2 0.01,0.25 0.16,0.29 0.15,0.56 0.26,0.57 0.25,0.27 0.33,0.21 0.27,0.33 -0.11,0.28 -0.35,0.19 -0.08,0.28 -0.08,0.3 -0.08,0.37 0.05,0.43 0.22,0.52 0.28,0.55 0.31,0.47 0.27,0.6 0.25,0.4 0.18,0.08 0.13,0.08 -0.22,0.21 0.05,0.08 0.17,0.24 0.19,0.27 0.23,0.14 0.25,0.15 0.29,0.12 0.29,0.08 0.22,0.15 0.26,0.16 0.23,0.22 0.18,0.28 0.27,0.23 0.24,0.13 0.5,0.5 0.22,0.32 -0.05,0.33 -0.04,0.27 0.14,0.16 v 0.14 l -0.19,0.2 -0.1,0.7 0.1,0.8 0.43,0.43 0.24,0.12 0.29,0.28 0.48,0.33 0.08,-0.08 0.11,-0.08 0.19,0.02 0.32,0.04 0.18,-0.14 0.25,0.06 0.07,0.15 0.15,-0.02 0.03,-0.16 0.16,-0.01 0.29,0.08 0.03,-0.18 0.1,-0.08 0.25,0.1 0.1,-0.06 0.09,-0.02 0.08,-0.12 0.07,-0.05 h 0.13 l 0.15,0.05 0.11,-0.05 0.08,0.1 0.12,0.07 0.14,0.03 0.11,0.1 0.12,0.09 0.13,0.06 0.11,0.06 -0.05,0.14 -0.14,0.04 0.11,0.05 0.08,0.07 0.1,0.09 0.01,0.14 0.13,-0.01 0.14,0.12 0.07,0.13 0.1,0.04 0.15,0.09 0.12,0.14 0.15,0.1 0.1,0.16 0.22,0.2 0.07,0.15 0.09,0.19 0.04,-0.31 0.19,0.03 0.18,0.19 0.15,0.04 0.1,0.18 0.21,0.34 0.46,0.65 0.3,0.23 1.12,-0.21 0.31,-0.19 0.62,-0.15 0.26,-0.85 0.31,-0.78 0.04,-0.53 0.36,0.02 v -0.18 l -0.02,-0.18 0.42,-0.21 0.16,-0.29 0.01,-0.29 0.34,0.09 0.26,-0.09 0.23,-0.24 0.13,-0.38 0.28,-0.03 0.22,-0.19 0.15,-0.31 0.44,-0.33 0.18,-0.2 0.26,-0.04 0.22,-0.18 0.19,-0.17 0.29,0.12 0.26,-0.02 0.4,0.14 0.22,-0.38 0.11,-0.16 0.09,-0.27 0.34,-0.1 0.43,-0.11 -0.24,-0.22 0.12,-0.04 0.58,0.1 0.22,-0.35 -0.09,-0.49 0.25,-0.04 0.27,-0.11 0.18,-0.21 0.18,0.19 0.37,-0.33 0.13,-0.56 0.07,-0.25 0.21,-0.19 0.12,-0.61 0.04,-0.32 0.07,-0.6 -0.17,-0.1 -0.34,-0.28 0.14,-0.27 -0.08,-0.36 -0.19,-0.21 -0.14,-0.24 0.29,-0.49 0.39,0.32 0.64,0.87 0.17,1.04 0.51,0.29 0.33,0.43 -0.14,0.69 -0.49,0.36 -0.37,0.18 -0.03,0.21 0.18,0.28 -0.05,0.41 0.12,0.13 0.09,0.15 0.12,0.34 0.43,0.48 0.33,-0.01 -0.1,-0.15 0.58,-0.18 0.32,0.03 0.18,-0.29 0.09,-0.47 0.44,-0.23 0.17,0.53 0.13,0.34 -0.15,0.31 -0.52,0.52 -0.63,0.25 -0.63,0.4 -0.76,0.27 -0.64,0.21 -0.4,0.14 -0.23,0.23 0.15,0.4 0.18,0.37 -0.5,0.03 -0.55,-0.15 -0.91,0.26 -0.65,0.59 -0.62,0.73 -0.31,1.2 -0.32,0.5 -0.48,0.26 -0.32,0.27 -0.49,0.23 -0.68,1.27 0.2,0.59 0.19,0.14 -0.14,0.19 -0.14,0.23 -0.11,0.05 -0.04,0.18 -0.12,0.04 0.02,0.3 0.19,0.2 0.36,0.3 -0.16,-0.36 0.32,0.21 0.25,0.22 0.29,0.2 0.19,0.3 0.73,0.09 0.37,-0.1 -0.04,-0.28 -0.36,-0.16 -0.05,-0.34 0.21,-0.52 0.25,-0.42 0.13,-0.2 0.18,0.4 0.53,0.96 0.7,-0.48 0.29,-1.15 0.39,-0.33 0.32,-0.18 -0.07,-0.14 -0.31,-0.01 -0.31,-0.12 0.34,-0.28 0.19,-0.11 0.13,-0.18 0.21,-0.07 0.18,-0.09 0.18,-0.11 0.05,-0.24 0.37,-0.26 0.54,0.2 0.58,-0.17 0.24,-0.23 0.24,-0.16 0.14,-0.08 0.11,-0.14 0.22,-0.28 -0.18,0.04 -0.23,0.1 -0.32,-0.01 -0.27,-0.18 -0.33,-0.11 0.12,-0.03 0.21,0.05 0.37,0.15 0.18,0.01 0.15,-0.02 0.18,-0.12 0.17,-0.04 0.44,0.04 0.61,-0.42 0.33,-0.13 0.16,-0.08 0.15,0.1 0.15,-0.36 0.18,-0.06 0.1,-0.15 0.11,-0.05 0.07,-0.07 0.14,-0.15 0.17,-0.33 0.37,0.04 0.18,-0.36 -0.2,-0.45 -0.1,-0.39 0.1,-0.18 -0.03,-0.31 -0.02,-0.39 0.1,-0.08 -0.23,-0.31 -0.08,-0.48 0.26,-0.18 v -0.5 l -0.13,0.08 -0.1,0.16 0.15,-0.36 0.34,-0.16 0.28,-0.13 0.19,-0.36 0.05,-0.46 0.26,-0.14 0.11,-0.38 0.15,-0.28 0.25,-0.09 0.18,-0.25 0.17,-0.22 0.02,0.09 0.15,0.02 0.14,0.05 h 0.15 l 0.15,0.15 -0.03,-0.41 -0.31,-0.02 -0.28,-0.18 -0.2,-0.24 v -0.43 l 0.2,0.32 0.19,0.24 0.17,-0.26 0.14,-0.32 0.09,-0.21 0.13,-0.27 0.16,0.26 0.14,0.22 0.15,-0.39 0.28,0.12 0.16,0.08 0.09,0.19 0.28,0.05 0.22,-0.13 0.13,0.03 0.13,-0.04 0.13,0.3 h 0.13 l 0.07,-0.17 0.03,-0.17 0.14,0.02 0.37,-0.07 0.43,0.04 0.05,-0.31 -0.29,-0.21 -0.49,-0.16 -0.46,0.28 -0.38,0.1 -0.34,0.15 -0.27,-0.34 -0.2,-0.06 -0.05,0.04 -0.16,0.05 -0.19,-0.13 0.01,-0.13 -0.25,-0.38 -0.1,-0.26 0.22,-0.2 0.24,-0.31 0.26,-0.2 v -0.93 l 0.48,-0.76 0.01,0.38 0.01,0.16 0.07,0.32 0.32,-0.22 0.21,-0.28 0.13,-0.46 0.08,-0.21 0.09,0.47 0.48,0.1 0.23,-0.35 0.35,-0.23 -0.1,0.24 -0.14,0.16 0.01,0.22 -0.03,0.32 -0.09,0.22 -0.05,0.29 -0.09,0.21 -0.09,0.27 -0.06,0.13 -0.07,0.1 v 0.38 l 0.19,-0.16 0.35,-0.06 0.2,-0.27 0.21,0.31 0.28,0.1 -0.69,0.8 1,0.33 0.5,-0.67 0.06,0.3 -0.03,0.31 -0.13,0.6 0.13,0.11 -0.19,0.23 -0.24,0.01 -0.26,0.08 0.21,0.07 0.23,0.04 h 0.22 l 0.19,-0.11 0.24,-0.67 0.29,-0.04 0.1,0.34 -0.49,0.35 -0.3,0.75 -0.63,0.04 -0.49,0.49 -0.59,-0.29 0.27,0.05 0.12,-0.21 0.17,-0.1 0.19,-0.13 0.13,-0.15 0.09,-0.19 -0.4,0.07 -0.37,0.17 -0.15,0.17 -0.22,0.04 h -0.26 l -0.2,0.1 -0.23,-0.1 -0.19,0.05 h -0.28 l -0.33,-0.01 0.48,0.19 0.47,-0.04 0.71,0.42 -0.26,0.51 0.2,0.07 0.02,0.14 0.06,-0.05 0.32,-0.06 0.1,-0.14 0.09,-0.15 -0.05,0.28 -0.13,0.24 -0.06,0.09 -0.09,0.03 -0.11,0.18 -0.16,0.11 -0.11,0.22 -0.08,0.31 -0.17,0.09 -0.1,0.23 -0.1,0.3 0.08,0.52 0.14,0.46 0.52,-0.44 0.48,-0.1 0.03,0.16 0.06,0.04 0.1,-0.02 0.08,-0.07 0.16,-0.1 0.13,0.02 0.06,-0.14 0.09,-0.08 0.1,-0.24 0.14,0.11 -0.2,0.28 -0.19,0.32 0.24,0.21 -0.16,0.26 -0.06,0.29 0.46,0.3 0.19,0.08 0.17,0.09 0.31,0.43 0.34,-0.09 0.33,0.03 0.32,0.36 0.3,-0.14 0.42,0.06 0.16,-0.1 0.25,0.01 0.41,-0.12 0.41,-0.32 0.4,0.11 0.29,0.07 -0.21,-0.32 -0.49,-0.5 -0.25,-0.71 0.25,0.2 0.15,0.25 0.22,0.28 0.19,0.24 0.18,0.26 0.28,0.21 0.54,0.48 0.28,0.46 0.06,0.2 0.32,0.1 0.22,0.03 0.19,-0.01 0.13,0.15 0.2,0.14 0.43,-0.1 0.35,0.02 0.18,-0.05 0.24,0.03 0.42,-0.06 0.25,-0.29 0.24,0.09 0.26,0.02 h 0.44 l -0.79,-0.27 -0.38,-0.11 -0.37,-0.11 -0.16,-0.34 0.32,-0.11 0.05,-0.04 -0.2,-0.05 -0.62,-0.09 -0.97,-0.28 -0.53,-0.18 -0.45,0.05 -0.54,0.03 -1.23,-1.29 -0.2,-0.55 0.08,-0.48 0.57,0.12 0.8,0.33 -0.13,-0.24 -0.08,-0.27 -0.18,-0.12 -0.2,-0.21 0.22,-0.21 0.23,-0.11 -0.17,-0.28 0.12,-0.15 0.3,-0.12 -0.36,-0.36 -0.24,-0.14 0.12,-0.27 0.5,-0.31 -0.72,-0.07 -0.42,0.42 0.21,-0.47 -0.17,-0.18 -0.25,-0.13 0.36,-0.13 0.24,-0.02 h 0.25 l 0.45,-0.23 0.33,-0.44 -0.33,-0.3 -0.59,0.06 -0.11,-0.15 0.27,-0.06 0.02,-0.08 0.5,0.04 0.1,-0.4 0.08,-0.22 0.18,0.06 0.27,-0.02 0.11,-0.24 -0.55,-0.39 0.05,-0.25 0.17,0.09 0.22,0.05 0.47,0.11 0.45,0.15 0.26,-0.01 0.3,0.06 -0.18,-0.13 -0.19,-0.09 -0.17,-0.08 -0.1,-0.18 -0.16,-0.17 -0.19,-0.03 -0.19,-0.06 -0.2,-0.1 -0.34,-0.25 0.28,-0.01 0.15,0.16 0.17,0.1 0.2,0.03 0.2,0.03 0.1,0.01 0.06,0.05 -0.12,-0.28 -0.04,-0.18 0.31,0.37 0.38,0.39 0.49,-0.2 0.53,0.05 0.11,-0.72 0.67,-0.36 0.49,0.08 0.2,0.2 0.17,0.07 0.18,0.13 0.19,-0.07 h 0.19 l 0.05,0.45 0.08,0.36 -0.04,0.23 0.02,0.2 0.29,0.16 0.77,0.08 0.52,-0.21 0.58,-0.22 0.48,-0.25 0.41,-0.56 0.5,-0.24 0.53,0.3 0.71,0.15 0.47,0.5 0.21,0.03 0.17,0.09 0.18,0.22 0.09,0.27 0.2,0.23 0.16,0.18 0.25,0.22 0.26,0.17 0.32,-0.12 0.32,-0.1 0.34,-0.15 0.42,0.05 v 0.21 0.25 l 0.9,0.37 -0.19,-1.06 -0.43,-0.32 0.15,-0.33 0.18,-0.33 -0.16,-0.34 -0.12,-0.47 -0.06,-0.47 0.25,-0.23 0.02,-0.53 -0.02,-0.96 0.14,-0.41 -0.26,-0.36 -0.3,-0.36 -0.08,-0.48 -0.15,-0.56 -0.17,-0.51 -0.22,-0.61 -0.16,-0.53 -0.18,-0.51 -0.11,-0.51 -0.15,-0.57 -0.03,-0.3 -0.08,-0.33 -0.09,-0.3 -0.08,-0.25 -0.23,-0.52 -0.05,-0.29 -0.19,-0.37 -0.7,-1.02 -0.92,-0.33 -0.53,-0.17 -0.14,0.36 -0.07,-0.49 -0.27,0.12 -0.16,-0.12 -0.2,-0.09 -0.13,0.1 -0.13,0.15 -0.08,0.15 -0.12,-0.1 -0.03,0.16 -0.07,0.04 -0.09,-0.35 -0.18,-0.09 -0.08,0.18 -0.08,0.15 -0.31,0.16 -0.06,0.35 -0.47,-0.17 -0.35,0.27 -0.48,-0.03 0.2,-0.03 0.08,-0.08 -0.44,-0.32 -0.48,-0.11 0.41,0.39 0.01,0.04 -0.25,-0.16 -0.52,-0.11 -0.18,-0.43 -0.16,-0.1 -0.15,-0.01 -0.05,-0.4 -0.03,-0.25 -0.24,0.03 -0.03,0.27 -0.46,-0.49 -0.62,-0.48 -0.59,0.17 -0.61,0.26 h -0.34 l -0.3,-0.07 -0.15,0.1 -0.1,0.24 -0.14,-0.09 -0.17,-0.05 -0.18,0.02 -0.13,0.01 -0.12,0.31 -0.48,-0.02 -0.2,0.1 -0.21,0.02 -0.23,0.01 -0.22,-0.03 -0.19,0.02 -0.24,0.04 -0.46,0.13 -0.48,-0.22 -0.34,-0.11 -0.38,-0.14 -0.48,1.04 -0.52,-0.06 -0.53,-0.01 -0.3,0.09 -0.19,0.02 -0.19,0.17 -0.87,0.02 -0.14,0.28 -0.07,0.44 0.04,0.14 -1.31,0.3 h -0.63 l -0.32,-0.08 -0.29,-0.29 -0.41,-0.12 -0.24,-0.16 -0.28,-0.16 -0.52,-0.38 -0.75,-1.09 -0.08,-0.42 -0.04,-0.42 0.31,-1.55 -0.8,-1.53 -1.75,0.01 -0.38,0.42 -1.03,0.51 -1.24,0.24 -1.46,0.24 -0.32,0.25 -0.45,1.57 -1.02,0.39 -0.64,0.34 -0.66,0.16 -0.4,0.1 -0.67,-0.1 -0.69,-0.3 -0.46,0.06 -0.44,0.31 -0.56,0.2 -0.45,0.02 -0.21,0.24 -0.03,0.27 -0.06,0.41 h -0.21 l -0.06,-0.21 -0.21,-0.14 -0.09,0.15 0.09,0.22 0.09,0.13 0.25,0.12 0.15,0.19 -0.15,0.05 -0.13,0.11 -0.23,-0.06 -0.02,-0.22 -0.09,-0.24 -0.18,-0.16 -0.37,0.14 -0.27,0.26 0.04,1.06 0.74,0.77 0.57,0.95 0.06,0.28 0.11,0.23 -0.28,0.74 -0.51,0.54 -0.15,0.79 0.46,0.71 0.41,0.76 v 0.35 l -0.16,0.25 -0.32,-0.44 -0.33,-0.33 -0.36,-0.25 -0.04,0.18 0.03,0.23 -0.2,0.38 0.07,0.06 -0.18,0.08 0.2,0.07 -0.28,0.04 h -0.15 l -0.14,0.09 0.02,0.05 -0.66,-0.2 -0.63,-0.4 -0.27,-0.37 -0.34,-0.15 -0.29,-0.12 -0.32,-0.03 -0.58,-0.02 -0.35,-0.07 -0.37,0.24 -0.16,-0.27 v -0.2 l -0.21,0.01 h -0.13 l -0.12,-0.06 -0.1,0.06 h -0.15 l -0.15,-0.05 -0.14,-0.06 0.06,0.27 -0.25,0.01 -0.19,-0.17 0.09,-0.12 -0.02,-0.08 -0.24,-0.11 -0.47,-0.12 -0.4,-0.56 -0.29,-0.01 -0.17,-0.11 -0.21,0.21 -0.07,0.32 -0.36,0.05 -0.42,-0.01 -0.82,-0.21 -0.37,-0.1 -0.36,-0.21 -0.37,-0.12 -0.32,-0.03 -0.43,-0.45 -0.84,-0.22 -0.5,-0.1 -0.69,-0.16 -0.66,-0.52 -0.62,-0.47 -0.48,-0.74 -0.58,-0.19 -0.5,-0.23 -0.59,-0.45 -0.16,-0.34 -0.24,-0.35 -0.58,-0.41 -0.58,-0.18 -0.74,-0.16 -0.32,0.63 -0.15,-0.31 -0.2,-0.2 -0.48,-0.1 -0.2,0.04 -0.2,-0.18 -0.24,0.07 -0.21,-0.12 -0.26,-0.14 -0.6,0.04 -0.64,0.82 -0.17,0.59 -0.33,-0.18 -0.36,-0.16 -0.31,-1.02 -0.35,-1.21 -0.43,-1.38 -0.62,-0.92 -0.8,-0.66 -0.5,-0.37 -1.13,-1.12 -0.63,-1.81 -0.58,-1.35 -0.21,-2.11 0.2,-0.21 0.06,-0.36 -0.21,-1.09 -0.18,-0.57 -0.92,-1.46 -2.06,-2.19 -1.26,-0.64 -0.56,-1.51 -0.46,-1.45 -0.97,-1 -0.12,-0.77 -0.29,-0.68 -0.13,-1.17 -0.23,-0.92 -0.19,-0.14 -0.16,-0.27 -0.14,-0.31 -0.37,-0.5 -0.31,-0.38 -0.21,-0.57 0.11,0.1 0.1,0.2 0.16,0.32 v -0.25 l -0.2,-0.38 -0.1,-0.32 -0.18,-0.46 -0.1,-0.31 0.09,-0.32 -0.23,-0.23 -0.06,-0.36 -0.12,-0.45 -0.05,-0.51 -0.46,-0.24 -0.2,-0.67 -0.13,-1.49 -0.03,-0.88 0.11,0.57 0.06,0.53 0.23,-0.21 0.06,-0.58 -0.19,0.45 0.27,-0.72 0.16,-0.32 0.09,0.4 0.18,-0.62 0.16,-0.5 -0.11,-1.14 -0.23,-0.47 0.28,0.21 -0.36,-0.35 0.19,-0.28 0.21,-0.35 0.13,-0.59 0.18,-1.48 -0.02,-0.88 -0.31,-1.4 -0.26,-1.3 -0.09,-1.32 -0.28,-0.97 -0.35,-0.71 -0.32,-0.58 -0.38,-0.23 0.64,-0.38 0.12,-0.44 0.2,-0.42 0.09,-0.64 0.12,0.06 0.13,0.07 -0.15,-0.22 0.08,-0.21 0.15,-0.54 0.28,0.16 0.28,0.2 0.34,-0.05 0.32,0.02 -0.25,-0.08 -0.36,-0.07 -0.29,-0.26 -0.33,-0.15 -0.18,0.42 -0.24,-0.35 0.11,-0.67 -0.1,-0.68 0.24,-0.02 0.34,-0.15 -0.34,0.08 -0.2,-0.36 0.2,-0.29 0.21,-0.32 0.26,0.18 0.09,0.11 0.14,0.03 -0.3,-0.57 0.56,-0.09 -0.07,-0.46 0.16,0.09 0.19,0.01 0.17,0.11 0.06,0.24 0.33,-0.01 0.3,0.16 -0.42,-0.28 -0.19,-0.39 -0.11,-0.35 0.36,0.27 0.18,0.14 0.21,-0.21 -0.21,0.04 -0.16,-0.17 -0.18,-0.15 -0.06,-0.37 0.19,0.25 -0.05,-0.2 -0.03,-0.23 0.08,-0.16 0.15,0.12 v -0.39 l 0.14,0.24 0.21,0.21 -0.15,-0.46 0.15,-0.49 0.16,0.43 0.22,0.21 -0.13,-0.27 v -0.12 l 0.03,-0.31 h 0.07 l 0.07,-0.16 0.16,0.39 -0.05,-0.31 -0.07,-0.25 -0.02,-0.15 0.21,-0.11 0.03,-0.15 0.05,-0.08 0.02,-0.13 0.18,-0.08 0.13,-0.16 0.06,-0.1 0.04,-0.1 0.12,0.2 0.08,-0.1 -0.05,-0.11 0.15,-0.12 0.06,-0.09 0.09,-0.04 0.1,-0.35 0.14,0.19 v -0.34 l -0.1,-0.3 0.17,0.18 0.06,-0.16 0.06,-0.05 v -0.1 l 0.12,-0.06 0.01,-0.23 0.1,-0.08 0.03,-0.14 0.07,-0.09 -0.08,-0.12 0.03,-0.17 0.08,-0.09 0.15,-0.22 -0.18,-0.17 0.06,-0.35 0.12,-0.11 0.08,0.1 0.12,0.01 v -0.07 l -0.18,-0.27 -0.17,0.04 -0.04,-0.15 0.15,-0.14 0.04,-0.3 0.14,0.12 0.09,-0.18 0.07,-0.21 0.07,-0.19 -0.14,-0.13 0.17,-0.18 0.13,-0.15 0.13,-0.07 0.21,0.24 v -0.2 l -0.04,-0.19 0.12,-0.1 0.13,-0.07 -0.17,-0.07 0.02,-0.23 0.18,-0.11 0.23,-0.1 0.2,-0.11 0.21,-0.13 0.19,-0.14 0.37,-0.36 0.13,-0.24 0.1,-0.22 0.21,-0.12 0.19,-0.13 0.18,-0.11 0.09,-0.29 0.04,-0.14 0.08,-0.05 0.09,-0.09 0.11,-0.03 0.23,-0.02 0.12,-0.18 0.18,-0.14 0.09,-0.09 0.07,-0.07 0.02,-0.16 0.1,-0.18 0.12,-0.08 0.19,-0.28 0.09,-0.11 0.12,-0.08 0.15,-0.23 0.16,-0.3 0.11,-0.07 0.1,-0.12 0.23,-0.23 0.26,-0.2 0.22,-0.19 0.2,-0.12 0.18,-0.15 0.46,-0.26 0.27,-0.16 0.45,-0.23 0.43,0.19 0.38,0.39 0.39,0.26 0.88,0.59 0.42,0.28 0.56,0.14 0.21,0.03 0.24,0.07 0.49,0.13 0.99,0.17 1.1,-0.11 0.95,-0.22 0.34,-0.13 0.29,-0.25 0.21,-0.04 0.23,0.23 0.23,0.22 0.24,0.3 0.25,0.07 0.27,0.15 0.27,0.13 0.26,0.02 0.18,0.22 0.23,0.15 0.17,0.26 0.24,0.16 0.29,0.17 0.51,0.43 0.62,0.01 0.28,0.02 0.02,0.34 0.13,0.29 0.22,0.21 0.31,0.16 0.8,0.33 0.39,0.1 0.31,0.08 0.26,0.02 0.62,0.07 0.34,0.07 1.12,0.13 0.89,-0.43 0.56,-0.98 0.11,-0.33 0.07,-0.11 0.02,-0.13 0.18,-0.09 0.05,-0.11 -0.09,-0.11 0.09,-0.39 0.09,-0.4 0.27,-0.72 0.24,-0.35 0.37,-0.32 0.64,0.11 0.55,0.13 0.22,0.16 0.26,0.08 v -0.11 l 0.49,0.14 0.44,0.2 0.45,0.06 0.29,0.18 -0.06,0.59 0.09,-0.11 0.08,-0.13 0.13,-0.08 h 0.16 l -0.1,-0.48 0.22,-0.03 -0.02,0.19 0.03,0.27 0.1,-0.29 0.1,-0.02 h 0.05 l 0.08,-0.03 -0.02,-0.09 0.03,-0.21 0.03,-0.24 0.13,-0.36 0.24,-0.19 0.23,-0.25 0.24,0.19 0.12,0.13 0.15,0.09 0.02,-0.07 -0.02,-0.22 0.03,-0.16 -0.13,-0.14 0.01,-0.25 0.09,-0.37 0.18,-0.25 0.15,-0.3 0.12,-0.39 -0.09,-0.37 -0.08,-0.35 -0.04,-0.42 v -0.48 l -0.08,-0.71 0.05,-0.29 -0.22,-0.48 -0.08,-0.34 -0.12,-0.26 -0.11,-0.21 -0.09,-0.34 0.03,-0.24 0.23,0.02 v -0.06 l 0.1,-0.08 -0.05,-0.17 -0.02,-0.17 0.04,-0.21 0.01,-0.19 0.02,-0.16 v -0.3 l -0.15,0.15 -0.14,0.16 -0.23,-0.14 0.13,-0.16 0.07,-0.21 0.04,-0.04 0.02,-0.14 0.49,-0.27 0.03,-0.06 -0.26,-0.13 -0.24,0.03 -0.17,0.28 -0.06,0.04 0.01,-0.37 v -0.71 -0.29 l -0.06,-0.29 -0.13,-0.2 -0.13,-0.2 -0.06,-0.3 -0.1,0.16 -0.1,-0.17 -0.17,-0.07 -0.13,0.21 -0.04,-0.03 0.13,-0.35 0.25,-0.58 0.14,-0.58 0.21,-0.37 0.08,-0.2 0.05,-0.18 v -0.11 -0.2 l 0.1,-0.18 0.11,-0.15 0.07,-0.12 0.06,-0.06 0.1,-0.16 0.04,-0.06 0.01,-0.17 0.03,-0.21 0.05,-0.06 0.05,-0.09 0.13,-0.14 0.06,-0.09 0.04,-0.11 0.1,-0.09 0.06,-0.09 0.16,-0.21 0.23,-0.2 0.36,-0.55 0.29,-0.49 0.12,-0.24 0.18,-0.2 0.19,-0.16 0.09,-0.32 0.16,-0.21 0.1,-0.11 0.11,-0.06 0.16,-0.27 0.02,-0.17 0.07,-0.14 0.18,-0.22 0.17,-0.2 0.19,-0.16 v -0.17 l 0.03,-0.25 0.27,-0.68 0.09,-0.24 0.13,-0.26 0.01,-0.17 0.04,-0.15 0.06,-0.34 -0.14,-0.16 0.06,-0.29 0.24,-0.47 0.35,-0.08 0.19,0.1 0.17,0.18 0.16,-0.06 -0.18,-0.16 -0.3,-0.16 -0.37,-0.08 -0.1,-0.21 0.21,-0.4 0.05,-0.22 0.23,-0.51 0.12,-0.25 0.12,-0.22 0.07,-0.24 0.01,-0.31 0.07,-0.31 0.09,-0.3 0.07,-0.28 0.11,-0.29 0.09,-0.39 0.13,-0.45 0.18,-0.41 0.07,-0.46 0.04,-0.53 -0.28,-0.17 -0.05,-0.25 -0.13,-0.1 -0.05,-0.21 -0.05,-0.22 0.05,-0.18 0.08,-0.18 0.11,-0.43 0.04,-0.31 0.05,-0.29 0.08,-0.11 0.04,-0.28 v -0.15 l 0.07,-0.06 0.09,-0.25 0.04,-0.16 0.06,-0.08 0.05,-0.32 0.11,-0.19 0.07,-0.12 0.06,-0.13 0.07,-0.1 0.05,-0.15 -0.05,-0.12 v -0.14 l 0.13,-0.2 0.05,-0.6 -0.05,-0.28 -0.06,-0.08 -0.01,-0.2 -0.01,-0.24 v -0.5 -0.38 l -0.08,-0.35 -0.22,-0.55 -0.14,-0.3 -0.15,-0.34 -0.26,-0.06 -0.21,-0.23 -0.24,-0.21 0.03,-0.21 -0.07,-0.33 -0.15,-0.31 -0.12,-0.11 -0.12,-0.12 -0.02,-0.17 -0.1,-0.07 -0.03,-0.41 0.01,-0.23 -0.01,-0.21 -0.03,-0.24 -0.13,-0.06 -0.05,-0.19 v -0.74 l -0.07,-0.38 -0.06,-0.45 -0.13,-0.43 -0.06,-0.21 -0.07,-0.2 -0.02,-0.31 -0.1,-0.11 -0.03,-0.19 -0.01,-0.51 -0.16,-0.39 -0.08,-0.14 h -0.16 v -0.19 l 0.07,-0.15 v -0.12 l 0.02,-0.09 v -0.29 l -0.01,-0.35 v -0.18 l 0.03,-0.15 -0.02,-0.41 v -0.17 -0.16 l -0.02,-0.01 -0.03,0.04 -0.05,-0.75 -0.03,-0.84 0.04,-0.73 0.2,-0.59 0.17,-0.67 0.26,-0.43 0.24,-0.33 0.1,-0.2 0.1,-0.21 0.04,-0.23 0.13,-0.16 0.19,-0.54 0.15,-0.46 0.15,-0.43 0.19,-0.45 0.02,-0.28 0.14,-0.19 0.1,-0.25 0.02,-0.21 0.01,-0.2 0.09,-0.19 0.15,-0.3 0.05,-0.41 0.1,-0.11 0.07,-0.23 0.05,-0.2 0.06,-0.16 0.08,-0.16 0.1,-0.17 0.2,-0.36 0.04,-0.18 0.09,-0.18 0.15,-0.46 0.14,-0.12 0.08,-0.24 0.03,-0.04 0.03,-0.06 0.05,-0.09 0.13,-0.26 0.15,-0.29 0.07,-0.44 0.04,-0.41 -0.01,-0.48 -0.18,-0.09 0.08,-0.31 0.06,-0.34 0.01,-0.2 -0.08,-0.02 0.05,-0.35 0.04,-0.42 0.02,-0.24 -0.03,-0.26 h -0.09 l 0.05,-0.33 0.04,-0.29 0.03,-0.15 0.07,-0.13 0.07,-0.31 v -0.16 l 0.02,-0.1 v -0.1 l 0.23,-0.45 0.05,-0.31 0.06,-0.28 -0.07,-0.58 0.1,-0.28 -0.05,-0.28 0.1,-0.55 0.05,-0.19 0.06,-0.29 -0.06,-0.34 0.1,-0.29 0.1,-0.06 0.08,-0.14 0.03,-0.43 -0.11,-0.12 0.08,-0.24 0.07,-0.23 0.14,-0.31 0.02,-0.44 0.08,-0.22 0.09,-0.25 0.09,-0.2 0.1,-0.22 0.06,-0.27 0.12,-0.19 0.07,-0.2 0.07,-0.12 0.17,-0.33 0.26,-0.21 0.16,-0.26 0.18,-0.19 0.15,-0.24 0.15,-0.25 0.24,-0.21 0.09,-0.35 0.1,-0.13 0.06,-0.2 0.07,-0.17 0.09,-0.22 0.02,-0.12 0.05,-0.11 0.02,-0.06 0.03,-0.12 0.05,-0.15 0.08,-0.27 0.07,-0.22 0.01,-0.15 0.04,-0.12 0.01,-0.11 0.03,-0.16 0.1,-0.31 0.05,-0.23 0.04,-0.28 0.11,-0.31 0.1,-0.33 0.09,-0.1 0.07,-0.15 0.03,-0.18 0.06,-0.2 0.16,-0.39 0.14,-0.31 0.07,-0.14 0.1,-0.15 0.1,-0.13 0.03,-0.17 0.09,-0.18 0.08,-0.17 0.23,-0.34 0.06,-0.2 0.08,-0.3 0.05,-0.34 v -0.41 l -0.02,-0.83 -0.4,-0.39 -0.19,0.15 -0.11,-0.29 0.09,-0.33 0.17,-0.16 -0.1,-0.02 0.04,-0.14 0.06,-0.04 0.1,-0.08 0.05,-0.11 0.04,-0.13 0.04,-0.14 0.12,-0.14 0.09,-0.2 0.21,-0.54 -0.03,-0.26 -0.16,-0.24 v -0.42 l 0.14,-0.31 0.01,0.17 0.06,0.31 0.27,0.03 0.31,0.01 -0.02,-0.41 0.05,-0.29 0.28,0.05 0.1,-0.02 0.05,-0.11 0.17,-0.02 0.16,-0.08 0.03,-0.21 -0.11,-0.13 0.13,-0.09 0.14,-0.09 0.18,-0.12 0.13,-0.1 0.32,-0.1 0.18,-0.06 0.1,0.23 0.18,0.03 0.13,0.17 0.08,0.04 0.06,0.09 0.09,0.07 0.03,0.12 0.21,0.04 0.19,0.02 h 0.1 l 0.07,-0.02 0.03,0.19 0.38,-0.02 0.38,-0.11 0.36,0.13 0.37,-0.02 0.17,0.44 0.27,-0.03 0.05,0.25 0.17,0.01 h 0.2 0.09 l 0.09,0.05 0.18,0.1 0.25,0.04 0.26,-0.14 0.29,-0.11 0.29,-0.02 0.15,0.01 0.01,0.22 h 0.07 0.05 l 0.1,0.03 0.07,-0.05 h 0.1 l 0.27,-0.08 0.22,-0.01 0.17,-0.07 0.24,-0.1 0.24,-0.02 0.47,-0.22 0.25,-0.02 0.13,0.21 0.11,0.25 0.24,0.06 0.47,-0.19 0.37,0.08 -0.08,0.28 0.18,0.17 0.21,0.16 0.27,0.03 0.54,-0.09 0.3,0.03 0.3,0.18 0.36,0.2 0.41,0.33 0.43,0.34 0.5,0.47 0.23,0.2 0.2,0.23 0.46,0.43 0.45,0.47 0.43,0.59 0.16,0.23 0.16,0.32 0.28,0.37 0.13,0.19 0.13,0.15 0.17,0.18 0.3,0.28 0.32,0.35 0.29,0.41 0.25,0.48 0.24,0.43 0.4,0.85 0.12,0.22 0.07,0.29 0.23,0.49 0.18,0.54 0.25,0.45 0.54,0.79 0.32,0.42 0.39,0.2 0.31,0.34 0.24,0.46 0.06,0.31 0.13,0.24 0.08,0.56 0.06,0.58 0.06,0.35 0.13,0.48 0.07,0.42 0.14,0.4 0.05,0.46 0.05,0.43 v 0.43 l 0.03,0.48 -0.03,0.45 -0.04,-0.26 v -0.12 l -0.02,-0.11 -0.13,0.04 -0.06,0.11 -0.1,0.03 -0.07,0.08 -0.05,0.13 -0.02,0.15 -0.08,0.07 -0.1,0.09 0.2,0.04 0.14,0.19 0.07,0.26 0.04,0.19 0.02,0.18 0.18,0.29 0.3,0.24 0.73,0.48 1.01,0.53 0.3,0.12 0.44,0.22 0.43,0.25 0.36,0.23 0.28,0.37 0.17,0.38 0.16,0.28 0.07,0.4 0.05,0.46 -0.17,-0.17 -0.08,-0.18 -0.07,-0.15 -0.02,0.33 -0.04,0.4 0.09,0.04 0.08,-0.21 0.04,0.16 v 0.2 l -0.02,0.15 v 0.23 l 0.06,0.36 v 0.26 l 0.01,0.19 0.08,0.08 0.08,0.17 v 0.11 h -0.09 v 0.2 l -0.04,0.17 -0.02,0.23 v 0.22 l 0.06,0.15 0.05,0.19 -0.04,0.19 -0.01,0.2 -0.07,0.43 -0.02,-0.34 -0.18,0.06 -0.06,0.69 -0.12,0.33 -0.01,0.36 -0.13,0.29 -0.11,0.27 -0.09,0.37 -0.02,0.26 0.07,0.36 -0.1,0.33 -0.11,0.28 -0.23,0.15 -0.06,0.09 -0.06,-0.12 -0.07,0.23 0.05,0.08 -0.05,0.11 -0.04,0.14 0.04,0.13 0.02,0.25 -0.02,0.11 0.13,0.08 v 0.29 0.3 l -0.21,0.56 0.21,-0.16 0.1,-0.11 0.05,-0.16 0.35,0.29 0.28,0.32 0.3,0.37 0.27,0.4 0.59,0.73 0.36,0.18 0.16,0.03 0.15,0.02 0.06,0.43 0.21,0.39 0.19,0.3 0.23,0.27 0.05,0.16 0.09,0.07 0.1,0.17 0.02,0.19 0.24,0.22 0.25,0.38 0.34,0.29 0.33,0.27 0.66,0.49 0.29,0.11 0.4,0.29 0.51,0.25 0.32,0.1 0.25,0.24 0.24,0.31 0.31,0.17 0.22,0.24 0.07,0.08 0.15,0.07 0.03,0.1 0.03,0.09 0.08,0.05 0.05,0.04 0.06,0.18 -0.18,-0.08 0.02,0.21 0.18,0.16 0.15,-0.01 0.17,0.23 -0.02,0.26 0.11,0.22 0.22,0.32 0.22,0.44 0.24,0.3 0.08,0.26 0.08,0.23 -0.22,0.19 0.06,0.12 0.1,0.13 0.1,0.03 0.03,0.16 0.12,0.13 -0.25,0.17 0.18,0.02 0.18,0.08 -0.03,0.26 v 0.3 l -0.09,0.44 -0.11,-0.27 -0.11,-0.24 v 0.16 l 0.01,0.13 0.01,0.09 -0.02,0.1 0.01,0.14 0.14,0.01 0.05,0.18 -0.05,0.18 -0.07,-0.12 -0.07,-0.06 -0.09,0.12 -0.11,0.1 0.11,0.1 v 0.22 l 0.01,0.48 -0.03,0.16 -0.02,0.18 0.05,0.11 0.08,0.12 v 0.21 l -0.07,0.19 -0.02,0.2 -0.02,0.2 -0.02,0.22 -0.03,0.26 -0.21,0.31 0.09,0.09 h 0.12 l 0.07,0.08 0.06,0.1 -0.04,0.16 -0.06,0.12 0.07,0.09 -0.1,0.04 -0.08,0.15 -0.17,0.06 0.21,0.23 0.14,0.07 -0.09,0.08 -0.09,0.14 -0.04,0.24 0.04,0.24 0.04,0.2 -0.06,0.21 v 0.31 l -0.07,0.3 0.02,0.11 -0.02,0.14 0.04,0.28 -0.1,0.18 -0.03,0.22 0.11,0.21 0.12,0.16 0.02,0.29 -0.07,0.29 0.08,0.01 0.07,0.02 0.02,0.1 -0.09,0.06 -0.13,0.19 0.07,0.04 h 0.07 l 0.11,0.02 -0.05,0.13 v 0.1 l -0.05,0.09 -0.06,0.14 h -0.06 l -0.07,-0.04 -0.04,0.08 -0.04,0.13 -0.11,0.07 -0.09,0.22 -0.2,0.01 -0.11,0.25 -0.18,-0.13 -0.07,0.27 -0.13,0.22 -0.18,0.09 0.05,0.18 v 0.25 l -0.05,0.3 -0.09,0.35 -0.18,0.17 0.04,0.07 0.09,0.1 -0.02,0.15 -0.03,0.25 -0.11,0.15 -0.09,0.21 0.04,0.24 -0.28,0.45 -0.05,0.25 -0.06,0.27 v 0.59 l 0.17,0.39 0.02,0.34 -0.02,0.3 -0.17,0.08 -0.02,0.66 0.16,0.59 0.31,0.41 -0.19,0.5 -0.2,0.07 -0.22,0.39 -0.22,0.37 -0.25,0.13 -0.09,0.27 -0.04,0.43 -0.05,0.32 0.15,0.71 0.07,0.42 0.11,0.22 0.11,0.13 0.03,0.41 0.01,0.14 0.05,0.31 0.02,0.12 v 0.16 l 0.12,-0.01 0.02,0.32 0.01,0.25 0.09,0.2 0.15,-0.13 0.1,0.15 0.08,0.19 0.1,0.22 0.05,0.28 0.04,0.11 0.03,0.16 0.14,0.31 0.12,0.4 0.11,0.37 0.1,0.44 0.1,0.43 0.27,0.15 0.11,0.74 0.02,0.71 0.41,0.41 0.49,0.17 0.1,0.34 0.21,0.2 0.1,-0.09 -0.07,0.2 -0.03,0.21 -0.09,0.18 -0.11,0.18 0.21,-0.09 0.07,-0.14 0.12,0.03 0.1,0.06 0.15,0.06 0.15,0.07 0.11,0.05 0.18,0.44 0.23,0.47 0.15,0.25 0.14,0.23 0.1,0.29 0.11,0.3 0.24,0.5 0.03,0.23 -0.1,0.19 0.13,-0.05 0.17,-0.07 0.1,0.2 0.12,0.2 0.26,0.57 0.2,0.3 0.19,0.32 0.17,0.27 0.14,0.23 0.2,0.22 0.16,0.28 0.27,0.39 0.34,0.51 0.33,0.51 0.34,0.42 0.35,0.43 0.36,0.42 0.36,0.45 0.4,0.37 0.14,0.15 0.2,0.2 0.34,0.31 0.66,0.58 0.74,0.76 0.39,0.43 0.34,0.47 0.14,0.24 0.13,0.16 0.14,0.18 0.14,0.2 0.28,0.43 0.24,0.45 0.05,0.1 0.07,0.11 0.13,0.17 0.07,0.14 0.21,0.24 0.11,0.22 0.13,0.22 0.09,0.19 0.19,0.23 0.27,0.43 0.35,0.59 0.08,0.24 0.16,0.26 0.07,0.24 0.12,0.22 0.05,0.25 0.14,0.23 0.12,0.29 0.12,0.21 0.11,0.24 0.14,0.29 0.14,0.32 0.14,0.33 0.17,0.41 0.18,0.42 0.05,0.18 0.04,0.22 0.05,0.43 0.03,0.2 0.06,0.2 0.12,0.39 0.18,0.38 0.09,0.28 0.12,0.18 0.32,0.66 0.16,0.35 0.09,0.29 0.06,0.38 0.1,0.46 0.24,0.35 0.23,0.36 0.15,0.39 0.2,0.47 0.08,0.45 0.18,0.38 0.24,0.3 0.03,0.41 0.26,0.39 -0.04,0.5 0.1,0.51 0.06,0.55 v 0.35 0.29 l 0.18,0.14 0.1,0.2 0.15,0.21 0.01,0.24 -0.01,0.25 v 0.29 0.39 l 0.03,0.14 -0.02,0.13 -0.06,0.08 -0.05,0.12 v 0.16 l 0.05,0.21 0.04,0.19 0.01,0.17 0.01,0.05 v 0.08 l 0.04,0.03 0.11,0.56 -0.37,0.14 -0.75,0.01 -0.14,-0.29 -0.1,-0.31 -0.09,-0.08 -0.06,-0.1 -0.12,-0.03 -0.17,-0.13 -0.1,-0.05 -0.08,-0.1 -0.13,-0.03 -0.1,-0.02 -0.11,-0.01 -0.1,-0.08 -0.22,-0.07 -0.21,-0.01 -0.08,-0.11 -0.08,-0.12 -0.07,-0.09 -0.15,0.02 -0.23,-0.17 -0.14,-0.03 -0.14,-0.08 -0.29,-0.06 -0.24,0.17 -0.3,-0.03 -0.27,-0.06 -0.25,-0.2 -0.25,-0.21 -0.28,-0.06 -0.33,-0.07 -0.29,0.01 -0.1,0.16 -0.16,-0.04 -0.18,-0.1 -0.17,-0.09 -0.06,-0.1 -0.2,-0.15 -0.1,-0.11 -0.08,-0.16 -0.11,-0.05 -0.11,-0.12 -0.12,-0.13 -0.13,-0.09 -0.26,-0.18 -0.32,-0.03 -0.19,0.14 -0.3,-0.05 -0.19,0.09 -0.2,0.11 h -0.12 l -0.15,-0.15 -0.19,-0.14 -0.14,-0.15 -0.11,-0.02 -0.22,-0.16 -0.12,-0.2 -0.23,-0.17 -0.44,-0.24 -0.21,-0.05 -0.2,-0.04 -0.15,0.01 -0.36,0.12 -0.2,0.2 -0.21,0.18 -0.36,0.48 -0.16,0.26 -0.16,0.24 -0.25,0.51 -0.14,0.15 -0.18,0.21 -0.15,0.14 -0.17,0.15 -0.21,-0.05 -0.23,-0.02 -0.17,-0.11 -0.11,-0.24 -0.17,-0.03 -0.1,0.24 -0.15,0.08 -0.12,0.09 -0.03,0.24 v 0.23 l 0.15,-0.23 0.12,-0.04 0.03,-0.16 h 0.02 l 0.28,-0.02 0.16,0.38 0.49,0.17 0.14,0.22 0.2,0.15 0.22,0.13 0.06,0.3 -0.2,0.67 -0.28,0.49 -0.06,0.16 -0.06,0.28 -0.15,0.12 -0.13,-0.22 -0.22,0.06 -0.06,0.29 -0.14,0.26 -0.14,0.2 -0.26,0.05 -0.09,0.28 -0.08,0.33 -0.12,0.31 -0.31,0.12 -0.15,0.38 -0.18,0.13 -0.26,0.1 -0.19,0.3 -0.19,0.36 -0.18,0.32 -0.48,0.57 -0.07,-0.01 -0.19,0.04 -0.07,0.02 -0.06,0.03 -0.18,-0.03 -0.06,0.31 -0.17,0.15 -0.18,0.12 -0.24,-0.15 -0.17,-0.01 -0.14,0.18 -0.06,0.14 -0.07,0.09 -0.02,0.14 -0.03,0.12 0.07,0.27 -0.06,0.04 -0.05,0.03 -0.13,0.09 -0.15,0.18 -0.1,-0.27 0.03,-0.32 0.07,-0.35 -0.19,-0.09 -0.03,0.24 -0.03,0.24 -0.06,0.16 -0.06,0.16 -0.08,0.2 -0.15,0.05 -0.06,0.35 -0.05,0.1 v 0.12 l -0.1,0.2 -0.17,0.14 -0.03,0.16 -0.03,0.16 -0.07,0.37 -0.01,0.43 -0.05,0.36 -0.06,0.38 -0.2,0.78 -0.11,0.65 -0.07,0.25 -0.13,0.29 -0.06,0.17 -0.1,0.13 -0.13,0.34 -0.11,0.2 -0.02,0.22 -0.1,0.07 -0.12,0.09 -0.23,0.15 -0.13,0.03 -0.13,0.05 -0.11,0.35 -0.1,0.16 -0.09,0.12 -0.3,0.06 -0.13,0.21 -0.15,0.01 -0.24,0.34 -0.1,0.37 -0.14,0.78 -0.07,0.37 -0.01,0.4 v 0.38 l -0.09,0.33 v 0.78 0.32 0.39 l -0.07,0.46 0.03,0.74 0.23,-0.25 -0.19,0.39 -0.25,0.34 -0.25,0.96 v 0.36 l -0.02,0.27 -0.1,0.09 -0.15,0.14 -0.13,0.08 -0.11,0.13 -0.15,0.06 -0.08,0.15 -0.12,0.1 -0.08,0.15 -0.07,0.16 -0.09,0.19 -0.33,-0.02 -0.25,0.16 -0.23,0.32 -0.11,0.38 -0.09,0.33 -0.04,0.14 v 0.17 l -0.02,0.12 -0.04,0.15 v 0.18 0.19 l -0.03,0.14 -0.01,0.15 -0.03,0.16 0.02,0.41 0.13,-0.04 0.07,-0.09 0.14,0.03 0.08,0.08 -0.18,0.02 -0.13,0.13 -0.11,0.14 -0.12,0.18 -0.28,0.38 -0.13,0.21 -0.08,0.29 -0.14,0.4 -0.1,0.36 -0.07,0.15 -0.08,0.12 -0.09,0.22 -0.15,0.34 -0.17,0.42 -0.16,0.46 -0.2,0.4 -0.08,0.17 -0.1,0.18 -0.08,0.18 -0.07,0.19 -0.15,0.32 -0.15,0.36 -0.13,0.19 0.02,0.24 0.02,0.35 v 0.12 l -0.07,0.12 -0.02,0.07 -0.06,0.06 -0.06,0.42 -0.2,0.13 -0.09,0.31 -0.11,0.08 -0.06,0.14 -0.08,0.13 -0.03,0.12 0.09,0.14 -0.08,0.17 0.15,0.04 -0.05,0.25 -0.13,0.21 -0.14,0.09 -0.3,0.29 -0.12,0.24 -0.14,0.19 -0.17,0.26 -0.12,0.09 -0.04,0.2 -0.01,0.04 v 0.04 l -0.04,0.06 -0.01,0.05 -0.12,0.16 -0.06,0.09 v 0.13 l -0.1,0.03 v 0.16 0.16 l 0.07,0.11 -0.07,0.13 -0.03,0.16 -0.02,0.17 -0.08,0.13 -0.08,0.04 -0.08,0.03 -0.02,0.06 -0.04,0.04 -0.09,0.08 v 0.18 l 0.08,0.34 0.09,0.23 0.07,0.25 0.23,-0.1 0.09,-0.52 0.15,-0.54 0.09,-0.1 0.02,-0.13 0.09,-0.15 0.07,-0.07 0.09,-0.12 0.1,-0.05 0.11,-0.11 0.09,-0.13 v -0.1 l -0.02,-0.11 0.02,-0.25 0.05,-0.2 -0.04,-0.23 h 0.02 l 0.02,-0.1 0.05,-0.1 0.13,-0.08 0.12,-0.13 0.05,-0.08 0.3,-0.38 0.31,-0.4 0.18,-0.21 0.13,-0.16 0.11,-0.06 0.13,-0.04 h 0.07 l 0.12,-0.01 0.06,0.2 0.05,0.21 0.07,0.09 0.08,0.36 -0.03,0.19 -0.05,0.22 0.11,0.36 0.1,0.16 0.02,0.2 0.09,0.4 0.04,0.22 0.01,0.21 0.04,0.19 0.02,0.28 0.09,0.16 0.05,0.23 0.16,0.46 0.15,0.2 0.1,0.18 v -0.37 -0.2 l -0.03,-0.16 -0.04,-0.21 -0.07,-0.21 -0.05,-0.41 -0.13,-0.76 0.02,-0.39 -0.08,-0.26 -0.04,-0.05 -0.02,-0.14 -0.02,-0.16 -0.08,-0.09 -0.02,-0.15 -0.1,-0.16 0.28,0.04 0.11,0.05 0.14,0.02 0.15,-0.01 0.14,0.06 0.07,0.02 0.02,-0.07 0.12,-0.05 -0.06,-0.05 0.05,-0.14 0.14,-0.09 0.13,-0.18 0.09,-0.18 0.1,-0.13 0.01,-0.1 0.08,-0.1 0.02,-0.25 0.14,-0.14 0.13,-0.16 0.07,-0.05 0.02,-0.16 0.04,-0.11 0.08,-0.27 0.07,-0.08 0.13,-0.12 0.09,-0.21 0.09,-0.23 0.1,-0.19 0.13,-0.11 0.02,-0.11 0.09,-0.22 0.07,-0.06 0.05,-0.13 0.07,-0.24 0.17,-0.47 0.24,-0.04 0.08,-0.04 v -0.18 l -0.02,-0.13 -0.05,-0.12 0.07,-0.1 0.04,-0.1 0.13,-0.01 0.15,-0.1 0.08,-0.21 0.12,-0.32 0.04,-0.18 0.08,-0.13 0.1,-0.14 0.12,-0.12 0.04,-0.17 0.03,-0.19 v -0.21 -0.22 l -0.16,-0.12 0.09,-0.12 0.07,-0.17 0.12,-0.09 0.09,-0.19 0.08,-0.33 -0.01,-0.15 0.12,-0.12 0.15,-0.04 0.17,0.11 0.12,-0.16 0.14,-0.14 0.19,-0.05 0.13,-0.16 0.2,-0.03 0.15,-0.2 0.31,-0.34 0.02,-0.13 0.04,-0.1 0.01,-0.12 0.07,-0.04 0.06,-0.08 0.13,-0.46 0.05,-0.15 0.09,-0.11 0.02,-0.16 0.06,-0.15 0.02,-0.17 0.1,-0.11 0.11,-0.09 0.01,-0.24 0.11,-0.17 0.02,-0.23 0.08,-0.24 0.01,-0.27 0.03,-0.29 -0.08,-0.21 v -0.26 l -0.11,-0.2 v -0.28 l 0.11,-0.28 0.06,-0.35 0.13,-0.24 0.02,-0.31 -0.07,-0.07 -0.04,-0.12 0.11,-0.33 0.05,-0.15 0.09,-0.11 0.02,-0.19 0.09,-0.08 0.17,-0.24 0.15,-0.36 0.15,-0.28 0.2,-0.34 0.27,-0.13 0.38,0.02 0.12,-0.22 0.08,-0.01 0.04,-0.13 0.15,-0.1 0.23,-0.06 0.1,-0.26 0.07,-0.22 0.23,-0.04 0.06,-0.19 0.02,-0.14 0.04,-0.15 0.19,-0.05 0.07,-0.23 -0.02,-0.28 0.13,-0.17 0.01,-0.16 v -0.15 l 0.13,-0.06 0.06,-0.22 v -0.23 l 0.11,-0.05 0.02,-0.24 v -0.21 l 0.06,-0.18 0.15,-0.02 0.08,-0.19 0.06,-0.23 0.06,-0.26 0.09,-0.13 0.07,-0.27 0.08,-0.21 0.14,-0.12 0.14,-0.16 0.12,-0.15 0.11,-0.12 0.16,-0.12 0.1,-0.15 0.13,-0.15 0.15,-0.11 0.12,-0.09 0.02,-0.36 0.02,-0.29 0.1,-0.08 0.03,-0.11 0.14,-0.14 0.06,-0.27 0.15,-0.2 0.12,-0.28 v -0.2 l 0.04,-0.14 0.03,-0.39 0.09,-0.42 0.02,-0.53 -0.08,-0.43 -0.11,-0.43 v -0.23 l 0.13,-0.12 v -0.29 l 0.04,-0.27 0.05,-0.26 0.08,-0.27 0.07,-0.13 v -0.16 l 0.05,-0.35 0.03,-0.18 0.05,-0.15 v -0.31 -0.19 l 0.05,-0.15 0.07,-0.12 0.05,-0.17 v -0.22 l 0.06,-0.17 0.05,-0.14 0.1,-0.12 0.03,-0.15 v -0.16 l 0.05,-0.57 -0.04,-0.23 v -0.49 l 0.15,-0.37 0.16,-0.37 0.06,-0.5 0.12,0.06 0.11,0.08 0.13,-0.02 0.16,-0.03 0.24,-0.1 0.25,-0.03 0.31,0.13 0.26,0.09 0.18,0.28 0.25,0.16 0.1,-0.14 0.16,-0.06 0.13,-0.03 0.04,0.23 0.13,-0.22 0.06,0.13 0.04,0.15 0.05,0.21 0.09,0.11 0.23,0.2 0.13,0.01 0.24,0.3 0.07,0.2 0.26,0.27 0.73,0.24 0.4,0.02 0.34,0.01 0.42,0.16 0.15,0.08 0.12,0.13 0.34,0.14 0.35,0.2 0.24,0.29 0.15,0.14 0.12,0.17 0.18,0.12 0.15,0.14 0.15,0.2 0.33,-0.05 0.15,-0.09 0.18,0.08 0.38,0.08 0.38,0.22 0.2,0.42 0.14,0.18 0.07,0.27 0.21,0.25 0.27,0.2 0.65,0.45 0.38,0.19 0.58,0.23 0.56,0.41 1.19,0.51 1.01,0.68 0.53,0.38 0.07,0.56 -0.03,0.74 0.26,0.47 0.35,0.4 0.39,0.28 0.35,0.26 0.41,0.14 0.42,0.28 0.43,0.07 0.14,0.16 0.16,0.11 0.32,0.26 0.3,0.07 0.33,0.09 0.3,0.01 0.28,-0.07 0.55,0.19 0.4,0.66 -0.05,0.36 -0.02,0.27 0.16,0.22 0.2,0.33 0.14,0.29 0.29,0.13 0.66,0.13 0.55,0.12 0.14,0.27 0.18,0.29 0.15,0.76 0.19,0.59 0.39,0.42 0.27,0.14 0.55,0.14 0.53,0.08 0.18,0.21 -0.09,0.37 h -0.02 l -0.05,0.55 -0.1,0.5 0.11,0.49 0.12,0.57 0.09,0.52 0.21,0.35 0.2,0.36 0.24,0.04 v -0.19 l 0.05,-0.21 0.23,0.04 0.34,0.59 0.24,0.57 0.29,0.63 0.38,0.57 0.4,0.48 0.31,0.6 0.21,0.65 0.24,0.53 0.11,0.23 v 0.09 l 0.02,0.17 v 0.19 l -0.04,0.16 -0.37,0.04 -0.29,0.17 -0.1,0.19 -0.11,0.14 -0.19,0.36 -0.24,0.25 -0.17,0.37 -0.14,0.24 -0.16,0.19 -0.12,0.21 -0.18,0.13 -0.22,0.16 -0.26,-0.06 -0.24,0.03 -0.64,0.08 -0.12,0.02 -0.15,0.06 h -0.18 l -0.14,0.05 -0.14,0.1 -0.19,0.02 -0.18,0.06 -0.22,0.07 -0.18,0.23 -0.15,0.16 -0.13,0.2 -0.13,0.24 -0.28,0.33 -0.13,0.24 -0.11,0.28 -0.07,0.19 -0.08,0.1 -0.07,0.35 -0.04,0.4 0.01,0.42 -0.01,0.21 0.02,0.23 -0.23,0.14 -0.05,-0.08 -0.03,-0.17 0.01,0.33 0.08,0.17 0.06,0.12 0.09,0.11 0.07,0.16 0.09,0.31 0.04,0.29 -0.2,0.13 -0.15,0.2 -0.17,-0.2 -0.04,-0.25 -0.14,-0.4 -0.22,-0.34 -0.29,-0.25 -0.1,-0.15 -0.11,-0.14 -0.27,-0.25 -0.09,-0.19 -0.11,-0.16 -0.08,-0.16 -0.1,-0.18 -0.12,-0.2 -0.09,-0.2 -0.15,-0.16 -0.15,-0.18 -0.19,-0.07 -0.16,-0.15 -0.12,-0.15 -0.05,-0.24 -0.06,-0.28 -0.19,-0.51 -0.18,-0.25 -0.87,-0.65 -1,-0.1 -0.97,-0.02 -0.5,-0.17 -0.23,-0.14 -0.22,-0.15 -0.28,-0.12 -0.16,0.06 -0.15,0.01 -0.21,0.21 -0.05,0.39 -0.17,-0.17 -0.03,0.33 -0.05,0.01 -0.05,-0.34 -0.09,0.04 -0.1,0.18 -0.19,-0.09 -0.09,0.35 0.14,0.21 0.12,0.24 -0.2,-0.22 -0.12,0.12 v 0.25 h 0.24 l 0.1,0.27 0.08,0.34 0.18,0.29 -0.08,0.61 -0.14,0.6 0.07,0.36 0.05,0.57 -0.21,0.12 -0.15,0.2 -0.15,0.17 -0.27,-0.19 -0.13,-0.1 -0.06,-0.2 -0.05,-0.23 0.07,-0.15 -0.12,-0.08 -0.06,-0.17 0.04,-0.16 0.11,-0.07 -0.11,-0.14 0.02,-0.26 -0.28,-0.03 -0.02,-0.54 0.12,-0.53 0.09,-0.44 -0.16,-0.15 -0.23,0.37 -0.16,0.5 -0.13,0.44 -0.24,0.35 -0.25,0.38 -0.15,0.12 0.11,0.18 -0.11,0.22 -0.09,0.23 h -0.15 l -0.02,0.2 0.04,0.11 -0.02,0.09 0.02,0.16 0.22,-0.26 0.09,-0.12 0.01,0.14 0.05,0.34 0.02,0.29 -0.08,0.08 -0.09,0.09 -0.1,0.04 -0.07,0.09 0.07,0.07 0.06,0.01 -0.02,0.11 -0.11,0.12 0.02,0.06 0.08,0.03 -0.05,0.2 -0.12,0.17 -0.17,0.05 -0.2,0.01 -0.05,0.11 -0.07,0.09 -0.12,0.19 -0.1,0.2 -0.02,0.16 -0.03,0.11 0.17,0.17 -0.28,-0.15 0.04,-0.28 -0.16,-0.1 -0.17,0.42 -0.22,0.25 0.11,0.11 0.09,0.03 -0.1,0.09 -0.22,-0.01 -0.2,0.07 -0.19,0.03 -0.11,0.21 0.07,0.27 -0.09,0.23 -0.01,0.12 -0.06,0.1 -0.12,0.02 -0.11,0.05 -0.05,0.09 v 0.2 l -0.04,0.15 -0.03,0.08 -0.06,0.03 -0.01,0.2 -0.02,0.18 -0.05,0.18 -0.16,0.03 0.02,0.37 -0.19,0.13 -0.03,0.14 -0.01,0.14 -0.08,0.08 -0.06,0.11 -0.03,0.15 -0.02,0.15 -0.09,0.29 -0.06,0.16 h -0.13 l -0.19,-0.02 -0.21,0.1 0.02,0.18 0.23,0.29 0.23,0.13 0.13,-0.06 0.08,-0.03 0.03,0.19 -0.15,0.22 -0.13,0.31 0.05,0.45 0.39,0.02 0.42,-0.18 0.42,0.26 0.33,0.3 -0.1,0.34 -0.02,0.32 0.18,-0.05 0.07,-0.15 0.09,-0.05 h 0.08 l 0.07,-0.02 0.16,0.07 0.11,-0.28 0.17,0.07 0.13,0.05 0.04,-0.14 -0.01,-0.16 0.03,-0.14 0.22,0.15 0.23,0.22 0.34,0.28 0.29,-0.19 0.04,-0.49 0.17,-0.23 0.18,-0.19 0.04,-0.13 0.05,-0.05 0.05,-0.08 0.07,-0.04 0.05,-0.06 0.1,-0.17 0.08,-0.04 0.06,-0.05 -0.01,-0.53 0.05,-0.17 h 0.18 0.2 l 0.06,-0.2 -0.03,-0.25 -0.14,-0.12 0.13,-0.11 h 0.2 l 0.07,-0.32 v -0.35 l 0.28,-0.5 0.07,-0.32 0.1,-0.35 0.69,-0.29 0.26,0.04 0.25,0.03 0.18,-0.18 0.15,-0.2 0.24,-0.02 0.19,-0.06 0.18,-0.21 0.11,-0.11 0.08,-0.11 -0.18,-0.1 0.1,-0.11 0.08,-0.09 0.1,-0.05 0.2,-0.13 0.3,-0.16 0.14,-0.09 h 0.18 l 0.17,-0.06 0.1,-0.07 0.16,-0.05 0.05,-0.23 0.19,-0.19 0.1,-0.05 0.17,0.02 0.13,-0.01 0.15,0.07 0.17,0.02 0.08,-0.03 0.06,0.01 0.35,-0.03 0.33,-0.23 0.38,-0.14 0.37,0.2 0.34,0.33 0.39,0.22 0.34,0.13 0.2,0.49 0.21,0.05 0.23,0.05 0.44,0.42 0.31,0.1 0.3,0.06 0.34,-0.06 0.66,-0.96 0.03,-0.58 -0.03,-0.22 0.11,-0.13 0.06,-0.25 0.09,-0.07 0.01,-0.16 0.01,-0.27 0.08,-0.05 0.01,-0.27 0.01,-0.19 0.17,-0.03 0.36,-0.01 0.19,-0.01 0.14,-0.02 0.12,-0.08 0.16,0.1 0.15,-0.05 0.05,-0.18 0.32,0.04 0.16,0.02 0.17,0.05 0.14,-0.05 0.13,0.12 0.15,-0.13 0.21,0.03 0.27,-0.04 0.1,-0.11 0.07,-0.09 h 0.11 l 0.12,0.1 0.21,0.12 0.11,-0.1 0.16,0.02 0.13,0.04 0.1,-0.12 0.13,-0.04 0.16,0.05 h 0.16 l 0.13,-0.02 0.13,-0.05 0.11,0.11 0.22,-0.04 0.1,-0.05 0.09,0.17 0.14,-0.05 0.15,-0.1 0.05,0.15 0.01,0.08 0.13,0.16 0.17,-0.07 0.04,-0.22 0.17,-0.18 0.27,0.02 h 0.16 l 0.19,-0.04 0.11,-0.06 0.13,-0.08 0.12,-0.12 0.17,-0.01 0.17,0.02 0.1,0.27 0.13,0.04 0.13,0.02 h 0.13 0.13 l 0.03,-0.3 0.08,-0.03 0.05,0.13 0.12,0.06 0.11,0.04 0.12,0.04 0.03,0.13 0.13,0.05 0.14,0.05 0.12,-0.04 0.04,-0.15 0.08,-0.02 0.05,0.23 0.09,0.06 0.06,0.07 0.25,0.07 0.29,0.04 0.28,-0.02 0.26,0.02 0.24,0.08 0.25,-0.07 0.43,0.47 0.58,-0.01 0.26,0.03 -0.02,0.11 0.07,0.13 0.1,-0.07 -0.06,-0.14 0.14,0.09 0.16,-0.18 0.27,-0.11 0.23,0.11 0.15,-0.12 0.11,-0.13 -0.03,0.28 0.31,0.12 0.56,0.04 0.17,0.03 0.02,0.19 0.5,0.09 0.27,-0.02 0.22,0.14 0.53,0.13 0.26,0.05 0.26,0.08 0.01,0.21 -0.21,-0.15 -0.13,0.25 0.38,0.02 0.25,-0.01 0.07,-0.3 0.03,-0.26 0.11,-0.19 0.13,-0.66 0.01,-0.34 h 0.29 l 0.27,-0.04 0.18,-0.25 0.17,-0.29 0.15,-0.31 0.09,-0.43 0.1,-0.63 0.28,-0.31 0.46,-0.01 0.15,0.29 0.04,-0.24 0.12,-0.1 0.1,-0.07 0.05,0.21 0.02,0.02 v 0.02 l 0.12,0.01 0.09,0.06 0.19,0.11 -0.04,-0.2 -0.14,-0.06 -0.17,-0.06 -0.05,-0.24 0.14,-0.03 0.08,0.18 0.03,-0.19 0.05,-0.01 v -0.11 l -0.1,-0.16 0.16,0.03 h 0.18 l 0.1,0.39 0.26,0.17 0.23,0.14 -0.14,-0.23 -0.24,-0.26 -0.05,-0.42 -0.06,-0.16 h 0.18 l 0.11,-0.29 0.11,-0.19 0.28,-0.22 0.28,-0.21 0.34,-0.22 1.19,-0.05 0.64,0.37 0.46,0.27 -0.08,-0.67 -0.88,-0.92 -0.08,-0.07 -0.04,0.09 -0.13,-0.11 -0.03,-0.02 -0.06,0.04 -0.23,-0.08 -0.08,-0.13 -0.12,-0.07 -0.14,-0.08 -0.13,-0.03 -0.16,-0.01 -0.02,0.14 -0.01,0.16 -0.17,-0.02 0.04,0.11 -0.29,-0.3 0.22,-0.47 0.36,-0.52 0.25,-0.26 0.23,-0.16 0.51,-0.69 0.3,-0.39 1.04,-0.91 1.46,0.07 1.32,1.14 0.47,1.52 0.04,0.18 -0.02,0.34 -0.02,0.15 0.08,0.12 0.08,0.15 0.02,0.14 0.07,0.3 0.03,-0.38 0.15,0.2 0.48,0.03 -0.02,-0.11 -0.27,-0.02 -0.11,-0.32 -0.07,-0.37 0.22,0.05 0.31,0.22 -0.15,-0.4 -0.21,-0.34 0.12,-0.12 0.47,0.15 0.47,0.1 -0.25,-0.16 -0.26,-0.08 -0.22,-0.27 -0.14,-0.25 -0.07,-0.65 -0.01,-0.25 0.29,0.03 0.15,-0.1 -0.21,-0.22 0.14,-0.01 0.06,-0.16 0.05,-0.29 v -0.64 l -0.13,-0.44 -0.16,-0.41 v -0.52 l -0.09,-0.42 0.06,-0.44 0.09,-0.45 0.04,-0.54 0.08,-0.3 0.28,0.03 0.1,-0.26 0.1,-0.1 -0.26,-0.18 -0.05,-0.13 0.19,-0.09 -0.17,-0.09 -0.12,-0.12 0.04,-0.26 0.06,-0.2 -0.05,-0.21 0.02,-0.26 0.14,-0.18 0.17,-0.15 -0.12,0.02 -0.13,0.03 0.08,-0.25 0.05,-0.1 0.03,-0.16 0.07,-0.15 0.02,-0.13 0.07,-0.15 0.03,-0.29 0.03,-0.33 0.08,-0.2 0.06,-0.21 -0.04,-0.23 0.01,-0.25 0.13,-0.18 0.03,-0.24 0.03,-0.49 0.05,-0.52 0.06,-0.44 0.06,-0.24 0.05,-0.2 0.14,-0.41 0.05,-0.22 0.03,-0.19 0.07,-0.12 0.07,-0.12 0.11,-0.08 0.08,-0.32 0.03,-0.21 0.07,-0.19 0.15,-0.23 0.15,-0.37 0.08,-0.43 0.17,-0.32 0.07,-0.17 0.11,-0.11 0.07,-0.2 0.15,-0.07 0.07,-0.38 0.12,-0.1 0.04,-0.11 0.05,-0.13 0.03,-0.41 0.05,-0.13 0.04,-0.19 0.03,-0.16 0.06,-0.21 0.16,-0.31 0.1,-0.52 0.11,-0.8 0.14,-0.88 0.11,-0.4 0.09,-0.39 0.3,-0.74 0.22,-0.6 0.28,-0.5 0.22,-0.22 0.22,-0.39 0.08,-0.14 0.04,-0.19 0.19,-0.22 0.11,-0.39 0.13,-0.28 0.11,-0.46 0.09,-0.43 0.02,-0.18 0.23,-0.51 v -0.18 l 0.08,-0.16 0.09,-0.33 0.03,-0.19 0.03,-0.21 0.09,-0.19 0.03,-0.13 0.02,-0.28 0.06,-0.17 v -0.2 l 0.02,-0.2 0.09,-0.39 0.12,-0.37 0.05,-0.11 0.04,-0.12 0.04,-0.13 0.01,-0.09 0.08,-0.25 0.11,-0.24 0.26,-0.42 0.08,-0.21 0.19,-0.17 0.14,-0.22 0.14,-0.21 0.1,-0.1 0.05,-0.1 0.2,-0.18 0.16,-0.19 0.16,-0.02 0.22,-0.06 h 0.08 l 0.09,-0.01 0.1,0.19 0.16,0.08 0.11,0.12 0.15,0.1 0.18,0.2 0.18,0.11 0.16,0.36 0.02,0.48 0.09,0.49 0.13,0.38 0.17,0.08 0.14,0.16 0.38,0.11 0.16,0.16 0.18,0.12 0.48,0.1 0.49,0.1 -0.12,0.06 -0.44,0.11 0.15,1.16 0.26,0.51 0.15,0.62 0.44,0.24 0.57,-0.09 0.15,0.13 -0.03,0.32 -0.02,0.5 -0.03,0.47 -0.01,0.44 -0.02,0.47 -0.04,0.41 -0.09,0.43 -0.04,0.41 0.28,1.05 0.43,0.93 0.21,0.59 0.12,0.81 0.06,0.81 -0.11,0.67 -0.05,0.27 v 0.38 l -0.1,0.28 -0.11,0.67 0.08,0.69 -0.06,0.7 -0.14,0.94 0.14,0.68 0.11,0.29 0.15,0.28 0.11,0.31 0.51,0.42 0.34,0.05 0.13,-0.2 0.23,-0.12 0.15,0.24 0.13,0.28 0.21,0.3 0.03,0.41 0.18,0.26 0.6,0.22 0.31,0.01 0.25,0.14 0.54,0.36 0.24,0.27 0.09,0.31 0.01,0.33 -0.18,0.07 0.09,0.44 0.15,0.15 0.1,0.22 0.91,0.75 0.22,0.17 0.23,0.14 0.42,0.49 0.16,0.33 0.59,0.82 0.46,0.33 0.46,0.44 0.45,0.63 0.21,0.29 0.14,0.4 0.21,0.31 0.16,0.29 0.18,0.3 0.16,0.31 0.41,0.42 0.26,0.3 0.42,0.29 0.25,0.21 0.38,0.22 0.44,0.11 0.46,0.25 0.61,0.89 0.42,0.47 -0.17,0.03 0.25,0.44 0.25,0.2 0.09,0.29 -0.14,0.42 -0.21,0.53 0.52,1 0.96,0.49 0.5,0.31 0.28,0.45 0.37,0.53 -0.24,0.36 0.34,-0.23 -0.09,-0.5 -0.23,-0.6 0.04,-0.24 0.16,0.27 0.1,0.37 0.01,-0.43 0.04,-0.36 0.17,0.09 v 0.33 l -0.06,0.37 0.12,-0.15 0.05,-0.18 0.18,-0.18 v 0.22 l 0.03,0.23 0.07,0.4 0.04,-0.3 v -0.28 l -0.03,-0.25 -0.06,-0.32 0.22,0.23 0.02,0.45 0.04,0.82 0.07,0.15 0.11,-0.37 v -0.41 l -0.05,-0.35 0.14,-0.32 0.1,0.32 0.05,-0.25 0.13,-0.14 -0.07,0.47 0.09,0.13 0.06,-0.21 0.07,-0.19 0.2,0.05 -0.11,0.37 -0.03,0.31 0.16,0.15 0.09,-0.52 0.09,0.22 0.04,-0.23 0.09,-0.18 0.07,0.25 0.09,0.5 0.06,-0.37 0.17,-0.13 0.04,0.41 0.18,0.4 0.02,-0.37 v -0.33 l 0.11,0.1 0.14,0.1 -0.07,0.19 h 0.1 l 0.11,-0.13 0.17,0.04 0.04,0.19 0.02,0.21 0.06,0.44 0.09,-0.42 0.14,-0.08 0.13,-0.17 0.28,-0.21 0.25,0.61 0.32,0.41 0.25,0.56 -0.1,0.4 -0.09,0.17 -0.08,0.22 -0.2,0.17 0.14,0.22 0.25,-0.05 0.09,0.07 v -0.02 l 0.13,0.14 -0.17,0.11 -0.11,0.06 -0.11,0.1 -0.22,0.05 0.24,0.31 -0.03,0.1 -0.02,0.15 0.09,-0.04 0.05,0.31 -0.19,0.07 -0.25,0.03 -0.18,-0.18 0.01,0.09 0.05,0.06 -0.05,0.01 h -0.1 l -0.06,0.15 -0.09,0.18 -0.13,0.05 -0.11,0.05 -0.11,0.09 -0.12,0.06 -0.14,0.04 -0.07,0.16 -0.12,0.08 h -0.25 l -0.18,0.02 -0.15,0.01 -0.08,0.12 0.16,0.02 0.25,-0.08 0.27,0.02 -0.07,0.19 -0.12,0.22 0.21,-0.1 0.13,-0.29 0.2,-0.16 0.08,-0.11 0.09,-0.09 0.13,-0.01 h 0.14 l 0.14,-0.33 0.25,-0.11 0.48,0.15 -0.21,0.28 0.25,0.07 0.13,0.27 0.24,0.1 0.01,-0.29 -0.09,-0.38 -0.24,-0.22 0.15,-0.18 v -0.26 l -0.12,-0.09 -0.02,-0.4 0.21,-0.19 0.17,-0.24 0.32,-0.02 0.08,-0.06 0.1,-0.01 0.1,0.02 0.03,-0.02 0.31,0.06 h 0.23 l 0.19,0.09 0.07,-0.12 0.15,-0.35 0.17,-0.23 0.15,-0.36 0.12,-0.36 0.15,-0.4 0.07,-0.45 -0.14,-0.26 0.02,-0.15 0.07,-0.13 v -0.15 -0.19 l 0.07,-0.29 0.1,0.31 0.01,0.33 0.06,-0.49 -0.02,-0.28 0.08,-0.22 0.03,-0.25 0.05,-0.13 0.1,-0.11 0.09,-0.17 0.07,-0.07 0.06,-0.18 0.1,-0.28 0.06,-0.19 0.05,-0.15 -0.01,0.37 -0.06,0.11 -0.04,0.15 -0.09,0.28 -0.05,0.27 0.12,-0.27 0.08,-0.35 0.13,-0.3 0.07,-0.31 0.3,-0.11 0.08,-0.32 0.12,-0.12 0.1,-0.15 0.03,-0.26 0.04,0.47 0.08,0.2 0.15,-0.1 -0.11,-0.28 v -0.25 l 0.09,0.01 -0.07,-0.28 0.2,-0.21 0.07,0.29 0.1,0.13 0.04,0.16 0.04,0.83 0.05,-0.26 0.02,-0.2 0.01,-0.48 -0.11,-0.21 -0.01,-0.26 0.12,-0.36 0.14,-0.19 0.09,-0.26 -0.14,0.6 0.16,-0.22 0.08,-0.26 -0.04,0.29 -0.06,0.22 0.28,0.22 0.21,-0.36 0.19,-0.43 -0.01,0.38 0.21,0.03 0.15,0.1 0.26,-0.27 -0.24,0.07 -0.23,-0.09 -0.09,-0.28 -0.22,0.04 0.3,-0.19 0.13,0.16 0.16,-0.08 0.02,-0.1 0.04,-0.06 0.08,-0.16 0.33,-0.14 -0.34,0.04 -0.29,0.14 v -0.28 l 0.16,-0.08 0.08,-0.21 0.12,-0.12 h 0.12 l 0.07,0.05 -0.29,-0.15 -0.3,0.31 -0.25,0.05 0.06,-0.37 0.21,-0.32 0.18,-0.34 0.57,-0.1 -0.02,0.5 0.08,0.53 0.05,-0.27 -0.05,-0.31 0.12,-0.5 0.02,-0.24 0.16,-0.1 0.12,-0.19 0.13,-0.44 0.07,-0.28 0.17,-0.29 0.08,-0.37 0.08,-0.32 -0.04,-0.39 0.08,-0.14 0.06,-0.2 0.06,-0.32 0.04,-0.87 -0.12,-0.09 v -0.2 l -0.12,-0.13 0.02,-0.22 -0.17,-0.48 v -0.25 l -0.06,-0.25 -0.15,-0.41 -0.07,-0.39 -0.03,-0.39 0.01,-0.38 0.04,-0.36 0.22,0.22 0.19,0.21 0.35,0.39 -0.17,-0.2 -0.09,-0.25 -0.15,-0.13 -0.07,-0.22 v -0.23 l 0.11,0.21 0.17,0.17 0.16,0.18 0.14,0.25 -0.12,-0.34 -0.12,-0.26 0.12,0.14 0.17,0.12 0.19,0.41 -0.17,-0.48 -0.17,-0.1 -0.08,-0.19 0.2,-0.05 0.14,0.17 0.17,0.4 h 0.02 l -0.09,-0.42 -0.09,-0.13 -0.07,-0.2 0.29,0.13 v -0.11 l -0.06,-0.03 0.26,0.05 0.19,0.17 v 0.68 l 0.16,-0.78 0.08,-0.12 0.04,0.15 0.14,0.21 0.06,-0.46 0.26,0.12 0.1,0.04 0.06,0.13 0.17,0.17 0.12,0.21 0.1,0.24 0.1,0.25 0.14,0.23 0.19,0.1 0.25,0.1 0.05,0.12 0.09,0.12 0.41,0.19 -0.07,0.33 -0.02,0.26 -0.08,0.23 0.19,0.41 0.34,-0.1 -0.39,-0.19 0.1,-0.53 0.89,0.41 0.14,0.51 0.05,0.23 0.06,0.25 -0.05,0.34 v 0.49 l -0.27,-0.09 0.16,0.19 0.22,0.08 0.21,-0.27 0.19,-0.25 0.13,-0.3 0.1,-0.34 0.01,-0.39 0.21,-0.3 0.1,-0.31 0.29,-0.02 h 0.36 l -0.28,-0.1 -0.15,-0.2 0.01,-0.36 0.21,-0.14 0.04,0.26 0.04,0.3 0.03,-0.43 0.02,-0.24 -0.07,-0.19 -0.02,-0.34 0.23,-0.18 0.07,-0.47 0.03,-0.56 0.01,-0.24 -0.04,-0.23 0.13,-0.43 v -0.49 l 0.01,-0.25 0.02,-0.26 0.21,-0.5 0.06,-0.3 0.07,-0.16 0.05,-0.25 0.13,-0.19 0.07,-0.38 -0.11,-0.1 0.05,-0.26 0.01,-0.19 0.05,-0.15 0.02,-0.39 0.08,-0.15 0.05,-0.16 0.08,0.36 -0.01,0.36 0.07,-0.13 0.02,-0.18 0.12,-0.19 0.15,-0.15 0.04,-0.18 0.05,-0.2 0.18,-0.35 0.14,-0.46 0.11,-0.5 0.06,-0.53 0.01,-0.42 -0.16,-0.37 -0.11,0.16 -0.28,0.23 -0.11,0.32 -0.1,-0.35 0.1,-0.28 v -0.15 l -0.03,-0.12 0.14,0.13 0.07,0.24 0.08,-0.12 0.02,-0.1 -0.03,-0.07 0.09,0.03 0.08,-0.05 0.06,-0.21 0.02,-0.18 0.08,-0.02 0.01,-0.27 0.12,-0.06 0.07,-0.12 0.03,-0.11 -0.13,0.01 -0.09,0.07 -0.26,-0.01 -0.15,0.24 0.1,-0.24 v -0.14 l -0.02,-0.19 h 0.27 l 0.13,-0.11 -0.12,-0.1 0.02,-0.17 0.06,-0.02 0.07,-0.04 0.09,0.08 0.13,0.02 0.14,0.01 -0.04,-0.17 -0.17,-0.02 -0.01,-0.11 -0.02,-0.16 0.06,-0.19 v -0.12 l -0.05,-0.06 -0.01,-0.17 0.03,-0.1 v -0.13 l -0.02,-0.1 0.02,-0.14 -0.03,-0.12 -0.09,-0.03 0.04,-0.09 0.02,-0.11 -0.11,-0.02 -0.09,0.04 0.18,-0.17 -0.04,-0.26 -0.19,-0.12 -0.09,-0.31 -0.2,-0.05 v -0.18 l 0.02,-0.14 0.02,-0.04 0.02,-0.08 0.04,-0.11 v -0.21 l 0.01,-0.17 0.07,-0.11 0.02,-0.19 -0.11,-0.06 0.01,-0.12 0.01,-0.14 0.04,-0.09 v -0.13 -0.14 l 0.03,-0.07 0.08,0.1 0.03,0.08 0.05,0.05 0.01,0.18 0.1,0.08 -0.03,-0.32 -0.13,-0.33 -0.03,-0.17 -0.08,-0.12 v -0.1 l -0.07,-0.15 0.03,-0.2 -0.03,-0.08 -0.07,-0.07 -0.02,-0.29 -0.13,-0.2 v -0.21 l -0.02,-0.22 -0.12,-0.13 -0.16,-0.29 0.02,-0.55 -0.02,-0.57 -0.05,-0.26 -0.01,-0.24 0.02,-0.14 0.06,-0.13 0.01,-0.15 0.02,-0.2 0.02,-0.17 -0.02,-0.13 0.02,-0.11 -0.02,-0.13 0.08,-0.73 0.07,0.24 0.1,0.48 -0.06,0.22 -0.06,0.23 0.1,-0.1 v -0.05 h 0.09 l 0.04,0.27 v 0.15 l -0.04,0.11 0.1,0.05 0.12,-0.01 0.17,0.1 0.08,-0.24 0.06,0.07 0.08,-0.03 0.04,-0.31 0.02,-0.28 0.14,-0.07 0.18,0.05 0.1,-0.39 0.02,-0.18 0.14,-0.09 0.05,-0.45 0.12,-0.44 0.01,0.21 -0.01,0.12 0.08,0.08 0.12,0.13 v 0.12 l -0.09,0.18 0.06,-0.12 0.09,-0.08 0.07,-0.19 0.02,-0.08 0.06,-0.01 0.05,-0.17 0.04,-0.17 0.04,-0.19 0.2,-0.09 0.1,0.06 0.04,-0.18 0.01,-0.14 0.08,-0.07 0.06,-0.09 0.1,-0.04 0.03,-0.06 0.16,-0.01 -0.04,-0.11 -0.12,-0.05 0.04,-0.27 0.04,-0.22 0.25,-0.05 0.06,-0.18 0.14,-0.14 0.04,-0.1 0.06,-0.07 0.06,-0.17 0.08,-0.08 h 0.08 l 0.09,-0.13 0.01,-0.23 0.07,-0.19 0.02,-0.1 0.06,-0.06 0.11,-0.14 0.07,-0.25 0.1,-0.23 0.06,-0.49 v -0.54 l 0.04,-0.46 0.02,-0.23 0.05,-0.2 -0.02,-0.45 -0.04,-0.2 0.09,-0.19 0.14,-0.14 0.19,-0.14 0.03,-0.62 v -0.51 l -0.04,-0.16 0.02,-0.28 0.08,-0.22 0.09,-0.06 0.15,-0.02 0.07,-0.35 -0.07,-0.43 0.18,-0.09 0.16,-0.18 0.18,-0.17 0.19,-0.19 0.16,-0.46 0.2,-0.14 0.23,-0.43 v -0.07 l 0.01,-0.12 -0.02,-0.12 -0.22,-0.02 v -0.29 l 0.14,-0.24 0.2,-0.12 0.14,-0.23 0.18,-0.18 0.21,-0.09 0.24,-0.02 0.13,-0.22 0.14,-0.16 0.12,-0.04 h 0.06 l 0.15,-0.11 0.15,-0.12 0.04,-0.23 0.13,-0.09 0.16,-0.03 0.08,-0.03 0.08,-0.07 h 0.08 l 0.08,-0.06 0.17,-0.01 0.11,-0.1 0.06,-0.15 0.17,-0.06 0.02,-0.19 0.3,-0.1 0.15,-0.01 0.05,-0.19 0.15,-0.11 0.18,-0.05 0.26,-0.2 0.26,0.01 0.18,-0.36 0.01,-0.21 0.09,-0.13 0.1,-0.2 0.09,0.11 0.08,0.11 0.02,-0.04 h 0.16 l 0.08,0.13 0.23,-0.01 0.09,-0.02 0.07,0.01 0.17,-0.1 0.07,0.22 v 0.22 l -0.01,0.23 -0.09,0.16 0.18,-0.21 0.06,-0.11 0.04,-0.14 0.35,-0.37 -0.01,0.94 -0.18,0.44 -0.18,0.44 -0.16,0.46 -0.19,0.45 -0.16,0.4 -0.21,0.31 -0.36,0.24 -0.16,0.15 -0.11,0.16 0.03,0.25 v 0.29 0.57 0.53 l -0.1,0.37 -0.17,0.39 0.07,0.19 v 0.15 l 0.06,0.17 0.09,0.12 -0.08,0.14 v 0.2 l 0.19,0.42 -0.01,0.23 -0.03,0.52 -0.05,0.59 -0.28,0.64 -0.31,0.77 -0.39,0.5 -0.57,0.37 -0.14,0.2 -0.22,0.14 -0.15,0.23 -0.1,0.19 -0.08,0.21 -0.06,0.21 -0.16,0.08 -0.18,0.03 -0.16,0.04 -0.15,0.12 -0.15,0.09 -0.12,0.21 -0.18,0.13 -0.12,0.19 -0.11,0.12 -0.11,0.15 -0.13,0.21 -0.07,0.28 -0.58,0.05 -0.52,-0.12 -0.22,0.03 -0.22,0.18 -0.38,0.41 -0.28,0.49 -0.13,0.17 -0.07,0.3 -0.06,0.29 -0.11,0.67 -0.06,0.31 -0.04,0.36 -0.06,0.29 -0.07,0.28 -0.07,0.13 -0.03,0.14 -0.05,0.15 -0.09,0.12 0.05,-0.22 0.02,-0.2 -0.09,0.07 -0.07,0.04 -0.06,0.21 -0.13,0.13 -0.17,0.16 v 0.2 0.29 l 0.01,0.19 -0.03,0.21 v 0.21 l -0.06,0.16 -0.03,0.19 -0.02,0.09 -0.16,0.25 -0.38,-0.03 -0.57,-0.3 -0.23,0.18 0.07,0.3 -0.18,0.63 -0.04,0.63 v 0.29 0.33 l 0.11,0.18 -0.04,0.23 -0.09,0.21 0.3,0.1 -0.08,0.16 v 0.02 l 0.02,0.36 0.24,0.37 0.12,0.2 0.02,0.24 0.17,0.04 -0.04,0.16 -0.02,0.19 v 0.19 0.21 l 0.09,0.08 0.03,0.12 0.03,0.21 -0.01,0.2 0.1,0.19 0.08,0.2 0.07,0.23 0.15,0.18 0.09,0.1 0.06,0.05 0.03,0.35 v 0.18 l 0.09,0.19 0.06,0.15 0.15,0.09 0.05,0.41 -0.01,0.37 -0.06,0.37 -0.03,0.37 v 0.35 l 0.13,0.19 0.02,0.2 0.09,0.2 -0.13,0.45 -0.08,0.29 0.21,0.3 0.36,0.25 0.76,0.1 h 0.65 l 0.25,-0.2 -0.21,-0.21 0.01,-0.23 0.03,-0.2 -0.12,-0.12 0.08,-0.16 v -0.22 l -0.09,-0.13 0.05,-0.16 0.04,-0.19 -0.19,-0.12 0.11,-0.11 0.15,-0.02 0.16,-0.01 0.18,0.07 0.15,-0.03 0.2,-0.03 0.17,-0.07 0.13,-0.03 0.1,0.15 0.35,0.04 0.29,0.13 0.12,-0.09 0.1,-0.08 0.18,-0.24 0.19,-0.05 0.29,-0.41 0.16,-0.15 0.11,-0.2 0.26,-0.03 0.18,-0.06 0.25,0.2 0.09,-0.25 0.13,-0.23 0.13,-0.3 0.21,-0.5 0.05,-0.24 0.18,-0.24 0.13,-0.3 0.03,-0.16 0.03,-0.11 -0.06,-0.23 0.13,-0.27 -0.07,-0.15 0.13,-0.47 0.24,0.14 0.22,-0.1 0.11,0.27 0.05,0.39 0.19,0.16 0.17,-0.26 0.13,-0.22 0.07,-0.36 -0.07,-0.3 -0.34,-0.34 0.16,-0.15 0.18,-0.16 0.21,0.03 0.09,0.24 0.15,0.29 0.14,-0.29 0.34,-0.06 0.19,0.13 0.2,-0.1 0.05,-0.07 0.14,-0.15 0.14,-0.06 0.05,-0.08 0.08,-0.09 0.07,-0.14 0.07,-0.09 0.03,-0.14 0.12,-0.12 0.12,0.18 0.23,-0.03 0.07,-0.23 0.35,-0.07 0.17,-0.31 -0.28,-0.28 -0.28,-0.51 v -0.85 l -0.04,-0.78 v -0.39 l -0.06,-0.34 0.27,-0.1 -0.41,-0.5 0.6,0.13 0.51,0.43 0.22,0.24 0.08,0.37 0.4,0.51 0.31,0.17 0.46,0.24 h 0.09 l 0.13,0.08 0.13,0.08 0.2,0.08 0.04,0.19 0.03,0.22 0.11,0.12 0.05,0.19 0.18,-0.02 0.07,-0.13 0.27,0.06 0.09,0.38 -0.09,0.16 -0.02,0.19 h 0.28 l 0.08,0.22 -0.24,0.15 0.16,0.16 0.19,0.16 0.2,0.14 -0.23,0.11 0.05,0.25 0.1,0.35 -0.18,0.25 0.13,-0.04 0.07,-0.03 0.08,-0.15 0.08,0.01 0.07,-0.04 0.02,0.1 v 0.1 l 0.02,0.07 0.02,0.12 0.14,-0.11 0.23,-0.04 0.09,-0.06 0.12,-0.05 0.17,-0.03 0.11,0.21 0.28,0.06 0.31,0.37 0.21,0.11 0.2,0.15 0.04,0.14 0.15,0.01 0.27,0.05 0.12,0.37 0.08,0.1 0.1,0.12 0.33,-0.02 0.11,0.11 0.05,0.14 0.16,0.04 0.07,0.13 0.09,0.16 0.11,0.07 0.08,0.09 0.1,-0.04 0.16,0.04 0.05,0.17 0.07,0.22 h 0.05 l 0.04,-0.02 0.19,0.02 0.15,-0.02 0.08,0.36 0.03,0.11 -0.01,0.14 -0.04,0.25 0.28,0.02 0.11,0.25 0.03,0.2 -0.19,0.11 0.04,0.26 0.19,-0.11 0.09,0.1 -0.05,0.21 -0.04,0.22 -0.07,0.17 0.03,0.3 -0.03,0.32 -0.06,0.09 -0.05,0.09 0.18,0.05 0.16,-0.21 -0.06,0.26 -0.1,0.2 -0.09,0.24 0.09,0.25 0.16,0.18 0.22,0.45 -0.12,0.17 -0.08,0.24 -0.02,0.19 0.03,0.19 -0.03,0.21 -0.15,0.16 -0.05,0.19 0.15,-0.06 0.08,-0.04 -0.01,0.24 -0.17,0.72 0.15,0.17 -0.06,0.36 -0.17,0.73 -0.12,0.41 -0.14,0.36 -0.03,0.37 -0.06,0.18 -0.21,0.51 -0.07,0.62 -0.04,0.24 -0.12,0.18 -0.18,0.15 -0.16,0.23 -0.17,0.17 -0.17,0.25 -0.14,0.26 -0.1,0.22 -0.43,0.39 -0.09,0.2 -0.08,0.14 -0.26,0.28 -0.13,0.08 -0.09,0.14 -0.11,0.04 -0.28,0.17 -0.08,0.08 -0.09,0.11 -0.2,0.1 -0.1,0.05 -0.1,0.09 -0.15,0.18 -0.21,0.23 -0.21,0.2 -0.2,0.21 -0.08,0.32 -0.34,0.34 -0.39,0.34 -0.23,0.24 -0.28,0.66 -0.03,0.37 -0.04,0.35 -0.19,0.21 -0.18,0.17 -0.42,0.24 -0.19,0.05 -0.15,0.28 -0.23,0.4 -0.06,0.21 -0.11,0.2 -0.23,0.41 -0.13,0.18 0.08,0.34 0.23,0.26 0.05,0.23 0.07,0.13 0.01,0.26 v 0.26 0.48 l 0.18,0.18 0.08,0.21 0.02,0.29 0.12,0.21 0.43,0.07 0.28,0.34 0.15,0.24 0.39,0.29 0.04,0.6 0.09,0.33 0.26,0.14 -0.06,0.6 0.1,0.04 0.07,0.15 -0.1,0.06 -0.15,0.06 h 0.35 l 0.02,-0.39 0.21,-0.21 0.22,0.19 h -0.3 v 0.14 l 0.08,0.08 0.13,0.17 0.06,0.05 0.09,0.02 0.13,0.06 -0.03,-0.18 0.19,0.08 0.36,0.14 0.09,0.15 0.19,0.22 0.13,0.19 -0.2,0.09 -0.16,-0.22 0.02,0.25 0.12,0.13 0.15,0.07 0.16,0.02 0.08,0.05 0.09,0.07 0.06,0.16 0.17,0.08 0.01,0.14 0.07,0.13 0.27,0.05 0.1,-0.16 0.06,0.24 0.23,0.1 0.2,0.2 0.12,-0.05 -0.02,-0.23 0.08,0.02 0.05,0.38 0.25,0.04 -0.06,-0.35 0.26,0.16 0.02,0.33 -0.02,0.13 -0.06,0.14 0.19,0.18 0.03,-0.24 -0.03,-0.22 0.07,-0.06 0.07,0.03 0.18,0.06 0.06,-0.2 0.17,0.06 -0.02,0.22 -0.02,0.23 0.14,-0.31 0.11,-0.24 0.28,-0.01 0.14,-0.03 0.12,-0.04 -0.02,-0.33 0.28,0.03 0.21,0.12 0.36,0.28 -0.09,0.23 0.02,0.27 0.18,-0.34 0.15,-0.1 0.08,-0.14 0.09,0.03 0.06,0.07 0.11,-0.18 0.19,-0.04 v -0.28 l -0.16,-0.07 -0.16,-0.18 v -0.24 l -0.23,-0.37 0.01,-0.18 v -0.2 l 0.09,-0.15 0.09,-0.1 v -0.44 l 0.2,-0.18 0.02,-0.2 0.17,-0.09 0.14,-0.01 0.02,-0.13 -0.26,-0.14 0.11,-0.12 0.04,-0.13 0.11,0.06 0.26,0.04 0.07,-0.09 0.18,0.16 0.29,0.07 0.12,0.07 0.08,0.19 0.09,0.32 -0.11,0.31 -0.17,-0.04 -0.16,0.13 0.15,0.22 -0.14,0.29 -0.35,0.02 0.09,0.27 0.17,-0.02 0.17,0.09 0.29,-0.06 0.19,-0.16 -0.02,0.28 -0.22,0.21 -0.39,-0.11 0.21,0.3 0.09,0.46 0.03,0.14 0.02,-0.13 V 1170 l 0.25,0.01 0.13,0.19 0.05,0.31 0.21,0.28 0.31,0.06 v -0.02 l 0.17,0.07 0.09,0.07 0.1,0.04 v 0.12 l -0.05,0.08 0.18,0.03 0.09,-0.13 0.16,0.06 0.18,0.08 0.15,-0.09 0.13,0.21 0.11,0.14 0.04,-0.21 0.34,0.04 0.1,0.17 0.15,0.15 0.03,0.2 -0.16,0.14 0.21,0.06 0.1,-0.24 v -0.28 l 0.11,-0.04 0.13,0.18 0.13,0.14 -0.17,0.13 0.21,0.21 0.4,0.02 0.32,-0.07 0.12,0.2 -0.06,0.36 v 0.39 l 0.13,-0.52 0.23,-0.24 0.27,0.1 0.15,0.37 0.28,0.15 0.14,-0.26 0.18,0.19 v 0.43 l 0.15,0.32 0.13,-0.19 0.19,-0.17 h 0.24 l 0.15,-0.07 -0.13,0.12 -0.03,0.15 -0.08,0.15 h 0.18 l -0.03,0.15 -0.06,0.02 -0.01,0.04 -0.02,0.32 0.25,-0.47 0.36,0.23 -0.12,0.42 v 0.56 l -0.47,0.31 0.32,-0.03 0.29,-0.28 -0.05,0.25 -0.33,0.25 0.24,-0.09 0.17,-0.14 -0.08,0.26 -0.12,0.09 -0.02,0.16 -0.16,0.58 0.18,-0.09 0.06,-0.31 0.13,-0.36 0.26,-0.21 0.17,-0.1 0.03,-0.24 0.1,-0.18 0.07,-0.09 0.16,-0.29 0.15,-0.17 -0.37,-0.22 0.36,-0.01 0.25,0.2 0.08,0.3 0.19,0.17 -0.05,-0.25 0.39,0.04 0.02,0.15 -0.18,0.08 -0.12,0.18 -0.09,0.17 0.17,0.02 0.11,0.03 0.06,0.01 0.05,-0.04 0.05,-0.05 0.08,-0.12 -0.02,-0.09 0.04,-0.08 0.06,-0.02 0.05,0.07 0.14,0.05 0.01,0.16 -0.11,0.09 v 0.17 l -0.04,0.07 -0.03,0.06 0.16,0.18 0.1,0.03 0.11,0.09 0.14,-0.23 0.04,-0.28 0.29,0.05 0.06,0.13 0.1,0.11 0.09,0.11 0.04,0.17 0.26,0.12 0.28,0.16 0.14,0.1 -0.04,-0.21 0.13,-0.24 0.24,-0.05 0.15,0.05 -0.03,0.21 0.44,0.31 0.19,-0.18 h 0.16 l 0.25,0.14 0.28,0.12 0.51,0.35 0.42,0.19 0.18,0.51 0.38,0.26 -0.39,0.18 -0.11,-0.02 0.03,0.16 0.14,-0.08 0.15,0.01 0.21,0.05 0.1,0.13 0.01,0.11 0.04,0.12 v 0.1 0.1 l 0.03,0.14 -0.03,0.09 0.35,0.08 0.19,-0.22 0.21,0.2 0.08,0.11 0.06,-0.02 0.05,0.06 0.1,0.11 0.17,-0.16 -0.01,-0.19 0.19,0.25 -0.05,0.16 0.01,0.19 -0.06,0.32 h 0.29 l 0.2,-0.03 0.13,0.25 0.19,0.17 -0.04,-0.09 -0.04,-0.1 v -0.13 l 0.12,0.21 0.19,0.1 0.03,0.11 0.04,0.1 0.05,0.22 0.18,0.15 0.19,0.16 v 0.18 l -0.16,0.03 -0.09,0.16 -0.29,-0.01 0.19,0.17 0.29,-0.02 0.18,0.02 0.03,0.23 h -0.27 l -0.12,0.04 0.05,0.08 0.25,0.16 0.16,0.13 0.06,-0.21 0.04,-0.12 0.13,0.08 0.16,0.04 0.06,0.02 v 0.2 l 0.14,0.11 0.15,-0.22 0.1,-0.05 0.1,-0.1 0.08,0.26 v 0.11 l 0.1,0.02 0.13,0.25 -0.23,0.06 -0.04,0.12 0.11,0.37 0.1,-0.18 0.11,-0.08 0.16,0.09 0.17,-0.01 v 0.13 l 0.03,0.12 -0.14,0.21 -0.02,0.13 0.08,0.04 0.15,0.19 -0.19,0.14 0.19,0.18 0.24,-0.02 -0.04,-0.28 0.11,-0.08 0.05,0.28 0.14,-0.13 0.27,0.03 0.04,0.23 -0.1,0.15 -0.17,-0.1 -0.04,0.12 -0.1,0.03 v 0.27 l 0.22,0.08 0.15,-0.04 0.04,0.16 0.07,0.23 0.07,0.18 0.02,-0.34 0.1,-0.08 0.05,-0.09 0.13,-0.06 0.04,-0.12 0.16,0.02 0.11,0.01 -0.1,0.31 -0.12,0.13 -0.13,0.09 -0.06,0.19 0.01,0.1 0.2,0.06 0.14,0.11 -0.01,0.21 -0.11,0.1 0.11,0.08 0.15,0.02 0.06,0.15 v 0.13 l -0.13,0.06 -0.11,-0.02 -0.06,0.11 0.08,0.09 v 0.3 l 0.11,0.23 0.18,0.05 0.08,0.04 0.06,0.12 0.07,0.09 -0.05,0.12 -0.14,-0.15 -0.13,-0.07 -0.07,0.07 -0.02,0.16 -0.19,0.06 0.24,0.1 0.15,-0.16 0.14,0.14 -0.08,0.26 -0.13,0.12 -0.24,-0.07 -0.06,0.35 0.06,0.16 0.22,-0.01 0.23,-0.05 0.18,-0.19 0.07,0.18 -0.02,0.16 0.03,0.09 h 0.21 l 0.01,0.12 -0.01,0.14 0.15,0.01 0.1,-0.01 0.05,0.05 0.03,0.12 0.11,0.02 0.1,0.04 v 0.15 l 0.01,0.13 -0.01,0.14 0.15,0.02 0.09,0.01 0.08,0.13 -0.03,0.12 0.24,-0.05 0.07,0.17 0.02,0.1 0.03,0.11 v 0.09 l 0.01,0.08 0.02,0.16 0.17,0.02 0.11,0.14 -0.07,0.19 -0.07,0.16 0.03,0.12 0.11,0.02 0.01,0.17 0.09,0.04 0.03,0.08 0.1,0.2 0.09,0.17 0.05,0.11 0.05,0.17 -0.14,0.11 0.19,0.06 h 0.21 l 0.06,0.18 0.02,0.21 0.11,0.06 0.14,0.08 0.04,0.17 0.04,0.16 -0.07,0.31 -0.09,0.05 0.13,0.12 0.15,-0.23 0.13,-0.03 0.01,-0.15 -0.01,-0.3 -0.23,-0.15 v -0.19 l 0.23,0.02 0.06,0.28 0.24,0.08 0.04,0.26 0.38,0.15 0.11,-0.19 0.04,0.2 -0.1,0.22 -0.06,0.24 -0.09,0.27 -0.1,0.25 -0.05,0.02 h 0.21 l 0.21,0.06 0.08,0.23 -0.06,0.3 -0.18,0.02 -0.05,0.15 0.09,-0.05 0.08,-0.03 0.15,-0.03 0.06,-0.02 0.03,0.12 -0.12,0.09 -0.04,0.12 -0.04,0.14 -0.06,0.15 -0.15,-0.03 -0.24,0.05 0.18,0.14 0.08,0.21 0.3,-0.21 0.22,0.01 0.06,-0.19 0.15,-0.05 0.21,0.05 0.03,0.21 -0.2,0.1 0.13,0.1 -0.06,0.12 v 0.19 0.16 l 0.1,0.16 -0.04,0.15 0.03,0.3 -0.37,-0.1 v -0.3 l -0.17,0.05 -0.13,-0.14 -0.11,-0.02 -0.12,-0.04 -0.12,-0.02 -0.12,0.04 -0.01,0.12 0.11,0.05 h 0.09 l 0.09,-0.06 0.16,0.08 0.21,0.09 v 0.21 l 0.08,0.1 0.13,0.08 0.03,0.19 0.19,0.08 0.15,0.07 0.22,-0.13 0.1,-0.14 h 0.08 l 0.14,0.03 0.05,0.13 -0.23,0.01 -0.13,0.14 -0.04,0.17 -0.1,0.09 -0.18,0.11 -0.21,-0.01 -0.23,-0.02 -0.26,0.01 -0.12,0.26 -0.19,0.25 -0.32,0.22 -0.29,0.1 -0.33,-0.16 -0.26,-0.21 -0.21,-0.21 -0.2,-0.05 -0.23,-0.08 -0.18,-0.04 -0.14,0.36 -0.33,0.1 -0.1,-0.19 -0.27,-0.13 v 0.25 l 0.21,0.12 v 0.16 l 0.15,0.06 0.33,0.03 0.31,0.03 0.22,-0.18 0.26,0.19 0.06,0.34 0.27,0.26 0.3,0.29 0.29,0.17 0.31,0.25 0.21,0.23 0.6,0.12 0.14,0.52 -0.16,0.38 -0.53,0.43 -0.57,0.34 -0.48,0.39 -0.31,0.06 -0.31,-0.04 -0.15,0.45 -0.18,0.19 -0.66,-0.1 -0.33,-0.17 1.02,0.53 0.37,-0.32 0.28,-0.33 0.45,0.13 0.36,0.18 0.16,-0.02 0.11,-0.14 h 0.13 l 0.15,-0.01 0.07,-0.1 0.12,-0.04 0.18,-0.03 h 0.12 l 0.17,0.05 0.02,0.25 -0.1,0.18 -0.09,0.24 -0.12,0.15 -0.52,0.21 -0.3,0.02 -0.09,0.25 v 0.23 l -0.01,0.19 -0.11,0.06 -0.13,0.06 -0.16,0.03 -0.1,0.06 -0.12,0.06 -0.08,0.03 -0.09,-0.01 -0.18,-0.02 v 0.14 l -0.12,0.14 v 0.09 l -0.07,0.08 -0.03,0.09 -0.07,0.08 0.12,0.19 -0.02,0.21 -0.1,0.15 -0.07,0.18 -0.09,0.14 -0.04,0.06 v 0.18 l 0.04,0.1 -0.05,0.07 -0.09,0.09 -0.04,0.18 -0.16,0.06 v 0.17 l -0.06,0.12 -0.06,0.03 -0.02,0.07 -0.02,0.2 -0.02,0.07 -0.05,0.06 -0.03,0.13 -0.08,0.13 -0.03,0.17 -0.02,0.18 v 0.2 l -0.13,0.1 -0.02,0.2 -0.03,0.23 -0.1,0.17 -0.1,0.12 -0.14,0.05 -0.09,0.07 h -0.14 l -0.04,0.07 -0.11,-0.01 -0.11,0.11 -0.08,0.05 -0.13,0.02 -0.19,0.1 -0.21,0.06 -0.1,-0.03 -0.09,-0.01 -0.08,0.13 -0.11,-0.01 -0.1,-0.03 -0.07,0.32 -0.17,0.06 -0.14,0.02 -0.12,-0.02 -0.1,0.05 -0.1,0.05 0.01,0.09 0.02,0.08 v 0.19 l 0.04,0.2 -0.02,0.08 -0.04,0.1 0.14,0.06 0.03,0.01 0.04,-0.02 0.06,0.05 h 0.04 l 0.1,0.01 v 0.2 l 0.04,0.08 -0.04,0.09 0.1,0.11 0.05,0.15 0.24,0.14 0.01,0.2 0.09,0.14 0.03,0.1 0.05,0.08 0.03,0.2 0.15,0.04 0.09,0.02 0.06,0.04 0.16,0.02 0.14,0.08 0.06,0.21 -0.01,0.19 0.14,0.02 0.02,-0.21 0.11,0.41 0.12,0.17 0.18,0.08 0.2,0.18 0.11,0.04 0.09,0.09 -0.17,-0.04 -0.05,0.03 -0.08,0.01 -0.06,0.07 -0.02,0.07 -0.1,-0.02 -0.1,0.06 0.02,0.19 0.12,0.1 0.18,0.01 0.14,-0.06 0.03,0.33 0.1,-0.23 0.17,-0.17 0.31,0.07 0.31,-0.02 -0.01,0.34 -0.09,0.09 -0.09,0.11 v 0.1 l 0.1,0.04 0.06,-0.07 0.08,-0.04 -0.03,0.24 0.13,0.16 0.23,0.02 0.23,0.04 -0.02,0.2 -0.09,0.13 -0.08,0.09 -0.24,-0.04 0.31,0.2 0.12,-0.11 0.11,-0.04 0.17,0.07 0.1,0.11 0.07,0.06 0.07,0.09 0.19,0.08 0.09,0.03 h 0.1 l 0.16,0.16 0.06,0.05 v 0.13 0.14 l 0.09,-0.14 0.13,0.02 -0.07,-0.08 -0.01,-0.1 0.17,0.03 0.14,0.03 0.02,0.2 0.18,0.04 0.05,0.14 0.12,0.11 0.16,0.06 0.12,0.12 0.09,0.16 0.18,0.06 -0.04,-0.27 0.17,0.01 0.04,0.13 0.08,0.12 0.17,0.13 -0.07,-0.5 0.38,-0.05 0.14,0.32 0.3,0.2 -0.32,0.03 0.08,0.21 0.1,0.18 0.19,0.03 0.15,0.11 -0.06,0.09 -0.1,0.05 0.01,0.19 0.11,0.1 0.25,0.22 v 0.02 l -0.88,-0.12 -0.2,0.05 -0.22,0.01 -0.09,0.1 -0.15,0.13 -0.16,-0.24 -0.1,-0.22 -0.16,0.09 -0.09,-0.04 h -0.1 l -0.41,-0.08 -0.21,-0.01 -0.1,0.01 -0.08,0.03 -0.12,0.09 -0.16,0.1 -0.2,0.02 -0.14,-0.05 -0.1,0.01 -0.01,0.19 v 0.11 l -0.03,0.08 -0.08,-0.03 -0.08,-0.02 -0.06,0.02 -0.09,-0.01 -0.07,0.06 -0.09,0.07 -0.18,0.11 -0.17,-0.05 -0.11,-0.02 -0.14,-0.15 -0.19,-0.06 h -0.08 l -0.07,-0.05 -0.15,-0.04 -0.07,-0.15 -0.16,-0.08 -0.04,-0.24 -0.14,-0.12 -0.05,-0.16 -0.19,-0.1 -0.15,-0.08 -0.16,-0.09 -0.16,-0.08 -0.16,-0.13 -0.06,-0.15 0.09,-0.14 -0.12,-0.12 -0.04,-0.1 -0.08,-0.05 -0.09,-0.1 -0.1,-0.05 -0.32,-0.1 -0.39,-0.09 -0.38,0.02 -0.15,0.09 -0.18,0.02 -0.13,0.13 -0.1,0.12 -0.06,0.06 0.02,0.37 -0.01,0.18 -0.03,0.1 -0.03,0.07 0.12,0.07 0.09,0.09 0.15,0.28 -0.1,0.05 -0.09,0.04 0.04,0.27 -0.07,0.14 -0.07,0.16 -0.1,0.16 -0.17,0.02 -0.16,0.26 -0.16,-0.11 -0.09,-0.12 -0.09,0.02 h -0.05 l -0.04,0.01 -0.16,-0.14 -0.09,0.05 h -0.1 l -0.1,0.04 -0.12,-0.02 -0.34,-0.08 -0.15,-0.03 -0.16,-0.05 -0.03,0.13 -0.08,0.02 -0.1,0.01 -0.07,0.14 -0.13,-0.03 v 0.03 l -0.14,0.02 -0.11,-0.03 -0.04,0.1 -0.05,0.11 -0.15,0.22 -0.07,0.09 -0.05,0.1 -0.13,0.27 0.03,0.12 v 0.22 h -0.02 l 0.12,0.28 0.07,0.08 0.04,0.14 0.21,0.21 0.04,0.3 0.36,0.45 0.52,0.04 0.41,-0.36 0.46,0.41 0.31,0.13 0.11,-0.11 0.17,-0.02 0.21,0.1 0.19,0.09 0.27,0.26 0.1,0.16 0.08,0.17 0.37,0.2 -0.14,0.16 0.02,0.22 0.12,0.17 0.02,0.1 0.03,0.11 0.01,0.12 0.12,0.05 0.25,0.24 0.16,0.29 0.16,0.05 0.16,0.1 0.18,0.09 0.13,0.12 0.2,0.08 0.11,0.14 0.39,0.13 0.16,0.14 0.14,0.1 0.12,0.12 0.24,0.05 0.08,0.14 0.09,0.25 0.05,0.16 0.11,0.19 0.13,0.19 0.14,0.12 0.11,0.14 0.1,0.18 0.12,0.12 0.13,0.09 0.19,0.38 0.17,0.05 0.1,0.08 0.08,0.09 0.21,0.14 0.27,0.08 0.11,-0.01 0.15,0.03 0.13,-0.03 h 0.13 l 0.03,-0.13 0.22,0.05 0.18,0.01 0.17,0.22 0.1,-0.28 h 0.15 l 0.17,-0.05 0.12,-0.14 0.15,-0.11 0.08,-0.09 0.01,-0.17 0.18,-0.04 0.05,-0.11 v -0.23 l -0.15,-0.13 -0.08,-0.18 -0.09,-0.13 -0.09,-0.18 -0.19,-0.1 -0.08,-0.31 -0.16,-0.15 -0.09,-0.12 -0.05,-0.08 -0.19,-0.14 -0.05,-0.08 -0.14,-0.04 -0.11,-0.04 -0.06,-0.11 -0.22,-0.08 -0.08,-0.45 0.13,-0.15 -0.14,-0.02 -0.1,-0.05 -0.28,-0.05 -0.13,-0.11 -0.1,-0.16 0.1,-0.09 0.11,-0.03 -0.09,-0.12 -0.1,-0.16 0.08,0.01 0.03,0.01 h 0.02 l 0.19,0.15 -0.05,-0.13 0.14,0.03 0.09,0.06 0.14,-0.02 0.28,-0.03 0.35,0.18 0.23,0.02 0.11,-0.04 -0.21,-0.08 -0.29,-0.23 -0.02,0.02 -0.06,-0.07 -0.06,-0.05 -0.05,-0.04 -0.01,-0.01 0.03,-0.25 0.06,-0.18 -0.58,-0.16 -0.17,-0.07 -0.02,-0.17 -0.48,-0.26 -0.01,-0.38 0.15,-0.24 0.14,0.14 0.14,0.21 0.51,0.17 0.22,0.15 0.31,0.07 -0.23,0.14 0.05,0.15 0.28,-0.03 h 0.28 l -0.1,0.13 -0.08,0.08 0.18,0.05 0.16,0.07 0.3,0.15 0.04,0.38 0.14,0.08 0.15,0.12 0.14,0.14 0.08,0.16 0.18,0.1 0.15,0.05 0.12,0.11 0.22,0.15 0.1,0.14 0.15,0.1 0.18,0.13 0.18,0.11 0.29,0.15 0.1,0.04 h 0.16 l 0.14,0.02 0.1,0.05 0.09,0.31 0.12,0.03 0.12,0.02 0.12,-0.15 0.08,0.24 0.14,0.03 h 0.11 l 0.1,0.04 0.07,0.11 0.2,0.01 0.06,-0.03 0.07,0.08 0.13,0.02 v -0.03 l 0.31,0.03 0.18,0.06 0.17,0.02 0.1,0.05 h 0.2 l 0.05,0.28 0.14,0.25 0.02,-0.24 0.09,-0.22 0.15,-0.07 0.23,0.02 0.02,-0.1 0.03,-0.1 0.15,-0.19 0.19,0.08 0.14,0.22 0.24,-0.11 0.08,-0.35 0.06,0.14 0.07,0.15 0.21,-0.05 0.13,-0.07 0.12,0.04 0.2,-0.07 0.21,0.09 0.11,-0.01 0.11,0.1 -0.04,-0.16 -0.07,-0.13 -0.05,-0.29 0.05,-0.23 -0.02,-0.26 -0.18,-0.16 -0.05,-0.24 -0.07,-0.1 -0.08,-0.09 -0.08,-0.25 -0.11,-0.2 -0.01,-0.24 0.11,-0.1 0.17,-0.09 0.2,0.02 0.1,0.04 0.06,0.08 0.1,-0.03 0.12,0.03 0.14,-0.08 -0.24,-0.08 -0.21,-0.07 -0.24,-0.09 -0.24,-0.01 -0.09,-0.22 -0.15,-0.07 -0.1,-0.1 -0.07,-0.16 -0.11,-0.09 -0.1,-0.12 -0.12,-0.2 0.04,-0.16 -0.05,-0.26 -0.09,-0.14 -0.06,-0.05 -0.05,-0.02 -0.04,-0.01 -0.29,-0.19 0.32,0.03 0.31,0.07 0.33,-0.01 0.23,-0.08 -0.25,-0.16 -0.18,-0.2 0.27,0.01 0.26,-0.02 0.29,0.09 0.09,-0.27 0.21,0.23 0.12,0.05 -0.12,-0.26 -0.23,-0.14 -0.18,-0.23 0.36,0.19 0.16,0.1 0.17,0.06 0.16,0.09 0.06,0.2 0.14,0.16 0.08,0.11 -0.21,0.08 -0.11,0.15 0.15,-0.07 0.13,0.02 0.11,0.05 0.2,-0.25 0.11,-0.13 0.13,-0.06 0.13,0.2 0.06,-0.15 0.09,0.04 0.05,-0.21 0.14,-0.09 0.06,0.32 0.33,0.11 h 0.3 l 0.28,-0.06 0.26,-0.14 0.24,-0.31 -0.56,0.34 -0.36,-0.01 -0.01,-0.39 0.34,-0.15 0.04,0.13 0.03,0.17 0.04,0.01 0.05,-0.22 0.14,-0.06 0.01,-0.27 v -0.2 l 0.19,-0.19 0.22,-0.04 -0.17,-0.13 -0.14,-0.02 -0.08,-0.13 v -0.1 l 0.12,-0.09 0.08,-0.16 v -0.12 l 0.07,-0.07 0.06,-0.08 0.06,-0.02 0.04,-0.05 0.16,-0.03 0.15,0.02 -0.11,-0.16 -0.12,-0.05 -0.19,0.14 -0.04,-0.04 -0.06,0.13 -0.14,-0.05 -0.06,0.02 -0.08,-0.09 -0.05,0.09 -0.11,0.06 -0.07,-0.05 -0.07,-0.01 -0.14,-0.1 h -0.08 l -0.08,-0.08 -0.04,-0.21 -0.12,-0.04 -0.04,-0.14 -0.06,0.17 -0.07,-0.14 -0.1,0.06 -0.12,-0.17 v -0.35 l 0.29,0.1 0.1,-0.37 0.09,-0.24 0.11,-0.19 0.02,-0.06 0.02,0.33 -0.11,0.12 v 0.19 l -0.09,0.35 0.09,-0.15 v -0.1 l 0.07,-0.06 0.04,0.16 0.04,0.07 0.02,0.12 0.08,-0.12 -0.02,-0.06 0.02,-0.07 -0.04,-0.14 0.03,-0.12 0.04,-0.36 0.06,-0.12 0.05,-0.53 0.22,-0.18 v -0.15 l 0.06,-0.1 -0.09,-0.18 v -0.2 l 0.2,-0.01 v -0.08 l -0.01,-0.08 -0.1,-0.04 -0.06,-0.11 -0.07,-0.13 -0.07,-0.12 -0.11,-0.04 -0.1,-0.11 -0.11,-0.13 0.13,0.03 0.12,-0.04 0.27,0.07 v -0.14 l -0.09,-0.02 -0.08,-0.03 -0.33,-0.22 -0.06,-0.18 -0.11,-0.19 -0.01,-0.2 -0.05,-0.22 -0.04,-0.2 -0.18,-0.11 h -0.18 l -0.23,-0.13 -0.16,-0.15 0.15,0.02 0.1,-0.03 0.01,-0.11 0.04,-0.11 -0.2,-0.06 -0.11,-0.11 0.06,-0.17 v -0.1 l 0.1,-0.04 0.07,-0.18 0.08,-0.16 0.07,-0.13 0.05,0.25 -0.04,0.19 -0.06,0.21 -0.08,0.12 0.06,0.05 0.07,0.12 0.05,0.22 0.23,0.09 v -0.08 l 0.2,0.03 0.02,-0.16 -0.01,-0.14 0.03,-0.13 0.03,-0.15 0.21,-0.02 0.08,0.13 -0.05,-0.4 -0.22,-0.24 -0.18,0.16 -0.06,0.29 -0.02,-0.16 -0.11,-0.14 0.05,-0.18 -0.05,-0.31 -0.1,0.05 -0.05,-0.12 -0.2,-0.12 0.03,-0.23 0.12,-0.23 0.05,0.24 0.2,0.11 0.08,0.06 0.1,0.08 0.05,0.31 0.19,0.09 0.11,-0.04 -0.09,-0.2 0.08,-0.25 0.2,-0.2 0.07,0.29 0.1,-0.04 0.27,-0.33 0.09,0.21 0.12,-0.02 0.11,0.02 h 0.12 l 0.09,0.07 0.22,0.26 -0.27,-0.14 -0.11,0.19 0.13,0.32 0.07,0.29 0.29,0.16 0.13,0.12 0.14,0.07 0.18,-0.14 -0.18,-0.12 -0.15,-0.18 -0.16,-0.43 0.28,0.18 0.23,-0.08 0.1,0.15 h 0.12 l 0.15,-0.09 v 0.18 l -0.05,0.12 0.05,0.15 -0.22,0.19 v 0.31 l 0.17,0.15 h 0.16 l -0.01,-0.33 0.11,-0.2 0.2,0.07 -0.02,0.23 0.15,0.07 0.07,0.27 -0.17,-0.03 -0.19,-0.09 0.01,0.24 0.28,0.07 0.29,0.11 -0.04,-0.34 0.11,-0.12 0.11,-0.11 0.32,0.09 0.02,0.16 0.02,0.24 0.28,0.18 0.01,-0.02 h 0.01 l 0.01,-0.02 v 0.02 l 0.05,0.01 0.07,0.06 0.13,-0.12 0.13,-0.09 0.09,-0.16 0.13,0.04 0.11,-0.09 0.15,0.01 0.25,0.14 0.17,0.27 -0.06,0.35 -0.25,-0.12 -0.13,-0.21 -0.29,0.03 0.13,0.27 -0.23,0.01 0.17,0.2 0.28,-0.05 0.09,-0.04 -0.01,0.19 -0.12,0.05 v 0.21 l 0.12,-0.12 0.07,-0.03 0.09,0.03 0.12,-0.21 h 0.16 l 0.12,-0.08 0.14,0.14 0.06,-0.01 0.13,0.02 0.24,0.12 0.2,0.2 0.18,0.2 0.1,0.3 0.2,0.22 0.1,0.3 0.15,0.31 0.07,0.36 0.09,0.29 v 0.78 l -0.14,-0.19 -0.21,-0.16 -0.02,0.27 0.02,0.31 -0.02,0.21 0.05,0.4 0.01,0.64 v 0.77 l -0.27,0.67 -0.03,0.3 -0.13,0.27 -0.26,0.16 -0.13,-0.31 -0.01,0.19 -0.05,0.15 -0.01,0.3 -0.09,0.06 -0.01,0.12 -0.21,0.17 -0.28,-0.17 v 0.09 l 0.01,0.09 -0.03,0.2 -0.21,0.05 0.11,0.2 -0.17,0.17 -0.17,0.1 -0.22,-0.15 v 0.17 l 0.08,0.17 -0.03,0.17 -0.12,0.04 -0.06,0.31 -0.13,0.05 -0.08,0.21 v 0.26 l -0.02,0.19 -0.06,-0.14 -0.03,-0.11 -0.03,-0.14 -0.12,-0.02 0.01,0.36 -0.06,0.06 -0.08,0.1 -0.02,0.15 -0.09,0.1 -0.2,0.2 -0.27,0.01 -0.17,-0.02 h -0.11 l -0.03,0.17 -0.08,0.14 -0.03,0.24 -0.05,0.1 -0.49,0.09 -0.24,-0.06 -0.13,0.06 -0.22,0.06 0.08,0.09 0.08,0.07 -0.04,0.21 0.07,0.13 -0.03,0.13 0.11,0.06 0.06,0.02 h 0.05 l 0.04,0.03 0.05,0.04 0.05,0.1 v 0.26 l -0.05,0.3 0.05,0.36 0.28,0.12 0.27,0.25 0.24,0.13 0.18,0.25 0.31,0.12 0.38,0.01 0.23,0.26 0.21,0.17 0.17,0.06 0.15,0.09 0.26,0.15 -0.07,0.24 0.39,0.24 0.3,0.28 0.36,0.21 0.28,0.35 0.21,0.35 0.35,0.23 0.41,0.22 0.35,0.21 -0.06,0.45 v 0.23 l -0.04,0.34 0.09,0.41 -0.04,0.16 -0.16,0.09 0.05,0.39 0.11,0.21 0.09,0.18 0.2,0.16 0.09,0.24 0.17,0.13 0.15,0.27 0.17,0.2 0.07,0.1 0.13,0.08 0.12,0.24 0.25,0.17 0.19,0.15 0.14,0.22 0.31,0.03 0.24,-0.11 0.26,0.47 0.14,0.39 -0.34,0.17 0.15,0.2 0.39,-0.14 0.48,0.04 0.27,0.1 0.09,0.45 0.19,0.11 0.12,0.27 0.32,0.32 0.19,0.25 0.2,0.26 0.33,0.61 0.33,0.09 0.19,-0.06 -0.18,-0.24 -0.25,-0.32 0.11,-0.19 0.32,0.22 0.4,0.29 0.17,0.21 0.09,-0.01 -0.05,-0.31 v -0.28 -0.32 l 0.03,-0.3 0.23,0.05 0.31,0.01 0.29,0.09 0.28,0.23 0.05,-0.3 0.1,-0.2 0.19,0.27 0.12,0.24 0.22,-0.4 0.44,0.08 0.52,0.31 0.46,0.18 0.55,0.16 0.45,0.36 0.38,0.44 0.61,0.33 0.46,0.39 0.4,0.32 0.34,0.32 0.38,0.24 0.14,0.13 0.07,0.23 0.08,0.24 0.19,0.03 0.3,0.33 0.12,0.48 0.35,0.27 0.11,0.32 0.06,0.23 0.19,0.17 0.16,0.22 0.11,0.2 0.18,0.13 0.44,0.16 0.02,0.45 0.25,0.32 0.13,0.21 0.17,0.05 0.13,0.46 0.33,0.19 0.19,0.34 0.3,0.18 v 0.19 l 0.13,0.12 0.24,0.07 0.2,0.13 0.24,0.18 0.16,0.33 0.17,0.24 0.13,0.08 0.1,0.17 0.07,0.17 0.15,0.03 0.2,0.3 0.16,0.07 0.15,0.08 0.09,0.19 0.13,0.13 0.16,0.19 0.04,0.16 v 0 l 0.2,0.18 0.01,0.11 0.04,0.16 0.14,0.16 0.24,0.15 0.08,0.1 0.05,0.13 0.03,0.3 0.11,0.21 0.14,0.16 0.01,0.15 0.07,0.02 0.07,0.03 0.15,0.22 0.04,0.29 0.06,0.21 0.16,0.19 0.17,0.2 0.06,0.28 0.06,0.29 0.22,0.13 0.05,0.12 0.09,0.11 0.2,0.21 0.27,0.17 0.04,0.17 0.15,0.06 0.13,0.09 0.06,0.2 v 0.19 l 0.07,0.16 0.15,0.13 0.06,0.17 0.16,0.31 0.1,0.19 0.13,0.17 0.12,0.24 0.2,0.06 0.13,0.17 0.14,0.16 0.2,0.14 0.34,0.48 0.29,0.45 0.25,0.09 0.16,0.18 0.3,0.43 0.05,0.39 0.03,0.2 0.01,0.12 0.17,0.21 0.19,0.45 0.06,0.6 0.02,0.21 0.09,0.13 0.13,0.34 0.09,0.16 0.06,0.22 0.09,0.36 -0.21,0.18 -0.13,0.2 0.13,0.32 0.1,0.4 0.02,0.39 -0.06,0.27 -0.03,0.25 -0.09,0.25 -0.12,0.27 0.13,0.28 0.02,0.38 0.1,0.25 0.05,0.2 0.12,0.1 0.1,0.11 0.12,0.19 0.03,0.54 0.05,0.31 0.37,0.17 v 0.25 l 0.11,0.3 0.15,0.36 0.41,0.21 0.17,0.43 0.37,0.25 0.35,0.31 -0.23,0.04 -0.01,0.26 0.23,0.18 0.24,0.19 -0.13,0.11 -0.28,-0.05 -0.23,0.15 -0.27,0.12 -0.21,0.21 0.12,0.18 0.23,0.08 0.14,0.2 -0.03,0.26 -0.08,0.2 -0.18,0.11 0.06,0.14 0.02,0.1 -0.27,-0.01 -0.14,0.08 -0.22,0.04 -0.1,0.19 -0.14,0.04 -0.07,-0.02 -0.08,0.02 -0.22,0.11 0.32,0.12 0.17,-0.08 0.22,-0.09 0.19,-0.06 0.44,0.23 0.45,0.22 0.02,0.16 -0.25,0.06 -0.04,0.24 -0.17,0.02 h -0.17 -0.15 l -0.15,0.12 -0.14,0.06 -0.1,0.12 -0.15,0.02 -0.47,0.12 -0.1,0.09 -0.12,0.04 -0.13,0.03 -0.08,0.09 -0.04,0.14 -0.18,0.02 h -0.17 l -0.13,0.07 -0.12,0.1 0.01,0.3 -0.1,0.15 -0.11,0.03 -0.06,0.11 -0.11,0.03 -0.31,-0.03 -0.12,0.05 -0.11,0.09 -0.1,0.05 -0.21,-0.06 -0.06,0.18 -0.04,0.17 -0.19,-0.11 -0.29,-0.14 -0.18,-0.18 -0.25,-0.05 -0.26,-0.06 h -0.25 l -0.25,0.04 -0.26,-0.07 -0.28,-0.04 -0.21,0.09 h -0.26 l 0.06,-0.2 0.03,-0.23 -0.09,-0.2 0.04,-0.06 0.14,-0.05 v -0.23 l -0.12,-0.17 -0.02,-0.22 -0.15,-0.42 -0.25,-0.38 -0.24,-0.31 -0.38,-0.01 0.07,0.23 0.23,0.37 0.43,0.52 -0.18,0.42 -0.41,-0.5 -0.29,-0.5 -0.26,-0.2 -0.25,-0.29 -0.12,-0.05 -0.11,-0.02 -0.15,-0.14 -0.19,-0.05 -0.15,-0.02 -0.11,0.02 -0.29,-0.04 -0.28,-0.11 -0.29,-0.05 h -0.13 l -0.17,-0.04 0.08,0.22 0.04,0.1 0.11,0.09 0.18,0.08 0.17,0.04 0.29,0.31 0.08,0.21 0.16,0.12 0.27,0.11 0.22,0.15 -0.4,0.09 -0.3,-0.05 -0.16,0.05 -0.12,0.02 -0.2,-0.05 -0.21,0.03 0.18,0.31 0.15,0.04 0.21,0.02 0.58,0.6 0.3,0.34 0.13,0.24 -0.49,-0.36 -0.31,-0.29 -0.28,-0.14 -0.81,-0.44 -0.17,-0.26 0.2,-0.18 0.05,-0.52 -0.72,-0.3 -0.37,-0.17 -0.17,0.29 v 0.28 l 0.05,0.22 0.11,0.1 0.01,0.13 0.05,0.11 0.04,0.14 v 0.24 l -0.1,0.22 0.06,0.07 0.05,0.14 v 0.14 l -0.01,0.11 0.09,0.09 0.04,0.14 -0.24,-0.02 -0.13,-0.02 -0.09,-0.07 -0.25,-0.03 -0.33,-0.1 -0.29,-0.03 -0.14,-0.04 h -0.16 l -0.27,-0.13 -0.24,-0.15 -0.14,-0.08 -0.14,-0.03 -0.35,0.03 -0.15,0.3 -0.23,-0.02 -0.24,-0.05 -0.21,0.03 -0.28,-0.06 -0.13,0.59 0.4,0.23 0.27,0.3 0.35,0.2 0.31,0.18 0.34,0.18 0.33,0.26 0.34,0.31 0.49,0.68 0.2,0.18 0.18,0.12 0.23,0.04 0.15,0.16 0.2,0.08 0.14,0.22 0.18,0.11 0.24,0.07 0.09,0.05 0.07,0.11 0.14,0.18 0.21,0.1 0.17,0.19 0.2,0.07 0.28,0.44 0.23,0.14 0.11,0.03 0.16,0.1 0.1,0.07 0.07,0.1 0.09,0.12 0.13,0.05 0.12,0.25 0.11,0.25 0.29,0.08 0.29,0.17 0.25,0.11 -0.25,0.08 -0.02,0.21 0.24,0.17 0.24,0.23 0.36,0.47 0.21,0.21 0.18,0.28 0.3,0.2 0.32,0.15 0.09,0.31 0.2,0.16 0.21,0.15 0.25,0.27 0.25,0.12 0.27,0.08 0.43,0.27 0.09,0.28 0.25,0.11 0.22,0.04 0.21,0.29 0.25,0.2 0.09,0.27 0.24,0.14 0.36,0.09 0.54,0.3 0.12,0.24 0.06,0.32 0.24,0.36 0.28,0.51 0.37,0.33 0.38,0.35 0.44,0.3 0.25,0.13 0.2,0.14 0.23,0.08 0.27,0.15 0.36,0.38 0.22,0.32 0.17,0.21 0.14,0.24 0.14,0.21 0.15,0.13 0.41,0.37 0.75,0.53 0.95,0.42 0.76,0.27 0.53,0.15 0.34,0.02 0.18,0.02 0.2,0.07 0.25,0.1 0.32,0.12 0.6,0.21 0.59,0.14 0.56,0.12 0.45,0.06 0.32,0.06 0.3,0.11 0.35,0.07 0.37,0.09 0.34,0.1 0.2,0.05 0.24,0.09 h 0.33 l 0.39,0.07 0.32,0.05 -0.18,-0.21 -0.2,-0.21 0.06,-0.09 0.24,-0.11 0.17,-0.08 0.19,0.07 0.3,0.14 0.18,0.15 0.04,0.37 0.13,0.31 0.14,0.07 0.22,0.07 0.2,0.02 0.13,-0.04 0.69,-0.04 0.53,0.09 0.4,-0.02 h 0.4 l 0.25,-0.11 0.13,0.11 0.05,0.12 0.21,0.02 0.21,-0.01 0.2,0.05 -0.05,0.28 0.4,0.13 0.4,0.16 0.44,0.08 0.28,-0.03 0.13,-0.24 0.16,-0.1 0.19,0.05 0.13,0.1 0.3,0.04 0.3,0.13 0.28,0.06 -0.17,0.09 0.18,0.07 -0.06,0.04 -0.38,-0.05 -0.26,0.05 0.17,0.33 0.33,0.17 0.19,-0.15 0.3,0.12 0.29,0.06 0.04,0.11 -0.44,0.15 0.59,0.5 0.66,0.21 0.26,0.08 0.35,0.06 0.38,0.08 0.33,-0.04 0.26,-0.02 0.23,0.02 0.12,-0.02 0.29,0.06 0.3,-0.08 0.18,-0.11 0.11,-0.14 0.31,0.02 0.24,-0.04 0.17,0.02 0.11,-0.04 -0.05,0.24 -0.2,0.04 -0.17,0.01 -0.17,0.04 0.65,0.12 0.71,0.24 0.29,0.07 0.31,0.12 0.25,-0.16 0.23,-0.06 0.48,-0.37 0.02,-0.2 0.47,0.14 0.85,-0.05 -0.37,-0.07 -0.26,-0.28 -0.33,-0.07 -0.34,-0.1 -0.31,-0.11 h -0.31 l -0.59,-0.19 -0.28,-0.21 -0.31,-0.18 0.33,-0.03 0.42,-0.23 0.6,0.32 -0.17,-0.28 0.4,0.04 0.39,0.29 0.67,0.25 0.84,0.42 0.39,-0.05 0.43,-0.11 0.43,0.26 0.32,0.28 0.57,0.15 0.13,0.35 0.18,0.06 0.06,0.16 0.44,0.06 0.46,0.05 0.38,-0.05 0.37,-0.11 0.34,0.12 0.49,0.12 0.01,0.33 0.32,0.06 0.29,0.07 0.25,-0.13 0.32,0.01 -0.1,0.25 0.15,0.03 0.11,-0.08 0.07,0.02 0.09,-0.02 0.14,0.03 0.15,0.01 0.13,-0.02 0.14,0.05 0.18,0.09 v 0.26 0.15 0.11 l -0.2,0.1 -0.27,0.07 -0.36,0.02 -0.27,-0.03 -0.28,0.04 -0.27,-0.03 -0.23,-0.16 0.3,-0.03 0.03,-0.14 -0.24,-0.06 -0.24,-0.02 -0.09,0.22 -0.15,-0.2 -0.58,-0.13 0.17,0.45 0.18,0.28 v 0.35 0.29 l 0.21,0.16 0.33,0.09 v 0.14 l -0.12,0.18 0.16,0.23 0.32,0.16 0.22,0.12 0.21,0.21 0.19,0.25 0.51,0.42 0.47,0.34 0.24,0.16 0.27,0.11 0.22,0.17 0.27,0.11 0.19,0.22 0.17,0.19 0.39,0.08 0.25,0.13 0.05,0.3 0.04,0.39 0.25,0.16 0.33,0.26 0.29,0.23 0.39,0.31 0.27,0.24 0.34,0.15 v 0.23 l 0.06,0.18 0.04,0.41 0.2,0.06 0.22,0.12 0.21,0.06 0.17,0.09 0.03,-0.02 0.13,0.32 0.22,0.14 0.53,0.17 0.25,0.14 0.15,0.19 0.26,0.12 0.31,0.13 0.42,-0.08 0.54,0.03 0.35,0.15 0.24,0.16 0.22,0.21 0.38,-0.15 0.41,0.33 0.45,0.02 0.37,0.28 0.4,0.2 0.62,0.19 0.25,0.01 0.04,-0.22 0.08,-0.08 h 0.12 l 0.23,-0.09 0.08,-0.28 0.19,0.11 0.52,0.21 0.49,0.27 0.43,0.43 0.53,0.31 v -0.6 l -0.35,-0.59 -0.32,-0.41 -0.55,-0.48 -0.16,-0.29 0.28,-0.26 -0.19,-0.54 0.23,0.03 0.71,0.46 0.48,0.08 0.07,-0.16 -0.13,-0.17 -0.11,-0.17 -0.35,-0.23 0.04,-0.41 -0.24,-0.48 0.24,0.16 0.24,0.23 0.46,0.24 0.28,0.1 0.22,0.18 h 0.25 l 0.19,0.18 0.15,0.09 0.03,0.17 0.15,0.07 0.14,0.1 0.11,0.16 0.25,0.08 0.16,0.31 0.19,0.07 0.2,0.14 0.18,0.07 0.14,0.2 0.31,0.18 0.17,0.12 0.12,0.16 0.23,0.11 0.18,0.19 0.16,0.09 0.18,0.04 0.14,0.16 0.36,0.27 0.48,0.47 0.51,0.42 0.69,0.18 0.58,0.04 0.15,-0.21 0.16,-0.08 0.16,0.13 0.16,0.3 0.34,0.1 0.12,0.17 -0.16,0.05 -0.39,-0.08 -0.29,0.17 0.09,0.15 0.26,0.54 v 0.47 l 0.13,0.41 0.63,0.22 -0.2,0.19 -0.29,0.15 0.46,0.38 0.57,0.17 0.65,0.19 0.26,0.12 0.23,0.23 0.33,0.14 0.39,0.08 0.44,0.12 0.87,-0.03 0.89,-0.1 0.07,-0.12 -0.32,-0.13 -1.19,-0.35 -0.47,-0.3 -0.43,-0.28 -0.43,-0.98 -0.02,-0.53 -0.15,-0.52 -0.41,-0.36 -0.23,-0.44 0.47,0.07 0.17,-0.43 -0.1,-0.07 -0.01,-0.16 -0.11,-0.06 -0.09,-0.02 -0.1,-0.1 -0.15,-0.09 -0.31,-0.22 -0.4,-0.38 -0.06,-0.23 0.3,0.03 0.24,-0.02 -0.24,-0.26 -0.55,-0.25 -0.56,-0.18 -0.55,-0.12 -0.54,-0.35 -0.72,-0.48 -0.27,-0.09 -0.25,-0.19 -0.26,-0.17 -0.28,-0.14 -0.22,-0.15 -0.5,-0.47 -0.11,-0.32 -0.84,-0.62 -0.28,-0.2 -0.4,-0.39 -0.31,-0.43 -0.4,-0.33 -0.41,-0.36 -0.39,-0.33 h -0.23 l -0.32,-0.03 -0.38,-0.35 -0.18,-0.44 -0.35,-0.29 -0.36,-0.21 -0.35,-0.26 -0.26,-0.33 -0.35,-0.27 -0.25,-0.3 -0.04,-0.42 -0.26,-0.22 -0.32,-0.29 -0.27,-0.24 -0.21,-0.24 -0.16,-0.11 -0.32,-0.28 -0.24,-0.25 -0.21,-0.18 -0.2,-0.15 -0.17,-0.1 -0.12,-0.13 -0.19,-0.09 -0.15,-0.12 -0.18,-0.13 -0.15,-0.15 -0.35,-0.29 -0.23,-0.14 -0.22,-0.2 -0.2,-0.14 -0.63,-0.23 -0.33,-0.05 -0.35,-0.05 -0.32,-0.25 -0.12,-0.37 -0.36,-0.2 -0.34,-0.07 -0.4,-0.05 -0.32,0.04 -0.33,-0.12 -0.26,-0.26 0.22,-0.13 0.27,-0.2 0.06,-0.33 -0.12,-0.42 -0.32,-0.48 -0.38,-0.41 -0.43,-0.12 0.01,-0.22 -0.09,-0.23 -0.53,-0.27 -0.44,-0.28 -0.33,-0.39 -0.27,-0.53 -0.12,-0.56 -0.19,-0.32 -0.13,-0.44 -0.16,-0.51 -0.11,-0.24 -0.02,-0.31 0.02,-0.36 -0.09,-0.35 -0.21,-0.71 v -0.45 -0.51 l 0.21,-0.55 0.07,-0.45 0.07,-0.43 0.27,-0.83 0.37,-0.91 0.23,-0.82 0.11,-0.43 0.07,-0.28 0.09,-0.46 0.06,-0.55 0.04,-0.44 0.54,-1.29 0.21,-0.45 0.12,-0.27 0.06,-0.3 0.09,-0.72 v -0.94 l 0.12,-0.7 0.22,-0.1 0.22,-0.19 0.1,-0.29 -0.24,-0.31 0.13,-0.27 0.24,0.32 0.31,0.37 0.39,0.31 0.28,0.16 0.08,-0.14 0.21,0.08 -0.05,0.14 -0.08,0.16 0.24,0.35 0.21,0.12 0.19,0.13 -0.02,0.23 0.21,0.08 0.2,0.24 0.31,0.14 0.3,0.18 0.28,0.2 0.15,0.28 0.04,0.2 0.17,0.06 0.15,0.08 0.07,0.15 0.13,0.14 0.13,0.19 0.14,0.44 0.24,0.39 0.37,0.24 -0.02,0.61 -0.09,0.33 0.21,0.41 0.12,0.41 -0.24,0.19 -0.17,0.22 0.2,0.26 0.34,-0.12 0.27,-0.26 0.31,0.24 0.43,0.46 0.91,0.34 0.43,0.31 0.44,0.12 0.75,-0.12 0.23,0.09 -0.03,0.22 -0.23,0.26 -0.2,0.19 0.23,0.42 -0.3,0.43 -0.08,0.56 0.41,0.5 0.24,0.61 0.58,0.36 0.53,0.47 0.5,0.42 0.58,0.37 0.36,0.14 1.57,0.13 0.48,0.15 0.63,0.46 0.44,0.6 -0.38,0.5 -0.55,0.57 -0.05,0.82 0.41,0.84 0.47,0.76 0.54,0.61 0.93,0.4 0.25,0.07 0.16,-0.16 0.36,-0.27 0.27,-0.04 0.77,0.56 0.22,0.33 -0.03,0.46 -0.09,0.51 -0.12,0.38 -0.48,0.07 -0.33,-0.07 -0.3,-0.07 v 0.55 l 0.05,0.47 -0.23,0.44 0.28,0.62 0.47,0.23 0.21,0.07 0.16,0.29 0.29,0.32 -0.03,0.41 -0.4,0.06 -0.54,-0.06 -0.53,0.18 -0.37,-0.25 -1.04,-0.53 -0.62,0.86 0.82,1.42 0.73,0.88 0.26,0.12 0.34,0.19 0.24,0.25 0.3,0.18 0.27,0.18 -0.12,0.25 -0.31,0.04 0.15,0.23 0.29,-0.03 0.31,-0.06 0.18,0.14 -0.15,0.19 -0.28,0.05 0.52,0.24 0.22,0.22 -0.08,0.33 -0.28,0.06 -0.17,0.29 0.45,0.15 0.2,0.48 0.05,0.23 0.18,0.18 0.1,0.12 0.38,0.08 0.33,0.11 0.16,0.21 0.78,0.34 0.36,0.05 0.23,0.11 0.18,0.24 0.35,0.15 0.18,-0.14 0.22,-0.1 0.32,-0.01 0.13,-0.34 0.12,-0.14 0.25,0.14 0.54,0.35 0.05,0.43 -0.29,0.06 0.04,0.21 0.3,0.03 0.2,-0.11 0.1,0.12 0.13,0.12 0.29,0.16 0.43,0.23 0.86,0.53 0.75,0.6 0.5,0.11 0.1,-0.19 -0.3,-0.43 0.04,-0.49 -0.41,-0.78 0.81,0.28 0.46,0.47 0.41,0.29 0.23,0.19 0.05,0.12 0.17,0.14 0.2,0.17 0.13,0.11 0.17,0.09 0.04,0.12 0.28,0.12 0.3,-0.02 0.24,0.22 0.32,0.13 0.29,0.15 0.17,0.02 0.14,0.1 0.25,0.12 0.21,0.15 0.28,0.14 0.61,0.26 0.76,0.27 0.36,0.1 0.57,-0.01 0.65,0.11 1.11,0.19 0.4,-0.09 0.31,-0.01 0.47,-0.34 0.23,-0.24 0.45,-0.42 0.37,0.04 0.17,-0.14 0.24,-0.1 0.5,0.55 0.03,0.34 0.28,0.27 0.22,0.34 0.22,0.21 0.29,0.2 0.28,0.23 0.32,0.16 0.29,0.13 0.29,0.13 0.33,0.19 0.23,0.3 0.25,0.16 0.34,0.09 0.15,0.34 0.39,0.14 0.43,0.09 0.39,0.2 0.18,0.18 0.13,0.17 -0.25,0.25 0.41,0.04 0.4,-0.08 0.19,0.27 -0.31,0.21 0.2,0.26 0.51,-0.08 0.44,0.21 0.09,0.19 0.18,0.12 0.3,0.16 -0.36,0.12 -0.29,0.2 0.21,0.1 0.31,0.05 0.4,-0.08 h 0.42 l 0.24,0.16 0.16,0.14 -0.05,0.2 0.17,0.02 0.22,0.05 0.19,0.07 0.03,0.21 -0.13,0.45 0.44,0.15 0.33,-0.07 0.82,0.14 0.22,0.3 0.26,0.19 0.46,0.05 0.63,0.17 0.74,0.34 0.53,0.43 0.5,0.14 0.78,0.51 0.37,0.27 0.33,0.22 0.26,0.04 0.36,0.16 0.71,0.27 0.46,0.17 0.43,0.27 0.46,0.33 0.42,0.28 0.67,0.34 0.66,0.25 0.35,0.09 0.9,0.22 0.99,0.21 0.57,0.07 1.65,0.01 0.87,-0.06 0.41,-0.01 h 0.27 l 0.08,0.33 0.16,0.35 0.63,0.16 0.17,0.3 v 0.15 l 0.15,0.07 0.31,0.43 -0.25,0.34 -0.69,0.33 0.39,0.63 -0.98,0.02 -0.5,0.29 -0.45,0.64 -0.03,0.41 -0.19,0.29 -0.18,0.45 -0.34,0.26 -0.84,0.4 -0.56,-0.4 -0.58,-0.13 -0.51,0.2 -0.63,0.08 -0.26,0.44 0.14,0.3 0.2,0.31 -0.17,0.06 -0.27,-0.12 -0.32,-0.1 -0.3,-0.09 -0.36,-0.09 -0.39,-0.26 -0.37,-0.4 -0.16,-0.15 -0.09,0.15 -0.23,0.16 -0.16,-0.06 -0.23,-0.01 -0.41,-0.3 -0.27,-0.05 -0.18,-0.06 0.34,0.26 0.22,0.07 0.13,0.2 -0.49,0.05 -0.09,0.17 -0.17,0.05 -0.51,-0.05 -0.26,-0.28 -0.3,-0.23 -0.7,-0.22 -0.64,-0.17 -0.59,-0.19 0.3,0.21 0.41,0.16 0.37,0.12 0.34,0.12 0.67,0.31 0.24,0.29 1.11,0.16 0.43,-0.11 0.49,0.2 0.52,0.12 0.42,-0.09 0.55,0.09 0.36,0.39 0.53,0.24 0.23,-0.29 0.19,-0.11 0.36,-0.09 0.7,0.04 1.83,0.47 0.84,0.24 0.64,0.3 0.73,0.28 0.72,0.29 0.71,0.65 0.33,0.23 0.33,0.16 0.03,0.36 -0.04,0.45"
            />
            <path
              id="path3308"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591.95,1062.39 c 0,-5.09 -2.84,-9.19 -6.32,-9.21 -3.45,-0.02 -6.23,4 -6.23,9 0,5 2.78,9.13 6.23,9.23 3.48,0.09 6.32,-3.96 6.32,-9.02"
            />
            <path
              id="path3310"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.82,1038.01 -6.09,21.31 11.87,0.16 z"
            />
            <path
              id="path3312"
              style={{
                fill: "#fbf1e0",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591,1062.38 c 0,-4.32 -2.42,-7.82 -5.37,-7.85 -2.96,-0.02 -5.31,3.41 -5.31,7.67 0,4.26 2.35,7.75 5.31,7.83 2.95,0.08 5.37,-3.35 5.37,-7.65"
            />
            <path
              id="path3314"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2561,1223.43 c 0,-4.89 -2.63,-9.38 -5.87,-10.02 -3.22,-0.64 -5.81,2.77 -5.81,7.57 0,4.82 2.59,9.31 5.81,10.02 3.24,0.71 5.87,-2.69 5.87,-7.57"
            />
            <path
              id="path3316"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2555.31,1198.82 -5.66,19.47 11.03,2.27 z"
            />
            <path
              id="path3318"
              style={{
                fill: "#fbf1e0",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2560.13,1223.24 c 0,-4.15 -2.25,-7.97 -5,-8.52 -2.75,-0.55 -4.95,2.34 -4.95,6.45 0,4.12 2.2,7.91 4.95,8.5 2.75,0.6 5,-2.26 5,-6.43"
            />
            <path
              id="path3320"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2645.15,1269.48 c 0,-5.38 -3.2,-10.46 -7.1,-11.37 -3.9,-0.89 -7.03,2.69 -7.03,7.99 0,5.3 3.13,10.36 7.03,11.34 3.9,0.99 7.1,-2.57 7.1,-7.96"
            />
            <path
              id="path3322"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2638.24,1242.08 -6.84,21.08 13.36,3.15 z"
            />
            <path
              id="path3324"
              style={{
                fill: "#fbf1e0",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2644.08,1269.23 c 0,-4.57 -2.71,-8.91 -6.03,-9.67 -3.33,-0.77 -5.99,2.28 -5.99,6.78 0,4.52 2.66,8.85 5.99,9.68 3.32,0.82 6.03,-2.22 6.03,-6.79"
            />
            <path
              id="path3326"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2840.8,1046 c 0,-6.49 -4.7,-11.73 -10.43,-11.66 -5.67,0.06 -10.24,5.34 -10.24,11.71 0,6.4 4.57,11.62 10.24,11.66 5.73,0.06 10.43,-5.17 10.43,-11.71"
            />
            <path
              id="path3328"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2830.69,1014.86 -9.99,27.52 19.53,-0.1 z"
            />
            <path
              id="path3330"
              style={{
                fill: "#fbf1e0",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2839.25,1046.02 c 0,-5.56 -3.99,-9.97 -8.88,-9.93 -4.83,0.05 -8.73,4.5 -8.73,9.96 0,5.46 3.9,9.9 8.73,9.94 4.89,0.04 8.88,-4.42 8.88,-9.97"
            />
            <path
              id="path3332"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2686.42,1175.98 c 0,-5.61 -3.48,-10.6 -7.75,-11.12 -4.25,-0.52 -7.65,3.55 -7.65,9.08 0,5.53 3.4,10.49 7.65,11.1 4.27,0.62 7.75,-3.44 7.75,-9.06"
            />
            <path
              id="path3334"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2678.91,1148.08 -7.46,22.75 14.54,1.88 z"
            />
            <path
              id="path3336"
              style={{
                fill: "#fbf1e0",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2685.27,1175.82 c 0,-4.77 -2.98,-8.99 -6.6,-9.45 -3.61,-0.44 -6.52,3.01 -6.52,7.72 0,4.72 2.91,8.95 6.52,9.46 3.62,0.51 6.6,-2.94 6.6,-7.73"
            />
            <path
              id="path3338"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2520.2,1255.21 -2.03,-0.52 v 17.56 l 2.03,0.56 v -17.6"
            />
            <path
              id="path3340"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2531.28,1258.09 -2.01,-0.52 -4.33,10.18 -0.31,0.76 -0.32,0.72 v -12.95 l -1.65,-0.42 v 17.65 l 2.27,0.64 3.99,-9.38 c 0.03,-0.06 0.28,-0.64 0.73,-1.71 v 12.42 l 1.63,0.47 v -17.86"
            />
            <path
              id="path3342"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2535.97,1259.31 -2.13,-0.57 v 17.91 l 7.39,2.09 v -2.79 l -5.26,-1.46 v -4.92 l 4.13,1.11 v -2.7 l -4.13,-1.11 v -7.56"
            />
            <path
              id="path3344"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2546.82,1264.48 c 0.79,0.21 1.45,0.87 1.99,1.98 0.54,1.13 0.82,2.99 0.82,5.55 0,2.09 -0.24,3.67 -0.69,4.74 -0.44,1.08 -1.14,1.47 -2.07,1.21 -1.84,-0.52 -2.76,-3.04 -2.76,-7.52 0,-2.21 0.23,-3.79 0.69,-4.8 0.47,-1.01 1.15,-1.39 2.02,-1.16 z m -0.02,-2.64 c -1.57,-0.42 -2.8,0.16 -3.69,1.75 -0.88,1.55 -1.31,3.69 -1.31,6.32 0,2.64 0.46,4.97 1.4,6.99 0.93,2.04 2.17,3.27 3.71,3.71 1.55,0.43 2.8,-0.1 3.7,-1.65 0.91,-1.53 1.37,-3.65 1.37,-6.32 0,-2.84 -0.48,-5.26 -1.42,-7.24 -0.94,-1.97 -2.19,-3.17 -3.76,-3.56"
            />
            <path
              id="path3346"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2563.39,1275.91 v -9.5 l -1,-0.26 -0.68,2.31 c -0.73,-2.03 -1.84,-3.25 -3.34,-3.63 -1.69,-0.44 -2.93,0.2 -3.76,1.88 -0.82,1.68 -1.21,3.77 -1.21,6.26 0,2.65 0.45,5.02 1.37,7.08 0.91,2.1 2.19,3.38 3.85,3.85 1.25,0.35 2.27,0.1 3.09,-0.75 0.79,-0.85 1.3,-2.05 1.5,-3.61 l -1.93,-1.05 c -0.37,2.14 -1.23,3.03 -2.61,2.65 -0.87,-0.24 -1.58,-0.95 -2.12,-2.17 -0.56,-1.21 -0.82,-2.93 -0.82,-5.12 0,-4.63 0.97,-6.7 2.91,-6.2 0.76,0.21 1.39,0.74 1.89,1.67 0.48,0.91 0.75,2.02 0.75,3.31 l -2.56,-0.68 v 2.69 l 4.67,1.27"
            />
            <path
              id="path3348"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2568.19,1278.01 2.84,0.77 1.85,1.29 c 0.41,0.61 0.6,1.37 0.6,2.27 l -0.6,1.83 -1.66,0.3 -3.03,-0.84 z m 7.62,-8.37 -2.43,-0.64 -1.97,7.18 -3.22,-0.87 v -7.65 l -2.26,-0.59 v 18.63 l 5.48,1.53 c 1.52,0.43 2.66,0.24 3.37,-0.59 0.73,-0.83 1.11,-2.03 1.11,-3.68 0,-2.41 -0.77,-4.29 -2.32,-5.62 l 2.24,-7.7"
            />
            <path
              id="path3350"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2584.23,1279.08 -1.91,7.96 -1.89,-8.98 z m 4.21,-6.17 -2.53,-0.66 -1.06,4.25 -5.02,-1.32 -1,-4.76 -1.99,-0.52 4.29,20.07 2.89,0.81 4.42,-17.87"
            />
            <path
              id="path3352"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2592.43,1284.52 2.85,0.77 1.71,1.26 0.59,2.27 -0.55,1.88 c -0.36,0.46 -1.01,0.56 -1.97,0.29 l -2.63,-0.72 z m 0,-10.57 -2.39,-0.62 v 19.14 l 5.46,1.54 c 1.56,0.44 2.74,0.2 3.5,-0.72 0.75,-0.93 1.14,-2.18 1.14,-3.73 0,-1.77 -0.41,-3.32 -1.25,-4.64 -0.82,-1.3 -1.86,-2.15 -3.12,-2.48 l -3.34,-0.9 v -7.59"
            />
            <path
              id="path3354"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2612.35,1279.11 -2.5,-0.65 v 8.51 l -5.27,-1.42 v -8.45 l -2.46,-0.64 v 19.42 l 2.46,0.68 v -8 l 5.27,1.43 v 8.06 l 2.5,0.71 v -19.65"
            />
            <path
              id="path3356"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2617.97,1280.57 -2.54,-0.66 v 19.72 l 2.54,0.7 v -19.76"
            />
            <path
              id="path3358"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2629.11,1290.39 2.43,0.29 c -0.16,-2.05 -0.72,-3.86 -1.7,-5.4 -0.96,-1.55 -2.22,-2.52 -3.8,-2.92 -1.31,-0.34 -2.36,-0.17 -3.17,0.55 -0.81,0.68 -1.44,1.76 -1.9,3.2 -0.42,1.43 -0.64,3.1 -0.64,4.98 0,3.01 0.53,5.62 1.54,7.79 1.05,2.2 2.45,3.53 4.28,4.05 1.43,0.4 2.62,0.11 3.57,-0.83 0.96,-0.95 1.57,-2.52 1.82,-4.75 l -2.43,-1.01 c -0.45,2.89 -1.42,4.12 -2.94,3.7 -0.98,-0.27 -1.73,-1.09 -2.25,-2.49 -0.54,-1.4 -0.81,-3.28 -0.81,-5.66 0,-2.4 0.29,-4.13 0.86,-5.22 0.57,-1.06 1.34,-1.49 2.28,-1.24 0.76,0.21 1.41,0.8 1.95,1.77 0.53,0.95 0.83,2.03 0.91,3.19"
            />
            <path
              id="path3360"
              style={{
                fill: "#4a4b4f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2632.1,1289.06 2.55,1.44 c 0.32,-1.91 1.49,-2.6 3.56,-2.05 0.93,0.24 1.68,0.68 2.18,1.32 l 0.76,2.12 -0.33,1.45 -1.5,0.71 -2.81,0.24 c -0.96,0.09 -1.7,0.28 -2.15,0.6 l -1.1,1.54 c -0.26,0.73 -0.4,1.54 -0.4,2.45 0,1.8 0.49,3.37 1.45,4.73 0.99,1.35 2.22,2.24 3.76,2.67 1.26,0.36 2.41,0.31 3.41,-0.18 1,-0.47 1.64,-1.38 1.93,-2.69 l -2.56,-1.58 c -0.39,1.42 -1.3,1.93 -2.73,1.54 l -1.9,-1.23 -0.66,-1.98 c 0,-1.15 0.7,-1.78 2.07,-1.86 l 2.5,-0.17 c 1.53,-0.13 2.56,-0.6 3.08,-1.48 0.53,-0.9 0.81,-1.95 0.81,-3.2 0,-2 -0.56,-3.72 -1.67,-5.16 -1.1,-1.42 -2.53,-2.36 -4.27,-2.82 -1.44,-0.37 -2.72,-0.29 -3.82,0.26 -1.09,0.55 -1.82,1.67 -2.16,3.33"
            />
            <path
              id="path3362"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2935.22,957.41 -414.44,31 v 0.758 l 414.44,-30.605 v -1.153"
            />
            <path
              id="path3364"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2573.83,963.508 -1.5,0.14 v 9.582 l -2.04,0.192 v 1.711 l 5.59,-0.473 v -1.738 l -2.05,0.18 v -9.594"
            />
            <path
              id="path3366"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2580.31,971.309 -2.26,-9.395 -0.55,-1.32 -1.01,-0.403 -0.74,0.157 v 1.504 l 0.62,-0.075 0.6,0.125 0.3,0.664 0.13,0.579 -0.13,0.527 -1.97,8.086 1.35,-0.125 1.4,-5.688 1.21,5.461 1.05,-0.097"
            />
            <path
              id="path3368"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2582.51,966.113 0.38,-1.574 0.84,-0.684 0.93,0.711 0.28,2.012 -0.28,2.145 -0.88,0.882 -0.91,-0.589 -0.36,-1.684 z m 0,-6.332 -1.33,0.141 v 11.308 l 1.25,-0.105 v -1.488 c 0.42,1.062 1,1.582 1.78,1.515 l 1.55,-1.386 c 0.39,-0.86 0.59,-1.914 0.59,-3.196 0,-1.207 -0.19,-2.242 -0.57,-3.105 l -1.64,-1.172 c -0.75,0.07 -1.29,0.586 -1.63,1.535 v -4.047"
            />
            <path
              id="path3370"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2591.23,967.07 -0.38,1.532 -0.93,0.675 -0.93,-0.468 -0.44,-1.496 z m 0.09,-2.578 1.21,-0.359 -0.92,-1.82 -1.71,-0.598 -1.97,1.387 c -0.5,0.859 -0.75,1.949 -0.75,3.304 0,1.297 0.25,2.324 0.75,3.137 l 2.06,1.094 c 0.84,-0.078 1.5,-0.547 1.95,-1.449 0.47,-0.875 0.7,-1.981 0.7,-3.278 l -0.01,-0.23 -4.08,0.386 0.13,-1.41 0.46,-0.941 0.85,-0.492 c 0.65,-0.051 1.1,0.363 1.33,1.269"
            />
            <path
              id="path3372"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2593.14,963.551 1.27,0.226 1.27,-1.179 1.27,0.953 -0.19,0.578 -0.47,0.344 -1.1,0.402 c -1.21,0.445 -1.8,1.363 -1.8,2.719 l 0.57,1.879 1.72,0.652 c 1.27,-0.117 2.04,-0.859 2.33,-2.219 l -1.22,-0.238 -1.08,1.07 -1.08,-0.875 0.87,-1.011 1.29,-0.504 c 1,-0.399 1.51,-1.262 1.51,-2.618 0,-0.964 -0.25,-1.632 -0.77,-2.058 l -1.85,-0.527 -1.62,0.707 -0.92,1.699"
            />
            <path
              id="path3374"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2604.92,961.844 c 0.94,-0.098 1.41,0.851 1.41,2.82 l -0.34,2.133 -1.03,0.875 -1.06,-0.699 -0.35,-2.078 c 0,-0.938 0.14,-1.68 0.38,-2.192 z m -0.03,-1.614 c -0.92,0.083 -1.6,0.625 -2.09,1.586 -0.47,0.985 -0.69,2.059 -0.69,3.243 0,1.285 0.25,2.32 0.77,3.136 l 2.09,1.098 2.04,-1.441 c 0.52,-0.879 0.79,-2 0.79,-3.329 0,-1.371 -0.28,-2.453 -0.83,-3.242 l -2.08,-1.051"
            />
            <path
              id="path3376"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2610.63,959.844 -1.33,0.133 v 7.207 l -0.93,0.082 v 1.531 l 0.93,-0.074 v 0.414 l 0.42,2.043 1.79,0.625 0.52,-0.075 v -1.542 l -0.38,0.058 -0.71,-0.141 -0.26,-0.441 -0.05,-1.062 1.4,-0.125 v -1.543 l -1.4,0.129 v -7.219"
            />
            <path
              id="path3378"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2572.52,949.48 1.64,-0.191 0.98,0.352 0.35,1.191 -0.33,1.246 -1.12,0.629 -1.52,0.164 z m 0,-6.238 -1.39,0.168 v 11.305 l 3.16,-0.34 2.02,-1.234 c 0.42,-0.719 0.63,-1.532 0.63,-2.438 0,-1.039 -0.23,-1.855 -0.69,-2.445 l -1.81,-0.758 -1.92,0.227 v -4.485"
            />
            <path
              id="path3380"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2581.41,946.457 c -1.7,0.195 -2.54,-0.285 -2.54,-1.465 l 0.26,-0.922 0.77,-0.48 1.12,0.562 0.39,1.528 z m 1.46,-4.492 -1.26,0.152 -0.2,1.731 c -0.36,-1.219 -0.99,-1.766 -1.96,-1.645 l -1.4,0.914 -0.5,1.934 c 0,1.914 1.16,2.738 3.48,2.469 l 0.38,-0.043 v 0.628 l -1.23,1.481 -1.35,-1.172 -1.11,0.375 0.74,1.652 1.89,0.457 1.1,-0.277 0.72,-0.641 0.4,-0.898 0.1,-1.551 v -3.84 l 0.2,-1.726"
            />
            <path
              id="path3382"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2583.54,943.824 1.24,0.196 1.27,-1.196 1.22,0.918 -0.19,0.574 -0.45,0.356 -1.07,0.426 c -1.18,0.461 -1.76,1.382 -1.76,2.715 l 0.54,1.863 1.67,0.586 c 1.25,-0.145 2.02,-0.879 2.3,-2.242 l -1.19,-0.196 -1.06,1.063 -1.05,-0.821 0.85,-1.035 1.26,-0.519 c 0.98,-0.41 1.47,-1.27 1.47,-2.629 0,-0.942 -0.24,-1.61 -0.74,-2.012 l -1.81,-0.476 -1.6,0.722 -0.9,1.707"
            />
            <path
              id="path3384"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2588.96,943.172 1.25,0.203 1.28,-1.219 1.23,0.934 -0.17,0.574 -0.46,0.356 -1.09,0.425 c -1.2,0.469 -1.79,1.391 -1.79,2.739 l 0.56,1.871 1.69,0.586 c 1.26,-0.141 2.02,-0.891 2.31,-2.25 l -1.2,-0.196 -1.07,1.063 -1.07,-0.82 0.88,-1.043 1.26,-0.524 c 1,-0.426 1.5,-1.293 1.5,-2.652 0,-0.946 -0.25,-1.621 -0.77,-2.016 l -1.83,-0.488 -1.6,0.73 -0.91,1.727"
            />
            <path
              id="path3386"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2598.91,945.328 -0.39,1.559 -0.95,0.703 -0.94,-0.43 -0.44,-1.519 z m 0.09,-2.601 1.22,-0.391 -0.92,-1.828 -1.75,-0.543 -2.01,1.453 c -0.5,0.859 -0.76,1.988 -0.76,3.344 0,1.312 0.26,2.347 0.76,3.14 l 2.09,1.043 c 0.86,-0.097 1.53,-0.59 2.01,-1.496 0.47,-0.902 0.69,-2.011 0.69,-3.34 v -0.203 l -4.14,0.489 0.12,-1.446 0.46,-0.957 0.86,-0.5 c 0.67,-0.09 1.14,0.324 1.37,1.235"
            />
            <path
              id="path3388"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2606.65,939.031 -1.37,0.164 v 5.442 l -0.28,1.32 -0.69,0.523 -0.94,-0.585 -0.4,-1.95 v -4.465 l -1.38,0.176 v 8.664 l 1.25,-0.14 v -2.008 c 0.45,1.406 1.06,2.062 1.86,1.969 l 1.38,-0.875 c 0.39,-0.516 0.57,-1.418 0.57,-2.606 v -5.629"
            />
            <path
              id="path3390"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2610.79,943.313 c 0.77,-0.094 1.15,0.375 1.15,1.386 l -0.29,1.004 -0.83,0.496 -0.86,-0.312 -0.31,-0.992 0.31,-1.09 z m -1.52,-4.141 -0.31,-0.719 0.49,-1.098 1.62,-0.675 c 1.08,-0.125 1.62,0.191 1.62,0.988 l -0.29,0.684 -0.64,0.296 -1.5,0.188 z m 4.73,9.414 v -1.523 l -0.45,0.058 -0.49,-0.039 -0.42,-0.57 0.76,-1.989 -0.71,-1.835 -1.83,-0.563 -1.14,0.383 -0.43,-0.828 0.2,-0.606 0.63,-0.351 1.84,-0.219 1.5,-0.867 0.54,-1.785 -0.83,-1.961 c -0.53,-0.485 -1.34,-0.633 -2.42,-0.5 -1.99,0.254 -2.99,1.156 -2.99,2.726 l 0.9,1.668 -0.59,1.512 1,1.703 -0.86,2.125 0.63,1.789 1.93,0.543 1.19,-0.312 c 0.2,1.085 0.69,1.597 1.5,1.503 l 0.54,-0.062"
            />
            <path
              id="path3392"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2618.78,943 -0.41,1.586 -1,0.727 -0.99,-0.434 -0.45,-1.551 z m 0.1,-2.668 1.26,-0.394 -0.98,-1.872 -1.82,-0.546 -2.09,1.488 c -0.52,0.883 -0.79,2.039 -0.79,3.422 0,1.332 0.27,2.41 0.8,3.226 0.54,0.809 1.26,1.149 2.18,1.039 0.9,-0.097 1.6,-0.593 2.08,-1.527 0.51,-0.93 0.74,-2.055 0.74,-3.422 v -0.211 l -4.33,0.512 0.12,-1.473 0.48,-0.988 0.91,-0.508 c 0.7,-0.086 1.18,0.332 1.44,1.254"
            />
            <path
              id="path3394"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2623.02,937.012 -1.44,0.176 v 8.867 l 1.3,-0.157 v -2.113 l 0.76,1.723 1.01,0.461 0.19,-0.043 v -2.16 l -1.47,-0.786 -0.35,-1.855 v -4.113"
            />
            <path
              id="path3396"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2625.25,938.777 1.36,0.2 1.39,-1.27 1.34,0.957 -0.19,0.606 -0.52,0.375 -1.16,0.449 c -1.3,0.5 -1.96,1.465 -1.96,2.855 l 0.62,1.953 1.86,0.606 c 1.35,-0.156 2.19,-0.942 2.5,-2.363 l -1.32,-0.2 -1.16,1.125 -1.17,-0.855 0.95,-1.098 1.38,-0.543 c 1.09,-0.449 1.63,-1.351 1.63,-2.773 0,-0.988 -0.27,-1.692 -0.84,-2.094 l -1.97,-0.5 -1.75,0.773 -0.99,1.797"
            />
            <path
              id="path3398"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2585.63,880.367 c 0,3.098 0.33,5.957 0.96,8.617 l -15.44,10.125 c -1.1,-4.816 -1.72,-10.046 -1.72,-15.593 0,-5.536 0.61,-10.985 1.71,-16.219 l 15.45,4.109 c -0.63,2.871 -0.96,5.895 -0.96,8.961"
            />
            <path
              id="path3400"
              style={{
                fill: "#f14a5f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2605.67,847.395 v 0 -24.489 c 8.38,-2.129 16.28,-0.277 22.79,4.688 l -10.56,22.648 c -3.46,-2.75 -7.7,-3.879 -12.23,-2.847"
            />
            <path
              id="path3402"
              style={{
                fill: "#f14a5f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2586.59,871.406 -15.45,-4.109 c 2.31,-10.977 6.85,-21.031 12.87,-28.883 l 9.76,17.168 c -3.36,4.254 -5.89,9.762 -7.18,15.824"
            />
            <path
              id="path3404"
              style={{
                fill: "#f14a5f",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2593.77,855.582 -9.76,-17.168 c 5.98,-7.773 13.44,-13.414 21.66,-15.508 v 24.489 c -4.49,1.011 -8.58,4 -11.9,8.187"
            />
            <path
              id="path3406"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2593.79,902.012 -9.77,20.949 c -6.03,-5.496 -10.57,-13.801 -12.87,-23.852 l 15.44,-10.125 c 1.29,5.543 3.84,10.075 7.2,13.028"
            />
            <path
              id="path3408"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2605.67,905.578 v 0 24.461 c -8.22,1.106 -15.68,-1.617 -21.65,-7.078 l 9.77,-20.949 c 3.3,2.902 7.41,4.289 11.88,3.566"
            />
            <path
              id="path3410"
              style={{
                fill: "#edb03c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2625.63,881.805 17.51,4.668 c -2.69,11.738 -7.93,22.246 -14.68,30.035 l -10.56,-18.539 c 3.58,-4.239 6.33,-9.891 7.73,-16.164"
            />
            <path
              id="path3412"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2617.9,850.242 10.56,-22.648 c 6.75,5.156 11.98,13.633 14.66,24.347 l -17.49,11.469 c -1.41,-5.734 -4.16,-10.32 -7.73,-13.168"
            />
            <path
              id="path3414"
              style={{
                fill: "#edb03c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2626.68,872.391 c 0,-3.203 -0.37,-6.227 -1.05,-8.981 l 17.49,-11.469 c 1.31,5.18 2.02,10.829 2.02,16.856 0,6.055 -0.71,11.973 -2,17.676 l -17.51,-4.668 c 0.68,-3.047 1.05,-6.184 1.05,-9.414"
            />
            <path
              id="path3416"
              style={{
                fill: "#50b0b2",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2605.67,905.578 c 4.53,-0.726 8.77,-3.5 12.23,-7.609 l 10.56,18.539 c -6.51,7.5 -14.39,12.426 -22.79,13.531 v -24.461"
            />
            <path
              id="path3418"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2561.42,913.375 c 0,-1.219 -0.66,-2.137 -1.48,-2.008 -0.81,0.141 -1.48,1.27 -1.48,2.488 0,1.231 0.67,2.102 1.48,1.977 0.82,-0.133 1.48,-1.227 1.48,-2.457"
            />
            <path
              id="path3420"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2561.69,904.137 -0.89,-1.172 -1.71,0.293 -0.88,1.48 v 5.282 l 0.88,1.183 1.71,-0.273 0.89,-1.489 v -5.304"
            />
            <path
              id="path3422"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2562.93,903.574 -0.41,-0.722 -0.51,0.714 -0.46,6.25 0.41,0.739 0.52,-0.731 0.45,-6.25"
            />
            <path
              id="path3424"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2556.99,904.602 0.39,-0.864 0.51,0.532 0.45,6.082 -0.4,0.863 -0.51,-0.559 -0.44,-6.054"
            />
            <path
              id="path3426"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2559.72,894.969 -0.54,-0.586 -0.56,0.781 v 8.637 l 0.56,0.566 0.54,-0.754 v -8.644"
            />
            <path
              id="path3428"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2561.23,894.688 -0.57,-0.579 -0.56,0.782 v 8.656 l 0.56,0.566 0.57,-0.758 v -8.667"
            />
            <path
              id="path3430"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2545.68,922.223 c 0,-1.621 -0.86,-2.782 -1.91,-2.621 -1.06,0.171 -1.91,1.589 -1.91,3.203 0,1.597 0.85,2.758 1.91,2.601 1.05,-0.156 1.91,-1.582 1.91,-3.183"
            />
            <path
              id="path3432"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2545.99,910.156 c 0,-0.961 -0.51,-1.66 -1.15,-1.547 l -2.15,0.371 c -0.63,0.11 -1.14,0.973 -1.14,1.93 v 6.879 c 0,0.949 0.51,1.645 1.14,1.551 l 2.15,-0.348 c 0.64,-0.097 1.15,-0.957 1.15,-1.914 v -6.922"
            />
            <path
              id="path3434"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2547.59,909.426 -0.52,-0.957 -0.67,0.953 -0.58,8.137 0.52,0.972 0.67,-0.953 0.58,-8.152"
            />
            <path
              id="path3436"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2539.98,910.699 0.52,-1.121 0.64,0.727 0.59,7.91 -0.53,1.125 -0.65,-0.731 -0.57,-7.91"
            />
            <path
              id="path3438"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2543.49,898.152 -0.71,-0.761 -0.71,1.023 v 11.262 l 0.71,0.762 0.71,-1.008 v -11.278"
            />
            <path
              id="path3440"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2545.4,897.809 -0.71,-0.766 -0.73,1.023 v 11.289 l 0.73,0.762 0.71,-1.004 v -11.304"
            />
            <path
              id="path3442"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2554.1,919.547 c 0,-1.543 -0.83,-2.664 -1.85,-2.5 -1,0.156 -1.82,1.535 -1.82,3.07 0,1.535 0.82,2.649 1.82,2.492 1.02,-0.156 1.85,-1.523 1.85,-3.062"
            />
            <path
              id="path3444"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2554.41,908.023 c 0,-0.921 -0.5,-1.562 -1.11,-1.464 l -2.08,0.355 c -0.61,0.098 -1.1,0.914 -1.1,1.828 v 6.586 c 0,0.914 0.49,1.586 1.1,1.488 l 2.08,-0.332 c 0.61,-0.097 1.11,-0.91 1.11,-1.847 v -6.614"
            />
            <path
              id="path3446"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2555.96,907.301 -0.51,-0.887 -0.66,0.902 -0.54,7.793 0.5,0.918 0.65,-0.914 0.56,-7.812"
            />
            <path
              id="path3448"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2548.59,908.547 0.5,-1.055 0.63,0.688 0.57,7.562 -0.52,1.074 -0.61,-0.711 -0.57,-7.558"
            />
            <path
              id="path3450"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2552.01,896.547 -0.7,-0.719 -0.69,0.965 v 10.773 l 0.69,0.735 0.7,-0.977 v -10.777"
            />
            <path
              id="path3452"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2553.85,896.207 -0.71,-0.719 -0.69,0.977 v 10.789 l 0.69,0.734 0.71,-0.968 v -10.813"
            />
            <path
              id="path3454"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2554.41,908.762 -4.29,0.886 -0.86,-6.89 c 0,0 3.55,-1.809 5.98,-1.059 l -0.83,7.063"
            />
            <path
              id="path3456"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2537.8,914.215 c 0,-1.004 -0.53,-1.735 -1.18,-1.629 -0.66,0.117 -1.18,1.023 -1.18,2.019 0,1 0.52,1.743 1.18,1.637 0.65,-0.109 1.18,-1.019 1.18,-2.027"
            />
            <path
              id="path3458"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2538,906.656 -0.72,-0.972 -1.34,0.23 -0.72,1.227 v 4.32 l 0.72,0.973 1.34,-0.231 0.72,-1.199 v -4.348"
            />
            <path
              id="path3460"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2538.99,906.184 -0.33,-0.594 -0.4,0.594 -0.37,5.117 0.32,0.609 0.41,-0.609 0.37,-5.117"
            />
            <path
              id="path3462"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2534.26,907.008 0.3,-0.707 0.42,0.453 0.36,4.976 -0.32,0.711 -0.42,-0.461 -0.34,-4.972"
            />
            <path
              id="path3464"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2536.44,899.113 -0.44,-0.472 -0.45,0.632 v 7.09 l 0.45,0.477 0.44,-0.637 v -7.09"
            />
            <path
              id="path3466"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2537.63,898.902 -0.45,-0.48 -0.43,0.637 v 7.093 l 0.43,0.481 0.45,-0.629 v -7.102"
            />
            <path
              id="path3468"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2538,907.125 -2.78,0.598 -0.54,-4.52 c 0,0 2.29,-1.195 3.85,-0.687 l -0.53,4.609"
            />
            <path
              id="path3470"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2560.18,846.148 c 0,-1.644 -0.89,-2.753 -1.97,-2.484 -1.09,0.262 -1.97,1.793 -1.97,3.426 0,1.648 0.88,2.742 1.97,2.473 1.08,-0.25 1.97,-1.778 1.97,-3.415"
            />
            <path
              id="path3472"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2560.52,833.836 c 0,-0.969 -0.54,-1.637 -1.2,-1.445 l -2.23,0.558 c -0.66,0.172 -1.19,1.09 -1.19,2.067 v 7.023 c 0,0.965 0.53,1.625 1.19,1.469 l 2.23,-0.547 c 0.66,-0.16 1.2,-1.098 1.2,-2.066 v -7.059"
            />
            <path
              id="path3474"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2562.16,832.949 -0.54,-0.906 -0.67,1.016 -0.62,8.339 0.55,0.934 0.68,-1.031 0.6,-8.352"
            />
            <path
              id="path3476"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2554.28,834.965 0.53,-1.176 0.68,0.656 0.59,7.996 -0.53,1.207 -0.68,-0.687 -0.59,-7.996"
            />
            <path
              id="path3478"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2557.92,821.863 -0.73,-0.715 -0.74,1.106 v 11.465 l 0.74,0.695 0.73,-1.074 v -11.477"
            />
            <path
              id="path3480"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2559.89,821.328 -0.74,-0.711 -0.73,1.102 v 11.496 l 0.73,0.719 0.74,-1.094 v -11.512"
            />
            <path
              id="path3482"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.38,842.52 c 0,-1.571 -0.84,-2.622 -1.91,-2.372 -1.06,0.27 -1.9,1.727 -1.9,3.29 0,1.57 0.84,2.628 1.9,2.378 1.07,-0.269 1.91,-1.718 1.91,-3.296"
            />
            <path
              id="path3484"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.71,830.758 c 0,-0.938 -0.52,-1.57 -1.15,-1.403 l -2.16,0.563 c -0.63,0.152 -1.15,1.047 -1.15,1.992 v 6.692 c 0,0.921 0.52,1.574 1.15,1.398 l 2.16,-0.531 c 0.63,-0.153 1.15,-1.039 1.15,-1.977 v -6.734"
            />
            <path
              id="path3486"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2571.31,829.875 -0.54,-0.863 -0.64,0.984 -0.6,8 0.53,0.867 0.65,-0.984 0.6,-8.004"
            />
            <path
              id="path3488"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2563.67,831.844 0.53,-1.129 0.65,0.652 0.58,7.641 -0.52,1.14 -0.65,-0.679 -0.59,-7.625"
            />
            <path
              id="path3490"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2567.21,819.305 -0.72,-0.692 -0.71,1.075 v 10.968 l 0.71,0.668 0.72,-1.043 v -10.976"
            />
            <path
              id="path3492"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.12,818.801 -0.72,-0.703 -0.72,1.078 v 10.976 l 0.72,0.688 0.72,-1.047 v -10.992"
            />
            <path
              id="path3494"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2569.71,831.496 -4.46,1.313 -0.88,-6.934 c 0,0 3.68,-2.168 6.18,-1.621 l -0.84,7.242"
            />
            <path
              id="path3496"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2658.26,902.285 c 0,-1.824 -1.1,-3.137 -2.47,-2.918 -1.36,0.223 -2.45,1.875 -2.45,3.68 0,1.828 1.09,3.152 2.45,2.941 1.37,-0.207 2.47,-1.875 2.47,-3.703"
            />
            <path
              id="path3498"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2658.66,888.574 c 0,-1.078 -0.66,-1.875 -1.46,-1.726 l -2.81,0.484 c -0.81,0.137 -1.45,1.137 -1.45,2.219 v 7.82 c 0,1.094 0.64,1.879 1.45,1.746 l 2.81,-0.449 c 0.8,-0.125 1.46,-1.129 1.46,-2.215 v -7.879"
            />
            <path
              id="path3500"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2660.72,887.688 -0.67,-1.059 -0.86,1.105 -0.75,9.293 0.68,1.051 0.86,-1.086 0.74,-9.304"
            />
            <path
              id="path3502"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2650.9,889.375 0.66,-1.277 0.84,0.797 0.75,8.988 -0.67,1.258 -0.85,-0.805 -0.73,-8.961"
            />
            <path
              id="path3504"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2655.45,875.016 -0.93,-0.836 -0.91,1.16 v 12.812 l 0.91,0.84 0.93,-1.164 v -12.812"
            />
            <path
              id="path3506"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2657.89,874.559 -0.92,-0.829 -0.92,1.161 v 12.843 l 0.92,0.84 0.92,-1.164 v -12.851"
            />
            <path
              id="path3508"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2657.87,837.34 c 0,-1.844 -1.1,-3.07 -2.48,-2.754 -1.35,0.312 -2.44,2.016 -2.44,3.844 0,1.832 1.09,3.043 2.44,2.75 1.38,-0.313 2.48,-2.032 2.48,-3.84"
            />
            <path
              id="path3510"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2658.27,823.594 c 0,-1.086 -0.66,-1.821 -1.47,-1.641 l -2.8,0.692 c -0.8,0.187 -1.46,1.238 -1.46,2.324 v 7.812 c 0,1.094 0.66,1.805 1.46,1.621 l 2.8,-0.64 c 0.81,-0.188 1.47,-1.207 1.47,-2.309 v -7.859"
            />
            <path
              id="path3512"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2660.33,822.57 -0.68,-1.019 -0.85,1.152 -0.75,9.34 0.68,1.031 0.84,-1.164 0.76,-9.34"
            />
            <path
              id="path3514"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2650.51,824.938 0.66,-1.344 0.85,0.754 0.73,8.922 -0.67,1.316 -0.84,-0.766 -0.73,-8.882"
            />
            <path
              id="path3516"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2655.05,810.25 -0.92,-0.766 -0.92,1.231 v 12.82 l 0.92,0.77 0.92,-1.227 V 810.25"
            />
            <path
              id="path3518"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2657.51,809.625 -0.93,-0.77 -0.92,1.239 v 12.828 l 0.92,0.785 0.93,-1.219 v -12.863"
            />
            <path
              id="path3520"
              style={{
                fill: "#cebd90",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2661.18,819.008 0.19,-0.52 0.46,-0.949 0.89,-0.297 0.62,-0.172 0.32,-0.121 0.37,-1.297 0.08,-0.269 0.14,-0.375 0.17,-0.504 0.09,-0.195 0.1,-0.286 0.3,-0.793 -0.05,0.293 0.1,-0.168 0.18,-0.472 0.28,-0.735 0.25,-0.57 0.06,-0.332 -0.04,-0.562 0.04,0.031 -0.01,-0.434 0.07,0.004 -0.15,-0.465 0.09,0.055 -0.04,-0.57 -0.09,-0.914 -0.2,-0.766 -0.29,-0.145 -0.3,-0.203 0.1,-0.351 0.25,-0.227 0.48,-0.129 0.18,0.16 0.14,0.317 v -0.121 l 0.07,0.234 0.2,0.41 0.11,0.43 0.02,0.25 0.06,0.07 0.04,0.211 0.06,0.25 0.09,0.172 0.03,0.098 0.04,0.039 0.1,0.297 0.27,0.644 0.11,-0.531 0.18,-0.676 -0.1,-0.953 -0.02,-0.141 -0.05,-0.121 -0.25,-0.097 -0.34,-0.407 0.1,-0.308 h 0.06 l 0.58,-0.215 0.23,0.133 0.09,0.211 0.14,0.262 0.06,0.089 0.02,0.063 0.08,0.129 0.16,0.59 0.03,0.656 -0.09,0.785 0.03,1.043 0.38,0.031 -0.13,0.086 0.6,0.07 -0.07,0.063 0.6,0.098 0.45,0.132 0.59,-0.074 0.32,-0.715 0.21,-0.429 0.24,-0.418 0.12,-0.188 0.24,-0.32 0.18,-0.164 0.39,-0.465 0.24,-0.535 0.04,-0.293 0.06,-0.176 -0.02,-0.449 -0.23,-0.227 -0.21,-0.429 0.16,-0.282 0.31,-0.156 0.4,0.059 0.27,0.676 -0.05,1 0.02,0.132 -0.11,0.614 0.03,0.019 -0.09,0.262 0.22,-0.324 0.23,-0.282 0.13,-0.109 0.41,-1.168 h 0.04 l -0.04,-0.531 h 0.09 l -0.05,-0.145 -0.15,-0.23 -0.3,-0.52 0.13,-0.304 0.27,-0.133 0.33,-0.094 0.2,0.297 0.2,0.25 0.06,0.238 -0.02,0.547 0.02,0.039 0.02,0.07 -0.04,0.2 -0.09,0.98 -0.15,0.68 -0.39,0.551 -0.13,0.289 -0.17,0.343 0.11,-0.113 -0.13,0.258 0.02,0.043 -0.06,0.203 -0.07,0.145 -0.11,0.23 -0.21,0.668 0.01,0.187 0.08,0.36 0.06,0.129 0.04,0.105 0.02,0.129 0.04,0.125 0.04,0.266 -0.05,0.84 0.17,-0.25 0.05,-0.059 0.14,-0.445 h 0.02 l 0.13,-0.711 0.09,-0.391 0.03,0.012 0.14,-0.606 0.03,0.016 0.16,-0.605 0.13,-0.243 0.23,-0.406 0.64,-0.676 -0.59,1.129 -0.05,0.254 -0.05,0.262 v 0.203 l -0.09,0.492 -0.02,0.211 -0.03,0.289 -0.05,0.379 0.01,0.172 -0.04,0.391 0.04,0.046 -0.08,0.211 -0.01,0.141 -0.06,0.152 0.01,0.063 -0.1,0.265 -0.08,0.262 -0.17,0.203 -0.31,0.332 -0.1,0.121 -0.07,0.098 -0.36,0.238 v 0.059 l -0.4,0.312 -0.79,0.625 -0.82,0.278 -0.92,0.058 -1.46,0.032 -0.58,0.136 h -0.34 l -0.48,0.321 -0.05,0.074 -0.09,0.055 0.02,0.039 -0.36,0.019 -0.25,0.02 -0.2,0.015 -0.07,0.043 h -0.1 l -0.15,0.098 -0.03,0.09 v 0.051 l -0.73,0.914 -0.78,1.519 -1.07,1.094 -0.99,-0.215 -0.4,-0.348 -0.65,-0.07 -0.51,-0.445"
            />
            <path
              id="path3522"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2577.14,889.23 -45.06,8.375 v 0.727 L 2577.14,890 v -0.77"
            />
            <path
              id="path3524"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2570.37,816.348 -16.55,4.535 v 0.75 l 16.31,-4.449 20.15,28.843 0.41,-0.57 -20.32,-29.109"
            />
            <path
              id="path3526"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2679.51,802.672 -24.78,6.351 -21.9,30.918 0.39,0.536 21.75,-30.672 24.54,-6.27 v -0.863"
            />
            <path
              id="path3528"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2662,871.609 -25.18,4.727 v 0.836 l 25.18,-4.723 v -0.84"
            />
            <path
              id="path3530"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2911.54,802.117 2714.2,842.93 v 1.324 l 197.34,-40.563 v -1.574"
            />
            <path
              id="path3532"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2911.54,835.074 -146.84,26.301 -50.5,9.063 v 1.339 l 197.34,-35.082 v -1.621"
            />
            <path
              id="path3534"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2911.54,868.078 -197.34,29.883 v 1.332 l 197.34,-29.617 v -1.598"
            />
            <path
              id="path3536"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="M 2911.54,901.082 2714.2,925.48 v 1.333 l 197.34,-24.145 v -1.586"
            />
            <path
              id="path3538"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2911.27,934.074 -197.26,18.934 v 1.347 l 197.26,-18.66 v -1.621"
            />
            <path
              id="path3540"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2911.27,769.188 -197.26,46.277 v 1.328 l 197.26,-46.035 v -1.57"
            />
            <path
              id="path3542"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2714.74,815.418 -1.05,0.246 v 138.711 l 1.05,-0.098 V 815.418"
            />
            <path
              id="path3544"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2738.87,809.762 -1.11,0.254 v 142.093 l 1.11,-0.105 V 809.762"
            />
            <path
              id="path3546"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2764.18,803.828 -1.16,0.27 v 145.617 l 1.16,-0.11 v -86.714 -59.063"
            />
            <path
              id="path3548"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2790.78,797.586 -1.21,0.293 v 149.328 l 1.21,-0.121 v -149.5"
            />
            <path
              id="path3550"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2818.79,791.023 -1.27,0.301 v 153.242 l 1.27,-0.125 V 791.023"
            />
            <path
              id="path3552"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2848.3,784.102 -1.35,0.32 v 157.355 l 1.35,-0.121 V 784.102"
            />
            <path
              id="path3554"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2879.46,776.797 -1.43,0.351 V 938.84 l 1.43,-0.137 V 776.797"
            />
            <path
              id="path3556"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2912.37,769.094 -1.53,0.351 v 166.289 l 1.53,-0.14 v -166.5"
            />
            <path
              id="path3558"
              style={{
                fill: "#579db8",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2714.01,816.113 23.75,107.129 25.85,-32.058 26.58,24.898 27.95,-33.121 93.47,-14.082 -0.31,-98.891 -197.29,46.125"
            />
            <path
              id="path3560"
              style={{
                fill: "#f4a24b",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2911.54,835.887 -0.27,-65.899 -197.26,46.125 24.31,78.879 25.29,-61.594 26.58,53.778 27.95,-4.215 29.49,-35.664 63.91,-11.41"
            />
            <path
              id="path3562"
              style={{
                fill: "#f4a24b",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2811.44,780.289 2.23,-0.203 c 1.09,-0.113 2.21,-0.32 3.29,-0.547 l 0.31,-0.098 c -2.5,1.946 -7.44,5.528 -7.74,3.524 -0.13,-0.785 0.18,-1.871 0.64,-2.949 l 1.27,0.273"
            />
            <path
              id="path3564"
              style={{
                fill: "#f4a24b",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2824.58,768.027 c -1.47,0.282 -3.07,0.496 -4.48,0.25 1.26,-0.839 2.53,-1.664 3.81,-2.402 l 1.82,-1.012 0.77,-0.457 1.3,1.621 c -0.03,1.668 -2.3,1.813 -3.22,2"
            />
            <path
              id="path3566"
              style={{
                fill: "#f4a24b",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2827.36,769.988 -0.73,1.379 0.14,0.145 0.74,-1.414 z m -2.05,2.961 h -0.06 l -0.93,1.344 0.93,0.84 0.06,-0.016 0.93,-1.297 z m -2.72,-0.39 -0.07,0.015 -0.91,1.289 0.91,0.879 0.07,-0.015 0.89,-1.34 z m -2.84,-0.094 -0.07,0.012 -0.9,1.312 0.9,0.844 0.07,-0.016 0.91,-1.301 z m -1.61,-2.957 -1.2,0.539 0.04,0.211 1.24,-0.539 z m -1.37,3.195 -0.91,1.309 0.91,0.84 0.06,-0.02 0.9,-1.289 -0.9,-0.867 z m -2.52,0.07 -0.09,0.036 -0.89,1.273 0.89,0.867 0.09,-0.027 0.88,-1.301 z m -3.7,0.391 c -3.34,-0.367 -5.31,1.813 -5.31,1.813 0.36,1.445 2.15,3.089 2.15,3.089 0.89,-1.293 3.86,-2.078 3.86,-2.078 0.37,-1.117 -0.7,-2.824 -0.7,-2.824 z m 22.09,-0.488 -1.34,1.785 h -0.02 v 0.082 l -0.02,0.059 -0.31,1.961 c -0.33,1.269 -0.88,2.394 -1.98,1.847 l -1.73,-1.543 -2.29,-0.082 -0.28,0.082 -0.89,0.348 c -1.26,0.402 -2.51,0.773 -3.78,1.121 -2.41,0.754 -4.79,1.48 -7.18,1.68 -2.11,0.191 -3.8,-0.278 -5.35,-1.524 l -1.6,-1.859 -0.41,-0.703 -0.1,-0.137 c -0.48,-1.117 -0.88,-2.348 -0.81,-3.621 0.51,-1.024 1.6,-1.578 2.48,-2.004 1.53,-0.684 3.23,-0.895 4.8,-1.145 2.71,-0.476 5.43,-0.714 8.11,-0.714 l 1.73,-1.075 c 2.64,-1.574 5.15,-3.425 7.92,-4.621 1.38,-0.609 2.16,-0.175 1.3,1.543 -0.67,1.36 -1.49,2.633 -2.31,3.887 l -0.55,0.937 2.14,0.059 0.82,0.094 1.44,0.14 0.1,0.04 0.11,0.015 0.09,-0.015 1.4,0.492 c 0.61,0.937 -0.82,2.238 -1.49,2.871"
            />
            <path
              id="path3568"
              style={{
                fill: "#f4a24b",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2820.24,763.191 -0.4,1.887 0.73,-0.988 -0.05,-0.539 z m -0.73,0.922 0.18,1.215 0.02,-0.039 0.42,-2.039 z m -0.42,1.371 0.45,-0.086 -0.14,-1.035 -0.28,0.981 z m -0.01,0.11 -0.09,0.937 0.03,0.403 0.55,-1.407 z m 0.23,2.09 h 0.06 l 0.19,0.011 0.11,-1.992 -0.02,-0.039 -0.6,1.473 0.03,0.14 z m 0.44,-0.032 0.49,-1.039 -0.49,-0.691 -0.1,1.762 z m 0.09,-2.293 0.71,-0.109 0.04,-0.941 -0.59,0.746 -0.2,0.304 v 0.012 z m 0.7,0.051 -0.55,0.106 h -0.21 v 0.027 l 0.53,0.859 z m 2.92,0.481 c -1.24,0.75 -2.46,1.511 -3.64,2.339 l -0.19,-0.015 h -0.02 l -0.04,-0.016 -0.48,-0.359 -0.24,-0.516 c -0.3,-1.156 -0.02,-2.902 0.8,-4.047 l 0.7,-0.433 c 1.74,-0.344 3.43,0.594 4.91,1.129 l 0.9,0.297 -2.7,1.621"
            />
            <path
              id="path3570"
              style={{
                fill: "#579db8",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2758.96,783.082 0.06,0.152 -1.26,0.332 h -0.02 l -1.81,0.465 -0.44,3.133 -0.03,0.258 -0.02,0.074 -1.46,0.375 -0.52,3.113 -0.04,0.246 -0.02,0.075 -3.13,0.781 -1.01,1.734 -0.23,4.375 -0.31,0.059 -0.13,0.039 v 0.965 0.152 l -0.11,0.031 -0.12,0.039 -0.37,0.086 v -0.171 -0.793 -0.11 -0.054 l -0.39,0.097 -0.15,0.035 v 1.293 0.164 l -0.11,0.02 -0.14,0.023 -0.61,0.153 v -0.153 -1.125 -0.129 -0.031 l -0.46,0.121 h -0.01 -0.01 l -0.49,-0.754 -0.48,-0.808 -0.47,-0.781 -0.24,-0.372 -0.24,-0.382 0.13,0.195 -0.8,-1.277 -0.29,-0.489 -0.21,-0.336 -6.23,1.555 -0.24,0.945 -0.17,0.036 -0.23,0.07 -0.72,0.172 v 0.172 l -0.12,0.031 v 0.922 l 0.02,-0.172 0.22,-0.047 0.59,-0.203 h 0.34 0.01 l 0.01,0.09 0.09,1.129 -0.51,0.226 h -0.01 l -0.1,-0.012 -0.01,-0.015 -0.14,-0.031 h -0.23 l -0.28,0.207 -0.01,0.043 -0.05,-0.028 v -2.097 l -0.11,0.039 v -0.18 l -0.44,0.113 -0.28,-0.738 -0.03,-0.074 -2.06,0.508 -0.05,-0.161 -0.03,-0.125 -0.52,-2.097 -0.13,-0.418 -0.05,-0.235 -1.6,0.407 -0.03,-0.145 -0.04,-0.141 -0.52,-1.98 -2.96,0.766 -0.07,0.015 h -0.18 l -0.02,-0.015 h -0.02 v -0.016 -0.016 -0.734 l 0.1,-0.031 v 0.726 h 0.04 l 0.1,-0.023 0.05,-0.016 0.81,-0.207 v -0.734 l 0.08,-0.024 v 0.727 l 1.17,-0.297 v -0.726 l 0.08,-0.016 v 0.726 l 0.8,-0.195 -0.04,-0.113 -0.03,-0.106 0.01,-0.019 -0.13,-0.469 -3.19,0.809 0.24,-0.184 0.01,-0.016 0.12,-0.113 0.08,-0.062 0.06,-0.075 0.11,-0.097 0.11,-0.11 0.11,-0.125 0.12,-0.105 h 0.01 l 0.12,-0.148 0.12,-0.102 0.02,-0.027 0.1,-0.114 0.12,-0.144 0.14,-0.133 0.1,-0.145 0.13,-0.144 0.13,-0.117 0.12,-0.16 0.12,-0.145 0.11,-0.141 0.12,-0.152 0.11,-0.109 v -0.032 l 0.13,-0.14 0.1,-0.141 0.13,-0.168 0.1,-0.097 0.13,-0.172 0.07,-0.09 0.04,-0.059 0.11,-0.168 0.04,-0.027 0.04,-0.059 0.13,-0.175 0.06,-0.09 0.02,-0.024 0.15,-0.195 1.03,-1.441 0.1,-0.125 1.02,-1.188 24.58,-6.41 0.64,0.391 c 0.11,0.226 1.14,2.753 1.62,3.964 l 0.23,0.516"
            />
            <path
              id="path3572"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2770.7,783.082 h 1.32 c 0.15,-0.926 0.75,-1.5 1.79,-1.766 l 1.08,0.059 0.4,0.734 -0.19,0.719 -0.73,0.656 -1.43,0.832 -1.07,0.778 -0.56,0.953 -0.21,1.156 0.72,1.711 1.92,0.258 1.71,-0.91 0.95,-1.664 -1.27,-0.063 -1.37,1.356 -0.96,-0.078 -0.32,-0.708 1.02,-1.316 1.27,-0.723 1.56,-1.375 0.39,-1.593 -0.83,-1.848 -2.15,-0.219 -1.94,1.051 -1.1,2"
            />
            <path
              id="path3574"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2782.4,777.977 -1.25,0.32 v 4.316 l -0.25,1.039 -0.59,0.438 -0.91,-0.281 -0.36,-1.571 v -3.41 l -1.25,0.309 v 8.89 l 1.25,-0.312 v -3.465 l 1.63,1.035 c 1.15,-0.305 1.73,-1.215 1.73,-2.769 v -4.539"
            />
            <path
              id="path3576"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2785.18,777.258 -1.27,0.328 v 6.613 l 1.27,-0.304 z m 0,7.418 -1.27,0.304 v 1.536 l 1.27,-0.317 v -1.523"
            />
            <path
              id="path3578"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2788.01,779.25 0.36,-1.273 0.83,-0.692 0.87,0.406 0.3,1.528 -0.3,1.707 -0.84,0.84 -0.87,-0.293 -0.35,-1.266 z m 0,-4.941 -1.29,0.324 v 8.89 l 1.21,-0.304 v -1.168 l 1.73,0.855 1.5,-1.336 c 0.38,-0.734 0.57,-1.597 0.57,-2.593 0,-0.957 -0.17,-1.719 -0.55,-2.344 l -1.59,-0.645 -1.58,1.469 v -3.148"
            />
            <path
              id="path3580"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2852.6,763.738 -1.25,4.539 -1.24,-3.914 z m 2.76,-4.355 -1.67,0.418 -0.66,2.437 -3.31,0.825 -0.67,-2.079 -1.32,0.344 2.82,8.762 1.91,-0.469 2.9,-10.238"
            />
            <path
              id="path3582"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2857.77,758.77 -1.45,0.378 v 7.075 l 1.45,-0.375 z m 0,7.918 -1.45,0.359 v 1.637 l 1.45,-0.356 v -1.64"
            />
            <path
              id="path3584"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2860.96,757.961 -1.45,0.375 v 7.082 l 1.31,-0.324 v -1.703 l 0.77,1.254 1,0.218 0.19,-0.05 v -1.735 l -1.46,-0.406 -0.36,-1.43 v -3.281"
            />
            <path
              id="path3586"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2865.27,759.766 0.42,-1.391 0.95,-0.746 1.02,0.406 0.33,1.66 -0.34,1.821 -0.98,0.922 -1.01,-0.297 -0.39,-1.34 z m 0,-5.321 -1.5,0.387 v 9.531 l 1.4,-0.363 v -1.23 l 2,0.882 1.72,-1.457 c 0.43,-0.808 0.65,-1.73 0.65,-2.804 0,-1.016 -0.2,-1.84 -0.63,-2.496 l -1.83,-0.668 -1.81,1.621 v -3.403"
            />
            <path
              id="path3588"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2872.38,755.035 -1.48,0.391 v 9.652 l 1.48,-0.359 v -9.684"
            />
            <path
              id="path3590"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2878.17,757.258 c -1.93,0.476 -2.89,0.199 -2.89,-0.797 l 0.29,-0.824 0.88,-0.563 1.29,0.289 0.43,1.2 z m 1.67,-4.106 -1.43,0.36 -0.24,1.508 c -0.4,-0.95 -1.14,-1.329 -2.23,-1.043 l -1.6,1.043 -0.59,1.75 c 0,1.64 1.33,2.125 3.99,1.453 l 0.43,-0.121 v 0.558 c 0,0.731 -0.47,1.238 -1.41,1.469 l -1.54,-0.738 -1.27,0.523 0.84,1.266 c 0.51,0.261 1.23,0.293 2.18,0.062 l 1.25,-0.472 0.82,-0.676 0.47,-0.86 0.14,-1.312 v -3.266 l 0.19,-1.504"
            />
            <path
              id="path3592"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2887,751.32 -1.52,0.391 v 4.547 l -0.31,1.156 -0.75,0.531 -1.02,-0.297 -0.44,-1.593 v -3.703 l -1.52,0.394 v 7.211 l 1.37,-0.332 v -1.68 c 0.49,1.09 1.16,1.539 2.03,1.321 l 1.52,-0.985 c 0.44,-0.492 0.64,-1.258 0.64,-2.265 v -4.696"
            />
            <path
              id="path3594"
              style={{
                fill: "#9b8857",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2893.05,754.277 -0.43,1.418 -1.1,0.766 -1.05,-0.203 -0.49,-1.207 z m 0.09,-2.207 1.39,-0.519 -1.05,-1.399 -1.97,-0.14 c -0.95,0.23 -1.7,0.785 -2.27,1.609 -0.56,0.813 -0.86,1.793 -0.86,2.965 0,1.094 0.3,1.934 0.89,2.512 0.57,0.566 1.35,0.734 2.34,0.5 0.97,-0.243 1.73,-0.801 2.25,-1.641 0.53,-0.84 0.81,-1.84 0.81,-2.949 v -0.184 l -4.69,1.184 0.13,-1.235 0.51,-0.906 0.99,-0.578 1.53,0.781"
            />
            <path
              id="path3596"
              style={{
                fill: "#d8363c",
                fillOpacity: 1,
                fillRule: "nonzero",
                stroke: "none"
              }}
              d="m 2563.91,988.859 -52.62,3.711 v 21.73 l 52.62,-2.27 9.25,-12.44 -9.25,-10.731"
            />
            <g id="g3598">
              <g clipPath="url(#clipPath3604)" id="g3600">
                <g transform="matrix(332.2,0,0,102.2,1991.9,1034.9)" id="g3606">
                  <image
                    id="image3608"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAAqCAYAAABsm8OKAAAABHNCSVQICAgIfAhkiAAADbRJREFUeJztnHl4VNXdxz9z79zZsidkshGWoCACCagFfKULIosstloaBZVaylsEaSE8+goUVNbgI0812LKI0ipa3pcqi5S4IGitrRgoyGYQSNgzIXsmmcls9877x51MMpAhgZDFdj7Pw3Pu3Ps95/zOub/cs9zfRXPwqz1eQoRoBgHAfiGP8uxfUFd0uMMMsf3hCWyvPtFh9Ye4NloAafcfMHQF9vwOxXehzqoBQBd2Yw8cl03TrKZx2bowqCoQCbuh2kK0Ndr6A2uhyK19G93c+KYz6MPULHVlziavG7voA/LbS90B1x1WGWNUfT0aHDbVWU6eEdEZrtP6EO2G31GcVg3HvmpJFo8vFZu5Xs+VTxYtTaGeDU2XOiv+uxan0XCiVmFRlIIgCby3bOM1Mz747BNoBA1eRb25ik1BCBMQJAHFrfjTFmk08EqViNHUhi0N0Sr8jnLerfBbrQddUiQR480Uzp4aNFOW7EEIEzBN6I5tx1mkgWac/yhG7B6F+5tKpGQj7qI6VTO2G7a/nkObbsb1ZTFiahTuE5VIiUbcxT7N/d2YU2hnfWFFuzQ6xPXjd5Te4RrWWyWeKrNT9bmVtJzgT5QdwI9nTcFxpArFpqAU2dQLJTa0g+KRj5eiHRSP51ApdUerUWwKXkutqinzaY420hy38sqRmqDzohAdT8CEYcD3Hfxd50Xpew5h+2SU3m7Kbv9Lkxl3/P4tAMzbJ+OVKiBVQKOzo/SpRoiTUPqcR4iToGsRJGtBU4W3m6ZJjTfZwr+OhLd9a31IE2eQ5DBjMZQA4H53bbvVHcwewG9TMHteLN8c8PvZuEkATHpm31XazS8NbZU9SQ4zgN8ev6OcrPUyBHBNsiO9GYYywIU8fgKF44MPQQDm4eCY4cWwCpxP1qJbHYHnXgfiXgPovLh+1h/pxW+pe9qNcZWEc1otujUReH7gRPxcr2oe7s3tE7/hzM+jbrhxAIkvqB0Z2b+f/5z12HEASu7ZxW1TREoLrZzGTFKramoZ4Q/NASDW1dCuCl01APYZZQH2dFG3tK7i+X+aG/J6XXS9TQdAv1V9KdH7huqaYohIbNae1vSP31G6agX+tdfAoH5uHE/XYFgVgWf0u6TlvH/Nyr1bHkUodQBhCId0lGa+Q5edk/1lyHUHkIhALHZRmrmFmIMTKc18h/itDRql7jAHx8YTkxJa9XRWrlqrbpinZ1jiBr7YNAvHmxEYhMcBeGjnpiYLKM18B+qATNg64XGG/amara+JONZFYBAEXxkCbIrgoZ3wxlNGVfNHEccbDZq7Etq0nd8Zjgv3E/1CBUkZaofc+uUhTv1kUAdb1chRLnoU9l1wMlQfzSdTZhKv1TJTezdrPF8yU+mL+8cL2N+jOGhB+047GaWP5+MpM+ml01PgUjfk5gp3sIaveVRI441xjzJCH8cnU2bSQ9JxVnGpGs1AairKOJtS2qzBjcfpAV17+Y+PXixgtHyBMWLq9fdCK/n5588BYOjesLfkOCfzpOxgpNi+u4i6Cbk+m3KvsidLDr/h/gkYeurJkobytvcAXrkOh6Ju6pfvWEHaNQraN+7RgN9Z0mDWygdUIxWFxkNwljSYbXxNlnYwaxVVcyi2jJgbakKI9sDvKCaDl/RUPS+lvIDi9iBIj7AVgCn8HVCesyBIWtYuanoNO3nXO2oKzFhayka3B0GazO5GZSyeqeP5NS4Wz9SxaY2LTb4cu4H5l+a1WSP/HejeL4GKYx1Xf8Cq51XzcsITo6m9UIaolzA/dCeWzftIvK8fRR8cJqp/KotPJPL42nuDFvhi1HJ0seG4KtR9k8RxGRTvOkzMnT1ZlHOK8FuSWJRjQRcdhqvKhiBpSRybwdpLm5m7/5G2b3EnpX45Goxzxy+3kyVN43eUbpI6NnhcHhLHZFD6WT7ui5Uobg/OSjsAss2J+2LVNTfj1gO/fqmKhFHplH76DXJ1HYrbg2xX5yNeh5uEUelU/PMUCfcNoPRv+Xgq7czInRTacOvEBCzeF1cuxPa3N3mqzylcX/8Fy5oVyCd2UPKnVaxfkkTl+2tZdl8V0zLXUVJeHbTQV5+JZsmwUtxH36NobTbrlyRRvmU165ckYf3kDWb1PY3jwP8yq18B7qPvYXltJQD60NvjTkvAu54VlweTYLyLBTM2YxBN9Oo2goLze+iR9EOmZa6jV+y9TMtch9k4kD+vsvGAPStowSssgzGIJnp2Hc6sSW9xq3kk0zLXkWL8LxbM2Ey4LsFfT1rKcN5yjuQ3LG+XRoe4fq7aDgzXRwAQJnXFYFB3AXX1aYRR1UjRSHrpmgUvSMoDQK+XcMh2dOHq48IUoYYmhYkpfK/fTwHQ6iUmC//ZTlL/OqGzEjBHeSl1P328eRzLfpn+y7OgBkgCHJ9RsmUj5rlT/emxX79Mf9+9Lfld03OW3/tS89w8cOU15F3rK7/aV37dZxxwagjFo3ReAoaeoSJoEmX6L89CE+bF/T0nui/1uNPdmOdOxdtHTTVmVSMYvLiHOK8ZkgCQaPLi6eVR86Z61PKjFLzVAoLei3uQi0HlImcqmg5qCtExNH7K+Yee+lWPolf/qjVaL4JZRnFqINwXSWtQr3kNXjw/s+PVedGYFZpDcWrw+uJjFV+kJFpQHvaFJ0Qp7D8RcpLOTMDdOeLW8PWx55FlBbFGQH5NQRQFeB/13BcCYzb04sP/LkA+ol6TN/g0wJgNvZqspN4vS0ZVc3BeGXes7MLBeWXwuu/Cu3C7uILQ0NN5CRh68m3zSTRIFMtO9BqBjL4J5J28THpcBIdKqulh1LNr6ikSDDouyy70aEjvk8j+0yUMiAnnfFYRHmVh0Mrya+aTatSz/5kSIiUtVrcHURQY2DUGe/li4Ln2aHOIGyBgMpsPKF4vg7rGkl9URV2FHVlWcLtkAGSfVvZpjluqcPg0slum28vJQPDNuPypp3B5YWB8JKcqbWR0ieRYZS2uGhda1/Nt2MwQ18uVq7CAoae7LpvlDyQjOxTEuwNXzrJDQTQIbL5/GZM+WNi0ZpuqyRn8DOa4q4OQxm281X/89AcL0Qjg9U1xXtzRqnb9W3DlzbEc7tht+8YEDD1LRieSmCFS/JWCLkpk/D3lbM2NZvSoWnLfN5H+Qw+Z2xaQcJfE5QMKkklgwo8q2ZobxYiRNj7eaeT2H8h8FraQu2bbglY670eJRN6iw3rahWgQGDfGyvZ7Y5i87D8ruLq00NrRJrQYv6Mk+RZAnjoNYx6oY+/nIpUuHbJDocajymo9WkDBbVc1e/aGUeGSkB0KNlnV2DxaKt3SNd8HbQEmf7KI4eOdfPpXPRaHgYezytv1XU97bnBV6KoDwiG/iwQMPav3Xub/8pYyNTuZmo+L+NXwZH71IOTML2JLdjI584tY7kunZidTs7eI6SOTmX6FZrovnZ2dHLTiP9+3FABXXhHkgVtedNMaNeJCD/9xrb2C3SYLAJ7Vkegr5CC52o4Hb/kJ4Ul3qPZYDrLt9HYA9G81/wFtrvM0mg8cANyZUchw3/bCocJYLonqTnk/MYrjES23Z0heRYM9jfrH+oKMPshHvX5HsaCwM3wZWlEkZ34RokbDhpVVOK11GMMM5MwvQqeTyJlfhFYUWqTZsLKKEZa5QQ3eaVqGqNGgC9OTq8tmktJ8TMqoMyf8x+Pq1KFqV3EJSYA11QpFqdRaDvo7Ihira9TJ0W8img5qvh7mmNSvIceJXfzndplKqBlnhA9btuSvt+c2fQW2k6VUl9upLbe1+Cn72E//CECytiHI+kp7rKkWKGpZhNuV/XNVL2n1avicRhDI6K/GYscnRgIghavurJW0fk16P9WwLvWaMPW9kCiJDBvSrUVGpXaPxRhpbJG2NdgrKtu8js7IruLWD7N+R+mh0zDFtQiH3cWkp8PwyDI97i4m9+TrnCssZXZ2MraKWmZnJ+NwNGgWv/lbck++zvl6TaWN2dnJOB1u4tIvMOtST2Zd6klazsar/s3OTkb2evk238KY03Na3ZiOpv6G3IwbczO4mXb4h56zLi+zLvUkussRPpq+H0kyUbBmCpJk4ltBYezEpcSmPsLYiUuJihvER9MPIUkmbkmfzrn8TZzQ+DQpmYyduJTI2AF8NP0okmSie9/Hg74PmuBLXTpoSTjKxz1vazhGDbA+aiwAYPSOCyDCbpOFyNSzAFirLX69c4pvJbY77KYMOfW8Ym8YXtbJZTh8v5/cVQeigW2ntxP7zadAw3c9wew5LsQS3TuepIwEdXlcGTygvTFvv/cLoCG4uil7si4k3XD/XNVbmjB1r8MYnoY+Rp3YGCPVNDpGnbmLpj4AGEwp6GPCcbvtGKN8mthoACSDekN1BjO66I75X0/qP276LnHJUcGlk6Wc2HuGSyeb/yqhvVCfKDUaUtMUdqQVAEuhG0AByDtgKMAc+D7A//jS5dDDp1E+9J2r1zzrS1dCL5/Gu4drhvADEd1Vn9WF67DWulrdsI5yEse5pldVjZ8kLaG2XP3rHlIWRcXDdwNwxvsF7p6+LwXTEkjRqzPd48X5QNNzvGD2XG//aA3bp2LofvMew63F9fZjRD72doud5ejFgja2qH1JMahDTz1x9jo6wzakVjDp6Taod0fb4ef8oZN4tv4SRnXsh+MhAtEMu2dY6N1+iGbpPGNOiE5NyFFCtIiQo4RoEf8PwvN+2q2o6DUAAAAASUVORK5CYII="
                    transform="matrix(1,0,0,-1,0,1)"
                    preserveAspectRatio="none"
                    style={{ imageRendering: "optimizeSpeed" }}
                    height={1}
                    width={1}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

ClassRoom.propTypes = {
  tasks: PropTypes.array
};
