import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["FB56-ZCW11HG1.2", "FB56-ZCW11HG1.4"],
        model: "HGZB-07A",
        vendor: "Smart Home Pty",
        description: "RGBW Downlight",
        extend: [m.light({colorTemp: {range: undefined}, color: true})],
    },
    {
        zigbeeModel: ["FNB56-SKT1EHG1.2"],
        model: "HGZB-20-DE",
        vendor: "Smart Home Pty",
        description: "Power plug",
        extend: [m.onOff()],
    },
];
