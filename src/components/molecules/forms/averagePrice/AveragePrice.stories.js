import React from 'react';
import AveragePrice from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Average Price',
  component: AveragePrice,
};

const Template = (args) => <AveragePrice />;

export const averageForm = Template.bind({});

averageForm.args = {
  /* the args you need here will depend on your component */
};
