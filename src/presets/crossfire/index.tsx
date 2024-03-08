import React from "react";
import { TPresetInstanceProps } from "../../types";
import Preset from "../index";
import CrossfireConductor from "../../conductor/crossfire";

function Crossfire(props: TPresetInstanceProps) {
  return <Preset Conductor={CrossfireConductor} {...props} />;
}
export default Crossfire;
