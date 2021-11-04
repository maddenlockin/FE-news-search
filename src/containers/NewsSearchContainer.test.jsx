import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsSearchContainer from './NewsSearchContainer';

describe('NewsSearchContainer', () => {
    it('should display list of articles based on search term', async () => {
        render(<NewsSearchContainer />);
    
    screen.getByText('READ ALL ABOUT IT');
    });
});