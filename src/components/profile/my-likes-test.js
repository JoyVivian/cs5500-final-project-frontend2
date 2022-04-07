import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyLikes from './my-likes';
import findfindAllTuitsLikedByUser from "../../services/likes-service";

test('service.findfindAllTuitsLikedByUser is called', () => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    jest.spyOn(findfindAllTuitsLikedByUser);
    render(<MyLikes />);

    expect(service.findfindAllTuitsLikedByUser).toHaveBeenCalledTimes(1);
});