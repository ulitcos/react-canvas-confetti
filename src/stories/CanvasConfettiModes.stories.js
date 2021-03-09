import React from 'react';
import Fireworks from './Fireworks';
import RealisticConfetti from './RealisticConfetti';
import SchoolPride from './SchoolPride';
import Snow from './Snow';

export default {
	title: 'CanvasConfettiModes',
	component: Fireworks, RealisticConfetti,SchoolPride, Snow
}

export const FireworksStory = ()=> <Fireworks/>;
FireworksStory.storyName = 'Fireworks';
export const RealisticConfettiStory = ()=> <RealisticConfetti/>;
RealisticConfettiStory.storyName = 'RealisticConfetti';
export const SchoolPrideStory = ()=> <SchoolPride/>;
SchoolPrideStory.storyName = 'SchoolPride';
export const SnowStory = ()=> <Snow/>;
SnowStory.storyName = 'Snow';