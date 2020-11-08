import React from 'react';
import AdminPanelTemplate from './index';

// This default export determines where your story goes in the story list
export default {
  title: 'AdminPanelTemplate',
  component: AdminPanelTemplate,
};

const Template = (args) => <AdminPanelTemplate />;

export const adminPanelGrids = Template.bind({});

adminPanelGrids.args = {
  /* the args you need here will depend on your component */
};
