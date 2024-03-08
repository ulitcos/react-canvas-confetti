import React from "react";
import { TPresetInstanceProps } from "../../types";
import Preset from "../index";
import SnowConductor from "../../conductor/snow";

function Snow(props: TPresetInstanceProps) {
  return <Preset Conductor={SnowConductor} {...props} />;
}
export default Snow;
