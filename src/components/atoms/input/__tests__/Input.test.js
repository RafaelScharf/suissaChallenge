import React from "react"
import { render, screen } from '@testing-library/react';

import Input from "../index"

describe('Atom input', () => {
  test('renders inpu component', () => {
    render(<Input />);
    screen.debug();
  });

})

