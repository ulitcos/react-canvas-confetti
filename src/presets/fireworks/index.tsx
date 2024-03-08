import React from "react";
import { TPresetInstanceProps } from "../../types";
import Preset from "../index";
import FireworksConductor from "../../conductor/fireworks";

function Fireworks(props: TPresetInstanceProps) {
  return <Preset Conductor={FireworksConductor} {...props} />;
}
export default Fireworks;
