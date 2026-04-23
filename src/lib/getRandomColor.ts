import randomColor from 'randomcolor';
import { hueOptions, luminosityOptions } from '../lib/type';

export function getRandomColor(
    hueValue: (typeof hueOptions)[number]['value'],
    luminosityValue: (typeof luminosityOptions)[number]['value'],
) 
{
    return randomColor({
            hue: hueValue,
            luminosity: luminosityValue,
            });
}
