import {getPx} from './getPx';

export const baseEchartOptions = {
    textStyle: {
        fontSize: getPx(12),
        color: '#79839E'
    },
    title: {show: false},
    legend: {show: false},
    grid: {
        x: getPx(40),
        y: getPx(40),
        x2: getPx(40),
        y2: getPx(40),
    },
};