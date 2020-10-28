import React from 'react';
import Button from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button />;

export const Primary = Template.bind({});

Primary.args = {
  /* the args you need here will depend on your component */
};
