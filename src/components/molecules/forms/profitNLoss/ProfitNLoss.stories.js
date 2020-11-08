import React from 'react';
import ProfitNLoss from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Profit N Loss',
  component: ProfitNLoss,
};

const Template = (args) => <ProfitNLoss />;

export const profitNLossForm = Template.bind({});

profitNLossForm.args = {
  /* the args you need here will depend on your component */
};