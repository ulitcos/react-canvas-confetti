import React from "react";
import { TPresetInstanceProps } from "../../types";
import Preset from "../index";
import RealisticConductor from "../../conductor/realistic";

function Realistic(props: TPresetInstanceProps) {
  return <Preset Conductor={RealisticConductor} {...props} />;
}
export default Realistic;
