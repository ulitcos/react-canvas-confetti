import React from "react";
import { TPresetInstanceProps } from "../../types";
import Preset from "../index";
import PrideConductor from "../../conductor/pride";

function Pride(props: TPresetInstanceProps) {
  return <Preset Conductor={PrideConductor} {...props} />;
}
export default Pride;
