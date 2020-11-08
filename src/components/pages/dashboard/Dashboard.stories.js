import React from 'react';
import DashBoard from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'DashBoard',
  component: DashBoard,
};

const Template = (args) => <DashBoard />;

export const DashBoardPage = Template.bind({});

DashBoardPage.args = {
  /* the args you need here will depend on your component */
};