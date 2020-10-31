import React from 'react';
import Calculator from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Calculator',
  component: Calculator,
};

const Template = (args) => <Calculator />;

export const calculatorForm = Template.bind({});

calculatorForm.args = {
  /* the args you need here will depend on your component */
};
