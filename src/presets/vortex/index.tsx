import React from "react";
import { TPresetInstanceProps } from "../../types";
import Preset from "../index";
import VortexConductor from "../../conductor/vortex";

function Snow(props: TPresetInstanceProps) {
  return <Preset Conductor={VortexConductor} {...props} />;
}
export default Snow;
