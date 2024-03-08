import React from "react";
import { TPresetInstanceProps } from "../../types";
import Preset from "../index";
import PhotonsConductor from "../../conductor/photons";

function Photons(props: TPresetInstanceProps) {
  return <Preset Conductor={PhotonsConductor} {...props} />;
}
export default Photons;
