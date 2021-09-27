import { render, screen } from '@testing-library/react';
import React from 'react';
import Carditemsvideo from './Carditemsvideo.component';

describe('navbar', () => {
  beforeEach(() => {
    const videos = [
      {
        etag: 'test',
        snippet: {
          title: 'Wizeline',
          description: 'Pruebas',
          thumbnails: {
            high: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
            },
          },
        },
      },
    ];

    render(<Carditemsvideo videos={videos} />);
  });

  test('should contains a title', () => {
    const title = screen.queryByText('Wizeline');
    expect(title).toBeInTheDocument();
  });

  test('should contains a img', () => {
    const img = screen.queryByText('Pruebas');

    expect(img).toBeInTheDocument();
  });
});