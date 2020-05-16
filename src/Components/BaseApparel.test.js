import React from "react";
import {render, fireEvent} from '@testing-library/react';
import BaseApparel from "./BaseApparel";


it('should diplay an error message if the email is empty when submitting the form', async () => {
    const {getByLabelText, findByText} = render(<BaseApparel/>);
    fireEvent.click(getByLabelText('submit'));

    expect(await findByText('The email field is empty')).toBeInTheDocument();
});

it('should display an error message if the email is wrong when submitting the form', async () => {
    const {getByLabelText, findByText} = render(<BaseApparel/>);

    fireEvent.change(getByLabelText('email'), {target: {value: 'email.com'}});
    fireEvent.click(getByLabelText('submit'));

    expect(await findByText('Looks like this is not an email')).toBeInTheDocument();
});

it('should not display any error message if the email is well filled when submitting the form', () => {
    const {getByLabelText, queryByText} = render(<BaseApparel/>);

    fireEvent.change(getByLabelText('email'), {target: {value: 'email@address.com'}});
    fireEvent.click(getByLabelText('submit'));

    expect(queryByText('Looks like this is not an email')).not.toBeInTheDocument();
    expect(queryByText('The email field is empty')).not.toBeInTheDocument();
});
