import React from "react";
import ExplosionConductor from "../../conductor/explosion";
import Preset from "../index";
import { TPresetInstanceProps } from "../../types";

function Explosion(props: TPresetInstanceProps) {
  return <Preset Conductor={ExplosionConductor} {...props} />;
}
export default Explosion;
